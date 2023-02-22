import { Card, Row, Col } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Analytics {'>'} Products {'>'} Analytics - Trending Profitability
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>What does this report reveal?</h1>
            <p>
              This report reveals trends in the profitability of your company, sales channels, products, and listings over a given
              date range. Clicking a point anywhere on the chart reveals the profits for the clicked date. It also shows your
              total profits for the given period.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1673305698105-om1.PNG"
              style={{ width: 1000 }}
            />
            <br />
            <br />
            <br />
            <p>
              After generating the profitability reports for your company and sales channels, you can drill down by selecting a
              specific sales channel or a group of sales channels, a specific product or a group of products, and a listing or a
              group of listings.
            </p>
            <h1>How to read this report?</h1>
            <p>
              If you see that your company profitability is going down, you can look more granularly within the sales
              channel/product/listing profitability reports, find the ones that have not been making any profit, and then look at
              your trending for the sales channel/product/SKU.
            </p>
            <h1>What actions to take after analyzing this report?</h1>
            <p>
              After your analysis, you can identify the times when your company is under-performing, predict when these will
              happen again, and address them through increased marketing efforts, e.g. undergoing promotions and giving discount
              coupons. You should also plan your marketing spend and allot more money to those sales channels, products and
              listings that have been performing well over time. For those that are not performing as well, you need to figure out
              if they are still worth keeping or selling in the long run. You may want to stop selling in an unprofitable sales
              channel. In cases of unprofitable products/SKUs, you may want to stop selling them altogether.
            </p>
            <h1>How can this report be exported:</h1>
            <p>
              This report can be downloaded as an image or PDF by clicking on the hamburger menu at the right-hand corner of the
              graph.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1673305784298-om2.PNG"
              style={{ width: 1000 }}
            />
            <br />
            <br />
            <br />
          </Card>
        </Col>
      </Row>
    </>
  );
}
