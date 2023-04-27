import React from 'react';
import { Row, Col, Form, Button, message } from 'antd';
import PurchaseOrderDetail from '@/pages/PurchaseOrders/MainPanel/Modals/components/PurchaseOrderDetail';
import AggregateCosts from '@/pages/PurchaseOrders/MainPanel/Modals/components/AggregateCosts';
import MilestonesCard from '@/pages/PurchaseOrders/MainPanel/Modals/components/MilestonesCard';
import { useModel } from '@umijs/max';

const PODetails: React.FC = () => {
  const { selectedPO, otherCosts, poItems, updatePO, totalCost } = useModel('po');
  const [purchaseForm] = Form.useForm();
  const [aggregateCostForm] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const handleUpdateDetails = () => {
    purchaseForm.validateFields().then((purchaseFormValues) => {
      aggregateCostForm.validateFields().then((aggregatecostValues) => {
        updatePO({
          ...selectedPO,
          ...purchaseFormValues,
          ...aggregatecostValues,
          total_cost: totalCost,
          other_costs: otherCosts.map((item) => ({ name: item.name, amount: item.amount })),
          po_items: poItems.map((item) => ({
            product_id: item.product_id,
            qty: item.qty,
            unit_of_measure_id: item.unit_of_measure_id,
          })),
        }).then(() => {
          messageApi.open({
            type: 'success',
            content: 'Successfully updating a PO',
          });
        });
      });
    });
  };

  return (
    <>
      {contextHolder}
      <Row style={{ marginTop: 12, marginLeft: 10 }} gutter={15}>
        <Col span={12}>
          <Row gutter={15}>
            <PurchaseOrderDetail form={purchaseForm} />
            {/* <Col span={14}>
          </Col> */}
            {/* <Col span={10}>
            <Form layout="vertical">
              <Form.Item label="Internal Notes">
                <TextArea rows={10} />
              </Form.Item>
            </Form>
            <div style={{ display: 'flex', justifyContent: 'end', marginTop: 10 }}>
              <Button onClick={handleUpdateDetails}>Update Details</Button>
            </div>
          </Col> */}
          </Row>
        </Col>
        <Col span={6}>
          <AggregateCosts form={aggregateCostForm} />
          {/* <div style={{ display: 'flex', gap: 20, marginTop: 10 }}>
          <Button onClick={handleUpdateCosts}>Update Costs</Button>
          <h3>Total: {totalCost}</h3>
        </div> */}
        </Col>
        {/* <Col span={6}>
        <MilestonesCard />
      </Col> */}
      </Row>
      <div style={{ display: 'flex', justifyContent: 'end', marginTop: 10 }}>
        <Button onClick={handleUpdateDetails}>Update Details</Button>
      </div>
    </>
  );
};

export default PODetails;
