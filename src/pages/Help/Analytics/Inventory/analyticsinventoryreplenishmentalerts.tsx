import { Card, Row, Col } from 'antd';

export default function () {

  return (
    <>
      <h2>Analytics {'>'} Inventory {'>'} Analytics - Inventory Replenishment Alerts</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>What does this report reveal?</h1>
            <p>This report alerts you to products that need replenishment in your dependent warehouses and recommends the steps you can take to ensure that your dependent warehouses have adequate stock to meet future demand. As your purchase orders originate to your independent warehouse, this report will show you how to "split" your purchase orders to make sure your dependent warehouse are at an adequate inventory level.</p>
            <br />
            <img src='https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504152/analytics__12_.PNG' style={{ width: 1000 }} />
            <br /><br /><br />
            <h1>How to read this report?</h1>
            <p>This report lets you know at a glance the quantity of a product in your inventory that needs to be shifted from one warehouse to another (you must have inventory-dependent warehouses defined for the source warehouse). Highlighting the icon under the Info column for each product displayed in the report reveals the recommended step to take on the product, e.g. <i>shipping x number of items from the source warehouse to the destination warehouse.</i></p>
            <h1>What actions to take after analyzing this report?</h1>
            <p>After reading this report, you should be able to determine the next steps, e.g. shipping the recommended number of inventory items from the source to the destination warehouse, to take to ensure that each of your warehouses has enough stock on hand to meet future demand.</p>
            <h1>How to export this report</h1>
            <p>This report is exportable in Microsoft Excel format. For instructions, see <a href="/help/analytics/general/exportingreports" className='helplink'>Exporting Reports</a>.</p>
          </Card>
        </Col>
      </Row>
    </>
  );
};
