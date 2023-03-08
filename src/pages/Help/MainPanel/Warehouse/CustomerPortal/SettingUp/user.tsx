import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Setting up Customer Portal User
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Setting up Customer Portal User</h1>
            <br />
            <p>The Customer Portal is a Extensiv Warehouse Manager license that needs to be assigned to a specific user.</p>
            <ol>
              <li>
                First you will create a user in Warehouse Manager by navigating to {"'Admin > Users'"} in the admin console.
              </li>
              <li>Next, click the 'Add' button to add a new user.</li>
              <li>
                Fill out the information as you would with any other user.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671300692115-1%2Bportaluser1.png" />
                <br />
                Note the 'Web User Name' will be the login the customer will use. In the above example, it would be
                'brian@bgilman'.
              </li>
              <li>
                Next, select the user group that you want to assign this user to.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671300736727-2%2Bportaluser2.png" />
                <br />
                You may want to set up a separate user group just for your portal users, or multiple user groups to define
                different levels of portal access. See the '<a href="">Customer Portal Permissions</a>' topic for more
                information.
              </li>
              <li>
                The last step in the user creation is to lock the user into a single inventory location. Click Save at the top of
                the page when completed.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671300750799-3%2Bportaluser3.png" />
                <br />
                Where you lock your users into will depend on the configuration option you are using. For example, you will lock
                the user into their specific location if you have your warehouse segregated by customer. Or you will lock them
                into your main warehouse if you want them to have visibility over all inventory.
              </li>
              <li>
                Last, you will need to assign the Customer Portal license to the user. This can only be done by the main admin
                user in Warehouse Manager.
                <br />
                On the '<b>{'Admin > Users'}</b>' page, you should see the '<b>Assign User Licenses</b>' button if you are logged
                in as the main admin. Click the Assign User Licenses button.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671300627030-4%2Bportallicense1.png" />
                <br />
                Check the '<b>Client View</b>' or '<b>Customer Portal</b>' checkbox next to the user you wish to grant portal
                access to. Click Save
              </li>
            </ol>
          </Card>
        </Col>
      </Row>
    </>
  );
}
