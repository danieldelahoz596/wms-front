import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Logging into Customer Portal
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Logging into Customer Portal</h1>
            <br />
            <p>
              The Extensiv Warehouse Manager Customer Portal is a separate website and can be found @{' '}
              <a href="https://portal.scoutsft.com/">https://portal.scoutsft.com</a>
            </p>
            <p>
              The user you are logging in as will require a customer portal license. See the '
              <a href="">Setting Up Customer Portal User</a>' topic for details
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
