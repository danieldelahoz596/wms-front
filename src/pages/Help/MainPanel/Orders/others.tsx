import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      {/* What does the error "Weight cannot be less than the total customs item weight" mean? */}
      <h2>Orders {'>'} What does the error "Weight cannot be less than the total customs item weight" mean?</h2>
      <Row>
        <Col span={24}>
          <Card>
            <p>
              When shipping internationally, customs forms need to be as accurate as possible to ensure your shipment(s)
              successfully go through a customs inspection in the country of destination. Specific information must be included on
              the document, such total weight of the shipment. Total weight is verified in Order Info and Product Info.
            </p>
            <p>
              It's common to see the error message <strong>"Weight cannot be less than the total customs item weight"</strong>,
              which indicates a weight discrepancy. The package weight listed in the "Product Basic Info" must be greater than or
              equal to the total weight of the package in the "Customs Declarations" line items. If the package weight is too low,
              then this error will be returned.
            </p>
            <p>To correct this error, you will need to verify and edit a few fields on the Order Info page.</p>
            <ol>
              <li>
                <p>
                  <strong>
                    Verify and update the <i>Weight</i> in the "Customs Declarations" section
                  </strong>
                  . If there are multiple line items, the weight of each item can be adjusted individually.
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    Verify and update the package <i>Weight</i> in the "Order Fulfillment" section
                  </strong>
                  . If the contents are packed, weigh the package to see if it weighs as much as the "Customs Declarations"
                  weight. If the package is not packed, determine the weight of the packing materials. Calculate the package
                  weight by adding this to the "Customs Declarations" weight.
                </p>
              </li>
            </ol>
            <p>The following sections will walk you through these steps.</p>
            <br />
            <h1>How to: Edit individual line item weights in the Customs section</h1>
            <br />
            <ol>
              <li>
                <p>Click on your Order Number.</p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/customs.png"
                  style={{ width: 600 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>Go to the Customs tab.</p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/customs%2B_1_.png"
                  style={{ width: 700 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>Click the entry under Weight (oz) to change the weight value.</p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/customs%2B_2_.png"
                  style={{ width: 700 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>Hit Save.</p>
              </li>
            </ol>
            <br />
            <h1>How to: Edit the package shipment weight</h1>
            <br />
            <ol>
              <li>
                <p>In the Orders Module, select the order from the list.</p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/customs%2B_4_.png"
                  style={{ width: 800 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>Within the Order Fulfillment Section, to the right hand side of the page, locate the Measurements field.</p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/customs%2B_5_.png"
                  style={{ width: 200 }}
                />
                <br />
                <br />
                <br />
              </li>
              <li>
                <p>Type in the correct weight. Hit Save</p>
                <br />
                <img
                  src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/customs%2B_6_.png"
                  style={{ width: 200 }}
                />
                <br />
                <br />
                <br />
              </li>
            </ol>
          </Card>
        </Col>
      </Row>
    </>
  );
}
