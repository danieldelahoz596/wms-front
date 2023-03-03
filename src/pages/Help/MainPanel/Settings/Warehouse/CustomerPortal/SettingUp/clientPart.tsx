import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Using Client Parts
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Using Client Parts</h1>
            <br />
            <p>
              The Client Parts option is used to assign specific Parts / SKU's to a client. This will limit their visibility to
              inventory related only to these SKU's in the customer portal. It will also only allow the user to add the Client
              Parts to Shipping and Receiving Orders.
            </p>
            <p>
              1 First, you will create a Client and Location for the customer you wish to assign Client Parts to. Navigate to '
              <b>{'Create > Clients'}</b>' from the top navbar in the admin console.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671300832068-1%2Bclientparts1.png" />
            <p>
              Enter a client name and account number. Click '<b>Save</b>'
            </p>
            <p>
              2 Next, Click the '<b>Locations</b>' button to create a location for this client. Click '<b>Add</b>' to add a
              location. Fill out the Location information as needed
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671300852718-2%2Bclientpartslocation.png" />
            <p>
              3 At the bottom of the Location creation screen, make sure to check the <b>Active</b> and Is <b>Depot</b>{' '}
              checkboxes.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671300867609-3%2Bportallocation2.png" />
            <p>
              Click <b>Save</b> at the top of the screen to complete the location creation
            </p>
            <br />
            <p>
              4 Now that we have the Client and Location created for your customer, now you will need to lock the user into this
              client/location. Navigate to '<b>{'Admin > Users'}</b>' and edit (or create) the user to be locked into this
              location. Keep in mind, this Client / Location will not hold inventory but will only be used to separate what
              inventory the Customer Portal user can see. See the <a href="">Setting up Customer Portal User</a> topic for details
              on how to lock a user into a client/location.
            </p>
            <p>
              5 Navigate back to the Client page {'(Search > Clients)'}. Under the previously created client record, you will see
              <b>Client Parts</b> and <b>Client Vendors</b>. Click the '<b>Add</b>' button under Client Parts section to add parts
              to this client.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671300883470-4%2Baddclientpart.png" />
            <p>
              Scroll through and add the parts as needed. The parts selected here will be the only parts the Customer Portal user
              will have visibility over. Additionally, the Customer Portal user will only be able to use these parts on Shipping /
              Receiving Orders created in the portal.
            </p>
            <p>
              6 The same concept applies to '<b>Client Vendors</b>'. You can specify which vendors are accessible to the Portal
              user by adding 'Client Vendors' to their client record in topShelf. This will limit the vendor options when creating
              a Receving Order in the portal.
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
