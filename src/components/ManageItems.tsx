import { OModal } from '@/components/Globals/OModal';
import { FormattedMessage } from '@umijs/max';
import { Alert } from 'antd';
import React from 'react';

export interface IManageItemsModal {
  isOpen: boolean;
  title: string | React.ReactNode;
  cancelBtnText?: string | React.ReactNode;
  submitBtnText: string | React.ReactNode;
  description: string;
  confirmMessage: string | React.ReactNode;
  onClose: () => void;
  onSave: () => void;
}

const ManageItemsModal: React.FC<IManageItemsModal> = ({
  isOpen,
  title,
  cancelBtnText = <FormattedMessage id="component.button.close" />,
  submitBtnText,
  description,
  confirmMessage,
  onClose,
  onSave,
}) => {
  return (
    <OModal
      title={title}
      helpLink=""
      width={320}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: cancelBtnText,
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
        <Alert description={<div dangerouslySetInnerHTML={{ __html: description }} />} />
        <div style={{ textAlign: 'right', margin: '10px 5px' }}>
          <span>{confirmMessage}</span>
        </div>
      </>
    </OModal>
  );
};

export default ManageItemsModal;
