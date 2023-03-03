import { Card, Row, Col, Alert } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Analytics {'>'} Products {'>'} Analytics - Listing Profitability
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h2>What does this report reveal?</h2>
            <p>
              This report reveals your SKU’s performance data by both gross and unit margins and implied shares per sales channel.
              It also reveals the fees that are taken from you by the sales channel per each sale made. You can see this by
              clicking on a listing SKU.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504095/analytics__5_.PNG"
              style={{ width: 1000 }}
            />
            <br />
            <br />
            <br />
            <h2>How to read this report?</h2>
            <p>
              This report provides you with insight on what SKUs are earning the most or weighing you down in each particular
              sales channel. Implied share gauges how much the SKU contributes to the overall profit margins of your business.
              Anything above 0 is a positive influence, and anything below is negative.
            </p>
            <h2>What actions to take after analyzing this report?</h2>
            <p>
              After your analysis, if you identify a poorly performing sales channel listing, research into its listing
              profitability and identify the exact SKUs that are under-performing. If its performance is far too weak, you should
              liquidate the product or reallocate to a more successful channel. However, if it’s performing mediocre, you should
              optimize your listings to compete better or reprice it entirely.
            </p>
            <h2>How to export this report</h2>
            <p>
              This report is exportable in Microsoft Excel format. For instructions, see{' '}
              <a href="" className="helplink">
                Exporting Reports
              </a>
              .
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504096/export.PNG"
              style={{ width: 1000 }}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
