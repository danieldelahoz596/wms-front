import { Col, Row } from 'antd';
import React from 'react';
import { useModel } from '@umijs/max';
import OrderAgingByWarehouse from './components/orderAgingByWarehouse';
import FulfillmentPerformance from './components/fulfillmentPerformance';
import StockRequiringAttention from './components/stockRequiringAttention';
import IncomingStock from './components/incomingStock';

const Dashboard: React.FC = () => {
  const { dashboardData } = useModel('dashboard');

  return (
    <Row gutter={[10, 10]}>
      <Col span={16}>
        <OrderAgingByWarehouse />
      </Col>
      <Col span={8}>
        <FulfillmentPerformance data={dashboardData?.fullfillment_performance} />
      </Col>
      <Col span={12}>
        <StockRequiringAttention stock={dashboardData?.stock_requiring} />
      </Col>
      <Col span={12}>
        <IncomingStock stock={dashboardData?.incoming_stock} />
      </Col>
    </Row>
  );
};

export default Dashboard;
