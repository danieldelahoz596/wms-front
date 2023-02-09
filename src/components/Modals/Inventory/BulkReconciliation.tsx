import { OInput } from '@/components/Globals/OInput';
import { OModal } from '@/components/Globals/OModal';
import React from 'react';

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
      width={400}
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
          By confirming to bulk reconcile your inventory, all inventory across all your active
          warehouses will reflect in the queue with default costs. Please confer with your account
          manager before making this change.
        </p>
        <OInput className="mr-10" type="checkbox" /> &nbsp;&nbsp;Yes, I understand
        <br />
        <br />
        <span>Default Vendor</span>
        <OInput
          type="select"
          placeholder="Select..."
          options={[
            { value: '', text: 'Select ...' },
            { value: 'test', text: 'test' },
          ]}
          style={{ flex: 1, width: '100%', marginTop: 5 }}
        />
      </>
    </OModal>
  );
};

export default BulkReconciliationModal;
