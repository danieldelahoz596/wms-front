import { useModel } from '@umijs/max';
import { Card, Col, Row } from 'antd';
import type { FC } from 'react';

const OrderItems: FC = () => {
  const { selectedOrders } = useModel('order');

  const order = selectedOrders[0];

  return order ? (
    <>
      <Card
        title={
          <span
            style={{
              fontSize: '1rem',
              textTransform: 'uppercase',
              fontWeight: '700',
              color: '#A2A2A2',
            }}
          >
            Order Items
          </span>
        }
        size="small"
        style={{ width: '100%' }}
        tabProps={{ size: 'small' }}
      >
        {order.orderItems?.map((item, index) => {
          const subTotal = item.unitQty * item.unitAmount;

          return (
            <div key={index} style={{ borderBottom: '2px dashed #ccc', padding: '0.5rem' }}>
              <Row gutter={32}>
                <Col span={16}>
                  <div>
                    <div>
                      <img src={order.sales_channel?.icon} />
                      {order.sales_channel?.name} :: {order.orderNumber}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                      <div
                        style={{
                          padding: '1rem',
                          width: '5rem',
                          textAlign: 'center',
                          border: '1px solid #ccc',
                        }}
                      >
                        <img src={item.image} />
                      </div>
                      <div>
                        <div>LISTING SKU: {item.listingSku}</div>
                        <div>LISTING NAME: {item.name}</div>
                        <div>MASTER SKU: {item.masterSku}</div>
                        <div>ATTRIBUTES: VENDOR PRODUCT SKU: {item.listingSku}</div>
                      </div>
                      <div>Master SKU: {item.masterSku}</div>
                    </div>
                  </div>
                </Col>
                <Col span={4}>
                  <Row style={{ marginTop: '0.2rem' }}>
                    <Col span={12}>
                      <b style={{ color: '#5F5FFF' }}>Quantity:</b>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                      <b style={{ color: '#5F5FFF' }}>X{item.unitQty}</b>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '0.2rem' }}>
                    <Col span={12}>
                      <b style={{ color: '#626262' }}>Unit Price:</b>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                      <b style={{ color: '#626262' }}>${item.unitAmount}</b>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '0.2rem' }}>
                    <Col span={12}>
                      <b style={{ color: '#626262' }}>Total Discount:</b>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                      <b style={{ color: '#626262' }}>-${item.discount}</b>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '0.2rem', padding: '0.4rem', background: '#5F5FFF' }}>
                    <Col span={12}>
                      <b style={{ color: '#fff' }}>Total:</b>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                      <b style={{ color: '#fff' }}>${subTotal}</b>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{ marginTop: '1rem' }}>
                <Col span={24}>
                  <div style={{ textTransform: 'uppercase' }}>Unit Weight: {item.unitWeight}</div>
                  <div style={{ textTransform: 'uppercase' }}>Unit H/W/L: {item.unitHWL}</div>
                  <div style={{ textTransform: 'uppercase' }}>Warehouse: {item.warehouse}</div>
                  <div style={{ textTransform: 'uppercase' }}>
                    Pick Location: {item.pickLocation}
                  </div>
                </Col>
              </Row>
            </div>
          );
        })}
      </Card>
    </>
  ) : null;
};

export default OrderItems;
