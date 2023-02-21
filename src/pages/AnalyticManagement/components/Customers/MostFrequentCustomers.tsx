import { Button, Card, Row, Col, DatePicker, Form, Table, Space, InputNumber, Select } from 'antd';
import React, { useState } from 'react';
import { QuestionCircleFilled, RetweetOutlined } from '@ant-design/icons';
import LaunchIcon from '@/utils/icons/launch';
import ExportModal from '@/pages/AnalyticManagement/components/Modals/Export';
import tableExport from 'antd-table-export';

const MostFrequentCustomers: React.FC = () => {
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
      key: 'total_orders',
      dataIndex: 'total_orders',
      title: 'Total Orders',
      align: 'right',
    },
    {
      key: 'total_sales',
      dataIndex: 'total_sales',
      title: 'Total Sales',
      align: 'right',
      render: (value) => <>{`$${Number(value).toFixed(2)}`}</>,
    },
  ];

  const dataSource = [
    {
      key: 1,
      id: 1,
      customer: 'Hermione Granger',
      company: '',
      total_sales: 74,
      total_orders: 29,
    },
    {
      key: 2,
      id: 2,
      customer: 'Hermione Granger',
      company: '',
      total_sales: 25,
      total_orders: 23,
    },
    {
      key: 3,
      id: 3,
      customer: 'Trudy Vanderift',
      company: '',
      total_sales: 76,
      total_orders: 15,
    },
    {
      key: 4,
      id: 4,
      customer: 'John Ashley',
      company: '',
      total_sales: 60,
      total_orders: 12,
    },
    {
      key: 5,
      id: 5,
      customer: 'Test Name',
      company: '',
      total_sales: 0,
      total_orders: 8,
    },
    {
      key: 6,
      id: 6,
      customer: 'Daniel Levin',
      company: '',
      total_sales: 0,
      total_orders: 8,
    },
    {
      key: 7,
      id: 7,
      customer: 'Jen',
      company: '',
      total_sales: 15,
      total_orders: 7,
    },
    {
      key: 8,
      id: 8,
      customer: 'Danny L',
      company: '',
      total_sales: 15,
      total_orders: 6,
    },
    {
      key: 9,
      id: 9,
      customer: 'sandi',
      company: '',
      total_sales: 16,
      total_orders: 6,
    },
  ];

  return (
    <>
      <div style={{ margin: '10px' }}>
        <Row justify="space-between" style={{ marginTop: 10 }}>
          <Col>
            <h2>Most Frequent Customers</h2>
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
        title="Most Frequent Customers"
        helpLink="/analytics/customers/mostfrequentcustomers"
        onClose={() => setShowModal(false)}
        onSave={() => {
          setShowModal(false);
          const exportInstance = new tableExport(dataSource, TColumns);
          exportInstance.download('Most Frequent Customers', 'xlsx');
        }}
      />
    </>
  );
};

export default MostFrequentCustomers;
