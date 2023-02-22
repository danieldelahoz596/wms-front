import { Card, Row, Col, DatePicker, Form, Space, Dropdown, Select } from 'antd';
import React, { useState, useRef } from 'react';
import { MenuOutlined, QuestionCircleFilled } from '@ant-design/icons';
import { useReactToPrint } from 'react-to-print';
import { Area } from '@ant-design/charts';
import moment from 'moment';

const trendingInventoryData = [
  {
    warehouse: '6006 Warehouse',
    date: '11/30',
    value: 100041827,
  },
  {
    warehouse: "Jash's Warehouse",
    date: '11/30',
    value: 3231234,
  },
  {
    warehouse: 'Denmark Test',
    date: '11/30',
    value: 5231234,
  },
  {
    warehouse: '6006 Warehouse',
    date: '12/02',
    value: 100041827,
  },
  {
    warehouse: "Jash's Warehouse",
    date: '12/02',
    value: 3231234,
  },
  {
    warehouse: 'Denmark Test',
    date: '12/02',
    value: 5231234,
  },
  {
    warehouse: '6006 Warehouse',
    date: '12/04',
    value: 100041827,
  },
  {
    warehouse: "Jash's Warehouse",
    date: '12/04',
    value: 3231234,
  },
  {
    warehouse: 'Denmark Test',
    date: '12/04',
    value: 5231234,
  },
  {
    warehouse: '6006 Warehouse',
    date: '12/06',
    value: 100041827,
  },
  {
    warehouse: "Jash's Warehouse",
    date: '12/06',
    value: 3231234,
  },
  {
    warehouse: 'Denmark Test',
    date: '12/06',
    value: 5231234,
  },
  {
    warehouse: '6006 Warehouse',
    date: '12/08',
    value: 100041827,
  },
  {
    warehouse: "Jash's Warehouse",
    date: '12/08',
    value: 3231234,
  },
  {
    warehouse: 'Denmark Test',
    date: '12/08',
    value: 5231234,
  },
  {
    warehouse: '6006 Warehouse',
    date: '12/10',
    value: 100041827,
  },
  {
    warehouse: "Jash's Warehouse",
    date: '12/10',
    value: 3231234,
  },
  {
    warehouse: 'Denmark Test',
    date: '12/10',
    value: 5231234,
  },
  {
    warehouse: '6006 Warehouse',
    date: '12/12',
    value: 100041827,
  },
  {
    warehouse: "Jash's Warehouse",
    date: '12/12',
    value: 3231234,
  },
  {
    warehouse: 'Denmark Test',
    date: '12/12',
    value: 5231234,
  },
  {
    warehouse: '6006 Warehouse',
    date: '12/14',
    value: 100041827,
  },
  {
    warehouse: "Jash's Warehouse",
    date: '12/14',
    value: 3231234,
  },
  {
    warehouse: 'Denmark Test',
    date: '12/14',
    value: 5231234,
  },
];

const TrendingInventory: React.FC = () => {
  const [trendingInventoryChartInstance, setTrendingInventoryChartInstance] = useState(null);
  const trendingInventoryChartRef = useRef(null);

  const handleTrendingChartPrint = useReactToPrint({
    content: () => trendingInventoryChartRef.current,
  });

  return (
    <>
      <div style={{ margin: '10px' }}>
        <Row justify="space-between" style={{ marginTop: 10 }}>
          <Col>
            <h2>Trending Inventory Value</h2>
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
              <Form.Item label="Warehouses" style={{ margin: 0 }}>
                <Select style={{ width: 200 }} size="small" defaultValue="37 Selected" />
              </Form.Item>
              <Form.Item label="From" style={{ margin: 0 }}>
                <DatePicker size="small" defaultValue={moment(new Date(2020, 10, 29))} />
              </Form.Item>
              <Form.Item label="To" style={{ margin: 0 }}>
                <DatePicker size="small" defaultValue={moment(new Date(2020, 11, 29))} />
              </Form.Item>
            </Space>
          </Form>

          <Row style={{ marginTop: 20 }}>
            <Col flex="auto">
              <Row justify="center">
                <h2>Inventory Value By Warehouse</h2>
              </Row>
            </Col>
            <Col flex="100px">
              <Dropdown.Button
                menu={{
                  items: [
                    {
                      key: 'print_chart',
                      label: 'Print Chart',
                      disabled: !trendingInventoryChartInstance,
                      onClick: () => handleTrendingChartPrint(),
                    },
                    {
                      type: 'divider',
                    },
                    {
                      key: 'download_png',
                      label: 'Download PNG image',
                      disabled: !trendingInventoryChartInstance,
                      onClick: () => trendingInventoryChartInstance.downloadImage('trending-inventory', 'image/png'),
                    },
                    {
                      key: 'download_jpeg',
                      label: 'Download JPEG image',
                      disabled: !trendingInventoryChartInstance,
                      onClick: () => trendingInventoryChartInstance.downloadImage('trending-inventory', 'image/jpeg'),
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
          <div ref={trendingInventoryChartRef} style={{ width: '100%' }}>
            <Area
              data={trendingInventoryData}
              xField="date"
              yField="value"
              seriesField="warehouse"
              yAxis={{
                tickInterval: 50000000,
                title: {
                  text: 'Value($)',
                  position: 'center',
                },
              }}
              legend={{
                position: 'bottom',
              }}
              onReady={(chartInstance) => setTrendingInventoryChartInstance(chartInstance)}
            />
          </div>
        </Card>
      </div>
    </>
  );
};

export default TrendingInventory;
