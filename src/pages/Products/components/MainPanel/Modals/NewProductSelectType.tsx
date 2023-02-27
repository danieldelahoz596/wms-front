import type { IOButton } from '@/components/Globals/OButton';
import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { modalType } from '@/utils/helpers/types';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Space } from 'antd';

interface INewProductSelectTypeModal {
  isOpen: boolean;
  onClose: () => void;
  handleClick: (value: any) => void;
}

const NewProductSelectTypeModal: React.FC<INewProductSelectTypeModal> = ({ isOpen, onClose, handleClick }) => {
  const buttons: IOButton[] = [
    {
      btnText: 'Core Product',
      onClick: () => handleClick(modalType.CoreProduct),
    },
    {
      btnText: 'Bundle/Kit',
      onClick: () => handleClick(modalType.BundleKitProduct),
    },
    {
      btnText: 'Product Variations',
      onClick: () => handleClick(modalType.ProductVariations),
    },
  ];

  return (
    <OModal
      title="New Product"
      helpLink="/help/products/create/coreproduct"
      width={300}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[]}
    >
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ textTransform: 'uppercase' }}>Select Type</h2>
        <Space direction="vertical" size={VERTICAL_SPACE_SIZE} style={{ display: 'flex' }}>
          {buttons.map((btn, index) => (
            <OButton key={index} btnText={btn.btnText} size="large" onClick={btn.onClick} style={{ width: '100%' }} />
          ))}
        </Space>
        <br />
        <a href="/help/products/create/coreproduct#difference_product_types" className="help-link" target="_blank">
          <span>{"What's the difference"}</span> <QuestionCircleOutlined />
        </a>
      </div>
    </OModal>
  );
};

export default NewProductSelectTypeModal;
