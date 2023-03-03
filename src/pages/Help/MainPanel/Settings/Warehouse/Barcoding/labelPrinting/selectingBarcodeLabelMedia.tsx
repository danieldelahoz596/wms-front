import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Selecting Barcode Label Media
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Selecting Barcode Label Media</h1>
            <br />
            <p>Before deciding which type of barcode label is right for you, take some time to consider the following:</p>
            <ul>
              <li>What size of label will I need?</li>
              <li>What type of surface will my labels be on?</li>
              <li>Will my label be exposed to outdoor conditions?</li>
              <li>How many labels per day will I be printing?</li>
              <li>How much information will I need on my labels? SKU numbers, lot numbers, dates, etc?</li>
            </ul>
            <h3>Paper Labels</h3>
            <p>
              The most common type of label used is the <b>paper adhesive label</b>. For most applications these will adequately
              preform. They are also the most cost effective. Paper labels are more prone to tearing and smearing and are not
              recommended for outdoor or extreme conditions.
            </p>
            <h3>Polyester Labels</h3>
            <p>
              <b>Poly</b> labels are extremely durable and the ideal choice for outdoor or extreme conditions such as weather or
              industrial areas. Poly labels are much more expensive than paper labels, so you'll want to make sure it is a
              requirement before going in this direction. You will also need to use a <b>Thermal Transfer</b> printer for these
              types of labels
            </p>
            <h3>Polypropylene Labels</h3>
            <p>
              <b>Polypropylene</b> labels are a rugged plastic material that are a good choice if you want something more durable
              than a paper label, but less expensive than a <b>Polyester</b> label. These labels are still not suggested for
              outdoor use, but will outlast a typical paper label
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
