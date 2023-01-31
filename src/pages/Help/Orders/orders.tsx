import { Card, Row, Col, Alert, Divider } from 'antd';

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

      <br />
      {/* Customs */}
      <h2>Orders {'>'} Customs</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Customs</h1>
            <Alert
                message="Note"
                description="Sometimes orders shipping to US territories will require customs. See this article for more info."
                type="info"
            />
            <br />
            <p>To set customs information, open the order edit window by clicking on an order number hyperlink. Then click on the Customs tab.</p>
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/customs.png' style={{ width: 800 }} />
            <br /><br />
            <p>Choose the Package Contents and Non-Delivery Instructions, and add a declaration for each item in the order, including:</p>
            <br />
            <table>
              <tbody>
                <tr>
                  <td><strong>Field Name</strong></td>
                  <td><strong>Description</strong></td>
                  <td><strong>Example</strong></td>
                </tr>
                <tr>
                  <td>Item Description</td>
                  <td>Brief explanation of product</td>
                  <td>Vacuum Filter</td>
                </tr>
                <tr>
                  <td>Harmonization Code</td>
                  <td>Universal System/code to determine how much duty is needed to pay on the item</td>
                  <td><a href="https://hts.usitc.gov/" className='helplink'>https://hts.usitc.gov</a></td>
                </tr>
                <tr>
                  <td>Origin Country</td>
                  <td>The origin of the product. Require to determine how much duty is needed to pay on the item</td>
                  <td>China</td>
                </tr>
                <tr>
                  <td>Declared Value</td>
                  <td>Cost of the Item</td>
                  <td>$9.99</td>
                </tr>
              </tbody>
            </table>
            <br />
            <p><a href='https://www.trade.gov/harmonized-system-hs-codes#:~:text=System%20(HS)%20Codes-,Harmonized%20System%20(HS)%20Codes,the%20export%20process%20for%20goods.&text=The%20United%20States%20uses%20a,digits%20being%20the%20HS%20number.' className='helplink'>More information on Harmonization Codes</a></p>
            <p><a href='https://hts.usitc.gov/' className='helplink'>Find a Harmonization Code</a></p>
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/customs2.PNG' style={{ width: 600 }} />
            <br /><br />
            <p>You can also add customs information to products directly in the <a href='/help/products/createproducts' className='helplink'><strong>Products</strong> Module</a> so that this information automatically populates when an international order is placed. You can do this in bulk via the Customs tab on the Product Import Template spreadsheet or in the Order Manager UI by clicking on a Master SKU in the Products module and going to the Customs tab.</p>
            <Divider />
            {/* Printing Customs Forms */}
            <h1>Printing Customs Forms</h1>
            <p>By default, when printing shipping labels for orders that required Customs to be submitted, Customs forms will automatically be included with the shipping label.</p>
            <p>Alternatively, you can also print Customs Forms separately from shipping labels. <i>Please contact your Customer Success Manager or reach out to Support team to have this feature enabled for your account.</i></p>
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/custom_20forms-Dec-08-2021-10-56-15-60-AM.png' style={{ width: 200 }} />
            <br /><br />
            <p>In the Shipments and Orders modules, you will be able to print customs forms for shipped international orders. <strong>This is supported for in-house shipments processed natively in Order Manager, through FedEx & UPS</strong>. They will always print as 8.5x11 PDFs. <strong>You can select multiple international shipments at a time to print customs forms for them in one PDF.</strong></p>
            <p>Endicia does not support the printing of customs forms separately at this time (it is a deprecated feature).</p>
            <p>See the below articles for information on ETD documents options:</p>
            <ul>
              <li>
                <p><a href='https://help.extensiv.com/om-settings-shipping-providers/fedex-etd' className='helplink'>FedEx ETD</a></p>
              </li>
              <li>
                <p><a href='https://help.extensiv.com/om-orders/ups-electronic-customs-documents-etd-commercial-invoices' className='helplink'>UPS ETD</a></p>
              </li>
              <li>
                <p><a href='https://help.extensiv.com/om-orders/dhl-ecommerce-integration-specifics' className='helplink'>DHL eCommerce ETD</a></p>
              </li>
            </ul>
          </Card>
        </Col>
      </Row>

      <br />
      {/* Merging Orders */}
      <h2>Orders {'>'} Merging Orders</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Merge Orders</h1>
            <p>In order to help you save on shipping, Extensiv Order Manager may recommend that two or more unshipped orders be merged into one if they are going to the same customer.</p>
            <p>You will see these recommendations in your <a href='' className='helplink'>SKU Alerts</a>.</p>
            <p>There are 2 validations for Extensiv Order Manager to recommend merging orders:</p>
            <ul>
              <li>
                <p>If there are unshipped orders with the same Email Address, Extensiv Order Manager will suggest that the orders be merged.</p>
              </li>
              <li>
                <p>If there is no email address match but unshipped orders have the same Recipient Name and Address, Extensiv Order Manager will suggest the orders be merged.</p>
              </li>
            </ul>
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505651/Screen_Shot_2021-03-31_at_7.09.10_PM.png' style={{ width: 1000 }} />
            <br /><br />
            <p>Follow the steps outlined below on how to merge an order in Extensiv Order Manager.</p>
            <h1>Step 1</h1>
            <p>In the toolbar, select the <strong>Orders</strong> module</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505652/orders__39_.PNG' style={{ width: 1000 }} />
            <br /><br />
            <h1>Step 2</h1>
            <p>Search for the orders you would like to merge. You can search for orders in the left sidebar search panel or locate them in the orders grid. You will need to be able to see both orders to merge in the same orders grid, so if your search result is only for one of the orders, you won't be able to merge it.</p>
            <p><strong>ie:</strong> Search for orders from Shopify in Awaiting Shipment status, not just a specific order number.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505653/orders__40_.PNG' style={{ width: 200 }} />
            <br /><br />
            <p>To select an order, click on the box next to the order which will highlight the order in blue. </p>
            <h1>Step 3</h1>
            <p>Click on the <strong>Merge</strong> button. This will open up a new pop-up window.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505655/orders__41_.PNG' style={{ width: 800 }} />
            <br /><br />
            <h1>Step 4</h1>
            <p>Drag and drop which order you’d like to be the "master order" and which one you’d like to be the "child order(s)" from the orders list. You can merge more than two orders at a time. When you are finished, click Merge. Most information in the child order will be replaced by the master order. Some numeric quantities, like weights and totals, may be summed during the merge process.</p>
            <Alert
                message="Note"
                description={
                  <ul>
                    <li>
                      <p>A manual order cannot be a master order. You can, however, <a href='' className='helplink'>edit manual orders</a> with new/different order items.</p>
                    </li>
                    <li>
                      <p>You cannot merge orders that are in different order statuses. For example, you cannot merge an order in an Unresolved status with one in Awaiting 3PL status.</p>
                    </li>
                    <li>
                      <p>Attempting these actions will result in an error message.</p>
                    </li>
                  </ul>
                }
                type="info"
            />
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505656/orders__42_.PNG' style={{ width: 800 }} />
            <br /><br />
            <h1>Step 5</h1>
            <p>Once you've dragged/dropped at least one order into the master order section and one into the section to be merged into the master order, click <strong>Merge</strong>. You will be prompted to confirm the merge.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505657/Screen_Shot_2021-03-31_at_7.16.31_PM.png' style={{ width: 800 }} />
            <br /><br />
            <p>If you are merging a manual order with a native sales channel order, you'll be notified that you need to manually update the sale channel with a tracking number when the master order is shipped.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505658/Screen_Shot_2021-03-31_at_7.14.05_PM.png' style={{ width: 500 }} />
            <br /><br />
            <p>Once you confirm the merge, if the orders were qualified to merge together, you will be prompted with a success prompt like this:</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505659/Screen_Shot_2021-03-31_at_7.16.38_PM.png' style={{ width: 700 }} />
          </Card>
        </Col>
      </Row>

      <br />
      {/* Splitting Orders */}
      <h2>Orders {'>'} Splitting Orders</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Split Orders</h1>
            <p>In Extensiv Order Manager when you split an order, you divide a single order into two. You can choose to handle the resulting two orders similarly or fulfill them from different warehouses, at different times. You can choose to manually split an order or automate the process for new orders via orderbots.</p>
            <p><i>NOTE: An Orderbot may require a multi-item order to be split. An order for a single unit of a single Master SKU cannot be split.</i></p>
            <p>Please see below for instructions for how to split an order.</p>
            <h1>Step 1</h1>
            <p>In the toolbar, select the <strong>Orders</strong> module</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505664/orders__43_.PNG' style={{ width: 1000 }} />
            <br /><br />
            <h1>Step 2</h1>
            <p>Search for the order you want to split. Use the Search Panel on the left-hand side to locate the order. </p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505666/orders__44_.PNG' style={{ width: 200 }} />
            <br /><br />
            <h1>Step 3</h1>
            <p>Once you have found the order, select it and click the “Edit” button. You will find the “Split Order” option in the dropdown. </p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505667/orders__45_.PNG' style={{ width: 800 }} />
            <br /><br />
            <h1>Step 4</h1>
            <p>Select “Split Order” and a new window will open. You will see two columns: </p>
            <ul>
              <li>
                <p>“This Order” which refers to the Original Order (on the left)</p>
              </li>
              <li>
                <p>New Order (on the right)</p>
              </li>
            </ul>
            <p>This is what is going to be split. Enter the quantity of items for the new order which will be deducted from the Original Order. </p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505668/orders__46_.PNG' style={{ width: 600 }} />
            <br /><br />
            <h1>Step 5</h1>
            <p>Once you have made the appropriate adjustments, click Save. You will now see in the main orders window that the order has been split into two separate orders. </p>
            <Alert
                message="Note"
                description="If your new split order qualifies for orderbots, you may not see the split order under the same status. For example, it could be in a different Awaiting status if it's assigned to a different kind of warehouse, or it could be Unresolved (Out of Stock, etc.)."
                type="info"
            />
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2505669/orders__47_.PNG' style={{ width: 800 }} />
          </Card>
        </Col>
      </Row>

      <br />
      {/* Add an item to an existing order */}
      <h2>Orders {'>'} Add an item to an existing order</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Add an item to an existing order</h1>
            <Alert
                message="NOTE"
                description="The option to add items to an existing order in Extensiv Order Manager is currently only available for Manual and Shopify channels."
                type="info"
            />
            <br />
            <p>Navigate to the <strong>Orders</strong> Module. Click on the order number of the order you want to edit, and go to the <strong>Order Items</strong> tab:</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/order1.png' style={{ width: 800 }} />
            <br /><br />
            <p>Click on the Add a product... dropdown to select the item you want to add to the</p>
            <p>order. If you do not see a search result for your desired product, it likely does not have a <a href="" className='helplink'>Listing SKU for this channel.</a></p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/order.png' style={{ width: 600 }} />
            <br /><br />
            <p>Enter the item quantity, unit price, and discount amounts, then click <strong>Save</strong>:</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/order3%2B_1_.png' style={{ width: 600 }} />
          </Card>
        </Col>
      </Row>

      <br />
      {/* Updating Orders in Bulk */}
      <h2>Orders {'>'} Updating Orders in Bulk</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Update Orders in Bulk</h1>
            <ol>
              <li>
                <p>Navigate to the <strong>Orders</strong> module.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders%2B_48_.png' style={{ width: 1000 }} />
                <br /><br /><br />
              </li>
              <li>
                <p>By default, the <strong>Orders</strong> module displays the orders that are Awaiting Shipment. Using the Select All option in the topmost row or by checking individual orders' checkboxes, select the orders you want to edit, or use the <strong>search feature</strong> to narrow down your view to a group of orders you want to view and edit.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-16%2Bat%2B4.58.55%2BPM.png' style={{ width: 1000 }} />
                <br /><br /><br />
              </li>
              <li>
                <p>When you select two or more orders, the <strong>Order Fulfillment</strong> panel on the right-hand side of the page will display a <strong>Bulk Update</strong> dropdown menu, from which you can select the order information you want to edit. Select the information you want to update in bulk, then specify the menu options you want.<br /><strong>Example</strong>: To update the warehouse assignment for the orders selected, choose <strong>Fulfillment Type</strong> from the menu, then select the desired options from the <strong>Fulfillment</strong> and <strong>Source</strong> lists. </p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-16%2Bat%2B5.04.18%2BPM.png' style={{ width: 300 }} />
                <br /><br /><br />
              </li>
              <li>
                <p>Click <strong>Update Selected Orders</strong>.</p>
              </li>
              <li>
                <p>The selected option(s) will now populate in the corresponding fields within the orders' <strong>Processing</strong> tabs</p>
              </li>
            </ol>
          </Card>
        </Col>
      </Row>

      <br />
      {/* Restore an On-Hold Order */}
      <h2>Orders {'>'} Restore an On-Hold Order</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Restore an On-Hold Order</h1>
            <p>To restore an order that is on hold, first go to the <strong>Orders</strong> module.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders.PNG' style={{ width: 1000 }} />
            <br /><br />
            <ol>
              <li>
                <p>On the <strong>Search/Filter</strong> pane on the left, click the <i>On Hold</i> status dropdown and view All.<br />For help in searching the <strong>Order</strong> module, see <a href="" className='helplink'>Searching for Orders</a>.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders2.png' style={{ width: 200 }} />
                <br /><br /><br />
              </li>
              <li>
                <p>In the <strong>Orders</strong> section in the middle, select/highlight the row of the on hold order to be restored, then click <i><strong>Restore</strong></i>.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders4.png' style={{ width: 800 }} />
                <br /><br /><br />
              </li>
              <li>
                <p>On the <strong>Restore Orders</strong> confirmation window, click the <strong>Yes - Restore</strong> button to confirm that you are restoring the on-hold order.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders5.PNG' style={{ width: 400 }} />
                <br /><br /><br />
              </li>
              <li>
                <p>Once the order is restored, the order will fall into the next applicable status.</p>
              </li>
            </ol>
          </Card>
        </Col>
      </Row>

      <br />
      {/* Customizing the organization of Columns in the Orders Module */}
      <h2>Orders {'>'} Customizing the organization of Columns in the Orders Module</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Customizing the organization of Columns in the Orders Module</h1>
            <p>In the Orders Module, you can customize which columns you want to view and the order in which they appear. Once saved, the UI will continue to show your customized view when you access the Orders Module. This feature is currently only available in the Order Module.</p>
            <ol>
              <li>
                <p>In the Orders Module, select the center chart icon shown below to "<strong>Choose Columns</strong>".</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders%2B_49_.png' style={{ width: 800 }} />
                <br /><br /><br />
              </li>
              <li>
                <p>Adjusting the width of a column will is not a permanent action - column width will reset each time the Orders Module is refreshed.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders1%2B_10_.PNG' style={{ width: 600 }} />
                <br /><br /><br />
              </li>
              <li>
                <p>Customizing your view will not affect the settings of anyone else at your company, it is customized to your username!</p>
              </li>
              <li>
                <p>If a column is not shown under the list of the 41 available columns, it is not an option to add, remove, or customize. The only exception to this rule are Custom Fields.</p>
              </li>
            </ol>
            <Alert
                message="NOTES"
                description={
                  <ul>
                    <li>
                      <p>Adjusting the width of a column will is not a permanent action - column width will reset each time the Orders Module is refreshed.</p>
                    </li>
                    <li>
                      <p>Customizing your view will not affect the settings of anyone else at your company, it is customized to your username!</p>
                    </li>
                    <li>
                      <p>If a column is not shown under the list of the 41 available columns, it is not an option to add, remove, or customize. The only exception to this rule are Custom Fields.</p>
                    </li>
                  </ul>
                }
                type="info"
            />
          </Card>
        </Col>
      </Row>

      <br />
      {/* Creating a Manual Order - Individually or In Bulk */}
      <h2>Orders {'>'} Creating a Manual Order - Individually or In Bulk</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Create a Manual Order - Individually or In Bulk</h1>
            <p>Within Extensiv Order Manager, you are able to create a <strong>manual order</strong> to account for any orders that come from outside your integrated sales channels.</p>
            <p>To do this, you will need to add listing SKUs for your <strong>manual channel</strong> to your Master SKUs in your product catalog. Go to your products module and click on the <strong>“Import/Export”</strong> button on the top menu bar. Select <strong>“Import listing SKUs”</strong> from the dropdown.</p>
          </Card>
        </Col>
      </Row>
    </>
  );
};
