import { Card, Row, Col } from 'antd';

export default function () {

  return (
    <>
      <h2>Analytics {'>'} Orders {'>'} Sales Overview</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h2>What does this report reveal?</h2>
            <p>This report reveals the exact revenue amount each sales channel earns you per day. This graph identifies how your sales channels perform against each other on a daily basis.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504379/analytics__22_.PNG' style={{ width: 1000 }} />
            <br /><br /><br />
            <h2>How to read this report?</h2>
            <p>You read this report by selecting your time frame and either selecting a few or all of your sales channels to compare against each other. You can read this chart by either revenue earned or the total units sold per day.</p>
            <h2>What actions to take after analyzing this report?</h2>
            <p>After your analysis of your sales channels’ performance comparison, you can use the overall data to prioritize your sales channel focus. Within seconds, this data provides you the information needed to prioritize your inventory allocation, sales trends, and overall performance.</p>
            <h2>How to export this report</h2>
            <p>This report is exportable in Microsoft Excel format. For instructions, see <a href="" className='helplink'>Exporting Reports</a>.</p>
          </Card>
        </Col>
      </Row>

    </>
  );
};
