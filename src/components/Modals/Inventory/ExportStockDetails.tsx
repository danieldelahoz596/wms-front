import React from 'react';
import { OModal } from '@/components/Globals/OModal';
import { OInput } from '@/components/Globals/OInput';
import { useModel } from '@umijs/max';

interface IExportStockDetailsModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ExportStockDetailsModal: React.FC<IExportStockDetailsModal> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const { initialState } = useModel('@@initialState');

  return (
    <OModal
      title="Export Stock Details"
      helpLink=""
      width={500}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Close',
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Export Stock Details',
          onClick: onSave,
        },
      ]}
    >
      <>
        <p>Stock details is generated in the Microsoft Excel spreadsheet format.</p>
        <p>
          {
            "To download your stock details, select a warehouse and click the 'Export' button. Please allow the time necessary for the Excel file to be generated and emailed to you."
          }
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.1rem',
            padding: '1rem',
            width: '40%',
            marginLeft: 'auto',
          }}
        >
          <OInput
            type="select"
            placeholder="Select..."
            options={initialState?.initialData?.warehouses.map((_item) => ({
              text: _item.name,
              value: _item.id,
            }))}
            style={{ flex: 1 }}
          />
        </div>
      </>
    </OModal>
  );
};

export default ExportStockDetailsModal;
