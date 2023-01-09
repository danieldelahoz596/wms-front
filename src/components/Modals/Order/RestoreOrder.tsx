import React from 'react';
import { Alert } from 'antd';
import { OModal } from '@/components/Globals/OModal';

interface IRestoreOrderModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const RestoreOrderModal: React.FC<IRestoreOrderModal> = ({ isOpen, onClose, onSave }) => {
  return (
    <OModal
      title="RESTORE ORDERS"
      width={600}
      className="OModal"
      centered
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'CANCEL',
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
        <Alert
          message=""
          description="Restoring the selected orders will revert them back to their previous status."
          type="info"
          style={{ backgroundColor: '#DEE0FF', borderColor: '#8C93FF' }}
        />
        <div style={{ textAlign: 'right', margin: '1rem 0' }}>
          Are you sure you want to proceed?
        </div>
      </>
    </OModal>
  );
};

export default RestoreOrderModal;
