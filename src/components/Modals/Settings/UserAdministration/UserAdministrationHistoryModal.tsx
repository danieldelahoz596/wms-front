import React from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Table } from 'antd';

interface IUserAdministrationHistory {
  isOpen: boolean;
  onClose: () => void;
}

const columns = [
  {
    title: 'EDIT TIME',
    dataIndex: 'time',
  },
  {
    title: 'USER',
    dataIndex: 'user',
  },
  {
    title: 'CHANGED VALUES',
    dataIndex: 'value',
  },
];

const UserAdministrationHistory: React.FC<IUserAdministrationHistory> = ({ isOpen, onClose }) => {
  return (
    <OModal
      title="User Administration History"
      isOpen={isOpen}
      width={1000}
      centered
      handleCancel={onClose}
      buttons={[
        {
          key: 'cancel',
          type: 'default',
          btnLabel: 'CANCEL',
          onClick: onClose,
        },
      ]}
    >
      <Table columns={columns} dataSource={[]} pagination={{ pageSize: 3 }} scroll={{ y: 600 }} />
    </OModal>
  );
};

export default UserAdministrationHistory;
