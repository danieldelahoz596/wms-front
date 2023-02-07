import { Card, Row, Col, Breadcrumb, Alert, Divider } from 'antd';

export default function () {

  return (
    <>
      <Breadcrumb>Products {'>'} How to Manage Products</Breadcrumb>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Manage Products</h1>
            <p>Extensiv Order Manager Products module allows you to manage your product catalog effectively and efficiently. Here, you can:</p>
            <ul>
              <li><span>Build your product catalog by importing a product import spreadsheet</span></li>
              <li>Add new products</li>
              <li>Add or import vendor products</li>
              <li>Adjust master SKUs individually or by importing a SKU adjustment spreadsheet</li>
              <li>Convert core products to bundles/kits</li>
              <li>Deactivate products you are no longer selling</li>
              <li>Export products, listing SKUs, and vendor products</li>
              <li>Track changes made to your products</li>
            </ul>

            <p>The <b>Products</b> module is split into two main sections: the left panel, where you can organize products by <b>Label</b> or <b>Category</b>, in addition to searching for them, and the right panel, where you can see your entire product catalog. Click the magnifying glass in the left panel to open the <b>Search</b> panel and search for products.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503728/products__4_.PNG" style={{ width: 600 }}/>

            <p>When you click into the row for a product, the bottom of the panel of will show product details (custom fields, active listings, vendor products, and images), as well as year-over-year performance and a list of recent orders.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503730/products__5_.PNG" style={{ width: 600 }}/>

            <p>Clicking the master SKU for a specific product will open the Basic Info window, which provides additional product details and access to product images (click Gallery to seeproduct images), listing SKUs, vendor products, custom fields, and customs info associated with this product.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503732/products__6_.PNG" style={{ width: 600 }}/>

            <p>The row of buttons along the top of the Products module allow you to perform various actions.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503733/products__7_.PNG" style={{ width: 600 }}/>
            <ul>
              <li><b>Products Dropdown:</b> This dropdown allows you to toggle your view between active and inactive products.</li>
              <li><b>Adjust SKU:</b> Allows you to edit the master SKU of a specific product.</li>
              <li><b>Convert to Bundle/Kit:</b> Allows you to convert a core product into a bundle or kit. Product variations cannot be converted into bundles or kits and will need to be converted into a core product before being converted into a bundle or kit.</li>
              <li><b>Convert to Core:</b> Allows you to convert a product variation into a core product.</li>
              <li><b>Deactivate:</b> Deactivates the product and associated inventory.</li>
              <li><b>Activate:</b> When an inactive product is selected, the Deactivate button becomes an Activate button, which allows you to activate an inactive product and associated inventory.</li>
              <li><b>History:</b> Allows you to see a record of all changes made to a product.</li>
              <li><b>Import/Export:</b> Allows you to import products, listing SKUs, vendor products, and SKU adjustments and export products, listing SKUs, and vendor products. You can also create a custom product export and custom bundle/kit export, which allows you to select which fields to include in the export.</li>
            </ul>

            {/* Adjusting a Master SKU */}
            <h1>How to Adjust Master SKUs</h1>
            <Alert
              message="Important Note"
              description="Extensiv Order Manager does not recommend you change your Master SKUs, unless it was due to a typo. This is because a majority of data that goes into the Orders, Inventory and Analytics Modules in Extensiv Order Manager are based on the Master SKU. Adjusting a Master SKU changes the Master SKU itself, not the actual product it refers to."
              type="warning"
            />
            <br/>
            <p>After you’ve imported all your products into Extensiv Order Manager, you can go back and edit your Master SKUs at any time.</p>
            <p>You can change the Master SKU for a specific product directly through the UI or in bulk through a spreadsheet.</p>
            <Divider />
            <h1>Adjusting a Master SKU in the Products Module</h1>
            <ol>
              <li>
                <p>Go to the Products Module and click on the name of the Master SKU you would like to change. Then click the <b>“Adjust SKU”</b> button located in the top menu bar.</p>
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502489/inventory.PNG" style={{ width: 600 }}/>
                <br/><br/>
              </li>
              <li>
                <p>A new window will then open where you can input the New Master SKU:</p>
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502491/products.png" style={{ width: 300 }}/>
              </li>
            </ol>
          </Card>
        </Col>
      </Row>
    </>
  );
};
