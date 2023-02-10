import { Alert, Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Analytics {'>'} General {'>'} Exporting Reports
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <p>
              Many of the reports found in the Analytics module can be exported as Microsoft Excel
              spreadsheets (.xlxs format). This feature makes it easy to perform what-if scenario
              analyses using Excel's pivot tabls.
            </p>
            <h2>To Export a Report</h2>
            <ol>
              <li>
                <p>
                  Open the report, select dates or apply filters to generate the report, and then
                  click on the <strong>Export</strong> button in the top right corner. In the
                  example below, the <strong>Top Sellers</strong> report has been generated.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/export.png"
                  style={{ width: 900 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  In the <strong>Export Top Sellers</strong> window, click the{' '}
                  <strong>Export</strong> button. Once the file is generated, Extensiv Order Manager
                  will email you a link to download the report.
                </p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/export1.PNG"
                  style={{ width: 500 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>
                  To close the window, click the <strong>Close</strong> button.
                </p>
              </li>
              <li>
                <p>
                  Go to your email inbox and find the email from{' '}
                  <a href="" className="helplink">
                    no-reply@skubana.com
                  </a>
                  . Click the download link and save the report to your computer.
                </p>
              </li>
              <li>
                <p>
                  Open the report in Microsoft Excel or another software that supports Microsoft
                  Excel spreadsheets. If the report contains expandable rows, and you're using Excel
                  to open the report, you may need to click <strong>Enable Editing</strong> at the
                  top of the workbook to expand the rows. Now you're free to review and manipulate
                  the data as needed!
                </p>
              </li>
            </ol>
            <Alert
              message="Note"
              description={
                <p>
                  If you don't get an email from{' '}
                  <a href="" className="helplink">
                    no-reply@skubana.com
                  </a>{' '}
                  a couple minutes after exporting the report, look for the email in your Spam
                  folder. To prevent future Extensiv Order Manager emails from going to Spam, you
                  may have to add{' '}
                  <a href="" className="helplink">
                    no-reply@skubana.com
                  </a>{' '}
                  to your email provider's <strong>Safe Senders</strong> list.
                </p>
              }
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
