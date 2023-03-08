import { Card, Col, Row, Alert } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Creating a Receiving Order
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Creating a Receiving Order</h1>
            <br />
            <p>
              If you do not have an integration that supports Purchase Orders, you can create a receiving order manually to
              process a Purchase Order.
            </p>
            <h2>Creating a Purchase Order</h2>
            <ol>
              <li>
                Navigate to <b>{'Orders > Receiving Orders'}</b>.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1676307930240-1676307930240.png" />
              </li>
              <li>
                Click <b>New</b> to create a new Receiving Order.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1676307940636-1676307940635.png" />
              </li>
              <li>You can optionally enter an ‘Order Number’. If not, the system will generate it upon saving the record.</li>
              <li>
                Choose Purchase Order as ‘Order Type’.
                <br />
                Typically, your customers call it a Purchase Order when there is a monetary exchange involved, but you can also
                call it a Generic
                <br />
                Receiving. You can change these options through <b>{'Settings > Transaction Codes'}</b>.
              </li>
              <li>
                In the From section, enter either a Vendor (you can also select Default as Vendor) or Location. They are both
                added beforehand during initial setup.
              </li>
              <li>Choose the ‘Client’ from the Destination section.</li>
              <li>
                Click <b>Save</b> when done
              </li>
            </ol>

            <Alert description="Once you have saved the record, you can add Part lines." />

            <h2>Adding Order Lines to order</h2>

            <Alert
              type="warning"
              description="Before adding parts to the order, make sure that the part records are accomplished"
            />

            <ol>
              <li>
                On the Order Lines section, click Add Part to Order.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1676308041215-1676308041215.png" />
              </li>
              <li>Click the space under Part Name.</li>
              <li>
                A new row will appear for you to enter the part details.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1676308048010-1676308048010.png" />
              </li>
              <li>
                Enter a ‘Part Name’. When you start typing upon this field, the system will automatically generate a list of parts
                that matches whatever you are typing.
              </li>
              <li>
                Next, click the field below ‘Part Description’ and it will generate the description based on the ‘Part Name’.
              </li>
              <li>Enter the QTY (Quantity) and Quantity Received.</li>
              <li>Repeat steps 1-6 until you have added all the parts in your order.</li>
              <li>
                Click <b>Save</b> when done.
              </li>
            </ol>

            <Alert description="The receiving order is now saved and now available to be received in the mobile device." />
          </Card>
        </Col>
      </Row>
    </>
  );
}
