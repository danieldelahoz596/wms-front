import React from 'react';
import { Col, Row } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { OInput } from '@/components/Globals/OInput';
import { OButton } from '@/components/Globals/OButton';

interface IExportStockEditHistoryModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  onAddOrderExportSettings: () => void;
}

const ExportStockEditHistoryModal: React.FC<IExportStockEditHistoryModal> = ({
  isOpen,
  onClose,
  onSave,
  onAddOrderExportSettings,
}) => {
  return (
    <OModal
      title="EXPORT STOCK EDIT HISTORY"
      width={800}
      className="OModal"
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
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'EXPORT ORDERS',
          onClick: onSave,
        },
      ]}
    >
      <>
        <p>
          Stock Edit History Export is generated in the Microsoft Excel spreadsheet format.
        </p>
        <p>
         To download your stock edit history, select a warehouse and click the 'Export' button. The export will include stock edit history available in Skubana from within the last 6 months. Please allow the time necessary for the Excel file to be generated and emailed to you. 
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.1rem', padding: '1rem', width: '40%', marginLeft: 'auto' }}>
          <OInput type="select" placeholder="Select.." options={[{ value: '', text: 'Select ...'},{ value: 'test', text: 'test'},]} style={{ flex: 1 }} />
        </div>
      </>
    </OModal>
  );
};

export default ExportStockEditHistoryModal;
