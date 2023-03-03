import { Card, Row, Col } from 'antd';

export default function () {
  return (
    <>
      <h2>PurchaseOrders {'>'} Voiding a P.O.</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Voiding a P.O.</h1>
            <br />
            <p>
              Voiding a Purchase Order is necessary after a P.O. has been issued but the Vendor confirms it can no longer be
              fulfilled. To ensure this is recorded in Extensiv Order Manager, you can use the Void PO workflow below.
            </p>
            <ol>
              <li>
                Navigate to the <b>Purchasing</b> Module
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO%2B_21_.png" />
              </li>
              <li>
                The only 2 statuses in which P.O.s can be voided are <b>Pending Delivery</b> or <b>Partially Delivered</b>.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO1%2B_9_.png" />
              </li>
              <li>
                Select the check boxes next to the P.O.s that your vendor is unable to fulfill and then select <b>Void</b> from
                the top menu.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO2%2B_6_.png" />
              </li>
              <li>
                You will be prompted to confirm that you want to void all selected P.O.(s). To proceed, select{' '}
                <b>Yes - Void P.O.</b>
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO2%2B_7_.png" />
              </li>
              <li>
                Once Extensiv Order Manager processes your request, you will received feedback in the pop-up window that your P.O.
                has been voided. Click <b>OK</b>.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO2%2B_8_.png" />
              </li>
            </ol>
          </Card>
        </Col>
      </Row>
    </>
  );
}
