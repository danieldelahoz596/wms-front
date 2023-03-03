import { Alert, Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>Shipments {'>'} RMA Exports</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>RMA Exports</h1>
            <br />
            <h2>How to Export RMAs</h2>
            <ol>
              <li>
                In the <b>Shipments</b> Module, update your search type to <b>Returns</b>, select <b>Search</b>, then select the
                RMA(s) you would like to export.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/pic447698.png" />
              </li>
              <li>
                Click the <b>Import/Export</b> dropdown menu, then select <b>Export Rmas For Selected Orders</b>.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/pic58967.png" />
              </li>
              <li>
                If none exist already, set up an export configuration for the RMA export. You can create as many settings as you
                like, and you can delete them if you no longer need them. If you already have an export configuration option you
                want to use, please skip to Step 4.
              </li>
            </ol>
            <p>
              To create a new export configuration, click the <b>Configure Settings</b> button.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/pic5873.png" />
            <p>
              Click the <b>➕ New Settings</b> button.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/pic6698552.png" />
            <p>
              First, name your settings in the <b>Settings Name</b> field. Then choose which <b>File Format</b> you want your
              export file to be in from the CSV, Excel, and Text options. You can also change the <b>Date Format</b> you want to
              see as well from the default option of MM/dd/yyyy.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/RMA%2B_1_.PNG" />
            <p>
              On the right-hand side, you can choose whether or not you want the text in the <b>Column Name</b> column to populate
              the first row of your export through the <b>Export Fields (Include column headers?)</b> checkbox.
            </p>
            <p>
              Finally, select from the <b>Add Field</b> dropdown menu each field that you want to export RMA data on.
            </p>
            <Alert
              message="Note"
              description="Select a field, then input a name in the Column Name field, then hit the Enter/Return key. This action accepts
                the text. Failing to do so can sometimes complicate the Save process"
            />
            <p>
              <i>
                An acceptable configuration will look like the example above. Compare it to the example below - Row 3 here will
                cause your settings to fail when saved, as the enter key was not hit and it is still in editing format.
              </i>
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/RMA%2B_2_.PNG" />
            <p>You may receive this error if you do not set up the Column Names properly.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-01-11%2Bat%2B1.37.06%2BPM%2B_1_.png" />
            <p>
              Hit <b>Save</b> when your configuration is done.
            </p>
            <p>
              4. Select an option from the <b>Export Settings</b> dropdown menu.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/image%2B_28_.png" />
            <p>
              5. Click <b>Export RMAS</b>. You should receive the export file via email shortly.
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
