import { Card, Row, Col, DatePicker, Form, Space, Dropdown, Select } from 'antd';
import React, { useState, useRef } from 'react';
import { MenuOutlined, QuestionCircleFilled } from '@ant-design/icons';
import { useReactToPrint } from 'react-to-print';
import { Column } from '@ant-design/charts';
import moment from 'moment';

const lifetimeValueData = [
  {
    level: 1,
    value: 0,
  },
  {
    level: 2,
    value: 0,
  },
  {
    level: 3,
    value: 0,
  },
  {
    level: 4,
    value: 0,
  },
  {
    level: 5,
    value: 0,
  },
  {
    level: 6,
    value: 0,
  },
  {
    level: 7,
    value: 0,
  },
  {
    level: 8,
    value: 0,
  },
  {
    level: 9,
    value: 0,
  },
  {
    level: 10,
    value: 60,
  },
];

const LifetimeValue: React.FC = () => {
  const [lifetimeValueChartInstance, setLifetimeValueChartInstance] = useState(null);
  const lifetimeValueChartRef = useRef(null);

  const handleLifetimeValueChartPrint = useReactToPrint({
    content: () => lifetimeValueChartRef.current,
  });

  return (
    <>
      <div style={{ margin: '10px' }}>
        <Row justify="space-between" style={{ marginTop: 10 }}>
          <Col>
            <h2>Customer Lifetime Value</h2>
          </Col>
          <Col>
            <QuestionCircleFilled style={{ fontSize: 20 }} />
          </Col>
        </Row>

        <Card style={{ overflowY: 'auto' }}>
          <Form>
            <Space size={10}>
              <Form.Item label="Sales Channel" style={{ margin: 0 }}>
                <Select style={{ width: 200 }} size="small" defaultValue="37 Selected" />
              </Form.Item>
              <Form.Item label="From" style={{ margin: 0 }}>
                <DatePicker size="small" defaultValue={moment(new Date(2020, 6, 1))} />
              </Form.Item>
              <Form.Item label="To" style={{ margin: 0 }}>
                <DatePicker size="small" defaultValue={moment(new Date(2020, 11, 29))} />
              </Form.Item>
            </Space>
          </Form>

          <Row style={{ marginTop: 20 }}>
            <Col flex="auto">
              <Row justify="center">
                <h2>Median Lifetime Value by Number of Purchases</h2>
              </Row>
            </Col>
            <Col flex="100px">
              <Dropdown.Button
                menu={{
                  items: [
                    {
                      key: 'print_chart',
                      label: 'Print Chart',
                      disabled: !lifetimeValueChartInstance,
                      onClick: () => handleLifetimeValueChartPrint(),
                    },
                    {
                      type: 'divider',
                    },
                    {
                      key: 'download_png',
                      label: 'Download PNG image',
                      disabled: !lifetimeValueChartInstance,
                      onClick: () =>
                        lifetimeValueChartInstance.downloadImage('lifetime-value', 'image/png'),
                    },
                    {
                      key: 'download_jpeg',
                      label: 'Download JPEG image',
                      disabled: !lifetimeValueChartInstance,
                      onClick: () =>
                        lifetimeValueChartInstance.downloadImage('lifetime-value', 'image/jpeg'),
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
          <div ref={lifetimeValueChartRef} style={{ width: '100%' }}>
            <Column
              data={lifetimeValueData}
              xField="level"
              yField="value"
              xAxis={{
                title: {
                  text: 'Number of Purchases',
                  position: 'center',
                },
              }}
              yAxis={{
                tickInterval: 10,
                title: {
                  text: 'LTV($)',
                  position: 'center',
                },
              }}
              label={{
                rotate: 4.75,
                formatter: ({ value }) => `$${Number(value).toFixed(2)}`,
                position: 'top',
                style: {
                  fill: '#FFFFFF',
                  opacity: 0.6,
                  fontSize: 20,
                },
                offsetX: -50,
                offsetY: 10,
              }}
              // legend={{
              //   position: 'bottom',
              // }}
              onReady={(chartInstance) => setLifetimeValueChartInstance(chartInstance)}
            />
          </div>
        </Card>
      </div>
    </>
  );
};

export default LifetimeValue;
