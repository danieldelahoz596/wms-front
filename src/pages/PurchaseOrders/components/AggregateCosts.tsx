import AggregateCostTable from '@/pages/PurchaseOrders/components/AggregateCostTable';
import { useModel } from '@umijs/max';
import { Card, DatePicker, Form, Input } from 'antd';
import React, { useEffect } from 'react';

interface IAggregateCosts {
  form: any;
}

const AggregateCosts: React.FC<IAggregateCosts> = ({ form }) => {
  const { selectedPO, getTotalItemCost } = useModel('po');

  useEffect(() => {
    if (!!selectedPO.key) {
      form.setFieldsValue({
        shippingCost: selectedPO?.shippingCost,
      });
    }
  }, [selectedPO, form]);

  return (
    <Card title="Aggregate Costs">
      <Form labelCol={{ span: 14 }} wrapperCol={{ span: 10 }} form={form}>
        <Form.Item key={'itemCost'} label={'Item Cost: '}>
          {getTotalItemCost(selectedPO)}
        </Form.Item>
        <Form.Item label="Shipping Cost" name="shippingCost">
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Payment Date" name="paymentDate">
          <DatePicker />
        </Form.Item>
      </Form>
      <AggregateCostTable />
    </Card>
  );
};

export default AggregateCosts;
