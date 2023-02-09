import { OButton } from '@/components/Globals/OButton';
import { OInput } from '@/components/Globals/OInput';
import { useModel } from '@umijs/max';
import { Checkbox, Col, Form, Row, Space } from 'antd';
import React from 'react';

const SearchByProductPanel: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { fieldTypes } = useModel('customProductFields');
  const { initialData } = initialState;

  const formInputs = [
    {
      type: 'text',
      label: 'Product Name',
      name: 'productName',
      placeholder: 'Name',
    },
    {
      type: 'text',
      label: 'SKU',
      name: 'sku',
      placeholder: 'SKU',
    },
    {
      type: 'checkbox',
      label: 'Include related bundles',
      name: 'includeRelatedBundles',
    },
    {
      type: 'text',
      label: 'Listing SKU',
      name: 'listingSku',
      placeholder: 'SKU',
    },
    {
      type: 'text',
      label: 'Vendor SKU',
      name: 'vendorSku',
      placeholder: 'SKU',
    },
    {
      type: 'select',
      label: 'Cutom Field Name',
      placeholder: 'Select...',
      name: 'custom_field_name',
      options: fieldTypes.map((item) => ({
        value: item.id,
        text: item.name,
      })),
    },
    {
      type: 'select',
      label: 'Brand',
      placeholder: 'Select...',
      name: 'brand',
      options: initialData?.brands?.map((item) => ({
        value: item.id,
        text: item.name,
      })),
    },
    {
      type: 'select',
      label: 'Categories',
      placeholder: 'Select...',
      name: 'categories',
      options: initialData?.categories?.map((item) => ({
        value: item.id,
        text: item.name,
      })),
    },
    {
      type: 'select',
      label: 'Labels',
      placeholder: 'Select...',
      name: 'labels',
      options: initialData?.labels?.map((item) => ({
        value: item.id,
        text: item.name,
      })),
    },
  ];

  return (
    <Form layout="vertical" style={{ margin: '0% 5% 0% 5%' }}>
      <Space direction="vertical" size={3} style={{ display: 'flex' }}>
        {formInputs?.map((inputItem, index) => {
          return index !== 2 ? (
            <Form.Item key={index} label={inputItem.label}>
              <OInput {...inputItem} style={{ width: '100%' }} />
            </Form.Item>
          ) : (
            <Form.Item>
              <Checkbox>Include related bundles</Checkbox>
            </Form.Item>
          );
        })}
      </Space>
      <Row justify="space-between" style={{ marginTop: 10 }}>
        <Col>
          <OButton btnText={'Clear'}></OButton>
        </Col>
        <Col>
          <OButton btnText={'Search'}></OButton>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchByProductPanel;
