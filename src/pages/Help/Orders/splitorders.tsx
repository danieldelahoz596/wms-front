import { Card, Row, Col, Alert } from 'antd';

export default function () {

  return (
    <>
      <h2>Orders {'>'} Splitting Orders</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Split Orders</h1>
            <p>In Extensiv Order Manager when you split an order, you divide a single order into two. You can choose to handle the resulting two orders similarly or fulfill them from different warehouses, at different times. You can choose to manually split an order or automate the process for new orders via orderbots.</p>
            <p><i>NOTE: An Orderbot may require a multi-item order to be split. An order for a single unit of a single Master SKU cannot be split.</i></p>
            <p>Please see below for instructions for how to split an order.</p>
            <h1>Step 1</h1>
            <p>In the toolbar, select the <strong>Orders</strong> module</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505664/orders__43_.PNG' style={{ width: 1000 }} />
            <br /><br />
            <h1>Step 2</h1>
            <p>Search for the order you want to split. Use the Search Panel on the left-hand side to locate the order. </p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505666/orders__44_.PNG' style={{ width: 200 }} />
            <br /><br />
            <h1>Step 3</h1>
            <p>Once you have found the order, select it and click the “Edit” button. You will find the “Split Order” option in the dropdown. </p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505667/orders__45_.PNG' style={{ width: 800 }} />
            <br /><br />
            <h1>Step 4</h1>
            <p>Select “Split Order” and a new window will open. You will see two columns: </p>
            <ul>
              <li>
                <p>“This Order” which refers to the Original Order (on the left)</p>
              </li>
              <li>
                <p>New Order (on the right)</p>
              </li>
            </ul>
            <p>This is what is going to be split. Enter the quantity of items for the new order which will be deducted from the Original Order. </p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505668/orders__46_.PNG' style={{ width: 600 }} />
            <br /><br />
            <h1>Step 5</h1>
            <p>Once you have made the appropriate adjustments, click Save. You will now see in the main orders window that the order has been split into two separate orders. </p>
            <Alert
              message="Note"
              description="If your new split order qualifies for orderbots, you may not see the split order under the same status. For example, it could be in a different Awaiting status if it's assigned to a different kind of warehouse, or it could be Unresolved (Out of Stock, etc.)."
              type="info"
            />
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505669/orders__47_.PNG' style={{ width: 800 }} />
          </Card>
        </Col>
      </Row>
    </>
  );
};
