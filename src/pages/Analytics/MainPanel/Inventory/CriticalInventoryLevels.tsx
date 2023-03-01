import { Card, Row, Col, Form, Table, Space, Select } from 'antd';
import React, { useState } from 'react';
import { QuestionCircleFilled } from '@ant-design/icons';
import LaunchIcon from '@/utils/icons/launch';
import ExportModal from '@/pages/Analytics/MainPanel/Modals/Export';
import tableExport from 'antd-table-export';

const CriticalInventoryLevels: React.FC = () => {
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
      key: 'available',
      dataIndex: 'available',
      title: 'Available',
      align: 'right',
    },
    {
      key: 'velocity',
      dataIndex: 'velocity',
      title: 'Velocity',
      align: 'center',
    },
    {
      key: 'est_runout',
      dataIndex: 'est_runout',
      title: 'EST.Runout',
      align: 'center',
    },
  ];

  const dataSource = [
    {
      key: 1,
      id: 1,
      product: 'Pack of pencils',
      master_sku: 'Pencil',
      available: 0,
      velocity: '0.01/Day',
      est_runout: '12/29/2020',
    },
    {
      key: 2,
      id: 2,
      product: 'Core Component 2',
      master_sku: 'Core Component 2',
      available: 9,
      velocity: '0.17/Day',
      est_runout: '02/19/2021',
    },
  ];

  return (
    <>
      <div style={{ margin: '10px' }}>
        <Row justify="space-between" style={{ marginTop: 10 }}>
          <Col>
            <h2>Critical Inventory Leveles</h2>
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
              <Form.Item label="Warehouse" style={{ margin: 0 }}>
                <Select defaultValue="18 Selected" style={{ width: 200 }} size="small" />
              </Form.Item>
              <Form.Item label="Based On Sales" style={{ margin: 0 }}>
                <Select defaultValue="Last 180" style={{ width: 200 }} size="small" />
              </Form.Item>
              <Form.Item label="Likely To Run Out Within" style={{ margin: 0 }}>
                <Select defaultValue="Next 180" style={{ width: 200 }} size="small" />
              </Form.Item>
            </Space>
          </Form>
          <Table columns={TColumns} dataSource={dataSource} pagination={{ hideOnSinglePage: true }} style={{ marginTop: 10 }} />
        </Card>
      </div>

      <ExportModal
        isOpen={showModal}
        title="Critical Inventory Levels"
        helpLink="/analytics/inventory/criticalinventorylevels"
        onClose={() => setShowModal(false)}
        onSave={() => {
          setShowModal(false);
          const exportInstance = new tableExport(dataSource, TColumns);
          exportInstance.download('Critical Inventory Levels', 'xlsx');
        }}
      />
    </>
  );
};

export default CriticalInventoryLevels;
