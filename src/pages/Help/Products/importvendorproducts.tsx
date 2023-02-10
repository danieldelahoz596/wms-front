import { Alert, Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>Products {'>'} Import Vendor Products</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Import Vendor Products</h1>
            <p>
              Extensiv Order Manager allows you to import vendor products for each vendor or all
              vendors at once.
            </p>
            <p>
              Before you can import your vendor products into Extensiv Order Manager, you will need
              to enter your vendor product info in the Product Vendor SKUs Microsoft Excel template.
            </p>
            <p>
              If you will be importing products for all of your existing vendors, you will need to
              enter the required information into the Product Vendor SKUs Global Microsoft Excel
              template.
            </p>
            <Alert
              message="Note"
              description={
                <p>
                  You need to define your vendors first before you can import your vendor products
                  into Extensiv Order Manager. For more details on how to do this, see{' '}
                  <a href="/help/settings/vendors" className="helplink">
                    Vendor Setup.
                  </a>
                </p>
              }
            />

            <p>
              Setting up vendor products is a necessary step to utilize the Purchase Orders and
              Analytics modules within Extensiv Order Manager. Vendor SKUs establish a cost per SKU,
              which forms the foundation of profitability reporting within Analytics. Cost of Goods
              Sold (COGS) within Extensiv Order Manager is ultimately calculated by the landed cost
              of a product on a purchase order, which starts as the cost of a Vendor SKU.
            </p>
            <p>
              Like Listing SKUs are to Master SKUs for customer orders, Vendor SKUs serve as the
              bridge between a Master SKU to a supplier for reordering inventory. Products sourced
              from multiple vendors, there can be a different Vendor SKU value for each vendor, but
              there needs to be a Vendor Product in order to create a Purchase Order from a given
              vendor.
            </p>
            <Alert
              message="Note"
              description={
                <p>
                  When using the build by spreadsheet method, be careful and take time to review all
                  entries, because the{' '}
                  <strong>
                    Extensiv Order Manager system cannot delete products or information after it has
                    been imported or brought into the system.
                  </strong>{' '}
                  Extensiv Order Manager can deactivate or edit product information including the
                  vendor products.{' '}
                  <strong>
                    We highly suggest that you first export out your current product catalog before
                    making bulk edits.
                  </strong>
                </p>
              }
            />
            <br />
            <p>
              When creating or editing products in Extensiv Order Manager, you can choose between
              two methods: manual creation in the UI or import via spreadsheet. To create vendor
              products in bulk, follow the steps outlined below:
            </p>
            <ol>
              <li>
                <p>
                  Go to the <strong>Products</strong> Module.
                </p>
              </li>
              <li>
                <p>
                  Click on the <strong>Import/Export</strong> button and select{' '}
                  <strong>Import Vendor Products</strong>.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/vendor%2B_1_.png"
                  style={{ width: 800 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Extensiv Order Manager gives you an option between uploading an individual file
                  for each vendor, or by importing one global file that contains vendor products for
                  any/all vendors at once that will require you to specify which vendor a vendor
                  product is for.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/vendor1%2B_2_.PNG"
                  style={{ width: 400 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  The window that pops up will allow you to download the required Excel template to
                  import the Vendors. Click the link to <strong>Download the Excel Template</strong>
                  .<br />
                  <i>Import By Vendor</i>
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/vendor2%2B_1_.png"
                  style={{ width: 600 }}
                />
                <br />
                <br />
                <br />
                <i>Global Vendor Import</i>
                <br />
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/vendor3%2B_3_.png"
                  style={{ width: 600 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  The required columns for the Excel sheet are similar to the required fields in the
                  UI creation method. Regardless of which method you chose, the same columns are
                  required with one exception - the "Vendor Name" column is required for the Global
                  Vendor Template, while the single vendor import option does not have this column
                  and it is therefore not required.
                  <br />
                  <i>By Vendor Template</i>
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/ByVendorTemplate%2B_1_.PNG"
                  style={{ width: 1000 }}
                />
                <br />
                <br />
                <br />
                <i>Global Vendor Template</i>
                <br />
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/globaltemplate%2B_1_.PNG"
                  style={{ width: 1000 }}
                />
                <br />
                <br />
                <br />
                <p>
                  <strong>
                    All columns are required except for the columns for ACTIVE, Units of Measure, Is
                    Default, & Packaging.
                  </strong>
                  <br />
                  The file will error out when attempting to upload if there are any blanks in the
                  required columns.{' '}
                  <strong>
                    Do not delete or add columns or sheets or attempt to edit the sheet in any way
                    whatsoever outside of adding/typing in data in Row 2 and higher row numbers. Pay
                    close attention to the required format of each column described below.
                  </strong>{' '}
                  Examples are provided in the default example rows that come with each spreadsheet
                  download. The content of these rows can be deleted once you no longer need them
                  for reference, otherwise, they will be attempted to create as real vendor products
                  upon upload.
                </p>
                <ul>
                  <li>
                    <p>
                      <strong>Vendor Name (only in the Global Vendor Template)–</strong>Select the
                      vendor that the Vendor SKU is associated with. The list of Vendors you can
                      choose from here is pulled from the Settings Module, Vendors tab.{' '}
                      <strong>ex: Sweater Weather</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Master SKU–</strong>The existing Master SKU in Extensiv Order Manager
                      that you want to create this vendor product for. If the Master SKU does not
                      already exist, you will receive an error upon import stating:{' '}
                      <i>
                        SKU not processed at row # :: Product not found for Master SKU 'exampleSKU'.
                      </i>{' '}
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Vendor SKU –</strong> How the product ordered is identified by the
                      supplier. These values should be pre-established with the vendor. Remember
                      that this SKU will appear on a purchase order.{' '}
                      <strong>ex: greenwoolsweaterlarge</strong>
                    </p>
                    <Alert
                      message="Note"
                      description={
                        <p>
                          The same Vendor SKU <strong>cannot</strong> be repeated under the same
                          vendor. You can, however, use the same Vendor SKU for different vendors.
                          An error will result if you attempt to reuse an existing Vendor SKU under
                          the same vendor, even if it's inactive:{' '}
                          <i>Vendor SKU 'X' belongs to Master SKU exampleSKU</i>.
                        </p>
                      }
                    />
                    <br />
                  </li>
                  <li>
                    <p>
                      <strong>Active–</strong> Indicates whether your vendor product will be created
                      in an active or inactive status. Set this to <strong>TRUE</strong> to allow
                      Extensiv Order Manager to calculate/create purchase orders for this product,
                      otherwise, set this to <strong>FALSE</strong>. You can always activate an
                      inactive vendor product in the future.
                    </p>
                    <Alert
                      message="Note"
                      description={
                        <p>
                          If you leave this column blank, Extensiv Order Manager will use the
                          default entry: FALSE. Extensiv Order Manager can create the vendor product
                          without a value in this column but the vendor product that is created will
                          be inactive as a result.
                        </p>
                      }
                    />
                    <br />
                  </li>
                  <li>
                    <p>
                      <strong>Minimum Order Qty –</strong> The fewest amount of whole units that can
                      be purchased from the vendor to qualify for reorder. <strong>ex: 100</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Lead Time –</strong> The typical amount of time in calendar days it
                      takes for the vendor to deliver the product to your warehouse once the
                      purchase order has been authorized by your team. <strong>ex: 20</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Pricing Tiers – Take extra care with the formatting here.</strong>{' '}
                      You'll need to set up at least one pricing tier. If your vendor sells you
                      stock at a flat rate regardless of how many units you order, simply set only
                      one pricing tier in a single set of parentheses. However, if the vendor
                      provides you with multiple pricing tiers depending on how many units you
                      order, create additional pricing tiers accordingly. The base pricing tier will
                      serve as the default source of{' '}
                      <a href="" className="helplink">
                        Inventory Value for your analytics
                      </a>
                      . <strong>Pricing tiers must start at 1.</strong> ex: Pricing Tier for a
                      vendor who sells their product at a flat rate of $5/unit:{' '}
                      <strong>(1-10000|5.00)</strong> ex: Pricing Tier for a vendor who sells their
                      product at $5/unit until you purchase over 300 units, which they then sell at
                      $4/unit: <strong>(1-300|5.00)(301-10000|4.00)</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Units of Measure–</strong> If your vendor sells to you in any specific
                      quantities, then list them here. These UoM are incorporated into Auto PO
                      calculations according to the option you selected as your Auto-P.O. Rounding
                      choice. ex: dozen = 12 units. An Auto PO can determine that you should order
                      50 units from your vendor, and when Rounded Properly, the Auto PO will
                      determine you should order 4 dozens, since 50 units rounded properly rounds
                      down to 48 units. This column can be left blank for vendors that ship
                      individual units. For vendors with multiple UoM, indicate the measure with the
                      units in brackets and do not separate the measurements with any additional
                      characters (don't add spacing or commas).{' '}
                      <strong>
                        ex: Box{`{4}`}Crate{`{2}`}
                      </strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Is Default –</strong> If you only have one Vendor Product for a Master
                      SKU, Extensiv Order Manager will automatically set it as the Default Vendor
                      Product when you import it. The Default Vendor Product is indicated by a
                      checkmark icon next to the vendor name in the UI. You can only have one
                      Default Vendor Product, so make sure that only one is indicated per Master
                      SKU. ex: <strong>TRUE</strong> or <strong>FALSE</strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Auto-P.O. Rounding–</strong> This column requires one of three input
                      options detailed below. For more details on Auto-P.O. Rounding, see the blurb
                      on <strong>Units of Measure</strong> above.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>EXACT –</strong> Will direct an Auto PO to order the exact number of
                      units calculated from Reorder Rules.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>ROUND UP –</strong> Rounds up to the nearest Unit of Measure -- ex: if
                      the UOM is a case consisting of 50 units and 53 units need to be ordered,
                      Extensiv Order Manager orders 2 cases for a total of 100 units.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>ROUND PROPERLY –</strong> Rounds up or down to the nearest UoM
                      depending on how close the exact quantity is. With{' '}
                      <strong>ROUND PROPERLY</strong>, if the UoM is a case of 50 units and 53 units
                      need to be ordered, Extensiv Order Manager will order 1 case for 50 units
                      (rounded down). If 75 units need to be ordered, Extensiv Order Manager will
                      round up to order 2 cases for a total of 100 units (rounded up).
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Packaging –</strong> If your products require special packaging, you
                      can specify that here. <strong>ex: plastic</strong> or{' '}
                      <strong>cardboard box</strong>.
                    </p>
                  </li>
                </ul>
                <br />
              </li>
              <li>
                <p>Once your spreadsheet is completed, save your edits.</p>
              </li>
              <li>
                <p>
                  Return to Extensiv Order Manager's Vendor Product Import window and select the
                  Vendor you are uploading vendor products for from the Vendor dropdown menu. Only
                  active vendors will be shown in this menu. Skip this step if you selected "Import
                  All At Once" in Step 3.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/vendor4%2B_2_.png"
                  style={{ width: 600 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Select the Excel File you are uploading by choosing the <strong>Select</strong>{' '}
                  button. Then decide how Extensiv Order Manager should read the file by clicking
                  the <strong>Update existing SKUs if changes found in the Excel file?</strong>{' '}
                  dropdown menu.
                </p>
                <ol type="a">
                  <li>
                    <p>
                      Choosing “Yes” will make all relevant updates to existing SKUs and add the new
                      Vendor SKUs included. This is ideal if you are changing the current set-up for
                      existing Vendor SKUs.
                    </p>
                  </li>
                  <li>
                    <p>
                      Choosing “No” will only upload new Vendor SKUs and ignore changes made to any
                      existing SKUs. This is ideal if you are only creating new SKUs with your
                      import.
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <p>
                  Click <strong>Continue</strong>.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/vendor5%2B_1_.png"
                  style={{ width: 600 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Extensiv Order Manager will read the file and report how many new Vendor SKUs were
                  created, existing SKUs updated, and how many errors were processed in the Excel
                  File. Errors in the file will be captured in the Error Log. A summary of the
                  results can also be e-mailed so you can fully see which rows had which errors. At
                  this point, any button you select will close the Summary window.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/vendor6.PNG"
                  style={{ width: 600 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  If desired, you can search the Products Module for a vendor product you created or
                  updated to ensure your inputs were applied as anticipated.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/vendor7.PNG"
                  style={{ width: 400 }}
                />
                <br />
                <br />
                <br />
              </li>
            </ol>
          </Card>
        </Col>
      </Row>
    </>
  );
}
