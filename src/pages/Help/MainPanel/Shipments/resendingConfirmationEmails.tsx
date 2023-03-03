import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>Shipments {'>'} Resending Confirmation Emails</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Resending Confirmation Emails</h1>
            <br />
            <p>
              If you click the Resend Confirmation Email(s), it will send the shipment tracking confirmation to the email address
              that is listed in the order information. If you select multiple orders and click this button, it will resend the
              emails to all of the individual emails listed in the shipments.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/email%2B_1_.png" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
