import { Card, Row, Col } from 'antd';

export default function () {

  return (
    <>
      <h2>Analytics {'>'} Inventory {'>'} Analytics - Trending Inventory Value</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>What does this report reveal?</h1>
            <p>This report reveals the total inventory value in all your warehouses, any combination of your warehouses, or in each individual warehouse and compares the volume of inventory in each warehouse over a given date range.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504166/analytics__16_.PNG' style={{ width: 1000 }} />
            <br /><br /><br />
            <h1>How to read this report?</h1>
            <p>This report identifies each warehouse’s inventory value with an assigned color, easing identification of your warehouses with the most inventory. Hovering with the mouse over each date identifies the inventory value in your warehouses over the given period, allowing you to identify trending inventory value data.</p>
            <h1>What actions to take after analyzing this report?</h1>
            <p>After your analysis, you should be able to identify how much revenue is located at each location. If you have high inventory value sitting in specific warehouses, you should check to ensure that your products are moving so as not to incur extra fees. You should also take steps to prevent long term sitting fees in your sales channels.</p>
            <h1>How to export this report?</h1>
            <p>This report can be downloaded as an image or PDF by clicking on the hamburger menu at the right-hand corner of the graph.</p>
          </Card>
        </Col>
      </Row>
    </>
  );
};
