import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Deleting Line Items Received
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Deleting Line Items Received</h1>
            <br />
            <p>
              In some instances it may be necesarry to delete line item QTY's from PO's that have been received (i.e. accidentally
              over received. wrong quantity on the wrong line) This can only be done through the Extensiv Warehouse Manager Admin
              Console. Log into the admin console and find the receiving transaction that you want to edit. Click into the edit
              transaction screen and scroll down to the line items received. On each line next to the received quantity you will
              see "Detail".
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320252062-1%2BEdit_Receiving_Quantities.png" />
            <p>
              Click on Detail and you will be brough to a small popup that will have The quantity, lot or serial information and
              who it was received by. Simply click delete and the quantities will be removed out of inventory. If you need to
              re-receive a lesser quantity, you must do this through Mobile or Device.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320262692-2%2BDelete_line_quantities.png" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
