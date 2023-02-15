import { OModal } from '@/components/Globals/OModal';
import { modalType } from '@/utils/helpers/types';
import { Alert } from 'antd';
import React from 'react';

interface ICancelItemModal {
  cancelItemData?: any;
  cancelItemModal: string;
  setCancelItemModal?: (value: string) => void;
}

const CancelItemModal: React.FC<ICancelItemModal> = ({
  cancelItemData,
  cancelItemModal,
  setCancelItemModal,
}) => {
  const handleCancel = () =>
    setCancelItemModal ? setCancelItemModal(modalType.Close) : console.log('Cancel');
  const handleSave = () =>
    setCancelItemModal ? setCancelItemModal(modalType.Close) : console.log('Save');

  return (
    <OModal
      title={"Cancel Item '" + cancelItemData?.product + "'"}
      helpLink=""
      width={350}
      isOpen={cancelItemModal == modalType.Cancel}
      handleCancel={handleCancel}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: handleCancel,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'yes - Cancel Item',
          onClick: handleSave,
        },
      ]}
    >
      <>
        <Alert
          description={
            <p>
              Canceling this item will mark it as an error. Please note that canceled items
              <b> do not </b>
              count against a vendor's score card.
            </p>
          }
        />
        <div style={{ textAlign: 'right', margin: '10px 5px' }}>
          <span>Are you sure you want to proceed?</span>
        </div>
      </>
    </OModal>
  );
};

export default CancelItemModal;
