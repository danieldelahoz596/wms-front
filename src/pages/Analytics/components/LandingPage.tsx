import LaunchIcon from '@/utils/icons/launch';
import {
  ArrowDownOutlined,
  EllipsisOutlined,
  InfoOutlined,
  MenuOutlined,
  QuestionCircleFilled,
  ScissorOutlined,
} from '@ant-design/icons';
import { Card, Row, Col, Space, Table, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { Pie } from '@ant-design/charts';
import ExportModal from '@/pages/Analytics/components/Modals/Export';
import { useState, useRef } from 'react';
import tableExport from 'antd-table-export';
import { useReactToPrint } from 'react-to-print';

const TColumns = [
  {
    title: '',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Action To Take',
    dataIndex: 'action_to_take',
    key: 'action_to_take',
  },
  {
    title: 'Info',
    key: 'info',
    render: () => <InfoOutlined style={{ color: 'skyblue' }} />,
    align: 'center',
  },
  {
    title: 'Opportunity',
    key: 'opportunity',
    render: () => (
      <span>
        <ScissorOutlined style={{ color: 'red' }} />
        Cut Cost
      </span>
    ),
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (amount) => <>${amount}</>,
    align: 'right',
  },
];

const dataSource = [
  {
    key: 1,
    id: 1,
    action_to_take: 'Liquidate union, BR, 1/4 *7/16-24 I), BULK, 4LTL',
    amount: 1201.98,
  },
  {
    key: 2,
    id: 2,
    action_to_take: 'Liquidate leaflet',
    amount: 5000.0,
  },
  {
    key: 3,
    id: 3,
    action_to_take: 'Liquidate cleanse product',
    amount: 3089.0,
  },
  {
    key: 4,
    id: 4,
    action_to_take: 'Liquidate union, BR, 1/4 *7/16-24 I), BULK, 4LTL',
    amount: 1201.98,
  },
  {
    key: 5,
    id: 5,
    action_to_take: 'Liquidate leaflet',
    amount: 5000.0,
  },
  {
    key: 6,
    id: 6,
    action_to_take: 'Liquidate cleanse product',
    amount: 3089.0,
  },
];

const dropDownMenu: MenuProps['items'] = [
  {
    key: '30_days',
    label: 'Last 30 Days',
  },
  {
    key: '60_days',
    label: 'Last 60 Days',
  },
  {
    key: '90_days',
    label: 'Last 90 Days',
  },
];

const pastSoldData = [
  {
    type: 'Sold last week',
    value: 0,
  },
  {
    type: 'Not sold last week',
    value: 3,
  },
  {
    type: 'Not sold in the last 30 days',
    value: 54160,
  },
];

const futureSoldData = [
  {
    type: 'Sold more than once a day',
    value: 0,
  },
  {
    type: 'Sold more than once a week',
    value: 0,
  },
  {
    type: 'Sold more than once a month',
    value: 3,
  },
  {
    type: 'Not sold more than once a month',
    value: 54160,
  },
];

const LandingPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [pastSolidChartInstance, setPastSolidChartInstance] = useState(null);
  const [futureSolidChartInstance, setFutureSolidChartInstance] = useState(null);
  const pastSolidChartRef = useRef(null);
  const futureSolidChartRef = useRef(null);

  const handlePastSolidChartPrint = useReactToPrint({
    content: () => pastSolidChartRef.current,
  });

  const handleFutureSolidChartPrint = useReactToPrint({
    content: () => futureSolidChartRef.current,
  });

  return (
    <div style={{ margin: 10 }}>
      <Row gutter={16} style={{ width: '100%' }} align="middle">
        <Col span={4}>
          <Card>
            <div style={{ fontSize: 30, textAlign: 'center' }}>24</div>
            <h3 style={{ textAlign: 'center' }}>
              Items Solid (
              <ArrowDownOutlined style={{ color: 'red' }} />
              -64.2%)
            </h3>
          </Card>
        </Col>
        <Col span={4}>
          <Card>
            <div style={{ fontSize: 30, textAlign: 'center' }}>$11</div>
            <h3 style={{ textAlign: 'center' }}>
              Total Sales (
              <ArrowDownOutlined style={{ color: 'red' }} />
              -93%)
            </h3>
          </Card>
        </Col>
        <Col span={4}>
          <Card>
            <div style={{ fontSize: 30, textAlign: 'center' }}>$-214</div>
            <h3 style={{ textAlign: 'center' }}>
              Net Profit (
              <ArrowDownOutlined style={{ color: 'red' }} />
              -92.8%)
            </h3>
          </Card>
        </Col>
        <Col span={4}>
          <Card>
            <div style={{ fontSize: 30, textAlign: 'center' }}>-1,994.7%</div>
            <h3 style={{ textAlign: 'center' }}>
              Profit Margin (
              <ArrowDownOutlined style={{ color: 'red' }} />
              -65.5%)
            </h3>
          </Card>
        </Col>
        <Col span={4}>
          <Card>
            <div style={{ fontSize: 30, textAlign: 'center' }}>$-8.9134</div>
            <h3 style={{ textAlign: 'center' }}>
              Unit Margin (
              <ArrowDownOutlined style={{ color: 'red' }} />
              -79.9%)
            </h3>
          </Card>
        </Col>
        <Col span={4}>
          <Dropdown menu={{ items: dropDownMenu }} placement="bottomRight">
            <EllipsisOutlined rotate={90} style={{ fontSize: 100, color: 'gray' }} />
            {/* <Button
              icon={
                <SmallDashOutlined
                  rotate={90}
                  style={{ fontSize: 100, borderColor: 'black', border: 'solid' }}
                />
              }
              style={{ height: 110 }}
            /> */}
          </Dropdown>
        </Col>
        <Col span={20}>
          <Row justify="space-between" style={{ marginTop: 10 }}>
            <Col>
              <h2>Opportunities Found By Skubana</h2>
            </Col>
            <Col>
              <Space size={10} align="center">
                <QuestionCircleFilled style={{ fontSize: 20 }} />
                <span onClick={() => setShowModal(true)}>
                  <LaunchIcon style={{ fontSize: 20 }} />
                </span>
              </Space>
            </Col>
          </Row>
          <Table
            columns={TColumns}
            dataSource={dataSource}
            scroll={{ x: true, y: 150 }}
            pagination={{ hideOnSinglePage: true }}
          />
        </Col>
        <Col span={20} style={{ marginTop: 10 }}>
          <h2>Inventory Movement Forensics</h2>
          <Card>
            <Row gutter={10}>
              <Col span={12}>
                <Row justify="end">
                  <Col>
                    <Dropdown.Button
                      menu={{
                        items: [
                          {
                            key: 'print_chart',
                            label: 'Print Chart',
                            disabled: !pastSolidChartInstance,
                            onClick: () => handlePastSolidChartPrint(),
                          },
                          {
                            type: 'divider',
                          },
                          {
                            key: 'download_png',
                            label: 'Download PNG image',
                            disabled: !pastSolidChartInstance,
                            onClick: () => pastSolidChartInstance.downloadImage('past-solid-chart', 'image/png'),
                          },
                          {
                            key: 'download_jpeg',
                            label: 'Download JPEG image',
                            disabled: !pastSolidChartInstance,
                            onClick: () => pastSolidChartInstance.downloadImage('past-solid-chart', 'image/jpeg'),
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
                <div ref={pastSolidChartRef}>
                  <Pie
                    data={pastSoldData}
                    angleField="value"
                    colorField="type"
                    color={['#AAFF00', '#66FF00', '#33FF00', '#00FF00']}
                    interactions={[
                      {
                        type: 'element-selected',
                      },
                      {
                        type: 'element-active',
                      },
                    ]}
                    legend={{
                      marker: { symbol: 'square' },
                      offsetX: -20,
                    }}
                    label={false}
                    height={250}
                    onReady={(chartInstance) => setPastSolidChartInstance(chartInstance)}
                  />
                </div>
              </Col>
              <Col span={12}>
                <Row justify="end">
                  <Col>
                    <Dropdown.Button
                      menu={{
                        items: [
                          {
                            key: 'print_chart',
                            label: 'Print Chart',
                            disabled: !futureSolidChartInstance,
                            onClick: () => handleFutureSolidChartPrint(),
                          },
                          {
                            type: 'divider',
                          },
                          {
                            key: 'download_png',
                            label: 'Download PNG image',
                            disabled: !futureSolidChartInstance,
                            onClick: () => futureSolidChartInstance.downloadImage('future-solid-chart', 'image/png'),
                          },
                          {
                            key: 'download_jpeg',
                            label: 'Download JPEG image',
                            disabled: !futureSolidChartInstance,
                            onClick: () => futureSolidChartInstance.downloadImage('future-solid-chart', 'image/jpeg'),
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
                <div ref={futureSolidChartRef}>
                  <Pie
                    data={futureSoldData}
                    angleField="value"
                    colorField="type"
                    color={['#AAFF00', '#55FF00', '#00FF00']}
                    interactions={[
                      {
                        type: 'element-selected',
                      },
                      {
                        type: 'element-active',
                      },
                    ]}
                    legend={{
                      marker: { symbol: 'square' },
                      offsetX: -20,
                    }}
                    label={false}
                    height={250}
                    onReady={(chartInstance) => setFutureSolidChartInstance(chartInstance)}
                  />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <ExportModal
        isOpen={showModal}
        title="Export Opportunities Found by Skubana"
        helpLink="/analytics/general/theanalyticsmodules"
        onClose={() => setShowModal(false)}
        onSave={() => {
          setShowModal(false);
          const exportInstance = new tableExport(dataSource, TColumns);
          exportInstance.download('Opportunities Found By Skubana', 'xlsx');
        }}
      />
    </div>
  );
};

export default LandingPage;
