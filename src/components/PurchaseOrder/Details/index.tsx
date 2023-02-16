import React from 'react';
import { Row, Col, Form } from 'antd';
import PurchaseOrderDetail from '@/components/PurchaseOrder/PurchaseOrderDetail';
import POCommunication from '@/components/PurchaseOrder/POCommunication';
import AggregateCosts from '@/components/PurchaseOrder/AggregateCosts';
import MilestonesCard from '@/components/PurchaseOrder/MilestonesCard';

const PODetailsBottom: React.FC = () => {
  const [form] = Form.useForm();

  return (
    <Row>
      <Col span={12}>
        <Row>
          <Col span={14}>
            <PurchaseOrderDetail form={form} />
          </Col>
          <Col span={10}>
            <POCommunication />
          </Col>
        </Row>
      </Col>
      <Col span={6}>
        <AggregateCosts form={form} />
      </Col>
      <Col span={6}>
        <MilestonesCard />
      </Col>
    </Row>
  );
};

export default PODetailsBottom;
