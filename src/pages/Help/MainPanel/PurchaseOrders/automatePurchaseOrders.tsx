import { Card, Row, Col } from 'antd';

export default function () {
  return (
    <>
      <h2>PurchaseOrders {'>'} How to Automate Purchase Orders (Auto-POs)</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Automate Purchase Orders (Auto-POs)</h1>
            <br />
            <p>
              In the <b>Purchasing</b> module, Extensiv Order Manager simplifies your reordering process by generating automated
              purchase orders, or auto-POs, when your stock goes below your minimum inventory levels. The <b>Purchasing</b> module
              also allows you to:
            </p>
            <ul>
              <li>
                <a href="">Manually create POs</a>
              </li>
              <li>
                <a href="">Add, print, send (and re-send), receive, void, and cancel POs</a>
              </li>
              <li>
                <a href="">Authorize</a> and following a PO update, re-authorize POs
              </li>
              <li>
                View the <a href="">PO status</a>
              </li>
              <li>View details of your POs, including line items</li>
              <li>Update details and costs</li>
              <li>
                <a href="">Manage PO milestones</a>
              </li>
            </ul>
            <p>
              The <b>Purchasing</b> module is split into three main sections: the left panel, the high-level view, and the
              detailed view. The left panel shows the varies PO statuses. If you click the magnifying glass, the left panel will
              become the <b>Search</b> panel, which allows you to search for purchase orders and export them if needed.
            </p>
            <p>
              The rest of the module is split into a high-level view of purchase orders on the top of the screen and a detailed
              view of purchase order line items on the bottom of the screen. Select the checkbox next to a purchase order in the
              high-level view to see a detailed view of the line items in the bottom of screen.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503753/po__3_.PNG" />
            <p>
              If you select the checkbox for a PO in the high-level view, the buttons along the top of the screen will allow you
              to perform various actions, like authorizing the PO if it's in Awaiting Authorization to send it to your vendor. If
              you need to update the line items of a PO, select the checkbox next to the PO to see the line items in the detailed
              view and use the buttons on the right side of the screen. If you need to add an item, click the <b>Add Item</b>{' '}
              button, and if you need to edit or remove an item, click into the line item row to select it before clicking the{' '}
              <b>Edit</b> or <b>Remove</b> button.
            </p>
            <p>
              <b>How to Automate Purchase Orders</b>
            </p>
            <p>
              Now that you have an understanding of the layout of the <b>Purchasing</b> module and where to find auto-POs, you can
              begin using auto-POs. If auto-POs weren't enabled when you first set up your Extensiv Order Manager account, you can
              enable them now by following the steps below.
            </p>
            <ol>
              <li>Log in to Extensiv Order Manager.</li>
              <li>
                Click on the <b>Settings</b> module.
              </li>
              <li>
                Click on <b>Company Info.</b>
              </li>
              <li>
                Scroll to the <b>Purchase Order Settings</b> section and select the checkbox next to <b>Auto PO Generation?</b>{' '}
                You will also need to add a PO number prefix if one does not exist already. The PO number prefix will be added to
                the beginning of each PO number and can be a number or text value.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503756/Purchase-Order-Settings.png" />
              </li>
              <li>
                Scroll down and click on the <b>Update</b> button on the bottom of the screen to save changes to the{' '}
                <b>Purchase Order Settings</b> and enable Auto-POs.
              </li>
            </ol>
            <p>
              Auto-POs will begin to appear in the <b>Purchasing</b> module based on the minimum inventory levels and auto-reorder
              rules for your SKUs. To locate auto-POs, search for purchase orders that have been created by Extensiv Order Manager
              (the <b>Created By</b> column will list Extensiv Order Manager as the user that created the PO).
            </p>
            <p>
              For more details on how Auto POs are calculated, <a href="">keep reading here.</a>
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
