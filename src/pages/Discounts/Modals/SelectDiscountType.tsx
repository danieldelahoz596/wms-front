import type { IOButton } from '@/components/Globals/OButton';
import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { modalType } from '@/utils/helpers/types';
import { Space } from 'antd';

interface ISelectDiscountTypeModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: modalType) => void;
}

const SelectDiscountTypeModal: React.FC<ISelectDiscountTypeModal> = ({ isOpen, onClose, onSave }) => {
  const buttons: IOButton[] = [
    {
      btnText: 'Amount off products',
      onClick: () => onSave(modalType.AmountOffProducts),
    },
    {
      btnText: 'Amount off order',
      onClick: () => onSave(modalType.AmountOffOrder),
    },
    {
      btnText: 'Buy X get Y',
      onClick: () => onSave(modalType.BuyXGetY),
    },
    {
      btnText: 'Free shipping',
      onClick: () => onSave(modalType.FreeShipping),
    },
  ];

  return (
    <OModal title="Select Discount Type" width={400} isOpen={isOpen} handleCancel={onClose}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ textTransform: 'uppercase' }}>Select Discount Type</h2>
        <Space direction="vertical" size={VERTICAL_SPACE_SIZE} style={{ display: 'flex' }}>
          {buttons.map((btn, index) => (
            <OButton key={index} btnText={btn.btnText} size="large" onClick={btn.onClick} style={{ width: '100%' }} />
          ))}
        </Space>
      </div>
    </OModal>
  );
};

export default SelectDiscountTypeModal;
