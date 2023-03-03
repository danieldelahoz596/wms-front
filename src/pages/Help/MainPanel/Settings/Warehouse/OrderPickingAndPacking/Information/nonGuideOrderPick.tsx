import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Non-Guided Order Pick
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Non-Guided Order Pick</h1>
            <br />
            <p>
              Extensiv Warehouse Manager Order Picking can be run in a couple of different modes. Which mode you use will depend
              on company to company and how you perform your day to day operations. Switching between guided and standard order
              pick will require a request to <a href="mailto:support-wms@extensiv.com">support-wms@extensiv.com</a>{' '}
            </p>
            <h2>Non-Guided Order Pick</h2>
            <p>
              This mode of the order pick screen will give the user a list of products on the order instead of guiding the user
              automatically. This mode may work better for more non-conventional warehouse models.
            </p>
            <p>See the following topics for more information:</p>
            <ul>
              <li>
                <a href="">Step by Step guide for Non-Guided Order Pick on Device (Handheld Scanner)</a>
              </li>
              <li>Step by Step guide for Non-Guided Order Pick on Mobile (iPhone/Android)</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </>
  );
}
