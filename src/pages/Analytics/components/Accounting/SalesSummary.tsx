import { Card, Row, Col, DatePicker, Form, Table, Space, Select } from 'antd';
import React, { useState } from 'react';
import { QuestionCircleFilled } from '@ant-design/icons';
import LaunchIcon from '@/utils/icons/launch';
import ExportModal from '@/pages/Analytics/components/Modals/Export';
import tableExport from 'antd-table-export';

const SalesSummary: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const TColumns = [
    {
      key: 'sales_channel',
      dataIndex: 'sales_channel',
      title: 'Sales Channel',
    },
    {
      key: 'sales_income',
      dataIndex: 'sales_income',
      title: 'Sales Income',
      align: 'right',
      render: (sales_income) => <>${Number(sales_income).toFixed(2)}</>,
    },
    {
      key: 'shipping_income',
      dataIndex: 'shipping_income',
      title: 'Shipping Income',
      align: 'right',
      render: (shipping_income) => <>${Number(shipping_income).toFixed(2)}</>,
    },
    {
      key: 'discounts',
      dataIndex: 'discounts',
      title: 'Discounts',
      align: 'right',
      render: (discounts) => <>${Number(discounts).toFixed(2)}</>,
    },
    {
      key: 'refunds',
      dataIndex: 'refunds',
      title: 'Refunds',
      align: 'right',
      render: (refunds) => <>${Number(refunds).toFixed(2)}</>,
    },
    {
      key: 'taxes',
      dataIndex: 'taxes',
      title: 'Taxes',
      align: 'right',
      render: (taxes) => <>${Number(taxes).toFixed(2)}</>,
    },
    {
      key: 'total',
      dataIndex: 'total',
      title: 'Total',
      align: 'right',
      render: (total) => <>${Number(total).toFixed(2)}</>,
    },
  ];

  const dataSource = [
    {
      key: 1,
      sales_channel: 'test1234',
      sales_income: 0,
      shipping_income: 0,
      discounts: 0,
      refunds: 0,
      taxes: 0,
      total: 0,
    },
    {
      key: 2,
      sales_channel: "zAlex's Test Channel",
      sales_income: 0,
      shipping_income: 0,
      discounts: 0,
      refunds: 0,
      taxes: 0,
      total: 0,
    },
    {
      key: 3,
      sales_channel: 'Auto Assign Order Number',
      sales_income: 0,
      shipping_income: 0,
      discounts: 0,
      refunds: 0,
      taxes: 0,
      total: 0,
    },
    {
      key: 4,
      sales_channel: 'customer-1',
      sales_income: 0,
      shipping_income: 0,
      discounts: 0,
      refunds: 0,
      taxes: 0,
      total: 0,
    },
    {
      key: 5,
      sales_channel: 'Woocommerce',
      sales_income: 0,
      shipping_income: 0,
      discounts: 0,
      refunds: 0,
      taxes: 0,
      total: 0,
    },
    {
      key: 6,
      sales_channel: 'crucial',
      sales_income: 0,
      shipping_income: 0,
      discounts: 0,
      refunds: 0,
      taxes: 0,
      total: 0,
    },
    {
      key: 7,
      sales_channel: 'TestGP',
      sales_income: 0,
      shipping_income: 0,
      discounts: 0,
      refunds: 0,
      taxes: 0,
      total: 0,
    },
    {
      key: 8,
      sales_channel: 'testing testing',
      sales_income: 0,
      shipping_income: 0,
      discounts: 0,
      refunds: 0,
      taxes: 0,
      total: 0,
    },
    {
      key: 9,
      sales_channel: 'SCMagentotes',
      sales_income: 0,
      shipping_income: 0,
      discounts: 0,
      refunds: 0,
      taxes: 0,
      total: 0,
    },
    {
      key: 10,
      sales_channel: 'Manual Demo Orders',
      sales_income: 0,
      shipping_income: 0,
      discounts: 0,
      refunds: 0,
      taxes: 0,
      total: 0,
    },
  ];

  return (
    <>
      <div style={{ margin: '10px' }}>
        <Row justify="space-between" style={{ marginTop: 10 }}>
          <Col>
            <h2>Sales Summary</h2>
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

        <Card>
          <Form>
            <Space size={10}>
              <Form.Item label="Sales Channels" style={{ margin: 0 }}>
                <Select defaultValue="Select..." style={{ width: 200 }} size="small" />
              </Form.Item>
              <Form.Item label="From" style={{ margin: 0 }}>
                <DatePicker size="small" />
              </Form.Item>
              <Form.Item label="To" style={{ margin: 0 }}>
                <DatePicker size="small" />
              </Form.Item>
            </Space>
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
        title="Sales Summary"
        helpLink="/analytics/accounting/salessummary"
        onClose={() => setShowModal(false)}
        onSave={() => {
          setShowModal(false);
          const exportInstance = new tableExport(dataSource, TColumns);
          exportInstance.download('Sales Summary', 'xlsx');
        }}
      />
    </>
  );
};

export default SalesSummary;
