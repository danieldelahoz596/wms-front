import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Label Templates
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Label Templates</h1>
            <br />
            <p>
              Each label type (Bin, Part, Item, Asset etc.) has it's own set of predesigned label templates. You can access the
              list of templates from
              <b>{'Admin > Label'}</b> Config. From here you can choose your template based on type, size and content from a group
              of examples. If you don't find exactly what you are looking for, please contact support@scoutsft.com with your exact
              specifications of label size and content.
            </p>
            <p>
              To select a label to be used, click on the thumbnail and click save at the bottom of the page. When you print your
              labels from the mobile app or from your device, the corresponding label template will be used.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671287571343-Label_Config_1.jpg" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
