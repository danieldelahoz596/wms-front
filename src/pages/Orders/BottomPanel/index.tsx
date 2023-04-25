import { FormattedMessage, useModel } from '@umijs/max';
import { Card, Col, Image, Row } from 'antd';

const OrderItems = () => {
  const { selectedOrders } = useModel('order');

  return selectedOrders.length === 1 ? (
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
        {selectedOrders[0].order_items?.map((item) => {
          const subTotal = item.qty * item.product.vendor_cost;

          return (
            <div key={item.id} style={{ borderBottom: '2px solid #ccc', padding: '0.5rem' }}>
              <Row gutter={32}>
                <Col span={16}>
                  <div>
                    <div>
                      {/* <img src={order.sales_channel?.icon} />
                      {order.sales_channel?.name} :: {order.order_number} */}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                      <Image
                        src={item.product.images.length > 0 ? item.product.images[0].image_url : ''}
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
                        <p>ITEM NAME: {item.product.name}</p>
                        <p>Master SKU: {item.product.sku}</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={4}>
                  <Row style={{ marginTop: '0.2rem' }}>
                    <Col span={12}>
                      <b style={{ color: '#5F5FFF' }}>Quantity:</b>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                      <b style={{ color: '#5F5FFF' }}>X{item.qty}</b>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '0.2rem' }}>
                    <Col span={12}>
                      <b style={{ color: '#626262' }}>Unit Price:</b>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                      <b style={{ color: '#626262' }}>${item.product.vendor_cost}</b>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '0.2rem' }}>
                    <Col span={12}>
                      <b style={{ color: '#626262' }}>Total Discount:</b>
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                      <b style={{ color: '#626262' }}>-${0}</b>
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
                  <div style={{ textTransform: 'uppercase' }}>
                    Unit Weight: {Number(item.product.pound + item.product.ounce / 12.0).toFixed(2)}
                  </div>
                  <div style={{ textTransform: 'uppercase' }}>
                    Unit H/W/L: {item.product.height} / {item.product.width} / {item.product.length}
                  </div>
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
