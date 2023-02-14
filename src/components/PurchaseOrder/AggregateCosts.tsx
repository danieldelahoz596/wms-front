import { OInput } from '@/components/Globals/OInput';
import AggregateCostTable from '@/components/PurchaseOrder/AggregateCostTable';
import { useModel } from '@umijs/max';
import { Card, Form, Space } from 'antd';
import React from 'react';

const AggregateCosts: React.FC = () => {
  const { selectedPO, handleSelectedPOChange, getTotalItemCost } = useModel('po');

  const formInputs = [
    {
      type: 'number',
      label: 'Shipping Cost : ',
      name: 'shippingCost',
      defaultValue: 20,
      onChange: (name: string, value: any) => handleSelectedPOChange(name, parseFloat(value)),
    },
    {
      type: 'date',
      label: 'Payment Date : ',
      name: 'paymentDate',
      defaultValue: selectedPO?.paymentDate,
      onChange: handleSelectedPOChange,
    },
  ];

  return (
    <Card title="Aggregate Costs">
      <Form labelCol={{ span: 14 }} wrapperCol={{ span: 10 }}>
        <Space direction='vertical' size={3} style={{ width: '100%'}}>
          <Form.Item key={'itemCost'} label={'Item Cost: '}>
            {getTotalItemCost(selectedPO)}
          </Form.Item>
          {formInputs?.map((inputItem, index) => (
            <Form.Item key={index} label={inputItem.label}>
              <OInput
                type={inputItem.type}
                name={inputItem.name}
                defaultValue={inputItem.defaultValue}
                onChange={inputItem.onChange}
              />
            </Form.Item>
          ))}
        </Space>
      </Form>
      <AggregateCostTable />
    </Card>
  );
};

export default AggregateCosts;
