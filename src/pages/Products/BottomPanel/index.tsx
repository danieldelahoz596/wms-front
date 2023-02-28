import { Col, Row } from 'antd';
import PerformancePanel from './PerformancePanel';
import ProductDetailsPanel from './ProductDetailsPanel';

interface IBottomPanel {
  height: number;
}

const BottomPanel: React.FC<IBottomPanel> = ({ height }) => {
  return (
    <Row className="bottom-panel">
      <Col span={12}>
        <PerformancePanel height={height} />
      </Col>
      <Col span={12}>
        <ProductDetailsPanel height={height} />
      </Col>
    </Row>
  );
};

export default BottomPanel;
