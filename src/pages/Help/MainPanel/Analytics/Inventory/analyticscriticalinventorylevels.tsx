import { Card, Row, Col } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Analytics {'>'} Inventory {'>'} Analytics - Critical Inventory Levels
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>What does this report reveal?</h1>
            <p>This report reveals the sales velocity and estimated stockout dates for each of your products.</p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504347/analytics__18_.PNG"
              style={{ width: 1000 }}
            />
            <br />
            <br />
            <br />
            <h1>How to read this report?</h1>
            <p>
              You read this report by selecting the warehouse you wish to gain insight into, selecting the time span for when the
              inventory will run out by, and focus your attention to the imminent stockouts and the products with the quickest
              sales velocity.
            </p>
            <h1>What actions to take after analyzing this report?</h1>
            <p>
              After your analysis identifying your coming stockouts, you can generate your POs and prepare your inventory to
              prevent a product from stocking out. You can utilize the data in this report together with your Y-O-Y growth to
              identify your peak seasons and prepare for demand efficiently.
            </p>
            <h1>How to export this report?</h1>
            <p>
              This report is exportable in Microsoft Excel format. For instructions, see{' '}
              <a href="/help/analytics/general/exportingreports" className="helplink">
                Exporting Reports
              </a>
              .
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
