import { Alert, Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>Orders {'>'} Add an item to an existing order</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Add an item to an existing order</h1>
            <Alert
              message="Note"
              description="The option to add items to an existing order in Extensiv Order Manager is currently only available for Manual and Shopify channels."
            />
            <br />
            <p>
              Navigate to the <strong>Orders</strong> Module. Click on the order number of the order
              you want to edit, and go to the <strong>Order Items</strong> tab:
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/order1.png"
              style={{ width: 800 }}
            />
            <br />
            <br />
            <p>Click on the Add a product... dropdown to select the item you want to add to the</p>
            <p>
              order. If you do not see a search result for your desired product, it likely does not
              have a{' '}
              <a href="" className="helplink">
                Listing SKU for this channel.
              </a>
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/order.png"
              style={{ width: 600 }}
            />
            <br />
            <br />
            <p>
              Enter the item quantity, unit price, and discount amounts, then click{' '}
              <strong>Save</strong>:
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/order3%2B_1_.png"
              style={{ width: 600 }}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
