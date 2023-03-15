import { Alert, Card, Col, Divider, Row } from 'antd';

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
            />
            <br />
            <p>
              To set customs information, open the order edit window by clicking on an order number hyperlink. Then click on the
              Customs tab.
            </p>
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/customs.png"
              style={{ width: 800 }}
            />
            <br />
            <br />
            <p>
              Choose the Package Contents and Non-Delivery Instructions, and add a declaration for each item in the order,
              including:
            </p>
            <br />
            <table>
              <tbody>
                <tr>
                  <td>
                    <strong>Field Name</strong>
                  </td>
                  <td>
                    <strong>Description</strong>
                  </td>
                  <td>
                    <strong>Example</strong>
                  </td>
                </tr>
                <tr>
                  <td>Item Description</td>
                  <td>Brief explanation of product</td>
                  <td>Vacuum Filter</td>
                </tr>
                <tr>
                  <td>Harmonization Code</td>
                  <td>Universal System/code to determine how much duty is needed to pay on the item</td>
                  <td>
                    <a href="https://hts.usitc.gov/" className="helplink">
                      https://hts.usitc.gov
                    </a>
                  </td>
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
            <p>
              <a
                href="https://www.trade.gov/harmonized-system-hs-codes#:~:text=System%20(HS)%20Codes-,Harmonized%20System%20(HS)%20Codes,the%20export%20process%20for%20goods.&text=The%20United%20States%20uses%20a,digits%20being%20the%20HS%20number."
                className="helplink"
              >
                More information on Harmonization Codes
              </a>
            </p>
            <p>
              <a href="https://hts.usitc.gov/" className="helplink">
                Find a Harmonization Code
              </a>
            </p>
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/customs2.PNG"
              style={{ width: 600 }}
            />
            <br />
            <br />
            <p>
              You can also add customs information to products directly in the{' '}
              <a href="/help/products/createproducts" className="helplink">
                <strong>Products</strong> Module
              </a>{' '}
              so that this information automatically populates when an international order is placed. You can do this in bulk via
              the Customs tab on the Product Import Template spreadsheet or in the Order Manager UI by clicking on a Master SKU in
              the Products module and going to the Customs tab.
            </p>
            <Divider />
            {/* Printing Customs Forms */}
            <h1>Printing Customs Forms</h1>
            <p>
              By default, when printing shipping labels for orders that required Customs to be submitted, Customs forms will
              automatically be included with the shipping label.
            </p>
            <p>
              Alternatively, you can also print Customs Forms separately from shipping labels.{' '}
              <i>
                Please contact your Customer Success Manager or reach out to Support team to have this feature enabled for your
                account.
              </i>
            </p>
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/custom_20forms-Dec-08-2021-10-56-15-60-AM.png"
              style={{ width: 200 }}
            />
            <br />
            <br />
            <p>
              In the Shipments and Orders modules, you will be able to print customs forms for shipped international orders.{' '}
              <strong>This is supported for in-house shipments processed natively in Order Manager, through FedEx & UPS</strong>.
              They will always print as 8.5x11 PDFs.{' '}
              <strong>
                You can select multiple international shipments at a time to print customs forms for them in one PDF.
              </strong>
            </p>
            <p>Endicia does not support the printing of customs forms separately at this time (it is a deprecated feature).</p>
            <p>See the below articles for information on ETD documents options:</p>
            <ul>
              <li>
                <p>
                  <a href="https://help.extensiv.com/om-settings-shipping-providers/fedex-etd" className="helplink">
                    FedEx ETD
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://help.extensiv.com/om-orders/ups-electronic-customs-documents-etd-commercial-invoices"
                    className="helplink"
                  >
                    UPS ETD
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="https://help.extensiv.com/om-orders/dhl-ecommerce-integration-specifics" className="helplink">
                    DHL eCommerce ETD
                  </a>
                </p>
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
                <p>
                  Navigate to the <strong>Orders</strong> module.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders%2B_48_.png"
                  style={{ width: 1000 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  By default, the <strong>Orders</strong> module displays the orders that are Awaiting Shipment. Using the Select
                  All option in the topmost row or by checking individual orders' checkboxes, select the orders you want to edit,
                  or use the <strong>search feature</strong> to narrow down your view to a group of orders you want to view and
                  edit.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-16%2Bat%2B4.58.55%2BPM.png"
                  style={{ width: 1000 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  When you select two or more orders, the <strong>Order Fulfillment</strong> panel on the right-hand side of the
                  page will display a <strong>Bulk Update</strong> dropdown menu, from which you can select the order information
                  you want to edit. Select the information you want to update in bulk, then specify the menu options you want.
                  <br />
                  <strong>Example</strong>: To update the warehouse assignment for the orders selected, choose{' '}
                  <strong>Fulfillment Type</strong> from the menu, then select the desired options from the{' '}
                  <strong>Fulfillment</strong> and <strong>Source</strong> lists.{' '}
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-16%2Bat%2B5.04.18%2BPM.png"
                  style={{ width: 300 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Click <strong>Update Selected Orders</strong>.
                </p>
              </li>
              <li>
                <p>
                  The selected option(s) will now populate in the corresponding fields within the orders'{' '}
                  <strong>Processing</strong> tabs
                </p>
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
            <p>
              In the Orders Module, you can customize which columns you want to view and the order in which they appear. Once
              saved, the UI will continue to show your customized view when you access the Orders Module. This feature is
              currently only available in the Order Module.
            </p>
            <ol>
              <li>
                <p>
                  In the Orders Module, select the center chart icon shown below to "<strong>Choose Columns</strong>".
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders%2B_49_.png"
                  style={{ width: 800 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Adjusting the width of a column will is not a permanent action - column width will reset each time the Orders
                  Module is refreshed.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders1%2B_10_.PNG"
                  style={{ width: 600 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Customizing your view will not affect the settings of anyone else at your company, it is customized to your
                  username!
                </p>
              </li>
              <li>
                <p>
                  If a column is not shown under the list of the 41 available columns, it is not an option to add, remove, or
                  customize. The only exception to this rule are Custom Fields.
                </p>
              </li>
            </ol>
            <Alert
              message="NOTES"
              description={
                <ul>
                  <li>
                    <p>
                      Adjusting the width of a column will is not a permanent action - column width will reset each time the
                      Orders Module is refreshed.
                    </p>
                  </li>
                  <li>
                    <p>
                      Customizing your view will not affect the settings of anyone else at your company, it is customized to your
                      username!
                    </p>
                  </li>
                  <li>
                    <p>
                      If a column is not shown under the list of the 41 available columns, it is not an option to add, remove, or
                      customize. The only exception to this rule are Custom Fields.
                    </p>
                  </li>
                </ul>
              }
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
            <p>
              Within Extensiv Order Manager, you are able to create a <strong>manual order</strong> to account for any orders that
              come from outside your integrated sales channels.
            </p>
            <p>
              To do this, you will need to add listing SKUs for your <strong>manual channel</strong> to your Master SKUs in your
              product catalog. Go to your products module and click on the <strong>“Import/Export”</strong> button on the top menu
              bar. Select <strong>“Import listing SKUs”</strong> from the dropdown.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders%2B_1_.png"
              style={{ width: 400 }}
            />
            <br />
            <br />
            <br />
            <p>
              This will open a new window. Download the Excel Template for listing SKU import. Input your Master SKUs and Listing
              SKUs into the appropriate columns. Since this is not an actual external sales channel, you can make the listing SKUs
              whatever you’d like – the easiest solution would be to just copy and paste your Master SKUs. Select{' '}
              <strong>“Manual Orders”</strong> from the sales channel dropdown and import the excel file back into Extensiv Order
              Manager.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders1.png"
              style={{ width: 600 }}
            />
            <br />
            <br />
            <br />
            <p>
              Once you have attached your manual channel listing SKUs to your Master SKUs you can now create a{' '}
              <strong>manual order</strong>.
            </p>
            <p>
              To do this, go to your Orders Module and click on <strong>“+New Order”</strong>. Select{' '}
              <strong>“manual order”</strong> from the dropdown.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders2%2B_1_.png"
              style={{ width: 800 }}
            />
            <br />
            <br />
            <br />
            <p>A new window will open where you can fill in the details of your manual order. These fields are required:</p>
            <ul>
              <li>Customer Name</li>
              <li>Address</li>
              <li>City, State, Zip</li>
              <li>Phone Number</li>
              <li>Order Number</li>
            </ul>
            <p>
              You can search for items and add them to the order in the dropdown under “add item”. Click save and a new manual
              order will be created.
            </p>
            <p>
              <strong>Note:</strong> If you see an automatically populated order number, this is likely due to your{' '}
              <a href="" className="helplink">
                manual channel settings
              </a>{' '}
              to set a prefix and order number for this channel.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders3.png"
              style={{ width: 700 }}
            />
            <br />
            <br />
            <br />
            <p>
              You can also import manual orders in bulk. Click on the <strong>“Import/Export”</strong> button in the top menu bar
              and select <strong>“Import Orders”</strong> from the dropdown. This will open up a new window where can upload your
              manual order import file.
            </p>
            <p>
              You must configure your import settings with the necessary fields first before uploading the file. You can create as
              many different import settings and customer format files as you need for each manual import.
            </p>
            <p>
              To configure new settings, click on the <strong>“Configure”</strong> button in the Manual Order Import window:
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders4%2B_1_.png"
              style={{ width: 600 }}
            />
            <br />
            <br />
            <br />
            <p>
              This will open a new window that contains all your pre-configured settings. To edit the settings you have already
              created, click on the little <strong>“wrench”</strong> symbol next to the settings. To create new settings, click on
              the <strong>“New Settings”</strong> button on top.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders5%2B_1_.png"
              style={{ width: 300 }}
            />
            <br />
            <br />
            <br />
            <p>
              You will be prompted with a new window titled <strong>“New Import Settings”</strong>. Give your new settings a name
              and select the appropriate file configuration options.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders6.png"
              style={{ width: 700 }}
            />
            <br />
            <br />
            <br />
            <p>
              On the right-hand side of this window, you will be able to select which <strong>import fields</strong> you’d like to
              include for this import file. Select the data field from the drop-down menu and input the corresponding column name
              on the right. The column name must match exactly what you have titled in your import file. Click{' '}
              <strong>“Save”</strong> once completed.
            </p>
            <p>
              This will bring you back to the original Manual Order Import window. Select the appropriate import settings you just
              created from the <strong>“Import Settings”</strong> dropdown, select the correct manual sales channel (if you have
              more than one), and upload your file.
            </p>
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
                <p>
                  On the top Toolbar, click the <strong>Orders</strong> module.
                </p>
              </li>
              <li>
                <p>
                  On the left navigation pane, click the <strong>Cancelled</strong> status and select a sub menu item to view
                  canceled orders.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504830/orders1__7_.png"
                  style={{ width: 200 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  On the <strong>Orders</strong> panel in the center, select the order to be restored, then click the{' '}
                  <strong>Restore</strong> button.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504831/orders1__8_.png"
                  style={{ width: 800 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  On the <strong>Restore Orders</strong> window, click the <strong>Yes - Restore</strong> button to confirm the
                  restoration of the order.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504832/orders1__9_.png"
                  style={{ width: 400 }}
                />
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
                <p>
                  You can choose which{' '}
                  <a href="" className="helplink">
                    Manual Channel
                  </a>{' '}
                  the clone will be created under if you have multiple.
                </p>
              </li>
              <li>
                <p>
                  Orderbots will apply to clone orders if the orderbots' filters are met. The orderbots that apply to your clone
                  are not necessarily the same ones that would have applied to the original order. One example of this would be an
                  orderbot with a filter of "Sales Channel" would not be met if the sales channel sought was not the manual
                  channel your clone was created under.
                </p>
              </li>
              <li>
                <p>
                  Channel updates (tracking, etc.) will NOT be made to the original sales channel for the clone order. This is
                  because your clone is an entirely new and separate order, and has no logical attachment to the original order.
                </p>
              </li>
            </ul>
            <br />
            <Alert
              message="Note"
              description={
                <p>
                  If you need to clone multiple orders at once, you should use the Orders Module's import and export features to
                  export existing order info, then format that data to{' '}
                  <a href="" className="helplink">
                    import orders via spreadsheet
                  </a>
                  .
                </p>
              }
            />
            <br />
            <h1>How to Duplicate an Order</h1>
            <ol>
              <li>
                <p>Select the order you want to duplicate in the Orders Module.</p>
              </li>
              <li>
                <p>
                  Click the Edit dropdown menu, then select the <strong>Duplicate Order</strong> option.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-04%2Bat%2B11.57.57%2BAM%2B_1_.png"
                  style={{ width: 1000 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Confirm the Order Number, Fulfillment Type, Warehouse Assignment, and Manual Channel you want the order created
                  under. Then click <strong>Continue</strong>.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504831/orders1__8_.png"
                  style={{ width: 800 }}
                />
                <br />
                <br />
                <br />
                <Alert
                  message="Note"
                  description={
                    <p>
                      If orderbots apply to your clone order upon creation, the Fulfillment Type and/or Warehouse you select here
                      can be overridden.
                    </p>
                  }
                />
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/6c302ee7-c62d-42ed-aaa7-a32966f569be.png"
                  style={{ width: 800 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  The next prompt will be pre-filled with information from your original order and the previous prompt. You can
                  edit these inputs or click <strong>Save</strong> to create the clone.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B6.png"
                  style={{ width: 1000 }}
                />
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
            <p>
              Extensiv Order Manager now allows users to apply actions to existing orders in bulk. This includes the ability to
              run a search, select one or more orders from the search results, and then apply updates to those orders at the same
              time, instead of only allowing users to edit one search result at a time.
            </p>
            <h1>How to Apply Actions to Orders in Bulk</h1>
            <ol>
              <li>
                <p>
                  Navigate to the <strong>Orders</strong> module. By default, the Orders module displays the orders that are
                  Awaiting Shipment. You can use the <strong>search feature</strong> to narrow down your view to a group of orders
                  you want to view and edit. <br />
                  Either click the <strong>Select All</strong> option in the topmost row or select the individual checkboxes for
                  the orders you want to edit.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-12%2Bat%2B11.14.24%2BAM.png"
                  style={{ width: 800 }}
                />
                <br />
                <br />
                <br />
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-16%2Bat%2B6.33.35%2BPM.png"
                  style={{ width: 800 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Now click the <strong>Edit</strong> dropdown menu and select from your options.{' '}
                  <i>
                    <strong>The options you see will depend on the Order Status of the orders you selected.</strong>
                  </i>
                </p>
                <ol>
                  <li>
                    <p>
                      <strong>Hold Until:</strong> Choose the calendar date you want to hold orders for in the On Hold order
                      status. They will automatically "restore" to their former order status when that date arrives. You will be
                      prompted with a confirmation window before the orders are put on hold.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Cancel Order:</strong> Select this if you want all orders you selected to be canceled. You will
                      still be prompted to confirm the cancellation options before you submit that action.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Assign To:</strong> Select this if you want all orders you selected to be assigned to the user you
                      indicate.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Mark Shipped:</strong> This option will mark shipped any unshipped orders you selected that{' '}
                      <i>are not Unresolved</i>.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Split Order:</strong> This option will not split orders in bulk. Skip this option.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Duplicate Order:</strong>{' '}
                      <a href="" className="helplink">
                        This option
                      </a>{' '}
                      will not duplicate orders in bulk. This action can only be done for one order at a time.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Restore: </strong> Will return the orders to their former status. <br />
                      <strong>Note:</strong> If you have selected more than one order in Canceled and/or On Hold status, then you
                      should also see the option to <strong>Restore</strong>. This button doesn't live under the Edit dropdown
                      menu, it will just appear as its own option.
                    </p>
                  </li>
                </ol>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-16%2Bat%2B6.25.47%2BPM.png"
                  style={{ width: 800 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Select the available action option of your choice, then submit the confirmation if the prompt confirms the
                  action you want to take.
                </p>
                <br />
              </li>
            </ol>
            <p>
              After refreshing the orders grid, you should see the edits you just made in bulk. Your current view will refresh if
              the orders you updated no longer qualify for the search you submitted.
            </p>
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
                <p>
                  This feature allows Extensiv Order Manager users to create Order Field "Types" and "Values" which give users the
                  ability to create new columns in the Orders Module for the first time.
                </p>
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
                <p>
                  You can also include custom fields in order imports and exports, as well as automate them via orderbot actions.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-12%2Bat%2B10.23.08%2BAM.png"
                  style={{ width: 900 }}
                />
                <br />
                <br />
                <br />
              </li>
            </ul>
            <h1>How to Add a Custom Field to an Order</h1>
            <ol>
              <li>
                <p>
                  Navigate to the <strong>Orders</strong> module and open up any unshipped order by clicking on an order number.
                </p>
              </li>
              <li>
                <p>
                  In the order edit window, select the <strong>Fields</strong> tab. By default, this will be empty
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-10%2Bat%2B12.01.32%2BPM.png"
                  style={{ width: 900 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  If this is your first time using Field Types, or if you want to create a new Field Type that doesn't already
                  exist, click the <strong>Configure Field Types</strong> button in the upper-right corner of the edit window.
                </p>
              </li>
              <li>
                <p>
                  In the <strong>Configure Field Definitions</strong> pop-up window, you can click <strong>New Field Type</strong>{' '}
                  to configure as many new field types as you want. To configure a Field Type, give it a <strong>Name</strong>,
                  brief <strong>Description</strong>, and indicate whether or not you want this Field Type to "Show On Grid",
                  meaning that you want it to show up as a new column in the Orders module, shown amongst the default columns,
                  like Order Number, Labels, Notes, Order Date, Recipient, etc. The Orders module column will be titled with the
                  value you set in the <strong>Name</strong> column and new columns will appear after refreshing the Orders Module
                  after saving all of your edits. Once a Field Type is configured here, it will be available as a Field Type that
                  can be added to any of your orders going forward.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-10%2Bat%2B12.05.06%2BPM.png"
                  style={{ width: 900 }}
                />
                <br />
                <br />
                <br />
                <p>
                  You can also click <strong>Deactivate</strong> after selecting any Field Types you don't need anymore. After
                  deactivating and saving at least one Field Type, clicking the <strong>Show Inactive</strong> button will show
                  all Field Type configurations, active and deactivated. <br />
                  <strong>Note:</strong> If you deactivate any Field Type, it will be removed from:
                </p>
                <ul>
                  <li>orderbot filter dropdown</li>
                  <li>orderbot action dropdown</li>
                  <li>order custom field value dropdown</li>
                  <li>order import field dropdown</li>
                  <li>order export field dropdown</li>
                  <li>
                    <p>
                      order grid
                      <br />
                      It will remain visible (if your team already configured it) in:
                    </p>
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
                <p>
                  Click <strong>Save</strong>.
                </p>
              </li>
              <li>
                <p>
                  Click the <strong>Add Field</strong> dropdown menu to add Custom Field(s) to your order. You can also use the
                  search option to find the specific Field Type you want to add. Once you select a Field Type, it will be added as
                  a row. At that point, fill in the <strong>Value</strong> field, then click <strong>Save</strong>.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-10%2Bat%2B12.05.28%2BPM.png"
                  style={{ width: 900 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  After Saving, if you created any Field Types that you indicated should "Show On Grid",{' '}
                  <strong>you will need to refresh the Orders module</strong> before you can see the new columns you created in
                  the "grid" view. New columns will always be the last column in the view, so you will need to scroll all the way
                  to the right to view new columns. Learn how to{' '}
                  <a href="" className="helplink">
                    customize the order of your columns here
                  </a>
                  .
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-11%2Bat%2B11.17.10%2BPM.png"
                  style={{ width: 700 }}
                />
                <br />
                <br />
                <br />
              </li>
            </ol>
            <p>
              <i>
                This example shows the Orders Module view after customizing columns to have a Custom Field column populate as the
                third column.
              </i>
            </p>
            <br />
            <h1>Related Uses</h1>
            <p>
              You can both Export and Import Custom Field Types for orders as configured "Data Fields" in your Export/Import order
              configuration settings from the Orders module only.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-10%2Bat%2B12.32.21%2BPM.png"
              style={{ width: 1000 }}
            />
            <br />
            <br />
            <br />
            <p>
              You can set up orderbots that filter for your Custom Field Types and the values they have. The orderbot filter name
              will simply be the name of your Custom Field Type.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-10%2Bat%2B12.32.59%2BPM.png"
              style={{ width: 1000 }}
            />
            <br />
            <br />
            <br />
            <p>In this example, "Flammable", "Radioactive", "Frozen", and "Bottled" are all Custom Field Types.</p>
            <br />
            <p>
              You can also set up orderbots where the action is to set a Custom Field Value. The action name would be Set{' '}
              <strong>'Your Field Type'</strong>. This will allow you to automate your new column values with a specific value,
              based on whatever filters make sense for your workflow.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-12%2Bat%2B11.14.24%2BAM.png"
              style={{ width: 800 }}
            />
            <br />
            <br />
            <br />
            <p>
              If you need assistance with setting up a new orderbot workflow, you can reach out to your Account Manager or the
              Support Team.
            </p>
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
            <p>
              This orderbot will split the order's items so that in-stock items are on one order and any out-of-stock order items
              are split onto another order to remain in Unresolved {'>'} Out of Stock status. The in-stock orders can be fulfilled
              while the out-of-stock orders wait until inventory is available.
            </p>
            <ul>
              <li>
                <p>
                  <strong>Split by item</strong>
                </p>
                <ol>
                  <li>
                    <p>Order items will be allocated to the default warehouse. Stop if an order is awaiting shipment.</p>
                  </li>
                  <li>
                    <p>Out-of-stock items will be split from the source order.</p>
                  </li>
                  <li>
                    <p>
                      The split order fulfillment warehouse will be set to the first-ranked backup warehouse. Items will be
                      allocated. Stop if the order is awaiting shipment.
                    </p>
                  </li>
                  <li>
                    <p>Go to Step 2, and continue to split and allocate orders.</p>
                  </li>
                </ol>
              </li>
              <li>
                <p>
                  <strong>Split by SKU</strong>
                </p>
                <ol>
                  <li>
                    <p>Order items will be allocated to the default warehouse. Stop if an order is awaiting shipment.</p>
                  </li>
                  <li>
                    <p>
                      Out-of-stock item quantities will be split from the source order. This could result in splitting one line
                      item into several for the same SKU and in different split orders.
                    </p>
                  </li>
                  <li>
                    <p>
                      The split order fulfillment warehouse will be set to the first-ranked backup warehouse. Items will be
                      allocated. Stop if an order is awaiting shipment.
                    </p>
                  </li>
                  <li>
                    <p>Go to step 2, and continue to split and allocate orders.</p>
                  </li>
                </ol>
              </li>
              <li>
                <p>
                  <strong>Split by item then split SKU</strong>
                </p>
                <ol>
                  <li>
                    <p>
                      Order allocated will follow the split by item logic first, then apply to remaining out-of-stock items with
                      split by SKU logic.
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <p>
                  <strong>Split by item grouped by SKU</strong>
                </p>
                <ol>
                  <li>
                    <p>
                      Order items with the same SKU will be grouped together and treated as one line item. These grouped items
                      will be allocated to the default warehouse. Stop if an order is awaiting shipment.
                    </p>
                  </li>
                  <li>
                    <p>
                      Out-of-stock grouped item quantities will be split from the source order. If one of the line items before
                      being grouped could have been fulfilled it will still split with the line item that could not.
                    </p>
                  </li>
                  <li>
                    <p>
                      The split order fulfillment warehouse will be set to the first-ranked backup warehouse. Items will be
                      allocated. Stop if an order is awaiting shipment.
                    </p>
                  </li>
                  <li>
                    <p>Go to step 2, and continue to split and allocate orders.</p>
                  </li>
                </ol>
              </li>
            </ul>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/split.png"
              style={{ width: 1000 }}
            />
          </Card>
        </Col>
      </Row>

      <br />
      {/* Missing Stock Location and Configuring Inventory */}
      <h2>Orders {'>'} Missing Stock Location and Configuring Inventory</h2>
      <Row>
        <Col span={24}>
          <Card>
            <p>
              When orders are in the <strong>Missing Stock Location</strong> status, this means that the stock for the order does
              not have a pick location, or simply it is sitting in an 'Unconfigured Stock' status.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504004/orders__27_.PNG"
              style={{ width: 1000 }}
            />
            <br />
            <br />
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504005/image__10_.png"
              style={{ width: 1000 }}
            />
            <br />
            <br />
            <br />
            <Divider />
            <h1>To configure stock for an in-house warehouse:</h1>
            <p>
              Navigate to the Inventory module and search for your affected product. Select your product and click on{' '}
              <strong>New Stock</strong> and you will see a pop-up window where you can enter in the pick location of this
              product, check/uncheck whether or not this product is pickable or receivable, and configure the quantity of on-hand
              stock and the minimum stock level for this product.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504007/image__11_.png"
              style={{ width: 1000 }}
            />
            <br />
            <br />
            <br />
            <ul>
              <li>
                <p>
                  <strong>Location</strong> can get as granular or as simple as you would like it to be. For example, aisle 1,
                  shelf 13, bin 56 can be A1S13B56. This is for internal purposes.
                </p>
              </li>
              <li>
                <p>
                  <strong>Is Pickable?</strong> is asking if this product can be picked from this location. If you uncheck this
                  box, this product cannot be picked from the in-house warehouse, and therefore the order cannot be fulfilled.
                </p>
              </li>
              <li>
                <p>
                  <strong>Is Receivable?</strong> is for receiving inventory from your purchase orders once they arrive at the
                  warehouse. If you uncheck this box, this product cannot be received to this location when ordering. In order to
                  receive stock replenishment for this product, this must be checked.
                </p>
              </li>
              <li>
                <p>
                  <strong>Stock: On Hand</strong> will update how many units are currently at that particular location
                </p>
              </li>
              <li>
                <p>
                  <strong>Min. Level</strong> allows you to set a minimum level alert for specific locations at a warehouse. This
                  is independent from the Warehouse Min. Level
                </p>
              </li>
            </ul>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504008/inventory__29_.PNG"
              style={{ width: 400 }}
            />
            <br />
            <br />
            <br />
            <p>
              Once this is done, and you click <strong>Continue</strong>, you will see:
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504010/inventory__30_.PNG"
              style={{ width: 400 }}
            />
            <br />
            <br />
            <br />
            <p>
              <i>Notice here that this is talking about the draw order, or being assigned as the primary draw rank.</i>
            </p>
            <p>
              <strong>Draw Rank</strong> refers to the location order from which this product will be picked; "Pick this item from
              location x, and once it runs out, pick from <i>location y</i>"
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504013/inventory__31_.PNG"
              style={{ width: 700 }}
            />
            <br />
            <br />
            <br />
            <p>
              If everything seems to be in order, click <strong>Save</strong>, and your stock will have been configured for the
              selected warehouse.
            </p>
            <p>
              <i>
                *For every location that this product is in, it is important to configure the stock for all of these locations.
                Can be done manually through the UI or in bulk through spreadsheets.
              </i>
            </p>
          </Card>
        </Col>
      </Row>

      <br />
      {/* Downloading and Printing Pick Lists */}
      <h2>Orders {'>'} Downloading and Printing Pick Lists</h2>
      <Row>
        <Col span={24}>
          <Card>
            <p>
              A pick list can be printed in Extensiv Order Manager as soon as the order is created, whether the order is
              downloaded from the sales channel or manually created within the Extensiv Order Manager UI.
            </p>
            <p>There are two different types of Pick Lists that can be generated in Extensiv Order Manager:</p>
            <ol>
              <li>
                <p>Pick List - A single pick list for an individual order</p>
              </li>
              <li>
                <p>
                  Global Pick List - A single pick list which will contain all items to be picked from a selected group of orders
                </p>
              </li>
            </ol>
            <p>To print a pick list, follow the steps below:</p>
            <ol>
              <li>
                <p>
                  Click the{' '}
                  <i>
                    <strong>Orders</strong>
                  </i>{' '}
                  Module on the Toolbar, select{' '}
                  <i>
                    <strong>Awaiting Shipment</strong>
                  </i>{' '}
                  on the <strong>Search/Filter</strong> panel. Then select the order or group of orders you wish to print the pick
                  list(s) for.
                </p>
              </li>
              <li>
                <p>
                  Click the{' '}
                  <i>
                    <strong>Print dropdown</strong>
                  </i>
                  , then{' '}
                  <i>
                    <strong>Pick List(s)</strong>
                  </i>{' '}
                  or{' '}
                  <i>
                    <strong>Global Pick List</strong>
                  </i>
                  .Depending on your desktop or browser settings, this opens the pick list as a PDF file either on another browser
                  window, or on your PDF viewer.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503295/orders__13_.PNG"
                  style={{ width: 800 }}
                />
                <br />
                <br />
                <br />
                <p>
                  If the pick list opens in another browser window:
                  <br />
                  To print it, click the{' '}
                  <i>
                    <strong>Print</strong>
                  </i>{' '}
                  button, then follow the instructions that appear on screen.
                  <br />
                  To save a PDF copy of the file, click the{' '}
                  <i>
                    <strong>Download</strong>
                  </i>{' '}
                  button, then follow the instructions that appear on screen.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503297/image__3_.png"
                  style={{ width: 800 }}
                />
                <br />
                <br />
                <br />
                <p>
                  If the pick list opens on your PDF viewer, use the program's <strong>Print</strong> feature to print it, or the{' '}
                  <strong>Save</strong> feature to save it to your computer.
                </p>
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
            <p>
              Orders in{' '}
              <i>
                <strong>Missing Product Info</strong>
              </i>{' '}
              status mean one of two things:
            </p>
            <ol>
              <li>
                <p>The listing SKU for the channel is not tied to the product in Extensiv Order Manager, or</p>
              </li>
              <li>
                <p>The product does not exist in Extensiv Order Manager</p>
              </li>
            </ol>
            <p>
              If you are missing multiple products on the orders in Missing Product Info status, best practice would be to import
              those products via the{' '}
              <a href="" className="helplink">
                Product Spreadsheet bulk upload
              </a>
              . Once these products are created in Extensiv Order Manager, the orders will resolve themselves and move into the
              next status.
            </p>
            <p>If there are only a few missing products on the orders, follow the steps below to resolve:</p>
            <ol>
              <li>
                <p>Select the order</p>
              </li>
              <li>
                <p>
                  Click on the link <strong>(Not found! Click to resolve.)</strong> that proceeds “Master SKU”
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503247/orders__5_.PNG"
                  style={{ width: 800 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Select the first option and search to see if you can find that product in Extensiv Order Manager. If you can
                  select the product and press save.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503249/orders__6_.PNG"
                  style={{ width: 300 }}
                />
                <br />
                <br />
                <br />
                <p>
                  If you cannot press cancel and select the second option <strong>(+)</strong> to add the product to Extensiv
                  Order Manager.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503251/orders__7_.PNG"
                  style={{ width: 300 }}
                />
                <br />
                <br />
                <br />
                <Alert message="Note" description="Name, Brand and Master SKU are required to create a product." />
              </li>
            </ol>
          </Card>
        </Col>
      </Row>

      <br />
      {/* Reprinting Shipping Labels */}
      <h2>Orders {'>'} Reprinting Shipping Labels</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Reprint Shipping Labels</h1>
            <p>
              To reprint a shipping label in Extensiv Order Manager, head to the <strong>Orders</strong> module.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504570/orders1__3_.png"
              style={{ width: 1000 }}
            />
            <br />
            <br />
            <br />
            <ol>
              <li>
                <p>
                  In the <strong>Orders</strong> module, search for the order or filter your view to only include orders in the{' '}
                  <strong>Shipped</strong> status. To learn more about searching for orders and/or filtering orders by status, see{' '}
                  <a href="" className="helplink">
                    How to Search and Filter Orders
                  </a>
                  .
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504592/orders1__4_.png"
                  style={{ width: 200 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  If you search for the order, click into the row. If you filtered orders by the Shipped status, select the
                  checkbox next to the order. Next, click the <strong>Print</strong> button and select <strong>Label(s)</strong>{' '}
                  from the dropdown.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504594/orders1__5_.png"
                  style={{ width: 800 }}
                />
                <br />
                <br />
                <br />
                <Alert
                  message="Note"
                  description="You cannot reprint shipping labels for FBA orders since these are generated by Amazon, not Extensiv Order Manager."
                />
                <br />
              </li>
              <li>
                <p>
                  The shipping label will open in a new browser window. From there, you can either print or download the label.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504595/orders1__6_.png"
                  style={{ width: 300 }}
                />
              </li>
            </ol>
          </Card>
        </Col>
      </Row>

      <br />
      {/* Manually Mark an Order as Shipped - Individually or in Bulk */}
      <h2>Orders {'>'} Manually Mark an Order as Shipped - Individually or in Bulk</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Manually Mark an Order as Shipped - Individually or in Bulk</h1>
            <p>
              Orders that are not processed through Extensiv Order Manager's Shipping module need to be manually marked as
              shipped. This feature can also be used for orders of digital products that do not need to have a physical shipment
              sent. You can make this edit on orders individually or in bulk.
            </p>
            <br />
            <Alert
              message="Note"
              description={
                <p>
                  Orders in Unresolved, Pending Multi-Channel Fulfillment, Shipped, On Hold, or Cancelled status{' '}
                  <strong>cannot</strong> be marked as shipped.
                </p>
              }
            />
            <br />
            <p>
              In addition, Extensiv Order Manager's <strong>External Shipment Import</strong> feature offers an alternative
              method, one that requires you to configure the name mappings for your sales channels and shipping carriers. To learn
              more about using the External Shipment Import feature to mark items as <i>shipped</i> in bulk, see{' '}
              <a href="" className="helplink">
                Importing External Shipments
              </a>
              .
            </p>
            <p>To manually mark an order as Shipped, follow the steps below:</p>
            <ol>
              <li>
                <p>
                  Go to the <strong>Orders</strong> Module.
                </p>
              </li>
              <li>
                <p>
                  By default, the <strong>Orders</strong> Module displays the orders that are awaiting shipment. Select the order
                  you want to mark as shipped using the checkboxes in the left-most column.{' '}
                  <strong>To Bulk Mark as Shipped</strong>, select more than one order. To select all orders, select the topmost
                  checkbox, in the Column Type row.
                  <br />
                  If the orders are <i>Awaiting Dropship</i> or <i>Awaiting 3PL Export</i>,click the corresponding status on the{' '}
                  <strong>Search/Filter</strong> pane on the left, then select the orders to be marked as shipped.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/markship.png"
                  style={{ width: 800 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Go to the Edit dropdown menu and click Mark <strong>‘Shipped.’</strong>
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/markship2.png"
                  style={{ width: 600 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  On the <strong>Create External Shipments</strong> window, enter the tracking number and shipping carrier for the
                  selected order, select either <strong>Yes</strong> or <strong>No</strong> to indicate whether you want to notify
                  the customer and update the channel where the order is from, then enter the ship date. The tracking number and
                  shipping carrier can be valid values or artificial, the choice is up to you.{' '}
                  <i>If you use an artificial tracking number, you may not want to choose to update the customer or channel</i>
                  .<br />
                  <strong>To update multiple orders</strong> with the same values, populate the fields in the Bulk Selection row
                  and all orders will automatically update with those bulk options. To input an Artificial Tracking Number
                  specifically to apply to all orders here, enter the tracking number value, then click the triangle icon adjacent
                  to that field as seen below.
                  <br />
                  <strong>Required Values:</strong> Tracking Number, Shipping Carrier, Notify Customer, Update Channel
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/markship3.png"
                  style={{ width: 900 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Click <strong>Mark 'Shipped'</strong> to update the order(s) status to <i>Shipped</i>.
                </p>
              </li>
            </ol>
          </Card>
        </Col>
      </Row>

      <br />
      {/* Creating and Receiving an RMA */}
      <h2>Orders {'>'} Creating and Receiving an RMA</h2>
      <Row>
        <Col span={24}>
          <Card>
            <p>
              Return Merchandize Authorizations (RMAs) keep record of product returns, produce/email a return shipping label, and
              dictate how you want the returned inventory to be handled.
            </p>
            <h1>How To Create an RMA</h1>
            <ol>
              <li>
                <p>
                  Navigate to the <strong>Orders</strong> module
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/rma.png"
                  style={{ width: 1000 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  On the <strong>Search/Filter</strong> pane on the left, select the <strong>Shipped</strong> status dropdown
                  view, and select a sub-status to view orders that have already been shipped.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/rma2.png"
                  style={{ width: 200 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  In the results viewing pane, select the row or checkbox of the order that you want to create an RMA for, then
                  click <strong>Create RMA</strong>.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/rma3.png"
                  style={{ width: 800 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  In the <strong>Create RMA</strong> window, be sure to select the correct <strong>Return To</strong> location for
                  the order. The options you see in this dropdown menu are based on the Active Warehouses you have in the Settings
                  Module, as the menu will show the Returns Location for each. This setting will determine which warehouse
                  Extensiv Order Manager associates the return with as well as the shipping address on the return shipping label
                  (if you choose to include a return label).
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/rma5.PNG"
                  style={{ width: 300 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  You can create an RMA with or without a return shipping label. You indicate this through the checkmark box
                  stating <strong>This RMA includes a shipping label</strong>. The information required to make the RMA will vary
                  depending on whether or not you include the shipping label.{' '}
                  <i>If you do not select this option, you can skip to Step 6.</i>. <br />
                  If you choose to include a return shipping label, you can choose whether or not you'd like to email someone the
                  return label. If you'd like to email the return label, the checkbox <strong>Email Label?</strong> needs to be
                  enabled. An email address to send the return label is also required. The return shipping label will be emailed
                  when the RMA is completed.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/rma4.PNG"
                  style={{ width: 600 }}
                />
                <br />
                <br />
                <br />
                <p>
                  Enter all required Shipping & Measurement information if you are including a shipping label. Click{' '}
                  <strong>Calculate Shipping Rate</strong> to rate the return shipment.
                </p>
                <br />
                <Alert
                  message="Note"
                  description={
                    <p>
                      The settings in the <strong>Processing</strong> tab will NOT be able to be edited once the RMA is saved,
                      except for the <strong>Internal Notes</strong>.
                    </p>
                  }
                />
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/rma6.png"
                  style={{ width: 300 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Click the <strong>Returned Items</strong> tab and select the items for return from the list. Be sure to select
                  both the correct product(s) and the quantity being returned.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/rma7.png"
                  style={{ width: 600 }}
                />
                <br />
                <br />
                <br />
                <p>
                  Then indicate how you want the returned item(s) to be handled within Extensiv Order Manager. The Type and Reason
                  are for recording purposes only, while the Action setting will directly determine what happens to the inventory
                  counts when the RMA is "Received". Setting the Action to "Write Off" will result in no inventory adjustments,
                  while selecting one of the "Reinsert" options will result in the returned units being added back to On Hand
                  stock at the "Return To" Warehouse once the RMA is Received.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/shipments.png"
                  style={{ width: 600 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Click <strong>Save</strong>.
                </p>
              </li>
            </ol>
            <br />
            <h1>How To Receive an RMA</h1>
            <br />
            <ol>
              <li>
                <p>
                  In the <strong>Shipments</strong> Module, go to the <strong>Search/Filter</strong> pane on the left and select
                  the <strong>Returns</strong> dropdown view, and select the relevant warehouse or use the Search option to search
                  Returns for a particular RMA.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/shipments%2B_1_.png"
                  style={{ width: 1000 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Once you've located your RMA, you can edit the items that are going to be received as well as what Action they
                  will have by clicking the RMA Number hyperlink. You can indicate a Loss to Seller amount as well.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/shipments%2B_2_.png"
                  style={{ width: 1000 }}
                />
                <br />
                <br />
                <br />
                <Alert
                  message="Note"
                  description={
                    <p>
                      Extensiv Order Manager does not issue refunds to your customers. Any indication of a refund for a return or
                      exchange is strictly for record-keeping purposes only.
                    </p>
                  }
                />
                <br />
              </li>
              <li>
                <p>
                  Once the Returned Items information is finalized, you can choose to generate the return shipping label if it's
                  needed by selecting the row/checkbox of your RMA and then click the <strong>Print Labels</strong> button.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/shipments%2B_4_.png"
                  style={{ width: 900 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Finally, once a return has been received at your Returns warehouse, or once you want to "close out" an RMA (ie:
                  if the customer will not be shipping the item back), select the RMA row/checkbox and then click the Mark as
                  Received button. You will be prompted with a confirmation window which reminds you that Inventory will be
                  handled according to the "Action" indicated in the Returned Items window.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/shipments%2B_5_.png"
                  style={{ width: 900 }}
                />
                <br />
                <br />
                <br />
              </li>
            </ol>
            <p>
              Once you confirm, your RMA will be "Received" which is indicated in the "Confirmation" column. If you selected the
              "Reinsert" Action option, your product will have been added to the On Hand inventory count at the Return To/Return
              Location warehouse.
            </p>
          </Card>
        </Col>
      </Row>

      <br />
      {/* Resolving Out of Stock Orders */}
      <h2>Orders {'>'} Resolving Out of Stock Orders</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Resolve Out of Stock Orders</h1>
            <p>
              Any orders that have a Master SKU with not enough stock to fulfill an order will be in the Unresolved - Out of Stock
              order status. To resolve these orders, you with either need to add inventory in the warehouse for the item that is
              out of stock or change the fulfillment to a warehouse that has stock.
            </p>
            <p>To resolve the issue by adding inventory, follow the steps below.</p>
            <ol>
              <li>
                <p>
                  Select the <strong>Orders</strong> module on the Toolbar. Within the "Filter By" pane on the left, expand the{' '}
                  <strong>Unresolved</strong> status filter to see the <strong>Out of Stock</strong> status. Then click the order
                  you wish to resolve (click on the order line, not the blue hyperlink).
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503658/orders__24_.PNG"
                  style={{ width: 900 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  On the <strong>Order Items</strong> panel at the bottom, note that there is an Out of Stock error message on the
                  Master SKU that is out of stock at the currently assigned warehouse. Take note of the Master SKU since you will
                  be adding more of this SKU to your inventory in Step 4 below.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503661/orders__25_.PNG"
                  style={{ width: 800 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  On the <strong>Order Fulfillment</strong> panel on the right, take note of the fulfillment method and source.
                  You will need these to complete Step 6 below.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503665/orders__26_.PNG"
                  style={{ width: 200 }}
                />
                <br />
                <br />
                <br />
                <p>
                  For Steps 4-6, you will go to the <strong>Inventory module</strong>.
                </p>
              </li>
              <li>
                <p>On the Toolbar, click Inventory, then enter the SKU in the search bar.</p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503668/inventory__8_.png"
                  style={{ width: 800 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  The Master SKU record appears on the <strong>Search Results</strong> panel immediately below the search bar.
                  Click the record to display the <strong>Stock Details</strong> panel on the right.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503669/inventory__9_.png"
                  style={{ width: 900 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Look for the fulfillment method and source on the <strong>Stock Details</strong> panel. You will need to add or
                  adjust stock to the source to resolve the order. For instructions on how to do this, see{' '}
                  <a href="" className="helplink">
                    Manually Adding to a Product's Stock
                  </a>
                  .
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503670/inventory__10_.png"
                  style={{ width: 400 }}
                />
                <br />
                <br />
                <br />
              </li>
            </ol>
            <p>Once you add stock to the source, Extensiv Order Manager will allocate a stock item and resolve the</p>
            <p>
              issue with the order. To check, go back to the Orders module, where the order should have been resolved and should
              be <i>Awaiting Shipment, Awaiting 3PL Export, or Awaiting Dropship</i>, depending on the order's fulfillment method
              and source.
            </p>
            <p>
              Note that Extensiv Order Manager allocates inventory to the oldest orders first in a FIFO (First In First Out
              Method)
            </p>
          </Card>
        </Col>
      </Row>

      <br />
      {/* Creating a Manual Order */}
      <h2>Orders {'>'} Creating a Manual Order</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Create a Manual Orde</h1>
            <p>
              In addition to downloading orders from external sales channels, manual orders can also be created within Extensiv
              Order Manager. To create a manual order, follow the steps below.
            </p>
            <ol>
              <li>
                <p>
                  In the <strong>Orders</strong> module, click the <strong>New Order</strong> button and select the manual orders
                  sales channel that you want to create this order for
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504058/orders__30_.PNG"
                  style={{ width: 800 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  In the <strong>New Manual Order</strong> window, enter the required fields. The required fields are{' '}
                  <strong>Name, Address Line 1, City, State, Zip Code, Country, and Order Number.</strong>
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504060/orders__31_.PNG"
                  style={{ width: 700 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Click into the <strong>Add Item</strong> dropdown, select SKUs to add to the order, and click into the{' '}
                  <strong>Quantity</strong> field to input the order item quantities.
                </p>
                <br />
              </li>
            </ol>
            <p>
              Alternatively, you can utilize the Paste From CSV button to set the order items in bulk. This is mostly helpful for
              large orders with many different SKUs.
            </p>
            <p>
              To <strong>Paste from CSV</strong>, you will be prompted after click the button to input the Listing SKU, Quantity,
              and Unit Price. Each item should be its own row, with the 3 inputs separated by commas. Make sure that your Unit
              Price input is formatted as dollars & cents. Setting a single digit with no decimal points will result in an error
              message.
            </p>
            <p>
              <strong>Example:</strong> ABC,4,2.00
            </p>
            <p>The result would be adding 4 units of Listing SKU ABC for the channel selected, each at a Unit Price of $2.</p>
            <p>
              After entering the required fields and adding order items, click the <strong>Save</strong> button to create the
              order. If the order is being fulfilled at an in-house warehouse, you can create the shipping label from the{' '}
              <strong>Awaiting Shipment</strong> status. For more info, see{' '}
              <a href="" className="helplink">
                Shipping Orders
              </a>
              . If the order is being fulfilled at a 3PL warehouse or dropshipper, you can export the order from the{' '}
              <strong>Awaiting 3PL Export</strong> status for fulfillment.
            </p>
          </Card>
        </Col>
      </Row>

      <br />
      {/* Resolving an order that is "Missing Fulfillment Source" */}
      <h2>Orders {'>'} Resolving an order that is "Missing Fulfillment Source"</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Resolve an order that is "Missing Fulfillment Source"</h1>
            <p>
              When an order is tagged as an <i>Unresolved Order - Missing Fulfillment Source</i>, it means that at least one
              Master SKU in the order does not have a pickable stock location at the warehouse assigned to fulfill the order.
            </p>
            <p>
              To resolve these orders, you need to select a different fulfillment source with existing stock of the Master SKUs OR
              add stock to the assigned warehouse for the order item(s) that are out of stock. To do this, follow the steps below:
            </p>
            <br />
            <h1>Option 1</h1>
            <br />
            <ol>
              <li>
                <p>
                  Click{' '}
                  <i>
                    <strong>Orders</strong>
                  </i>{' '}
                  on the Toolbar, select <strong>Unresolved {'>'} Missing Fulfillment Source</strong> on the{' '}
                  <strong>Search/Filter</strong> panel to view all orders, then click the order number that appears in the grid to
                  the right.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504406/orders__32_.PNG"
                  style={{ width: 900 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  In the <strong>Order Details</strong> window, click the <strong>Processing</strong> tab, select a different
                  fulfillment method and source, then review the other information for completeness.
                </p>
              </li>
              <li>
                <p>
                  Click <strong>Save</strong>.
                </p>
              </li>
            </ol>
            <br />
            <p>
              Once you change the fulfillment source to a warehouse with stock of the Master SKU, Extensiv Order Manager will
              allocate a stock item and resolve the issue with the order. To check, go back to the <strong>Orders</strong> module,
              where the order should have been resolved and in an <i>Awaiting</i> status.
            </p>
            <br />
            <h1>Option 2</h1>
            <br />
            <p>
              Create or add stock at a new or existing stock location. If the warehouse assigned is an in-house warehouse, you'll
              need to ensure the stock location is pickable.
            </p>
            <p>
              See this article for instructions on{' '}
              <a href="" className="helplink">
                how to create a stock location
              </a>{' '}
              with inventory via Extensiv Order Manager's UI.
            </p>
          </Card>
        </Col>
      </Row>

      <br />
      {/* Unresolved: Missing Order Info */}
      <h2>Orders {'>'} Unresolved: Missing Order Info</h2>
      <Row>
        <Col span={24}>
          <Card>
            <p>
              When an order is in an Unresolved {'>'} Missing Order Info status, this means that crucial information regarding the
              order (name, address, city, state, or zip code) is missing.{' '}
            </p>
            <p>
              To see exactly what information is missing, go to the Orders module, click on the <strong>'Unresolved'</strong>{' '}
              dropdown, and then <strong>'Missing Order Info'</strong>. This will display all unresolved orders with this error.
              You can view and update this information from the 'Order Fulfillment' pane on the right, and click{' '}
              <strong>'Recipient'</strong>.
            </p>
            <p>
              This status is rare, as most sales channels require this information to be entered by the customer before the order
              is placed on their platform. Nonetheless, if you have an order in this status, you will not be able to ship it until
              you have input this information.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/image%2B_35_.png"
              style={{ width: 500 }}
            />
          </Card>
        </Col>
      </Row>

      <br />
      {/* Resolving an Awaiting Payment Order */}
      <h2>Orders {'>'} Resolving an Awaiting Payment Order</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Resolve an an Awaiting Payment Order</h1>
            <p>
              When pulling orders in from your native sales channels, Extensiv Order Manager flags orders without a payment status
              as <i>Awaiting Payment</i>. Extensiv Order Manager pauses these orders until it gets confirmation from the sales
              channels that the order has been paid (Extensiv Order Manager checks for payment status every time it pulls in data
              from your sales channels).
            </p>
            <p>
              When the order is updated with payment information, it will move to{' '}
              <i>Awaiting Shipment, Awaiting MC Fulfillment, or Awaiting 3PL Export</i>.
            </p>
            <p>
              You can manually resolve Awaiting Payment orders within Extensiv Order Manager in order to ship them. There are two
              ways you can accomplish this:
            </p>
            <ol>
              <li>
                <p>
                  Go to the <strong>Orders</strong> module.
                </p>
              </li>
              <li>
                <p>
                  In the order status panel, view the <strong>Awaiting Payment</strong> orders.
                </p>
              </li>
              <li>
                <p>
                  The first option is to select the order to add payment information on by clicking on the checkbox of the order.
                  Then select the Edit dropdown menu and select the <strong>Mark Paid</strong> option.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504818/Screen_Shot_2021-03-18_at_10.52.56_PM.png"
                  style={{ width: 900 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Indicate the amount the customer paid, as well as the payment date. Then click the <strong>Save</strong> button.
                  The order should move to an Awaiting status (Shipment, 3PL Export, or Dropship).
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504819/Screen_Shot_2021-03-18_at_10.58.37_PM.png"
                  style={{ width: 900 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Alternatively, you can add the payment details in the <strong>Order Details</strong> window. Click the order
                  number hyperlink and set the Amount Paid as well as the Date Paid, then click <strong>Save</strong>. The result
                  will be the same with either method you choose.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504820/Screen_Shot_2021-03-18_at_10.55.58_PM.png"
                  style={{ width: 900 }}
                />
              </li>
            </ol>
          </Card>
        </Col>
      </Row>

      <br />
      {/* Importing Orders Via Spreadsheet (In Bulk) */}
      <h2>Orders {'>'} Importing Orders Via Spreadsheet (In Bulk)</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Import Orders Via Spreadsheet (In Bulk)</h1>
            <p>
              After adding a manual sales channel and linking your listing SKUs to a master SKU, you can start importing your
              orders into the channel.
            </p>
            <p>To import orders manually, follow the procedure below.</p>
            <ol>
              <li>
                <p>
                  Open the <strong>Orders</strong> Module.
                </p>
              </li>
              <li>
                <p>
                  Click the <strong>Import/Export</strong> drop-down menu, then select <strong>Import Orders</strong>.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/import1.png"
                  style={{ width: 800 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  In the <strong>Manual Order Import</strong> window, click <strong>Configure</strong>.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/import2.png"
                  style={{ width: 600 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  In the <strong>Order Import Settings</strong> window, click <strong>New Settings</strong>.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/import%2B_1_.PNG"
                  style={{ width: 500 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  In the <strong>New Import Settings</strong> window, give your settings a title in the Settings Name field. A
                  descriptive name would be best, e.g. <i>Import_All_Fields</i>, or September 2020 Settings.
                </p>
              </li>
              <li>
                <p>Select the file format from the CSV and Text options, select the structure, and the date format.</p>
              </li>
              <li>
                <p>
                  Add and/or organize the Data Fields you'd like to use. Ensure that every Data Field has a corresponding Column
                  Name that you'll be able to recognize in your Import File. To reorder Data Fields, drag and drop them.
                  <br /> Some Data Fields are required both in the Configuration and in the actual import file.
                </p>
                <ul>
                  <li>
                    <p>Customer Name</p>
                  </li>
                  <li>
                    <p>Address</p>
                  </li>
                  <li>
                    <p>City, State, Zip</p>
                  </li>
                  <li>
                    <p>Phone Number</p>
                  </li>
                  <li>
                    <p>Order Number</p>
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  If you want to make column headers required, make sure to check the <strong>Include column headers</strong> box.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/import4.PNG"
                  style={{ width: 700 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Once you're satisfied with your configurations, click <strong>Save</strong> to close the{' '}
                  <strong>Import Settings</strong> window.
                </p>
              </li>
              <li>
                <p>
                  Back in the <strong>Order Import Settings</strong> window, the new settings are now added to your Settings list.
                  Click <strong>Close</strong> to close the Order Import Settings window and go back to the{' '}
                  <strong>Manual Order Import</strong> window.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/import%2B_2_.PNG"
                  style={{ width: 500 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  Now you'll need to create either a CSV or Text file according to the file format you chose in your configuration
                  settings, and input your orders to import in the exact column format that matches your configuration settings as
                  well.
                </p>
                <Alert
                  message="The row headers and configuration settings are case-sensitive."
                  description={
                    <p>
                      Any deviation to the file format will cause import issues, including if you do/don't include the row
                      headers. These issues could be caused by having more columns than your configuration settings to have Data
                      Fields, or putting a Date input in a column that was configured for an amount of money (like Amount Paid).
                      Make sure to double-check that any date text is in the exact format matching your configurations and that
                      all required fields are filled in. Make sure your file is saved in the right file format.
                    </p>
                  }
                  type="warning"
                />
                <br />
                <Alert
                  message="Importing Orders through a spreadsheet is in a multi-line format."
                  description={
                    <p>
                      Example: if 1 order has 2 items, there should be 2 lines on the spreadsheet to notate that both line items
                      belong to the same order number.
                    </p>
                  }
                  type="warning"
                />
                <br />
              </li>
              <li>
                <p>
                  Back in the <strong>Manual Order Import</strong> window, click the <strong>Import Settings</strong> dropdown
                  menu and select the settings you just created. Set the Manual Sales Channel to the correct channel. Then click
                  the <strong>Select</strong> button and choose the CSV or Text file from your computer to import. Click{' '}
                  <strong>Continue</strong> to start uploading the file into Extensiv Order Manager.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/import6.PNG"
                  style={{ width: 400 }}
                />
                <br />
                <br />
                <br />
                <p>
                  Extensiv Order Manager will then start processing the import file. The speed with which the process runs and
                  completes depend on the number of manual orders to be imported into Extensiv Order Manager. If an Error Log is
                  generated, ensure that the rows with issues detected are addressed. If there is a general error that the file
                  could not be uploaded, there is likely an issue with the number and order of columns in your file not matching
                  the Configuration Settings exactly, or the presence or lack thereof of Headers, or the file format itself is
                  incorrect. Double-check your settings and file until an Error Log is produced and notifies you that your import
                  was completely successful.
                </p>
              </li>
            </ol>
          </Card>
        </Col>
      </Row>

      <br />
      
    </>
  );
}
