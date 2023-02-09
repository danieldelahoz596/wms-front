import { OButton } from '@/components/Globals/OButton';
import { Form, Input, Select, Space } from 'antd';
import { useMemo, useState } from 'react';

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
        label: 'Recipient',
        value: 'recipient',
      },
      {
        label: 'Shipping Provider',
        value: 'shipping_provider',
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
        label: 'Returner',
        value: 'returner',
      },
      {
        label: 'Shipping Provider',
        value: 'shipping_provider',
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
    <div style={{ margin: 3, height: 800 }}>
      <span>Search Type:</span>
      <Select
        placeholder="Select..."
        style={{ width: '100%', marginTop: 5 }}
        options={[
          { value: 'shipments', label: 'Shipments' },
          { value: 'batches', label: 'Batches' },
          { value: 'returns', label: 'Returns ' },
        ]}
        size="middle"
        onSelect={(value) => setSelectedType(value)}
      />
      <Form layout="vertical" style={{ marginTop: 10 }}>
        <Space direction="vertical" size={3} style={{ display: 'flex' }}>
          {selectedType === 'shipments' &&
            shipmentFormInputs.map((formInput, index) => (
              <Form.Item key={index} label={formInput.label} name={formInput.value}>
                <Input style={{ width: '100%' }} />
              </Form.Item>
            ))}
          {selectedType === 'batches' &&
            batchFormInputs.map((formInput, index) => (
              <Form.Item key={index} label={formInput.label} name={formInput.value}>
                <Input style={{ width: '100%' }} />
              </Form.Item>
            ))}
          {selectedType === 'returns' &&
            returnFormInputs.map((formInput, index) => (
              <Form.Item key={index} label={formInput.label} name={formInput.value}>
                <Input style={{ width: '100%' }} />
              </Form.Item>
            ))}
        </Space>
        <OButton btnText={'Search'} className={'mt-10'} />
      </Form>
    </div>
  );
};

export default SearchPanel;
