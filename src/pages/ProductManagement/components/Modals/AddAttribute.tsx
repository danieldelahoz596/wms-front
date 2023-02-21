import { OModal } from '@/components/Globals/OModal';
import { Input } from 'antd';
import { useState } from 'react';

interface IAddAttributeModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: string) => void;
}

const AddAttributeModal: React.FC<IAddAttributeModal> = ({ isOpen, onClose, onSave }) => {
  const [attribute, setAttribute] = useState(null);

  const handleSave = () => {
    setAttribute(null);
    onSave(attribute);
  };

  return (
    <OModal
      title="Add New Attribute"
      helpLink="/help/products/create/productvariations"
      width={600}
      centered
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Close',
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Save',
          onClick: handleSave,
        },
      ]}
    >
      <div style={{ padding: '1rem' }}>
        <Input
          placeholder="Enter a valid attribute group name"
          value={attribute}
          onChange={(e) => setAttribute(e.target.value)}
          onPressEnter={handleSave}
        />
      </div>
    </OModal>
  );
};

export default AddAttributeModal;
