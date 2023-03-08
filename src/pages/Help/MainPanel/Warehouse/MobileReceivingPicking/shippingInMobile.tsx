import { Card, Col, Row, Alert } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Shipping in Mobile
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Shipping in Mobile</h1>
            <br />
            <p>
              Shipping an order is a fundamental process in Extensiv Warehouse Manager as it effectively allows you to ship out
              inventory from the system and move the order into a Shipped Complete status.
            </p>
            <Alert description="If you are utilizing the ShipStation integration, the orders will synchronize to ShipStation as they are picked (or per the integrations setting of Picked Complete or Picked Incomplete). When a tracking number is generated in ShipStation, it will synchronize back to Warehouse Manager and mark the order as Shipped Complete." />
            <Alert type="warning" description="You must be logged in to a mobile device to start shipping.   " />
            <h2>Prepare an order for shipping</h2>
            <h3>Picking in Mobile</h3>
            <p>
              Once an order has been created, the order must be picked before it can be shipped in mobile app. We recommend making
              sure the order is in the PICKED COMPLETE status before starting the shipping workflow. For more information, please
              see our help article on
              <a href="">Picking in Mobile</a>.
            </p>
            <h3>Packing in Mobile</h3>
            <p>
              Once an order has been picked, you have the option to also go through a packing workflow. The purpose of packing
              allows for a verification of the picked order contents to reduce the number of mis-ships and provides the ability to
              pack items into their specific cartons.For more information, please see our help article on
              <a href="Packing in Mobile"></a>.
            </p>
            <h2>Shipping in Mobile</h2>
            <p>If you are going to ship orders within Warehouse Manager, follow these steps:</p>
            <ol>
              <li>
                Navigate to <b>{'Shipping / Receiving > Shipping'}</b> in the Mobile Device.
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677001510286-image.png" />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677001530008-image.png" />
              </li>
              <li>
                Select an order by entering or scanning the Doc#, Tote, or Serial Number (SN), or use the search by date function
                to find the order to be shipped.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677001538718-image.png" />
                <br />
                Notice the cartons that were entered during the Packing phase.
                <ul>
                  <li>
                    If packing was not completed AND the Pick To Carton Setting was not used, there will be no cartons listed.
                    <br />
                    <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677001571532-image.png" />
                  </li>
                </ul>
              </li>
              <li>
                You can add a tracking number through the following:
                <ul>
                  <li>
                    Select a carton line and enter Tracking Info, Notes, and Weight. Then, click Save.
                    <br />
                    <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677001627370-image.png" />
                    <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677001631019-image.png" />
                  </li>
                  <li>
                    Add a new carton by entering a shipment tracking number on the Shipping Edit page and click{' '}
                    <b>Add Tracking Number</b>. You can also edit a newly added tracking number by selecting it and editing the
                    Tracking Info.
                    <br />
                    <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677001660167-image.png" />
                  </li>
                </ul>
              </li>
              <li>
                A second person can verify the contents of the order by going to the Shipping Edit page, searching for the order,
                and clicking
                <b>Verify Order</b>.
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677001691733-image.png" />
              </li>
              <li>
                Click <b>Deliver Order</b> to proceed to the Deliver Order page, then click <b>Delivered</b> to note that the
                order has been delivered to the customer. This is also very useful for any pick-up orders to mark the order as
                Shipped Complete.
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677001724306-image.png" />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677001728138-image.png" />
              </li>
              <li>
                You can add a signature for pick-ups or deliveries by the person who will process the shipping. This is known as
                Proof of Delivery (POD).
                <br />
                Click Add Signature and enter the name of the handler of the shipment and the corresponding signature, then click
                Submit when done.
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677001749454-image.png" />
              </li>
              <li>
                You can select a printer and a document type, Bill of Lading, Pack List, Pick List, and Sales Order Invoice.
              </li>
              <li>
                Click <b>Complete</b> in the top right-hand corner. This action will update the status of the order to Shipped
                Complete.
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677001766163-image.png" />
              </li>
            </ol>
            <Alert
              type="warning"
              description="If you are going direct to carriers to print Shipping Labels (or using Shopify Shipping), it is recommended that you print the shipping label, place it on the box(es) and scan the tracking number in the main shipping screen."
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
