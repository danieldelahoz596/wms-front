import { FormattedMessage, useModel } from '@umijs/max';
import { Card, Col, Image, Row } from 'antd';
import type { FC } from 'react';

const OrderItems: FC = () => {
  const { selectedOrders } = useModel('order');

  const order = selectedOrders[0];

  return order ? (
    <div style={{ position: 'relative' }}>
      <div className="title-row">
        <h1 className="page-title">
          <FormattedMessage id="pages.orders.bottompanel.title" />
        </h1>
      </div>
      <span
        style={{
          color: 'orange',
          border: '2px solid',
          fontSize: 24,
          padding: 4,
          transform: 'rotate(330deg)',
          display: 'inline-block',
          position: 'absolute',
          zIndex: 100,
          left: '50%',
          top: 100,
        }}
      >
        Out Of Stock
      </span>
      <Card>
        {order.orderItems?.map((item, index) => {
          const subTotal = item.unitQty * item.unitAmount;

          return (
            <div key={index} style={{ borderBottom: '2px solid #ccc', padding: '0.5rem' }}>
              <Row gutter={32}>
                <Col span={16}>
                  <div>
                    <div>
                      <img src={order.sales_channel?.icon} />
                      {order.sales_channel?.name} :: {order.order_number}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                      <Image
                        src={item.image}
                        alt="No Image Found"
                        width="5rem"
                        height="5rem"
                        style={{
                          border: 1,
                          borderStyle: 'solid',
                          color: 'gray',
                          fontSize: 15,
                          textAlign: 'center',
                        }}
                      />
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
                  <div style={{ textTransform: 'uppercase' }}>Pick Location: {item.pickLocation}</div>
                </Col>
              </Row>
            </div>
          );
        })}
      </Card>
    </div>
  ) : null;
};

export default OrderItems;
