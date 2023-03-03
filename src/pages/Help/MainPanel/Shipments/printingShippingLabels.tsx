import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>Shipments {'>'} Printing Shipping Labels</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Printing Shipping Labels</h1>
            <br />
            <p>
              If you are using direct/in-house fulfillment, you will need to print shipping labels prior to the providers picking
              up the orders for delivery to your customers. This ensures your negotiated rates are charged by your shipping
              providers.
            </p>
            <p>
              <b>NOTE:</b> Before you print shipping labels, make sure that the orders have been shipped first in Extensiv Order
              Manager. For more information on how to ship your orders using Extensiv Order Manager, see{' '}
              <a href="">Shipping Orders</a>.
            </p>
            <p>There are two ways to print shipping labels in Extensiv Order Manager.</p>
            <ol>
              <li>
                Through the <b>Orders</b> module - shipping labels, packing slips, and pick lists can be printed right after
                adding orders to a shipping queue. See <a href="">Shipping Orders</a> for more information.
              </li>
              <li>
                Through the <b>Shipments</b> module - you can print or re-print shipping labels for all direct or
                in-house-fulfilled orders. You can also print packing slips and pick lists here.
              </li>
            </ol>
            <p>
              We discuss the second option - printing through the <b>Shipments</b> module - in the procedure below.
            </p>
            <h2>To Print Shipping Labels</h2>
            <ol>
              <li>
                On the <b>Toolbar</b>, click <b>Shipments</b>.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502899/shipments.PNG" />
              </li>
              <li>
                Navigate to the <b>Search/Filter</b> panel on the left and search for the record that needs a shipping label.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502900/shipments1__3_.PNG" />
                <br />
                <b>NOTE:</b> {"For help in using the Shipment module's Search function, see"}{' '}
                <a href="">Searching for Shipments</a>.
              </li>
              <li>
                On the <b>Shipments</b> page, select the record that needs a shipping label printed, then click{' '}
                <b>Print Labels</b> at the top.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502903/shipments1__4_.PNG" />
              </li>
              <li>
                On the <b>PDF Options</b> window, select either <b>Download PDF</b> to save a copy of the shipping label to your
                computer or
                <b>Open in Browser</b> to display a PDF copy of the shipping label on your browser window.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502904/shipments1__5_.PNG" />
              </li>
            </ol>
            <p>
              The <b>Print Labels</b>, <b>Print Packing Slips</b>, <b>Print Pick List(s)</b>, and <b>Print Global Pick List</b>
              buttons will allow you to either download or open PDF version of the shipping label(s), packing slip(s), pick
              list(s), or global pick list(s) for the selected shipment(s).
            </p>
            <p>
              When printing documents for a{' '}
              <b>
                <i>batch</i>
              </b>
              , you can also print an Order Report and Batch Manifest (not available from Search, only available from the{' '}
              <b>Batches</b> dropdown view.)
            </p>
            <ul>
              <li>
                Print Order Report will give you the option to view the selected batch in either a PDF or open in browser. It will
                show the details per order in this batch on separate pages.
              </li>
              <li>Print Batch Manifest will give you a snapshot of the selected batch with the details of each order within.</li>
            </ul>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502905/shipment__1_.PNG" />
            <h2>Label Example</h2>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502906/Screen_Shot_2021-02-25_at_9.38.37_AM.png" />
            <h2>Packing Slip Example</h2>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502908/print.PNG" />
            <h2>Pick List Example</h2>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502909/print__1_.PNG" />
            <h2>Global Pick List Example</h2>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502910/print__2_.PNG" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
