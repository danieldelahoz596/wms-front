import { Button, Card, Row, Col, DatePicker, Form, Table, Space, InputNumber, Select } from 'antd';
import React, { useState } from 'react';
import { QuestionCircleFilled, QuestionCircleOutlined, RetweetOutlined } from '@ant-design/icons';
import LaunchIcon from '@/utils/icons/launch';
import ExportModal from '@/pages/AnalyticManagement/components/Modals/Export';
import tableExport from 'antd-table-export';
import ShippingIcon from '@/utils/icons/shipping';

const TopSellers: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const TColumns = [
    {
      key: 'id',
      dataIndex: 'id',
      title: '',
    },
    {
      key: 'product',
      dataIndex: 'product',
      title: 'Product',
    },
    {
      key: 'master_sku',
      dataIndex: 'master_sku',
      title: 'Master SKU',
    },
    {
      key: 'units_sold',
      dataIndex: 'units_sold',
      title: 'Units Sold',
      align: 'right',
    },
  ];

  const dataSource = [
    {
      key: 1,
      id: 1,
      product: 'blue shirt',
      master_sku: 'shirt3',
      units_sold: 804,
    },
    {
      key: 2,
      id: 2,
      product: '10820',
      master_sku: '10820',
      units_sold: 100,
    },
    {
      key: 3,
      id: 3,
      product: 'shirt1',
      master_sku: 'shirt1',
      units_sold: 73,
    },
    {
      key: 4,
      id: 4,
      product: 'shirt2',
      master_sku: 'shirt2',
      units_sold: 59,
    },
  ];

  return (
    <>
      <div style={{ margin: '10px' }}>
        <Row justify="space-between" style={{ marginTop: 10 }}>
          <Col>
            <h2>Top Sellers</h2>
          </Col>
          <Col>
            <Space size={10} align="center">
              <h2 style={{ textTransform: 'uppercase' }}>This report is only available in utc</h2>
              <ShippingIcon style={{ fontSize: 20 }} />
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
              <Form.Item label="Top" style={{ margin: 0 }}>
                <InputNumber defaultValue={100} size="small" />
              </Form.Item>
              <Button icon={<RetweetOutlined />} />
              <Form.Item label="Sales Channels" style={{ margin: 0 }}>
                <Select defaultValue="6 Selected" style={{ width: 200 }} size="small" />
              </Form.Item>
              <Form.Item label="From" style={{ margin: 0 }}>
                <DatePicker size="small" />
              </Form.Item>
              <Form.Item label="To" style={{ margin: 0 }}>
                <DatePicker size="small" />
              </Form.Item>
              <Form.Item label="By" style={{ margin: 0 }}>
                <Space size={10}>
                  <Button>Units Sold</Button>
                  <Button>Revenue</Button>
                </Space>
              </Form.Item>
              <Form.Item label="SKU" style={{ margin: 0 }}>
                <Space size={10}>
                  <Button>Listing SKU</Button>
                  <Button>Master SKU</Button>
                </Space>
              </Form.Item>
              <QuestionCircleOutlined style={{ fontSize: 20, color: 'blue' }} />
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
        title="Top Sellers"
        helpLink="/help/analytics/subproducts/topsellersandworstsellersreports"
        onClose={() => setShowModal(false)}
        onSave={() => {
          setShowModal(false);
          const exportInstance = new tableExport(dataSource, TColumns);
          exportInstance.download('Top Sellers', 'xlsx');
        }}
      />
    </>
  );
};

export default TopSellers;
