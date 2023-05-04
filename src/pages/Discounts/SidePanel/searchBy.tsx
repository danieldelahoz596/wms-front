import { OButton } from '@/components/Globals/OButton';
import { FormattedMessage } from '@umijs/max';
import { Form, Input, Select } from 'antd';

const SearchByPanel = () => {
  const [form] = Form.useForm();

  const handleReset = () => {
    form.resetFields();
  };

  const handleSearch = () => {
    form.validateFields().then((values) => {
      console.log(values);
    });
  };

  return (
    <>
      <Form layout="vertical" form={form}>
        <Form.Item label="Title" name="title">
          <Input />
        </Form.Item>
        <Form.Item label="status" name="status">
          <Select
            options={[
              { value: true, label: 'Active' },
              { value: false, label: 'Inactive' },
            ]}
          />
        </Form.Item>
        <Form.Item label="Method" name="method">
          <Select
            options={[
              { value: 'automatic', label: 'Automatic' },
              { value: 'code', label: 'Code' },
            ]}
          />
        </Form.Item>
        <Form.Item label="Type" name="type">
          <Select
            options={[
              { value: 'amountOffProducts', label: 'Amount Off Products' },
              { value: 'amountOffOrder', label: 'Amount Off Order' },
              { value: 'buyXGetY', label: 'Buy X Get Y' },
              { value: 'freeShipping', label: 'Free Shipping' },
            ]}
          />
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
