import { Card, Row, Col, Alert } from 'antd';

export default function () {
  return (
    <>
      <h2>PurchaseOrders {'>'} Explanation of PO Statuses</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Explanation of PO Statuses</h1>
            <br />
            <p>
              When a <b>Purchase Order</b> is created in Extensiv Order Manager, whether it was generated through an Auto P.O. or
              it was created manually, there are several statuses the purchase order will go through in the Purchasing module.
              Let’s take a closer look at each one.
            </p>
            <br />
            <h2>Awaiting Authorization</h2>
            <p>
              When a P.O. is first created it will come into this status. If you have more than one warehouse it will go into
              whichever is the destination warehouse that the P.O. was created for.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO%2B_1_.png" />
            <p>
              The P.O. will sit in this status until you or another authorized user goes in and authorizes the P.O. Please note:
            </p>
            <ul>
              <li>
                If you <b>manually created</b> the P.O., you can <b>Save & Authorize</b> it since you are creating this from your
                own need and understanding of the stock. If this P.O. was created via <b>Auto P.O.</b>, then it is simply awaiting
                authorization, and all you would need to do is authorize the P.O.
              </li>
            </ul>
            <p>
              To see how the P.O. was created simply look in the <b>Created By</b> column. If you see that "Extensiv Order
              Manager" created the P.O., then it was generated automatically (it's an Auto P.O.). If it was created manually, it
              will show the name of the user who created it.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO1%2B_1_.png" />
            <p>
              Authorizing a P.O. for the first time or upon Re-Authorization will prompt an email to send to your Vendor's P.O.
              E-Mail contact of a Pro Forma PDF. The email subject will follow the format of:{' '}
              <b>Purchase Order ###### for CompanyInfoCompanyName.</b> Your P.O. will then move to the{' '}
              <b>Awaiting Confirmation</b> stage under whichever warehouse is the destination warehouse.
            </p>
            <p>
              <b>Please NOTE:</b> Regardless of whether the P.O. was auto-generated by Extensiv Order Manager or manually created,
              we will <b>continuously update the P.O.</b> with system calculated items and quantities until it’s been authorized.
              Once authorized there will be no more automated changes to the P.O. The automated updates of a purchase order can be
              disabled by unchecking the "Enable Auto Updates?" button in P.O. Details.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-01-25%2Bat%2B3.15.30%2BPM.png" />
            <br />
            <h2>Awaiting Confirmation</h2>
            <p>
              A P.O. in this status is waiting for the vendor/supplier or you to confirm all quantities and items in the P.O. When
              you select a P.O. in this status you will be presented with several options:
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO2%2B_1_.PNG" />
            <ul>
              <li>
                <b>Print:</b> this will provide you with a downloadable version of the Pro Forma, for all P.O.s selected.
              </li>
              <li>
                <b>Re-send:</b> this will re-send the P.O. to your vendor, for all P.O.s selected
              </li>
              <li>
                <b>Cancel:</b> this will cancel the P.O.(s) selected, and will send the P.O.(s) to the “canceled” sub-section in
                the left-hand navigation
              </li>
              <li>
                <b>Confirm:</b> select this option to confirm that your vendor received and acknowledges your P.O., for all P.O.s
                selected.
              </li>
            </ul>
            <p>
              You also have the option to edit the P.O. on an item-by-item basis in the bottom half of the page. You can choose to{' '}
              <b>add</b> an item, <b>edit</b> an existing item or <b>remove</b> an item. If you perform any of these actions,
              Extensiv Order Manager will send the P.O. to the <b>Awaiting Re-Authorization</b> stage where it must be
              re-authorized and then confirmed at a later time. Extensiv Order Manager will prompt you with a confirmation window
              stating: This P.O. is awaiting confirmation by the vendor. Modifying it will change its status to Awaiting
              Re-Authorization for final approval by the P.O. Authorizer.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO3%2B_1_.png" />
            <p>
              All actions taken regarding the P.O. will be tracked and available to view in the “History” tab in the bottom
              right-hand side of the window.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO4%2B_1_.png" />
            <p>
              When you are ready to confirm the P.O., select the P.O. and click <b>“confirm”</b>. You will be prompted with a new
              window. Click <b>“Yes - Confirm P.O.”</b>.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO5.png" />
            <p>
              This will then move the P.O. to the <b>Pending Delivery</b> status, under whichever warehouse is the destination
              warehouse.
            </p>
            <br />
            <h2>Pending Delivery</h2>
            <p>
              When a P.O. is in this status, it has been confirmed by your vendor and you are awaiting delivery of the shipment.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO6.png" />
            <p>When you select a P.O. in this status you will be presented will several options:</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO7.PNG" />
            <ul>
              <li>
                <b>Print:</b> this will provide you with a downloadable version of the Pro Forma or a sheet of the Pending Items,
                in bulk for all P.O.s selected.
              </li>
              <li>
                <b>Re-send:</b> this will re-send the P.O. to your vendor, for all P.O.s selected.
              </li>
              <li>
                <b>Receive:</b> this will accept the inventory into your warehouse, in bulk for the entire P.O. When you select
                this option you will be prompted with a new window. Complete all the fields requested to properly document
                receiving of the purchase order. For more information on Receiving Purchase Orders in Extensiv Order Manager
                please refer
                <a href="">here</a>. The fields are:
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1.jpg" />
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO8.png" />
              </li>
            </ul>
            <p>
              Fill in the fields in the top line <b>“Apply To All”</b> to apply to all items in the entire P.O. You can also
              update information for each item in the P.O. individually in their own respective boxes.
            </p>
            <Alert
              message="Please Note"
              description="The Update Inventory option is by default NOT checked off for P.O.s to 3PLs because we assume a 3PL has their inventory auto-updated by an FTP/API connection."
            />
            <p>
              In the bottom half of the page, you have the option to edit the P.O. on a line-by-line basis. You can <b>add</b> an
              item to the P.O., <b>edit</b> an existing item, <b>receive</b> the item individually, <b>void</b> the item, or{' '}
              <b>cancel</b> the item.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO9.png" />
            <p>
              If you choose to <b>void</b> an item, you will be prompted with a new window indicating that this item was
              unfulfilled by the vendor. Click <b>“Yes - Void Item”</b>.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO10.png" />
            <p>
              If you choose to <b>cancel</b> an item, you will be prompted with a new window indicating this item will be marked
              as an error as opposed to being a fault of the vendor's. Click <b>Yes - Cancel Item.</b>
            </p>
            <img src="https://downloads.intercomcdn.com/i/o/278685389/61adb09302cb602de5feda5b/PO11.png" />
            <p>
              Depending on how many line items are left unreceived on the P.O., it will move into one of the remaining statuses.
            </p>
            <br />
            <h2>Partially Delivered</h2>
            <p>A P.O. will move into this status if some items in the P.O. were delivered while others are still pending.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO12.png" />
            <br />
            <h2>Fulfilled</h2>
            <p>
              If all items in a P.O. were received, regardless of whether there was a line item cancellation, the P.O. will move
              into this status.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO14.png" />
            <br />
            <h2>Closed Short</h2>
            <p>
              If there were any items in the P.O. that were voided while others were received, the P.O. will move into this
              status.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO15.png" />
            <br />
            <h2>Voided</h2>
            <p>If all line items were voided, or the entire P.O. is voided, then the P.O. will move into this status.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO16.png" />
            <br />
            <h2>Canceled</h2>
            <p>If all line items were canceled, or the entire P.O. was canceled, the P.O. will move into this status.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO17.png" />
            <Alert
              message="Please Note"
              description="Any changes made to a P.O.’s costs after it’s been fulfilled will update on the analytical end."
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
