import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Printing In The Mobile App
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Printing In The Mobile App</h1>
            <br />
            <p>
              Printing from the mobile app is done by navigating to Print Labels and then selecting the label type that you would
              like to print. Once there you will select your printer from the drop down, enter or scan the appropriate information
              into each field (part name, bin name, QTY etc.), and click Print Label. The label format that is selected for a
              given label type in the Admin Console will be used for each label. For more information, regarding Label Templates,
              <a href="click here"></a>.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671287949300-label_print_part.jpg" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
