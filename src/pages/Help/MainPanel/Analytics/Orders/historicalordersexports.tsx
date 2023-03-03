import { Card, Row, Col } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Analytics {'>'} Orders {'>'} Historical Exports
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h2>Overview</h2>
            <p>
              This feature is a CSV data export tool meant for large exports of <b>historical data</b>. Historical data exports
              are not the same as grid exports which are customizable exports for <b>live data</b> that Extensiv Order Manager
              already offers in the Purchase Orders Module.
            </p>

            <h2>Limitations of historical exports:</h2>
            <ul>
              <li>Not real-time data - the data available for exports can be delayed for up to 24 hours.</li>
              <li>
                Each generated CSV file is available for download for 24 hours. After that period, the entry from the export grid
                is deleted (from the bottom half of the screen). You can always regenerate the same request later by using the
                filters to submit your previous request.
              </li>
              <li>
                The columns that are exported are <b>not</b> customizable. Instead, the export will include ALL columns available
                (see the list below for reference). You can edit your export once downloaded to delete/hide/rearrange columns you
                do not want.
              </li>
              <li>
                Parameters/filters to export by are limited to sales channels, warehouses, order statuses, ship date, order date.
              </li>
            </ul>

            <h2>How to Access this Feature</h2>
            <p>
              Go to the Analytics Module and view the Orders subsection in the left-side panel. Then select the Historical Exports
              tab.
            </p>
            <p>
              Use the available filters to narrow down your export parameters. From there, click the Generate Export button and
              wait while your report is generated.
            </p>
            <p>
              You should be able to see your new request in the bottom section - when the Status column says "Succeeded", you can
              click the Download button in the Action column.
            </p>
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/image-20210113-174644.png"
              style={{ width: 600 }}
            />

            <h2>Columns Available for Export for Historical Data</h2>
            <ul>
              <li>Order Number</li>
              <li>Order Date</li>
              <li>Status Description</li>
              <li>Order Type (Standard, POS, FBA, Stock Transfer, Prime, or FBA Workflow)</li>
              <li>Order Total</li>
              <li>Currency Code3</li>
              <li>Amount Paid</li>
              <li>Payment Date</li>
              <li>Customer Ship Amount</li>
              <li>Ship by Date</li>
              <li>Receive by Date</li>
              <li>Notes from Buyer</li>
              <li>Notes to Buyer</li>
              <li>Internal Notes</li>
              <li>Requested Shipping Service</li>
              <li>Order Weight</li>
              <li>Order Height</li>
              <li>Order Width</li>
              <li>Order Length</li>
              <li>Insured Value</li>
              <li>Insurance Cost</li>
              <li>Other Cost</li>
              <li>Saturday Delivery</li>
              <li>Contains Alcohol</li>
              <li>Contains Dry Ice</li>
              <li>Dry Ice Weight</li>
              <li>Gift</li>
              <li>Gift Message</li>
              <li>Non-Machinable</li>
              <li>Show Postage</li>
              <li>ITN</li>
              <li>Intl Non-Delivery Action</li>
              <li>Bill Duties to Sender</li>
              <li>Do Not Prepay Postage</li>
              <li>Include Return Label</li>
              <li>Release Without Signature</li>
              <li>Custom Field 1</li>
              <li>Custom Field 2</li>
              <li>Custom Field 3</li>
              <li>External Order</li>
              <li>Discount</li>
              <li>Order Payment Type</li>
              <li>Multi Package</li>
              <li>Channel Priority</li>
              <li>Fraud Analysis</li>
              <li>Order Labels</li>
              <li>Ship Name</li>
              <li>Ship Company</li>
              <li>Ship Address1</li>
              <li>Ship Address2</li>
              <li>Ship Address3</li>
              <li>Ship City</li>
              <li>Ship State</li>
              <li>Ship Zip Code</li>
              <li>Ship Country</li>
              <li>Ship Phone</li>
              <li>Ship Address Type</li>
              <li>Buyer Name</li>
              <li>Buyer Email</li>
              <li>Ship Date</li>
              <li>Tracking Number</li>
              <li>Carrier Fee</li>
              <li>Transaction ID</li>
              <li>Ship Carrier Name</li>
              <li>Ship Service Name</li>
              <li>Ship Package Name</li>
              <li>Listing SKU</li>
              <li>Item Qty Ordered</li>
              <li>Item Unit Price</li>
              <li>Item Tax</li>
              <li>Item Discount</li>
              <li>Item Notes</li>
              <li>Warehouse Name</li>
              <li>Internal SKU</li>
              <li>Digital</li>
              <li>Giftcard</li>
              <li>Product Name</li>
              <li>Brand Name</li>
            </ul>

            <h2>Note About CSV Exports</h2>
            <p>
              It is quite common for users to open these exported CSV files using programs like Microsoft Excel to check their
              contents before importing the file into a separate application. However, when Microsoft Excel opens a CSV file, it
              attempts to interpret the data in that file and starts making changes to it.
              <br />
              For example, if Excel sees something in the CSV file that it identifies as a date (often incorrectly), Excel will
              change the date format in the CSV file to suit the way that it prefers the dates to be formatted. Unfortunately,
              this generally has the unintended consequence of breaking the CSV file.
            </p>
            <h3>THE SOLUTION</h3>
            <p>If you need to open a CSV file in Excel without breaking it, here's how to do it:</p>
            <ul>
              <li>Open a new Excel sheet, select the Data tab, then click 'From Text' in the Get External Data group.</li>
              <li>Browse to the CSV file and select 'Import'.</li>
              <li>In step 1 of the Import Wizard choose 'Delimited' as the original data type. Click 'Next'.</li>
              <li>In step 2 of the Import Wizard choose Comma as the delimiter (deselect the Tab checkbox) and click 'Next'.</li>
              <li>
                In step 3 of the Import Wizard, you tell Excel not to change your formats. With the first column in the Data
                Preview selected, scroll across to the last column and select it while holding the SHIFT key (all columns should
                now be selected). Then select 'Text' as the Column Data Format and click 'Finish'.
              </li>
              <li>Click OK to insert the data into cell A1</li>
              <li>
                You should now have a spreadsheet with the imported data but without Excel breaking the formatting required.
                Remember to export the file from Excel to CSV again before uploading it to the third-party application if you have
                made changes.
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </>
  );
}
