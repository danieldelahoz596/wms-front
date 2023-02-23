import { Alert, Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>Products {'>'} Create a Core Product through the UI</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Create Products Through the UI</h1>
            <p>
              As Extensiv Order Manager understands your product types, we are able to calculate your inventory quantity, order
              information, analytics, etc. based on their available input.
            </p>
            <p>
              There are three types of products in Extensiv Order Manager: Core Products, Bundles/Kits, and Product Variations.
              When creating or editing products in Extensiv Order Manager, you can choose between two methods: manual creation in
              the UI or{' '}
              <a href="/help/products/creatingproductsviaspreadsheet" className="helplink">
                import via spreadsheet
              </a>
              . To create a core product manually, follow the steps outlined below for the appropriate product type.
            </p>
            <p>
              When creating or editing products in Extensiv Order Manager, you can choose between two methods: manual creation in
              the UI or import via spreadsheet. To create a core product manually, follow the steps outlined below:
            </p>
            <ol>
              <li>
                <p>
                  Navigate to the <b>Products</b> module, & click the <b>New Product</b> button.
                </p>
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-01-11%2Bat%2B1.38.20%2BPM.png"
                  style={{ width: 1000 }}
                />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Select <b>Core Product</b>
                </p>
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-01-11%2Bat%2B1.45.57%2BPM.png"
                  style={{ width: 300 }}
                />
              </li>
            </ol>

            {/* Core Products */}
            <h1>Core Products</h1>
            <p id="difference_product_types">
              A core product is a single unique product that may be added into a{' '}
              <a href="/help/products/createbundlekit" className="helplink">
                bundle or kit
              </a>
              . If the answer to this question:{' '}
              <i>"Does the product I am selling contain an item within it that I order individually from my supplier?"</i> is
              "no", then you have a core product.
            </p>

            <h2>Basic info</h2>
            <p>
              When creating a Core Product, you’ll be taken to an edit window to fill out product info. There are three required
              fields here which must be entered before you can proceed:
            </p>
            <ul>
              <li>Master SKU</li>
              <li>Name</li>
              <li>Brand</li>
            </ul>
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-01-13%2Bat%2B7.57.14%2BPM.png"
              style={{ width: 600 }}
            />
            <br />
            <br />
            <ul>
              <li>You cannot create a Master SKUs that already exists, active or inactive</li>
              <li>
                Dropdown fields with a blue plus sign or gear icon button next to them are fields that can have a new option added
                or edited, respectively.
              </li>
              <li>
                The Special section at the bottom is for organizational purposes only. No special flow will occur if these boxes
                are checked or not, so you can choose to set them with a value or not.
              </li>
            </ul>

            <h3>Overview of all Product Fields:</h3>
            <table className="helpTable">
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
                  <th>Brand</th>
                  <th>Goods identified by name as the product of a supplier or manufacturer</th>
                  <th>A way to categorize and filter products you sell</th>
                </tr>
                <tr>
                  <th>Categories</th>
                  <th>class or division of products having shared characteristics</th>
                  <th>Additional way to categorize and filter products (ex. Hat, Socks, etc)</th>
                </tr>
                <tr>
                  <th>Labels</th>
                  <th>A tag placed on the item</th>
                  <th>
                    Useful for{' '}
                    <a href="" style={{ color: 'red' }}>
                      Orderbot
                    </a>{' '}
                    automation
                  </th>
                </tr>
                <tr>
                  <th>Description</th>
                  <th>Characteristics of Product</th>
                  <th>Additional way to identify specific attributes between similar products</th>
                </tr>
                <tr>
                  <th>Vendor Cost</th>
                  <th>Cost of Goods Sold</th>
                  <th>Used to calculate your COGS for products without a vendor SKU</th>
                </tr>
                <tr>
                  <th>Weight</th>
                  <th>Weight of Each (lb, oz)</th>
                  <th>Used to calculate order Weight</th>
                </tr>
                <tr>
                  <th>H/W/L</th>
                  <th>Height / Width / Length (in)</th>
                  <th>Used to calculate order dimension</th>
                </tr>
              </tbody>
            </table>

            <h2>Gallery</h2>
            <p>
              Copy and paste the image URL into the designated text box and click Add. We can only host live, public URLs. If the
              URL were to become dead, then we would no longer have an active image. If the URL links to a private page like a
              host site that requires a login to access it, no image will appear. Once you add all desired product images, click
              Save.
            </p>
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-01-11%2Bat%2B2.00.03%2BPM.png"
              style={{ width: 500 }}
            />

            <h2>Vendor Products</h2>
            <p>
              Adding vendor SKUs in Extensiv Order Manager is necessary especially because it will serve as the foundation for
              your profitability within analytics, although this is not the only way to calculate profitability. Your COGS within
              Extensiv Order Manager is calculated by either your vendor products or the UI (refer to images). The one thing you
              cannot do in Extensiv Order Manager without having vendor SKUs is create purchase orders
            </p>
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-01-13%2Bat%2B8.00.32%2BPM.png"
              style={{ width: 500 }}
            />
            <p>
              Add your vendor SKUs to your products. Before you can do so, you will need to have inputted vendors in the{' '}
              <b>Settings</b> Tab. Click <b>New Vendor Product.</b>
            </p>
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-01-13%2Bat%2B8.01.11%2BPM.png"
              style={{ width: 600 }}
            />
            <table className="helpTable">
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
                  <th>Vendor SKU</th>
                  <th>
                    Type the vendor SKU assigned to the master SKU. Remember that this SKU will appear on the purchase order
                  </th>
                  <th>VNDR-SKU-123</th>
                </tr>
                <tr>
                  <th>Minimum Order Qty</th>
                  <th>How many units need to be ordered in order to purchase this item from your vendor?</th>
                  <th>You cannot purchase 1 unit of chapstick, a minimum order of 100 is required</th>
                </tr>
                <tr>
                  <th>Lead Time</th>
                  <th>
                    Time it takes from placing a purchase order to when you receive the unit(s) at your destination warehouse
                  </th>
                  <th>10</th>
                </tr>
                <tr>
                  <th>Auto-P.O. Rounding</th>
                  <th>
                    How Extensiv Order Manager should round the number of units for order in an Auto PO calculation.{' '}
                    <b>Round Up</b> will round up to the next Unit of Measure quantity exactly, Round Properly will round to the
                    nearest Unit of Measure quantity, whether that is up or down, and Exact will not round at all.
                  </th>
                  <th>
                    Say you have a product that can be ordered in Cases of 12 units, but Auto PO generates with a requested
                    quantity of 50
                    <p>Round Up: 5 Cases (60 units)</p>
                    <p>Round Properly: 4 Cases (48 units)</p>
                    <p>Exact: 4 Cases + 2 Eaches (50 units)</p>
                  </th>
                </tr>
                <tr>
                  <th>Packaging</th>
                  <th>If your products require special packaging, you can specify that here</th>
                  <th>
                    Bubblewrap <br />
                    Cardboard Carton <br />
                    etc.
                  </th>
                </tr>
                <tr>
                  <th>Pricing Tiers</th>
                  <th>
                    As you purchase higher volumes of product, the vendor may provide you with better rates.
                    <br />
                    If a customer does not have pricing tiers, then simply add an arbitrarily high range (ex. 1 - 100,000 = 5.00)
                  </th>
                  <th>
                    001 - 099 = $5.00 / unit <br />
                    100 - 999 = $4.50 / unit <br />
                    etc.
                  </th>
                </tr>
                <tr>
                  <th>Units of Measure (optional)</th>
                  <th>
                    Only needed if your vendor allows you to order product in a UoM other than units/eaches, such as cases,
                    cartons, pallets, etc.
                  </th>
                  <th>
                    Case = Qty 12 <br />
                    Carton = Qty 60 <br />
                    etc.
                  </th>
                </tr>
              </tbody>
            </table>
            <p>
              If you order the same product from more than one vendor, make sure to set up multiple Vendor Products and indicate
              one as the Default Vendor Product by selecting it and clicking the <b>Default</b> button. If you only have one
              Vendor Product for a Master SKU, it will automatically be set as the Default by Extensiv Order Manager.
            </p>
            <Alert
              message="Note"
              description="Extensiv Order Manager will only generate automatic Purchase Orders for the Default Vendor Product."
            />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/product9%2B_1_.png"
              style={{ width: 500 }}
            />

            <h2>Fields</h2>
            <p>
              This feature allows you to add custom fields that are not in the Extensiv Order Manager Platform. Some examples of
              these could be "Fragile", "Wholesale Cost", etc. To add a new Custom field, go to <b>Configure Field Types.</b>
            </p>
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PIC4332.png"
              style={{ width: 500 }}
            />
            <p>
              Then select New Field Type to enter a new custom field. You may also select the checkbox to indicate if you want to
              field to be required.
            </p>
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PIC6521.png"
              style={{ width: 500 }}
            />
            <br />
            <br />
          </Card>
        </Col>
      </Row>
    </>
  );
}
