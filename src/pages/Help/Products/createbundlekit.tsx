import { Card, Row, Col, Alert } from 'antd';

export default function () {

  return (
    <>
      <h2>Products {'>'} Create Bundle / Kit through the UI</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Bundles/Kits</h1>
            <p>To create a bundle/kit, click on the <b>“Bundle / Kit”</b> button.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/product12.png" style={{ width: 300 }}/>

            <p>Next, a new pop-up window will show a field where you can search for the Master SKUs that you would like to bundle together.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/product14.PNG" style={{ width: 600 }}/>
            <p>You can search by the Master SKU or product name and click on it to begin creating your bundle. Enter the required products and when ready, click <b>Continue.</b></p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/product15.PNG" style={{ width: 600 }}/>
            <p>A new window will appear asking for the quantities per SKU that will make up the bundle/kit. Click <b>Continue</b> when done.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/product16.PNG" style={{ width: 400 }}/>
            <p>As you saw when you created a new core product through the UI, you will see the same window to create the new Bundle/Kit.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/product17.png" style={{ width: 600 }}/>
            <p>The required fields are the same as when you created a core product:</p>
            <ul>
              <li>Master SKU</li>
              <li>Name</li>
              <li>Brand</li>
            </ul>
            <p>For information on Gallery, Listing SKUs, Vendor Products, or Customs, please refer to sections above under <b>Core Products.</b></p>
            <p>The one tab we did not go over is the “Bundled Items” tab (green box on image above). When you click on this tab, you will see the products that make up this bundle/kit. You can also add to the bundle by clicking on <b>Add Core Product</b>, which will allow you to search for another Master SKU or product name to add to this bundle/kit along with the quantity.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/product18.png" style={{ width: 600 }}/>
          </Card>
        </Col>
      </Row>
    </>
  );
};
