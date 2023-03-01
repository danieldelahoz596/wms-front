import { OInput } from '@/components/Globals/OInput';
import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import React, { useMemo } from 'react';

interface IBulkReconciliationModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const BulkReconciliationModal: React.FC<IBulkReconciliationModal> = ({ isOpen, onClose, onSave }) => {
  const { vendorList } = useModel('vendor');

  const vendorOptins = useMemo(
    () => vendorList.filter((item) => item.status === true).map((vendor) => ({ value: vendor.id, text: vendor.name })),
    [vendorList],
  );

  return (
    <OModal
      title="Bulk Reconciliation"
      helpLink=""
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
          By confirming to bulk reconcile your inventory, all inventory across all your active warehouses will reflect in the
          queue with default costs. Please confer with your account manager before making this change.
        </p>
        <OInput className="mr-10" type="checkbox" /> &nbsp;&nbsp;Yes, I understand
        <br />
        <br />
        <span>Default Vendor</span>
        <OInput type="select" placeholder="Select..." options={vendorOptins} style={{ flex: 1, width: '100%', marginTop: 5 }} />
      </>
    </OModal>
  );
};

export default BulkReconciliationModal;
