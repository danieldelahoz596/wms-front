import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      {/* Unresolved: Missing Fulfillment Source */}
      <h2>Orders {'>'} Unresolved: Missing Fulfillment Source</h2>
      <Row>
        <Col span={24}>
          <Card>
            <p>
              When an order is in the Missing Fulfillment Source status, this is usually caused by an issue with the Recipient
              information.
            </p>
            <p>
              Under the Order Fulfillment pane, select <strong>Recipient</strong> and review the address that was entered. You can
              either update the address manually and <strong>save</strong>, or force validate the address by selecting{' '}
              <strong>Validate</strong>. This can cause an order to be unresolved if it does not have required shipping
              information such as a state/country/postal code.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/image%2B_37_.png"
              style={{ width: 800 }}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
