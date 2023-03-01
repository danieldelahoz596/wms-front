import React from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Typography, Row } from 'antd';
import { FormattedMessage } from '@umijs/max';

interface IWarehouseDeactivateModal {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
  activate: boolean;
}

const WarehouseDeactivateModal: React.FC<IWarehouseDeactivateModal> = ({ isOpen, onSave, onClose, activate }) => {
  return (
    <OModal
      title={
        activate ? (
          <FormattedMessage id="pages.settings.warehouses.warehouseDeactivate.title.activate" />
        ) : (
          <FormattedMessage id="pages.settings.warehouses.warehouseDeactivate.title.deactivate" />
        )
      }
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
          btnLabel: activate ? (
            <FormattedMessage id="component.button.yActivate" />
          ) : (
            <FormattedMessage id="component.button.yDeactivate" />
          ),
          onClick: onSave,
        },
      ]}
    >
      <>
        <Typography style={{ marginTop: '5px' }}>
          <Typography.Paragraph style={{ backgroundColor: '#DEE0FF', color: 'black', fontSize: '12px' }}>
            {activate ? (
              <FormattedMessage id="pages.settings.warehouses.warehouseDeactivate.comment.activate" />
            ) : (
              <FormattedMessage id="pages.settings.warehouses.warehouseDeactivate.comment.deactivate" />
            )}
          </Typography.Paragraph>
        </Typography>
        <Row justify="end">
          <Typography>
            <Typography.Title level={5}>
              <FormattedMessage id="pages.settings.warehouses.warehouseDeactivate.question" />
            </Typography.Title>
          </Typography>
        </Row>
      </>
    </OModal>
  );
};

export default WarehouseDeactivateModal;
