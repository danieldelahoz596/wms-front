import { Row, Col } from 'antd';
import PerformancePanel from './PerformancePanel';
import ProductDetailsPanel from './ProductDetailsPanel';

const BottomPanel: React.FC = () => {
  return (
    <Row gutter={32}>
      <Col span={12}>
        <PerformancePanel />
      </Col>
      <Col span={12}>
        <ProductDetailsPanel />
      </Col>
    </Row>
  );
};

export default BottomPanel;
