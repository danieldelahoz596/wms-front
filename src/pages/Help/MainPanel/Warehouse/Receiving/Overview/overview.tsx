import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Receiving Overview
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Receiving Overview</h1>
            <br />
            <p>
              Receiving in Extensiv Warehouse Manager refers to receiving inventory against an existing receiving transaction in
              Warehouse Manager. There are other ways to enter inventory into Warehouse Manager, but using a Receiving Order to
              receive against gives the most detail. A typical receiving process is as follows:
            </p>
            <ul>
              <li>
                Receiving Order created in Warehouse Manager(created manually or synced from another application via integration)
              </li>
              <li>Receiving Order document printed (optional)</li>
              <li>
                Once inventory arrives in the dock, the user opens the Receiving order on the handheld device or mobile app to
                begin receiving
              </li>
              <li>Inventory is placed into a bin on the receiving dock via the scanner / mobile app.</li>
              <li>Bin Move / Put Away used to move the inventory from the receiving dock to the shelf location (bin)</li>
            </ul>
            <p>
              This process may vary from company to company. There are 2 modes to receiving on the Device / Mobile. See the
              Receiving Modes topic for more information.
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
