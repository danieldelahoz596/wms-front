import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Asset Move
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Asset Move</h1>
            <br />
            <p>
              To move an Asset you will first select the Bin that you would like to move the Asset to. Then enter the Serial
              Number for the Asset. Click Move and the asset will be moved to the selected Bin.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671288257736-Asset_Move.jpg" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
