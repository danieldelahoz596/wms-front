import { Card, Col, Row } from 'antd';
import type { FC } from 'react';

interface IOrderItems {
  orderItems: any[];
}

const OrderItems: FC<IOrderItems> = ({ orderItems = [] }) => {
  return (
    <>
      <Card title="Order Items" size="small" style={{ width: '100%' }} tabProps={{ size: 'small' }}>
        {orderItems.map((item, index) => {
          const subTotal = item.unitQty * item.unitAmount;

          return (
            <Row
              gutter={32}
              key={index}
              style={{ borderBottom: '2px dashed #ccc', padding: '0.5rem' }}
            >
              <Col xs={24} md={12}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {item.image ? (
                      <img src={item.image} />
                    ) : (
                      <div
                        style={{
                          padding: '1rem',
                          width: '5rem',
                          textAlign: 'center',
                          border: '1px solid #ccc',
                        }}
                      >
                        No Image Found
                      </div>
                    )}
                    <div>
                      <div>
                        <strong>{item.name}</strong>
                      </div>
                      <div>Listing SKU: {item.listingSku}</div>
                      <div>Master SKU: {item.masterSku}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <h3>{item.unitAmount}</h3>
                    <h2 style={{ color: '#5F5FFF' }}>X{item.unitQty}</h2>
                    <h3
                      style={{
                        backgroundColor: '#5F5FFF',
                        color: 'white',
                        padding: '0.1rem 0.1rem 0.1rem 3rem',
                      }}
                    >
                      {subTotal}
                    </h3>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={12}>
                <div>Unit Weight: {item.unitWeight}</div>
                <div>Unit H/W/L: {item.unitHWL}</div>
                <div>Warehouse: {item.warehouse}</div>
                <div>Pick Location: {item.pickLocation}</div>
              </Col>
            </Row>
          );
        })}
      </Card>
    </>
  );
};

export default OrderItems;
