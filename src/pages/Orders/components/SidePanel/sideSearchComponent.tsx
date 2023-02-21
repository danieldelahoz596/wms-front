import { OButton } from '@/components/Globals/OButton';
import { OInput } from '@/components/Globals/OInput';
import { useModel } from '@umijs/max';
import { Form, Space } from 'antd';
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
    <Form layout="vertical" style={{ marginLeft: 5, marginRight: 5 }}>
      <Space direction="vertical" size={3}>
        {formInputs?.map((inputItem, index) => (
          <Form.Item key={index} label={inputItem.label}>
            <OInput {...inputItem} />
          </Form.Item>
        ))}

        <Form.Item label={'Order Date'}>
          <Space size={3} align={'baseline'}>
            <Form.Item>
              <OInput type="date" name="fromorder_date" onChange={onChangeOrderSearchQuery} />
            </Form.Item>
            <span>to</span>
            <Form.Item>
              <OInput type="date" name="toorder_date" onChange={onChangeOrderSearchQuery} />
            </Form.Item>
          </Space>
        </Form.Item>
        <Form.Item label={'Ship Date'}>
          <Space size={3} align={'baseline'}>
            <Form.Item>
              <OInput type="date" name="fromShipDate" onChange={onChangeOrderSearchQuery} />
            </Form.Item>
            <span>to</span>
            <Form.Item>
              <OInput type="date" name="toShipDate" onChange={onChangeOrderSearchQuery} />
            </Form.Item>
          </Space>
        </Form.Item>
      </Space>
      <div className="space-between" style={{ marginTop: 10 }}>
        <OButton btnText={'Clear'} onClick={clearOrderSearchQuery} />
        <OButton btnText={'Search'} onClick={onOrderSearch} />
      </div>
    </Form>
  );
};

export default SideSearch;
