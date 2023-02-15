import { OModal } from '@/components/Globals/OModal';
import { Alert } from 'antd';
import React from 'react';

export interface IManageItemsModal {
  isOpen: boolean;
  title: string;
  submitBtnText: string;
  description: string;
  confirmMessage: string;
  onClose: () => void;
  onSave: () => void;
}

const ManageItemsModal: React.FC<IManageItemsModal> = ({
  isOpen,
  title,
  submitBtnText,
  description,
  confirmMessage,
  onClose,
  onSave,
}) => {
  return (
    <OModal
      title={title}
      helpLink=""
      width={320}
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
          btnLabel: submitBtnText,
          onClick: onSave,
        },
      ]}
    >
      <>
        <Alert description={description} />
        <div style={{ textAlign: 'right', margin: '10px 5px' }}>
          <span>{confirmMessage}</span>
        </div>
      </>
    </OModal>
  );
};

export default ManageItemsModal;
