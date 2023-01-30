import React from 'react';
import { Card } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { OButton } from '@/components/Globals/OButton';
import { OTable } from '@/components/Globals/OTable';

interface IShipmentImportMappings {
  isOpen: boolean;
  onClose: () => void;
  onAdd: () => void;
}

const ShipmentImportMappingsModal: React.FC<IShipmentImportMappings> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const mappings = [];
  return (
    <OModal
      title="Shipment import mappings"
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
        <Card
          title={
            <OButton type="primary" btnText={'New Mapping'} onClick={onAdd} />
          }
        >
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
