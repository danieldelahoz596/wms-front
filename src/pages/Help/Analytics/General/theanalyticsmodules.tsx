import { Alert, Card, Col, Divider, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Analytics {'>'} General {'>'} The Analytics Module's Landing Page
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <p>
              When you open Extensiv Order Manager's <strong>Analytics</strong> module, you will
              notice important information about your account displayed right on the Analytics
              landing page.
            </p>
            <p>
              <strong>
                Please keep in mind most of the information on this page will not be accurate until
                your vendor costs are in the system.
              </strong>
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503737/analytics__1_.PNG"
              style={{ width: 1000 }}
            />
            <br />
            <br />
            <br />
            <p>
              At the top, you will see summary information about your account's performance in terms
              of items sold, total sales, net profit earned, as well as your profit and unit
              margins.
            </p>
            <Divider />
            <h1>Opportunities Found by Extensiv Order Manager</h1>
            <p>
              Immediately below the summary is the{' '}
              <strong>Opportunities Found by Extensiv Order Manager</strong>, which identifies, as
              the name implies, opportunities for improving your company's bottom line. You can find
              more information about this report{' '}
              <a href="" className="helplink">
                here
              </a>
              .
            </p>
            <Divider />
            <h1>Inventory Movement Forensics</h1>
            <p>
              On the left-bottom side of the landing page is the{' '}
              <strong>Inventory Movement Forensics</strong> chart, which summarizes your inventory
              movement for the week, month and the selected date range. The chart shows the number
              and percentage of the following:
            </p>
            <ul>
              <li>
                <p>Products which sold in the last week</p>
              </li>
              <li>
                <p>Products which have not sold in the last week</p>
              </li>
              <li>
                <p>Products which have not sold over the selected date range</p>
              </li>
              <li>
                <p>Products which have sold more than once a day</p>
              </li>
              <li>
                <p>Products which have sold more than once a week</p>
              </li>
              <li>
                <p>Products which have sold more than once a month</p>
              </li>
              <li>
                <p>Products which have not sold for more than a month</p>
              </li>
            </ul>
            <Divider />
            <h1>Changing the Date Range for the Displayed Information</h1>
            <p>
              By default, the information displayed is for the last 30 days. To see your account's
              performance for the past 60 and 90 days, respectively, click the icon to the right,
              then select the appropriate option.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503743/analytics__2_.PNG"
              style={{ width: 1000 }}
            />
            <br />
            <br />
            <br />
            <Alert
              message="Tip"
              description="When using Extensiv Order Manager, click the ? icon at the top-right of any
                  report, when available, to display the online help item related to the report."
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
