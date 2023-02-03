import { Button, Card, Row, Col, Select, DatePicker, Form } from 'antd';
import React, { useEffect, useState } from 'react';
import { OTable } from '@/components/Globals/OTable';
import { useModel } from '@umijs/max';
import moment from 'moment';
import { uuid } from '@antv/x6/lib/util/string/uuid';
import httpClient from '@/utils/http-client';

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
        <Button type="primary" onClick={handleDownload}>
          Download
        </Button>
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
          <Form
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 18 }}
            labelAlign="left"
            labelWrap
            form={form}
            onFinish={handleSubmit}
          >
            <Row>
              <Col span={6}>
                <Form.Item label="Destination" name="destination">
                  <Select
                    mode="multiple"
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
                  <Select mode="multiple" placeholder="No milestones selected...">
                    <Select.Option value="1">milestone1</Select.Option>
                    <Select.Option value="2">milestone2</Select.Option>
                    <Select.Option value="3">milestone3</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Status" name="status">
                  <Select
                    mode="multiple"
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
                  <Form.Item
                    name="received_date_from"
                    label="Received Date From"
                    labelCol={{ span: 8 }}
                  >
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
                  <Button type="primary">Generate Export</Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <br />

        <Card>
          <h3>
            Note: The data from Historical Exports might be delayed for up to 24 hours, the exports
            do not reflect the most up-to-date state of the purchase orders.
          </h3>

          <OTable columns={Tcolumns} rows={exportRows} bordered={false} />
        </Card>
      </div>
    </>
  );
};

export default HistoricalPurchaseOrdersExports;
