import { Card, Row, Col, Form, Table, Space, Select } from 'antd';
import React, { useState } from 'react';
import { ExclamationCircleFilled, QuestionCircleFilled } from '@ant-design/icons';
import LaunchIcon from '@/utils/icons/launch';
import ExportModal from '@/components/Modals/Analytic/Export';
import tableExport from 'antd-table-export';

const ReplenishmentAlerts: React.FC = () => {
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
      title: 'Product(Master SKU)',
    },
    {
      key: 'info',
      title: 'Info',
      render: () => <ExclamationCircleFilled style={{ color: '#656fff', fontSize: 16 }} />,
    },
    {
      key: 'available',
      dataIndex: 'available',
      title: 'Available',
      align: 'center',
    },
    {
      key: 'quantity',
      dataIndex: 'quantity',
      title: 'Quantity',
      align: 'right',
    },
  ];

  const dataSource = [
    {
      key: 1,
      id: 1,
      product: 'Nutter Butter Bites (SandiProduct1)',
      available: 0,
      quantity: 33,
    },
  ];

  return (
    <>
      <div style={{ margin: '10px' }}>
        <Row justify="space-between" style={{ marginTop: 10 }}>
          <Col>
            <h2>Inventory replenishment alerts for non-fba dependent warehouse</h2>
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
            <Form.Item label="Destination Warehouses" style={{ margin: 0 }}>
              <Select defaultValue="18 Selected" style={{ width: 200 }} size="small" />
            </Form.Item>
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
        title="Inventory Replenishment Alerts"
        helpLink="/analytics/inventory/replenishmentalerts"
        onClose={() => setShowModal(false)}
        onSave={() => {
          setShowModal(false);
          const exportInstance = new tableExport(dataSource, TColumns);
          exportInstance.download('Inventory Replenishment Alerts', 'xlsx');
        }}
      />
    </>
  );
};

export default ReplenishmentAlerts;
