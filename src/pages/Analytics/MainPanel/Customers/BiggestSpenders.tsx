import { Button, Card, Row, Col, DatePicker, Form, Table, Space, InputNumber, Select } from 'antd';
import React, { useState } from 'react';
import { QuestionCircleFilled, RetweetOutlined } from '@ant-design/icons';
import LaunchIcon from '@/utils/icons/launch';
import ExportModal from '@/pages/Analytics/MainPanel/Modals/Export';
import tableExport from 'antd-table-export';

const BiggestSpenders: React.FC = () => {
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
      key: 'company',
      dataIndex: 'company',
      title: 'Company',
    },
    {
      key: 'total_sales',
      dataIndex: 'total_sales',
      title: 'Total Sales',
      align: 'center',
      render: (value) => <>{`$${Number(value).toFixed(2)}`}</>,
    },
    {
      key: 'total_items',
      dataIndex: 'total_items',
      title: 'Total Items',
      align: 'right',
    },
  ];

  const dataSource = [
    {
      key: 1,
      id: 1,
      customer: 'Hermione Granger',
      company: '',
      total_sales: 74,
      total_items: 598,
    },
    {
      key: 2,
      id: 2,
      customer: 'Hermione Granger',
      company: '',
      total_sales: 72,
      total_items: 63,
    },
    {
      key: 3,
      id: 3,
      customer: 'Trudy Vanderift',
      company: '',
      total_sales: 60,
      total_items: 47,
    },
    {
      key: 4,
      id: 4,
      customer: 'John Ashley',
      company: '',
      total_sales: 30,
      total_items: 12,
    },
    {
      key: 5,
      id: 5,
      customer: 'Test Name',
      company: '',
      total_sales: 30,
      total_items: 5,
    },
    {
      key: 6,
      id: 6,
      customer: 'Daniel Levin',
      company: '',
      total_sales: 25,
      total_items: 85,
    },
    {
      key: 7,
      id: 7,
      customer: 'Jen',
      company: '',
      total_sales: 21,
      total_items: 9,
    },
    {
      key: 8,
      id: 8,
      customer: 'Danny L',
      company: '',
      total_sales: 15,
      total_items: 24,
    },
    {
      key: 9,
      id: 9,
      customer: 'sandi',
      company: '',
      total_sales: 15,
      total_items: 142,
    },
  ];

  return (
    <>
      <div style={{ margin: '10px' }}>
        <Row justify="space-between" style={{ marginTop: 10 }}>
          <Col>
            <h2>Biggest Spenders</h2>
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
                <InputNumber defaultValue={1000} size="small" />
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
          <Table columns={TColumns} dataSource={dataSource} pagination={{ hideOnSinglePage: true }} style={{ marginTop: 10 }} />
        </Card>
      </div>

      <ExportModal
        isOpen={showModal}
        title="Biggest Spenders"
        helpLink="/analytics/customers/biggestspenders"
        onClose={() => setShowModal(false)}
        onSave={() => {
          setShowModal(false);
          const exportInstance = new tableExport(dataSource, TColumns);
          exportInstance.download('Biggest Spenders', 'xlsx');
        }}
      />
    </>
  );
};

export default BiggestSpenders;
