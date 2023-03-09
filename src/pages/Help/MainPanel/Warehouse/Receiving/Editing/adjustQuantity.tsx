import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Adjusting Quantities
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Adjusting Quantities</h1>
            <br />
            <p>
              Quantites on receiving documents can be adjusted to actual amounts received. Log into the main admin console and
              enter the edit document screen for the PO that you would like to adjust. Click Edit next to the line item that you
              would like to adjust on the document.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320109965-1%2BEdit_Receiving_Quantities.png" />
            <p>You can then adjust the QTY of what you are supposed to be receiving.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320119742-2%2BAdjusting_quantities.png" />
            <p>When the quantity is adjusted, hit save on the line and then save the document.</p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
