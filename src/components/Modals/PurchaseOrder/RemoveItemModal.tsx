import { OModal } from '@/components/Globals/OModal';
import { modalType } from '@/utils/helpers/types';
import { Alert } from 'antd';
import React from 'react';

interface IRemoveItemModal {
  removeItemData?: any;
  removeItemModal: string;
  setRemoveItemModal?: (value: string) => void;
}

const RemoveItemModal: React.FC<IRemoveItemModal> = ({
  removeItemData,
  removeItemModal,
  setRemoveItemModal,
}) => {
  const handleCancel = () =>
    setRemoveItemModal ? setRemoveItemModal(modalType.Close) : console.log('Remove');
  const handleSave = () =>
    setRemoveItemModal ? setRemoveItemModal(modalType.Close) : console.log('Save');
  return (
    <OModal
      title={"Remove Item '" + removeItemData?.product + "'"}
      helpLink=""
      width={350}
      isOpen={removeItemModal == modalType.Remove}
      handleCancel={handleCancel}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Close',
          onClick: handleCancel,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Yes - Remove Item',
          onClick: handleSave,
        },
      ]}
    >
      <>
        <Alert description="Removing this item will exclue it from the issued P.O." />
        <div style={{ textAlign: 'right', margin: '10px 5px' }}>
          <span>Are you sure you want to proceed?</span>
        </div>
      </>
    </OModal>
  );
};

export default RemoveItemModal;
