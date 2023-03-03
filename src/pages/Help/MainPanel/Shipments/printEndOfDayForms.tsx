import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>Shipments {'>'} How To Print End of Day Forms</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How To Print End of Day Forms</h1>
            <br />
            <p>
              Within Extensiv Order Manager users have the ability to print out <b>End of Day forms</b> for <b>Endicia</b>,
              <b>Express One</b>, and <b>Fedex</b> shipping providers. Also called <b>manifest</b> or <b>SCAN</b> (Shipment
              Confirmation Acceptance Notice) forms, these are forms that consolidate all of a day’s trackable shipments onto one
              barcoded form and are scanned by the USPS or Fedex representative when they physically accept daily shipments from a
              warehouse. UPS is currently not supported. If these shipments were created within Extensiv Order Manager, UPS should
              already have a record of the shipments. If pressed, some users print out a batch form to hand to delivery drivers.
            </p>
            <p>
              This is especially useful when processing a very high volume of daily shipments, as the SCAN form eliminates the
              need for the shipping provider to scan each label separately, which could otherwise amount to dozens, hundreds, or
              thousands of separate scans.
            </p>
            <p>
              To begin, head over to the <b>Shipments</b> module. Click on “<b>End of Day Forms</b>” in the right hand side menu.{' '}
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502801/ship.PNG" />
            <p>
              The available shipments for the day will be visible in the main window. Click the arrow icon under “<b>Actions</b>”
              to choose the shipments for the form. A new window will open listing all the shipments for the day, select the
              appropriate shipments and click the “<b>Request</b>” button to generate the form.{' '}
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502802/Screen_Shot_2021-03-12_at_3.55.16_PM.png" />
            <p>
              A PDF form will be generated and available to print. Alternatively, click the “<b>printer</b>” icon next to the
              arrow to choose to include all the shipments in the form.{' '}
            </p>
            <p>
              Users are also able to retrieve previously generated end of day forms to print one again at a later time if needed.
              To do so, select the shipment from the list available and click “<b>Retrieve End of Day</b>”.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502803/Screen_Shot_2021-03-12_at_3.54.00_PM.png" />
            <p>End of day forms will remain available in the system for 30 days.</p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
