import { Alert, Card, Col, Divider, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>Products {'>'} Custom Product Fields</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Create Custom Product Fields</h1>
            <h1>Overview</h1>
            <p>
              Custom Product Fields are found in a tab in the Products Configuration Window. This is not something that Extensiv
              Order Manager uses internally, it exists only for users who want to add an extra piece of data about their products
              that Extensiv Order Manager does not natively have a field for. These fields are completely customizable.
            </p>
            <p>
              This feature behaves similarly to the{' '}
              <a href="" className="helplink">
                Custom Fields feature in the Orders Module
              </a>
              , but for Products.
            </p>
            <Divider />
            {/* Set-Up in the UI */}
            <h1>Set-Up in the UI</h1>
            <ol>
              <li>
                <p>
                  Go to the Products Module ➜ Click on the Master SKU, then click on the <b>Fields</b> tab
                </p>
                <Alert
                  message="Note"
                  description="This table is going to be empty the first time. And everything you add here is going to be accessible across all products."
                />
                <br />
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-14%2Bat%2B9.53.58%2BAM.png"
                  style={{ width: 1000 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  You can both Configure new/existing Field Types, as well as set custom field values for your product.
                  <br />
                  To <b>Configure</b>, Create, or Deactivate a Field Type, click the <b>Configure Field Types</b> button seen
                  below. Make your edits, then click the <b>Save</b> button.
                  <br />
                  <b>Ex:</b> <i>Fragile, Contains Liquid, Flammable, etc.</i>
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-19%2Bat%2B11.21.56%2BAM.png"
                  style={{ width: 1000 }}
                />
                <br />
                <br />
                <p>
                  If you mark the field as <b>"Required"</b>, then any product you add this field to must have a value. Otherwise,
                  you won’t be able to save the product (see error example below)
                </p>
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-19%2Bat%2B11.32.04%2BAM.png"
                  style={{ width: 1000 }}
                />
                <br />
                <br />
                <p>
                  If you mark the field as <b>"Show On Grid"</b>, then the Field Type will populate as a column in the Products
                  Module grid. You will be able to sort by that column's values just like any other column.
                </p>
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-19%2Bat%2B11.33.20%2BAM.png"
                  style={{ width: 1000 }}
                />
                <br />
                <br />
                <Alert
                  message="Note"
                  description="When you deactivate a field and save, that doesn’t remove it from all the products that already use it. This only prevents it from being added to another product."
                />
                <br />
                <br />
              </li>
              <li>
                <p>
                  After Step 2, you should see your active Field Types as options in the <b>Add Field</b> dropdown menu. To use
                  them, select an option from the dropdown menu, then set the input in the <b>Value</b> column. You can only add
                  the field type once, you cannot have two of the same field types set for one product. Make sure that any Field
                  Types that are set to "Required" have a Value, then click <b>Save</b>.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-19%2Bat%2B11.42.38%2BAM.png"
                  style={{ width: 1000 }}
                />
                <br />
                <br />
                <br />
                <Alert
                  message="Note"
                  description="You can see a quick view of the Fields and Values set for a Master SKU in the lower-right corner section under the Fields tab."
                />
                <br />
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-19%2Bat%2B11.13.11%2BAM.png"
                  style={{ width: 1000 }}
                />
                <br />
                <br />
              </li>
            </ol>
            <Divider />
            {/* Import / Export Functionality */}
            <h1>Import / Export Functionality</h1>
            <p>Custom product fields can be exported as part of the 3 existing export methods in the Products module:</p>
            <ul>
              <li>Export products</li>
              <li>Custom Product Export</li>
              <li>Custom Bundle / Kit Export</li>
            </ul>
            <br />
            {/* Export Products */}
            <h1>Export Products</h1>
            <p>
              Custom fields that are <b>active</b> will be exported by default, regardless of whether Show on Grid is checked. If
              a field is inactive, it won’t be included in this export. No need to configure anything here.
            </p>
            <br />
            {/* Custom Bundle / Kit Export */}
            <h1>Custom Bundle / Kit Export</h1>
            <p>
              This works exactly the same way as the <b>custom product export</b>, except with the caveat that custom fields will
              be exported on a <i>per bundled product</i> basis – meaning that only the custom fields of the individual bundled
              items will be exported, <i>not</i> the custom fields of the bundle itself.
            </p>
            <p>
              <b>
                In order to export custom fields for the bundle itself, the user must also select “Bundle [Custom Field Name]”
                from the dropdown
              </b>
              . When exported, this value will be the same for all bundled item rows within a given bundle.
            </p>
            <br />
            {/* Import Custom Fields */}
            <h1>Import Custom Fields</h1>
            <ol>
              <li>
                <p>
                  Custom fields can be imported through a new UI option in the “Import/Export” dropdown in the Products module:
                </p>
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-14%2Bat%2B2.13.44%2BPM.png"
                  style={{ width: 600 }}
                />
                <br />
                <br />
              </li>
              <li>
                <p>
                  From here, you should see a screen prompting you to upload a file for import. This file must be in Excel format.
                  You can download a template file from the link provided on the screen.
                </p>
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-14%2Bat%2B2.07.39%2BPM.png"
                  style={{ width: 1000 }}
                />
                <br />
                <br />
                <p>The upload file has 3 columns:</p>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <b>Master SKU</b>
                      </td>
                      <td>The SKU of the product that you want to add this custom field to</td>
                      <td>Required</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Custom Field Name</b>
                      </td>
                      <td>The custom field name</td>
                      <td>Required</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Custom Field Value</b>
                      </td>
                      <td>The custom field value.</td>
                      <td>Required</td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <p>The import file looks like this as the default:</p>
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-19%2Bat%2B11.47.08%2BAM.png"
                  style={{ width: 1000 }}
                />
                <br />
                <br />
                <p>
                  The above spreadsheet's values would populate as shown below using the default values and formatting alone for a
                  single Master SKU. Cell C2 uses the "General" format, and Cell C3 uses the "Custom" format.
                </p>
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-19%2Bat%2B11.13.11%2BAM%2B_1_.png"
                  style={{ width: 1000 }}
                />
                <br />
                <br />
                <Alert
                  message="Note"
                  description="Formatting such as dates, capitalization, etc. depends on the Cell Type/Format in Excel. If upon import, your Custom Field Values do not populate exactly as expected, check the format of the cells in Column C. General formatting will affect the imported value differently than 'Text' or specified Date formatting."
                />
                <br />
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-19%2Bat%2B11.19.18%2BAM.png"
                  style={{ width: 400 }}
                />
              </li>
              <li>
                <p>
                  Fill out the Excel spreadsheet with the data you want to import in bulk.{' '}
                  <i>
                    For a quick reference of your Master SKUs, use the Import/Export button in the Products Module to Export
                    Products.
                  </i>
                </p>
                <p>
                  <b>Save</b> your edits, then go back to the Extensiv Order Manager screen you left off in Step 2.
                </p>
              </li>
              <li>
                <p>
                  Select the file to import, then click <b>Continue</b>. Your spreadsheet will import and produce an Error Log.
                  Check for any issues with the import and fix them if there are any.
                </p>
              </li>
            </ol>
            <Divider />
            {/* Searching by Custom Fields */}
            <h1>Searching by Custom Fields</h1>
            <p>
              You can search your products by Custom Field Types and their Custom Field Values. Just open up the Search function
              (magnifying glass icon) and enter both the <b>Type</b> and <b>Value</b>, then click <b>Search</b>.
            </p>
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-19%2Bat%2B11.59.54%2BAM.png"
              style={{ width: 400 }}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
