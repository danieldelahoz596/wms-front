import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Locking User into Location
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Locking User into Location</h1>
            <br />
            <p>
              All Customer Portal users are required to be locked into a Extensiv Warehouse Manager inventory location. Which
              location they are locked into will depend on how you have your warehouse configured. See the '
              <a href="">Setting up Customer Portal User</a>' topic for detailed information on how to lock users into a location.
            </p>
            <br />
            <h3>How to lock a user to a location</h3>
            <p>
              When creating or editing a user, you will find the '<b>Lock user into a single inventory location</b>' section at
              the bottom of the page. This is required for all Customer Portal users. Select the client / location to lock the
              user into, click Save at the top of the page when completed.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671288620225-portaluser3.png" />
            <p>
              Where you lock your users into will depend on the configuration option you are using. For example, you will lock the
              user into their specific location if you have your warehouse segregated by customer. Or you will lock them into your
              main warehouse if you want them to have visibility over all inventory.
            </p>
            <br />
            <h3>Locking user into Main Warehouse</h3>
            <p>
              If you want your user to have full visibility over your entire warehouse you will simply lock the user into your
              main warehouse location.
            </p>
            <br />
            <h3>Locking user into their own location</h3>
            <p>
              If you have your warehouse segmented with separate locations for each customer, you will lock the portal user into
              that specific location. This means that the customer will only have visibility of inventory in bins located in that
              specific location.
            </p>
            <br />
            <h3>Client Parts</h3>
            <p>
              This option still requires you to lock the user into their own client/location, but the difference is that the
              location will not hold any bins / inventory, it will simply provide a way to separate who can see what inventory.
              The bins and inventory will be under your main warehouse location.
            </p>
            <p>
              To limit what these users can see use the Client Parts option to assign Parts / SKU's to them. See the '
              <a href="">Using Client Parts</a>' topic for more information
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
