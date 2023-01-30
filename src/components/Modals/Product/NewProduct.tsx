import type { IOButton } from '@/components/Globals/OButton';
import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { modalType } from '@/utils/helpers/types';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';

interface INewProduct {
  isOpen: boolean;
  onClose: () => void;
  handleClick: (value: any) => void;
}

const NewProduct: React.FC<INewProduct> = ({ isOpen, onClose, handleClick }) => {
  const buttons: IOButton[] = [
    {
      type: 'primary',
      btnText: 'Core Product',
      onClick: () => handleClick(modalType.New),
    },
    {
      type: 'primary',
      btnText: 'Bundle/Kit',
      onClick: () => handleClick(modalType.BundleKit),
    },
    {
      type: 'primary',
      btnText: 'Product Variations',
      onClick: () => handleClick(modalType.ProductVariants),
    },
  ];

  return (
    <OModal
      title={'New Product'}
      width={300}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[]}
    >
      <>
        <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Select Type</h2>
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
      </>
    </OModal>
  );
};

export default NewProduct;
