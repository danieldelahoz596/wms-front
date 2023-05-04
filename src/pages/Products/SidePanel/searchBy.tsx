import { OButton } from '@/components/Globals/OButton';
import { FormattedMessage, useModel } from '@umijs/max';
import { Form, Input, Select } from 'antd';
import { useMemo } from 'react';

const SearchByPanel = () => {
  const { brands } = useModel('brand');
  const { categories } = useModel('category');
  const { labels } = useModel('label');
  const { tags } = useModel('tag');
  const { getProductList } = useModel('product');
  const [form] = Form.useForm();

  const brandOptions = useMemo(() => brands.map((item) => ({ value: item.id, label: item.name })), [brands]);
  const categoryOptions = useMemo(() => categories.map((item) => ({ value: item.id, label: item.name })), [categories]);
  const labelOptions = useMemo(() => labels.map((item) => ({ value: item.id, label: item.name })), [labels]);
  const tagOptions = useMemo(() => tags.map((item) => ({ value: item.id, label: item.name })), [tags]);

  const handleReset = () => {
    form.resetFields();
  };

  const handleSearch = () => {
    form.validateFields().then((values) => {
      if (values.brand_id) values.brandIds = [values.brand_id];
      if (values.category_id) values.categoryIds = [values.category_id];
      if (values.label_id) values.labelIds = [values.label_id];
      if (values.tag_id) values.tagIds = [values.tag_id];

      getProductList(values).then(() => {});
    });
  };

  return (
    <>
      <Form layout="vertical" form={form}>
        <Form.Item label="Product Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="SKU" name="sku">
          <Input />
        </Form.Item>
        <Form.Item label="UPC" name="upc">
          <Input />
        </Form.Item>
        <Form.Item label="MPN" name="mpn">
          <Input />
        </Form.Item>
        <Form.Item label="Brand" name="brand_id">
          <Select options={brandOptions} />
        </Form.Item>
        <Form.Item label="Category" name="category_id">
          <Select options={categoryOptions} />
        </Form.Item>
        <Form.Item label="Label" name="label_id">
          <Select options={labelOptions} />
        </Form.Item>
        <Form.Item label="Tag" name="tag_id">
          <Select options={tagOptions} />
        </Form.Item>
      </Form>
      <div className="search-button-row space-between">
        <OButton btnText={<FormattedMessage id="component.button.clear" />} onClick={handleReset} />
        <OButton btnText={<FormattedMessage id="component.button.search" />} onClick={handleSearch} />
      </div>
    </>
  );
};

export default SearchByPanel;
