import { OButton } from '@/components/Globals/OButton';
import { OTable } from '@/components/Globals/OTable';
import httpClient from '@/utils/http-client';
import { uuid } from '@antv/x6/lib/util/string/uuid';
import { useModel } from '@umijs/max';
import { Button, Card, Col, DatePicker, Form, Row, Select } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

const HistoricalPurchaseOrdersExports: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const [exports1, setExports1] = useState(null);
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    setExports1((prev) => [
      {
        ...values,
        key: uuid(),
        export_request_date: moment().format('MM-DD-YYYY, hh:mm:ss A'),
        export_completion_date: null,
        status: 'In progress',
      },
      ...prev,
    ]);
    console.log(values);
  };

  const handleDownload = () => {
    httpClient
      .post('/api/orders/export_history')
      .then((res) => {
        const fileName = 'historical-data.csv';
        const url = window.URL.createObjectURL(
          new Blob([res.data], {
            type: 'text/csv',
          }),
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((error) => console.log(error));
  };

  const Tcolumns = [
    {
      title: 'Export Request Date',
      dataIndex: 'export_request_date',
      key: 'export_request_date',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.export_request_date < b.export_request_date,
    },
    {
      title: 'Export Completion Date',
      dataIndex: 'export_completion_date',
      key: 'export_completion_date',
      align: 'center',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.export_completion_date < b.export_completion_date,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      align: 'right',
    },
  ];

  const exportRows = exports1?.map((_item) => ({
    ..._item,
    actions:
      _item.status === 'Succeeded' || _item.status === 'Failed' ? (
        <OButton btnText={'Download'} onClick={handleDownload} />
      ) : null,
  }));

  useEffect(() => {
    httpClient('/api/orders/order-historic-exports')
      .then((res) => setExports1(res.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div style={{ margin: '10px' }}>
        {/* Make this dynamic */}
        <h2 className="page-title">Purchase Orders {'>'} Historical Exports</h2>
        <Card>
          <Form labelCol={{ span: 5 }} wrapperCol={{ span: 18 }} labelAlign="left" labelWrap form={form} onFinish={handleSubmit}>
            <Row>
              <Col span={6}>
                <Form.Item label="Destination" name="destination">
                  <Select
                    mode="multiple"
                    size="small"
                    placeholder="No warehouses selected..."
                    options={initialState?.initialData?.warehouses.map((_item) => ({
                      label: _item.name,
                      value: _item.id,
                    }))}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Milestones" name="milestone">
                  <Select
                    mode="multiple"
                    size="small"
                    placeholder="No milestones selected..."
                    options={[
                      { value: 1, label: 'milestone1' },
                      { value: 2, label: 'milestone2' },
                      { value: 3, label: 'milestone3' },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Status" name="status">
                  <Select
                    mode="multiple"
                    size="small"
                    placeholder="No status selected..."
                    options={initialState?.initialData?.purchaseorder_statuses.map((_item) => ({
                      label: _item.name,
                      value: _item.id,
                    }))}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Vendors" name="vendor">
                  <Select
                    mode="multiple"
                    size="small"
                    placeholder="No vendors selected..."
                    options={initialState?.initialData?.vendors.map((_item) => ({
                      label: _item.name,
                      value: _item.id,
                    }))}
                  />
                </Form.Item>
              </Col>
              <Col span={3}>
                <Form.Item name="created_from" label="Created From" labelCol={{ span: 7 }}>
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col span={3}>
                <Form.Item name="created_to" label="To">
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Row>
                  <Form.Item name="received_date_from" label="Received Date From" labelCol={{ span: 8 }}>
                    <DatePicker />
                  </Form.Item>
                </Row>
              </Col>
              <Col span={3}>
                <Form.Item name="received_date_to" label="To">
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item name="delivered_from" label="Delivered From" labelCol={{ span: 8 }}>
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col span={3}>
                <Form.Item name="delivered_to" label="To">
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item>
                  <Button>Generate Export</Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <br />

        <Card>
          <h3>
            Note: The data from Historical Exports might be delayed for up to 24 hours, the exports do not reflect the most
            up-to-date state of the purchase orders.
          </h3>

          <OTable columns={Tcolumns} rows={exportRows} bordered={false} />
        </Card>
      </div>
    </>
  );
};

export default HistoricalPurchaseOrdersExports;
