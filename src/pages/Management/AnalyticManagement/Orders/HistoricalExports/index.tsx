import { DatePicker, Form } from 'antd';
import { Button, Card, Row, Col, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { OTable } from '@/components/Globals/OTable';
import { useModel } from '@umijs/max';
import moment from 'moment';
import { uuid } from '@antv/x6/lib/util/string/uuid';
import httpClient from '@/utils/http-client';

const HistoricalExports: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const [exports, setExports] = useState(null);
  const [form] = Form.useForm();
  const { orderStatusList, initialOrderStatus } = useModel('orderStatus');

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
        <Button type="primary">Download</Button>
      ) : null,
  }));

  useEffect(() => {
    initialOrderStatus();
    httpClient('/api/orders/order-historic-exports')
      .then((res) => setExports(res.data.data))
      .catch((error) => console.log(error));
  }, [initialOrderStatus]);

  return (
    <>
      <div style={{ margin: '10px' }}>
        <h2>ORDERS {'>'} HISTORICAL EXPORTS</h2>
        <Row>
          <Col span={23}>
            <Card>
              <Form form={form} onFinish={handleSubmit}>
                <Form.Item>
                  <Form.Item
                    name="warehouses"
                    label="Warehouses"
                    style={{ display: 'inline-block', width: 'calc(30% - 8px)', margin: '0 8px' }}
                  >
                    <Select
                      mode="multiple"
                      allowClear
                      style={{ width: '100%' }}
                      placeholder="Please select"
                      options={initialState?.initialData?.warehouses?.map((_item) => ({
                        label: _item.name,
                        value: _item.id,
                      }))}
                    />
                  </Form.Item>
                  <Form.Item
                    name="statuses"
                    label="Statuses"
                    style={{ display: 'inline-block', width: 'calc(30% - 8px)', margin: '0 8px' }}
                  >
                    <Select
                      mode="multiple"
                      allowClear
                      style={{ width: '100%' }}
                      placeholder="Please select"
                      options={orderStatusList?.map((_item) => ({
                        label: _item.order_status.name,
                        value: _item.order_status.id,
                      }))}
                    />
                  </Form.Item>
                </Form.Item>

                <Form.Item>
                  <Form.Item
                    name="shipped_date_from"
                    label="Shipped Date From"
                    initialValue={moment().subtract(1, 'year').startOf('year')}
                    style={{ display: 'inline-block', margin: '0 8px' }}
                  >
                    <DatePicker />
                  </Form.Item>
                  <Form.Item
                    name="shipped_date_to"
                    label="To"
                    initialValue={moment().subtract(1, 'year').endOf('year')}
                    style={{ display: 'inline-block', margin: '0 8px' }}
                  >
                    <DatePicker />
                  </Form.Item>
                  <Form.Item
                    name="order_date_from"
                    label="Order Date From"
                    initialValue={moment().subtract(1, 'year').startOf('year')}
                    style={{ display: 'inline-block', margin: '0 8px' }}
                  >
                    <DatePicker defaultValue={moment().subtract(1, 'year')} format={'YYYY-MM-DD'} />
                  </Form.Item>
                  <Form.Item
                    name="order_date_to"
                    label="To"
                    initialValue={moment().subtract(1, 'year').endOf('year')}
                    style={{ display: 'inline-block', margin: '0 8px' }}
                  >
                    <DatePicker />
                  </Form.Item>
                  <Form.Item style={{ display: 'inline-block', margin: '0 8px' }}>
                    <Button type="primary" htmlType="submit">
                      Generate Export
                    </Button>
                  </Form.Item>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>

        <br />
        <Row>
          <Col span={23}>
            <Card>
              <h3>
                Note: This data from Historical Exports might be delayed for up to 24 hours, the
                exports do not reflect the most up-to-date state of the orders.
              </h3>
              <Card>
                <OTable columns={Tcolumns} rows={exportRows} bordered={false} />
              </Card>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HistoricalExports;
