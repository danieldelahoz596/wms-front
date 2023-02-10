import { OModal } from '@/components/Globals/OModal';
import { Alert } from 'antd';
import React from 'react';

interface IRestoreOrderModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const RestoreOrderModal: React.FC<IRestoreOrderModal> = ({ isOpen, onClose, onSave }) => {
  return (
    <OModal
      title="Restore Orders"
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
          btnLabel: 'YES - RESTORE',
          onClick: onSave,
        },
      ]}
    >
      <>
        <Alert description="Restoring the selected orders will revert them back to their previous status." />
        <div style={{ textAlign: 'right', margin: '10px 5px' }}>
          Are you sure you want to proceed?
        </div>
      </>
    </OModal>
  );
};

export default RestoreOrderModal;
