import { Card, Row, Col } from 'antd';

export default function () {

  return (
    <>
      <h2>Analytics {'>'} Purchase Orders {'>'} Historical Exports</h2>
      <Row>
        <Col span={24}>
          <Card>
          <h2>Overview</h2>
            <p>This feature is a CSV data export tool meant for large exports of <b>historical data</b>. Historical data exports are not the same as grid exports which are customizable exports for <b>live data</b> that Extensiv Order Manager already offers in the Orders Module.</p>
            
            <h2>Limitations of historical exports:</h2>
            <ul>
              <li>Not real-time data - the data available for exports can be delayed for up to 24 hours.</li>
              <li>Each generated CSV file is available for download for 24 hours. After that period, the entry from the export grid is deleted (from the bottom half of the screen). You can always regenerate the same request later by using the filters to submit your previous request. The link to the file also expires after 24 hours.</li>
              <li>The columns that are exported are <b>not</b> customizable. Instead, the export will include ALL columns available (see the list below for reference). You can edit your export once downloaded to delete/hide/rearrange columns you do not want.</li>
              <li>The export does not include the Total Cost column found in the Items tab.</li>
              <li>Parameters/filters to export by are limited to the destination warehouse, milestones, status, vendor, as well as created, received, and delivered date ranges.</li>
              <li>Each row represents a purchase order item.</li>
            </ul>

            <h2>How to Access this Feature</h2>
            <p>Go to the Analytics Module and view the Purchase Orders subsection in the left-side panel. Then select the Historical Exports tab.</p>
            <p>Use the available filters to narrow down your export parameters. From there, click the Generate Export button and wait while your report is generated.</p>
            <p>You should be able to see your new request in the bottom section - when the Status column says "Succeeded", you can click the Download button in the Action column.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/image-20210310-152558.png" style={{ width: 600 }}/>
            
            <h2>Columns Available for Export for Historical Data</h2>
            <ul>
              <li>Row Number</li>
              <li>Purchase Order Number</li>
              <li>Vendor Name</li>
              <li>Authorizer Name</li>
              <li>Internal Notes</li>
              <li>Date Created</li>
              <li>Date Issued</li>
              <li>Date Authorized</li>
              <li>Vendor Confirm By</li>
              <li>Currency Code</li>
              <li>Purchase Order Status</li>
              <li>Incoterm Shipping Rule</li>
              <li>Payment Term</li>
              <li>Purchase Order Format</li>
              <li>Custom Purchase Order Number</li>
              <li>Purchase Order Milestones</li>
              <li>Warehouse Name</li>
              <li>Warehouse Phone</li>
              <li>Warehouse Phone Ext</li>
              <li>Warehouse Address 1</li>
              <li>Warehouse Address 2</li>
              <li>Warehouse Address 3</li>
              <li>Warehouse City</li>
              <li>Warehouse State</li>
              <li>Warehouse Zip Code</li>
              <li>Warehouse Country</li>
              <li>Vendor Name</li>
              <li>Vendor Address 1</li>
              <li>Vendor Address 2</li>
              <li>Vendor Address 3</li>
              <li>Vendor City</li>
              <li>Vendor State</li>
              <li>Vendor Zip Code</li>
              <li>Vendor Country</li>
              <li>Item Status</li>
              <li>Item Buyer</li>
              <li>Item Packaging</li>
              <li>Item Reference Number</li>
              <li>Item Memo</li>
              <li>Item Quantity Ordered</li>
              <li>Item Unit of Measure Quantity</li>
              <li>Item Unit of Measure Name</li>
              <li>Item Original Unit Cost</li>
              <li>Item Discount</li>
              <li>Item Discount Type</li>
              <li>Item Billed Unit Cost</li>
              <li>Item Landed Unit Cost</li>
              <li>Item Percentage Tax</li>
              <li>Item Delivery Stock Location</li>
              <li>Item Est Delivery Date</li>
              <li>Item Delivery Date</li>
              <li>Item Billed Date</li>
              <li>Item Payment Date</li>
              <li>Item Received Date</li>
              <li>Notes to Vendor</li>
              <li>Notes from Vendor</li>
              <li>Vendor SKU</li>
              <li>Master SKU</li>
              <li>UPC</li>
              <li>Product Name</li>
              <li>MPN</li>
              <li>Product Description</li>
              <li>Product Attributes</li>
            </ul>
            <p style={{ color: 'red'}}>For each row, refer to Item Quantity Ordered & Item Status together to understand Units Received (or any other status). Purchase Order Status will tell you the overall status for the PO, but the Item Status will tell you the specific status of the items belonging to a PO.</p>
          </Card>
        </Col>
      </Row>
    </>
  );
};
