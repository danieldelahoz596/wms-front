import { Card, Row, Col } from 'antd';

export default function () {
  return (
    <>
      <h2>PurchaseOrders {'>'} Printing a P.O.</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Printing a P.O.</h1>
            <br />
            <p>If you would like to print your Purchase Order from Extensiv Order Manager, follow the below steps:</p>
            <ol>
              <li>
                Navigate to the <b>Purchasing</b> Module
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO%2B_15_.png" />
              </li>
              <li>
                You are able to print a P.O. regardless of status. The option will be available during all stages of the P.O.s
                lifespan.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO%2B_16_.png" />
              </li>
              <li>
                Select the check boxes next to the applicable orders you wish to to <b>print</b>, then select Print from the top
                menu.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO%2B_17_.png" />
              </li>
              <li>
                Depending on the status of the purchase order, you may see additional print options. To print the P.O. select{' '}
                <b>Pro Forma</b>.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/PO%2B_18_.png" />
              </li>
              <li>
                A printable P.O. will be generated in a new tab. This will use the template you've designated for your vendor in
                the Settings module. For more information, please review our P.O. Template article.
              </li>
            </ol>
            <p>Below is an example of what a printed P.O. may look like using the default template.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/pic447658.png" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
