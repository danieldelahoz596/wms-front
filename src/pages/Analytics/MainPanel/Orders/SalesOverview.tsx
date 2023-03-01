import { Card, Row, Col, DatePicker, Form, Select, Dropdown, Button } from 'antd';
import React, { useState, useRef } from 'react';
import { MenuOutlined, QuestionCircleFilled } from '@ant-design/icons';
import { useReactToPrint } from 'react-to-print';
import { Area } from '@ant-design/charts';

const salesOverviewData = [
  {
    date: '11/30',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '11/30',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '11/30',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '11/30',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/01',
    value: 30,
    carrier: 'woocommerce',
  },
  {
    date: '12/01',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/01',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/01',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/02',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/02',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/02',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/02',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/03',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/03',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/03',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/03',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/04',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/04',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/04',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/04',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/05',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/05',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/05',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/05',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/06',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/06',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/06',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/06',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/07',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/07',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/07',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/07',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/08',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/08',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/08',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/08',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/09',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/09',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/09',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/09',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/10',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/10',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/10',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/10',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/11',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/11',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/11',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/11',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/12',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/12',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/12',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/12',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/13',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/13',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/13',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/13',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/14',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/14',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/14',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/14',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/15',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/15',
    value: 30,
    carrier: 'tracker',
  },
  {
    date: '12/15',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/15',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/16',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/16',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/16',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/16',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/17',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/17',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/17',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/17',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/18',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/18',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/18',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/18',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/19',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/19',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/19',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/19',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/20',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/20',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/20',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/20',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/21',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/21',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/21',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/21',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/22',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/22',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/22',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/22',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/23',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/23',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/23',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/23',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/24',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/24',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/24',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/24',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/25',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/25',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/25',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/25',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/26',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/26',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/26',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/26',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/27',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/27',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/27',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/27',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/28',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/28',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/28',
    value: 55,
    carrier: 'skubana',
  },
  {
    date: '12/28',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/29',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/29',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/29',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/29',
    value: 0,
    carrier: 'Other',
  },
  {
    date: '12/30',
    value: 0,
    carrier: 'woocommerce',
  },
  {
    date: '12/30',
    value: 0,
    carrier: 'tracker',
  },
  {
    date: '12/30',
    value: 0,
    carrier: 'skubana',
  },
  {
    date: '12/30',
    value: 0,
    carrier: 'Other',
  },
];

const SalesOverview: React.FC = () => {
  const [salesOverviewChartInstance, setSalesOverviewChartInstance] = useState(null);
  const salesOverviewChartRef = useRef(null);

  const handleSalesOverviewChartPrint = useReactToPrint({
    content: () => salesOverviewChartRef.current,
  });

  return (
    <>
      <div style={{ margin: '10px' }}>
        <Row justify="space-between" style={{ marginTop: 10 }}>
          <Col>
            <h2>Sales Overview</h2>
          </Col>
          <Col>
            <QuestionCircleFilled style={{ fontSize: 20 }} />
          </Col>
        </Row>

        <Card style={{ overflowY: 'auto' }}>
          <Form layout="vertical">
            <Row>
              <Col span={7}>
                <Form.Item label="Channel" style={{ margin: 0 }} colon={true}>
                  <Select defaultValue="46 Selected" style={{ width: 300 }} size="small" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Status" style={{ margin: 0 }}>
                  <Select defaultValue="7 Selected" style={{ width: 200 }} size="small" />
                </Form.Item>
              </Col>
              <Col span={3}>
                <Form.Item label="From" style={{ margin: 0 }}>
                  <DatePicker size="small" />
                </Form.Item>
              </Col>
              <Col span={3}>
                <Form.Item label="To" style={{ margin: 0 }}>
                  <DatePicker size="small" />
                </Form.Item>
              </Col>
              <Col span={5}>
                <Row gutter={10} align="middle">
                  <Col>
                    <span>By:</span>
                  </Col>
                  <Col>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <Button>Revenue</Button>
                      <Button style={{ marginTop: 5 }}>Units Sold</Button>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>

          <Row style={{ marginTop: 20 }} gutter={20} align="middle">
            <Col span={20}>
              <Row>
                <Col flex="auto">
                  <Row justify="center">
                    <h2>Revenue By Sales Channel</h2>
                  </Row>
                </Col>
                <Col flex="100px">
                  <Dropdown.Button
                    menu={{
                      items: [
                        {
                          key: 'print_chart',
                          label: 'Print Chart',
                          disabled: !salesOverviewChartInstance,
                          onClick: () => handleSalesOverviewChartPrint(),
                        },
                        {
                          type: 'divider',
                        },
                        {
                          key: 'download_png',
                          label: 'Download PNG image',
                          disabled: !salesOverviewChartInstance,
                          onClick: () => salesOverviewChartInstance.downloadImage('sales-overview', 'image/png'),
                        },
                        {
                          key: 'download_jpeg',
                          label: 'Download JPEG image',
                          disabled: !salesOverviewChartInstance,
                          onClick: () => salesOverviewChartInstance.downloadImage('sales-overview', 'image/jpeg'),
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
              <div ref={salesOverviewChartRef}>
                <Area
                  data={salesOverviewData}
                  xField="date"
                  yField="value"
                  seriesField="carrier"
                  color={({ carrier }) => {
                    return carrier === 'tracker' ? '#727276' : carrier === 'woocommerce' ? '#9DC7F1' : '#F9BA85';
                  }}
                  yAxis={{
                    tickInterval: 25,
                    title: {
                      text: 'Revenue($)',
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
                  onReady={(chartInstance) => setSalesOverviewChartInstance(chartInstance)}
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
                    <h2>woocommerce:</h2>
                    <h2>tracker:</h2>
                    <h2>skubana:</h2>
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
                    <h2>$30</h2>
                    <h2>$30</h2>
                    <h2>$55</h2>
                    <h2>$0</h2>
                    <h2
                      style={{
                        borderTop: 'solid',
                        borderTopColor: 'lightgray',
                        borderTopWidth: 2,
                      }}
                    >
                      <b>$115</b>
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

export default SalesOverview;
