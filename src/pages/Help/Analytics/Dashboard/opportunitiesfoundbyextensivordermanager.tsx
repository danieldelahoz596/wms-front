import { Alert, Card, Col, Divider, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Analytics {'>'} Dashboard {'>'} Opportunities Found by Extensiv Order Manager
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <p>
              The Analytics module's landing page presents important information about your account.
            </p>
            <p>
              One of the reports that you can find on the Analytics landing page is{' '}
              <strong>Opportunities Found by Extensiv Order Manager</strong>, which identifies, as
              its name implies, opportunities for improving your company's bottom line.
            </p>
            <p>
              <strong>
                Please keep in mind the values on this report are not accurate until your vendor
                costs are in the system.
              </strong>
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503782/analytics__3_.PNG"
              style={{ width: 1000 }}
            />
            <br />
            <br />
            <br />
            <p>The report is divided into four columns:</p>
            <ul>
              <li>
                <p>
                  <strong>Action to Take -</strong> Extensiv Order Manager's recommended course of
                  action on the product; can be either increase profit or cut cost (see below for
                  the detailed explanations)
                </p>
              </li>
              <li>
                <p>
                  <strong>Info -</strong> provides the reason(s) for the course of action (place
                  your mouse over the ℹ︎ icon to see the detailed description)
                </p>
              </li>
              <li>
                <p>
                  <strong>Opportunity -</strong> what taking action will mean to your store
                </p>
              </li>
              <li>
                <p>
                  <strong>Amount -</strong> the monetary value behind the course of action
                </p>
              </li>
            </ul>
            <Divider />
            <h1>Increasing Profits</h1>
            <p>
              Extensiv Order Manager looks for profitable products that have high sales velocities
              and are running low on inventory, and tells you how much to optimally re-order to
              increase profits for those products. To qualify for this opportunity, a product must
              meet the following threshold criteria:
            </p>
            <ol>
              <li>
                <p>Unit profit margin equal to or greater than $1.00.</p>
              </li>
              <li>
                <p>At least one full inventory turnover in the selected 30/60/90 cycle.</p>
              </li>
              <li>
                <p>COGS greater than average inventory value during the 30/60/90 cycle.</p>
              </li>
            </ol>
            <p>
              If you see products for which this opportunity is found, you should order them from
              your vendors if you haven't done so already.
            </p>
            <Divider />
            <h1>Cutting Costs</h1>
            <p>
              Conversely, Extensiv Order Manager also looks for products with high inventory value
              that have a low sales velocity. To qualify for this opportunity, a product must meet
              the following threshold criteria:
            </p>
            <ol>
              <li>
                <p>No sale of any kind in the selected 30/60/90 cycle.</p>
              </li>
              <li>
                <p>Average inventory value of at least $1,000.00 during the 30/60/90 cycle.</p>
              </li>
            </ol>
            <p>
              If you see products for which this opportunity is found, you should consider
              liquidating them immediately.
            </p>
            <Divider />
            <h1>Exporting the Report</h1>
            <p>
              Like most Analytics reports, you can export this report as a Microsoft Excel
              worksheet. For instructions on how to do that, click{' '}
              <a href="/help/analytics/general/exportingreports" className="helplink">
                here
              </a>
            </p>
            <Alert
              message="TIP"
              description="When using Extensiv Order Manager, click the ? icon at the top-right of the report
                  to display this help article online."
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
