import { OModal } from '@/components/Globals/OModal';
import { Input, Form } from 'antd';
import { useEffect, useState } from 'react';

const { TextArea } = Input;

export interface IPOItemsFromCSVModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: (items: any[]) => void;
}

const POItemsFromCSVModal: React.FC<IPOItemsFromCSVModal> = ({ isOpen, onClose, onSave }) => {
  const [exportData, setExportData] = useState(null);

  useEffect(() => {
    setExportData(null);
  }, [isOpen]);

  const handleSave = () => {
    const items = exportData.split(/\r\n|\r|\n/);
    const poItems = [];
    items.forEach((item) => {
      const details = item.split(',');
      const [vendorSKU, quantity, unitMeasure, unitCost, discount] = details;
      poItems.push({
        product: {
          vendorSku: vendorSKU,
        },
        quantity: quantity,
        unitMeasure: unitMeasure,
        unit_cost: unitCost,
        discountType: '$',
        discount,
      });
    });
    poItems.pop();
    onSave(poItems);
  };
  return (
    <OModal
      title="Input P.O. Items From CSV file"
      helpLink=""
      width={700}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: onClose,
        },
        {
          key: 'save',
          type: 'default',
          btnLabel: 'Appply to P.O',
          onClick: () => handleSave(),
        },
      ]}
    >
      <>
        <TextArea
          placeholder="Vendor SKU, Quantity, Unit of Measure (Optional), Unit Cost, Discount (Should contain currency symbol or percentage sign only), Tax %, Packaging (Optional)"
          rows={10}
          onChange={(e) => setExportData(e.target.value)}
          value={exportData}
        />
      </>
    </OModal>
  );
};

export default POItemsFromCSVModal;
