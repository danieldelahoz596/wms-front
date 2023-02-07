import { Card, Row, Col } from 'antd';

export default function () {

  return (
    <>
      <h2>Analytics {'>'} Orders {'>'} Biggest Tickets</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h2>What does this report reveal:</h2>
            <p>This Extensiv Order Manager report reveals your highest value orders over a specified period of time. The customer name, order number and order total are displayed. This report can be filtered by sales channel and order date.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504154/analytics__13_.PNG' style={{ width: 1000 }} />
            <br /><br /><br />
            <h2>How to read this report:</h2>
            <p>To read this report, select which sales channel(s) and date range to filter your biggest value orders. From there, you will be given a list of your biggest ticket orders.</p>
            <h2>What actions to take after analyzing this report:</h2>
            <p>After your analysis, if you’re a company that focuses on remarketing to previous customers, or take preferential heights for top paying orders, you can identify those orders and customers. Identify the top orders and ensure that they are processed smoothly and efficiently.</p>
            <h2>How to export this report:</h2>
            <p>This report is exportable in Microsoft Excel format. For instructions, see <a href="" className='helplink'>Exporting Reports</a>.</p>
          </Card>
        </Col>
      </Row>

    </>
  );
};
