import { Card, Row, Col, DatePicker, Form, Space, Select, Dropdown } from 'antd';
import React, { useState, useRef } from 'react';
import { MenuOutlined, QuestionCircleFilled } from '@ant-design/icons';
import { useReactToPrint } from 'react-to-print';
import { Line } from '@ant-design/charts';

const quantitySolidData = [
  {
    date: '1/30',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '1/30',
    type: 'This Year',
    value: 0,
  },
  {
    date: '1/31',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '1/31',
    type: 'This Year',
    value: 1,
  },
  {
    date: '2/1',
    type: 'Last Year',
    value: 1,
  },
  {
    date: '2/1',
    type: 'This Year',
    value: 2,
  },
  {
    date: '2/2',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/2',
    type: 'This Year',
    value: 1,
  },
  {
    date: '2/3',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/3',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/4',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/4',
    type: 'This Year',
    value: 1,
  },
  {
    date: '2/5',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/5',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/6',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/6',
    type: 'This Year',
    value: 1,
  },
  {
    date: '2/7',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/7',
    type: 'This Year',
    value: 1,
  },
  {
    date: '2/8',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/8',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/9',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/9',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/10',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/10',
    type: 'This Year',
    value: 2,
  },
  {
    date: '2/11',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/11',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/12',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/12',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/13',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/13',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/14',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/14',
    type: 'This Year',
    value: 1,
  },
  {
    date: '2/15',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/15',
    type: 'This Year',
    value: 1,
  },
  {
    date: '2/16',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/16',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/17',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/17',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/18',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/18',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/19',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/19',
    type: 'This Year',
    value: 1,
  },
  {
    date: '2/20',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/20',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/21',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/21',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/22',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/22',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/23',
    type: 'Last Year',
    value: 1,
  },
  {
    date: '2/23',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/24',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/24',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/25',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/25',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/26',
    type: 'Last Year',
    value: 1,
  },
  {
    date: '2/26',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/27',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/27',
    type: 'This Year',
    value: 1,
  },
  {
    date: '2/28',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/28',
    type: 'This Year',
    value: 0,
  },
  {
    date: '3/1',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '3/1',
    type: 'This Year',
    value: 0,
  },
  {
    date: '3/2',
    type: 'Last Year',
    value: 1,
  },
  {
    date: '3/2',
    type: 'This Year',
    value: 0,
  },
  {
    date: '3/3',
    type: 'Last Year',
    value: 0,
  },
];

const salesAmountData = [
  {
    date: '1/30',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '1/30',
    type: 'This Year',
    value: 0,
  },
  {
    date: '1/31',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '1/31',
    type: 'This Year',
    value: 22,
  },
  {
    date: '2/1',
    type: 'Last Year',
    value: 33,
  },
  {
    date: '2/1',
    type: 'This Year',
    value: 47,
  },
  {
    date: '2/2',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/2',
    type: 'This Year',
    value: 22,
  },
  {
    date: '2/3',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/3',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/4',
    type: 'Last Year',
    value: 19,
  },
  {
    date: '2/4',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/5',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/5',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/6',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/6',
    type: 'This Year',
    value: 13,
  },
  {
    date: '2/7',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/7',
    type: 'This Year',
    value: 46,
  },
  {
    date: '2/8',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/8',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/9',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/9',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/10',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/10',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/11',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/11',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/12',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/12',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/13',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/13',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/14',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/14',
    type: 'This Year',
    value: 22,
  },
  {
    date: '2/15',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/15',
    type: 'This Year',
    value: 38,
  },
  {
    date: '2/16',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/16',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/17',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/17',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/18',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/18',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/19',
    type: 'Last Year',
    value: 21,
  },
  {
    date: '2/19',
    type: 'This Year',
    value: 41,
  },
  {
    date: '2/20',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/20',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/21',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/21',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/22',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/22',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/23',
    type: 'Last Year',
    value: 13,
  },
  {
    date: '2/23',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/24',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/24',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/25',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/25',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/26',
    type: 'Last Year',
    value: 18,
  },
  {
    date: '2/26',
    type: 'This Year',
    value: 0,
  },
  {
    date: '2/27',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/27',
    type: 'This Year',
    value: 21,
  },
  {
    date: '2/28',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '2/28',
    type: 'This Year',
    value: 0,
  },
  {
    date: '3/1',
    type: 'Last Year',
    value: 0,
  },
  {
    date: '3/1',
    type: 'This Year',
    value: 0,
  },
  {
    date: '3/2',
    type: 'Last Year',
    value: 13,
  },
  {
    date: '3/2',
    type: 'This Year',
    value: 0,
  },
  {
    date: '3/3',
    type: 'Last Year',
    value: 0,
  },
];

const YOYGrowth: React.FC = () => {
  const [quantitySolidChartInstance, setQuantitySolidChartInstance] = useState(null);
  const [salesAmountChartInstance, setSalesAmountChartInstance] = useState(null);
  const quantitySolidChartRef = useRef(null);
  const salesAmountChartRef = useRef(null);

  const handleQuantitySolidChartPrint = useReactToPrint({
    content: () => quantitySolidChartRef.current,
  });

  const handleSalesAmountChartPrint = useReactToPrint({
    content: () => salesAmountChartRef.current,
  });

  return (
    <>
      <div style={{ margin: '10px' }}>
        <Row justify="space-between" style={{ marginTop: 10 }}>
          <Col>
            <h2>Year-Over-Year Growth</h2>
          </Col>
          <Col>
            <QuestionCircleFilled style={{ fontSize: 20 }} />
          </Col>
        </Row>

        <Card style={{ overflowY: 'auto' }}>
          <Form>
            <Space size={10}>
              <Form.Item label="Product" style={{ margin: 0 }}>
                <Select defaultValue="Essential Dash Stiched Quilt & Sham" style={{ width: 300 }} />
              </Form.Item>
              <Form.Item label="Sales Channels" style={{ margin: 0 }}>
                <Select defaultValue="46 Selected" style={{ width: 200 }} size="small" />
              </Form.Item>
              <Form.Item label="From" style={{ margin: 0 }}>
                <DatePicker size="small" />
              </Form.Item>
              <Form.Item label="To" style={{ margin: 0 }}>
                <DatePicker size="small" />
              </Form.Item>
            </Space>
          </Form>

          <Row style={{ marginTop: 20 }} gutter={20} align="middle">
            <Col span={20}>
              <Row>
                <Col flex="auto">
                  <Row justify="center">
                    <h2>Quantity Sold</h2>
                  </Row>
                </Col>
                <Col flex="100px">
                  <Dropdown.Button
                    menu={{
                      items: [
                        {
                          key: 'print_chart',
                          label: (
                            <span onClick={() => handleQuantitySolidChartPrint()}>Print Chart</span>
                          ),
                          disabled: !quantitySolidChartInstance,
                        },
                        {
                          type: 'divider',
                        },
                        {
                          key: 'download_png',
                          label: (
                            <span
                              onClick={() =>
                                quantitySolidChartInstance.downloadImage(
                                  'quantity-sold-chart',
                                  'image/png',
                                )
                              }
                            >
                              Download PNG image
                            </span>
                          ),
                          disabled: !quantitySolidChartInstance,
                        },
                        {
                          key: 'download_jpeg',
                          label: (
                            <span
                              onClick={() =>
                                quantitySolidChartInstance.downloadImage(
                                  'quantity-sold-chart',
                                  'image/jpeg',
                                )
                              }
                            >
                              Download JPEG image
                            </span>
                          ),
                          disabled: !quantitySolidChartInstance,
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
              <div ref={quantitySolidChartRef}>
                <Line
                  data={quantitySolidData}
                  xField="date"
                  yField="value"
                  // yAxis={{
                  //   label: {
                  //     // 数值格式化为千分位
                  //     formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
                  //   },
                  // }}
                  seriesField="type"
                  color={({ type }) => {
                    return type === 'This Year' ? '#F68A20' : '#7CB5EC';
                  }}
                  interactions={[
                    {
                      type: 'element-selected',
                    },
                    {
                      type: 'element-active',
                    },
                  ]}
                  legend={{
                    position: 'bottom',
                  }}
                  point={{
                    shape: 'circle',
                  }}
                  onReady={(chartInstance) => setQuantitySolidChartInstance(chartInstance)}
                />
              </div>
            </Col>
            <Col span={4}>
              <div
                style={{
                  backgroundColor: '#f3f3f3',
                  border: 'solid',
                  borderColor: 'lightgray',
                  borderWidth: 1,
                  padding: 10,
                }}
              >
                <Row justify="space-between">
                  <Col span={12} style={{ textAlign: 'end' }}>
                    <h2>Last Year:</h2>
                    <h2>This Year:</h2>
                    <h2>Change:</h2>
                  </Col>
                  <Col offset={1} style={{ textAlign: 'end' }}>
                    <h2 style={{ color: 'lightskyblue' }}>6</h2>
                    <h2 style={{ color: 'orange' }}>12</h2>
                    <h2 style={{ color: 'lightgreen' }}>100%</h2>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          <Row style={{ marginTop: 20 }} gutter={20} align="middle">
            <Col span={20}>
              <Row>
                <Col flex="auto">
                  <Row justify="center">
                    <h2>Sales Amount</h2>
                  </Row>
                </Col>
                <Col flex="100px">
                  <Dropdown.Button
                    menu={{
                      items: [
                        {
                          key: 'print_chart',
                          label: (
                            <span onClick={() => handleSalesAmountChartPrint()}>Print Chart</span>
                          ),
                          disabled: !salesAmountChartInstance,
                        },
                        {
                          type: 'divider',
                        },
                        {
                          key: 'download_png',
                          label: (
                            <span
                              onClick={() =>
                                salesAmountChartInstance.downloadImage(
                                  'sales-amount-chart',
                                  'image/png',
                                )
                              }
                            >
                              Download PNG image
                            </span>
                          ),
                          disabled: !salesAmountChartInstance,
                        },
                        {
                          key: 'download_jpeg',
                          label: (
                            <span
                              onClick={() =>
                                salesAmountChartInstance.downloadImage(
                                  'sales-amount-chart',
                                  'image/jpeg',
                                )
                              }
                            >
                              Download JPEG image
                            </span>
                          ),
                          disabled: !salesAmountChartInstance,
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
              <div ref={salesAmountChartRef} style={{ height: 'fit-content' }}>
                <Line
                  data={salesAmountData}
                  xField="date"
                  yField="value"
                  // yAxis={{
                  //   label: {
                  //     // 数值格式化为千分位
                  //     formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
                  //   },
                  // }}
                  seriesField="type"
                  color={({ type }) => {
                    return type === 'This Year' ? '#F68A20' : '#7CB5EC';
                  }}
                  interactions={[
                    {
                      type: 'element-selected',
                    },
                    {
                      type: 'element-active',
                    },
                  ]}
                  legend={{
                    position: 'bottom',
                  }}
                  point={{
                    shape: 'circle',
                  }}
                  onReady={(chartInstance) => setSalesAmountChartInstance(chartInstance)}
                />
              </div>
            </Col>
            <Col span={4}>
              <div
                style={{
                  backgroundColor: '#f3f3f3',
                  border: 'solid',
                  borderColor: 'lightgray',
                  borderWidth: 1,
                  padding: 10,
                }}
              >
                <Row justify="space-between">
                  <Col span={12} style={{ textAlign: 'end' }}>
                    <h2>Last Year:</h2>
                    <h2>This Year:</h2>
                    <h2>Change:</h2>
                  </Col>
                  <Col offset={1} style={{ textAlign: 'end' }}>
                    <h2 style={{ color: 'lightskyblue' }}>$116.2915</h2>
                    <h2 style={{ color: 'orange' }}>$269.5805</h2>
                    <h2 style={{ color: 'lightgreen' }}>131.8%</h2>
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

export default YOYGrowth;
