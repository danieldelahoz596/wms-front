import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Customer Portal Overview
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Customer Portal Overview</h1>
            <br />
            <h3>What is the Customer Portal?</h3>
            <p>
              The Extensiv Warehouse Manager Customer portal allows you to give limited access to your inventory to a customer or
              other type of user. It is available at a fraction of the cost of a full Warehouse Manager license. The customer
              portal is a separate, mobile friendly page found @ <a href="https://portal.scoutsft.com/">portal.scoutsft.com</a>
            </p>
            <p>The customer portal allows users to manage the following areas:</p>
            <ul>
              <li>View inventory levels</li>
              <li>Create Shipping Orders (shipping from your warehouse)</li>
              <li>Create Receiving Orders (receiving into your warehouse)</li>
              <li>Create Work Orders</li>
            </ul>
            <p>
              Using permissions, you can limit the users to any of these functions while disabling others. For example, if you
              only want them to have inventory visibility, you can disable the ability to create orders, etc.
            </p>
            <br />
            <p>
              The customer portal uses a couple of setup options that will determine how the inventory is separated for your
              customers view. You may not want Customer A to be able to view Customer B's inventory for example. This is done by 2
              different methods:
            </p>
            <ul>
              <li>'Locking' a user into a Warehouse Manager warehouse location</li>
              <li>Assigning 'Client Parts' to a client</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </>
  );
}
