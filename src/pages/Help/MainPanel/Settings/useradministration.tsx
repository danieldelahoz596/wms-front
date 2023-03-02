import { Card, Row, Col } from 'antd';

export default function () {
  return (
    <>
      <h2>Settings {'>'} User Administration</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h2>Adding a New User</h2>
            <p>
              Click the <b>+ New User</b> button.
            </p>
            <p>
              Enter the user's full name, user name, password and assign proper access permissions (detailed in the next section).
              When you’re finished setting up user permissions, click Save. A new created user will be active by default.
            </p>
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504827/settings1__4_.png"
              style={{ width: 600 }}
            />

            <h2>Specific Permissions</h2>
            <p>
              To assign Access Permissions, scroll through the listand check the box in the Allow?column for permissions you wish
              to grant the new user. The list of assignable permissions and what they allow access to is provided below.
            </p>
            <ul>
              <li>
                <p>
                  <b>Orders: </b>Ability to process orders from all sales channels through direct shipping, multi-channel
                  fulfillment, 3PL exports, or dropshipping. This includes all manual orders, as well as canceling of orders.
                </p>
              </li>
              <li>
                <p>
                  <b>Shipments: </b>Ability to view all shipments, batches, and returns. This includes the ability to track or
                  void shipments, as well as print labels, pick lists, and packing slips.
                </p>
              </li>
              <li>
                <p>
                  <b>Customers: </b>Ability to view and manage all customer data Skubana automatically imports with incoming
                  orders from sales channels. This also includes manual creation of customers.
                </p>
              </li>
              <li>
                <p>
                  <b>Inventory: </b>Ability to fully manage inventory across all in-house, FBA, 3PL, and dropship warehouses. This
                  includes setting minimum inventory levels and channel allocation rules.
                </p>
              </li>
              <li>
                <p>
                  <b>Purchase Orders: </b>Ability to create, edit, and track vendor purchase orders throughout the procurement
                  life cycle. This includes the canceling of purchase orders.
                </p>
              </li>
              <li>
                <p>
                  <b>Purchase Order Authorization: </b>Ability to approve and authorize newly created purchase orders. Users with
                  this permission effectively issue purchase orders.
                </p>
              </li>
              <li>
                <p>
                  <b>Products: </b>Ability to manage your core products, kits, bundles, and variations. This includes the creation
                  and editing of basic product info, image gallery, listing SKUs, vendor products, and customs.
                </p>
              </li>
              <li>
                <p>
                  <b>Analytics: </b>Ability to run and view all reporting and analysis, including ad hoc, business intelligence,
                  and forecasting reports. This includes auto-generation and e-mailing of reports.
                </p>
              </li>
              <li>
                <p>
                  <b>Warehouses: </b>Ability to create and modify in-house warehouses and 3PLs from which your company fulfills
                  orders, including document print settings (in-house warehouses) and FTP settings (3PLs).
                </p>
              </li>
              <li>
                <p>
                  <b>Templates: </b>Ability to create and modify all of your templates, including shipment e-mail notifications,
                  packing slips, and purchase order templates.
                </p>
              </li>
              <li>
                <p>
                  <b>Vendors: </b>Ability to create and modify vendors that supply and/or manufacture the products your company
                  sells. This includes the ability to configure dropshipping capabilities for eligible vendors.
                </p>
              </li>
              <li>
                <p>
                  <b>Orderbots: </b>Ability to create and modify orderbots used for filtering and workflow automation of customer
                  orders from marketplaces and shopping carts.
                </p>
              </li>
              <li>
                <p>
                  <b>User Administration: </b>Ability to create new users, modify other users' permissions, as well as activate
                  and deactivate users in Skubana. This permission should be given to administrators only.
                </p>
              </li>
              <li>
                <p>
                  <b>Inventory Reconciliation: </b>Ability to use the individual inventory reconciliation feature found in the
                  Inventory Module. This feature relates to data used in Analytics reports.
                </p>
              </li>
              <li>
                <p>
                  <b>Bulk Inventory Reconciliation: </b>Ability to use the bulk inventory reconciliation feature found in the
                  Inventory Module.
                </p>
              </li>
            </ul>
            <p>
              You can always come back and edit user permissions at any time by selecting a user and clicking the Editbutton at
              the top of the UserAdministrationwindow, so long as you personally have permission to access this tab.
            </p>
            <p>
              If you ever need to completely cut off a user's access to Skubana, select the user and click the Deactivate button
              at the top of the User Administration window. Remember that deactivated users can be reinstated at any time by
              clicking the Show Inactive button, selecting the desired deactivated user, and clicking the Activate button that
              replaces the Deactivate button.
            </p>
            <p>Click the History button to see a summary of the user’s historywith the Skubana platform.</p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
