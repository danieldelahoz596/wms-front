import { OButton } from '@/components/Globals/OButton';
import { OInput } from '@/components/Globals/OInput';
import { FormattedMessage, useModel } from '@umijs/max';
import { Space } from 'antd';
import { useMemo, useState } from 'react';

const initailState = {
  name: '',
  sku: '',
  upc: '',
  mpn: '',
  brand_id: 0,
  catgory_id: 0,
  label_id: 0,
};

const SearchByPanel = () => {
  const { brands } = useModel('brand');
  const { categories } = useModel('category');
  const { labels } = useModel('label');
  const { getProductList } = useModel('product');
  const [searchQuery, setSearchQuery] = useState(initailState);

  const brandOptions = useMemo(() => brands.map((item) => ({ value: item.id, text: item.name })), [brands]);
  const categoryOptions = useMemo(() => categories.map((item) => ({ value: item.id, text: item.name })), [categories]);
  const labelOptions = useMemo(() => labels.map((item) => ({ value: item.id, text: item.name })), [labels]);

  const inputFields = useMemo(
    () => [
      {
        type: 'text',
        name: 'name',
        label: 'Product Name',
      },
      {
        type: 'text',
        name: 'sku',
        label: 'SKU',
      },
      {
        type: 'text',
        name: 'mpn',
        label: 'MPN',
      },
      {
        type: 'text',
        name: 'upc',
        label: 'UPC',
      },
      {
        type: 'select',
        name: 'brand_id',
        label: 'Brand',
        options: brandOptions,
      },
      {
        type: 'select',
        name: 'catgory_id',
        label: 'Category',
        options: categoryOptions,
      },
      {
        type: 'select',
        name: 'label_id',
        label: 'Label',
        options: labelOptions,
      },
    ],
    [brandOptions, categoryOptions, labelOptions],
  );

  const onSearch = (query) => {
    query.brandIds = [];
    query.categoryIds = [];
    query.labelIds = [];

    if (query.brand_id !== 0 && query.brand_id) query.brandIds = [query.brand_id];
    if (query.category_id !== 0 && query.category_id) query.categoryIds = [query.category_id];
    if (query.label_id !== 0 && query.label_id) query.labelIds = [query.label_id];

    getProductList(query).then(() => {});
  };

  const handleSearchQueryChange = (name: string, value: string) => {
    setSearchQuery((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearSearchQuery = () => {
    setSearchQuery(initailState);
    onSearch(initailState);
  };

  return (
    <>
      <Space direction="vertical" size={VERTICAL_SPACE_SIZE} style={{ display: 'flex' }}>
        {inputFields.map((_inputField, _index) => (
          <div key={_index}>
            <span>{_inputField.label}:</span>
            <OInput {..._inputField} value={searchQuery[_inputField.name]} onChange={handleSearchQueryChange} />
          </div>
        ))}
      </Space>
      <div className="search-button-row space-between" style={{ marginTop: 10 }}>
        <OButton btnText={<FormattedMessage id="component.button.clear" />} onClick={clearSearchQuery} />
        <OButton btnText={<FormattedMessage id="component.button.search" />} onClick={() => onSearch(searchQuery)} />
      </div>
    </>
  );
};

export default SearchByPanel;
