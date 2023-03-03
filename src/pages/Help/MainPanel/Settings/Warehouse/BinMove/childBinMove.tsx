import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Child Bin Move
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Child Bin Move</h1>
            <br />
            <p>
              Moving a child bin will change the Parent BIN that the child is currently residing in. Simply enter the Child bin
              and the BIN you'd like to move it to and click Submit.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671288306598-Child_Bin_Move.jpg" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
