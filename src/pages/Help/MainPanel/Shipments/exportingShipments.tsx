import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>Shipments {'>'} Exporting Shipments</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Exporting Shipments</h1>
            <br />
            <p>
              Within Extensiv Order Manager you have the ability to export out your shipments into an Excel, text or CSV file. You
              can choose to export all fields or just a subset of them.
            </p>
            <h2>Step 1</h2>
            <p>
              Locate the <b>Shipments</b> Module.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/shipments.PNG" />
            <h2>Step 2</h2>
            <p>
              In the Shipments Module, select all of the orders you want to export out of Extensiv Order Manager. To select
              shipments, check off the boxes on the left-hand side of your shipments list. To export all shipments, you can click
              on the checkbox next to type to highlight all orders.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/shipments%2B_1_.PNG" />
            <h2>Step 3</h2>
            <p>
              Select the Import/Export button followed by “Export Shipments for Selected Orders” and a new window will open. If
              you have not configured export settings, select “Configure Settings”, which will then prompt you to create a new
              Shipment Export Setting.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/image%2B_4_.png" />
            <br />
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/shipments%2B_2_.PNG" />
            <h2>Step 4</h2>
            <p>
              In the new window that opens give this Export Setting a name and select a format for the file (CSV, Excel or text).
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/shipments%2B_3_.PNG" />
            <h2>Step 5</h2>
            <p>
              Select the fields you would like to include in this export and give each column a name. The ‘Export Fields (Include
              column headers?)’ check box enables/disables the showing of column headers on the exported file. Click <b>Save</b>{' '}
              once complete.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/shipments%2B_4_.PNG" />
            <h2>Step 6</h2>
            <p>
              On the Shipment Export Settings you will now see the new export settings you just created. Select the export setting
              from the list and click Export Orders. The file generated will be emailed to the email address associated with the
              account. If you do not receive the email please check your spam folder.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/shipments%2B_7_.PNG" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
