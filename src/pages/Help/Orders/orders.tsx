import { Card, Row, Col, Alert, Divider } from 'antd';

export default function () {

  return (
    <>
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
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders%2B_1_.png' style={{ width: 400 }} />
            <br /><br /><br />
            <p>This will open a new window. Download the Excel Template for listing SKU import. Input your Master SKUs and Listing SKUs into the appropriate columns. Since this is not an actual external sales channel, you can make the listing SKUs whatever you’d like – the easiest solution would be to just copy and paste your Master SKUs. Select <strong>“Manual Orders”</strong> from the sales channel dropdown and import the excel file back into Extensiv Order Manager.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders1.png' style={{ width: 600 }} />
            <br /><br /><br />
            <p>Once you have attached your manual channel listing SKUs to your Master SKUs you can now create a <strong>manual order</strong>.</p>
            <p>To do this, go to your Orders Module and click on <strong>“+New Order”</strong>. Select <strong>“manual order”</strong> from the dropdown.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders2%2B_1_.png' style={{ width: 800 }} />
            <br /><br /><br />
            <p>A new window will open where you can fill in the details of your manual order. These fields are required:</p>
            <ul>
              <li>Customer Name</li>
              <li>Address</li>
              <li>City, State, Zip</li>
              <li>Phone Number</li>
              <li>Order Number</li>
            </ul>
            <p>You can search for items and add them to the order in the dropdown under “add item”. Click save and a new manual order will be created.</p>
            <p><strong>Note:</strong> If you see an automatically populated order number, this is likely due to your <a href="" className='helplink'>manual channel settings</a> to set a prefix and order number for this channel.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders3.png' style={{ width: 700 }} />
            <br /><br /><br />
            <p>You can also import manual orders in bulk. Click on the <strong>“Import/Export”</strong> button in the top menu bar and select <strong>“Import Orders”</strong> from the dropdown. This will open up a new window where can upload your manual order import file.</p>
            <p>You must configure your import settings with the necessary fields first before uploading the file. You can create as many different import settings and customer format files as you need for each manual import.</p>
            <p>To configure new settings, click on the <strong>“Configure”</strong> button in the Manual Order Import window:</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders4%2B_1_.png' style={{ width: 600 }} />
            <br /><br /><br />
            <p>This will open a new window that contains all your pre-configured settings. To edit the settings you have already created, click on the little <strong>“wrench”</strong> symbol next to the settings. To create new settings, click on the <strong>“New Settings”</strong> button on top.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders5%2B_1_.png' style={{ width: 300 }} />
            <br /><br /><br />
            <p>You will be prompted with a new window titled <strong>“New Import Settings”</strong>. Give your new settings a name and select the appropriate file configuration options.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders6.png' style={{ width: 700 }} />
            <br /><br /><br />
            <p>On the right-hand side of this window, you will be able to select which <strong>import fields</strong> you’d like to include for this import file. Select the data field from the drop-down menu and input the corresponding column name on the right. The column name must match exactly what you have titled in your import file. Click <strong>“Save”</strong> once completed.</p>
            <p>This will bring you back to the original Manual Order Import window. Select the appropriate import settings you just created from the <strong>“Import Settings”</strong> dropdown, select the correct manual sales channel (if you have more than one), and upload your file.</p>
          </Card>
        </Col>
      </Row>

      <br />
      {/* Restoring a Cancelled Order */}
      <h2>Orders {'>'} Restoring a Cancelled Order</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Restore a Cancelled Order</h1>
            <p>A canceled order can only be restored if the sales channel has not been notified of the cancellation.</p>
            <p>To restore an order that has been canceled, follow the procedure below.</p>
            <ol>
              <li>
                  <p>On the top Toolbar, click the <strong>Orders</strong> module.</p>
              </li>
              <li>
                  <p>On the left navigation pane, click the <strong>Cancelled</strong> status and select a sub menu item to view canceled orders.</p>
                  <br />
                  <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504830/orders1__7_.png' style={{ width: 200 }} />
                  <br /><br /><br />
              </li>
              <li>
                  <p>On the <strong>Orders</strong> panel in the center, select the order to be restored, then click the <strong>Restore</strong> button.</p>
                  <br />
                  <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504831/orders1__8_.png' style={{ width: 800 }} />
                  <br /><br /><br />
              </li>
              <li>
                  <p>On the <strong>Restore Orders</strong> window, click the <strong>Yes - Restore</strong> button to confirm the restoration of the order.</p>
                  <br />
                  <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504832/orders1__9_.png' style={{ width: 400 }} />
              </li>
            </ol>
          </Card>
        </Col>
      </Row>

      <br />
      {/* Duplicate or Clone an Order */}
      <h2>Orders {'>'} Duplicate or Clone an Order</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>What You Need to Know</h1>
            <ul>
              <li>
                <p>You can duplicate one order at a time.</p>
              </li>
              <li>
                <p>You can duplicate an order from any channel, but the "clone" order will specifically be a Manual Order.</p>
              </li>
              <li>
                <p>You can choose which <a href="" className='helplink'>Manual Channel</a> the clone will be created under if you have multiple.</p>
              </li>
              <li>
                <p>Orderbots will apply to clone orders if the orderbots' filters are met. The orderbots that apply to your clone are not necessarily the same ones that would have applied to the original order. One example of this would be an orderbot with a filter of "Sales Channel" would not be met if the sales channel sought was not the manual channel your clone was created under.</p>
              </li>
              <li>
                <p>Channel updates (tracking, etc.) will NOT be made to the original sales channel for the clone order. This is because your clone is an entirely new and separate order, and has no logical attachment to the original order.</p>
              </li>
            </ul>
            <br />
            <Alert
                message="Note"
                description={
                  <p>If you need to clone multiple orders at once, you should use the Orders Module's import and export features to export existing order info, then format that data to <a href="" className='helplink'>import orders via spreadsheet</a>.</p>
                }
                type="info"
            />
            <br />
            <h1>How to Duplicate an Order</h1>
            <ol>
              <li>
                  <p>Select the order you want to duplicate in the Orders Module.</p>
              </li>
              <li>
                  <p>Click the Edit dropdown menu, then select the <strong>Duplicate Order</strong> option.</p>
                  <br />
                  <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-04%2Bat%2B11.57.57%2BAM%2B_1_.png' style={{ width: 1000 }} />
                  <br /><br /><br />
              </li>
              <li>
                  <p>Confirm the Order Number, Fulfillment Type, Warehouse Assignment, and Manual Channel you want the order created under. Then click <strong>Continue</strong>.</p>
                  <br />
                  <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504831/orders1__8_.png' style={{ width: 800 }} />
                  <br /><br /><br />
                  <Alert
                      message="Note"
                      description={
                        <p>If orderbots apply to your clone order upon creation, the Fulfillment Type and/or Warehouse you select here can be overridden.</p>
                      }
                      type="info"
                  />
                  <br />
                  <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/6c302ee7-c62d-42ed-aaa7-a32966f569be.png' style={{ width: 800 }} />
                  <br /><br /><br />
              </li>
              <li>
                  <p>The next prompt will be pre-filled with information from your original order and the previous prompt. You can edit these inputs or click <strong>Save</strong> to create the clone.</p>
                  <br />
                  <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B6.png' style={{ width: 1000 }} />
              </li>
            </ol>
          </Card>
        </Col>
      </Row>

      <br />
      {/* Bulk Actions for Orders */}
      <h2>Orders {'>'} Bulk Actions for Orders</h2>
      <Row>
        <Col span={24}>
          <Card>
            <p>Extensiv Order Manager now allows users to apply actions to existing orders in bulk. This includes the ability to run a search, select one or more orders from the search results, and then apply updates to those orders at the same time, instead of only allowing users to edit one search result at a time.</p>
            <h1>How to Apply Actions to Orders in Bulk</h1>
            <ol>
              <li>
                  <p>Navigate to the <strong>Orders</strong> module. By default, the Orders module displays the orders that are Awaiting Shipment. You can use the <strong>search feature</strong> to narrow down your view to a group of orders you want to view and edit. <br />Either click the <strong>Select All</strong> option in the topmost row or select the individual checkboxes for the orders you want to edit.</p>
                  <br />
                  <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-12%2Bat%2B11.14.24%2BAM.png' style={{ width: 800 }} />
                  <br /><br /><br />
                  <br />
                  <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-16%2Bat%2B6.33.35%2BPM.png' style={{ width: 800 }} />
                  <br /><br /><br />
              </li>
              <li>
                  <p>Now click the <strong>Edit</strong> dropdown menu and select from your options. <i><strong>The options you see will depend on the Order Status of the orders you selected.</strong></i></p>
                  <ol>
                    <li>
                      <p><strong>Hold Until:</strong> Choose the calendar date you want to hold orders for in the On Hold order status. They will automatically "restore" to their former order status when that date arrives. You will be prompted with a confirmation window before the orders are put on hold.</p>
                    </li>
                    <li>
                      <p><strong>Cancel Order:</strong> Select this if you want all orders you selected to be canceled. You will still be prompted to confirm the cancellation options before you submit that action.</p>
                    </li>
                    <li>
                      <p><strong>Assign To:</strong> Select this if you want all orders you selected to be assigned to the user you indicate.</p>
                    </li>
                    <li>
                      <p><strong>Mark Shipped:</strong> This option will mark shipped any unshipped orders you selected that <i>are not Unresolved</i>.</p>
                    </li>
                    <li>
                      <p><strong>Split Order:</strong> This option will not split orders in bulk. Skip this option.</p>
                    </li>
                    <li>
                      <p><strong>Duplicate Order:</strong> <a href="" className='helplink'>This option</a> will not duplicate orders in bulk. This action can only be done for one order at a time.</p>
                    </li>
                    <li>
                      <p><strong>Restore: </strong> Will return the orders to their former status. <br /><strong>Note:</strong> If you have selected more than one order in Canceled and/or On Hold status, then you should also see the option to <strong>Restore</strong>. This button doesn't live under the Edit dropdown menu, it will just appear as its own option.</p>
                    </li>
                  </ol>
                  <br />
                  <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-16%2Bat%2B6.25.47%2BPM.png' style={{ width: 800 }} />
                  <br /><br /><br />
              </li>
              <li>
                  <p>Select the available action option of your choice, then submit the confirmation if the prompt confirms the action you want to take.</p>
                  <br />
              </li>
            </ol>
            <p>After refreshing the orders grid, you should see the edits you just made in bulk. Your current view will refresh if the orders you updated no longer qualify for the search you submitted.</p>
          </Card>
        </Col>
      </Row>

      <br />
      {/* Custom Fields for Orders (Custom Columns) */}
      <h2>Orders {'>'} Custom Fields for Orders (Custom Columns)</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>What You Need to Know</h1>
            <ul>
              <li>
                <p>This feature allows Extensiv Order Manager users to create Order Field "Types" and "Values" which give users the ability to create new columns in the Orders Module for the first time.</p>
              </li>
              <li>
                <p>A Field Type is basically a Column Name, while a Field Value is the text that falls under that column.</p>
              </li>
              <li>
                <p>Custom Fields can be configured for orders after they are created (not during the creation process).</p>
              </li>
              <li>
                <p>New Custom Field Types will show in the Orders grid after refreshing the page.</p>
              </li>
              <li>
                <p>You can also include custom fields in order imports and exports, as well as automate them via orderbot actions.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-12%2Bat%2B10.23.08%2BAM.png' style={{ width: 900 }} />
                <br /><br /><br />
              </li>
            </ul>
            <h1>How to Add a Custom Field to an Order</h1>
            <ol>
              <li>
              <p>Navigate to the <strong>Orders</strong> module and open up any unshipped order by clicking on an order number.</p>
              </li>
              <li>
                  <p>In the order edit window, select the <strong>Fields</strong> tab. By default, this will be empty</p>
                  <br />
                  <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-10%2Bat%2B12.01.32%2BPM.png' style={{ width: 900 }} />
                  <br /><br /><br />
              </li>
              <li>
                  <p>If this is your first time using Field Types, or if you want to create a new Field Type that doesn't already exist, click the <strong>Configure Field Types</strong> button in the upper-right corner of the edit window.</p>
              </li>
              <li>
                  <p>In the <strong>Configure Field Definitions</strong> pop-up window, you can click <strong>New Field Type</strong> to configure as many new field types as you want. To configure a Field Type, give it a <strong>Name</strong>, brief <strong>Description</strong>, and indicate whether or not you want this Field Type to "Show On Grid", meaning that you want it to show up as a new column in the Orders module, shown amongst the default columns, like Order Number, Labels, Notes, Order Date, Recipient, etc. The Orders module column will be titled with the value you set in the <strong>Name</strong> column and new columns will appear after refreshing the Orders Module after saving all of your edits. Once a Field Type is configured here, it will be available as a Field Type that can be added to any of your orders going forward.</p>
                  <br />
                  <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-10%2Bat%2B12.05.06%2BPM.png' style={{ width: 900 }} />
                  <br /><br /><br />
                  <p>You can also click <strong>Deactivate</strong> after selecting any Field Types you don't need anymore. After deactivating and saving at least one Field Type, clicking the <strong>Show Inactive</strong> button will show all Field Type configurations, active and deactivated. <br /><strong>Note:</strong> If you deactivate any Field Type, it will be removed from:</p>
                  <ul>
                    <li>orderbot filter dropdown</li>
                    <li>orderbot action dropdown</li>
                    <li>order custom field value dropdown</li>
                    <li>order import field dropdown</li>
                    <li>order export field dropdown</li>
                    <li>
                      <p>order grid<br />It will remain visible (if your team already configured it) in:</p>
                      <ul>
                        <li>order import field grid</li>
                        <li>order export field grid</li>
                        <li>orderbot action</li>
                        <li>orderbot filter</li>
                        <li>order with a Field Value</li>
                      </ul>
                    </li>
                  </ul>
              </li>
              <li>
                <p>Click <strong>Save</strong>.</p>
              </li>
              <li>
                <p>Click the <strong>Add Field</strong> dropdown menu to add Custom Field(s) to your order. You can also use the search option to find the specific Field Type you want to add. Once you select a Field Type, it will be added as a row. At that point, fill in the <strong>Value</strong> field, then click <strong>Save</strong>.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-10%2Bat%2B12.05.28%2BPM.png' style={{ width: 900 }} />
                <br /><br /><br />
              </li>
              <li>
                <p>After Saving, if you created any Field Types that you indicated should "Show On Grid", <strong>you will need to refresh the Orders module</strong> before you can see the new columns you created in the "grid" view. New columns will always be the last column in the view, so you will need to scroll all the way to the right to view new columns. Learn how to <a href="" className='helplink'>customize the order of your columns here</a>.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-11%2Bat%2B11.17.10%2BPM.png' style={{ width: 700 }} />
                <br /><br /><br />
              </li>
            </ol>
            <p><i>This example shows the Orders Module view after customizing columns to have a Custom Field column populate as the third column.</i></p>
            <br />
            <h1>Related Uses</h1>
            <p>You can both Export and Import Custom Field Types for orders as configured "Data Fields" in your Export/Import order configuration settings from the Orders module only.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-10%2Bat%2B12.32.21%2BPM.png' style={{ width: 1000 }} />
            <br /><br /><br />
            <p>You can set up orderbots that filter for your Custom Field Types and the values they have. The orderbot filter name will simply be the name of your Custom Field Type.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-10%2Bat%2B12.32.59%2BPM.png' style={{ width: 1000 }} />
            <br /><br /><br />
            <p>In this example, "Flammable", "Radioactive", "Frozen", and "Bottled" are all Custom Field Types.</p>
            <br />
            <p>You can also set up orderbots where the action is to set a Custom Field Value. The action name would be Set <strong>'Your Field Type'</strong>. This will allow you to automate your new column values with a specific value, based on whatever filters make sense for your workflow.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-12%2Bat%2B11.14.24%2BAM.png' style={{ width: 800 }} />
            <br /><br /><br />
            <p>If you need assistance with setting up a new orderbot workflow, you can reach out to your Account Manager or the Support Team.</p>
          </Card>
        </Col>
      </Row>

      <br />
      {/* Orderbot: Split Order by Available Stock */}
      <h2>Orders {'>'} Orderbot: Split Order by Available Stock</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Split by Available Stock</h1>
            <p>This orderbot will split the order's items so that in-stock items are on one order and any out-of-stock order items are split onto another order to remain in Unresolved {'>'} Out of Stock status. The in-stock orders can be fulfilled while the out-of-stock orders wait until inventory is available.</p>
            <ul>
              <li>
                <p><strong>Split by item</strong></p>
                <ol>
                  <li>
                    <p>Order items will be allocated to the default warehouse. Stop if an order is awaiting shipment.</p>
                  </li>
                  <li>
                    <p>Out-of-stock items will be split from the source order.</p>
                  </li>
                  <li>
                    <p>The split order fulfillment warehouse will be set to the first-ranked backup warehouse. Items will be allocated. Stop if the order is awaiting shipment.</p>
                  </li>
                  <li>
                    <p>Go to Step 2, and continue to split and allocate orders.</p>
                  </li>
                </ol>
              </li>
              <li>
                <p><strong>Split by SKU</strong></p>
                <ol>
                  <li>
                    <p>Order items will be allocated to the default warehouse. Stop if an order is awaiting shipment.</p>
                  </li>
                  <li>
                    <p>Out-of-stock item quantities will be split from the source order. This could result in splitting one line item into several for the same SKU and in different split orders.</p>
                  </li>
                  <li>
                    <p>The split order fulfillment warehouse will be set to the first-ranked backup warehouse. Items will be allocated. Stop if an order is awaiting shipment.</p>
                  </li>
                  <li>
                    <p>Go to step 2, and continue to split and allocate orders.</p>
                  </li>
                </ol>
              </li>
              <li>
                <p><strong>Split by item then split SKU</strong></p>
                <ol>
                  <li>
                    <p>Order allocated will follow the split by item logic first, then apply to remaining out-of-stock items with split by SKU logic.</p>
                  </li>
                </ol>
              </li>
              <li>
                <p><strong>Split by item grouped by SKU</strong></p>
                <ol>
                  <li>
                    <p>Order items with the same SKU will be grouped together and treated as one line item. These grouped items will be allocated to the default warehouse. Stop if an order is awaiting shipment.</p>
                  </li>
                  <li>
                    <p>Out-of-stock grouped item quantities will be split from the source order. If one of the line items before being grouped could have been fulfilled it will still split with the line item that could not.</p>
                  </li>
                  <li>
                    <p>The split order fulfillment warehouse will be set to the first-ranked backup warehouse. Items will be allocated. Stop if an order is awaiting shipment.</p>
                  </li>
                  <li>
                    <p>Go to step 2, and continue to split and allocate orders.</p>
                  </li>
                </ol>
              </li>
            </ul>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/split.png' style={{ width: 1000 }} />
          </Card>
        </Col>
      </Row>

      <br />
      {/* Missing Stock Location and Configuring Inventory */}
      <h2>Orders {'>'} Missing Stock Location and Configuring Inventory</h2>
      <Row>
        <Col span={24}>
          <Card>
            <p>When orders are in the <strong>Missing Stock Location</strong> status, this means that the stock for the order does not have a pick location, or simply it is sitting in an 'Unconfigured Stock' status.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504004/orders__27_.PNG' style={{ width: 1000 }} />
            <br /><br /><br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504005/image__10_.png' style={{ width: 1000 }} />
            <br /><br /><br />
            <Divider />
            <h1>To configure stock for an in-house warehouse:</h1>
            <p>Navigate to the Inventory module and search for your affected product. Select your product and click on <strong>New Stock</strong> and you will see a pop-up window where you can enter in the pick location of this product, check/uncheck whether or not this product is pickable or receivable, and configure the quantity of on-hand stock and the minimum stock level for this product.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504007/image__11_.png' style={{ width: 1000 }} />
            <br /><br /><br />
            <ul>
              <li>
                <p><strong>Location</strong> can get as granular or as simple as you would like it to be. For example, aisle 1, shelf 13, bin 56 can be A1S13B56. This is for internal purposes.</p>
              </li>
              <li>
                <p><strong>Is Pickable?</strong> is asking if this product can be picked from this location. If you uncheck this box, this product cannot be picked from the in-house warehouse, and therefore the order cannot be fulfilled.</p>
              </li>
              <li>
                <p><strong>Is Receivable?</strong> is for receiving inventory from your purchase orders once they arrive at the warehouse. If you uncheck this box, this product cannot be received to this location when ordering. In order to receive stock replenishment for this product, this must be checked.</p>
              </li>
              <li>
                <p><strong>Stock: On Hand</strong> will update how many units are currently at that particular location</p>
              </li>
              <li>
                <p><strong>Min. Level</strong> allows you to set a minimum level alert for specific locations at a warehouse. This is independent from the Warehouse Min. Level</p>
              </li>
            </ul>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504008/inventory__29_.PNG' style={{ width: 400 }} />
            <br /><br /><br />
            <p>Once this is done, and you click <strong>Continue</strong>, you will see:</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504010/inventory__30_.PNG' style={{ width: 400 }} />
            <br /><br /><br />
            <p><i>Notice here that this is talking about the draw order, or being assigned as the primary draw rank.</i></p>
            <p><strong>Draw Rank</strong> refers to the location order from which this product will be picked; "Pick this item from location x, and once it runs out, pick from <i>location y</i>"</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504013/inventory__31_.PNG' style={{ width: 700 }} />
            <br /><br /><br />
            <p>If everything seems to be in order, click <strong>Save</strong>, and your stock will have been configured for the selected warehouse.</p>
            <p><i>*For every location that this product is in, it is important to configure the stock for all of these locations. Can be done manually through the UI or in bulk through spreadsheets.</i></p>
          </Card>
        </Col>
      </Row>

      <br />
      {/* Downloading and Printing Pick Lists */}
      <h2>Orders {'>'} Downloading and Printing Pick Lists</h2>
      <Row>
        <Col span={24}>
          <Card>
            <p>A pick list can be printed in Extensiv Order Manager as soon as the order is created, whether the order is downloaded from the sales channel or manually created within the Extensiv Order Manager UI.</p>
            <p>There are two different types of Pick Lists that can be generated in Extensiv Order Manager:</p>
            <ol>
              <li>
                <p>Pick List - A single pick list for an individual order</p>
              </li>
              <li>
                <p>Global Pick List - A single pick list which will contain all items to be picked from a selected group of orders</p>
              </li>
            </ol>
            <p>To print a pick list, follow the steps below:</p>
            <ol>
              <li>
                <p>Click the <i><strong>Orders</strong></i> Module on the Toolbar, select <i><strong>Awaiting Shipment</strong></i> on the <strong>Search/Filter</strong> panel. Then select the order or group of orders you wish to print the pick list(s) for.</p>
              </li>
              <li>
                <p>Click the <i><strong>Print dropdown</strong></i>, then <i><strong>Pick List(s)</strong></i> or <i><strong>Global Pick List</strong></i>.Depending on your desktop or browser settings, this opens the pick list as a PDF file either on another browser window, or on your PDF viewer.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503295/orders__13_.PNG' style={{ width: 800 }} />
                <br /><br /><br />
                <p>If the pick list opens in another browser window:<br />To print it, click the <i><strong>Print</strong></i> button, then follow the instructions that appear on screen.<br />To save a PDF copy of the file, click the <i><strong>Download</strong></i> button, then follow the instructions that appear on screen.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503297/image__3_.png' style={{ width: 800 }} />
                <br /><br /><br />
                <p>If the pick list opens on your PDF viewer, use the program's <strong>Print</strong> feature to print it, or the <strong>Save</strong> feature to save it to your computer.</p>
              </li>
              <li>
                <p>Once printing and/or saving is completed, close the browser window.</p>
              </li>
            </ol>
          </Card>
        </Col>
      </Row>

      <br />
      {/* Resolving an Order in Missing Product Information Status */}
      <h2>Orders {'>'} Resolving an Order in Missing Product Information Status</h2>
      <Row>
        <Col span={24}>
          <Card>
            <p>Orders in <i><strong>Missing Product Info</strong></i> status mean one of two things:</p>
            <ol>
              <li>
                <p>The listing SKU for the channel is not tied to the product in Extensiv Order Manager, or</p>
              </li>
              <li>
                <p>The product does not exist in Extensiv Order Manager</p>
              </li>
            </ol>
            <p>If you are missing multiple products on the orders in Missing Product Info status, best practice would be to import those products via the <a href="" className='helplink'>Product Spreadsheet bulk upload</a>. Once these products are created in Extensiv Order Manager, the orders will resolve themselves and move into the next status.</p>
            <p>If there are only a few missing products on the orders, follow the steps below to resolve:</p>
            <ol>
              <li>
                <p>Select the order</p>
              </li>
              <li>
                <p>Click on the link <strong>(Not found! Click to resolve.)</strong> that proceeds “Master SKU”</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503247/orders__5_.PNG' style={{ width: 800 }} />
                <br /><br /><br />
              </li>
              <li>
                <p>Select the first option and search to see if you can find that product in Extensiv Order Manager. If you can select the product and press save.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503249/orders__6_.PNG' style={{ width: 300 }} />
                <br /><br /><br />
                <p>If you cannot press cancel and select the second option <strong>(+)</strong> to add the product to Extensiv Order Manager.</p>
                <br />
                <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503251/orders__7_.PNG' style={{ width: 300 }} />
                <br /><br /><br />
                <Alert
                    message="NOTE"
                    description="Name, Brand and Master SKU are required to create a product."
                    type="info"
                />
              </li>
            </ol>
          </Card>
        </Col>
      </Row>
    </>
  );
};
