import { Card, Row, Col, Alert, Divider } from 'antd';

export default function () {

  return (
    <>
      <h2>Products {'>'} Adjusting Master SKUs</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Adjust Master SKUs</h1>
            <Alert
              message="Important Note"
              description="Extensiv Order Manager does not recommend you change your Master SKUs, unless it was due to a typo. This is because a majority of data that goes into the Orders, Inventory and Analytics Modules in Extensiv Order Manager are based on the Master SKU. Adjusting a Master SKU changes the Master SKU itself, not the actual product it refers to."
              type="warning"
            />
            <br/>
            <p>After you’ve imported all your products into Extensiv Order Manager, you can go back and edit your Master SKUs at any time.</p>
            <br/>
            <p>You can change the Master SKU for a specific product directly through the UI or in bulk through a spreadsheet.</p>
            <Divider />
            <h1>Adjusting a Master SKU in the Products Module</h1>
            <ol>
              <li>
                  <p>Go to the Products Module and click on the name of the Master SKU you would like to change. Then click the <strong>“Adjust SKU”</strong> button located in the top menu bar.</p>
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502489/inventory.PNG" style={{ width: 1000 }}/>
                  <br/><br/>
              </li>
              <li>
                  <p>A new window will then open where you can input the New Master SKU:</p>
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502491/products.png" style={{ width: 400 }}/>
              </li>
            </ol>
            <Divider />
            {/* Adjusting Master SKUs in Bulk via Spreadsheet */}
            <h1>Adjusting Master SKUs in Bulk via Spreadsheet</h1>
            <ol>
              <li>
                  <p>To adjust Master SKUs in Bulk via spreadsheet, click on the “Import/Export” button in the top menu bar and select “Import SKU Adjustments” from the dropdown menu.</p>
                  <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502492/products__1_.png" style={{ width: 1000 }}/>
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
