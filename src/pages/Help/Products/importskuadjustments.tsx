import { Card, Col, Row } from 'antd';

export default function () {

  return (
    <>
      <h2>Products {'>'} Import SKU Adjustments</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Import SKU Adjustments</h1>
            <ol>
              <li>
                <p>To adjust Master SKUs in Bulk via spreadsheet, click on the “Import/Export” button in the top menu bar and select “Import SKU Adjustments” from the dropdown menu.</p>
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502492/products__1_.png" style={{ width: 800 }}/>
                <br/><br/>
              </li>
              <li>
                <p>A new window will open where you can download an excel template for the SKU Adjustment Import:</p>
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502493/products__2_.png" style={{ width: 600 }}/>
                <br/><br/>
              </li>
              <li>
                <p>Fill in the appropriate columns and import it back into Extensiv Order Manager. This will update all the associated Master SKUs in Extensiv Order Manager:</p>
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502494/products__3_.png" style={{ width: 300 }}/>
              </li>
            </ol>
          </Card>
        </Col>
      </Row>
    </>
  );
};
