import { Card, Row, Col } from 'antd';

export default function () {
  return (
    <>
      <h2>PurchaseOrders {'>'} How can I delete a line item from a purchase order?</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How can I delete a line item from a purchase order?</h1>
            <br />
            <p>
              <b>Note:</b> Only POs that are{' '}
              <b>
                <i>awaiting authorization</i>
              </b>{' '}
              and{' '}
              <b>
                <i>awaiting confirmation</i>
              </b>{' '}
              can have line items deleted from them.
            </p>
            <p>To delete a line item from a PO, follow the procedure below.</p>
            <ol>
              <li>
                On the <b>Purchasing</b> module, on the <b>Search/Filter By</b> pane, search for the PO from which the line item
                is to be deleted.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502862/po__2_.PNG" />
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502863/shipments1.PNG" />
                <br />
                <b>NOTE:</b> For more details on searching within the <b>PO</b> module, see Searching for POs.
              </li>
              <li>
                On the <b>Purchase Orders</b> pane, click the PO.
              </li>
              <li>
                On the <b>PO Details</b> pane at the bottom, select the item to be removed from the PO, then click the{' '}
                <b>Remove</b> button on the right.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502866/shipments1__1_.PNG" />
              </li>
              <li>
                On the confirmation message, click <b>Yes - Remove Item</b> to confirm the line item's deletion.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502868/shipments1__2_.PNG" />
              </li>
            </ol>
            <p>
              On the <b>PO Details</b> pane, the removed line item can no longer be seen on the list.
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
