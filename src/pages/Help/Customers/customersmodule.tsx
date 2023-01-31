import { Card, Row, Col, Alert } from 'antd';

export default function () {

  return (
    <>
      <h2>Customers {'>'} Customers Module</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Customers Module</h1>
            <p>With Extensiv Order Manager's <b>Customer</b> module, you do not need to maintain a separate and expensive customer relationship management system. The <b>Customer</b> module allows you to:</p>
            <ul>
              <li><p>Add customers, and, if needed, attach them to a company and/or sales channel</p></li>
              <li><p>Add emails, shipping addresses, and telephone numbers to a customer's record</p></li>
              <li><p>Merge two separate customer records into one</p></li>
              <li><p>Track customer orders</p></li>
            </ul>
            <p>The <b>Customer</b> module has a search/filter panel on the left, the main customer record in the middle, the customer's details on the right, and the customer orders at the bottom. You have to select a customer record first before the customer's details and order record is displayed onscreen.</p>
            <p>Selecting any customer will display all orders related to that customer in the "Customer Orders" pane at the bottom, as well as the emails and addresses associated with this customer in the Customer pane on the right</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505507/Screen_Shot_2021-01-25_at_1.10.25_PM.png" style={{ width: 1000 }} />
            <br /><br />

            {/* Merge multiple Customers */}
            <h1>Merge multiple Customers</h1>
            <p>If you have 2 different aliases for a customer (ex. John and John Peak in the screenshot below) you can select <b>Merge</b> from the top menu to combine these. Click <b>Merge</b> and drag the customer you wish to be the "Master" which has the most up to date address and email, and then select each customer you would like to merge into the Master. Once complete, select Merge at the bottom</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505508/Screen_Shot_2021-01-25_at_1.15.44_PM.png" style={{ width: 800 }} />
            <br /><br />

            {/* Adding New Customers */}
            <h1>Adding New Customers</h1>
            <p>To add new customers, simply click New Customer from the top menu and enter the necessary Name and Company (optional). Then click <b>Save</b></p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505510/image__29_.png" style={{ width: 600 }} />
            <p>Once created, you can add email and address info from the customer pane on the right by clicking the ➕ icon.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505511/image__30_.png" style={{ width: 800 }} />
            <br /><br />

            {/* View History */}
            <h1>View History</h1>
            <p>You can also see the edit history per specific customer by selecting <b>History</b> from the top menu</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505512/image__31_.png" style={{ width: 600 }} />
          </Card>
        </Col>
      </Row>
    </>
  );
};
