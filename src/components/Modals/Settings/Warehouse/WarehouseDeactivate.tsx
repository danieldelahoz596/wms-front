import React from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Typography, Row } from 'antd';

interface IWarehouseDeactivate {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}

const WarehouseDeactivate: React.FC<IWarehouseDeactivate> = ({ isOpen, onSave, onClose }) => {
  const comment =
    'Deactivating this warehouse will also deactivate all of its product stock and subtract all of its available inventory from associated product listings.';

  return (
    <OModal
      title="DEACTIVATE IN-HOUSE WAREHOUSE"
      isOpen={isOpen}
      width={400}
      centered
      handleCancel={onClose}
      buttons={[
        {
          key: 'cancel',
          type: 'default',
          btnLabel: 'CANCEL',
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'YES-DEACTIVATE',
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

export default WarehouseDeactivate;
