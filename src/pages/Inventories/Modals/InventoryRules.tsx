import React from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import AutoReorderRules from '@/pages/Inventories/components/AutoReorderRules';
import ExcludedWarehouses from '@/pages/Inventories/components/ExcludedWarehouses';
import EditHistory from '@/pages/Inventories/components/EditHistory';

interface IInventoryRulesModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  stockData: any;
}

const InventoryRulesModal: React.FC<IInventoryRulesModal> = ({ isOpen, onClose, onSave, stockData }) => {
  const tabItems: TabsProps['items'] = [
    {
      key: '1',
      label: 'Auto-Reorder Rules',
      children: <AutoReorderRules />,
    },
    {
      key: '2',
      label: 'Excluded Warehouses',
      children: <ExcludedWarehouses />,
    },
    {
      key: '3',
      label: 'Edit History',
      children: <EditHistory />,
    },
  ];

  return (
    <OModal
      title={`Inventory Rules for ${stockData?.master_sku}`}
      helpLink=""
      width={800}
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
          btnLabel: 'Save',
          onClick: onSave,
        },
      ]}
    >
      <>
        <Tabs defaultActiveKey="1" items={tabItems} />
      </>
    </OModal>
  );
};

export default InventoryRulesModal;
