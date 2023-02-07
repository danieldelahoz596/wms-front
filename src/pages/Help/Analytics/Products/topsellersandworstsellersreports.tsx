import { Card, Row, Col, Alert } from 'antd';

export default function () {

  return (
    <>
      <h2>Analytics {'>'} Products {'>'} Top Sellers & Worst Sellers Reports</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Overview</h1>
            <p>The Top Sellers & Worst Sellers reports reveal the quantity sold and revenue earned for your top-selling products and worst-selling products.</p>
            <Alert
                message=""
                description="These reports will only show data for shipped orders."
                type="info"
            />
            <br />
            <p>You can find both the Top Sellers & Worst Sellers reports in the <strong>Analytics</strong> module under the <strong>Products</strong> section.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503836/Screen_Shot_2021-02-24_at_1.02.29_PM.png' style={{ width: 1000 }} />
            <br /><br /><br />
            <h1>Filters you can specify:</h1>
            <ul>
                <li>
                    <p>The number of SKUs in the report (the default number is 100 SKUs).</p>
                </li>
                <li>
                    <p>The sales channels included in the report.</p>
                </li>
                <li>
                    <p>The date range (the default date range is 1 year - i.e. FROM date is Sept 1, 2021 and TO date is Sept 1, 2022). Please keep in mind that the report will show data based on orders that were shipped within this date range.</p>
                </li>
            </ul>
            <Alert
                message=""
                description="The timezone for these reports is UTC."
                type="info"
            />
            <br />
            <h1>Choose the data you want to review:</h1>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503838/Screen_Shot_2021-02-24_at_1.18.54_PM.png' style={{ width: 400 }} />
            <br /><br /><br />
            <ul>
                <li>
                    <p><strong>Units Sold:</strong> The total number of units that were shipped.</p>
                </li>
                <li>
                    <p><strong>Revenue:</strong> The total amount of revenue per product.</p>
                </li>
                <li>
                    <p><strong>Listing SKU:</strong> Selecting listing SKU instead of master SKU will show data for the original orders that were downloaded from the sales channel rather than what was shipped in the order. Bundle SKUs will show Units Sold and Revenue based on the number of bundles that were ordered regardless of whether they were shipped as prepackaged inventory or broken down into core components prior to shipping.</p>
                </li>
                <li>
                    <p><strong>Master SKU:</strong> Selecting master SKU instead of listing SKUs will show data for orders based on what was shipped within the order rather what was included in the original order from the sales channel. Units Sold and Revenue is on the Master SKUs that were shipped to fulfill the order. If you break down bundles into core components, or ship bundles/kits using core components, selecting master SKUs will provide accurate information on what was shipped within each order. If you do not use bundle breakdown and instead ship bundles using prepackaged inventory, then selecting master SKU will produce the same data as selecting listing SKU.</p>
                </li>
            </ul>
            <h1>Exporting these reports:</h1>
            <p>These reports are exportable as Microsoft Excel spreadsheets. To <a href="/help/analytics/general/exportingreports" className='helplink'>export</a> them, click on the <strong>Export</strong> button in the top right corner of the report.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503843/Screen_Shot_2021-02-24_at_1.27.01_PM.png' style={{ width: 400 }} />
            <br /><br /><br />
            <h1>Notes:</h1>
            <ul>
                <li>
                    <p>These reports will not show data for external orders (orders that do not exist in Extensiv Order Manager).</p>
                </li>
                <li>
                    <p>These reports will not show data from stock transfers or FBA workflows.</p>
                </li>
                <li>
                    <p>Previously, the Top Seller & Worst Seller reports only displayed the Units Sold and Revenue based on the listings that were sold for each product. If you still want to view this data based on listings, select the Listing SKU option for either of these reports.</p>
                </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </>
  );
};
