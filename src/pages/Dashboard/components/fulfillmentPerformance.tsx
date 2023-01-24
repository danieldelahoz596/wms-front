import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  PauseOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { Row, Col } from 'antd';

interface IFulfillmentPerformance {
  data: any;
}

const FulfillmentPerformance: React.FC<IFulfillmentPerformance> = ({ data }) => {
  return (
    <>
      <div style={{ fontSize: 25 }}>FULFILLMENT PERFORMANCE</div>
      {!!data ? (
        <Row gutter={[30, 30]} style={{ marginTop: 10 }}>
          <Col span={12}>
            <div
              style={{
                backgroundColor: '#FF4B00',
                borderRadius: 3,
                width: '100%',
                color: 'white',
                height: 150,
                fontSize: 12,
                paddingTop: 10,
              }}
            >
              <Row
                style={{
                  marginLeft: 10,
                  fontSize: 15,
                }}
              >
                <Col>
                  <WarningOutlined style={{ marginRight: 10 }} />
                  UNRESOLVED
                </Col>
              </Row>
              <Row style={{ marginLeft: 10, marginRight: 10 }}>
                <Col span={24}>
                  <Row justify="space-between">
                    <Col>Missing Product Info:</Col>
                    <Col>{data.unresolved.missing_product_info}</Col>
                  </Row>
                  <Row justify="space-between">
                    <Col>Missing Stock Location:</Col>
                    <Col>{data.unresolved.missing_stock_location}</Col>
                  </Row>
                  <Row justify="space-between">
                    <Col>Out of Stock:</Col>
                    <Col>{data.unresolved.out_of_stock}</Col>
                  </Row>
                  <Row>
                    <hr style={{ width: '100%' }} />
                  </Row>
                  <Row justify="space-between">
                    <Col>Total:</Col>
                    <Col>
                      {data.unresolved.out_of_stock +
                        data.unresolved.missing_product_info +
                        data.unresolved.missing_stock_location}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={12}>
            <div
              style={{
                backgroundColor: '#FDFD62',
                borderRadius: 3,
                width: '100%',
                color: 'black',
                height: 150,
                fontSize: 12,
                paddingTop: 10,
              }}
            >
              <Row
                style={{
                  marginLeft: 10,
                  fontSize: 15,
                }}
              >
                <Col>
                  <PauseOutlined style={{ marginRight: 10 }} />
                  PAUSED
                </Col>
              </Row>
              <Row style={{ marginLeft: 10, marginRight: 10 }}>
                <Col span={24}>
                  <Row justify="space-between">
                    <Col>Awaiting Payment:</Col>
                    <Col>{data.paused.awaiting_payment}</Col>
                  </Row>
                  <Row justify="space-between">
                    <Col>On Hold:</Col>
                    <Col>{data.paused.on_hold}</Col>
                  </Row>
                  <Row>
                    <hr style={{ width: '100%' }} />
                  </Row>
                  <Row justify="space-between">
                    <Col>Total:</Col>
                    <Col>{data.paused.awaiting_payment + data.paused.on_hold}</Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={12}>
            <div
              style={{
                backgroundColor: '#5B66FF',
                borderRadius: 3,
                width: '100%',
                color: 'white',
                height: 150,
                fontSize: 12,
                paddingTop: 10,
              }}
            >
              <Row
                style={{
                  marginLeft: 10,
                  fontSize: 15,
                }}
              >
                <Col>
                  <ClockCircleOutlined style={{ marginRight: 10 }} />
                  AWAITING FULFILLMENT
                </Col>
              </Row>
              <Row style={{ marginLeft: 10, marginRight: 10 }}>
                <Col span={24}>
                  <Row justify="space-between">
                    <Col>Awaiting Shipment:</Col>
                    <Col>{data.awaiting_fulfillment.awaiting_shipment}</Col>
                  </Row>
                  <Row justify="space-between">
                    <Col>Awaiting Export:</Col>
                    <Col>{data.awaiting_fulfillment.awaiting_export}</Col>
                  </Row>
                  <Row justify="space-between">
                    <Col>Pending Fulfillment:</Col>
                    <Col>{data.awaiting_fulfillment.pending_fulfillment}</Col>
                  </Row>
                  <Row>
                    <hr style={{ width: '100%' }} />
                  </Row>
                  <Row justify="space-between">
                    <Col>Total:</Col>
                    <Col>
                      {data.awaiting_fulfillment.awaiting_shipment +
                        data.awaiting_fulfillment.awaiting_export +
                        data.awaiting_fulfillment.pending_fulfillment}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={12}>
            <div
              style={{
                backgroundColor: '#70FFB1',
                borderRadius: 3,
                width: '100%',
                color: 'white',
                height: 150,
                fontSize: 12,
                paddingTop: 10,
              }}
            >
              <Row
                style={{
                  marginLeft: 10,
                  fontSize: 15,
                }}
              >
                <Col>
                  <CheckCircleOutlined style={{ marginRight: 10 }} />
                  SHIPPED
                </Col>
              </Row>
              <Row style={{ marginLeft: 10, marginRight: 10 }}>
                <Col span={24}>
                  <Row justify="space-between">
                    <Col>Today:</Col>
                    <Col>{data.shipped.today}</Col>
                  </Row>
                  <Row justify="space-between">
                    <Col>This Week:</Col>
                    <Col>{data.shipped.this_week}</Col>
                  </Row>
                  <Row justify="space-between">
                    <Col>This Month:</Col>
                    <Col>{data.shipped.this_month}</Col>
                  </Row>
                  <Row justify="space-between">
                    <Col>This Year:</Col>
                    <Col>{data.shipped.this_year}</Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      ) : (
        <></>
      )}
    </>
  );
};

export default FulfillmentPerformance;
