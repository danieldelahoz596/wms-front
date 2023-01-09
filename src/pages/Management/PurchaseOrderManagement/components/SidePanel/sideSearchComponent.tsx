import React from 'react';
import { Button, Form } from 'antd';
import type { IOSelectOption } from '@/components/Globals/OSelect';
import { OInput } from '@/components/Globals/OInput';

const SideSearch: React.FC = () => {
  const statusOptions: IOSelectOption[] = [
    {
      text: 'Item 1',
      value: '1',
    },
    {
      text: 'Item 2',
      value: '2',
    },
  ];

  const createdByOptions: IOSelectOption[] = [
    {
      text: 'Item 1',
      value: '1',
    },
    {
      text: 'Item 2',
      value: '2',
    },
  ];

  const vendorOptions: IOSelectOption[] = [
    {
      text: 'Item 1',
      value: '1',
    },
    {
      text: 'Item 2',
      value: '2',
    },
  ];

  const destinationOptions: IOSelectOption[] = [
    {
      text: 'Item 1',
      value: '1',
    },
    {
      text: 'Item 2',
      value: '2',
    },
  ];

  const formInputs = [
    {
      type: 'select',
      label: 'Status',
      placeholder: 'Select...',
      name: 'status',
      options: statusOptions,
      onChange: () => {},
    },
    {
      type: 'select',
      label: 'Created By:',
      placeholder: 'Select...',
      name: 'createdBy',
      options: createdByOptions,
      onChange: () => {},
    },
    {
      type: 'number',
      label: 'P.O. Number:',
      name: 'poNumber',
      defaultValue: 1020,
      onChange: () => {},
    },
    {
      type: 'number',
      label: 'Custom P.O. Number:',
      name: 'customPoNumber',
      onChange: () => {},
    },
    {
      type: 'text',
      label: 'Product Name:',
      name: 'product_name',
      onChange: () => {},
    },
    {
      type: 'text',
      label: 'SKU:',
      placeholder: 'Master SKU, Vendor SKU',
      name: 'sku',
      onChange: () => {},
    },
    {
      type: 'select',
      label: 'Vendor:',
      placeholder: 'Select...',
      name: 'vendor',
      options: vendorOptions,
      onChange: () => {},
    },

    {
      type: 'select',
      label: 'Destination:',
      placeholder: 'Select...',
      name: 'destination',
      options: destinationOptions,
      onChange: () => {},
    },
  ];

  return (
    <Form
      layout="vertical"
      style={{
        margin: '0% 5% 0% 5%',
      }}
    >
      {formInputs?.map((inputItem, index) => (
        <Form.Item key={index} label={inputItem.label}>
          <OInput {...inputItem} />
        </Form.Item>
      ))}

      <Button type="primary">Search</Button>
    </Form>
  );
};

export default SideSearch;
