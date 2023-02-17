import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import PurchaseOrderDetail from '@/components/PurchaseOrder/PurchaseOrderDetail';
import AggregateCosts from '@/components/PurchaseOrder/AggregateCosts';
import MilestonesCard from '@/components/PurchaseOrder/MilestonesCard';
import { useModel } from '@umijs/max';
import moment from 'moment';

const { TextArea } = Input;

const PODetailsBottom: React.FC = () => {
  const { selectedPO, setPoList, getTotalItemCost } = useModel('po');
  const { initialState } = useModel('@@initialState');
  const { milestonesList } = useModel('milestones');
  const [purchaseForm] = Form.useForm();
  const [aggregateCostForm] = Form.useForm();

  const handleUpdateDetails = () => {
    purchaseForm.validateFields().then((purchaseFormValues) => {
      setPoList((prev) =>
        prev.map((item) =>
          item.key === selectedPO.key
            ? {
                ...item,
                ...(purchaseFormValues.customPONumber && {
                  customponumber: purchaseFormValues.customPONumber,
                }),
                ...(purchaseFormValues.poFormat && { poFormat: purchaseFormValues.poFormat }),
                ...(purchaseFormValues.destination && {
                  destination: initialState?.initialData.warehouses?.find(
                    (warehouse) => warehouse.id === purchaseFormValues.destination,
                  ),
                }),
                ...(purchaseFormValues.poTemplate && {
                  poTemplate: initialState?.initialData.poTemplates?.find(
                    (template) => template.id === purchaseFormValues.poTemplate,
                  ),
                }),
                ...(purchaseFormValues.shippingTerm && {
                  shippingTerm: initialState?.initialData.shippingTerms?.find(
                    (term) => term.id === purchaseFormValues.shippingTerm,
                  ),
                }),
                ...(purchaseFormValues.paymentTerm && {
                  paymentTerm: initialState?.initialData.paymentTerms?.find(
                    (term) => term.id === purchaseFormValues.paymentTerm,
                  ),
                }),
                ...(purchaseFormValues.confirmBy && {
                  confirmedBy: moment(purchaseFormValues.confirmBy).format('MM/dd/yyyy'),
                }),
                ...(purchaseFormValues.milestone && {
                  milestone: milestonesList.find(
                    (milestone) => milestone.id === purchaseFormValues.milestone,
                  ),
                }),
              }
            : item,
        ),
      );
    });
  };

  const handleUpdateCosts = () => {
    aggregateCostForm.validateFields().then((aggregateCostValues) => {
      setPoList((prev) =>
        prev.map((item) =>
          item.key === selectedPO.key
            ? {
                ...item,
                ...(aggregateCostValues.shippingCost && {
                  shippingCost: aggregateCostValues.shippingCost,
                }),
              }
            : item,
        ),
      );
    });
  };

  return (
    <Row style={{ marginTop: 12 }} gutter={10}>
      <Col span={12}>
        <Row gutter={10}>
          <Col span={14}>
            <PurchaseOrderDetail form={purchaseForm} />
          </Col>
          <Col span={10}>
            <Form layout="vertical">
              <Form.Item label="Internal Notes">
                <TextArea rows={10} />
              </Form.Item>
            </Form>
            <div style={{ display: 'flex', justifyContent: 'end', marginTop: 10 }}>
              <Button onClick={handleUpdateDetails}>Update Details</Button>
            </div>
          </Col>
        </Row>
      </Col>
      <Col span={6}>
        <AggregateCosts form={aggregateCostForm} />
        <div style={{ display: 'flex', gap: 20 }}>
          <Button onClick={handleUpdateCosts}>Update Costs</Button>
          <h3>
            Total:{' '}
            {getTotalItemCost(selectedPO) +
              selectedPO?.otherCost
                .map(({ cost }) => cost)
                .reduce((acc: any, curValue: any) => acc + curValue, 0) +
              selectedPO?.shippingCost}
          </h3>
        </div>
      </Col>
      <Col span={6}>
        <MilestonesCard />
      </Col>
    </Row>
  );
};

export default PODetailsBottom;
