import { Card, Row, Col } from 'antd';

export default function () {

  return (
    <>
      <h2>Customers {'>'} Exporting Customer Phone Numbers from the Orders Module</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Exporting Customer Phone Numbers from the Orders Module</h1>
            <p>If you're looking for a report that can give you customers' phone numbers based on their purchases, you can make that happen in the Orders Module by <a href='/help/orders/exportorders' className='helplink'>customizing an Export Configuration</a> to do so. Then you can optionally search for a particular Master SKU using the Orders Search function, and export your search results with your new configuration.</p>
            <p>In your particular case, you can create custom order export settings to include the information that you need for this report, then use these settings to export the relevant information from Extensiv Order Manager. Your custom order export settings may look like this:</p>
            <br/>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502847/ship__1_.PNG" style={{ width: 600 }} />
          </Card>
        </Col>
      </Row>
    </>
  );
};
