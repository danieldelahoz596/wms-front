import { OModal } from '@/components/Globals/OModal';
import { modalType } from '@/utils/helpers/types';
import { Alert } from 'antd';
import React from 'react';

interface IVoidItemModal {
  voidItemData?: any;
  voidItemModal: string;
  setVoidItemModal?: (value: string) => void;
}

const VoidItemModal: React.FC<IVoidItemModal> = ({
  voidItemData,
  voidItemModal,
  setVoidItemModal,
}) => {
  const handleCancel = () =>
    setVoidItemModal ? setVoidItemModal(modalType.Close) : console.log('Cancel');
  const handleSave = () =>
    setVoidItemModal ? setVoidItemModal(modalType.Close) : console.log('Save');

  return (
    <OModal
      title={"Void Item '" + voidItemData?.product + "'"}
      helpLink=""
      width={350}
      isOpen={voidItemModal == modalType.Void}
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
          btnLabel: 'Yes - Void Item',
          onClick: handleSave,
        },
      ]}
    >
      <>
        <Alert description="Voiding this item will mark it as unfulfilled by the vendor." />
        <div style={{ textAlign: 'right', margin: '10px 5px' }}>
          <span>Are you sure want to proceed?</span>
        </div>
      </>
    </OModal>
  );
};

export default VoidItemModal;
