import React from 'react';
import { Card } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';

interface ITransferHistoryModal {
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
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
];

const TransferHistoryModal: React.FC<ITransferHistoryModal> = ({ isOpen, onClose, dataSource }) => {
  return (
    <OModal
      title="History for stock transfer order stock-transfer-test-snow-peak"
      width={1000}
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
      ]}
    >
      <>
        <Card>
          <OTable columns={Tcolumns} rows={dataSource} />
        </Card>
      </>
    </OModal>
  );
};

export default TransferHistoryModal;
