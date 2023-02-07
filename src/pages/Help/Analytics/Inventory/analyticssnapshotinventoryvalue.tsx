import { Card, Row, Col } from 'antd';

export default function () {

  return (
    <>
      <h2>Analytics {'>'} Inventory {'>'} Analytics - Snapshot Inventory Values</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>What does this report reveal?</h1>
            <p>This report reveals a snapshot of the total inventory value across all of your warehouses for a specific date.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504108/analytics__8_.PNG' style={{ width: 1000 }} />
            <br /><br /><br />
            <h1>How to read this report?</h1>
            <p>The Total Inventory Value at the top of the report shows the total inventory value across the warehouses that are selected at the bottom of the report. To select or unselect a warehouse, either to include it or exclude it from this report, click the colored square next to the warehouse name</p>
            <h1>What actions to take after analyzing this report?</h1>
            <p>You should review this report alongside the <strong>Trending Value</strong> report. After your analysis, you'll be able to identify which warehouses have the most inventory value associated with them, and if inventory is not moving quickly enough, estimate future storage fees.</p>
            <h1>How to export this report?</h1>
            <p>To export this report, click the menu icon in the top right corner of the report and select an option to download the report as a PNG, JPEG, PDF, or SVG vector image.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504109/Inventory-Value-Snapshot.png' style={{ width: 1000 }} />
          </Card>
        </Col>
      </Row>
    </>
  );
};
