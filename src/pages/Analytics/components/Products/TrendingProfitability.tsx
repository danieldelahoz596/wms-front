import { Card, Row, Col, DatePicker, Form, Space, Select, Dropdown } from 'antd';
import React, { useState, useRef } from 'react';
import { MenuOutlined, QuestionCircleFilled } from '@ant-design/icons';
import { useReactToPrint } from 'react-to-print';
import { Area } from '@ant-design/charts';

const trendingProfitabilityData = [];

for (const d = new Date(2022, 8, 31); d <= new Date(2022, 10, 27); d.setDate(d.getDate() + 1)) {
  trendingProfitabilityData.push({
    date: `${d.getMonth()}/${d.getDate()}`,
    value: 0,
    type: 'Manual Orders',
  });
}

trendingProfitabilityData.push(
  ...[
    {
      date: '10/28',
      value: 0,
      type: 'Manual Orders',
    },
    {
      date: '10/29',
      value: -100,
      type: 'Manual Orders',
    },
    {
      date: '10/30',
      value: -200,
      type: 'Manual Orders',
    },
    {
      date: '10/31',
      value: -300,
      type: 'Manual Orders',
    },
    {
      date: '11/1',
      value: -200,
      type: 'Manual Orders',
    },
    {
      date: '11/2',
      value: -100,
      type: 'Manual Orders',
    },
    {
      date: '11/3',
      value: 0,
      type: 'Manual Orders',
    },
  ],
);

for (const d = new Date(2022, 11, 4); d <= new Date(2023, 1, 20); d.setDate(d.getDate() + 1)) {
  trendingProfitabilityData.push({
    date: `${d.getMonth()}/${d.getDate()}`,
    value: 0,
    type: 'Manual Orders',
  });
}

const TrendingProfitability: React.FC = () => {
  const [trendingChartInstance, setTrendingChartInstance] = useState(null);
  const trendingChartRef = useRef(null);

  const handleTrendingChartPrint = useReactToPrint({
    content: () => trendingChartRef.current,
  });

  return (
    <>
      <div style={{ margin: '10px' }}>
        <Row justify="space-between" style={{ marginTop: 10 }}>
          <Col>
            <h2>Trending Profitability</h2>
          </Col>
          <Col>
            <Space size={10}>
              <h2 style={{ textTransform: 'uppercase' }}>This report is only available in utc</h2>
              <QuestionCircleFilled style={{ fontSize: 20 }} />
            </Space>
          </Col>
        </Row>

        <Card style={{ overflowY: 'auto' }}>
          <Form>
            <Space size={10}>
              <Form.Item label="For" style={{ margin: 0 }}>
                <Select
                  style={{ width: 300 }}
                  size="small"
                  options={[
                    { value: 'sales_channel', label: 'Sales Channel' },
                    { value: 'company', label: 'Company' },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Sales Channels" style={{ margin: 0 }}>
                <Select defaultValue="Manual Orders" style={{ width: 200 }} size="small" />
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
                    <h2>Trending Profitability For Sales Channels</h2>
                  </Row>
                </Col>
                <Col flex="100px">
                  <Dropdown.Button
                    menu={{
                      items: [
                        {
                          key: 'print_chart',
                          label: 'Print Chart',
                          disabled: !trendingChartInstance,
                          onClick: () => handleTrendingChartPrint(),
                        },
                        {
                          type: 'divider',
                        },
                        {
                          key: 'download_png',
                          label: 'Download PNG image',
                          disabled: !trendingChartInstance,
                          onClick: () =>
                            trendingChartInstance.downloadImage(
                              'listing-profitability-chart',
                              'image/png',
                            ),
                        },
                        {
                          key: 'download_jpeg',
                          label: 'Download JPEG image',
                          disabled: !trendingChartInstance,
                          onClick: () =>
                            trendingChartInstance.downloadImage(
                              'listing-profitability-chart',
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
              <div ref={trendingChartRef}>
                <Area
                  data={trendingProfitabilityData}
                  xField="date"
                  yField="value"
                  yAxis={{
                    min: -400,
                    max: 100,
                    title: {
                      text: 'Profit($)',
                      position: 'center',
                    },
                  }}
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
                  onReady={(chartInstance) => setTrendingChartInstance(chartInstance)}
                />
              </div>
            </Col>
            <Col span={4}>
              <div
                style={{
                  border: 'solid',
                  borderColor: 'lightgray',
                  borderWidth: 1,
                  padding: 10,
                }}
              >
                <>
                  <h2 style={{ textAlign: 'center' }}>Period Totals</h2>
                  <Row justify="space-between">
                    <Col span={14}>
                      <h3>Sales Channel</h3>
                      <h3>Manual Orders</h3>
                      <h3>Total:</h3>
                    </Col>
                    <Col offset={1} style={{ textAlign: 'end' }}>
                      <h3>Profit</h3>
                      <h3>$-303.97</h3>
                      <h3>$-303.97</h3>
                    </Col>
                  </Row>
                </>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default TrendingProfitability;
