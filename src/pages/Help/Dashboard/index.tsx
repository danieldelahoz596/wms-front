import { DatePicker, Form } from 'antd';
import { Button, Card, Row, Col, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { OTable } from '@/components/Globals/OTable';
import { useModel } from '@umijs/max';
import moment from 'moment';
import { uuid } from '@antv/x6/lib/util/string/uuid';
import httpClient from '@/utils/http-client';

const SkuAlerts: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { warehouseList } = useModel('warehouse');
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
        <h2>Dashboard {'>'} SKU Alerts</h2>
        <Row>
          <Col span={23}>
            <Card title="SKU Alerts make your operations more efficient by alerting you to orders or inventory that need attention.">
              <p>SKU Alerts notify you if there are orders that can be merged, if any orders have been skipped and not downloaded into Extensiv Order Manager, or if inventory has failed to update for some of your listings. These alerts periodically pop up on your screen.</p>
              <p>If an alert appears while you're away from the screen, a badge with the number of missed alerts will appear in the top-right corner of the toolbar.</p>
              <img src="https://downloads.intercomcdn.com/i/o/278614539/6748f787a4d8742097b04741/SKU.png?expires=1619802000&signature=3a709f81aff696f96d08a323466b9006a614b4288e483627d4697e93a330d90d" style={{ width: 600 }} />
              <p>To view your SKU Alerts, go to the top-right corner of the toolbar, hover your cursor over the hamburger menu, and select SKU ALERTS from the dropdown.</p>
              <img src="https://downloads.intercomcdn.com/i/o/284475477/65af4ad3f63e70f1a6bf03eb/image.png?expires=1619802000&signature=dd5d434fd0d8abc81096b7edc2fcbe3e510cca2341a2c1e122c62cd15d4dc739" style={{ width: 300}} />
              <p>Below is a sample SKU alert that recommends combining open orders to save on shipping costs. These alerts usually occur when a customer places multiple orders using the same name and shipping address.</p>
              <img src="https://downloads.intercomcdn.com/i/o/284502233/cd3e5796e41697924483ef16/sku+alerts.png?expires=1619802000&signature=dc3984f0e13864c9098a8e958a20a187ea7719f17b674951cd3a7bf10d0cc15b" style={{ width: 600}} />
              <p>To delete an alert from the SKU Alerts window, click the x icon in the Dismiss column.
                To delete all alerts, click the Delete All button in the bottom left corner. Once SKU Alerts are deleted, they will not reappear.
                To view the current SKU Alerts at any time, hover your cursor over the hamburger menu in the top-right corner and select SKU ALERTS from the dropdown.</p>
                <img src="https://downloads.intercomcdn.com/i/o/278616050/cb9c6addf73269543fc99e77/sku3.png?expires=1619802000&signature=e907b2fb9f871b31b35ec4500b067f1c23082a8aedd95281a61f4e4ff660d94c" style={{ width: 600}} />
              <p>Details
In order for the "Combine Orders" SKU Alert to be prompted, orders must:

Include the same Customer Name and Address,

Have one of the following order statuses: Awaiting Shipment, Awaiting 3PL Export, Awaiting Dropship, Awaiting MC Fulfillment.

The orders that this alert is prompted for do not need to be assigned to the same warehouse. These alerts can also be triggered for manual orders and split orders (regardless of whether they were split manually or via orderbot). SKU Alerts occur when an order is processed in Extensiv Order Manager.

</p>
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
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SkuAlerts;
