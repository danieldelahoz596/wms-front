import { Card, Row, Col, Alert } from 'antd';

export default function () {
  return (
    <>
      <h2>PurchaseOrders {'>'} Paste from CSV - PO Import</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Paste from CSV - PO Import</h1>
            <br />
            <p>Please follow these instructions in order to paste POs from a CSV.:</p>
            <Alert
              message="Note"
              description="The following is merely just a copy and paste, but you need to maintain the formatting for a successful paste. You are not importing anything."
            />
            <ol>
              <li>Go to Purchase Orders</li>
              <li>
                Click +New PO
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2838785/new_po.png" />
              </li>
              <li>
                Select the vendor you wish to create a PO with.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2838786/po_vendor.png" />
              </li>
              <li>
                Populate the required information under PO Details (To Destination, Confirm By).
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2838790/po_details.png" />
              </li>
              <li>
                Populate any Shipping or Aggregate costs, remember these are costs that will be evenly distributed amongst all the
                line items and quantities.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2838792/po_cost.png" />
              </li>
              <li>
                This is the step where you will initiate the bulk paste. In the "Add Item" section, click <b>Paste From CSV.</b>
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2838798/paste_csv.png" />
              </li>
              <li>
                You will be prompted with this window.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2838794/csv.png" />
              </li>
              <li>
                Using the “PO Paste as CSV” template , populate all the info needed for this "Paste".
                <br />
                <ol>
                  <li>
                    <b>Column A: Vendor SKU</b> - SKU associated to the master sku with the respective vendor
                  </li>
                  <li>
                    <b>Column B: Quantity</b>
                  </li>
                  <li>
                    <b>Column C: Unit of Measure</b> (Each, or the customer measurement you created)
                  </li>
                  <li>
                    <b>Column D: Unit Cost</b>, the cost of your product, If no value, put 0 cannot be blank.
                  </li>
                  <li>
                    <b>Column E: Discount</b> - must either start with a $ or end with a % followed by value. If no discount
                    please put $0 or 10%, If no value, put 0 cannot be blank.
                  </li>
                  <li>
                    <b>Column F: Tax%</b> - just input a value, no symbol. If there is no value, put 0 cannot be blank.
                  </li>
                  <li>
                    <b>Column G: Packaging</b> - optional, you can leave it blank
                  </li>
                </ol>
              </li>
              <li>Now save this as a CSV.</li>
              <li>Open the newly saved CSV and open as a TXT/Wordpad file</li>
              <li>Copy all the data WITHOUT headers and paste into the window from Step 7.</li>
              <li>
                Click <b>Apply to PO</b>
              </li>
              <li>Save the PO or Save and Authorize the PO.</li>
            </ol>
          </Card>
        </Col>
      </Row>
    </>
  );
}
