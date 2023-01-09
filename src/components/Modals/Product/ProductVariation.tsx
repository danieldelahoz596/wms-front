import type { IOButton } from '@/components/Globals/OButton';
import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { modalType } from '@/utils/helpers/types';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';

interface IProductVariation {
  isOpen: boolean;
  onClose: () => void;
  handleClick: (value: any) => void;
}

const ProductVariation: React.FC<IProductVariation> = ({ isOpen, onClose, handleClick }) => {
  const buttons: IOButton[] = [
    {
      type: 'dashed',
      btnText: 'CORE PRODUCT',
      onClick: () => handleClick(modalType.New),
    },
    {
      type: 'dashed',
      btnText: 'BUNDLE/KIT',
    },
    {
      type: 'dashed',
      btnText: 'PRODUCT VARIATIONS',
    },
  ];
  return (
    <OModal
      title={'Select Type'}
      width={600}
      centered
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[]}
    >
      <Row>
        {buttons.map((btn, index) => (
          <Col key={index} span={12} offset={6} style={{ marginTop: '1rem' }}>
            <OButton
              type={btn.type}
              btnText={btn.btnText}
              onClick={btn.onClick}
              style={{ width: '100%' }}
            />
          </Col>
        ))}
        <a
          href="#"
          style={{
            textAlign: 'center',
            margin: '0 auto',
            marginTop: '1rem',
            textDecoration: 'underline',
          }}
        >
          <span>What's the difference</span> <QuestionCircleOutlined />
        </a>
      </Row>
    </OModal>
  );
};

export default ProductVariation;
