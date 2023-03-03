import { Card, Col, Row, Alert } from 'antd';

export default function () {
  return (
    <>
      <h2>Settings {'>'} Inventory</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Viewing Stock Edit History</h1>
            <br />
            <p>
              In the <b>Inventory Module</b>, you can find a feature that would allow you to view your stock edit history. This
              includes timestamps of when edits such as adding, deleting, or adjusting stocks were made. The data in this window
              will also show how many stocks were added or deleted or adjusted and who made those edits. This will also display
              notes such as why those edits were made.
            </p>

            <p>There are different ways to access this report:</p>

            <h2>In House Warehouse</h2>
            <p>For an In House warehouse, you can access this report via a stock location’s Edit options.</p>

            <ol>
              <li>
                Go to the <b>Stock Details</b> section. <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/stock%2B_1_.png" />
              </li>
              <li>
                Select a stock location. Click on <b>Edit → History</b>. <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/stock%2B_2_.png" />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/stock%2B_3_.png" />
              </li>
            </ol>

            <h2>3PL Warehouse</h2>
            <p>
              For a 3PL Warehouse, you can access this report by clicking on the <b>View History</b> button in the{' '}
              <b>Stock Details</b> section.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/stock%2B_3_.png" />
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/stock%2B_5_.png" />

            <p>
              You also have the option to{' '}
              <a href="">
                <b>Export the Stock Edit History:</b>
              </a>
            </p>

            <ol>
              <li>
                In the main Inventory view, click on Import/Export → Export Stock Edit History
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/stock%2B_1_.png" />
              </li>
              <li>
                Select the <b>warehouse</b> you want to generate the report for.
                <br />
                <b>NOTE:</b> This will only export up to the last six months of data and what is in the Extensiv Order Manager UI.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/stock%2B_7_.png" />
              </li>
              <li>
                Click <b>Export Stock Edit History</b>
              </li>
              <li>
                Check your <b>email</b> - you should be receiving an email with the Stock Edit History Export shortly.
              </li>
              <Alert
                message="Note"
                description="The export file that is generated will include data on what Master SKU was edited, when, by which user, at which location, what the exact edit action was, and the Edit Description."
              />
              <p>
                It will not show whether an edit was made manually by a user in the UI versus via the API or FTP, but you can
                indeed filter by the <b>User</b> column to see edits that were made by teammates as opposed to an edit made by
                "Extensiv Order Manager".
              </p>
            </ol>

            <br />

            <h1>Strict FIFO</h1>

            <br />
            <p>
              <i>
                In order to utilize this feature, please reach out to our Support Team via Live Chat or email at{' '}
                <a href="mailto:support-oms@extensiv.com">support-oms@extensiv.com </a> or your Account Manager to have this
                enabled.
              </i>
            </p>

            <p>
              Users can now choose an alternative option for the order in which inventory allocation to orders happens, from
              prioritizing orders that can be fully fulfilled over those that are partially in stock to allocating inventory
              strictly in the chronological sequence in which orders are created in Extensiv Order Manager.
            </p>
            <p>
              <b>FIFO Logic in Extensiv Order Manager Right Now</b>
            </p>
            <p>
              By design, Extensiv Order Manager's native logic when it comes to allocating inventory against orders will always
              use FIFO (First In, First Out) as orders download into your account.
            </p>
            <p>
              For a lot of warehouse and fulfillment teams, this model works swimmingly as Extensiv Order Manager already allows
              you to view which orders are committed/allocated against a particular SKU + Warehouse via the Inventory Module:
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/allocated.jpg" />
            <p>
              However, while there is a possibility to lock inventory against a warehouse, there is no way to currently lock
              inventory against a specific order.
            </p>

            <p>That being said, the following scenario can arise:</p>
            <p>
              <i>
                a) Order 123 imports into Extensiv Order Manager on Monday asking for 2 units of SKU A and you only have 1 unit
                available in the warehouse. As a result, the order lands under the {'UNRESOLVED > Out Of Stock'} status since it
                is considered (Partially) OOS.
              </i>
            </p>
            <p>
              <i>
                Your warehouse team sets this order aside to wait until the rest of the inventory arrives on the next delivery via
                a Purchase Order from your vendor.
              </i>
            </p>
            <p>
              <i>
                b) Order 456 imports into Extensiv Order Manager later in the week on Thursday and only asks for 1 unit of SKU A.
              </i>
            </p>
            <p>
              Currently, Extensiv Order Manager would have Order 456 in an Awaiting Shipment status since you can fully ship the
              second order, which - in turn - would change the technical status of Order 123 from Partially OOS to FULLY OOS.
            </p>
            <p>
              <b>What changes with STRICT FIFO?</b>
            </p>
            <p>In terms of how inventory is allocated to orders, nothing will change in regards to first in, first out logic.</p>
            <p>
              However, with STRICT FIFO enabled - moving forward - rather than run into a situation where new orders pull
              inventory allocation away from older orders sitting in Partially OOS statuses, those units previously allocated to
              older orders will be locked against the older order.
            </p>
            <p>Let’s revisit the original scenario again with Strict FIFO enabled:</p>
            <p>
              <i>
                a) Order 123 imports into Extensiv Order Manager on Monday asking for 2 units of SKU A and you only have 1 unit
                available in the warehouse. As a result, the order lands under the {'UNRESOLVED > Out Of Stock'} status since it
                is considered (Partially) OOS.
              </i>
            </p>
            <p>
              <i>
                Your warehouse team sets this order aside to wait until the rest of the inventory arrives on the next delivery via
                a Purchase Order from your vendor.
              </i>
            </p>
            <p>
              <i>
                b) Order 456 imports into Extensiv Order Manager later in the week on Thursday and only asks for 1 unit of SKU A.
              </i>
            </p>
            <p>
              With Strict FIFO, that 1 unit of SKU A will be tied to Monday’s order, so your team will NOT be able to ship
              Thursday’s NEW order until you receive more inventory from a purchase order (or via another inventory update such as
              an API update or other stock adjustment).
            </p>
            <p>
              <b>How to Enable Strict FIFO?</b>
            </p>
            <p>
              You can enable Strict FIFO on a warehouse level by navigating to{' '}
              <b>{'Settings > Warehouses > Select Warehouse >'}</b> Look for <b>"Enable Strict FIFO"</b>. You should be able to
              see a little option you can switch this setting On / Off.
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/FIFO.jpg" />

            <br />
            <h1>Bulk Inventory Reconciliation</h1>
            <br />

            <h2>Overview</h2>
            <p>
              Bulk Reconciliation will reconcile all the inventory that had a discrepancy. Wherever an addition was required, it
              would be done with the default active vendor product price. It will not be reconciled if the product does not have
              an active vendor.
            </p>
            <p>
              If Bulk Inventory Reconciliation is enabled, you will see a button next to the Import/Export button in the Inventory
              Module.
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1.png" />

            <h2>Enabling Bulk Inventory Reconciliation Tool</h2>
            <p>
              You can enable this feature in the Settings module. Click on <b>Settings → User Administration</b> → Select the user
              for which permissions should be enabled/disabled → Click <b>‘Edit’</b> → Scroll to the{' '}
              <b>‘Inventory Reconciliation’</b> and <b>‘Bulk Inventory Reconciliation’</b> options → Toggle the checkbox as needed
              → Click <b>Save</b>.
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/5.png" />

            <h2>Bulk Reconciliation in Inventory Module</h2>
            <p>
              By clicking the Bulk Reconciliation button in the Inventory module, a pop-up dialogue will appear to confirm as this
              action could affect many SKUs.
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/2.png" />

            <p>
              You have to click <b>‘Yes, I understand’</b> then <b>Continue</b> to perform the bulk reconciliation and you will
              get an email with a summary of the changes made.
            </p>
            <p>
              If you would like to reconcile the inventory wherein no corresponding active vendor product exists, you will have to
              enable the following setting:
            </p>
            <p>
              <b>Settings → Company Info → Inventory Value Reconciliation Settings</b> → Check the box{' '}
              <b>‘Choose from all Vendors for Reconciliation’</b>
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/3.png" />

            <p>If this is enabled, the bulk reconciliation window will look like this:</p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/4.png" />

            <p>
              The default vendor dropdown will contain a list of all active vendors. The vendor selected here will be used as the
              vendor for which an inventory addition was made wherein the product being reconciled does not have an active vendor
              product. Extensiv Order Manager will use the <b>Vendor Cost</b> price under the <b>Basic Info</b> tab of each
              product and associate it with the vendor you choose during the first step of the Bulk Reconciliation process.
            </p>
            <p>
              When clicking the Bulk Reconciliation button, if the Inventory Count (IC) queue entry quantity differs from the
              Inventory Value (IV) queue in a warehouse, IV queue entries will be removed or added accordingly. The IC queue
              entries will remain unchanged as these values indicate your inventory stock levels, so only the IV queue will be
              adjusted to match your Inventory Count.
            </p>
            <p>
              If the IV queue entries exceed the Inventory Count, IV queue entries will be removed to match the warehouse’s IC
              queue. Additions to the IV queue will occur if the Inventory Count exceeds the IV queue. These new IV queue entries
              will be added at the cost of the SKU’s default vendor product. Products that do not have a default vendor will not
              be reconciled.
            </p>
            <p>
              All Master SKUs with a Vendor Product will reconcile with the Vendor of the existing Default Vendor Product, NOT
              with the option you choose in the "Default Vendor" in the Bulk Reconciliation confirmation window.
            </p>
            <Alert
              message="Note"
              description="Once values have been submitted through Reconciliation (individually or through Bulk Reconciliation), they cannot be edited."
            />
            <p>
              If you accidentally create value entries at the wrong Unit Cost, you can clear your inventory value queue by first
              removing units from stock (by adjusting out of the associated stock location), and then removing value entries via
              the Reconciliation tool. You can only remove value entries when the count is out of sync. To fully clear the
              inventory value queue, you can remove all product units at a warehouse by adjusting the stock, and then remove all
              value entries via the Reconciliation tool. Then, you can re-adjust your stock so that the count is accurate, and
              re-reconcile the units to add the correct value(s).
            </p>
            <p>
              The Inventory module must be refreshed after Reconciliation adjustments have been submitted. The page will not
              dynamically update until the page has been reloaded.
            </p>
            <p>
              To know more about the Inventory Value Reconciliation feature, read our article on{' '}
              <a href="">Inventory Value Reconciliation</a>
            </p>

            <br />
            <h1>Stock Location - Inventory Management Functionality</h1>
            <br />

            <p>
              This article covers how to utilize some of Extensiv Order Manager's stock location inventory management
              functionality. Depending on what type of Warehouse you are utilizing In-House, 3PL, Dropship, or Retail, the
              functionality will be a bit different. Functionality for the various types of warehouses are covered below
            </p>
            <br />
            <h2>In-house Warehouse</h2>
            <p>First, select the in-house warehouse from the dropdown list which you are looking to manage inventory for</p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-09%2Bat%2B3.56.08%2BPM.png" />

            <p>
              When the product catalog appears, click the SKU you wish to manage. Then in the “Stock Details” menu that appears on
              the right-hand side, select the stock location and click the Edit button. Listed will be the majority of the Stock
              Location Inventory management functionality:
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-09%2Bat%2B3.57.58%2BPM.png" />

            <ol>
              <li>
                <b>History</b>
              </li>
              <li>
                <b>Deactivate</b>
              </li>
              <li>
                <b>Draw Rank</b>
              </li>
              <li>
                <b>Location</b>
              </li>
              <li>
                <b>Adjust</b>
              </li>
              <li>
                <b>Remove</b>
              </li>
              <li>
                <b>Add</b>
              </li>
            </ol>
            <br />
            <p>
              <b>History</b> - tracks the location’s stock edit history for that specific Master SKU, location and warehouse. This
              will show any updates to stock such as inventory received off of a PO, manual stock adjustments, inventory being
              removed after an order is shipped, etc.
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-09%2Bat%2B4.20.31%2BPM.png" />

            <p>
              <b>Deactivate</b> - will deactivate the stock location for this Master SKU. Deactivating a stock location will
              subtract all of its available inventory from associated product listings. Press Save to complete the change.
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-09%2Bat%2B4.21.43%2BPM.png" />

            <p>
              <b>Draw Rank</b> -sets the priority via drag-and-drop of the locations set for this Master SKU, assuming there are
              multiple available. Press Save to complete the change.
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-22%2Bat%2B12.48.56%2BPM.png" />

            <p>
              <b>Location:</b> allows the seller to edit the name of the location, determine whether this location is{' '}
              <b>Pickable</b> and/or <b>Receivable</b> and add internal notes. <b>Please note</b>, the name and selecting at least
              one of Pickable/Receivable is required. Press Save to complete the change.
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-22%2Bat%2B12.49.53%2BPM.png" />

            <p>
              <b>Transfer:</b> enables the seller to transfer inventory from one location to another. Press Save to complete the
              change.
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-22%2Bat%2B12.51.47%2BPM.png" />

            <p>
              <b>Adjust:</b> enables the seller to edit the <b>On Hand, Locked</b> and <b>Min</b>. inventory totals for this
              location. Press Save to complete the change.
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-22%2Bat%2B12.52.41%2BPM.png" />

            <p>
              <b>Remove:</b> enables the seller to remove a specific number of units from this location. Press Save to complete
              the change.
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-22%2Bat%2B12.53.22%2BPM.png" />

            <p>
              <b>Add:</b> enables the seller to add a specific number of units from this location. Press Save to complete the
              change.
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-22%2Bat%2B12.53.33%2BPM.png" />

            <p>Please note, as part of the Stock Details menu, you’re also able to:</p>

            <ul>
              <li>View previously deactivated locations by clicking on “Show Inactive”</li>
              <li>Edit your warehouse minimum inventory level for the selected SKU by clicking on the small wrench icon.</li>
              <li>
                View the edit history for the selected SKU in this particular warehouse by clicking on the small clipboard icon.
              </li>
            </ul>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-22%2Bat%2B12.56.00%2BPM.png" />
            <br />
            <h2>3PL/Retail/Dropship</h2>
            <p>
              If you’re attempting to add inventory to an 3PL/Retail/Dropship warehouses, select the appropriate warehouse from
              the your in-house from the “Showing [Number] Warehouses” drop-down list. Please note, these steps are the same for
              3PL/Retail/Dropship warehouses.
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-22%2Bat%2B12.58.55%2BPM.png" />

            <p>
              When the product catalog appears, click the SKU you wish to add inventory to. Then in the “Stock Details” menu that
              appears on the right-hand side, you have three options for this Master SKU at this warehouse:
            </p>
            <p>
              <b>Adjust Stock</b> - allows the seller to revise the <b>On Hand, Locked</b> and <b>Allocated</b> inventory for this
              SKU. Press Save to complete the change. Note: If your 3PL is connected to Extensiv Order Manager and communicating
              inventory levels, any change made manually will be overridden the next time the 3PL pushes inventory to Extensiv
              Order Manager.
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-22%2Bat%2B1.30.39%2BPM.png" />

            <p>
              <b>View History</b> -shows the inventory stock edit history for this SKU. This can be a helpful troubleshooting tool
              to see when the last time the 3PL pushed inventory to Extensiv Order Manager
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-22%2Bat%2B1.30.52%2BPM.png" />

            <p>
              <b>Deactivate Stock</b> - enables the seller to deactivate the inventory stock, which will subtract all of the
              available inventory from associated product listings. Press Save to complete the change.
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-22%2Bat%2B1.31.01%2BPM.png" />

            <p>
              <b>Please note</b>, for dropship and retail warehouses, if multiple warehouses are selected for viewing at the same
              time, they will all be nested under “Dropship Vendors” or "Retail Stores" in the Stock Details menu on the
              right-hand side.
            </p>

            <br />
            <h1>Stock Edit History Export</h1>
            <br />
            <ol>
              <li>
                Go to the <b>Inventory</b> module and click on the <b>Import/Export</b> dropdown menu →{' '}
                <b>Export Stock Edit History</b>
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/image%2B_33_.png" />
              </li>
              <li>
                Select the <b>warehouse</b> you want to generate the export for. This will only export up to the last six months
                of data and what is in the Extensiv Order Manager UI.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/image%2B_34_.png" />
              </li>
              <li>
                Click <b>Export Stock Edit History</b>
              </li>
              <li>Check your email - you should be receiving an email with the Stock Edit History Export shortly.</li>
            </ol>
            <p>
              <b>Note: </b> The export file that is generated will include data on what Master SKU was edited, when, by which
              user, at which location, what the exact edit action was, and the Edit Description.
            </p>
            <p>
              It will not show whether an edit was made manually by a user in the UI versus via the API or FTP, but you can indeed
              filter by the <b>User</b> column to see edits that were made by teammates as opposed to an edit made by "Extensiv
              Order Manager".
            </p>

            <br />
            <h1>Inventory - Transfers Tab</h1>
            <br />
            <p>
              Within Extensiv Order Manager, sellers have the ability to send and receive an inventory stock transfer between
              in-house and 3PL warehouses.
            </p>
            <p>
              This article guides you through reviewing your stock transfers, receiving them to the destination warehouse, and
              viewing your transfer history.
            </p>
            <p>
              First, you will need to navigate to the <b>Inventory</b> module.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/inventory%2B_17_.PNG" />
            <p>Then, click on the Transfers tab in the upper left hand corner of the page.</p>
            <p>
              On this tab you can view the status of each of your transfers, along with other relevant information presented in
              grid view.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/inventory%2B_18_.PNG" />
            <p>
              Select an active transfer that is in the status "Pending Receiving"/ and the Receive button will become available at
              the top of your grid view.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/inventory%2B_19_.PNG" />
            <p>The stock transfer order details window will display the item(s) within your selected transfer.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PIC.474789png.png" />
            <p>
              You can also click on the History tab when selecting a transfer from the grid below and confirm all of the activity
              that has impacted this transfer.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/inventory%2B_20_.PNG" />
            <p>Once the Receive button is clicked, the inventory will be received into the destination warehouse.</p>

            <br />
            <h1>Inventory - How Extensiv Order Manager Presents Bundle Inventory</h1>
            <br />
            <p>
              Extensiv Order Manager will calculate automatically the number of bundles that you can fulfill at a particular
              warehouse based on how many core products are available for that inventory there.
            </p>

            <br />
            <h1>Inventory Update Triggers</h1>
            <br />
            <p>
              Inventory updates will be pushed from Extensiv Order Manager to associated native sales channel's listings when one
              of the following events happens for any given Master SKU:
            </p>

            <ol>
              <li>
                Available inventory quantities change. This includes manual updates done through Extensiv Order Manager's UI,
                updates via FTP, and API updates from a warehouse or a dropship vendor.
              </li>
              <li>A new order is created in Extensiv Order Manager and inventory is allocated to fulfill the order.</li>
              <li>
                A new Listing SKU is created for a Master SKU. <b>Note</b>: This will only push inventory to the new Listing SKU,
                not to the pre-existing Listing SKUs.
              </li>
              <li>
                A Listing SKU is edited. <b>Note</b>: This will only push inventory to the new Listing SKU. The other non-edited
                Listing SKUs won’t be updated with this action.
              </li>
              <li>
                When you turn on the inventory push toggle. <b>Note</b>: This will only push inventory to the Listing SKU whose
                inventory push toggle was turned on. The other Listing SKUs won’t be updated with this action.
              </li>
              <li>Channel Allocation Rules and Excluded Warehouses are added or edited.</li>
            </ol>
            <p>
              Once one of the above actions has been saved, it will take around 15 minutes for the inventory update to reflect on
              the sales channel. If any of these actions are completed in bulk, it should take longer to reflect the update on all
              listings.
            </p>

            <br />
            <h1>Exporting Stock Details</h1>
            <br />
            <ol>
              <li>
                Go to the <b>Inventory Module</b>. Click <b>Import/Export</b> and select <b>Export Stock Details</b>. <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PIC552014.PNG" />
              </li>
              <li>
                Select the <b>warehouse</b> you want the export for. Click the <b>Export Stock Details</b> button. <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PIC.4476PNG.PNG" />
              </li>
              <li>
                Export file will then be sent to your email. <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PIC4736.PNG" />
              </li>
            </ol>

            <br />
            <h1>Exporting Inventory</h1>
            <br />

            <ol>
              <li>
                Navigate to the <b>Inventory Module</b> and click on the <b>Import/Export</b> dropdownmenu. Choose{' '}
                <b>Export Inventory</b>. <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-30%2Bat%2B11.29.47%2BAM.png" />
              </li>
              <li>
                Select the <b>warehouse</b> you want to export inventory for.
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-30%2Bat%2B11.22.58%2BAM.png" />
              </li>
              <li>
                You can choose to <b>Exclude Inactive SKUs</b> if you'd like your export to only include Active Master SKUs. You
                can also choose between the two options of <b>Export Bundles Only</b> vs. <b>Export Cores Only</b>. You cannot
                exclude both, but you can export both by clicking neither checkbox.
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-30%2Bat%2B11.25.10%2BAM.png" />
              </li>
              <li>
                Click <b>Export Inventory</b>.
              </li>
              <li>An email will be sent containing a link for the export file for you to download.</li>
            </ol>

            <br />
            <h1>Importing Reorder Rules</h1>
            <br />
            <p>
              If auto-PO generation is enabled for your Extensiv Order Manager account, Extensiv Order Manager will calculate
              reorder quantities on auto-POs using reorder rules. While Extensiv Order Manager has default reorder rules, you can
              also import your own reorder rules.
            </p>
            <p>To import reorder rules, follow the instructions below.</p>

            <ol>
              <li>
                Go to the <b>Inventory</b> module.
              </li>
              <li>
                In the <b>Stock</b> tab, click on the <b>Import/Export</b> button and select <b> Import Reorder Rules</b> from the
                dropdown. <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/inventory%2B_13_.PNG" />
              </li>
              <li>
                In the <b>Product Auto-Reorder Rules Import</b> window, click the link to download the Excel template. <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PIC.996315PNG.PNG" />
              </li>
              <li>
                In the template, input the master SKUs and values you wish to use for each reorder rule and save it to your
                computer. Below is a description of the reorder rules. <br />
                <b>Velocity Days Back:</b> The date range that Extensiv Order Manager will use to calculate sales velocity. <br />
                <b>Desired Days In Stock:</b> The number of days that a product should be in stock once replenished. <br />
                <b>Forecasted Growth:</b> Expected percentage change in sales velocity. This number can be a negative number.{' '}
                <br />
                <b>Buffer (Safety) Days:</b> A specific number of days that will be added to the lead time for this product to
                ensure that reordered stock arrives on time.
              </li>
              <li>
                Return to theb <b> Product Auto-Reorder Rules Import</b> window, click the <b>Select</b> button to upload the
                file, and click on the <b>Continue</b> button to import the file.
              </li>
            </ol>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PIC.44697.PNG" />
            <Alert
              message="Note"
              description="To view reorder rules in the Inventory module for a specific SKU, click into the master SKU in the Stock tab to open the Inventory Rules window and Auto-Reorder Rules tab."
            />

            <br />
            <h1>Inventory Rules - Edit History</h1>
            <br />
            <p>
              Inventory Rules <b>Edit History</b> will show all changes that are made to the Inventory Rules within the{' '}
              <b>Inventory Module</b>. Any changes to either Auto-Reorder Rules, Channel Allocation, or Excluded Warehouses will
              show up in the Edit History tab. The pop up window pictured below is found by clicking on a SKU in the middle pane
              of the inventory module.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PIC5567.png" />

            <br />
            <h1>Inventory Rules per Master SKU</h1>
            <br />
            <ol>
              <li>
                To access Inventory Rules, first go to the <b>Inventory Module</b> <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/inventory%2B_6_.PNG" />
              </li>
              <li>
                Click on a <b>Master SKU</b>
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/inventory%2B_7_.PNG" />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/inventory%2B_8_.PNG" />
              </li>
            </ol>
            <h2>Auto-Reorder Rules</h2>
            <p>
              Reorder rules are calculations of when and how much to order for stock replenishment based on your sales history. In
              the image below, the section on the right shows how the calculations are done. The section on the left is where you
              enter your information in based on your selling needs and history.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/inventory%2B_9_.PNG" />
            <p>
              <b>Why is this important?</b> It is important because purchase orders are created based on the reorder rules that
              are entered here. If you are wondering why Extensiv Order Manager has not yet generated a new purchase order even
              though you have the Auto-PO function enabled, this would be a great place to start; if you have a very low sales
              velocity, and Extensiv Order Manager sees that you'll still be in stock for the next 4 months with a lead time of 60
              days for this product, Extensiv Order Manager probably will not generate a purchase order until at least a
              month-and-a-half has passed.
            </p>
            <h2>Channel Allocation</h2>
            <p>
              The Channel Allocations functionality within Extensiv Order Manager automates available inventory allocation for
              products across sales channels. This allows Extensiv Order Manager users to allocate inventory to most profitable
              channels when inventory is running low, to limit inventory to certain channels , or even to manage scarcity for
              marketing purposes on certain channels.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/inventory%2B_10_.PNG" />
            <p>
              There are five columns; Sales Channel, Rule Type, Value, Min. Rule Type, and Min. Value. These are divided into
              green and red sections, which is in connection with the image below:
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/inventory%2B_11_.PNG" />
            <p>
              The green in the Channel Allocation section applies to the green in this stock detail chart, and the red to the red.
            </p>
            <p>
              If stock quantity for this specific product is in the green, it means that there is sufficient inventory for the
              time being (defined as above the minimum level). When above minimum level, the Channel Allocation rules for the
              green section will apply. In the same way, when inventory is below minimum level of stock quantity for this product,
              the rules in the red section will apply.
            </p>
            <p>There are two rule types available:</p>
            <ul>
              <li>
                <b>% of Available:</b> using this rule will apply only the percentage of available to the listing. For example, if
                there is a value of 10 using this rule type, it will display only 10% of total available. If there are 1,000 units
                of this product available, Extensiv Order Manager will communicate 100 available units to the selected sales
                channel.
              </li>
              <li>
                <b>Max Allocation:</b> using this rule will allocate a maximum value to the selected sales channel. For example,
                if there is a value of 200 for this rule type, it will reflect in the selected sales channel that 200 units are
                available even if there is a total available quantity of 1,000.
              </li>
            </ul>
            <Alert message="Note" description="Extensiv Order Manager can never show more inventory than is available overall." />
            <p>
              There are slight differences in the application of the rule types such that the minimum rule type is meant to
              restrict, or control the selling of this product when it is in the red zone. This helps in preventing the
              overselling of this product. Also, compared to when the inventory quantity is in the green, the minimum rule type
              will display the % of available or the max allocation from the <i>minimum quantity.</i>
            </p>
            <p>
              For example, if inventory levels are "in the red" for a specific product, and there is a min. quantity of 100, with
              100 units available.
            </p>
            <ul>
              <li>
                Using the % <b>of available</b> rule type with a value of 10, Extensiv Order Manager will push to the channels
                that there are 10 units available in stock
              </li>
              <li>
                If there are 10 units available, this rule will push to the sales channels that there is 1 unit available in stock
              </li>
              <li>If there are 9 units available, Extensiv Order Manager will push that the product is out of stock.</li>
              <li>
                When using the <b>max allocation</b> rule type, it will display the maximum quantity allocated from the minimum
                level quantity. If the max allocation is set to 5.
              </li>
              <li>
                While 100 units are available and the min. level is 100, Extensiv Order Manager will push to the sales channel
                that there are 5 units available
              </li>
              <li>If the available units is 90, the system will still push 5 units.</li>
            </ul>
            <h2>Excluded Warehouses</h2>
            <p>
              This is a section where you can exclude stock from a particular warehouse(s) for this specific product in the
              available inventory totals that are pushed to the sales channels. This means that if Warehouse A, B, and D have
              inventory quantities of 50 each, and you exclude Warehouse D for this particular product, the sales channels will
              only reflect a total of 100 units, rather than 150.
            </p>
            <p>
              To add a warehouse(s) to this list, simply click on the drop-down menu, and select the warehouse you want to
              exclude, and it will automatically be added into this exclusions list. Hit <b>Save</b> when ready.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/inventory%2B_12_.PNG" />
            <h2>Edit History</h2>
            <p>
              The history logs of the Auto-Reorder Rules, Channel Allocation, and Excluded Warehouses tabs. This has nothing to do
              with quantity changes.
            </p>
            <h2>Channel History</h2>
            <p>
              This tab will show the last time inventory was attempted to be updated to any and all Listing SKUs for this Master
              SKU, for all channels. If the year of the Inventory Last Update timestamp is sometime in the 1900s, that indicates
              that Listing SKU has not been updated successfully before. This would be the case for manual channels as Extensiv
              Order Manager does not push inventory updates to manual channels, only natively integrated sales channels. If you do
              not see a timestamp here or you see an old date, ensure that your Listing SKUs are set to Push Inventory = On -
              otherwise Extensiv Order Manager won't be pushing inventory to those listings.
            </p>
            <p>
              The Quantity Pushed amount would show you the amount of inventory that Extensiv Order Manager pushed to a listing.
              If the number seen here is unexpected, refer to the Excluded Warehouses list for the Master SKU and Sales Channel,
              as well as the Channel Allocation tab.
            </p>
            <p>
              If an Error Message is present, it will tell you the reason why a listing was not able to be updated. This usually
              has to do with the Listing SKU in Extensiv Order Manager not matching exactly (capitalization matters) with the
              listing on the sales channel.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-31%2Bat%2B5.07.55%2BPM.png" />

            <br />
            <h1>Uploading Auto-Reorder Rules in Bulk</h1>
            <br />

            <p>
              Extensiv Order Manager is able to analyze your inventory based on multiple criteria to help you automate your
              Purchasing. Configure your reorder rules for what is best for your business. Need more information on Auto Reorder
              Rules?
            </p>

            <Alert
              type="warning"
              message="Note"
              description="If you are updating the Auto-Reorder rules in bulk via spreadsheet, all of the current Auto-Reorder rule configuration will be overridden with whatever you enter in the spreadsheet."
            />

            <ol>
              <li>
                Navigate to <b>{'Inventory > Import/Export > Import Reorder Rules'}</b>
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503890/inventory__27_.png" />
              </li>
              <li>
                On the <b>Product Auto-Reorder Rules Import</b> page, click the link to download the{' '}
                <b>Auto-Reorder Rules Import</b> template
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503891/inventory__28_.png" />
              </li>
              <li>
                Fill out the <b>Auto-Reorder Rules Import</b> spreadsheet. Please note that the template cannot be modified in any
                way or the import will fail.
                <ul>
                  <li>
                    <b>Velocity Days Back</b> format should be a single number to signify number of calendar days in the past the
                    rule should take into account
                  </li>
                  <li>
                    <b>Desired Days in Stock</b> format should also be a single number to tell Extensiv Order Manager the number
                    of days you want to product to be in stock at that specific warehouse
                  </li>
                  <li>
                    <b>Forecasted Growth</b> format is a percentage of expected change in the sales velocity. If you anticipate a
                    decline in sales, you can enter a negative number.
                  </li>
                  <li>
                    <b>Buffer (Safety) Days</b> format is a single number that states the number of days in between PO being sent
                    to the vendor and the actual lead time on the vendor product.
                  </li>
                </ul>
              </li>
              <li>Save the spreadsheet and import the file.</li>

              <br />
              <h1></h1>
              <br />
              <p>
                In Extensiv Order Manager, you can exclude stock from specific warehouses at the SKU level so the available
                inventory at the specified warehouse is not pushed to the sales channels.
              </p>
              <p>Follow the steps below to add a warehouse to the Excluded Warehouses list for a specific SKU.</p>
              <ol>
                <li>
                  Go to the <b>Inventory</b> module. <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503866/inventory__20_.PNG" />
                </li>
                <li>
                  In the <b>Stock</b> tab, click into a master SKU. <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503867/inventory__21_.PNG" />
                </li>
                <li>
                  In <b>Inventory Rules</b> window, click on the <b>Excluded Warehouses</b> tab. <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503868/inventory__22_.PNG" />
                </li>
                <li>
                  In the <b>Add Warehouses to Exclude</b> dropdown, select the warehouses that you want to add to this list and
                  click the <b>Save</b> button. Once warehouses are added to this list, Extensiv Order Manager will push an
                  inventory update to your sales channels to remove the available inventory for this SKU from these warehouses.
                </li>
              </ol>
              <Alert
                message="NOTE"
                description="To review changes that were made to the Excluded Warehouses list for any of your SKUs, click into the Master SKU in the Inventory module and click on the Edit History tab in the Inventory Rules window."
              />

              <br />
              <h1>Creating Auto-Reorder Rules</h1>
              <br />
              <p>
                Extensiv Order Manager uses Auto-Reorder rules to calculate when to auto-generate POs for your vendors for
                inventory replenishment purposes. Please note, the Auto-PO feature must be turned on in{' '}
                <b>{'Settings > Company Info >'} Purchase Order Settings</b>. We recommend that you have at least 30 days of
                historical data to ensure the calculations are more accurate and prevent from having auto-POs not generated.
              </p>
              <h2>Creating Auto-Reorder Rules</h2>
              <ol>
                <li>
                  On the <b>Inventory</b> page, click the <b>Master SKU</b> hyperlink that you would like to have an Auto-Reorder
                  Rule.
                  <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503691/inventory__11_.png" />
                </li>
                <li>
                  The Auto-Reorder Rules tab opens by default on the Inventory Rules dialog box. The variables can be reviewed in
                  depth on the left-hand side. Default numbers will be selected; however, you can configure the variables for this
                  Master SKU to fit your Purchase Order needs.
                  <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503697/inventory__12_.png" />
                  <br />
                  <b>Sales Velocity:</b> This is the average number of units sold per day during a specific number of days.
                  Skubana will use the sales velocity to determine if the SKU should be reordered. If there is no sales velocity
                  for this SKU, or the sales velocity is 0, Skubana will not include this SKU on auto-POs.
                  <br />
                  For example, if you input 30 for the number of days that Skubana will consider to calculate your current sales
                  velocity, and you sold 150 units during the last 30 days, the sales velocity will be 5 units per day.
                  <br />
                  <b>Days In Stock:</b> This is how many days of inventory you want to purchase when reordering inventory from
                  your vendor. Days in stock are based on your current sales velocity.
                  <br />
                  For example, if you input 60 days as the number of days you want Skubana to reorder enough inventory for, and
                  your current sales velocity is 5 units per day, Skubana will estimate that you’ll need at least 300 units to be
                  in stock for the next 60 days. Skubana will also take into consideration if you’ve set the forecasted growth for
                  this SKU to a positive or negative percentage and if there are any incoming units on stock transfers or purchase
                  orders, and adjust the estimate accordingly.
                  <br />
                  <b>Forecasted Growth:</b> This is the percentage of growth in sales you expect to see for this SKU once the
                  reordered inventory has arrived at your warehouse. The forecasted growth is applied to the days in stock.
                  <br />
                  For example, if you input a forecasted growth of 10% for this SKU and your sales velocity is 5, Skubana will
                  increase this number by 10% and will estimate that you’ll need at least 330 units to be in stock for the next 60
                  days (if you’ve input 60 days for your days in stock).
                  <br />
                  <b>Buffer Days:</b> This is the number of days between the reorder date, which is when the auto-PO will be
                  automatically generated, and the lead time, which is how long it takes (measured in days) for the reordered
                  inventory to arrive at your warehouse. The reorder date, which is tied to the lead time of this SKU, is when you
                  need to submit the auto-PO to ensure that the inventory arrives before the runout date.
                  <br />
                  For example, if the lead time for this SKU is 30 days, and you input 0 for the buffer days, the auto-PO will be
                  automatically generated on the reorder date, which in this case would be 30 days before the runout date.
                  However, if you input 7 for the buffer days, the auto-PO will be automatically generated 7 days before the
                  reorder date, which in this case would be 37 days before the runout date.
                </li>
                <li>
                  After inputting the required information, click the “Calculate P.O. Estimates” button. This will then give you
                  estimate information on this Master SKU that will be helpful when reordering. It will appear as follows:
                  <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503698/inventory__13_.png" />
                </li>
                <li>
                  Click <b>Save</b>.
                </li>
              </ol>
              <h2>Creating Auto-Reorder Rules in bulk</h2>
              <ol>
                <li>
                  On the Inventory Module header, click import/export and select import reorder rules.
                  <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503700/inventory__14_.png" />
                </li>
                <li>Download the template and fill it out.</li>
                <li>Save the template and import it in by clicking on select file and clicking continue.</li>
              </ol>
              <Alert description="The Auto-Reorder rules can be set at a global level by going to Settings > Company Info > Inventory Settings. Please note, any changes to this section will override any custom configurations done at the Master SKU level." />

              <br />
              <h1>How to Search for SKUs in the Inventory Module</h1>
              <br />
              <p>
                Follow the steps below to search for a specific SKU in the <b>Inventory</b> module.
              </p>
              <ol>
                <li>
                  Click into the <b>Search Bar</b> in the top left corner of the screen.
                </li>
                <li>
                  Enter the <b>Master SKU</b> or <b>Product Name</b>.
                </li>
                <li>Click on the 🔎 Magnifying Glass to reload the page with your search results.</li>
              </ol>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502929/inventory.png" />

              <br />
              <h1>Uploading Inventory via Spreadsheet</h1>
              <br />
              <p>
                To upload (or update) inventory in bulk via a spreadsheet, click into the <b>Inventory</b> module and then click{' '}
                <b>“Import/Export”</b> in the top-middle of the page. Then click <b>“Import Inventory”</b>.
              </p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/inventory%2B_2_.PNG" />
              <p>
                A new window titled “Select Warehouse For Inventory Import” will appear. Here, you must select a warehouse to
                import inventory <b>INTO</b>. This drop-down list will include all of your active warehouses.
              </p>
              <div>
                <h2>Please note</h2>
                <p>
                  for all warehouses selected that aren’t an "In-House" type, the window may be titled, “External Warehouse Manual
                  Inventory Import”. This is because there are different inventory import Excel templates for the various Extensiv
                  Order Manager warehouse types (In-House Warehouse, 3PL, Dropship Vendor Warehouse, etc.)
                </p>
              </div>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/inventory%2B_3_.PNG" />
              <p>
                Once you’ve selected a warehouse and click “Continue”, you’ll be directed to a new window, titled “[Name of
                Warehouse] Inventory Import”.
              </p>
              <p>On this new window, there are a few things to pay attention to:</p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2018-04-26%2Bat%2B11.29.36%2BPM.png" />
              <br />
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/inventory%2B_4_.PNG" />
              <p>
                As a next step, click “Download the Excel Template for Inventory Import” and then open the spreadsheet file. The
                first sheet of this spreadsheet includes instructions for how to complete the document, which must be filled in on
                its second sheet, titled “Inventory”.
              </p>
              <p>
                The required fields for the <i>In-House Warehouse</i> Inventory import include:
              </p>
              <ul>
                <li>
                  <b>Master SKU (column A):</b> the Master SKU of the product you are updating inventory for. This could be a core
                  product or bundle/kit
                </li>
                <li>
                  <b>Brand (column B):</b> the brand of the master SKU. This column is not mandatory and can be left blank
                </li>
                <li>
                  <b>Location (column C):</b> the stock location for the new inventory you’re adding. You can create new locations
                  here as well by entering in a currently non-existing location for the master SKU
                </li>
                <li>
                  <b>Draw Rank (column D):</b> tells Extensiv Order Manager which priority it should give this particular
                  location, assuming there’s more than one location per Master SKU
                </li>
                <li>
                  <b>Active (column E):</b> this tells Extensiv Order Manager if the location should be activated or deactivated
                  (must either be"TRUE" or "FALSE")
                </li>
                <li>
                  <b>Is Pickable? (column F):</b> tells Extensiv Order Manager if the location can be used as a pick location for
                  this Master SKU’s new inventory. If the location is not pickable (column set to FALSE), then Extensiv Order
                  Manager will not communicate inventory from this location to your sales channel. Inventory will also not be
                  allocatable from non-pickable locations
                </li>
                <li>
                  <b>Is Receivable (column G):</b> tells Extensiv Order Manager if the location can be used as a receivable
                  location for this Master SKU’s new inventory. If the location is not receivable (column set to FALSE), then
                  Extensiv Order Manager will not display this location when receiving a PO line for the specific Master SKU
                </li>
                <li>
                  <b>On Hand Stock (column H):</b> tells Extensiv Order Manager how much on hand stock is at the location for this
                  Master SKU
                </li>
                <li>
                  <b>Locked Inventory (column I):</b> tells Extensiv Order Manager how much inventory should be listed as “Locked”
                  at the location for this Master SKU
                </li>
                <li>
                  <b>Location Min. Level (column J):</b> tells Extensiv Order Manager what the minimum inventory level should be
                  for this location, for this Master SKU. This is an arbitrary number set by the seller.
                </li>
                ​
              </ul>
              <p>
                Prior to uploading, it’s a <b>best practice</b> to rename the file with the current date and time of the upload
                for your records. Once complete, click “Select” and upload the new inventory file. Then click “Continue”.
              </p>
              <p>
                At this point, Extensiv Order Manager will begin uploading the file. This process may take a few seconds to
                several minutes, depending on the number of updates included in the file.
              </p>
              <p>
                After the upload is complete, another window will appear, titled “[Name of Warehouse] Inventory Import”. This will
                include a summary of what was and was not accomplished, including:
              </p>
              <ul>
                <li>
                  <b>New Stock Created:</b> inventory for new Master SKUs added into Extensiv Order Manager
                </li>
                <li>
                  <b>Existing Stock Updated:</b> inventory for existing Master SKUs that has been updated in Extensiv Order
                  Manager
                </li>
                <li>
                  <b>Errors in Excel File:</b> the number of import errors discovered by Extensiv Order Manager
                </li>
              </ul>
              <p>
                The “Error Log” will detail which errors occurred during the inventory import. Once you read the summary and/or
                error log, you may click:
              </p>
              <ul>
                <li>
                  <b>Close:</b> this will close the window and return you to the Inventory module
                </li>
                <li>
                  <b>Email Summary & Finish:</b> this will email your user email address a summary of the import, then close the
                  window and return you to the Inventory module
                </li>
                <li>
                  <b>Done:</b> this will close the window and return you to the Inventory module
                </li>
              </ul>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/inventory%2B_5_.PNG" />
              <p>At this stage, inventory has been uploaded/updated via spreadsheet!</p>

              <br />
              <h1>Manually Transferring Stock to Another Location</h1>
              <br />
              <p>
                Extensiv Order Manager allows you to transfer stock from one location to another location. This example will show
                you how to transfer stock from location to location within the same warehouse.
              </p>
              <h2>To Manually Transfer Stock to Another Location</h2>
              <ol>
                <li>
                  On the toolbar, navigate to the <b>Inventory</b> Module.
                  <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502949/inventory__1_.PNG" />
                </li>
                <li>
                  In the <b>Search Bar</b> at the top, enter the SKU or product you want to transfer, then select the item once
                  found. For this example, we will transfer inventory from the "TEST" location to the "RLOC" location within the
                  In-House Warehouse.
                </li>
                <li>
                  On the <b>Stock Details</b> panel on the right, you can see the warehouse(s) where you keep your inventory for
                  the selected item. Click into the warehouse where you will be transferring the product{' '}
                  <b>
                    <i>from</i>
                  </b>
                  . Then, select a location with available inventory to transfer under the <b>Stock Breakdown</b> section.
                </li>
                <li>
                  Click <b>Edit</b>, then <b>Transfer</b>.
                  <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502951/inventory1.png" />
                </li>
                <li>
                  On the <b>Location Transfer</b> window, enter the number of stock to be transferred, add an optional note for
                  record purposes, then click <b>Save</b>.
                  <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502952/inventory1__1_.png" />
                </li>
              </ol>
              <p>
                Back on the <b>Inventory</b> module's <b>Stock Details</b> panel, under the <b>Stock Breakdown</b> section, the
                available stock for each location gets updated based on the amount transferred stock.
              </p>

              <br />
              <h1>Inventory Module Overview</h1>
              <br />
              <p>
                Extensiv Order Manager's <b>Inventory</b> module makes it easy to track your inventory, regardless of physical
                location, sales channel, or <b>inventory</b> status. The Inventory module allows you to:
              </p>
              <ul>
                <li>Manage Inventory at a SKU level</li>
                <li>
                  Know at a glance the status of inventory levels in your warehouses (the number of stock on hand, locked,
                  in-transit, and allocated)
                </li>
                <li>Configure Stock Locations within In-House Warehouses</li>
                <li>Add, remove and adjust stock</li>
                <li>Search stock levels by SKU, product name, and more</li>
                <li>Review historical records of your inventory count and value</li>
                <li>Transfer stock from one location to another</li>
                <li>Configure auto-reorder rules at a SKU level</li>
                <li>
                  Assign draw ranks for your locations, allowing you to set rules on what inventory should be used to fulfill
                  orders first or when a location runs out of stock
                </li>
                <li>Configure minimum inventory levels</li>
                <li>Set allocation rules for your core products and bundles/kits</li>
                <li>Exclude inventory in specific warehouses from pushing to a sales channel, where necessary</li>
                <li>Bulk import inventory, stock minimums, and reorder rules</li>
                <li>Export inventory</li>
                <li>Keep track of manual inventory changes through discrepancies</li>
                <li>Deactivate stock to prevent them from showing in your listing</li>
                <li>Generate reports on your inventory</li>
                <li>Download copies of your inventory records for printing</li>
                <li>View transaction logs for your inventory records</li>
                <li>
                  When you access the <b>Inventory</b> module, you'll see the details of your inventory on the left. Clicking on a
                  line item, except on the master SKU hyperlink, will display the Stock Details per warehouse on the right.
                  Clicking on the master SKU hyperlink will display the inventory settings for that SKU, including its
                  <b>Auto-Reorder Rules, Channel Allocation, Excluded Warehouses, Edit History,</b> and <b>Channel History</b>.
                  Additionally, you can calculate PO estimates. The estimates will allow you to review sales velocity, minimum
                  stock level, reorder quantity, and reorder and runout dates of your stock based on the rules set by the
                  auto-reorder rules functionality.
                </li>
              </ul>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504040/inventory__35_.PNG" />
              <br />
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504041/Screen_Shot_2021-02-25_at_10.58.51_AM.png" />
              <p>
                For more information on Inventory Value Reconciliation, click <a href="">here</a>.
              </p>

              <br />
              <h1>Importing Stock Minimums</h1>
              <br />
              <p>
                Importing stock minimums for each warehouse enables Extensiv Order Manager to alert you when stock falls below the
                minimum level and needs to be reordered. In addition to importing stock minimums by spreadsheet, you can also
                configure minimum levels for individual SKUs.
              </p>
              <p>To import stock minimums for a specific warehouse, follow the steps below.</p>
              <ol>
                <li>
                  Go the <b>Inventory</b> module.
                </li>
                <li>
                  In the <b>Stock</b> tab, click on the <b>Import/Export</b> button and select <b>Import Stock Minimums</b> from
                  the dropdown.
                  <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503872/inventory__23_.PNG" />
                </li>
                <li>
                  In the <b>Select Warehouse for Inventory Import</b> window, select the warehouse from the dropdown that you want
                  to import stock minimums for.
                  <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503876/inventory__24_.PNG" />
                </li>
                <li>
                  In the <b>Warehouse Minimum Inventory Levels Import</b> window, click the link to download the Excel template.
                  <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503877/inventory__25_.PNG" />
                </li>
                <li>Fill out the Excel template and save it to your computer.</li>
                <li>
                  Return to the <b>Warehouse Minimum Inventory Levels Import</b> window and click the <b>Select</b> button to
                  upload the file.
                </li>
                <li>
                  In the the dropdown for Update existing stock if changes found in the Excel file?, select{' '}
                  <b>Yes - Update existing stock and import new</b> and click on the <b>Continue</b> button to import the file.
                  <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503879/inventory__26_.PNG" />
                </li>
              </ol>
              <Alert
                message="Note"
                description="If auto-PO generation is enabled for your Extensiv Order Manager account, Extensiv Order Manager will regularly calculate and update the minimum levels for your SKUs across your warehouses, overriding previously configured stock minimums."
              />
              <br />
              <h1>Incoming Units per Master SKU</h1>
              <br />
              <p>To see the incoming units for a Master SKU, follow the steps below.</p>
              <ol>
                <li>
                  On the <b>Toolbar</b>, click <b>Inventory</b>.
                  <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504044/inventory__36_.PNG" />
                </li>
                <li>
                  On the <b>Product Stock</b> pane, select the <b>Master SKU</b> you are interested in reviewing incoming units.
                  <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504045/inventory__37_.PNG" />
                </li>
              </ol>
              <p>
                The incoming units from each warehouse can be seen on the <b>Stock Details</b> pane that is displayed on the right
                when you select the master SKU.
              </p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504046/inventory__38_.PNG" />
              <p>Additionally, you can click the number of In Transit units on the line item in the Products Stock pane.</p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504047/Screen_Shot_2021-02-26_at_2.28.11_PM.png" />
              <p>
                Clicking on <b>In Transit</b> or <b>Incoming Units</b> will open the Incoming Units dialog box. This dialog box
                will show the list of POs that are in <b>Pending Delivery</b> status or later for this Master SKU.
              </p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504049/Screen_Shot_2021-02-26_at_2.30.35_PM.png" />
              <br />
              <h1>Importing Inventory</h1>
              <br />
              <p>To import inventory, follow the steps below.</p>
              <ol>
                <li>
                  Navigate to the <b>Inventory</b> module.
                </li>
                <li>
                  Click <b>Import/Export</b>, then <b>Import Inventory</b>.
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/ship12.png" />
                </li>
                <li>
                  In the <b>Select Warehouse for Inventory Import</b> window, select the warehouse that inventory will be imported
                  for, then click{' '}
                  <b>
                    <i>Continue</i>
                  </b>
                  . <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/ship13.PNG" />{' '}
                  <br />
                  If the warehouse you want to import inventory from is a Direct (In-House) Fulfillment warehouse, continue to
                  Step 4.If the warehouse is a 3PL or a dropshipping warehouse, skip to Step 5.
                </li>
                <li>
                  In the In-House Inventory Import window, download the Excel Template for Inventory Import. <br />
                  Do not make any edits to the formatting of the file, including the Instructions tab (the first page). Skip to
                  the second tab (Inventory) and begin to make edits there. Do not delete or move around any columns or edit any
                  text in Row 1.
                  <br />
                  Begin entering your inventory data beginning with Row 2, then save the completed file on your computer.
                  <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/inventory%2B_1_.PNG" />
                </li>
              </ol>
              <p>The columns are as follows:</p>
              <p>A: Master SKU</p>
              <p>B: Brand</p>
              <p>C: Location</p>
              <p>D: Draw Rank</p>
              <p>E: Active</p>
              <p>F: Is Pickable?</p>
              <p>G: Is Receivable?</p>
              <p>H: On Hand Stock</p>
              <p>I: Locked Inventory</p>
              <p>J: Location Min. Level</p>

              <h2>The following columns are required and must include values:</h2>

              <p>A: Master SKU</p>
              <p>D: Draw Rank</p>
              <p>H: On Hand Stock</p>

              <Alert
                message="Note"
                description="If Column C is empty, a Location will still be created but it will have no name."
              />
              <Alert
                message="Note"
                description="If Column E, F, or G are empty, the Location can still be created, but it will default to false values (Inactive, Not Pickable, Not Receivable). Be sure to take a look at inactive Locations if you leave Column E blank."
              />
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/inventory1%2B_1_.png" />
              <p>Skip to Step 6.</p>
              <p>
                5. In the <b>External Warehouse Manual Inventory Import</b> window, download the{' '}
                <i>Excel Template for Manual 3PL Inventory Import</i>.
              </p>
              <p>
                Enter your inventory data into the template, then save the completed file on your computer. Do not make any edits
                to the formatting of the file, including editing or removing any of the sheets/tabs (other than inputting
                inventory data into Sheet 1). Do not delete or move around any columns or edit any text in Row 1.
              </p>
              <h2>The following columns are required and must include values:</h2>
              <p>A: Master SKU</p>
              <p>C: On Hand Stock</p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/inventory2.PNG" />
              <p>
                6. Return to the <b>In-House Inventory Import</b> (if you are importing inventory for in-house fulfillment
                warehouse) or <b>External Warehouse Manual Inventory Import</b> (if you are importing inventory for a 3PL or
                dropshipping warehouse) window, select the Excel file from your computer, indicate whether or not you want
                Extensiv Order Manager to update existing stock if updates to existing stock are located in the Excel file, and
                then click <b>Continue</b>.
              </p>
              <p>
                Extensiv Order Manager will then begin processing the file. The speed at which this file is processed depends on
                the amount of inventory data being imported into Extensiv Order Manager. The in progress window will show a meter
                so you can track how much of the file has been processed so far. It will also show the header rows and
                descriptions of both the in-house inventory import and the external warehouse manual inventory import
                spreadsheets. If errors are flagged for any rows, adjust them accordingly. Once the file is done being processed,
                this window will show you how many new and existing SKUs had stock created and/or updated for them.
              </p>

              <br />
              <h1>Uploading Inventory Through the UI</h1>
              <br />
              <p>
                <i>
                  <b>Please note:</b> this method is for individual Master SKU updates and not best suited for businesses that
                  have a large number of Master SKU inventory updates. If you do have a high number of Master SKUs requiring
                  inventory updates, please refer to the{' '}
                  <a href="https://help.extensiv.com/om-inventory/uploading-inventory-via-spreadsheet">
                    Uploading Inventory via Spreadsheet
                  </a>{' '}
                  article.
                </i>
              </p>
              <p>
                To begin, click into the <b>Inventory Module/om-inventory/uploading-inventory-via-spreadsheet</b>. To help
                organize your view, select which warehouse(s) you'd like to view for SKU updates by clicking on “Showing [Number]
                Warehouses” in the top-middle of this page. This drop-down list will include all of your active, integrated
                warehouses.
              </p>
              <p>
                <i>
                  <b>Note:</b> for all warehouses selected that aren’t in-house, the window may be titled, “External Warehouse
                  Manual Inventory Import”.
                </i>
              </p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502453/settings1.png" />
              <p>By selecting one warehouse, you’ll be able to see all the inventory of products for that specific warehouse</p>
              <br />
              <h2>In-house Warehouse</h2>
              <p>
                If you are attempting to add inventory to an in-house warehouse, select your in-house from the drop-down list.
              </p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502455/settings1__1_.png" />
              <p>
                Select the line of the SKU you wish to add inventory to. Then in the “Stock Details” menu that appears on the
                right-hand side, you'll complete the following steps:
              </p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502457/image.png" />
              <h2>Uploading inventory to a new location</h2>
              <ol>
                <li>
                  Click the <b>New Stock</b> button to add a new location at the specific in-house warehouse for the specific
                  Master SKU.
                  <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502458/Screen_Shot_2021-02-18_at_3.25.57_PM.png" />
                  <br />
                  You'll need to complete the following fields:
                  <ul>
                    <li>
                      <b>Location:</b> The name of the location in the warehouse
                    </li>
                    <li>
                      <b>Is Pickable?:</b> Whether inventory can be picked from the location. If this is unchecked, inventory at
                      this location will not be in the "Available" inventory and will not be communicated to your sales channels.
                    </li>
                    <li>
                      <b>On Hand:</b> the amount of inventory at this location
                    </li>
                    <li>
                      <b>Min. Level:</b> the minimum inventory stock level for this location
                    </li>
                  </ul>
                </li>
                <li>
                  Once the fields are completed, click <b>Continue</b>.
                </li>
              </ol>
              <p>
                At this point, inventory has been uploaded for In-House warehouses locations through the Extensiv Order Manager
                UI.
              </p>
              <br />
              <h2>3PL/Retail/Dropship warehouse</h2>
              <p>
                If you’re attempting to add inventory to an 3PL, Retail, or Dropship warehouses, select the appropriate warehouse
                from the your in-house from the “Showing [Number] Warehouses” drop-down list.{' '}
              </p>
              <p>
                <i>
                  <b>Note:</b> these steps are the same for 3PL, Retail, or Dropship warehouses.
                </i>
              </p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502459/Screen_Shot_2021-02-18_at_7.00.00_PM.png" />
              <p>
                Select the line of the SKU you wish to add inventory to. Then in the “Stock Details” menu that appears on the
                right-hand side, you'll complete the following steps:
              </p>
              <ol>
                <li>
                  Click <b>Create Stock</b>.
                  <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502462/Screen_Shot_2021-02-18_at_6.57.56_PM.png" />
                  <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502463/Screen_Shot_2021-02-18_at_7.00.30_PM.png" />
                  <p>You'll need to complete the following fields:</p>
                  <ol>
                    <li>
                      <b>On Hand:</b> the amount of inventory at this location (For 3PLs: typically the 3PL will be pushing
                      inventory counts to Extensiv Order Manager so this could be overridden when the 3PL pushes inventory)
                    </li>
                    <li>Optional fields:</li>
                    <li>
                      <b>Locked:</b> the amount of inventory which is locked at this location. Locked inventory is un-allocatable
                      and is not communicated to sales channels.
                    </li>
                    <li>
                      <b>Allocated:</b> the amount of inventory which is allocated to open orders. IMPORTANT NOTE: this field
                      should not be edited manually as Extensiv Order Manager will be allocating inventory for orders
                      automatically.
                    </li>
                  </ol>
                </li>
                <li>
                  Once the fields are completed, click <b>Save</b>.
                </li>
              </ol>
              <p>
                <i>
                  <b>Note:</b> For Retail and Dropship warehouses, if multiple warehouses are selected for viewing at the same
                  time, they will all be nested under “Dropship Vendors” or "Retail Stores" in the Stock Details menu on the
                  right-hand side.
                </i>
              </p>
              <p>
                At this point, inventory has been uploaded for 3PL/Retail/Dropship warehouses locations through the Extensiv Order
                Manager UI.
              </p>

              <br />
              <h1>How to Manually Add Inventory to a Stock Location</h1>
              <br />
              <p>To manually add product inventory to a stock location, follow the instructions below.</p>
              <ol>
                <li>
                  Go to the <b>Inventory</b> module.
                </li>
                <li>
                  Search for the SKU or product that you want to add more inventory to and click the row.
                  <br />
                  <b>NOTE:</b> For more info on searching within the <b>Inventory</b> module, see{' '}
                  <a href="https://help.extensiv.com/om-inventory/how-to-search-for-skus-in-the-inventory-module">
                    Searching Inventory
                  </a>
                  .
                </li>
                <li>
                  In the <b>Stock Details</b> panel on the right side of the screen, you'll see the warehouse(s) where inventory
                  is available for this product. Click the tab for the warehouse where you want to manually add inventory and then
                  select a stock location from the <b>Stock Breakdown</b> section.
                </li>
                <li>
                  Click the Edit button and then select Add from the pop-up menu.
                  <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503225/inventory__2_.png" />
                  <br />
                  If you want to add stock to a new stock location, click the <b>New Stock</b> button instead and skip to step 6.
                  <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503226/inventory__3_.png" />
                </li>
                <li>
                  In the <b>Add Stock</b> window, enter the number of units being added, then click the <b>Save</b> button. You
                  may also enter a note if you want to keep track of why these units were added.
                  <br />
                  Skip to step 9 to see an example of the stock edit history once units have been added.
                  <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503227/inventory__4_.png" />
                </li>
                <li>
                  Clicking the <b>New Stock</b> button in step 4 opens the <b>New Stock</b> window, where you can add the name of
                  the new stock location, select or unselect the Pickable and Receivable checkboxes depending on whether this
                  stock location should be pickable (orders will be picked from here) or receivable (purchase orders will be
                  received here), and then enter a number of units in the <b>On Hand</b> field.
                  <br />
                  You may also specify a minimum level in the <b>Min. Level</b> field. If you do not wish to set a minimum level
                  for this stock location, enter '0.'
                  <br />
                  <b>NOTE:</b> The minimum level is the least amount of units you always want on hand in this stock location.
                  <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503229/inventory__5_.png" />
                </li>
                <li>
                  Click the <b>Continue</b> button.
                </li>
                <li>
                  In the next window, determine the draw rank for the new stock location. The draw rank determines the order in
                  which stock locations will be used to fulfill incoming orders. By default, the newly created stock location will
                  be added to the bottom of this list but you can drag and drop these stock location to create a new draw rank
                  order.
                  <br />
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503232/inventory__6_.png" />
                </li>
                <li>
                  Click the <b>Save</b> button. In the <b>Stock Details</b> panel, if you are adding stock to an existing
                  location, you will see the stock added to the stock location.
                </li>
              </ol>
              <p>
                If you are adding stock to a new stock location, you will see the stock location added to the{' '}
                <b>Stock Breakdown</b> for the warehouse.
              </p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503235/inventory__7_.png" />

              <br />
              <h1>How to Filter Inventory by Warehouse</h1>
              <br />
              <p>
                The default view of the <b>Inventory</b> module will include the total sum of inventory across all of your
                warehouses (in the <b>Stock</b> tab, all warehouses will be selected in the <b>Showing # Warehouses</b> dropdown).
                If you need to view inventory at a specific warehouse (or warehouses), follow the steps below to filter inventory
                by warehouse(s).
              </p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503789/inventory__15_.png" />
              <ol>
                <li>
                  Go to the <b>Inventory</b> module.
                </li>
                <li>
                  In the <b>Stock</b> tab, click into the <b>Showing # Warehouses</b> dropdown and select <b>Uncheck all.</b>
                </li>
                <li>
                  Once <b>Uncheck all</b> has been selected, click into the checkboxes next to the warehouses that you want to
                  filter inventory by. If a warehouse is selected, its inventory will be included in the On Hand, Locked,
                  Allocated, In Transit, and Available quantities visible in the <b>Stock</b> tab.
                </li>
              </ol>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503790/inventory__16_.png" />
            </ol>
          </Card>
        </Col>
      </Row>
    </>
  );
}
