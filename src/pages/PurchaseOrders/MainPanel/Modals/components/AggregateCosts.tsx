import AggregateCostTable from '@/pages/PurchaseOrders/MainPanel/Modals/components/AggregateCostTable';
import { useModel } from '@umijs/max';
import { Card, DatePicker, Form, InputNumber } from 'antd';
import React, { useEffect } from 'react';

interface IAggregateCosts {
  form: any;
}

const AggregateCosts: React.FC<IAggregateCosts> = ({ form }) => {
  const { selectedPO, poItemsCost, setShippingCost } = useModel('po');
  const shipCost = Form.useWatch('shipping_cost', form);

  useEffect(() => {
    if (shipCost) setShippingCost(shipCost);
  }, [shipCost, setShippingCost]);

  useEffect(() => {
    // if (!!selectedPO.key) {
    //   form.setFieldsValue({
    //     shippingCost: selectedPO?.shippingCost,
    //   });
    // }
    if (!selectedPO) {
      form.resetFields();
    } else {
      form.resetFields();
    }
  }, [selectedPO, form]);

  return (
    <Card title="Aggregate Costs">
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} form={form} labelAlign="left">
        <Form.Item label="Item Cost">{poItemsCost}</Form.Item>
        <Form.Item label="Shipping Cost" name="shipping_cost" rules={[{ required: true, message: 'Please input Shipping Cost' }]}>
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          label="Payment Date"
          name="payment_date"
          rules={[{ required: true, message: 'Please select the Payment Date' }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
      </Form>
      <AggregateCostTable />
    </Card>
  );
};

export default AggregateCosts;
