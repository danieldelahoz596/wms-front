import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Customer Portal Customization
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Customer Portal Customization</h1>
            <br />
            <p>
              There are some customization options with the Extensiv Warehouse Manager customer portal. These customizations will
              require that you have an active support contract on file.
            </p>
            <p>Some of the customizable options in the portal are:</p>
            <ul>
              <li>Columns displayed on Inventory views (assets/items / lot inventory)</li>
              <li>Orders displayed to the portal user</li>
              <li>Hiding inventory in specified bins/locations from the portal user</li>
            </ul>
            <p>
              Please contact Extensiv Warehouse Manager support at <a href="mailto:support@scoutsft.com">support@scoutsft.com</a>{' '}
              if you wish to discuss your specific portal customization needs.
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
