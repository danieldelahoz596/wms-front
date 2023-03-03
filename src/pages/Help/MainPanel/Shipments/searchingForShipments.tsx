import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>Shipments {'>'} Searching for Shipments</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Searching for Shipments</h1>
            <br />
            <p>
              The <b>Shipments</b>
              {" module's search function offers two ways to search for"} <b>Shipments</b>, <b>Batches</b>, and
              <b>Returns</b> in Extensiv Order Manager. Click the magnifying glass to use the Search function.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502892/shipment.PNG" />
            <p>
              The first search method uses the traditional search function, which involves narrowing down your search by entering
              as much information on the Search fields as possible.
            </p>
            <p>
              If you choose <b>Shipments</b> as your search type, you can search by:
            </p>
            <ul>
              <li>tracking number</li>
              <li>delivery status</li>
              <li>order number</li>
              <li>batch number</li>
              <li>sales channel</li>
              <li>shipping provider</li>
              <li>city</li>
              <li>state</li>
              <li>country</li>
              <li>warehouse</li>
              <li>ship date</li>
            </ul>
            <p>
              If you choose <b>Batches</b> as your search type, you can search by:
            </p>
            <ul>
              <li>batch number</li>
              <li>ship date</li>
              <li>date created</li>
              <li>created by</li>
              <li>warehouse.</li>
            </ul>
            <p>
              If you choose <b>Returns</b> as your search type, you can search by:
            </p>
            <ul>
              <li>tracking number</li>
              <li>order number</li>
              <li>RMA number</li>
              <li>sales channel</li>
              <li>returner</li>
              <li>shipping provider</li>
              <li>city</li>
              <li>state</li>
              <li>country</li>
              <li>created date</li>
              <li>received date</li>
            </ul>
            <p>
              The second search method uses filtering to look for specific <b>Shipments</b>, <b>Batches</b>, and
              <b>Returns</b> for each of your warehouses and sales channels. Click the drop down arrow on any of the 3 types to
              drill down further into your search.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502895/Screen_Shot_2021-02-19_at_4.13.07_PM.png" />
            <br />
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502896/Screen_Shot_2021-02-19_at_4.15.01_PM.png" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
