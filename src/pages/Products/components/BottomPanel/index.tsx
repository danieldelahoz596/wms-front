import { Col, Row } from 'antd';
import PerformancePanel from './PerformancePanel';
import ProductDetailsPanel from './ProductDetailsPanel';

interface IBottomPanel {
  height: number;
}

const BottomPanel: React.FC<IBottomPanel> = ({ height }) => {
  return (
    <Row gutter={10} style={{ padding: 5}}>
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
