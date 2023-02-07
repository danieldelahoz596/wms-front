import { Button, Card, Row, Col, DatePicker, Form, Table, Space, InputNumber, Select } from 'antd';
import React, { useState } from 'react';
import { QuestionCircleFilled, RetweetOutlined } from '@ant-design/icons';
import LaunchIcon from '@/utils/icons/launch';
import ExportModal from '@/components/Modals/Analytic/ExportModal';
import tableExport from 'antd-table-export';

const BiggestTickets: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const TColumns = [
    {
      key: 'id',
      dataIndex: 'id',
      title: '',
    },
    {
      key: 'customer',
      dataIndex: 'customer',
      title: 'Customer',
    },
    {
      key: 'order_number',
      dataIndex: 'order_number',
      title: 'Order Number',
    },
    {
      key: 'order_total',
      dataIndex: 'order_total',
      title: 'Order Total',
      align: 'right',
      render: (value) => <>{`$${value}`}</>,
    },
  ];

  const dataSource = [
    {
      key: 1,
      id: 1,
      customer: 'John Ashley',
      order_number: 'TESTABC123',
      order_total: 30,
    },
    {
      key: 2,
      id: 2,
      customer: 'Trudy Vanderdrift',
      order_number: '884',
      order_total: 30,
    },
    {
      key: 3,
      id: 3,
      customer: 'Trudy Vanderdrift',
      order_number: '885',
      order_total: 30,
    },
    {
      key: 4,
      id: 4,
      customer: 'Test Name',
      order_number: '12345bb',
      order_total: 30,
    },
  ];

  return (
    <>
      <div style={{ margin: '10px' }}>
        <Row justify="space-between" style={{ marginTop: 10 }}>
          <Col>
            <h2>Biggest Tickets</h2>
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
              <Form.Item label="Top" style={{ margin: 0 }}>
                <InputNumber defaultValue={100} size="small" />
              </Form.Item>
              <Button icon={<RetweetOutlined />} />
              <Form.Item label="Sales Channels" style={{ margin: 0 }}>
                <Select defaultValue="46 Selected" style={{ width: 200 }} size="small" />
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
        title="Biggest Tickets"
        onClose={() => setShowModal(false)}
        onSave={() => {
          setShowModal(false);
          const exportInstance = new tableExport(dataSource, TColumns);
          exportInstance.download('Biggest Tickets', 'xlsx');
        }}
      />
    </>
  );
};

export default BiggestTickets;
