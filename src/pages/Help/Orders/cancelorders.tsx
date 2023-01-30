import { Card, Row, Col, Alert } from 'antd';

export default function () {

  return (
    <>
      <h2>Products {'>'} Cancel an Order</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Cancel an Order</h1>
            <p>Orders that are in <strong>Awaiting Shipment or Pending Fulfillment</strong> can be canceled.</p>
            <p>To cancel an eligible order, follow the procedure below.</p>
            <ol>
              <li>
                  <p>Navigate to the Orders Module</p>
              </li>
              <li>
                  <p>Search for the order you want to cancel using the <strong>Search/Filter</strong> panel on the left.<br />For more details on how to search for orders, see <a href='' className='helplink'>Searching for Orders</a>.</p>
                  <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/cancel%2B_1_.png' style={{ width: 300 }} />
                  <br /><br /><br />
              </li>
              <li>
                  <p>In the <strong>Orders</strong> panel in the middle section, select the order to be canceled. Then click the Edit dropdown menu, then <strong>Cancel Order</strong>.</p>
                  <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/cancel2.png' style={{ width: 800 }} />
                  <br /><br /><br />
              </li>
              <li>
                  <p>In the <strong>Cancel Orders</strong> window, select the reason for cancellation from the list.</p>
                  <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/cancel3.PNG' style={{ width: 500 }} />
                  <br /><br /><br />
              </li>
              <li>
                  <p>Check the <strong>Notify sales channel?</strong> checkbox to prompt Extensiv Order Manager to cancel the order on the sales channel as well. If this box is selected, then you can also choose to Refund the order in the sales channel. The yellow information details box will list the sales channel(s) that currently support this specific refund functionality.</p>
                  <Alert
                      message="Note"
                      description="Canceled orders can no longer be restored if the sales channel is notified of the cancellation."
                      type="info"
                  />
                  <br /><br />
                  <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/cancel4.PNG' style={{ width: 500 }} />
                  <br /><br /><br />
              </li>
              <li>
                  <p>Lastly, click the <strong>Yes - Cancel Order</strong> button to confirm the cancellation.</p>
              </li>
            </ol>
          </Card>
        </Col>
      </Row>
    </>
  );
};
