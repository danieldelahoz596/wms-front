import { Card, Row, Col } from 'antd';

export default function () {

  return (
    <>
      <h2>Products {'>'} Exporting Products</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Export Products</h1>
            <p>In the Products Module, users can export existing product information into a spreadsheet. Simply click the Import/Export dropdown menu and select one of the Export options.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-12-07%2Bat%2B11.06.37%2BAM.png" style={{ width: 1000 }}/>
            <br/><br/>
            {/* Export Products */}
            <h1>Export Products</h1>
            <p>Select this option and click the <strong>Export Products</strong> button. This will generate a spreadsheet with ALL product information, including inactive products.</p>

            {/* Export Vendor Products */}
            <h1>Export Vendor Products</h1>
            <p>Select this option and then choose between exporting your Vendor Products by Vendor or for all Vendors at once.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-12-07%2Bat%2B11.13.47%2BAM.png" style={{ width: 500 }}/>
          </Card>
        </Col>
      </Row>
    </>
  );
};
