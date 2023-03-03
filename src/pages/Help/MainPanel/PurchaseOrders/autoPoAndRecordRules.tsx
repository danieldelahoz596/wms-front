import { Card, Row, Col } from 'antd';

export default function () {
  return (
    <>
      <h2>PurchaseOrders {'>'} Auto POs + Reorder Rules</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Auto POs + Reorder Rules</h1>
            <br />
            <p>
              Extensiv Order Manager can <b>automatically generate Purchase Orders</b> based on reorder rules that have been
              configured, the <b>Default Vendor Product</b> information per product, & the level of inventory in your warehouses.
              These reorder rules are calculations of when and how much to order for stock replenishment based on previous sales
              historical data.
            </p>
            <p>
              These rules are set based on data for individual SKUs, and controlled within the Inventory Module. To edit the
              rules, click on a specific Master SKU to open a prompt in a new window. All inventory rules for this SKU will be
              listed under the first tab <b>Auto-Reorder Rules</b>. These rules can be changed in bulk or on a product level.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502725/rules.PNG" />
            <p>
              The section on the right shows how the calculations are defined. The section on the left is where to enter
              information based on selling needs and history. The metrics used include the following:
            </p>
            <ul>
              <li>
                <b>Sales Velocity:</b> Average number of daily orders for SKU
              </li>
              <li>
                <b>Days in Stock:</b> Desired days this product must be in stock
              </li>
              <li>
                <b>Lead Time:</b> Days it takes for the product to be delivered from vendor
              </li>
              <li>
                <b>Reorder Buffer:</b> Safety days to order before lead time. This can include general buffer, or known extra
                steps like FBA prep time.
              </li>
              <li>
                <b>Forecasted Growth:</b> Expected % change in sales velocity for this product, based on seasonality, marketing,
                or other data outside of Extensiv Order Manager.{' '}
              </li>
            </ul>
            <p>
              Auto purchase orders will be created based on the reorder rules that are entered. Though Extensiv Order Manager
              prepopulates every account with default values, it is important to adjust these values to reflect specific business
              needs in order to fully utilize the Auto-PO feature properly.
            </p>
            <p>
              To see an overview of generated P.O values for a specific SKU, select the appropriate vendor and warehouse from the
              dropdown menus and click <b>Calculate P.O Estimates.</b>{' '}
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502727/rules__1_.PNG" />
            <p>This will show:</p>
            <ul>
              <li>
                <b>Sales Velocity</b>
              </li>
              <li>
                <b>Minimum Level of Inventory</b>
              </li>
              <li>
                <b>Reorder Quantity</b>
              </li>
              <li>
                <b>Reorder Date</b>
              </li>
              <li>
                <b>Runout Date</b>
              </li>
            </ul>
            <p>
              The <b>reorder quantity</b> is calculated using the formula:
            </p>
            <p>
              <b>= Sales Velocity x (Days In Stock + Lead Time + Reorder Buffer) x (1 + Forecasted Growth) – Incoming Units</b>
            </p>
            <p>
              This is the quantity that will be issued on the purchase order created by Extensiv Order Manager. <br />
              The <b>minimum level</b> is calculated using the formula: <br />
              <b>= Sales Velocity x (Lead Time + Reorder Buffer) x (1 + Forecasted Growth)</b> <br />
              Remember, minimum inventory level is used to help determine <b>Channel Allocation Rules's</b> stock quantities
              across all native sales channels in order to prevent over-selling.{' '}
            </p>
            <p>An Auto PO will generate for the product if the Reorder Date has been reached.</p>
            <p>
              In order for Extensiv Order Manager to automatically generate purchase orders, the Auto P.O function must be{' '}
              <b>turned on.</b> To check whether or not you have this function enabled, head to the <b>Settings</b> module and
              click on the <b>Company Info</b> tab in the left-hand side menu. Under the <b>Purchase Order</b> Setting section,
              mark the check box next to <b>Auto PO Generation?.</b>{' '}
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502728/rules__2_.PNG" />
            <p>
              Whenever a new PO is generated by Extensiv Order Manager, it will appear in the <b>“Awaiting Authorization”</b>{' '}
              status in the PO module and indicate Extensiv Order Manager in the “created by” column.{' '}
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502729/rules__3_.PNG" />
            <p>
              It will stay here until a user views it and physically chooses to authorize the PO, and only at that point will it
              be sent to a vendor for fulfillment. Between PO Creation and PO Authorization, "Auto Updates" can apply to the PO as
              long as the <b>Enable Auto Updates?</b> checkbox is selected in the <b>Details</b> tab of a PO. (See screenshot
              below.)
            </p>
            <p>
              <i>
                If you do not want Extensiv Order Manager to make edits to the quantities to order in an existing PO, uncheck this
                option and click <b>Update Details.</b>
              </i>
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502730/Screen_Shot_2021-09-23_at_10.49.51_AM.png" />
            <p>
              <b>Auto Updates do not update existing purchase orders in any state except the "Awaiting Authorization" status.</b>{' '}
              If a PO is in any other state, Auto Updates will create a new purchase order and add the newly calculated inventory
              to that instead.
            </p>
            <p>
              Auto Updates work the same way as Auto POs in general, except they happen to existing POs (via the checkbox) or
              result in the creation of new POs which will continuously be auto-updated (via the checkbox). Their purpose is to
              keep your open purchase orders up-to-date based on the latest results of the reorder rules' calculations/results.
              These updates run three times daily and account for incoming expected inventory.
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
