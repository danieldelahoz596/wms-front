import React from 'react';
import { Card } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';

interface IStockHistoryModal {
  isOpen: boolean;
  onClose: () => void;
  dataSource: any[];
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

const StockHistoryModal: React.FC<IStockHistoryModal> = ({ isOpen, onClose, dataSource }) => {
  return (
    <OModal
      title="In house warehouse stock edit history for 1234 AT location232"
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
      <Card>
        <OTable columns={Tcolumns} rows={dataSource} />
      </Card>
    </OModal>
  );
};

export default StockHistoryModal;
