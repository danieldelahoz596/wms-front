import AggregateCostTable from '@/pages/PurchaseOrders/MainPanel/Modals/components/AggregateCostTable';
import { useModel } from '@umijs/max';
import { Card, DatePicker, Form, InputNumber } from 'antd';
import React, { useEffect } from 'react';

interface IAggregateCosts {
  form: any;
}

const AggregateCosts: React.FC<IAggregateCosts> = ({ form }) => {
  const { selectedPO, getTotalItemCost } = useModel('po');

  useEffect(() => {
    // if (!!selectedPO.key) {
    //   form.setFieldsValue({
    //     shippingCost: selectedPO?.shippingCost,
    //   });
    // }
    if (!selectedPO.id) {
      form.resetFields();
    } else {
      form.setFields({});
    }
  }, [selectedPO, form]);

  return (
    <Card title="Aggregate Costs">
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} form={form} labelAlign="left">
        <Form.Item label="Item Cost">{getTotalItemCost(selectedPO)}</Form.Item>
        <Form.Item label="Shipping Cost" name="shipping_cost">
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="Payment Date" name="payment_date">
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
      </Form>
      <AggregateCostTable />
    </Card>
  );
};

export default AggregateCosts;
