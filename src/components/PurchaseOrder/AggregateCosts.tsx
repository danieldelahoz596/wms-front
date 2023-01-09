import React from 'react';
import { Card, Form } from 'antd';
import AggregateCostTable from '@/components/PurchaseOrder/AggregateCostTable';
import { OInput } from '@/components/Globals/OInput';
import { useModel } from '@umijs/max';

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
    <Card title="Aggregate Costs" style={{ marginRight: '.5rem' }}>
      <Form>
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
      </Form>
      <AggregateCostTable />
    </Card>
  );
};

export default AggregateCosts;
