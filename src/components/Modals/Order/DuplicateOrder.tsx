import React from 'react';
import { Input, Card } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';

interface IDuplicateOrder {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const DuplicateOrder: React.FC<IDuplicateOrder> = ({ isOpen, onClose, onSave }) => {
  const { editableOrder } = useModel('order');

  return (
    <OModal
      title={`Duplicate Order ${editableOrder?.orderNumber}`}
      width={600}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Continue',
          onClick: onSave,
        },
      ]}
    >
      <Card title="Order Number">
        <Input defaultValue={editableOrder?.orderNumber} disabled />
      </Card>
      <Card title="Fulfillment Type">
        <Input defaultValue="Direct Fulfillment" disabled />
      </Card>
      <Card title="Warehouse">
        <Input defaultValue="Warehouse 1" disabled />
      </Card>
      <Card title="Manual Channel">
        <Input defaultValue="Manual Orders" disabled />
      </Card>
    </OModal>
  );
};

export default DuplicateOrder;
