import { OButton } from '@/components/Globals/OButton';
import { OInput } from '@/components/Globals/OInput';
import { FormattedMessage, useModel } from '@umijs/max';
import { Card, Checkbox, Form, Space } from 'antd';
import React from 'react';

const SearchByPanel: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { fieldTypes } = useModel('customProductFields');
  const { initialData } = initialState;

  const formInputs = [
    {
      type: 'text',
      label: <FormattedMessage id="component.form.label.productName" />,
      name: 'productName',
      placeholder: 'Name',
    },
    {
      type: 'text',
      label: <FormattedMessage id="component.form.label.sku" />,
      name: 'sku',
      placeholder: 'SKU',
    },
    {
      type: 'checkbox',
      label: <FormattedMessage id="component.form.label.includeRelatedBundles" />,
      name: 'includeRelatedBundles',
    },
    {
      type: 'text',
      label: <FormattedMessage id="component.form.label.vendorSku" />,
      name: 'vendorSku',
      placeholder: 'SKU',
    },
    {
      type: 'select',
      label: <FormattedMessage id="component.form.label.customFieldName" />,
      placeholder: 'Select...',
      name: 'custom_field_name',
      options: fieldTypes.map((item) => ({
        value: item.id,
        text: item.name,
      })),
    },
    {
      type: 'select',
      label: <FormattedMessage id="component.form.label.brand" />,
      placeholder: 'Select...',
      name: 'brand',
      options: initialData?.brands?.map((item) => ({
        value: item.id,
        text: item.name,
      })),
    },
    {
      type: 'select',
      label: <FormattedMessage id="component.form.label.categories" />,
      placeholder: 'Select...',
      name: 'categories',
      options: initialData?.categories?.map((item) => ({
        value: item.id,
        text: item.name,
      })),
    },
    {
      type: 'select',
      label: <FormattedMessage id="component.form.label.labels" />,
      placeholder: 'Select...',
      name: 'labels',
      options: initialData?.labels?.map((item) => ({
        value: item.id,
        text: item.name,
      })),
    },
  ];

  return (
    <Card>
      <Form layout="vertical">
        <Space direction="vertical" size={VERTICAL_SPACE_SIZE} style={{ display: 'flex' }}>
          {formInputs?.map((inputItem, index) => {
            return index !== 2 ? (
              <Form.Item key={index} label={inputItem.label}>
                <OInput {...inputItem} style={{ width: '100%' }} />
              </Form.Item>
            ) : (
              <Form.Item>
                <Checkbox>
                  <FormattedMessage id="pages.products.sidepanel.searchBy.description" />
                </Checkbox>
              </Form.Item>
            );
          })}
        </Space>
        <div className="search-button-row space-between">
          <OButton btnText={<FormattedMessage id="component.button.clear" />} />
          <OButton btnText={<FormattedMessage id="component.button.search" />} />
        </div>
      </Form>
    </Card>
  );
};

export default SearchByPanel;
