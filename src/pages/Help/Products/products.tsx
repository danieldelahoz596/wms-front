import { Card, Row, Col, Alert, Divider } from 'antd';

export default function () {

  return (
    <>
      {/* Product Creation FAQ */}
      <h2>Orders {'>'} Product Creation FAQ</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Product Creation FAQ</h1>
            <br />
            <p><strong>Q: Which columns are required on each tab?</strong></p>
            <p>On the Core Products tab, Master SKU, Name, Brand and Active columns are required.</p>
            <p>On the Bundles and Kits tab, Master SKU, Name, Brand, X, and Active columns are required. Reminder: you will need a unique Master SKU for the bundle/kit.</p>
            <br />
            <p><strong>Q: What is the difference between a bundle and a kit?</strong></p>
            <p>A bundle is a grouping of multiple of the same product. A kit is a grouping of multiple different products.</p>
            <br />
            <p><strong>Q: Should I add old products to the spreadsheet?</strong></p>
            <p>You should only add old products to Extensiv Order Manager if you plan to sell them again in the future.</p>
            <br />
            <p><strong>Q: Are vendor products required?</strong></p>
            <p>Vendor Products are not required to fulfill orders in Extensiv Order Manager. Vendor Products are required to create Purchase Orders.</p>
            <br />
            <p><strong>Q: Can my Listing SKU and Master SKU be the same?</strong></p>
            <p>Absolutely!</p>
            <br />
            <p><strong>Q: My SKUs on various channels are different. What do I use for the Master SKU in Extensiv Order Manager?</strong></p>
            <p>The Master SKU will be your unique product identifier in Extensiv Order Manager. We recommend using a standard product naming convention. For example if your product is a Medium Red Turtleneck, the master SKU could be TNECK-RED-M. The Listing SKU will be what ties your Extensiv Order Manager Master SKU with the SKUs on your various sales channels.</p>
            <br />
            <p><strong>Q: Do I use the weight and dimensions of the actual product or the individual product once packaged for transit?</strong></p>
            <p>The weight and dimensions of the physical product is best. If you would like to account for packaging weight and dimensions on an order, this can be accomplished via <a href="" className='helplink'>shipping presets</a> or through an <a href="" className='helplink'>orderbot</a>.</p>
            <br />
            <p><strong>Q: Can I update my products in bulk after the initial upload?</strong></p>
            <p>Yes! Once all of your products are uploaded into Extensiv Order Manager, you will have the ability to export the product catalog. You can edit that spreadsheet and upload using the import product spreadsheet to make any changes. Make sure to select "Yes - Update existing products and import new" when importing. <strong>Beware: if you change the Master SKU, you will create new products! If you are changing Master SKUs, please do it outside of the product import spreadsheet.</strong></p>
          </Card>
        </Col>
      </Row>

      <br />
      {/* Creating Bundles/Kits Through the UI */}
      <h2>Orders {'>'} Creating Bundles/Kits Through the UI</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Create Bundles/Kits Through the UI</h1>
            <p>When creating or editing products in Extensiv Order Manager, you can choose between two methods: manual creation in the UI or importing via spreadsheet. Before getting started, ensure you already all parts of the bundle/kit entered into Extensiv Order Manager as core product(s). Once confirmed, follow the steps outlined below to create bundles/kits manually,</p>
            <ol>
              <li>
                <p>Navigate to the <strong>Products</strong> module, & click the <strong>New Product</strong> button.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/var1%2B_2_.png' style={{ width: 1000 }} />
                <br /><br /><br />
              </li>
              <li>
                <p>Click on the <strong>Bundle / Kit</strong> option.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/bundle%2B_1_.png' style={{ width: 300 }} />
                <br /><br /><br />
              </li>
              <li>
                <p>You will then be prompted to search for the existing product(s) that you would like to bundle/kit.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/bundle2.png' style={{ width: 700 }} />
                <br /><br /><br />
                <p>You can search by either the Master SKU or product name. Select at least one product. Once you've identified all of the individual core or variant products you want included in your new bundle, click <strong>Continue</strong>.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/bundle3.png' style={{ width: 700 }} />
                <br /><br /><br />
              </li>
              <li>
                <p>A new window will appear asking for the quantity of each SKU that will make up the bundle/kit. You must specify the quantity for each product using positive integers only. Click <strong>Continue</strong> once you've completed your selections.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/bundle4.png' style={{ width: 400 }} />
                <br /><br /><br />
              </li>
              <li>
                <p>Next, the New Bundle/Kit edit window will open. Your new bundle product will not be created until this window is successfully saved.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/bundle5.png' style={{ width: 600 }} />
                <br /><br /><br />
                <p>Enter the required fields (which are the same for a core product):</p>
                <ul>
                  <li>Master SKU</li>
                  <li>Name</li>
                  <li><p>Brand <br />For information on the Gallery, Listing SKUs, Vendor Products, or Customs tabs, please refer to sections above under <strong>Core Products</strong>.</p></li>
                </ul>
                <br />
              </li>
              <li>
                <p>The <strong>Bundled Items</strong> tab (green box in the image below) shows the products that make up this bundle/kit. You can edit which products are in your bundle and their quantities here.<br />Add another product to the bundle by clicking <strong>Add Core Product</strong>, which will allow you to search for another Master SKU or product name to add to this bundle/kit along with the quantity. Edit the Quantity set for a product listed via the <strong>Edit Quantity</strong> button. Remove a product from this bundle in full via the <strong>Remove</strong> button.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/bundle6.png' style={{ width: 600 }} />
                <br /><br /><br />
              </li>
              <li>
                <p>Click <strong>Save</strong> to create your new Bundle/Kit product.</p>
              </li>
            </ol>
          </Card>
        </Col>
      </Row>
    </>
  );
};
