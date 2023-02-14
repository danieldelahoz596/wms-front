import { OModal } from '@/components/Globals/OModal';
import { Alert } from 'antd';
import React from 'react';

export interface IManagePurchaseOrders {
  isOpen: boolean;
  title: string;
  submitBtnText: string;
  description: string;
  onClose: () => void;
  onSave: () => void;
}

const ManagePurchaseOrders: React.FC<IManagePurchaseOrders> = ({
  isOpen,
  title,
  submitBtnText,
  description,
  onClose,
  onSave,
}) => {
  return (
    <OModal
      title={title}
      helpLink=""
      width={300}
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
          <span>Are you sure you want to proceed?</span>
        </div>
      </>
    </OModal>
  );
};

export default ManagePurchaseOrders;
