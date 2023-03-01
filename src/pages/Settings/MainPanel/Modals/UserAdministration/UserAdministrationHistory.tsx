import React from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Table } from 'antd';
import { FormattedMessage } from '@umijs/max';

interface IUserAdministrationHistoryModal {
  isOpen: boolean;
  onClose: () => void;
}

const columns = [
  {
    title: <FormattedMessage id="component.table.column.editTime" />,
    dataIndex: 'time',
  },
  {
    title: <FormattedMessage id="component.table.column.user" />,
    dataIndex: 'user',
  },
  {
    title: <FormattedMessage id="component.table.column.changedValues" />,
    dataIndex: 'value',
  },
];

const UserAdministrationHistoryModal: React.FC<IUserAdministrationHistoryModal> = ({ isOpen, onClose }) => {
  return (
    <OModal
      title="User Administration History"
      helpLink="http://localhost:8001/help/settings/useradministration"
      width={1000}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'cancel',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: onClose,
        },
      ]}
    >
      <Table columns={columns} dataSource={[]} pagination={{ pageSize: 3 }} scroll={{ y: 600 }} />
    </OModal>
  );
};

export default UserAdministrationHistoryModal;
