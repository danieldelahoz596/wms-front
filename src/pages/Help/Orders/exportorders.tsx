import { Card, Row, Col, Alert } from 'antd';

export default function () {

  return (
    <>
      <h2>Orders {'>'} Exporting Orders</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Export Orders</h1>
            <p>Extensiv Order Manager users have the ability to export out your orders into an Excel, Text or CSV file. You can choose to export all fields or just a subset of them.</p>
            <h1>Step 1</h1>
            <p>Go to the <strong>Orders</strong> Module.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505644/orders__35_.PNG' style={{ width: 1000 }} />
            <br /><br />
            <h1>Step 2</h1>
            <p>In the Orders Module, select all of the orders you want to export out of Extensiv Order Manager. To select orders, check off the boxes on the left-hand side of your orders list. To export all orders in a view, you can click on the checkbox next to channels to highlight all orders.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505645/image__32_.png' style={{ width: 800 }} />
            <br /><br />
            <h1>Step 3</h1>
            <p>Select the Import/Export dropdown menu followed by “Export Selected Orders” and a new window will open. If you have not yet configured export settings, select “Configure Settings”, which will then prompt you to create a new Order Export Setting.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505646/image__33_.png' style={{ width: 800 }} />
            <br /><br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505647/orders__36_.PNG' style={{ width: 600 }} />
            <br /><br />
            <h1>Step 4</h1>
            <p>In the new window that opens, give your Export Setting a name and select a format for the file (CSV, Excel, or Text).</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505648/orders__37_.PNG' style={{ width: 800 }} />
            <br /><br />
            <h1>Step 5</h1>
            <p>Select the fields you would like to include in this export and give each column a name. The ‘Export Fields (Include column headers?)’ check box enables/disables the showing of column headers on the exported file.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505649/orders__38_.PNG' style={{ width: 800 }} />
            <br /><br />
            <p>Click <strong>Save</strong> once complete.</p>
            <h1>Step 6</h1>
            <p>On the Order Export Settings, you will now see the new export settings you just created. Select the export setting from the list and click Export Orders. The file generated will be emailed to the email address associated with the account. If you do not receive the email in your inbox, please check your spam folder.</p>
            <Alert
              message="Note"
              description="The orders export file generated has a maximum of 5,000 rows of data. If your export file has 5,001 - 5,002 rows, you should narrow down the number of orders you exported as you are likely not viewing all of the order data you expected to see."
              type="info"
            />
            <br />
            <p>If you are looking to export more than 5,000 rows of data, you should use the Historical Orders Export tool which has no limit to how much data it can export.</p>
          </Card>
        </Col>
      </Row>
    </>
  );
};
