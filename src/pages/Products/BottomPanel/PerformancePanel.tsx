import { OInput } from '@/components/Globals/OInput';
import { Line } from '@ant-design/charts';
import { MenuOutlined } from '@ant-design/icons';
import { Card, Col, Dropdown, Form, Row, Space, Radio } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import type { RadioChangeEvent } from 'antd';
import { useModel } from '@umijs/max';

interface IPerformancePanel {
  height: number;
}

const yoyChartData = [];

for (const d = new Date(2021, 10, 7); d <= new Date(2022, 0, 5); d.setDate(d.getDate() + 1)) {
  yoyChartData.push({
    date: `${d.getMonth()}/${d.getDate()}`,
    value: 0,
  });
}

const PerformancePanel: React.FC<IPerformancePanel> = ({ height }) => {
  const [yoyChartInstance, setYOYChartInstance] = useState(null);
  const [selectedMode, setSelectedMode] = useState<'yearOverYear' | 'recentOrders'>('yearOverYear');
  const yoyChartRef = useRef(null);
  const { editableProduct } = useModel('product');

  const handleYOYChartPrint = useReactToPrint({
    content: () => yoyChartRef.current,
  });

  const handleTabSelect = (e: RadioChangeEvent) => {
    setSelectedMode(e.target.value);
  };

  useEffect(() => {
    if (!editableProduct) setSelectedMode('yearOverYear');
  }, [editableProduct]);

  return (
    <>
      <div className="title-row space-between">
        <h1 className="page-title">Performance</h1>
        <Radio.Group size="small" buttonStyle="solid" value={selectedMode} onChange={handleTabSelect}>
          <Space size={HORIZONTAL_SPACE_SIZE}>
            <Radio.Button value="yearOverYear">Year-Over-Year</Radio.Button>
            <Radio.Button value="recentOrders">Recent Orders</Radio.Button>
          </Space>
        </Radio.Group>
      </div>
      <Card className="content-box" style={{ height, padding: '5px 10px' }}>
        <Form style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Space size={HORIZONTAL_SPACE_SIZE}>
            <Form.Item>
              <OInput
                type="select"
                name="days"
                defaultValue={'30'}
                options={[
                  {
                    value: '30',
                    text: '30 Days',
                  },
                ]}
                style={{ width: 200 }}
              />
            </Form.Item>
            <Form.Item>
              <OInput
                type="select"
                name="quantity"
                defaultValue={'quantitySold'}
                options={[
                  {
                    value: 'quantitySold',
                    text: 'Quantity Solds',
                  },
                ]}
                style={{ width: 200 }}
              />
            </Form.Item>
          </Space>
        </Form>
        {editableProduct && (
          <>
            <Row justify="end" style={{ marginTop: 5 }}>
              <Col>
                <Dropdown.Button
                  menu={{
                    items: [
                      {
                        key: 'print_chart',
                        label: 'Print Chart',
                        disabled: !yoyChartInstance,
                        onClick: () => handleYOYChartPrint(),
                      },
                      {
                        type: 'divider',
                      },
                      {
                        key: 'download_png',
                        label: 'Download PNG image',
                        disabled: !yoyChartInstance,
                        onClick: () => yoyChartInstance.downloadImage('Year-Over-Year-chart', 'image/png'),
                      },
                      {
                        key: 'download_jpeg',
                        label: 'Download JPEG image',
                        disabled: !yoyChartInstance,
                        onClick: () => yoyChartInstance.downloadImage('Year-Over-Year-chart', 'image/jpeg'),
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
            <div ref={yoyChartRef}>
              <Line
                data={yoyChartData}
                xField="date"
                yField="value"
                yAxis={{
                  title: {
                    text: 'Quantity',
                    position: 'center',
                  },
                  min: -1,
                  tickInterval: 1,
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
                height={100}
                onReady={(chartInstance) => setYOYChartInstance(chartInstance)}
              />
            </div>
          </>
        )}
        {!editableProduct && (
          <h2 style={{ textAlign: 'center', marginTop: height / 2.0 - 50 }}>Select a product to view performance</h2>
        )}
      </Card>
    </>
  );
};

export default PerformancePanel;
