import { Card, Row, Col, DatePicker, Form, Select, Dropdown } from 'antd';
import React, { useState, useRef } from 'react';
import { MenuOutlined, QuestionCircleFilled } from '@ant-design/icons';
import { useReactToPrint } from 'react-to-print';
import { Area } from '@ant-design/charts';

const shipmentsByCarrierData = [
  {
    date: '11/30',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '11/30',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '11/30',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '11/30',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/01',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/01',
    value: 1,
    carrier: 'USPS',
  },
  {
    date: '12/01',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/01',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/02',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/02',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/02',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/02',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/03',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/03',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/03',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/03',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/04',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/04',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/04',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/04',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/05',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/05',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/05',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/05',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/06',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/06',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/06',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/06',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/07',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/07',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/07',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/07',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/08',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/08',
    value: 1,
    carrier: 'USPS',
  },
  {
    date: '12/08',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/08',
    value: 1,
    carrier: 'Other',
  },
  {
    date: '12/09',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/09',
    value: 1,
    carrier: 'USPS',
  },
  {
    date: '12/09',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/09',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/10',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/10',
    value: 1,
    carrier: 'USPS',
  },
  {
    date: '12/10',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/10',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/11',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/11',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/11',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/11',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/12',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/12',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/12',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/12',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/13',
    value: 2,
    carrier: 'FedEx',
  },
  {
    date: '12/13',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/13',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/13',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/14',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/14',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/14',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/14',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/15',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/15',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/15',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/15',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/16',
    value: 2,
    carrier: 'FedEx',
  },
  {
    date: '12/16',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/16',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/16',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/17',
    value: 1,
    carrier: 'FedEx',
  },
  {
    date: '12/17',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/17',
    value: 1,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/17',
    value: 1,
    carrier: 'Other',
  },
  {
    date: '12/18',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/18',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/18',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/18',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/19',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/19',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/19',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/19',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/20',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/20',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/20',
    value: 1,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/20',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/21',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/21',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/21',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/21',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/22',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/22',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/22',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/22',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/23',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/23',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/23',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/23',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/24',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/24',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/24',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/24',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/25',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/25',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/25',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/25',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/26',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/26',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/26',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/26',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/27',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/27',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/27',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/27',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/28',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/28',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/28',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/28',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/29',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/29',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/29',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/29',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/30',
    value: 0,
    carrier: 'FedEx',
  },
  {
    date: '12/30',
    value: 0,
    carrier: 'USPS',
  },
  {
    date: '12/30',
    value: 0,
    carrier: '3PL Best Rate',
  },
  {
    date: '12/30',
    value: 0,
    carrier: 'Other',
  },
];

const Shipments: React.FC = () => {
  const [shipmentByCarrierChartInstance, setShipmentByCarrierChartInstance] = useState(null);
  const shipmentByCarrierChartRef = useRef(null);

  const handleQuantitySolidChartPrint = useReactToPrint({
    content: () => shipmentByCarrierChartRef.current,
  });

  return (
    <>
      <div style={{ margin: '10px' }}>
        <Row justify="space-between" style={{ marginTop: 10 }}>
          <Col>
            <h2>Shipments</h2>
          </Col>
          <Col>
            <QuestionCircleFilled style={{ fontSize: 20 }} />
          </Col>
        </Row>

        <Card style={{ overflowY: 'auto' }}>
          <Form layout="vertical">
            <Row>
              <Col span={8}>
                <Form.Item label="Sales Channels" style={{ margin: 0 }}>
                  <Select defaultValue="46 Selected" style={{ width: 300 }} size="small" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Warehouses" style={{ margin: 0 }}>
                  <Select defaultValue="37 Selected" style={{ width: 200 }} size="small" />
                </Form.Item>
              </Col>
              <Col span={5}>
                <Form.Item label="Ship Date From" style={{ margin: 0 }}>
                  <DatePicker size="small" />
                </Form.Item>
              </Col>
              <Col span={5}>
                <Form.Item label="Ship Date To" style={{ margin: 0 }}>
                  <DatePicker size="small" />
                </Form.Item>
              </Col>
            </Row>
          </Form>

          <Row style={{ marginTop: 20 }} gutter={20} align="middle">
            <Col span={20}>
              <Row>
                <Col flex="auto">
                  <Row justify="center">
                    <h2>Shipments By Carrier</h2>
                  </Row>
                </Col>
                <Col flex="100px">
                  <Dropdown.Button
                    menu={{
                      items: [
                        {
                          key: 'print_chart',
                          label: 'Print Chart',
                          disabled: !shipmentByCarrierChartInstance,
                          onClick: () => handleQuantitySolidChartPrint(),
                        },
                        {
                          type: 'divider',
                        },
                        {
                          key: 'download_png',
                          label: 'Download PNG image',
                          disabled: !shipmentByCarrierChartInstance,
                          onClick: () =>
                            shipmentByCarrierChartInstance.downloadImage(
                              'shipments-by-carrier',
                              'image/png',
                            ),
                        },
                        {
                          key: 'download_jpeg',
                          label: 'Download JPEG image',
                          disabled: !shipmentByCarrierChartInstance,
                          onClick: () =>
                            shipmentByCarrierChartInstance.downloadImage(
                              'shipments-by-carrier',
                              'image/jpeg',
                            ),
                        },
                        {
                          key: 'download_pdf',
                          label: 'Download PDF document',
                          disabled: true,
                        },
                        {
                          key: 'download_svg',
                          label: 'Download SVG Vector image',
                          disabled: true,
                        },
                      ],
                    }}
                    placement="bottomRight"
                    icon={<MenuOutlined />}
                  />
                </Col>
              </Row>
              <div ref={shipmentByCarrierChartRef}>
                <Area
                  data={shipmentsByCarrierData}
                  xField="date"
                  yField="value"
                  seriesField="carrier"
                  color={({ carrier }) => {
                    return carrier === 'USPS'
                      ? '#727276'
                      : carrier === 'FedEx'
                      ? '#9DC7F1'
                      : carrier === '3PL Best Rate'
                      ? '#ACF19D'
                      : '#F9BA85';
                  }}
                  yAxis={{
                    tickInterval: 0.5,
                    title: {
                      text: 'Shipments',
                      position: 'center',
                    },
                  }}
                  legend={{
                    position: 'bottom',
                  }}
                  interactions={[
                    {
                      type: 'element-selected',
                    },
                    {
                      type: 'element-active',
                    },
                  ]}
                  onReady={(chartInstance) => setShipmentByCarrierChartInstance(chartInstance)}
                />
              </div>
            </Col>
            <Col span={4}>
              <div
                style={{
                  border: 'solid',
                  borderColor: 'lightgray',
                  borderWidth: 1,
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
              >
                <Row justify="space-between">
                  <Col span={24} style={{ textAlign: 'center' }}>
                    <h2
                      style={{
                        borderBottom: 'solid',
                        borderBottomColor: 'lightgray',
                        borderBottomWidth: 2,
                      }}
                    >
                      Period Totals
                    </h2>
                  </Col>
                  <Col>
                    <h2>FedEx:</h2>
                    <h2>USPS:</h2>
                    <h2>3PL Best Rate:</h2>
                    <h2>Other:</h2>
                    <h2
                      style={{
                        borderTop: 'solid',
                        borderTopColor: 'lightgray',
                        borderTopWidth: 2,
                      }}
                    >
                      <b>Total:</b>
                    </h2>
                  </Col>
                  <Col style={{ textAlign: 'end' }}>
                    <h2>5</h2>
                    <h2>4</h2>
                    <h2>2</h2>
                    <h2>2</h2>
                    <h2
                      style={{
                        borderTop: 'solid',
                        borderTopColor: 'lightgray',
                        borderTopWidth: 2,
                      }}
                    >
                      <b>13</b>
                    </h2>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default Shipments;
