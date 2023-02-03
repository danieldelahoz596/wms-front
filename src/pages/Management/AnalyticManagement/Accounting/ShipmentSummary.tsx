import { Card, Row, Col, DatePicker, Form, Table, Space, Select } from 'antd';
import React, { useState } from 'react';
import { QuestionCircleFilled } from '@ant-design/icons';
import LaunchIcon from '@/utils/icons/launch';
import ExportModal from '@/components/Modals/Analytic/ExportModal';
import tableExport from 'antd-table-export';

const ShipmentSummary: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const TColumns = [
    {
      key: 'id',
      dataIndex: 'id',
      title: '',
    },
    {
      key: 'carrier',
      dataIndex: 'carrier',
      title: 'Carrier',
    },
    {
      key: 'shipments',
      dataIndex: 'shipments',
      title: 'Shipments',
      align: 'center',
    },
    {
      key: 'shipping_cost',
      dataIndex: 'shipping_cost',
      title: 'Shipping Cost',
      align: 'right',
      render: (shipping_cost) => <>${Number(shipping_cost).toFixed(2)}</>,
    },
  ];

  const dataSource = [
    {
      key: 1,
      id: 1,
      carrier: 'FedEx',
      shipments: 7,
      shipping_cost: 65.66,
    },
    {
      key: 2,
      id: 2,
      carrier: 'USPS',
      shipments: 4,
      shipping_cost: 13.62,
    },
    {
      key: 3,
      id: 3,
      carrier: 'Other',
      shipments: 2,
      shipping_cost: 0.0,
    },
    {
      key: 4,
      id: 4,
      carrier: '3PL Best Rate',
      shipments: 3,
      shipping_cost: 0.0,
    },
    {
      key: 5,
      id: 5,
      carrier: 'UPS',
      shipments: 0,
      shipping_cost: 0.0,
    },
    {
      key: 6,
      id: 6,
      carrier: 'Roadrunner',
      shipments: 0,
      shipping_cost: 0.0,
    },
    {
      key: 7,
      id: 7,
      carrier: 'DHL',
      shipments: 0,
      shipping_cost: 0.0,
    },
    {
      key: 8,
      id: 8,
      carrier: 'Amazon Shipping',
      shipments: 0,
      shipping_cost: 0.0,
    },
    {
      key: 9,
      id: 9,
      carrier: 'Globegistics',
      shipments: 0,
      shipping_cost: 0.0,
    },
    {
      key: 10,
      id: 10,
      carrier: 'DHL eCommerce',
      shipments: 0,
      shipping_cost: 0.0,
    },
  ];

  return (
    <>
      <div style={{ margin: '10px' }}>
        <Row justify="space-between" style={{ marginTop: 10 }}>
          <Col>
            <h2>Shipment Summary</h2>
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
              <Form.Item label="Carriers" style={{ margin: 0 }}>
                <Select defaultValue="19 Selected" style={{ width: 200 }} size="small" />
              </Form.Item>
              <Form.Item label="Ship Date From" style={{ margin: 0 }}>
                <DatePicker size="small" />
              </Form.Item>
              <Form.Item label="Ship Date To" style={{ margin: 0 }}>
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
        title="Shipment Summary"
        onClose={() => setShowModal(false)}
        onSave={() => {
          setShowModal(false);
          const exportInstance = new tableExport(dataSource, TColumns);
          exportInstance.download('Shipment Summary', 'xlsx');
        }}
      />
    </>
  );
};

export default ShipmentSummary;
