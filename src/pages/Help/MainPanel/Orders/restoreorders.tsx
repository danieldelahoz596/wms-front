import { Card, Row, Col, Alert } from 'antd';

export default function () {
  return (
    <>
      <h2>Orders {'>'} Restore an On-Hold Order</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Restore an On-Hold Order</h1>
            <p>
              To restore an order that is on hold, first go to the <strong>Orders</strong> module.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders.PNG"
              style={{ width: 1000 }}
            />
            <br />
            <br />
            <ol>
              <li>
                <p>
                  On the <strong>Search/Filter</strong> pane on the left, click the <i>On Hold</i> status dropdown and view All.
                  <br />
                  For help in searching the <strong>Order</strong> module, see{' '}
                  <a href="" className="helplink">
                    Searching for Orders
                  </a>
                  .
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders2.png"
                  style={{ width: 200 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  In the <strong>Orders</strong> section in the middle, select/highlight the row of the on hold order to be
                  restored, then click{' '}
                  <i>
                    <strong>Restore</strong>
                  </i>
                  .
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders4.png"
                  style={{ width: 800 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  On the <strong>Restore Orders</strong> confirmation window, click the <strong>Yes - Restore</strong> button to
                  confirm that you are restoring the on-hold order.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/orders5.PNG"
                  style={{ width: 400 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>Once the order is restored, the order will fall into the next applicable status.</p>
              </li>
            </ol>
          </Card>
        </Col>
      </Row>
    </>
  );
}
