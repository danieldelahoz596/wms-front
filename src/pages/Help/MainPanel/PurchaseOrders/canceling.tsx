import { Card, Row, Col, Alert } from 'antd';

export default function () {
  return (
    <>
      <h2>PurchaseOrders {'>'} Canceling a P.O.</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Canceling a P.O.</h1>
            <br />
            <ol>
              <li>
                Navigate to the <b>Purchasing</b> module. From here, you can select which orders you would like to cancel. Once
                selected, click <b>Cancel</b> from the top menu.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO%2B_11_.png" />
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO%2B_12_.png" />
              </li>
              <li>
                You will be prompted to confirm that you wish to cancel the selected P.O.s. Select <b>Yes - Cancel P.O.</b> to
                continue
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO%2B_13_.png" />
              </li>
              <li>
                You can review your cancelled P.O.s from the left-side menu pane under the <b>Canceled</b> status
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO%2B_14_.png" />
              </li>
            </ol>
            <Alert
              message="Note"
              description="You can only cancel P.O.s that are in Awaiting Authorization, Awaiting Confirmation, or Awaiting Re-Authorization status. If P.O.s are in Pending Delivery status or later, you will not have the option to cancel the P.O."
            />
            <p>
              If your vendor can no longer fulfill the P.O. after it has been confirmed, refer to the <a href="">Void PO</a>{' '}
              workflow.
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
