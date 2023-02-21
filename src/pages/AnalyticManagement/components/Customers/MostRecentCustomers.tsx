import { Card, Row, Col, DatePicker, Form, Table, Space, Select } from 'antd';
import React, { useState } from 'react';
import { QuestionCircleFilled } from '@ant-design/icons';
import LaunchIcon from '@/utils/icons/launch';
import ExportModal from '@/pages/AnalyticManagement/components/Modals/Export';
import tableExport from 'antd-table-export';

const MostRecentCustomers: React.FC = () => {
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
      key: 'order_date',
      dataIndex: 'order_date',
      title: 'Order Date',
      align: 'center',
    },
    {
      key: 'order_total',
      dataIndex: 'order_total',
      title: 'Order Total',
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
      order_date: '12/28/2020',
      order_total: 30,
    },
    {
      key: 2,
      id: 2,
      customer: 'Hermione Granger',
      company: '',
      order_date: '12/28/2020',
      order_total: 0,
    },
    {
      key: 3,
      id: 3,
      customer: 'Trudy Vanderift',
      company: '',
      order_date: '12/15/2020',
      order_total: 30,
    },
    {
      key: 4,
      id: 4,
      customer: 'John Ashley',
      company: '',
      order_date: '12/08/2020',
      order_total: 0,
    },
    {
      key: 5,
      id: 5,
      customer: 'Test Name',
      company: '',
      order_date: '12/01/2020',
      order_total: 30,
    },
    {
      key: 6,
      id: 6,
      customer: 'Daniel Levin',
      company: '',
      order_date: '12/24/2020',
      order_total: 0,
    },
    {
      key: 7,
      id: 7,
      customer: 'Jen',
      company: '',
      order_date: '12/22/2020',
      order_total: 0,
    },
    {
      key: 8,
      id: 8,
      customer: 'Danny L',
      company: '',
      order_date: '11/06/2020',
      order_total: 0,
    },
    {
      key: 9,
      id: 9,
      customer: 'sandi',
      company: '',
      order_date: '11/04/2020',
      order_total: 2,
    },
  ];

  return (
    <>
      <div style={{ margin: '10px' }}>
        <Row justify="space-between" style={{ marginTop: 10 }}>
          <Col>
            <h2>Most Recent Customers</h2>
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
                <Select defaultValue="46 Selected" style={{ width: 200 }} size="small" />
              </Form.Item>
              <Form.Item label="Oldest Order Date" style={{ margin: 0 }}>
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
        title="Most Recent Customers"
        helpLink="/analytics/customers/mostrecentcustomers"
        onClose={() => setShowModal(false)}
        onSave={() => {
          setShowModal(false);
          const exportInstance = new tableExport(dataSource, TColumns);
          exportInstance.download('Most Recent Customers', 'xlsx');
        }}
      />
    </>
  );
};

export default MostRecentCustomers;
