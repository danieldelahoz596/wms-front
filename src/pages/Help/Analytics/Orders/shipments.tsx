import { Card, Row, Col } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Analytics {'>'} Orders {'>'} Shipments
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h2>What does this report reveal:</h2>
            <p>
              This Extensiv Order Manager report reveals your Shipments by Carrier over a specified period of time. This report
              can be filtered by Sales Channel and/or Warehouse.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504168/analytics__17_.PNG"
              style={{ width: 1000 }}
            />
            <br />
            <br />
            <br />
            <h2>How to read this report:</h2>
            <p>
              For this report, you can filter by Sales Channel and Warehouse and specify a date range. Extensiv Order Manager will
              then display the number of shipments by carrier over the specified date field.
            </p>
            <h2>What actions to take after analyzing this report:</h2>
            <p>
              From this report, you can see which carriers you are most often shipping with per sales channel and/or warehouse.
              You can compare between the warehouses or shipping providers and decide if their shipping performance is up to par.
              If not, you should focus more of your products to an alternative, better performing 3PL / warehouse, or renegotiate
              your contract with them.
            </p>
            <h2>How to export this report:</h2>
            <p>
              This report can be downloaded as an image or PDF by clicking on the hamburger menu at the right-hand corner of the
              graph.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504167/export__1_.PNG"
              style={{ width: 1000 }}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
