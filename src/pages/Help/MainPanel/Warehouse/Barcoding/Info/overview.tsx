import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} What is a Barcode?
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>What is a Barcode?</h1>
            <br />
            <h3>
              "A barcode is a machine-readable representation of data (numbers and/or letters) relating to the object to which it
              is attached."
            </h3>
            <p>
              Simply put, barcodes are a faster way to input data (part numbers, etc) into your barcode scanner or PC, rather than
              typing them. Barcodes can greatly increase accuracy, speed and efficiency in your warehouse. Barcodes can be used in
              a number of ways to improve your business process within the warehouse. Here are some examples of places where
              barcodes can improve your process:
            </p>
            <ul>
              <li>Products</li>
              <li>Bin Locations/Shelving</li>
              <li>Pallets</li>
              <li>Printed Shipping and Receiving Documents</li>
              <li>Shipping Labels</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </>
  );
}
