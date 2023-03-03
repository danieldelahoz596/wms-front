import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>Shipments {'>'} Postal Zones</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Postal Zones</h1>
            <br />
            <p>
              Postal Zones are{' '}
              <a href="https://postalpro.usps.com/mnt/glusterfs/2019-02/ZoneChartsMatrixTechnicalGuide_0.pdf">assigned by USPS</a>{' '}
              based on the distance a piece of mail travels from its shipping origin to its destination. Postal zones can help you
              determine the shipping cost and estimated delivery date. By default, postals zone are included in the Orders module
              in the <b>Zone</b> column, which allows you to sort orders by postal zone and apply bulk actions to those orders.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/postal.PNG" />
            <p>
              If you don't see the <b>Zone</b> column, click on the icon below in the bottom left corner of the Orders grid to
              choose the columns you want to show or hide from view, in addition to their placement.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/postal2.png" />
            <br />
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/postal3.PNG" />
            <br />
            <a href="https://postalpro.usps.com/mnt/glusterfs/2019-02/ZoneChartsMatrixTechnicalGuide_0.pdf">
              Zones and Distances as stated by the USPS
            </a>
            <ol>
              <li>Non-local zones within a 50-mile radius of the point of origination</li>
              <li>51 to 150 mile radius</li>
              <li>151 to 300 mile radius</li>
              <li>301 to 600 mile radius</li>
              <li>601 to 1000 mile radius</li>
              <li>1001 to 1400 mile radius</li>
              <li>1401 to 1800 mile radius</li>
              <li>1801 miles and over</li>
              <li>*ZIP Codes Assigned For Exceptional Network Circumstances*</li>
            </ol>
            <h2>Postal Zone Orderbot Filter</h2>
            <p>You can use postal zones to automate where orders are routed and the shipping methods that are applied to them.</p>
            <ol>
              <li>
                Go to the <b>Settings Module</b> and click on <b>Orderbots</b> from the menu on the left side of the screen.
              </li>
              <li>
                Click <b>+ New Orderbot</b> to create a new orderbot and add the filter Postal Zone. From there, you can create
                filters that search for orders within USPS Postal Zones 1-9.
              </li>
              <li>
                Add an action to apply to orders that meet the requirements of this orderbot. For example, you could use "Apply
                cheapest rate" or "Apply best rate" to set the shipping method based on the postal zone, or "Set warehouse" to
                route the order to a specific warehouse.
              </li>
              <li>
                Click <b>Save</b>.
              </li>
            </ol>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/postal4.PNG" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
