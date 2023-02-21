import type { IOButton } from '@/components/Globals/OButton';
import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { modalType } from '@/utils/helpers/types';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Space } from 'antd';

interface INewProductModal {
  isOpen: boolean;
  onClose: () => void;
  handleClick: (value: any) => void;
}

const NewProductModal: React.FC<INewProductModal> = ({ isOpen, onClose, handleClick }) => {
  const buttons: IOButton[] = [
    {
      btnText: 'Core Product',
      onClick: () => handleClick(modalType.New),
    },
    {
      btnText: 'Bundle/Kit',
      onClick: () => handleClick(modalType.SelectCoreProduct),
    },
    {
      btnText: 'Product Variations',
      onClick: () => handleClick(modalType.NewVirtualProduct),
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
        <Space direction="vertical" size="small" style={{ display: 'flex' }}>
          {buttons.map((btn, index) => (
            <OButton
              key={index}
              btnText={btn.btnText}
              size="large"
              onClick={btn.onClick}
              style={{ width: '100%' }}
            />
          ))}
        </Space>
        <br />
        <a href="#" className="help-link">
          <span>{"What's the difference"}</span> <QuestionCircleOutlined />
        </a>
      </div>
    </OModal>
  );
};

export default NewProductModal;
