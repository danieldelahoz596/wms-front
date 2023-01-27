import { Card, Row, Col } from 'antd';

export default function () {

  return (
    <>
      <div style={{ margin: '10px' }}>
        <h2>Products {'>'} How to Manage Products</h2>
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

              <p>The <strong>Products</strong> module is split into two main sections: the left panel, where you can organize products by <strong>Label</strong> or <strong>Category</strong>, in addition to searching for them, and the right panel, where you can see your entire product catalog. Click the magnifying glass in the left panel to open the <strong>Search</strong> panel and search for products.</p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503728/products__4_.PNG" style={{ width: 600 }}/>

              <p>When you click into the row for a product, the bottom of the panel of will show product details (custom fields, active listings, vendor products, and images), as well as year-over-year performance and a list of recent orders.</p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503730/products__5_.PNG" style={{ width: 600 }}/>

              <p>Clicking the master SKU for a specific product will open the Basic Info window, which provides additional product details and access to product images (click Gallery to seeproduct images), listing SKUs, vendor products, custom fields, and customs info associated with this product.</p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503732/products__6_.PNG" style={{ width: 600 }}/>

              <p>The row of buttons along the top of the Products module allow you to perform various actions.</p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503733/products__7_.PNG" style={{ width: 600 }}/>
              <ul>
                <li><strong>Products Dropdown:</strong> This dropdown allows you to toggle your view between active and inactive products.</li>
                <li><strong>Adjust SKU:</strong> Allows you to edit the master SKU of a specific product.</li>
                <li><strong>Convert to Bundle/Kit:</strong> Allows you to convert a core product into a bundle or kit. Product variations cannot be converted into bundles or kits and will need to be converted into a core product before being converted into a bundle or kit.</li>
                <li><strong>Convert to Core:</strong> Allows you to convert a product variation into a core product.</li>
                <li><strong>Deactivate:</strong> Deactivates the product and associated inventory.</li>
                <li><strong>Activate:</strong> When an inactive product is selected, the Deactivate button becomes an Activate button, which allows you to activate an inactive product and associated inventory.</li>
                <li><strong>History:</strong> Allows you to see a record of all changes made to a product.</li>
                <li><strong>Import/Export:</strong> Allows you to import products, listing SKUs, vendor products, and SKU adjustments and export products, listing SKUs, and vendor products. You can also create a custom product export and custom bundle/kit export, which allows you to select which fields to include in the export.</li>
              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
