import { OInput } from '@/components/Globals/OInput';
import AggregateCostTable from '@/components/PurchaseOrder/AggregateCostTable';
import { useModel } from '@umijs/max';
import { Card, Form, Space, Input, DatePicker } from 'antd';
import React from 'react';

interface IAggregateCosts {
  form: any;
  costItems: any[];
  setCostItems: (value: any) => void;
}

const AggregateCosts: React.FC<IAggregateCosts> = ({ form, costItems, setCostItems }) => {
  const { selectedPO, getTotalItemCost } = useModel('po');

  // const formInputs = [
  //   {
  //     type: 'number',
  //     label: 'Shipping Cost : ',
  //     name: 'shippingCost',
  //     defaultValue: 20,
  //     onChange: (name: string, value: any) => handleSelectedPOChange(name, parseFloat(value)),
  //   },
  //   {
  //     type: 'date',
  //     label: 'Payment Date : ',
  //     name: 'paymentDate',
  //     defaultValue: selectedPO?.paymentDate,
  //     onChange: handleSelectedPOChange,
  //   },
  // ];

  return (
    <Card title="Aggregate Costs">
      <Form labelCol={{ span: 14 }} wrapperCol={{ span: 10 }} form={form}>
        <Space direction="vertical" size={3} style={{ width: '100%' }}>
          <Form.Item key={'itemCost'} label={'Item Cost: '}>
            {getTotalItemCost(selectedPO)}
          </Form.Item>
          <Form.Item label="Shipping Cost" name="shippingCost">
            <Input type="number" />
          </Form.Item>
          <Form.Item label="Payment Date" name="paymentDate">
            <DatePicker />
          </Form.Item>
          {/* {formInputs?.map((inputItem, index) => (
            <Form.Item key={index} label={inputItem.label}>
              <OInput
                type={inputItem.type}
                name={inputItem.name}
                defaultValue={inputItem.defaultValue}
                onChange={inputItem.onChange}
              />
            </Form.Item>
          ))} */}
        </Space>
      </Form>
      <AggregateCostTable costItems={costItems} setCostItems={setCostItems} />
    </Card>
  );
};

export default AggregateCosts;
