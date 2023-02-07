import { Card, Col, Row } from 'antd';

export default function () {

  return (
    <>
      <h2>Products {'>'} Export Custom Bundle/Kit</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Export Custom Bundle/Kit</h1>
            <p>In order to get a data report of all your bundles and respective components broken down into a multi-line file, as opposed to the standard product export file, you will need to leverage the Custom Bundle/Kit Export.</p>
            <ol>
              <li>
                <p>Go into Products and “Click Import/Export”.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/bundle%2B_2_.png' style={{ width: 900 }} />
                <br /><br /><br />
              </li>
              <li>
                <p>Click “Custom Bundle/Kit Export”.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/bundle2%2B_1_.png' style={{ width: 900 }} />
                <br /><br /><br />
              </li>
              <li>
                <p>From here, you can either skip to Step 5 if you have already configured your export settings, or if you haven’t configured them yet, click “Configure Settings”.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/bundle3%2B_1_.png' style={{ width: 500 }} />
                <br /><br /><br />
              </li>
              <li>
                <p>You can either edit an existing setting from this window by clicking on the wrench icon or by clicking the “New Settings” button.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/bundle4%2B_1_.png' style={{ width: 300 }} />
                <br /><br /><br />
                <p>From this window, you should indicate the data you wish to export.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/bundle5%2B_1_.png' style={{ width: 600 }} />
                <br /><br /><br />
                <h1>Data Field Options</h1>
                <p>Basic fields we suggest you add to get the best version of this report:</p>
                <ul>
                  <li>
                    <p><strong>Bundle Master SKU</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle Name</strong></p>
                  </li>
                  <li>
                    <p><strong>Component SKU (Core SKU)</strong></p>
                  </li>
                  <li>
                    <p><strong>Component Name (Core SKU Name)</strong></p>
                  </li>
                  <li>
                    <p><strong>Component Qty</strong></p>
                  </li>
                </ul>
                <p>Additional fields from the existing bundle export only using the bundle data:</p>
                <ul>
                  <li>
                    <p><strong>Bundle Description</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle UPC</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle Image</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle Brand</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle Category</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle Label</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle M.A.P</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle Shipping Cost</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle Pounds</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle Ounces</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle Height (in)</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle Width (in)</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle Length (in)</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle Allow Backorders</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle Hazmat</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle Ships in own box</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle Active</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle Vendor Cost</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle With Barcode</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle Buyer (E-mail)</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle MPN</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle Gift Card</strong></p>
                  </li>
                  <li>
                    <p><strong>Bundle Digital</strong></p>
                  </li>
                </ul>
                <p>Once you have set up your data fields and correlating column names, you can also configure the file type you would like to export the data into. Additionally, you can select the date format you’d like any date data to export as.</p>
                <p>When your set-up is complete, simply click “Save”.</p>
              </li>
              <li>
                <p>Once you have your export settings configured, simply select them from the Export Settings drop-down menu.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/bundle6%2B_1_.png' style={{ width: 500 }} />
                <br /><br /><br />
              </li>
              <li>
                <p>Click Export Bundles/Kits and the file will be emailed to the email you are logged in with.</p>
              </li>
            </ol>
          </Card>
        </Col>
      </Row>
    </>
  );
};
