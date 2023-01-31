import { Card, Row, Col, Alert } from 'antd';

export default function () {

  return (
    <>
      <h2>Products {'>'} Create Product Variations through the UI</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Product Variations</h1>
            <p>Creating variations in Extensiv Order Manager is very straight forward. To get started, click on the <b>“Product Variations”</b> button.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/product19%2B_1_.png" style={{ width: 300 }}/>
            <p>Once you do, you will see a new pop-up window where you can create the “Virtual SKU” or “Parent SKU” of the variation. You must also add the name for the variation grouping along with the brand. So, for a quick recap, these fields are required:</p>
            <ul>
              <li>Virtual SKU</li>
              <li>Name</li>
              <li>Brand</li>
            </ul>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/product20.PNG" style={{ width: 600 }}/>
            <p>You can associate the virtual SKU with the Attribute Groups, which are the changing feature(s) of this product such as size, color, material, and etc.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/product21.png" style={{ width: 600 }}/>
            <p>If the attribute(s) that you’re looking for does not exist, you can create one on the fly by click on the “+” button, type in the name and click Add, and lastly, Save.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/variation1.PNG" style={{ width: 600 }}/>
            <p>If you must edit an existing attribute group, click on the gear icon, write over the existing name and click on the wrench icon to configure the attributes that are associated with this attribute group.</p>
            <p><i>Please be careful: Once you create an attribute, it cannot be deleted. If you decide not to use it, simply rename it until a time later on when you’re ready to use it.</i></p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/variation3.PNG" style={{ width: 600 }}/>
            <p>Once you are ready, close out from these windows and go back to the <b>New Virtual Product</b> window. From here, you can now create the child SKUs that you will associate to the parent SKU and assign the necessary attributes along with the weights and dimensions.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/variation5.PNG" style={{ width: 600 }}/>
            <p>Once you are done, click Save, and you will have created your variation in Extensiv Order Manager.</p>

          </Card>
        </Col>
      </Row>
    </>
  );
};
