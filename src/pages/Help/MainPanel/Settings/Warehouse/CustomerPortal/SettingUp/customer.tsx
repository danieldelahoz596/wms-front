import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Customer Portal Permissions
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Customer Portal Permissions</h1>
            <br />
            <p>
              There are a number of permissions that can be assigned to users of the Customer Portal. These permissions will
              determine what options are available to the user when viewing the customer portal.
            </p>
            <p>
              Typically Extensiv Warehouse Manager portal users will create a separate user group specifically for the Customer
              Portal users. To create a new group in the classic admin console, navigate to '<b>{'Admin > User Groups'}</b>' and
              click the '<b>Add</b>' button at the top of the page
            </p>
            <br />
            <p>First, give the User Group a name:</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671288504951-1%2Bportalpermissionname.png" />
            <br />
            <p>Next, check the box next to the permissions you wish to grant to the users in this group</p>
            <p>Here are explanations of the permissions and the options to enable:</p>
            <table>
              <thead>
                <tr>
                  <th>Permission Option</th>
                  <th>Explanation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Search</td>
                  <td>Gives the user access to search the specified object - Only applies to locations / Ship to Addresses</td>
                </tr>
                <tr>
                  <td>View</td>
                  <td>View access to inventory and orders</td>
                </tr>
                <tr>
                  <td>Create</td>
                  <td>Create Ship to Locations, Shipping / Receiving Orders, Work Orders</td>
                </tr>
                <tr>
                  <td>Edit</td>
                  <td>Edit Orders and Order Lines</td>
                </tr>
                <tr>
                  <td>Delete</td>
                  <td>Delete Orders and Order Lines</td>
                </tr>
              </tbody>
            </table>
            <br />
            <p>
              <strong>Permissions</strong>
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671288522103-2%2Bportalpermissions.png" />
            <table>
              <thead>
                <tr>
                  <th>Permission Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Inventory Totals</td>
                  <td>Will hide/show 'Items' page in portal</td>
                </tr>
                <tr>
                  <td>Locations</td>
                  <td>The ability to view and create ship to / receiving locations in orders</td>
                </tr>
                <tr>
                  <td>Lot Inventory Totals</td>
                  <td>Will hide/show 'Lot Inventory' page in portal</td>
                </tr>
                <tr>
                  <td>Master Documents</td>
                  <td>Ability to see / tie orders to a master document in portal orders and work orders</td>
                </tr>
                <tr>
                  <td>Orders</td>
                  <td>Will hide/show Shipping Orders</td>
                </tr>
                <tr>
                  <td>Orders Detail</td>
                  <td>Shipping Order Lines</td>
                </tr>
                <tr>
                  <td>Portal Assets</td>
                  <td>Will hide/show 'Assets' page in portal</td>
                </tr>
                <tr>
                  <td>Portal Settings</td>
                  <td>Will hide/show Portal Settings page</td>
                </tr>
                <tr>
                  <td>Receiving</td>
                  <td>Will hide/show Receiving Orders</td>
                </tr>
                <tr>
                  <td>Receiving Detail</td>
                  <td>Receiving Order Lines</td>
                </tr>
                <tr>
                  <td>Work Orders</td>
                  <td>Will hide/show Work Orders</td>
                </tr>
                <tr>
                  <td>Work Orders Detail</td>
                  <td>Work Order Lines</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </Col>
      </Row>
    </>
  );
}
