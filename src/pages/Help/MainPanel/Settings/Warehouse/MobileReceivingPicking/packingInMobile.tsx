import { Card, Col, Row, Alert } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Packing in Mobile
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Packing in Mobile</h1>
            <br />
            <p>
              Once an order has been picked, you have the option to also go through a packing workflow. The purpose of packing
              allows you to pack items into specific cartons and acts as a verification of the picked order contents to reduce the
              number of mis-ships.{' '}
            </p>
            <Alert type="warning" description="You must be logged in to a mobile device to start packing." />
            <h2>Packing a new carton </h2>
            <ol>
              <li>
                Start by navigating to <b>{'Mobile > Shipping/Receiving > Packing'} </b>or scan a picked sales order to populate
                the packing screen.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677000562376-image.png" />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677000565434-image.png" />
              </li>
              <li>
                Select an order by entering or scanning the Doc# or do an order search by date.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677000573036-image.png" />
                <br />
                The document will open and show the parts included in the order.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677000841409-image.png" />
                <br />
                By clicking the carton dropdown menu, you can select which carton to pack.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677000878072-image.png" />
                <br />
                By clicking the add icon (:plus:), you can add an additional carton.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677000963582-image.png" />
                <br />
                You can select a carton from the dropdown menu, then click <b>View Carton</b> to check its contents.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677000981037-image.png" />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677000992822-image.png" />
                <br />
                To delete the whole carton together with the packed items, click <b>Delete Carton.</b> <br />
                To remove a part from the carton’s list, click <b>Delete</b> at the end of each item.
              </li>
              <li>Select which carton you will use.</li>
              <li>
                Scan the part or select from part list.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677001053436-image.png" />
              </li>
              <li>
                Enter the quantity of the item then click Submit.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677001065323-image.png" />
              </li>
              <li>
                Repeat steps 4 and 5 until a pop-up appears to indicate that the entire order is packed.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1677001085062-image.png" />
              </li>
            </ol>
            <Alert description="The order is now packed, and you can view the order with the packing details by navigating to Orders > Shipping Orders and search for the order number. Orders will show in the Picked Complete viewPacking is an optional workflow, and not set up by default in your account.  " />
          </Card>
        </Col>
      </Row>
    </>
  );
}
