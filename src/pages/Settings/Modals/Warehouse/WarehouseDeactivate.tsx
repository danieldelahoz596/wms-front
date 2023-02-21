import React from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Typography, Row } from 'antd';

interface IWarehouseDeactivateModal {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
  activate: boolean;
}

const WarehouseDeactivateModal: React.FC<IWarehouseDeactivateModal> = ({
  isOpen,
  onSave,
  onClose,
  activate,
}) => {
  const comment = `${activate ? 'Activating' : 'Deactivating'} this warehouse will also ${
    activate ? 'Activate' : 'Deactivate'
  } all of its product stock and subtract all of its available inventory from associated product listings.`;

  const title = `${activate ? 'Activate' : 'Deactivate'} In-House Warehouse`;

  return (
    <OModal
      title={title}
      helpLink=""
      width={400}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'cancel',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: `Yes-${activate ? 'Actiavte' : 'Deactivate'}`,
          onClick: onSave,
        },
      ]}
    >
      <>
        <Typography style={{ marginTop: '5px' }}>
          <Typography.Paragraph
            style={{ backgroundColor: '#DEE0FF', color: 'black', fontSize: '12px' }}
          >
            {comment}
          </Typography.Paragraph>
        </Typography>
        <Row justify="end">
          <Typography>
            <Typography.Title level={5}>Are you sure you want to proceed?</Typography.Title>
          </Typography>
        </Row>
      </>
    </OModal>
  );
};

export default WarehouseDeactivateModal;
