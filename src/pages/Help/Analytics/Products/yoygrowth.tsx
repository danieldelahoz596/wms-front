import { Card, Row, Col, Alert } from 'antd';

export default function () {

  return (
    <>
      <h2>Analytics {'>'} Products {'>'} Y-O-Y Growth</h2>
      <Row>
        <Col span={24}>
          <Card>
            <p>Extensiv Order Manager has a number of reports to analyze a product's performance.</p>
            <p>The YOY Growth report compares a specific product's performance during the current year with its performance the previous year, or a product's Year-Over-Year growth. The quantity sold and sales amount is displayed for the product as well. This report can be filtered by product and by sales channel over a specified time period.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504097/Screen_Shot_2021-03-01_at_2.42.40_PM.png' style={{ width: 1000 }} />
            <br /><br /><br />
            <h2>How to read this report:</h2>
            <p>This report compares quantity sold and sales amount from this year (the orange line) with last year (the blue line) and identifies your products’ performance trends. Displayed on the right is a summary of last years and this years numbers and the percent change. You can narrow down this data to a specific sales channel or a collection of sales channels.</p>
            <h2>What actions to take after analyzing this report:</h2>
            <p>After identifying your trends, ensure your performance runs comparatively similar, or better than, the previous year. If you notice a decline where you believe a product should be excelling, check your competitors, check stock levels, and reprice to increase sales and beat your competition. Identify your trends, prepare your inventory, and capitalize on your optimal seasons.</p>
            <h2>How can this report be exported:</h2>
            <p>This report can be downloaded by clicking on the hamburger menu at the right hand corner of the page.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504098/Image_8.png' style={{ width: 1000 }} />
          </Card>
        </Col>
      </Row>
    </>
  );
};
