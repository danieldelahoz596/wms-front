import { Card, Row, Col, Alert } from 'antd';

export default function () {

  return (
    <>
      <h2>Orders {'>'} Merging Orders</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Merge Orders</h1>
            <p>In order to help you save on shipping, Extensiv Order Manager may recommend that two or more unshipped orders be merged into one if they are going to the same customer.</p>
            <p>You will see these recommendations in your <a href='' className='helplink'>SKU Alerts</a>.</p>
            <p>There are 2 validations for Extensiv Order Manager to recommend merging orders:</p>
            <ul>
              <li>
                <p>If there are unshipped orders with the same Email Address, Extensiv Order Manager will suggest that the orders be merged.</p>
              </li>
              <li>
                <p>If there is no email address match but unshipped orders have the same Recipient Name and Address, Extensiv Order Manager will suggest the orders be merged.</p>
              </li>
            </ul>
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505651/Screen_Shot_2021-03-31_at_7.09.10_PM.png' style={{ width: 1000 }} />
            <br /><br />
            <p>Follow the steps outlined below on how to merge an order in Extensiv Order Manager.</p>
            <h1>Step 1</h1>
            <p>In the toolbar, select the <strong>Orders</strong> module</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505652/orders__39_.PNG' style={{ width: 1000 }} />
            <br /><br />
            <h1>Step 2</h1>
            <p>Search for the orders you would like to merge. You can search for orders in the left sidebar search panel or locate them in the orders grid. You will need to be able to see both orders to merge in the same orders grid, so if your search result is only for one of the orders, you won't be able to merge it.</p>
            <p><strong>ie:</strong> Search for orders from Shopify in Awaiting Shipment status, not just a specific order number.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505653/orders__40_.PNG' style={{ width: 200 }} />
            <br /><br />
            <p>To select an order, click on the box next to the order which will highlight the order in blue. </p>
            <h1>Step 3</h1>
            <p>Click on the <strong>Merge</strong> button. This will open up a new pop-up window.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505655/orders__41_.PNG' style={{ width: 800 }} />
            <br /><br />
            <h1>Step 4</h1>
            <p>Drag and drop which order you’d like to be the "master order" and which one you’d like to be the "child order(s)" from the orders list. You can merge more than two orders at a time. When you are finished, click Merge. Most information in the child order will be replaced by the master order. Some numeric quantities, like weights and totals, may be summed during the merge process.</p>
            <Alert
              message="Note"
              description={
                <ul>
                  <li>
                    <p>A manual order cannot be a master order. You can, however, <a href='' className='helplink'>edit manual orders</a> with new/different order items.</p>
                  </li>
                  <li>
                    <p>You cannot merge orders that are in different order statuses. For example, you cannot merge an order in an Unresolved status with one in Awaiting 3PL status.</p>
                  </li>
                  <li>
                    <p>Attempting these actions will result in an error message.</p>
                  </li>
                </ul>
              }
              type="info"
            />
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505656/orders__42_.PNG' style={{ width: 800 }} />
            <br /><br />
            <h1>Step 5</h1>
            <p>Once you've dragged/dropped at least one order into the master order section and one into the section to be merged into the master order, click <strong>Merge</strong>. You will be prompted to confirm the merge.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505657/Screen_Shot_2021-03-31_at_7.16.31_PM.png' style={{ width: 800 }} />
            <br /><br />
            <p>If you are merging a manual order with a native sales channel order, you'll be notified that you need to manually update the sale channel with a tracking number when the master order is shipped.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505658/Screen_Shot_2021-03-31_at_7.14.05_PM.png' style={{ width: 500 }} />
            <br /><br />
            <p>Once you confirm the merge, if the orders were qualified to merge together, you will be prompted with a success prompt like this:</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505659/Screen_Shot_2021-03-31_at_7.16.38_PM.png' style={{ width: 700 }} />
          </Card>
        </Col>
      </Row>
    </>
  );
};
