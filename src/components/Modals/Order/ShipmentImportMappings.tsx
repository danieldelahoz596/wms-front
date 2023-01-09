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
      title="SHIPMENT IMPORT MAPPINGS"
      width={600}
      centered
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'CLOSE',
          onClick: onClose,
        },
      ]}
    >
      <>
        <Card
          title={
            <OButton type="dashed" btnText={'New Mapping'} onClick={onAdd} />
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
