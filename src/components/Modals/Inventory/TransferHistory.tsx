import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import React from 'react';

interface ITransferHistoryModal {
  isOpen: boolean;
  onClose: () => void;
  dataSource: any[];
  title: string;
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
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
];

const TransferHistoryModal: React.FC<ITransferHistoryModal> = ({
  isOpen,
  onClose,
  dataSource,
  title,
}) => {
  return (
    <OModal
      title={title}
      helpLink=""
      width={700}
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

export default TransferHistoryModal;
