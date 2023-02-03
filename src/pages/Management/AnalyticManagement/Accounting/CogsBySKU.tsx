import { Card, Row, Col, Button, Input, DatePicker, Form, Table, Space, Select } from 'antd';
import React, { useState } from 'react';
import { PlayCircleOutlined } from '@ant-design/icons';
import LaunchIcon from '@/utils/icons/launch';
import ExportModal from '@/components/Modals/Analytic/ExportModal';
import tableExport from 'antd-table-export';

const CogsBySKU: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const TColumns = [
    {
      key: 'id',
      dataIndex: 'id',
      title: '',
    },
    {
      key: 'master_sku',
      dataIndex: 'master_sku',
      title: 'Master SKU',
    },
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Name',
    },
    {
      key: 'brand',
      dataIndex: 'brand',
      title: 'Brand',
    },
    {
      key: 'units_sold',
      dataIndex: 'units_sold',
      title: 'Units Sold',
      align: 'center',
    },
    {
      key: 'cogs',
      dataIndex: 'cogs',
      title: 'C.O.G.S',
      align: 'right',
      render: (cogs) => <>${Number(cogs).toFixed(2)}</>,
    },
  ];

  const dataSource = [
    {
      key: 1,
      id: 1,
      master_sku: '1201',
      name: 'Bjj Belt White K1',
      brand: 'Sanabul',
      units_sold: 1,
      cogs: 1.75,
    },
    {
      key: 2,
      id: 2,
      master_sku: 'rudysku_4',
      name: 'Toys',
      brand: '13 Fishing',
      units_sold: 13,
      cogs: 78,
    },
    {
      key: 3,
      id: 3,
      master_sku: 'rudysku_3',
      name: "Rudy's Test Product 3",
      brand: '13 Fishing',
      units_sold: 10,
      cogs: 50,
    },
  ];

  return (
    <>
      <div style={{ margin: '10px' }}>
        <Row justify="space-between" style={{ marginTop: 10 }}>
          <Col>
            <h2>COGS By SKU</h2>
          </Col>
          <Col>
            <Space size={10} align="center">
              <h2 style={{ textTransform: 'uppercase' }}>This report is only available in utc</h2>
              <span onClick={() => setShowModal(true)}>
                <LaunchIcon style={{ fontSize: 20 }} />
              </span>
            </Space>
          </Col>
        </Row>

        <Card>
          <Form>
            <Space size={10}>
              <Form.Item label="SKU" style={{ margin: 0 }}>
                <Input style={{ width: 200 }} size="small" />
              </Form.Item>
              <Form.Item label="Brands" style={{ margin: 0 }}>
                <Select defaultValue="Select..." style={{ width: 200 }} size="small" />
              </Form.Item>
              <Form.Item label="From" style={{ margin: 0 }}>
                <DatePicker size="small" />
              </Form.Item>
              <Form.Item label="To" style={{ margin: 0 }}>
                <DatePicker size="small" />
              </Form.Item>
              <Button>
                Search
                <PlayCircleOutlined />
              </Button>
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
        title="COGS By SKU"
        onClose={() => setShowModal(false)}
        onSave={() => {
          setShowModal(false);
          const exportInstance = new tableExport(dataSource, TColumns);
          exportInstance.download('COGS By SKU', 'xlsx');
        }}
      />
    </>
  );
};

export default CogsBySKU;
