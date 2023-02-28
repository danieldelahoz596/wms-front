import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { Card } from 'antd';
import React from 'react';

interface IShipmentImportMappings {
  isOpen: boolean;
  onClose: () => void;
  onAdd: () => void;
}

const ShipmentImportMappingsModal: React.FC<IShipmentImportMappings> = ({ isOpen, onClose, onAdd }) => {
  const mappings = [];
  
  return (
    <OModal
      title="Shipment import mappings"
      helpLink="/help/orders/general"
      width={600}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Close',
          onClick: onClose,
        },
      ]}
    >
      <>
        <Card title={<OButton btnText="New Mapping" onClick={onAdd} />}>
          <OTable
            pagination={false}
            columns={[
              {
                key: 'mappings',
                dataIndex: 'mappings',
                title: 'Mappings',
              },
              {
                key: 'actions',
                dataIndex: 'actions',
                title: '',
              },
            ]}
            rows={mappings}
          />
        </Card>
      </>
    </OModal>
  );
};

export default ShipmentImportMappingsModal;
