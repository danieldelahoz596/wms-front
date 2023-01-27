import { Card, Row, Col } from 'antd';

export default function () {

  return (
    <>
      <div style={{ margin: '10px' }}>
        <h2>Products {'>'} How to Create Products</h2>
        <Row>
          <Col span={24}>
            <Card>
              <h1>How to Create Core Products Through the UI</h1>
              <p>When creating or editing products in Extensiv Order Manager, you can choose between two methods: manual creation in the UI or import via spreadsheet. To create a core product manually, follow the steps outlined below:</p>
              <p>1. Navigate to the Products module, & click the New Product button.</p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-01-11%2Bat%2B1.38.20%2BPM.png" style={{ width: 600 }} />
              <p>2. Select <strong>Core Product</strong></p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-01-11%2Bat%2B1.45.57%2BPM.png" style={{ width: 600 }} />
              
              <h2>Core Products</h2>
              <p>A core product is a single unique product that may be added into a <a href='' style={{ color: 'red' }}>bundle or kit</a>. If the answer to this question: <i>"Does the product I am selling contain an item within it that I order individually from my supplier?"</i> is "no", then you have a core product.</p>

              <h3>Basic info</h3>
              <p>When creating a Core Product, you’ll be taken to an edit window to fill out product info. There are three required fields here which must be entered before you can proceed:</p>
              <ul>
                <li>Master SKU</li>
                <li>Name</li>
                <li>Brand</li>
              </ul>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-01-13%2Bat%2B7.57.14%2BPM.png" style={{ width: 600 }} />
              <ul>
                <li>You cannot create a Master SKUs that already exists, active or inactive</li>
                <li>Dropdown fields with a blue plus sign or gear icon button next to them are fields that can have a new option added or edited, respectively.</li>
                <li>The Special section at the bottom is for organizational purposes only. No special flow will occur if these boxes are checked or not, so you can choose to set them with a value or not.</li>
              </ul>

              <p>Overview of all Product Fields:</p>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Definition</th>
                    <th>Usage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Master SKU</th>
                    <th>The unique value used to identify the product in-house. Does not need to match the Listing SKU</th>
                    <th>Used to identify the product in Extensiv Order Manager.</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </tbody>
              </table>

              <h3>Gallery</h3>
              <p>Copy and paste the image URL into the designated text box and click Add. We can only host live, public URLs. If the URL were to become dead, then we would no longer have an active image. If the URL links to a private page like a host site that requires a login to access it, no image will appear. Once you add all desired product images, click Save.</p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-01-11%2Bat%2B2.00.03%2BPM.png" style={{ width: 600 }} />

              <h3>Vendor Products</h3>
              <p>Adding vendor SKUs in Extensiv Order Manager is necessary especially because it will serve as the foundation for your profitability within analytics, although this is not the only way to calculate profitability. Your COGS within Extensiv Order Manager is calculated by either your vendor products or the UI (refer to images). The one thing you cannot do in Extensiv Order Manager without having vendor SKUs is create purchase orders</p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-01-13%2Bat%2B8.00.32%2BPM.png" style={{ width: 600 }} />
              <p>Add your vendor SKUs to your products. Before you can do so, you will need to have inputted vendors in the Settings Tab. Click New Vendor Product.</p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-01-13%2Bat%2B8.01.11%2BPM.png" style={{ width: 600 }} />
              <p>If you order the same product from more than one vendor, make sure to set up multiple Vendor Products and indicate one as the Default Vendor Product by selecting it and clicking the Default button. If you only have one Vendor Product for a Master SKU, it will automatically be set as the Default by Extensiv Order Manager.</p>
              <p style={{ color: 'red' }}>NOTE: Extensiv Order Manager will only generate automatic Purchase Orders for the Default Vendor Product.</p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-01-13%2Bat%2B8.02.48%2BPM.png" style={{ width: 600 }} />
              <table>
                <thead>
                  <tr>
                    <th>Field Name</th>
                    <th>Description</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Vendor</th>
                    <th>Select the vendor that the Vendor SKU is associated to.</th>
                    <th>Vendor123</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </tbody>
              </table>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
