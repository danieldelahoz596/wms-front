import { Alert, Card, Col, Divider, Row } from 'antd';

export default function () {
  return (
    <>
      {/* Product Creation FAQ */}
      <h2>Products {'>'} Product Creation FAQ</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Product Creation FAQ</h1>
            <br />
            <p>
              <strong>Q: Which columns are required on each tab?</strong>
            </p>
            <p>
              On the Core Products tab, Master SKU, Name, Brand and Active columns are required.
            </p>
            <p>
              On the Bundles and Kits tab, Master SKU, Name, Brand, X, and Active columns are
              required. Reminder: you will need a unique Master SKU for the bundle/kit.
            </p>
            <br />
            <p>
              <strong>Q: What is the difference between a bundle and a kit?</strong>
            </p>
            <p>
              A bundle is a grouping of multiple of the same product. A kit is a grouping of
              multiple different products.
            </p>
            <br />
            <p>
              <strong>Q: Should I add old products to the spreadsheet?</strong>
            </p>
            <p>
              You should only add old products to Extensiv Order Manager if you plan to sell them
              again in the future.
            </p>
            <br />
            <p>
              <strong>Q: Are vendor products required?</strong>
            </p>
            <p>
              Vendor Products are not required to fulfill orders in Extensiv Order Manager. Vendor
              Products are required to create Purchase Orders.
            </p>
            <br />
            <p>
              <strong>Q: Can my Listing SKU and Master SKU be the same?</strong>
            </p>
            <p>Absolutely!</p>
            <br />
            <p>
              <strong>
                Q: My SKUs on various channels are different. What do I use for the Master SKU in
                Extensiv Order Manager?
              </strong>
            </p>
            <p>
              The Master SKU will be your unique product identifier in Extensiv Order Manager. We
              recommend using a standard product naming convention. For example if your product is a
              Medium Red Turtleneck, the master SKU could be TNECK-RED-M. The Listing SKU will be
              what ties your Extensiv Order Manager Master SKU with the SKUs on your various sales
              channels.
            </p>
            <br />
            <p>
              <strong>
                Q: Do I use the weight and dimensions of the actual product or the individual
                product once packaged for transit?
              </strong>
            </p>
            <p>
              The weight and dimensions of the physical product is best. If you would like to
              account for packaging weight and dimensions on an order, this can be accomplished via{' '}
              <a href="" className="helplink">
                shipping presets
              </a>{' '}
              or through an{' '}
              <a href="" className="helplink">
                orderbot
              </a>
              .
            </p>
            <br />
            <p>
              <strong>Q: Can I update my products in bulk after the initial upload?</strong>
            </p>
            <p>
              Yes! Once all of your products are uploaded into Extensiv Order Manager, you will have
              the ability to export the product catalog. You can edit that spreadsheet and upload
              using the import product spreadsheet to make any changes. Make sure to select "Yes -
              Update existing products and import new" when importing.{' '}
              <strong>
                Beware: if you change the Master SKU, you will create new products! If you are
                changing Master SKUs, please do it outside of the product import spreadsheet.
              </strong>
            </p>
          </Card>
        </Col>
      </Row>

      <br />
      {/* Creating Bundles/Kits Through the UI */}
      <h2>Products {'>'} Creating Bundles/Kits Through the UI</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Create Bundles/Kits Through the UI</h1>
            <p>
              When creating or editing products in Extensiv Order Manager, you can choose between
              two methods: manual creation in the UI or importing via spreadsheet. Before getting
              started, ensure you already all parts of the bundle/kit entered into Extensiv Order
              Manager as core product(s). Once confirmed, follow the steps outlined below to create
              bundles/kits manually,
            </p>
            <ol>
              <li>
                <p>
                  Navigate to the <strong>Products</strong> module, & click the{' '}
                  <strong>New Product</strong> button.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/var1%2B_2_.png"
                  style={{ width: 1000 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Click on the <strong>Bundle / Kit</strong> option.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/bundle%2B_1_.png"
                  style={{ width: 300 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  You will then be prompted to search for the existing product(s) that you would
                  like to bundle/kit.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/bundle2.png"
                  style={{ width: 700 }}
                />
                <br />
                <br />
                <br />
                <p>
                  You can search by either the Master SKU or product name. Select at least one
                  product. Once you've identified all of the individual core or variant products you
                  want included in your new bundle, click <strong>Continue</strong>.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/bundle3.png"
                  style={{ width: 700 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  A new window will appear asking for the quantity of each SKU that will make up the
                  bundle/kit. You must specify the quantity for each product using positive integers
                  only. Click <strong>Continue</strong> once you've completed your selections.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/bundle4.png"
                  style={{ width: 400 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Next, the New Bundle/Kit edit window will open. Your new bundle product will not
                  be created until this window is successfully saved.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/bundle5.png"
                  style={{ width: 600 }}
                />
                <br />
                <br />
                <br />
                <p>Enter the required fields (which are the same for a core product):</p>
                <ul>
                  <li>Master SKU</li>
                  <li>Name</li>
                  <li>
                    <p>
                      Brand <br />
                      For information on the Gallery, Listing SKUs, Vendor Products, or Customs
                      tabs, please refer to sections above under <strong>Core Products</strong>.
                    </p>
                  </li>
                </ul>
                <br />
              </li>
              <li>
                <p>
                  The <strong>Bundled Items</strong> tab (green box in the image below) shows the
                  products that make up this bundle/kit. You can edit which products are in your
                  bundle and their quantities here.
                  <br />
                  Add another product to the bundle by clicking <strong>Add Core Product</strong>,
                  which will allow you to search for another Master SKU or product name to add to
                  this bundle/kit along with the quantity. Edit the Quantity set for a product
                  listed via the <strong>Edit Quantity</strong> button. Remove a product from this
                  bundle in full via the <strong>Remove</strong> button.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/bundle6.png"
                  style={{ width: 600 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Click <strong>Save</strong> to create your new Bundle/Kit product.
                </p>
              </li>
            </ol>
          </Card>
        </Col>
      </Row>

      <br />
      {/* Custom Product Fields */}
      <h2>Products {'>'} Custom Product Fields</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Overview</h1>
            <p>
              Custom Product Fields are found in a tab in the Products Configuration Window. This is
              not something that Extensiv Order Manager uses internally, it exists only for users
              who want to add an extra piece of data about their products that Extensiv Order
              Manager does not natively have a field for. These fields are completely customizable.
            </p>
            <p>
              This feature behaves similarly to the{' '}
              <a
                href="https://help.extensiv.com/om-orders/custom-fields-for-orders-custom-columns"
                className="helplink"
              >
                Custom Fields feature in the Orders Module
              </a>
              , but for Products.
            </p>
            <Divider />
            <h1>Set-Up in the UI</h1>
            <ol>
              <li>
                <p>
                  Go to the Products Module ➜ Click on the Master SKU, then click on the{' '}
                  <strong>Fields</strong> tab.
                </p>
                <Alert
                  message="Note"
                  description={
                    <p>
                      This table is going to be empty the first time. And{' '}
                      <strong>
                        everything you add here is going to be accessible across all products
                      </strong>
                      .
                    </p>
                  }
                />
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-14%2Bat%2B9.53.58%2BAM.png"
                  style={{ width: 900 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  You can both <strong>Configure</strong> new/existing Field Types, as well as set
                  custom field values for your product.
                  <br />
                  To Configure, Create, or Deactivate a Field Type, click the{' '}
                  <strong>Configure Field Types</strong> button seen below. Make your edits, then
                  click the <strong>Save</strong> button.
                  <br />
                  <strong>Ex:</strong> <i>Fragile, Contains Liquid, Flammable,</i> etc.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-19%2Bat%2B11.21.56%2BAM.png"
                  style={{ width: 900 }}
                />
                <br />
                <br />
                <br />
                <p>
                  If you mark the field as <strong>"Required"</strong>, then any product you add
                  this field to must have a value. Otherwise, you won’t be able to save the product
                  (see error example below)
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-19%2Bat%2B11.32.04%2BAM.png"
                  style={{ width: 900 }}
                />
                <br />
                <br />
                <br />
                <p>
                  If you mark the field as <strong>"Show On Grid"</strong>, then the Field Type will
                  populate as a column in the Products Module grid. You will be able to sort by that
                  column's values just like any other column.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-19%2Bat%2B11.33.20%2BAM.png"
                  style={{ width: 900 }}
                />
                <br />
                <br />
                <br />
                <Alert
                  message="Note"
                  description={
                    <p>
                      When you deactivate a field and save, that doesn’t remove it from all the
                      products that already use it. This only prevents it from being added to
                      another product.
                    </p>
                  }
                />
                <br />
              </li>
              <li>
                <p>
                  After Step 2, you should see your active Field Types as options in the{' '}
                  <strong>Add Field</strong> dropdown menu. To use them, select an option from the
                  dropdown menu, then set the input in the <strong>Value</strong> column. You can
                  only add the field type once, you cannot have two of the same field types set for
                  one product. Make sure that any Field Types that are set to "Required" have a
                  Value, then click <strong>Save</strong>.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-19%2Bat%2B11.42.38%2BAM.png"
                  style={{ width: 900 }}
                />
                <br />
                <br />
                <br />
                <Alert
                  message="Note"
                  description={
                    <p>
                      You can see a quick view of the Fields and Values set for a Master SKU in the
                      lower-right corner section under the Fields tab.
                    </p>
                  }
                />
                <br />
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-19%2Bat%2B11.13.11%2BAM.png"
                  style={{ width: 900 }}
                />
                <br />
                <br />
                <br />
              </li>
            </ol>
            <Divider />
            <h1>Import / Export Functionality</h1>
            <p>
              Custom product fields can be exported as part of the 3 existing export methods in the
              Products module:
            </p>
            <ul>
              <li>
                <p>Export products</p>
              </li>
              <li>
                <p>Custom Product Export</p>
              </li>
              <li>
                <p>Custom Bundle / Kit Export</p>
              </li>
            </ul>
            <h1>Export Products</h1>
            <p>
              Custom fields that are <strong>active</strong> will be exported by default, regardless
              of whether <i>Show on Grid</i> is checked. If a field is inactive, it won’t be
              included in this export. No need to configure anything here.
            </p>
            <h1>Custom Product Export</h1>
            <p>
              The user can add custom fields to their custom product export just like adding any
              other field to the custom export. Custom fields will only show up in the field list if
              they are active, but if a user adds a custom field to their export settings and then
              deactivates the field, it will still show up in their custom export – they will have
              to manually remove it from their export settings to remove it from the export.
            </p>
            <h1>Custom Bundle / Kit Export</h1>
            <p>
              This works exactly the same way as the <strong>custom product export</strong>, except
              with the caveat that custom fields will be exported on a <i>per bundled</i> product
              basis – meaning that only the custom fields of the individual bundled items will be
              exported, not the custom fields of the bundle itself.
            </p>
            <p>
              <strong>
                In order to export custom fields for the bundle itself, the user must also select
                “Bundle [Custom Field Name]” from the dropdown.
              </strong>
              <br /> When exported, this value will be the same for all bundled item rows within a
              given bundle.
            </p>
            <h1>Import Custom Fields</h1>
            <ol>
              <li>
                <p>
                  Custom fields can be imported through a new UI option in the “Import/Export”
                  dropdown in the Products module:
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-14%2Bat%2B2.13.44%2BPM.png"
                  style={{ width: 700 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  From here, you should see a screen prompting you to upload a file for import.{' '}
                  <strong>This file must be in Excel format</strong>. You can download a template
                  file from the link provided on the screen.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-14%2Bat%2B2.07.39%2BPM.png"
                  style={{ width: 900 }}
                />
                <br />
                <br />
                <br />
                <p>The upload file has 3 columns:</p>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Master SKU</strong>
                      </td>
                      <td>The SKU of the product that you want to add this custom field to</td>
                      <td>Required</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Custom Field Name</strong>
                      </td>
                      <td>The custom field name</td>
                      <td>Required</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Custom Field Value</strong>
                      </td>
                      <td>The custom field value.</td>
                      <td>Required</td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <p>The import file looks like this as the default:</p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-19%2Bat%2B11.47.08%2BAM.png"
                  style={{ width: 900 }}
                />
                <br />
                <br />
                <br />
                <p>
                  The above spreadsheet's values would populate as shown below using the default
                  values and formatting alone for a single Master SKU. Cell C2 uses the "General"
                  format, and Cell C3 uses the "Custom" format.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-19%2Bat%2B11.13.11%2BAM%2B_1_.png"
                  style={{ width: 1000 }}
                />
                <br />
                <br />
                <br />
                <Alert
                  message="Note"
                  description={
                    <p>
                      Formatting such as dates, capitalization, etc. depends on the Cell Type/Format
                      in Excel. If upon import, your Custom Field Values do not populate exactly as
                      expected, check the format of the cells in Column C. General formatting will
                      affect the imported value differently than "Text" or specified Date
                      formatting.
                    </p>
                  }
                />
                <br />
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-19%2Bat%2B11.19.18%2BAM.png"
                  style={{ width: 400 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Fill out the Excel spreadsheet with the data you want to import in bulk.{' '}
                  <i>
                    For a quick reference of your Master SKUs, use the Import/Export button in the
                    Products Module to Export Products.
                  </i>
                </p>
                <p>
                  <strong>Save</strong> your edits, then go back to the Extensiv Order Manager
                  screen you left off in Step 2.
                </p>
              </li>
              <li>
                <p>
                  Select the file to import, then click <strong>Continue</strong>. Your spreadsheet
                  will import and produce an Error Log. Check for any issues with the import and fix
                  them if there are any.
                </p>
              </li>
            </ol>
            <Divider />
            <h1>Searching by Custom Fields</h1>
            <p>
              You can search your products by Custom Field Types and their Custom Field Values. Just
              open up the Search function (magnifying glass icon) and enter both the{' '}
              <strong>Type</strong> and <strong>Value</strong>, then click <strong>Search</strong>.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-19%2Bat%2B11.59.54%2BAM.png"
              style={{ width: 300 }}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
