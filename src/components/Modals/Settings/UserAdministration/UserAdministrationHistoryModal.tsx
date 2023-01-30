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

const UserAdministrationHistory: React.FC<IUserAdministrationHistory> = ({ isOpen, onSave, onClose }) => {
  return (
    <OModal
      title="User Administration History"
      width={1000}
      isOpen={isOpen}
      onCancel={onClose}
      buttons={[
        {
          key: 'cancel',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: onClose,
        },
      ]}
    >
      <Table columns={columns} dataSource={[]} pagination={{ pageSize: 3 }} scroll={{ y: 600 }}/>
    </OModal>
  );
};

export default UserAdministrationHistory;
