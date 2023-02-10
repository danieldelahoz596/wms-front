import { OButton } from '@/components/Globals/OButton';
import { OInput } from '@/components/Globals/OInput';
import type { IOSelectOption } from '@/components/Globals/OSelect';
import { useModel } from '@umijs/max';
import { Col, Form, Row, Space } from 'antd';
import React from 'react';

const SideSearch: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { initialData } = initialState;

  const createdByOptions: IOSelectOption[] = [
    {
      text: 'User1',
      value: '1',
    },
    {
      text: 'User2',
      value: '2',
    },
  ];

  const formInputs = [
    {
      type: 'select',
      label: 'Status',
      placeholder: 'Select...',
      name: 'status',
      options: initialData?.purchaseorder_statuses?.map((item) => ({
        value: item.id,
        text: item.name,
      })),
      onChange: () => {},
    },
    {
      type: 'select',
      label: 'Created By',
      placeholder: 'Select...',
      name: 'createdBy',
      options: createdByOptions,
      onChange: () => {},
    },
    {
      type: 'number',
      label: 'P.O. Number',
      name: 'poNumber',
      defaultValue: 1020,
      onChange: () => {},
    },
    {
      type: 'number',
      label: 'Custom P.O. Number',
      name: 'customPoNumber',
      onChange: () => {},
    },
    {
      type: 'text',
      label: 'Product Name',
      name: 'product_name',
      onChange: () => {},
    },
    {
      type: 'text',
      label: 'SKU',
      placeholder: 'Master SKU, Vendor SKU',
      name: 'sku',
      onChange: () => {},
    },
    {
      type: 'select',
      label: 'Vendor',
      placeholder: 'Select...',
      name: 'vendor',
      options: initialData?.vendors?.map((item) => ({ value: item.id, text: item.name })),
      onChange: () => {},
    },

    {
      type: 'select',
      label: 'Destination',
      placeholder: 'Select...',
      name: 'destination',
      options: initialData?.warehouses?.map((item) => ({ value: item.id, text: item.name })),
      onChange: () => {},
    },
  ];

  return (
    <Form layout="vertical" style={{ margin: '0% 5% 0% 5%' }}>
      <Space direction="vertical" size={3} style={{ display: 'flex' }}>
        {formInputs?.map((inputItem, index) => (
          <Form.Item key={index} label={inputItem.label}>
            <OInput {...inputItem} style={{ width: '100%' }} />
          </Form.Item>
        ))}
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

export default SideSearch;
