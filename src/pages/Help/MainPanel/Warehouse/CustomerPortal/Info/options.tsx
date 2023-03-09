import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Customer Portal Options
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Customer Portal Options</h1>
            <br />
            <p>
              The purpose of this article is to outline a couple of scenarios for customer portal configurations in Extensiv
              Warehouse Manager. We understand that every customers needs are unique, so please let us know if you have further
              questions that are not covered in this guide.
            </p>
            <h3>Locking user into Main Warehouse</h3>
            <p>
              If you want your user to have full visibility over your entire warehouse you will simply lock the user into your
              main warehouse location.
            </p>
            <h3>Separate Locations for each Customer</h3>
            <p>
              This option will allow you to set which Warehouse Manager warehouse location the user can view inventory in. This
              option works best if you have your inventory and bins separated into multiple locations in Warehouse Manager.
            </p>
            <h3>Using Client Parts</h3>
            <p>
              This option will allow you to limit inventory visibility to the Customer Portal user based on SKU's / Parts that you
              assign to that client. This option works best if your warehouse bins are shared by multiple clients. This reduces
              the need for assigning your bins (shelves) to specific customers.
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
