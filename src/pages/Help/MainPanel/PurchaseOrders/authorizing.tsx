import { Card, Row, Col } from 'antd';

export default function () {
  return (
    <>
      <h2>PurchaseOrders {'>'} Authorizing a P.O.</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Authorizing a P.O.</h1>
            <br />
            <p>
              P.O.s can be created either manually, or through the Auto-P.O. feature. Once a P.O. has been created, it will be
              viewable from the Purchasing Module in Awaiting Authorization status. Authorizing a Purchase Order, will send the
              P.O. template to your vendor. The below steps will walk you through the P.O. authorization process in Skubana.
            </p>
            <ol>
              <li>
                Navigate to the <b></b> Module.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO%2B_2_.png" />
              </li>
              <li>
                From the left-side status menu, select <b>Awaiting Authorization</b>. This will expand a drop-down menu of all
                your warehouses as well as the number of P.O.s associated with those warehouses that are in the "Awaiting
                Authorization" status.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO%2B_3_.png" />
              </li>
              <li>
                After selecting a warehouse, select the the check boxes next to the P.O.(s) you wish to send to your vendor, then
                select <b>Authorize</b> from the top menu.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO%2B_4_.png" />
              </li>
              <li>
                A prompt will display asking you to confirm your selection. Select Yes - <b>Authorize P.O.</b> to proceed.
              </li>
              <li>
                Once a P.O. has been authorized, it will be moved to an <b>Awaiting Confirmation</b> status. This will issue an
                emailed P.O. to the email address that you have listed as the vendor contact within the Settings module.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO%2B_5_.png" />
              </li>
            </ol>
          </Card>
        </Col>
      </Row>
    </>
  );
}
