import { OModal } from '@/components/Globals/OModal';
import { Alert } from 'antd';
import React from 'react';

interface ICancelPurchaseOrders {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const CancelPurchaseOrders: React.FC<ICancelPurchaseOrders> = ({ isOpen, onClose, onSave }) => {
  return (
    <OModal
      title="Cancel P.O.(s)"
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
          btnLabel: 'Yes - Cancel P.O.',
          onClick: onSave,
        },
      ]}
    >
      <>
        <Alert description="Canceling will prevent the selected P.O.(s) from being issued to vendors." />
        <div style={{ textAlign: 'right', margin: '10px 5px' }}>
          <span>Are you sure you want to proceed?</span>
        </div>
      </>
    </OModal>
  );
};

export default CancelPurchaseOrders;
