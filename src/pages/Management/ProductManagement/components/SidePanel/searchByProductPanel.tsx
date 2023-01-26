import React from 'react';
import { Form, Checkbox, Button, Row, Col } from 'antd';
import { OInput } from '@/components/Globals/OInput';
import { useModel } from '@umijs/max';

const SearchByProductPanel: React.FC = () => {
  const { initialState } = useModel('@@initialState');
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

  return <Form
    layout="vertical"
    style={{
      margin: '0% 5% 0% 5%',
    }}
  >
    {formInputs?.map((inputItem, index) => {
      return index !== 2 ? <Form.Item key={index} label={inputItem.label}>
        <OInput {...inputItem} />
      </Form.Item> : <Form.Item>
        <Checkbox>Include related bundles</Checkbox>
      </Form.Item>
    })}
    <Row justify="space-between">
      <Col>
        <Button type='primary'>CLEAR</Button>
      </Col>
      <Col>
        <Button type='primary'>SEARCH</Button>
      </Col>
    </Row>
  </Form>
}

export default SearchByProductPanel;