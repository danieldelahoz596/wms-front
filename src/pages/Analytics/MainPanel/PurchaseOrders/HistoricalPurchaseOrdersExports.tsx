import { OButton } from '@/components/Globals/OButton';
import { OTable } from '@/components/Globals/OTable';
import httpClient from '@/utils/http-client';
import { uuid } from '@antv/x6/lib/util/string/uuid';
import { useModel } from '@umijs/max';
import { Button, Card, Col, DatePicker, Form, Row, Select } from 'antd';
import moment from 'moment';
import React, { useEffect, useState, useMemo } from 'react';

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

const HistoricalPurchaseOrdersExports: React.FC = () => {
  const { warehouseList } = useModel('warehouse');
  const { milestonesList } = useModel('milestones');
  const { poStatusList } = useModel('poStatus');
  const { vendorList } = useModel('vendor');
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

  const warehouseOptions = useMemo(
    () =>
      warehouseList.map((_item) => ({
        label: _item.name,
        value: _item.id,
      })),
    [warehouseList],
  );

  const milestoneOptions = useMemo(
    () =>
      milestonesList.map((_item) => ({
        label: _item.text,
        value: _item.id,
      })),
    [milestonesList],
  );

  const poStatusOptions = useMemo(
    () =>
      poStatusList.map((_item) => ({
        label: _item.name,
        value: _item.id,
      })),
    [poStatusList],
  );

  const vendorOptions = useMemo(
    () =>
      vendorList.map((_item) => ({
        label: _item.name,
        value: _item.id,
      })),
    [vendorList],
  );

  return (
    <>
      <div style={{ margin: '10px' }}>
        {/* Make this dynamic */}
        <h1 className="page-title">Purchase Orders {'>'} Historical Exports</h1>
        <Card>
          <Form labelCol={{ span: 5 }} wrapperCol={{ span: 18 }} labelAlign="left" labelWrap form={form} onFinish={handleSubmit}>
            <Row>
              <Col span={6}>
                <Form.Item label="Destination" name="destination">
                  <Select mode="multiple" size="small" placeholder="No warehouses selected..." options={warehouseOptions} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Milestones" name="milestone">
                  <Select mode="multiple" size="small" placeholder="No milestones selected..." options={milestoneOptions} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Status" name="status">
                  <Select mode="multiple" size="small" placeholder="No status selected..." options={poStatusOptions} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Vendors" name="vendor">
                  <Select mode="multiple" size="small" placeholder="No vendors selected..." options={vendorOptions} />
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
