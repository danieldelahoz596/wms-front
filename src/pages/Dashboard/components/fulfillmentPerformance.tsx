import { CheckCircleOutlined, ClockCircleOutlined, PauseOutlined, WarningOutlined } from '@ant-design/icons';
import { FormattedMessage } from '@umijs/max';
import { Row, Col } from 'antd';

interface IFulfillmentPerformance {
  data: any;
}

const FulfillmentPerformance: React.FC<IFulfillmentPerformance> = ({ data }) => {
  return (
    <>
      <div style={{ fontSize: 25 }}>
        <FormattedMessage id="pages.dashboard.fulfillmentPerformance" />
      </div>
      {!!data ? (
        <Row gutter={[30, 30]} className="mt-10">
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
                  <WarningOutlined className="mr-10" />
                  <FormattedMessage id="pages.dashboard.unresolved" />
                </Col>
              </Row>
              <Row className="ml-10">
                <Col span={24}>
                  <Row justify="space-between">
                    <Col>
                      <FormattedMessage id="pages.dashboard.missingProductInfo" />:
                    </Col>
                    <Col>{data.unresolved.missing_product_info}</Col>
                  </Row>
                  <Row justify="space-between">
                    <Col>
                      <FormattedMessage id="pages.dashboard.missingStockLocation" />:
                    </Col>
                    <Col>{data.unresolved.missing_stock_location}</Col>
                  </Row>
                  <Row justify="space-between">
                    <Col>
                      <FormattedMessage id="pages.dashboard.outOfStock" />:
                    </Col>
                    <Col>{data.unresolved.out_of_stock}</Col>
                  </Row>
                  <Row>
                    <hr style={{ width: '100%' }} />
                  </Row>
                  <Row justify="space-between">
                    <Col>
                      <FormattedMessage id="pages.dashboard.total" />:
                    </Col>
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
                  <FormattedMessage id="pages.dashboard.paused" />
                </Col>
              </Row>
              <Row style={{ marginLeft: 10, marginRight: 10 }}>
                <Col span={24}>
                  <Row justify="space-between">
                    <Col>
                      <FormattedMessage id="pages.dashboard.awaitingPayment" />:
                    </Col>
                    <Col>{data.paused.awaiting_payment}</Col>
                  </Row>
                  <Row justify="space-between">
                    <Col>
                      <FormattedMessage id="pages.dashboard.onHold" />:
                    </Col>
                    <Col>{data.paused.on_hold}</Col>
                  </Row>
                  <Row>
                    <hr style={{ width: '100%' }} />
                  </Row>
                  <Row justify="space-between">
                    <Col>
                      <FormattedMessage id="pages.dashboard.total" />:
                    </Col>
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
                  <FormattedMessage id="pages.dashboard.awaitingFulfillment" />
                </Col>
              </Row>
              <Row style={{ marginLeft: 10, marginRight: 10 }}>
                <Col span={24}>
                  <Row justify="space-between">
                    <Col>
                      <FormattedMessage id="pages.dashboard.awaitingShipment" />:
                    </Col>
                    <Col>{data.awaiting_fulfillment.awaiting_shipment}</Col>
                  </Row>
                  <Row justify="space-between">
                    <Col>
                      <FormattedMessage id="pages.dashboard.awaitingExport" />:
                    </Col>
                    <Col>{data.awaiting_fulfillment.awaiting_export}</Col>
                  </Row>
                  <Row justify="space-between">
                    <Col>
                      <FormattedMessage id="pages.dashboard.pendingFulfillment" />:
                    </Col>
                    <Col>{data.awaiting_fulfillment.pending_fulfillment}</Col>
                  </Row>
                  <Row>
                    <hr style={{ width: '100%' }} />
                  </Row>
                  <Row justify="space-between">
                    <Col>
                      <FormattedMessage id="pages.dashboard.total" />:
                    </Col>
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
                backgroundColor: '#70D7B1',
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
                  <FormattedMessage id="pages.dashboard.shipped" />
                </Col>
              </Row>
              <Row style={{ marginLeft: 10, marginRight: 10 }}>
                <Col span={24}>
                  <Row justify="space-between">
                    <Col>
                      <FormattedMessage id="pages.dashboard.today" />:
                    </Col>
                    <Col>{data.shipped.today}</Col>
                  </Row>
                  <Row justify="space-between">
                    <Col>
                      <FormattedMessage id="pages.dashboard.thisWeek" />:
                    </Col>
                    <Col>{data.shipped.this_week}</Col>
                  </Row>
                  <Row justify="space-between">
                    <Col>
                      <FormattedMessage id="pages.dashboard.thisMonth" />:
                    </Col>
                    <Col>{data.shipped.this_month}</Col>
                  </Row>
                  <Row justify="space-between">
                    <Col>
                      <FormattedMessage id="pages.dashboard.thisYear" />:
                    </Col>
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
