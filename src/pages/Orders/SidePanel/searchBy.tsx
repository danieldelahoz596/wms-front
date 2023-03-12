import { OButton } from '@/components/Globals/OButton';
import { OInput } from '@/components/Globals/OInput';
import type { IOInput } from '@/components/Globals/OInput';
import { useModel } from '@umijs/max';
import { Card, Form, Space, Select, Input, InputNumber } from 'antd';
import React from 'react';

const SearchByPanel: React.FC = () => {
  const { clearOrderSearchQuery, setOrderSearchQuery } = useModel('orderSearch');
  const { initialState } = useModel('@@initialState');
  const { initialData } = initialState;
  const [form] = Form.useForm();

  const formInputs: IOInput[] = [
    {
      type: 'select',
      label: 'Status',
      placeholder: 'Select...',
      name: 'status',
      options: initialData?.order_statuses?.map((item) => ({ value: item.id, label: item.name })),
      mode: 'multiple',
    },
    {
      type: 'number',
      label: 'Order Number',
      name: 'orderNumber',
    },
    {
      type: 'select',
      label: 'Warehouse',
      name: 'warehouse',
      placeholder: 'Select...',
      options: initialData?.warehouses?.map((item) => ({ value: item.id, label: item.name })),
    },
    {
      type: 'text',
      label: 'Recipient',
      name: 'recipient',
      placeholder: 'Name',
    },
    {
      type: 'text',
      label: 'Buyer Email',
      name: 'buyerEmail',
      placeholder: 'Email',
    },
    {
      type: 'text',
      label: 'Buyer Username',
      name: 'buyerUsername',
      placeholder: 'Username',
    },
    {
      type: 'text',
      label: 'SKU',
      name: 'sku',
      placeholder: 'Master SKU, Listing SKU',
    },
  ];

  const handleSearch = () => {
    form.validateFields().then((values) => setOrderSearchQuery(values));
  };

  const handleClear = () => {
    form.resetFields();
    clearOrderSearchQuery();
  };

  return (
    <Card>
      <Form layout="vertical" form={form}>
        <Space direction="vertical" size={VERTICAL_SPACE_SIZE}>
          {formInputs?.map((inputItem, index) => (
            <Form.Item key={index} label={inputItem.label} name={inputItem.name}>
              {inputItem.type === 'select' && <Select options={inputItem.options} mode={inputItem.mode} />}
              {inputItem.type === 'text' && <Input />}
              {inputItem.type === 'number' && <InputNumber style={{ width: '100%' }} />}
            </Form.Item>
          ))}
          <Form.Item label={'Order Date'}>
            <Space size={3} align={'baseline'}>
              <Form.Item name="fromOrderDate">
                <OInput type="date" name="fromorder_date" />
              </Form.Item>
              <span>to</span>
              <Form.Item name="toOrderDate">
                <OInput type="date" name="toorder_date" />
              </Form.Item>
            </Space>
          </Form.Item>
          <Form.Item label={'Ship Date'}>
            <Space size={3} align={'baseline'}>
              <Form.Item name="fromShipDate">
                <OInput type="date" name="fromShipDate" />
              </Form.Item>
              <span>to</span>
              <Form.Item name="toShipDate">
                <OInput type="date" name="toShipDate" />
              </Form.Item>
            </Space>
          </Form.Item>
        </Space>
        <div className="search-button-row space-between">
          <OButton btnText={'Clear'} onClick={handleClear} />
          <OButton btnText={'Search'} onClick={handleSearch} />
        </div>
      </Form>
    </Card>
  );
};

export default SearchByPanel;
