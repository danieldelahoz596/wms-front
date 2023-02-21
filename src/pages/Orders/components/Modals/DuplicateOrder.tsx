import React from 'react';
import { Input, Card } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';

interface IDuplicateOrderModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const DuplicateOrderModal: React.FC<IDuplicateOrderModal> = ({ isOpen, onClose, onSave }) => {
  const { editableOrder } = useModel('order');

  return (
    <OModal
      title={`Duplicate Order ${editableOrder?.order_number}`}
      helpLink="/help/orders/general"
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
      <>
        <Card title="Order Number">
          <Input defaultValue={editableOrder?.order_number} disabled />
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
      </>
    </OModal>
  );
};

export default DuplicateOrderModal;
