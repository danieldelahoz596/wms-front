import { useState, useMemo } from 'react';
import { Select, Form, Input } from 'antd';

const SearchPanel: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'shipments' | 'batches' | 'returns'>(null);

  const shipmentFormInputs = useMemo(
    () => [
      {
        label: 'Tracking Number',
        value: 'tracking_number',
      },
      {
        label: 'Delivery Status',
        value: 'delivery_status',
      },
      {
        label: 'Order Number',
        value: 'order_number',
      },
      {
        label: 'Batch Number',
        value: 'batch_number',
      },
      {
        label: 'Sales Channel',
        value: 'sales_channel',
      },
      {
        label: 'Recipient',
        value: 'recipient',
      },
      {
        label: 'Shipping Provider',
        value: 'shipping_provider',
      },
      {
        label: 'City',
        value: 'city',
      },
      {
        label: 'State',
        value: 'state',
      },
      {
        label: 'Country',
        value: 'country',
      },
      {
        label: 'Warehouse',
        value: 'warehouse',
      },
      {
        label: 'Ship Date',
        value: 'ship_date',
      },
    ],
    [],
  );

  const batchFormInputs = useMemo(
    () => [
      {
        label: 'Batch Number',
        value: 'batch_number',
      },
      {
        label: 'Ship Date',
        value: 'shp_date',
      },
      {
        label: 'Date Created',
        value: 'date_creatd',
      },
      {
        label: 'Created By',
        value: 'created_by',
      },
      {
        label: 'Warehouse',
        value: 'warehouse',
      },
    ],
    [],
  );

  const returnFormInputs = useMemo(
    () => [
      {
        label: 'Tracking Number',
        value: 'tracking_number',
      },
      {
        label: 'Order Number',
        value: 'order_number',
      },
      {
        label: 'RMA Number',
        value: 'rma_number',
      },
      {
        label: 'Sales Channel',
        value: 'sales_channel',
      },
      {
        label: 'Returner',
        value: 'returner',
      },
      {
        label: 'Shipping Provider',
        value: 'shipping_provider',
      },
      {
        label: 'City',
        value: 'city',
      },
      {
        label: 'State',
        value: 'state',
      },
      {
        label: 'Country',
        value: 'country',
      },
      {
        label: 'Created Date',
        value: 'created_date',
      },
      {
        label: 'Received Date',
        value: 'received_date',
      },
    ],
    [],
  );

  return (
    <div style={{ margin: 3, overflowY: 'scroll', height: 800 }}>
      <div>
        Search Type:
        <Select
          placeholder="Select..."
          style={{ width: '100%', marginTop: 5 }}
          options={[
            { value: 'shipments', label: 'Shipments' },
            { value: 'batches', label: 'Batches' },
            { value: 'returns', label: 'Returns ' },
          ]}
          size="small"
          onSelect={(value) => setSelectedType(value)}
        />
      </div>
      <Form name="basic" layout="vertical" style={{ marginTop: 10 }}>
        {selectedType === 'shipments' &&
          shipmentFormInputs.map((formInput, index) => (
            <Form.Item
              key={index}
              label={formInput.label}
              name={formInput.value}
              rules={[{ required: true, message: `Please input your ${formInput.label}!` }]}
            >
              <Input />
            </Form.Item>
          ))}
        {selectedType === 'batches' &&
          batchFormInputs.map((formInput, index) => (
            <Form.Item
              key={index}
              label={formInput.label}
              name={formInput.value}
              rules={[{ required: true, message: `Please input your ${formInput.label}!` }]}
            >
              <Input />
            </Form.Item>
          ))}
        {selectedType === 'returns' &&
          returnFormInputs.map((formInput, index) => (
            <Form.Item
              key={index}
              label={formInput.label}
              name={formInput.value}
              rules={[{ required: true, message: `Please input your ${formInput.label}!` }]}
            >
              <Input />
            </Form.Item>
          ))}
      </Form>
    </div>
  );
};

export default SearchPanel;
