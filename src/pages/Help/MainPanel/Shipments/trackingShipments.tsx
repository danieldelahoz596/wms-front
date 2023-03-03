import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>Shipments {'>'} Tracking Shipments</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Tracking Shipments</h1>
            <br />
            <p>
              {"Extensiv Order Manager's "}
              <b>Shipments</b> module allows you to track your shipments, wherever their final destination may be, whichever
              provider you are using for your product shipments. In addition to tracking shipments, the module allows you to:
            </p>
            <ul>
              <li>View details of shipped orders</li>
              <li>Print labels, packing slips, and pick lists (in Adobe PDF and/or HTML format)</li>
              <li>Void shipments</li>
              <li>Resend confirmation emails</li>
            </ul>
            <p>
              Like almost every other Extensiv Order Manager module, the <b>Shipments</b> module has a <b>Search/Filter</b> pane
              at the left. On the right, you can see the shipment records. At the top are buttons for operations you can perform
              on shipments and/or shipment records. Clicking an order number in the grid displays the details of the shipped
              order. Clicking the tracking number takes you to the shipping {"providers'"} website, where you can keep track of
              the progress of your shipment on its way to your customer.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503777/shipments__1_.png" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
