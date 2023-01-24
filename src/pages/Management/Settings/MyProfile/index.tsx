import { Row, Col } from 'antd';
import ChanagePassword from './components/ChangePassword';
import MyInformation from './components/MyInformation';

export default function () {
  return (
    <Row>
      <Col span={24} style={{ marginLeft: 10, marginTop: 10 }}>
        <MyInformation />
        <ChanagePassword />
      </Col>
    </Row>
  );
}
