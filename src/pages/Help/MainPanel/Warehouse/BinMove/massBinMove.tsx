import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Mass Bin Move
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Mass Bin Move</h1>
            <br />
            <p>
              To move ALL product from one BIN to another, use the Mass Bin Move feature. Simply enter in the FROM BIN and the TO
              BIN then click Submit.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671288411804-Mass_Bin_Move_1.jpg" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
