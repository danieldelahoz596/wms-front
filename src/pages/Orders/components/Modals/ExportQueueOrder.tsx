import { OModal } from '@/components/Globals/OModal';
import { Alert } from 'antd';
import React from 'react';

interface IExportQueueOrderModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ExportQueueOrderModal: React.FC<IExportQueueOrderModal> = ({ isOpen, onClose, onSave }) => {
  return (
    <OModal
      title="Export Order(s)"
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
          btnLabel: 'Yes-Export',
          onClick: onSave,
        },
      ]}
    >
      <>
        <Alert
          description={
            <p>
              The selected orders will be placed into the queue and exported automatically.{' '}
              <b>All previous orders in the queue will be removed.</b>
            </p>
          }
        />
        <div style={{ textAlign: 'right', margin: '10px 5px' }}>Are you sure you want to proceed?</div>
      </>
    </OModal>
  );
};

export default ExportQueueOrderModal;
