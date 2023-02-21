import { Row, Col, Card } from 'antd';
import PerformancePanel from './PerformancePanel';
import ProductDetailsPanel from './ProductDetailsPanel';

interface IBottomPanel {
  height: number;
}

const BottomPanel: React.FC<IBottomPanel> = ({ height }) => {
  return (
    <Card style={{ height }}>
      <Row gutter={10}>
        <Col span={12}>
          <PerformancePanel height={height} />
        </Col>
        <Col span={12}>
          <ProductDetailsPanel height={height} />
        </Col>
      </Row>
    </Card>
  );
};

export default BottomPanel;
