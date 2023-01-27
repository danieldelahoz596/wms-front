import { Card, Row, Col } from 'antd';

export default function () {

  return (
    <>
      <div style={{ margin: '10px' }}>
        <h2>Dashboard {'>'} SKU Alerts</h2>
        <Row>
          <Col span={24}>
            <Card>
              <h2>SKU Alerts make your operations more efficient by alerting you to orders or inventory that need attention.</h2>
              <p>SKU Alerts notify you if there are orders that can be merged, if any orders have been skipped and not downloaded into Extensiv Order Manager, or if inventory has failed to update for some of your listings. These alerts periodically pop up on your screen.</p>
              <p>If an alert appears while you're away from the screen, a badge with the number of missed alerts will appear in the top-right corner of the toolbar.</p>
              <img src="https://downloads.intercomcdn.com/i/o/278614539/6748f787a4d8742097b04741/SKU.png?expires=1619802000&signature=3a709f81aff696f96d08a323466b9006a614b4288e483627d4697e93a330d90d" style={{ width: 600 }}/>
              <p>Below is a sample SKU alert that recommends combining open orders to save on shipping costs. These alerts usually occur when a customer places multiple orders using the same name and shipping address.</p>
              <img src="https://downloads.intercomcdn.com/i/o/284502233/cd3e5796e41697924483ef16/sku+alerts.png?expires=1619802000&signature=dc3984f0e13864c9098a8e958a20a187ea7719f17b674951cd3a7bf10d0cc15b" style={{ width: 600}} />
              <p>To delete an alert from the SKU Alerts window, click the x icon in the Dismiss column.</p>
              <p>To delete all alerts, click the Delete All button in the bottom left corner. Once SKU Alerts are deleted, they will not reappear.</p>
              <h2>Details</h2>
              <p>In order for the "Combine Orders" SKU Alert to be prompted, orders must:</p>
              <ul>
                <li>Include the same Customer Name and Address,</li>
                <li>Have one of the following order statuses: Awaiting Shipment, Awaiting 3PL Export, Awaiting Dropship, Awaiting MC Fulfillment.</li>
              </ul>
              <p>The orders that this alert is prompted for do not need to be assigned to the same warehouse. These alerts can also be triggered for manual orders and split orders (regardless of whether they were split manually or via orderbot). SKU Alerts occur when an order is processed in Extensiv Order Manager.</p>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
