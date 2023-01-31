import React from 'react';
import { Alert } from 'antd';
import { OModal } from '@/components/Globals/OModal';

interface IExportQueueOrderModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ExportQueueOrderModal: React.FC<IExportQueueOrderModal> = ({ isOpen, onClose, onSave }) => {
  return (
    <OModal
      title="Export Order(s)"
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
          btnLabel: 'YES-EXPORT',
          onClick: onSave,
        },
      ]}
    >
      <>
        <Alert
          message=""
          description={
            <p>
              The selected orders will be placed into the queue and exported automatically.{' '}
              <b>All previous orders in the queue will be removed.</b>
            </p>
          }
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

export default ExportQueueOrderModal;
