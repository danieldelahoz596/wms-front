import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Guided Order Pick
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Guided Order Pick</h1>
            <br />
            <p>
              Extensiv Warehouse Manager Order Picking can be run in a couple of different modes. Which mode you use will depend
              on company to company and how you perform your day to day operations. Switching between guided and standard order
              pick will require a request to <a href="mailto:support@scoutsft.com">support@scoutsft.com</a>
            </p>
            <br />
            <p>
              *Guided order pick is available on device versions 1.0.5613.28025 and later. Your device version is found on the
              upper right hand corner of the device login page. Mobile.scoutsft.com is compatible with guided order pick
            </p>
            <br />
            <h2>Guided Order Pick</h2>
            <p>
              Guided order pick will arrange the lines on an order and guide the user to the first alphabetical bin to get the
              product for the order.
            </p>
            <p>Example:</p>
            <p>Order 0001 has 2 products on it</p>
            <ul>
              <li>Product 1 - Located in Bin C-01-04</li>
              <li>Product 2 - Located in Bin B-02-01</li>
            </ul>
            <p>
              When this order is opened the device will send the user to Bin B-01-01 first to pick Product 2, since it is the
              first alphabetical bin. There are options in guided order pick to select a different bin if you do not wish to pick
              from the bin selected by the system.
            </p>
            <h3>
              <a href="">Click here for step by step guide to Guided Order Picking</a>
            </h3>
            <br />
            <p>See the following video for more information</p>
            <iframe src="https://www.youtube.com/watch?v=XNdCGhCvaxw" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
