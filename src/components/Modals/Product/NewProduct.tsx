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
      onClick: () => handleClick(modalType.SelectCoreProduct),
    },
    {
      type: 'primary',
      btnText: 'Product Variations',
      onClick: () => handleClick(modalType.NewVirtualProduct),
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
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ textTransform: 'uppercase' }}>Select Type</h2>
        {buttons.map((btn, index) => (
          <OButton
            type={btn.type}
            btnText={btn.btnText}
            onClick={btn.onClick}
            style={{ width: '50%', marginBottom: 5 }}
          />
        ))}
        <br/>
        <a href="#" className='help-link'>
          <span>What's the difference</span> <QuestionCircleOutlined />
        </a>
      </div>
    </OModal>
  );
};

export default NewProduct;
