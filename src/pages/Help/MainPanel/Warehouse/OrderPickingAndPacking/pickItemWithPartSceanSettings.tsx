import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Pick Item with Part Scan Settings
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Pick Item with Part Scan Settings</h1>
            <br />
            <p>The Pick Item with Part Scan is a setting that changes the default behavior related to order picking.</p>
            <img src="https://help.scoutsft.com/download_file/view_inline/707" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
