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
              number of mis-ships.
            </p>

            <Alert type="warning" description="You must be logged in to a mobile device to start packing." />

            <h2>Packing a new carton</h2>
            <ol>
              <li>
                Start by navigating to <b>{'Mobile > Shipping/Receiving > Packing'}</b> or scan a picked sales order to populate
                the packing screen.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1673625931072-image.png" />
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1673625939893-image.png" />
              </li>
              <li>
                Select an order by entering or scanning the Doc# or do an order search by date.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1673625958675-image.png" />
                <br />
                The document will open and show the parts included in the order.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1673625978814-image.png" />
                <ul>
                  <li>
                    By clicking the carton dropdown menu, you can select which carton to pack.
                    <br />
                    <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1673626021264-image.png" />
                  </li>
                  <li>
                    By clicking the add icon (
                    <img
                      src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1673626047522-image.png"
                      alt=""
                    />
                    ), you can add an additional carton.
                    <br />
                    <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1673626062257-image.png" />
                  </li>
                  <li>
                    You can select a carton from the dropdown menu, then click <b>View Carton</b> to check its contents.
                    <br />
                    <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1673626086099-image.png" />
                    <br />
                    <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1673626096229-image.png" />
                  </li>
                  <li>
                    To delete the whole carton together with the packed items, click <b>Delete Carton</b>.
                  </li>
                  <li>
                    To remove a part from the carton’s list, click <b>Delete</b> at the end of each item.
                  </li>
                </ul>
              </li>
              <li>Select which carton you will use.</li>
              <li>
                Scan the part or select from part list.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1673626162531-image.png" />
              </li>
              <li>
                Enter the quantity of the item then click <b>Submit</b>.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1673626194152-image.png" />
              </li>
              <li>
                Repeat steps 4 and 5 until a pop-up appears to indicate that the entire order is packed.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1673626213236-image.png" />
              </li>
            </ol>

            <Alert description="The order is now packed, and you can view the order with the packing details by navigating to Orders > Shipping Orders and search for the order number." />

            <Alert description="Orders will show in the Picked Complete viewPacking is an optional workflow, and not set up by default in your account." />
          </Card>
        </Col>
      </Row>
    </>
  );
}
