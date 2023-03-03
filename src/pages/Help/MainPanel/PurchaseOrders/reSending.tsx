import { Card, Row, Col } from 'antd';

export default function () {
  return (
    <>
      <h2>PurchaseOrders {'>'} Updating PO Number Prefix</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Re-Sending a PO</h1>
            <br />
            <p>
              If your vendor requires you to re-send a past POfor any reason, you can do so within the Extensiv Order Manager
              platform from the Purchasing module.
            </p>
            <ol>
              <li>
                Navigate to the <b>Purchasing</b> Module.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO%2B_20_.png" />
              </li>
              <li>
                Only POs in the following statuses can be resent:{' '}
                <b>Awaiting Confirmation, Awaiting Re-Authorization, Pending Delivery, or Partially Delivered.</b>
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO2%2B_3_.png" />
              </li>
              <li>
                Select the check boxes next to the applicable orders you wish to resend to your vendor partner, then select{' '}
                <b>Re-Send</b> from the top menu.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO2%2B_4_.png" />
              </li>
              <li>
                A prompt will display confirming that Extensiv Order Manager has processed to request.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO2%2B_5_.png" />
              </li>
            </ol>
          </Card>
        </Col>
      </Row>
    </>
  );
}
