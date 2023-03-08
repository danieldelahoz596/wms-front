import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Order Pick Overview
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Order Pick Overview</h1>
            <br />
            <p>
              Once outbound Shipping orders arrive in Warehouse Manager(via integration or created in Warehouse Manager), the next
              step is for a warehouse worker to pick the order. Picking an order is the process of removing inventory against an
              order.
            </p>
            <ul>
              <li>
                <a href="">Guided Order Pick</a>
              </li>
              <li>
                <a href="">Non-Guided Order Pick</a>
              </li>
              <li>
                <a href="">Wave Picking</a>
              </li>
            </ul>
            <p>
              Click one of these picking modes to learn more, or see the Order Picking Modes section of this guide to determine
              which version is right for your organization. To switch between guided and non-guided order pick, please speak to
              your Extensiv support rep.
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
