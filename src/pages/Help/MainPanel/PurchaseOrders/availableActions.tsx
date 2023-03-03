import { Card, Row, Col, Alert } from 'antd';

export default function () {
  return (
    <>
      <h2>PurchaseOrders {'>'} Available Actions for a PO</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Available Actions for a PO</h1>
            <br />
            <p>
              Once in the <b>Purchasing</b> module, you can view purchase orders in different statuses.{' '}
              <b>Depending on what status a PO is in, more/fewer actions will be available for users.</b>{' '}
            </p>
            <p>
              <b>ie:</b> You cannot <b>void</b> a PO item for a PO that is in an Awaiting Authorization status because you can
              simply <b>remove</b> it as it hasn't been sent to the Vendor yet.
            </p>
            <p>The edit PO options will be seen under the Items tab of a PO.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/pic11.png" />
            <h2>Add Item</h2>
            <p>
              You can <b>add new items</b> to a PO in any open status. This means any PO that is not in the following statuses:
            </p>
            <ul>
              <li>Fulfilled</li>
              <li>Closed Short</li>
              <li>Voided</li>
              <li>Canceled</li>
            </ul>
            <h2>How to Add a New Item</h2>
            <ol>
              <li>Click the Add Item button</li>
              <li>
                Click on the Select a Product dropdown and Search for the product you want to add.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_1_.png" />
              </li>
              <li>
                Indicate the <b>Quantity</b> <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_2_.png" />
              </li>
              <li>
                Select the <b>Unit of Measure</b>
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_3_.png" />
              </li>
              <li>
                Click <b>Add</b>
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_4_.png" />
              </li>
              <li>
                After adding the product, you can add more details in the fields that can be edited
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_5_.png" />
              </li>
              <li>
                Click <b>Save</b>
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_6_.png" />
              </li>
            </ol>
            <h3>Edit</h3>
            <p>
              This option allows you to edit existing line items in the PO. To edit those items, select the row of an item, then
              click the Edit button.
            </p>
            <p>These are the fields that can be edited in the Edit window:</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_7_.png" />
            <p>
              Make sure to click on <b>Save</b> after editing.
            </p>
            <h3>Receive</h3>
            <p>
              This option allows you to receive a selected line item. If you only receive some line items in the PO and not all,
              the PO will go to a <b>Partially Delivered</b> status. Receiving fewer units than were ordered will result in an
              additional line item for the same item to be created, where the remainder of the unreceived units are in a pending
              delivery status. For directions on how to receive an entire PO at once (or to select which items NOT to receive)
              <a href="">visit this article.</a>
            </p>
            <p>
              These are the fields that you will see when you receive a PO. <b>Delivered and Billed on Dates</b> are required.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_8_.png" />
            <p>
              Checking the <b>Update Inventory</b> option will add the receiving stock quantities to the On Hand inventory for the
              product at the Receiving Location, in the Receiving Warehouse.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_9_.png" />
            <p>
              Select <b>Receiving Location.</b> If there isn't an existing location in the dropdown menu, add a new one by
              clicking on the plus (+) symbol.
            </p>
            <p>
              Click <b>Save</b> after all edits have been made.
            </p>
            <h3>Void</h3>
            <p>
              This option allows you to void an item. Voiding items is only an option for unreceived (Pending) status items.
              Voiding is an option for POs as a whole, as well as for individual items.
            </p>
            <Alert message="Note" description="Voiding the item will mark it as unfulfilled by the vendor." />
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_10_.png" />
            <h3>Cancel</h3>
            <p>
              This option allows you to cancel items. This is only an option for items in POs that have been Authorized, but that
              not yet been closed.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_11_.png" />
            <h3>Details Tab</h3>
            <p>
              The details tab allows you to edit the <b>PO Details</b>, add other <b>Aggregate Costs</b>, manage <b>Milestones</b>{' '}
              and add <b>Notes to Vendor.</b>
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_12_.png" />
            <h3>PO Details</h3>
            <p>
              This section allows you to update the <b>Destination</b> Warehouse, add a <b>Custom PO Number</b>, change the{' '}
              <b>PO Format</b>, change the <b>PO Template</b>, change the <b>Shipping</b>, change <b>Payment Type</b>, add{' '}
              <b>Payment Type</b>, configure Payment Types, update the <b>Confirm by Date</b>, and add <b>Internal Notes</b>
            </p>
            <p>
              <b>Note:</b> The Destination Warehouse can only be edited for a PO that has not had any items received yet. Once at
              least one unit has been received of an item on a PO, it can no longer have its Destination Warehouse edited.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_13_.png" />
            <p>
              Checking the <b>Enable Auto Updates</b> option allows Extensiv Order Manager to automatically adjust the purchase
              order stock quantities based on sales velocity and other associated re-order rules that have been established per
              SKU.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_14_.png" />
            <p>
              Checking the <b>Bulk update line items estimated delivery date?</b> option allows Extensiv Order Manager to update
              the estimated delivery date of all line items in the PO.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_15_.png" />
            <p>
              After editing the fields in the PO Details section, make sure to click on <b>Update Details.</b>
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_16_.png" />
            <h2>Aggregate Costs</h2>
            <p>
              This section allows you to update or add a <b>Shipping Cost</b> and add <b>Other Costs</b>.
            </p>
            <Alert message="Note" description="After adding or editing in this section, make sure to click on Update Costs." />
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_17_.png" />
            <h2>Milestones</h2>
            <p>
              This section allows you to <b>manage milestones, add milestones</b>, update the milestones,{' '}
              <b>delete milestones or configure milestones.</b>
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_18_.png" />
            <p>
              <b>Manage Milestones</b>
            </p>
            <p>
              In here, you can either change to a different milestone by clicking on the dropdown, or configure milestones by
              clicking on the gear icon.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/image%2B_35_.png" />
            <p>
              <b>Configure Milestones</b>
            </p>
            <p>In here, you can either add a New Milestone or Delete Milestone.</p>
            <p>
              <b>Adding a New Milestone</b>
            </p>
            <ol>
              <li>
                Click on <b>New Milestone</b>
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_19_.png" />
              </li>
              <li>Add a Milestone Name</li>
              <li>
                Customize the color for faster identification.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_20_.png" />
              </li>
            </ol>
            <p>
              <b>Deleting a Milestone</b>
            </p>
            <ol>
              <li>Select the milestone that you want to delete</li>
              <li>
                Click <b>Delete Milestone.</b>
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_21_.png" />
              </li>
            </ol>
            <h2>Vendor Communication</h2>
            <p>This section allow you to add Notes to Vendor.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_22_.png" />
            <h2>How to Add the Note to Vendor</h2>
            <ol>
              <li>
                Click on <b>To Vendor</b>
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_22_.png" />
              </li>
              <li>
                Add <b>Message. Save.</b>
              </li>
            </ol>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Image%2B1%2B_23_.png" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
