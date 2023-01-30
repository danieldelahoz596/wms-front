import React from 'react';
import { Col, Row } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { OInput } from '@/components/Globals/OInput';
import { OButton } from '@/components/Globals/OButton';

interface IBulkReconciliationModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const BulkReconciliationModal: React.FC<IBulkReconciliationModal> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  return (
    <OModal
      title="Bulk Reconciliation"
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
        <p>
         By confirming to bulk reconcile your inventory, all inventory across all your active warehouses will reflect in the queue with default costs. Please confer with your account manager before making this change.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
        <OInput style={{ marginRight: '10px' }} type="checkbox" /> Yes, I understand
        </div>
        <span>Default Vendor</span> 
        <div style={{ display: 'flex', alignItems: 'center', width: '40%', marginTop: '10px' }}>
          <OInput type="select" placeholder="Select.." options={[{ value: '', text: 'Select ...'},{ value: 'test', text: 'test'},]} style={{ flex: 1 }} />
        </div>
      </>
    </OModal>
  );
};

export default BulkReconciliationModal;
