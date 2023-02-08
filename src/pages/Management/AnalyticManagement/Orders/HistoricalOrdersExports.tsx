import { OButton } from '@/components/Globals/OButton';
import { OTable } from '@/components/Globals/OTable';
import httpClient from '@/utils/http-client';
import { uuid } from '@antv/x6/lib/util/string/uuid';
import { useModel } from '@umijs/max';
import { Card, Col, DatePicker, Form, Row, Select } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

const HistoricalOrdersExports: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const [exports, setExports] = useState(null);
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    setExports((prev) => [
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

  const exportRows = exports?.map((_item) => ({
    ..._item,
    actions:
      _item.status === 'Succeeded' || _item.status === 'Failed' ? (
        <OButton btnText={'Download'} onClick={handleDownload} />
      ) : null,
  }));

  useEffect(() => {
    httpClient('/api/orders/order-historic-exports')
      .then((res) => setExports(res.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div style={{ margin: '10px' }}>
        <h2 className="page-title">Orders {'>'} Historical Exports</h2>

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
              <Col span={7}>
                <Form.Item name="warehouses" label="Warehouses">
                  <Select
                    mode="multiple"
                    allowClear
                    placeholder="Please select"
                    options={initialState?.initialData.warehouses.map((_item) => ({
                      label: _item.name,
                      value: _item.id,
                    }))}
                    size="small"
                  />
                </Form.Item>
              </Col>
              <Col span={7}>
                <Form.Item name="status" label="Status">
                  <Select
                    mode="multiple"
                    allowClear
                    placeholder="Please select"
                    size="small"
                    options={initialState?.initialData.order_statuses.map((_item) => ({
                      label: _item.name,
                      value: _item.id,
                    }))}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={4}>
                <Form.Item
                  name="shipped_date_from"
                  label="Shipped Date From"
                  labelCol={{ span: 9 }}
                >
                  <DatePicker size="small" />
                </Form.Item>
              </Col>
              <Col span={3}>
                <Form.Item name="shipped_date_to" label="To">
                  <DatePicker size="small" />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item
                  name="order_date_from"
                  label="Order Date From"
                  initialValue={moment().subtract(1, 'year').startOf('year')}
                  labelCol={{ span: 9 }}
                >
                  <DatePicker size="small" />
                </Form.Item>
              </Col>
              <Col span={3}>
                <Form.Item
                  name="order_date_to"
                  label="To"
                  initialValue={moment().subtract(1, 'year').endOf('year')}
                >
                  <DatePicker size="small" />
                </Form.Item>
              </Col>
              <Col span={3}>
                <Form.Item>
                  <OButton btnText="Generate Export" onClick={handleSubmit} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <br />

        <Card>
          <h3>
            Note: This data from Historical Exports might be delayed for up to 24 hours, the exports
            do not reflect the most up-to-date state of the orders.
          </h3>
          <OTable columns={Tcolumns} rows={exportRows} bordered={false} />
        </Card>
      </div>
    </>
  );
};

export default HistoricalOrdersExports;
