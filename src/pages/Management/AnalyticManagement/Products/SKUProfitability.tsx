import { Button, Card, Row, Col, DatePicker, Form, Table, Space } from 'antd';
import React, { useState } from 'react';
import { QuestionCircleFilled, ToolFilled } from '@ant-design/icons';
import LaunchIcon from '@/utils/icons/launch';
import ExportModal from '@/components/Modals/Analytic/ExportModal';
import tableExport from 'antd-table-export';

const SKUProfitability: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const TColumns = [
    {
      key: 'master_sku',
      dataIndex: 'master_sku',
      title: 'Master SKU',
    },
    {
      key: 'product',
      dataIndex: 'product',
      title: 'Product',
    },
    {
      key: 'buyer_email',
      dataIndex: 'buyer_email',
      title: 'Buyer Email',
    },
    {
      key: 'gross_margin',
      dataIndex: 'gross_margin',
      title: 'Gross Margin',
      render: (gross_margin) => <>{`$${gross_margin}`}</>,
    },
    {
      key: 'unit_margin',
      dataIndex: 'unit_margin',
      title: 'Unit Margin',
      render: (unit_margin) => <>{`$${unit_margin}`}</>,
    },
    {
      key: 'units_sold',
      dataIndex: 'units_sold',
      title: 'Units Sold',
    },
  ];

  const dataSource = [
    {
      key: 1,
      master_sku: 'rudysku_3',
      product: "Rudy's Test Product 3",
      buyer_email: '',
      gross_margin: -85.459,
      unit_margin: -8.5459,
      units_sold: 10,
    },
    {
      key: 2,
      master_sku: 'rudysku_4',
      product: 'Toys',
      buyer_email: '',
      gross_margin: -124.1667,
      unit_margin: -9.5513,
      units_sold: 13,
    },
    {
      key: 3,
      master_sku: '1201',
      product: 'Bjj Belt White K1',
      buyer_email: '',
      gross_margin: -4.2959,
      unit_margin: -4.2959,
      units_sold: 1,
    },
  ];

  return (
    <>
      <div style={{ margin: '10px' }}>
        <Row justify="space-between" style={{ marginTop: 10 }}>
          <Col>
            <h2>Profitability by SKU</h2>
          </Col>
          <Col>
            <Space size={10} align="center">
              <h2 style={{ textTransform: 'uppercase' }}>This report is only available in utc</h2>
              <QuestionCircleFilled style={{ fontSize: 20 }} />
              <span onClick={() => setShowModal(true)}>
                <LaunchIcon style={{ fontSize: 20 }} />
              </span>
            </Space>
          </Col>
        </Row>

        <Card>
          <Form>
            <Row justify="space-between" align="middle">
              <Col span={6}>
                <Space size={10}>
                  <Form.Item label="From" style={{ margin: 0 }}>
                    <DatePicker />
                  </Form.Item>
                  <Form.Item label="To" style={{ margin: 0 }}>
                    <DatePicker />
                  </Form.Item>
                </Space>
              </Col>
              <Col span={8}>
                <Space size={10}>
                  <h2>
                    Net Profit: <span style={{ color: 'blue' }}>$-213.92</span>
                  </h2>
                  <h2>
                    Unit Margin: <span style={{ color: 'blue' }}>$-8.91</span>
                  </h2>
                </Space>
              </Col>
              <Col>
                <Button icon={<ToolFilled />}>Edit Overhead Costs</Button>
              </Col>
            </Row>
          </Form>
          <Table
            columns={TColumns}
            dataSource={dataSource}
            pagination={{ hideOnSinglePage: true }}
            style={{ marginTop: 10 }}
          />
        </Card>
      </div>

      <ExportModal
        isOpen={showModal}
        title="Export Opportunities Found by Skubana"
        onClose={() => setShowModal(false)}
        onSave={() => {
          setShowModal(false);
          const exportInstance = new tableExport(dataSource, TColumns);
          exportInstance.download('Profitability by SKU', 'xlsx');
        }}
      />
    </>
  );
};

export default SKUProfitability;
