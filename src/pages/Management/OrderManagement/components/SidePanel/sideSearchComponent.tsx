import { OButton } from '@/components/Globals/OButton';
import { OInput } from '@/components/Globals/OInput';
import { useModel } from '@umijs/max';
import { Form } from 'antd';
import React from 'react';

const SideSearch: React.FC = () => {
  const { onChangeOrderSearchQuery, onOrderSearch, clearOrderSearchQuery } =
    useModel('orderSearch');
  const { initialState } = useModel('@@initialState');
  const { initialData } = initialState;

  const formInputs = [
    {
      type: 'select',
      label: 'Status',
      placeholder: 'Select...',
      name: 'status',
      options: initialData?.order_statuses?.map((item) => ({ value: item.id, text: item.name })),
      onChange: onChangeOrderSearchQuery,
    },
    {
      type: 'number',
      label: 'Order Number',
      name: 'order_number',
      onChange: onChangeOrderSearchQuery,
    },
    {
      type: 'select',
      label: 'Warehouse',
      name: 'warehouse',
      placeholder: 'Select...',
      options: initialData?.warehouses?.map((item) => ({ value: item.id, text: item.name })),
      onChange: onChangeOrderSearchQuery,
    },
    {
      type: 'text',
      label: 'Recipient',
      name: 'recipient',
      placeholder: 'Name',
      onChange: onChangeOrderSearchQuery,
    },
    {
      type: 'text',
      label: 'Buyer Email',
      name: 'buyerEmail',
      placeholder: 'Email',
      onChange: onChangeOrderSearchQuery,
    },
    {
      type: 'text',
      label: 'Buyer Username',
      name: 'buyerUsername',
      placeholder: 'Username',
      onChange: onChangeOrderSearchQuery,
    },
    {
      type: 'text',
      label: 'SKU',
      name: 'sku',
      placeholder: 'Master SKU, Listing SKU',
      onChange: onChangeOrderSearchQuery,
    },
  ];

  return (
    <Form layout="vertical" style={{ margin: '0% 5% 0% 5%' }}>
      {formInputs?.map((inputItem, index) => (
        <Form.Item key={index} label={inputItem.label}>
          <OInput {...inputItem} />
        </Form.Item>
      ))}

      <Form.Item label={'Order Date'}>
        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
          <OInput type="date" name="fromorder_date" onChange={onChangeOrderSearchQuery} />
        </Form.Item>
        <div style={{ display: 'inline-block' }}>to</div>
        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
          <OInput type="date" name="toorder_date" onChange={onChangeOrderSearchQuery} />
        </Form.Item>
      </Form.Item>

      <Form.Item label={'Ship Date'}>
        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
          <OInput type="date" name="fromShipDate" onChange={onChangeOrderSearchQuery} />
        </Form.Item>
        <div style={{ display: 'inline-block' }}>to</div>
        <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
          <OInput type="date" name="toShipDate" onChange={onChangeOrderSearchQuery} />
        </Form.Item>
      </Form.Item>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <OButton btnText={'Clear'} onClick={clearOrderSearchQuery} />
        <OButton btnText={'Search'} onClick={onOrderSearch} />
      </div>
    </Form>
  );
};

export default SideSearch;
