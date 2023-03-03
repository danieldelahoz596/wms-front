import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      {/* Product Creation FAQ */}
      <h2>Products {'>'} Product Creation FAQ</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Product Creation FAQ</h1>
            <br />
            <p>
              <strong>Q: Which columns are required on each tab?</strong>
            </p>
            <p>On the Core Products tab, Master SKU, Name, Brand and Active columns are required.</p>
            <p>
              On the Bundles and Kits tab, Master SKU, Name, Brand, X, and Active columns are required. Reminder: you will need a
              unique Master SKU for the bundle/kit.
            </p>
            <br />
            <p>
              <strong>Q: What is the difference between a bundle and a kit?</strong>
            </p>
            <p>A bundle is a grouping of multiple of the same product. A kit is a grouping of multiple different products.</p>
            <br />
            <p>
              <strong>Q: Should I add old products to the spreadsheet?</strong>
            </p>
            <p>You should only add old products to Extensiv Order Manager if you plan to sell them again in the future.</p>
            <br />
            <p>
              <strong>Q: Are vendor products required?</strong>
            </p>
            <p>
              Vendor Products are not required to fulfill orders in Extensiv Order Manager. Vendor Products are required to create
              Purchase Orders.
            </p>
            <br />
            <p>
              <strong>Q: Can my Listing SKU and Master SKU be the same?</strong>
            </p>
            <p>Absolutely!</p>
            <br />
            <p>
              <strong>
                Q: My SKUs on various channels are different. What do I use for the Master SKU in Extensiv Order Manager?
              </strong>
            </p>
            <p>
              The Master SKU will be your unique product identifier in Extensiv Order Manager. We recommend using a standard
              product naming convention. For example if your product is a Medium Red Turtleneck, the master SKU could be
              TNECK-RED-M. The Listing SKU will be what ties your Extensiv Order Manager Master SKU with the SKUs on your various
              sales channels.
            </p>
            <br />
            <p>
              <strong>
                Q: Do I use the weight and dimensions of the actual product or the individual product once packaged for transit?
              </strong>
            </p>
            <p>
              The weight and dimensions of the physical product is best. If you would like to account for packaging weight and
              dimensions on an order, this can be accomplished via{' '}
              <a href="" className="helplink">
                shipping presets
              </a>{' '}
              or through an{' '}
              <a href="" className="helplink">
                orderbot
              </a>
              .
            </p>
            <br />
            <p>
              <strong>Q: Can I update my products in bulk after the initial upload?</strong>
            </p>
            <p>
              Yes! Once all of your products are uploaded into Extensiv Order Manager, you will have the ability to export the
              product catalog. You can edit that spreadsheet and upload using the import product spreadsheet to make any changes.
              Make sure to select "Yes - Update existing products and import new" when importing.{' '}
              <strong>
                Beware: if you change the Master SKU, you will create new products! If you are changing Master SKUs, please do it
                outside of the product import spreadsheet.
              </strong>
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
