import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import React from 'react';

interface IStockHistoryModal {
  isOpen: boolean;
  dataSource: any[];
  title: string | React.ReactNode;
  onClose: () => void;
}

const Tcolumns = [
  {
    title: 'Edit Time',
    dataIndex: 'edit_time',
    key: 'edit_time',
  },
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: 'Edit Type',
    dataIndex: 'edit_type',
    key: 'edit_type',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Notes',
    dataIndex: 'notes',
    key: 'notes',
  },
];

const StockHistoryModal: React.FC<IStockHistoryModal> = ({
  isOpen,
  title,
  dataSource,
  onClose,
}) => {
  return (
    <OModal
      title={title}
      width={1000}
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
      <OTable columns={Tcolumns} rows={dataSource} />
    </OModal>
  );
};

export default StockHistoryModal;
