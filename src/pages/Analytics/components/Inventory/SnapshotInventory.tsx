import { Card, Row, Col, DatePicker, Form, Space, Dropdown } from 'antd';
import React, { useState, useRef } from 'react';
import { MenuOutlined, QuestionCircleFilled } from '@ant-design/icons';
import { useReactToPrint } from 'react-to-print';
import { Bar } from '@ant-design/charts';
import moment from 'moment';

const snapshotInventoryData = [
  {
    type: 'Inventory Value',
    warehouse: "Jash's Warehouse",
    value: 3231234,
  },
  {
    type: 'Inventory Value',
    warehouse: 'Denmark Test',
    value: 5231234,
  },
  {
    type: 'Inventory Value',
    warehouse: '6006 Warehouse',
    value: 100041827,
  },
];

const SnapshotInventory: React.FC = () => {
  const [snapshotInventoryChartInstance, setSnapshotInventoryChartInstance] = useState(null);
  const snapshotInventoryChartRef = useRef(null);

  const handleTrendingChartPrint = useReactToPrint({
    content: () => snapshotInventoryChartRef.current,
  });

  return (
    <>
      <div style={{ margin: '10px' }}>
        <Row justify="space-between" style={{ marginTop: 10 }}>
          <Col>
            <h2>Inventory Value Snapshot</h2>
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
            <Form.Item label="Snapshot Date" style={{ margin: 0 }}>
              <DatePicker size="small" defaultValue={moment(new Date(2020, 11, 29))} />
            </Form.Item>
          </Form>

          <Row style={{ marginTop: 20 }}>
            <Col flex="auto">
              <Row justify="center">
                <h2>
                  Total Inventory Value: <span style={{ color: 'lightblue' }}>$119,123,135.403</span>
                </h2>
              </Row>
            </Col>
            <Col flex="100px">
              <Dropdown.Button
                menu={{
                  items: [
                    {
                      key: 'print_chart',
                      label: 'Print Chart',
                      disabled: !snapshotInventoryChartInstance,
                      onClick: () => handleTrendingChartPrint(),
                    },
                    {
                      type: 'divider',
                    },
                    {
                      key: 'download_png',
                      label: 'Download PNG image',
                      disabled: !snapshotInventoryChartInstance,
                      onClick: () => snapshotInventoryChartInstance.downloadImage('snapshot-inventory', 'image/png'),
                    },
                    {
                      key: 'download_jpeg',
                      label: 'Download JPEG image',
                      disabled: !snapshotInventoryChartInstance,
                      onClick: () => snapshotInventoryChartInstance.downloadImage('snapshot-inventory', 'image/jpeg'),
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
          <div ref={snapshotInventoryChartRef}>
            <Bar
              data={snapshotInventoryData}
              isStack={true}
              xField="value"
              yField="type"
              seriesField="warehouse"
              label={{
                position: 'middle',
                layout: [
                  {
                    type: 'interval-adjust-position',
                  },
                  {
                    type: 'interval-hide-overlap',
                  },
                  {
                    type: 'adjust-color',
                  },
                ],
                formatter: (item) => {
                  return `$${item.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
                },
              }}
              xAxis={{
                tickInterval: 10000000,
                label: {
                  formatter(text) {
                    return `${Number(text) / 1000000}M`;
                  },
                },
                title: {
                  text: 'Dollar Amount',
                },
              }}
              legend={{
                position: 'bottom',
              }}
              onReady={(chartInstance) => setSnapshotInventoryChartInstance(chartInstance)}
            />
          </div>
        </Card>
      </div>
    </>
  );
};

export default SnapshotInventory;
