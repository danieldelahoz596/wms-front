import { Card, Row, Col } from 'antd';

export default function () {

  return (
    <>
      <div style={{ margin: '10px' }}>
        <h2>Settings {'>'} My Profile</h2>
        <Row>
          <Col span={24}>
            <Card>
              <p>The fly-out menu that you can always see in the top right corner of Extensiv Order Manager contains a link to the My Profile page. The My Profile page is also accessible from the Settings module.</p>
              <h2>My Information</h2>
              <p>To update or change your email address and name, edit the email address and name fields and click the Update My Info button.</p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502820/image.png" style={{ width: 600 }} />
              
              <h2>Change Password</h2>
              <p>To change your password, enter your current password in the Current Password field, then enter your new password in the New Password and Confirm Password fields, then click the Change Password button.</p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502821/image__1_.png" style={{ width: 600}} />
              
              <h2>Email Preferences</h2>
              
              <p>The Email Preferences section allows you to select which email reports you will receive at the email address linked to your user account. There are currently 6 email reports you can opt in to receive.</p>
              <ul>
                <li>Shipment Imports</li>
                <li>FBA Workflow Creation</li>
                <li>Inventory Imports</li>
                <li>Order Exports</li>
                <li>Skipped Orders</li>
                <li>Inventory Min Alerts</li>
              </ul>
              <p>Once you've selected the emails you would like to receive, click on the Update Preferences button.</p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502823/image__2_.png" style={{ width: 600}} />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
