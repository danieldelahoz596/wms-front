import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Barcode Type
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Barcode Type</h1>
            <br />
            <p>
              There are a number of different barcode types available out there. Here are a couple of more commonly used barcode
              types:
            </p>
            <ul>
              <li>
                <a href=""></a>Code 128
              </li>
              <li>
                <a href=""></a>UPC-A
              </li>
              <li>
                <a href=""></a>Data Matrix
              </li>
            </ul>
            <h3>Code 128</h3>
            <p>
              The code 128 barcode symbology is the most common type of barcode used with Extensiv Warehouse Manager. It is a
              versatile barcode that allows alpha-numeric characters and can be used in a wide variety of applications.
            </p>
            <img src="https://jpgraph.net/download/manuals/chunkhtml/images/barcode_c128_Code128_ex1.png" />
            <h3>UPC-A</h3>
            <p>
              <b>UPC-A</b>, consists of 12 numerical digits, which are uniquely assigned to each trade item. Along with the
              related EAN barcode, the UPC is the barcode mainly used for scanning of trade items at the point of sale, per GS1
              specifications.
            </p>
            <p>
              The UPC-A barcode is a great way to use pre-existing barcodes with Warehouse Manager. See the Part setup guide for
              more details on how to add UPC's to Warehouse Manager.
            </p>
            <h3>Data Matrix</h3>
            <p>
              Data Matrix barcodes are 2d barcodes. 2d barcodes can hold a larger amount of data in a smaller space, making them a
              great option for small products or fitting long character strings such as web URL's into a barcode.
            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Datamatrix.svg/220px-Datamatrix.svg.png" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
