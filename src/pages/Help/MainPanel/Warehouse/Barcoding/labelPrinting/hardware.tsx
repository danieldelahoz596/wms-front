import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Label Printer Hardware
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Label Printer Hardware</h1>
            <br />
            <p>
              Printing labels can be a great way to increase accuracy and efficiency in your warehouse. There are 2 main types of
              label printers to consider:
            </p>
            <h3>Direct Thermal</h3>
            <p>
              <b>Direct Thermal</b> label printers use a heated print head on special labels to create text and barcodes on their
              label stock. These types of printers are more cost effective and require less consumables.
            </p>
            <p>
              <strong>Advantages:</strong>
            </p>
            <ul>
              <li>No ribbon required</li>
              <li>Less expensive hardware</li>
              <li>Typically adequate for most applications</li>
            </ul>
            <p>
              <strong>Disadvantages:</strong>
            </p>
            <ul>
              <li>Lower resolution for detailed images, etc.</li>
              <li>Labels fade/smear over time</li>
              <li>Labels not recommended for outdoor or extreme conditions</li>
            </ul>
            <p>
              Example Direct Thermal printer model: <b>Zebra GK420d</b>
            </p>
            <h3>Thermal Transfer</h3>
            <p>
              <b>Thermal Transfer</b> label printers utilize a ribbon to imprint text and images on their label stock. These
              printers are typically ideal for higher quality labels that will last longer.
            </p>
            <p>
              <strong>Advantages:</strong>
            </p>
            <ul>
              <li>More durable label stock options</li>
              <li>Longer lasting text / barcodes</li>
              <li>Ideal for outdoor or extreme conditions</li>
              <li>
                Can use both <b>Thermal Transfer</b> and <b>Direct Thermal</b> Labels
              </li>
            </ul>
            <p>
              <strong>Disadvantages:</strong>
            </p>
            <ul>
              <li>More expensive printers</li>
              <li>Extra cost in ribbons</li>
            </ul>
            <p>
              Example Thermal Transfer model: <b>Zebra GK420T</b>
            </p>
            <p>
              In order to print barcode labels using Extensiv Warehouse Manager, the printer must have either a direct{' '}
              <b>ethernet</b> port or
              <b>WiFi</b> capability.
              <br />
              USB Printers are not supported at this time
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
