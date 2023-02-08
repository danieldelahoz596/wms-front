import { OButton } from '@/components/Globals/OButton';
import NewUserModal from '@/components/Modals/Settings/UserAdministration/NewUserModal';
import UserAdministrationHistory from '@/components/Modals/Settings/UserAdministration/UserAdministrationHistoryModal';
import { modalType } from '@/utils/helpers/types';
import { useModel } from '@umijs/max';
import { Card, message, Space, Table } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';

const TColumns = [
  {
    title: 'Name',
    dataIndex: 'full_name',
    key: 'name',
  },
  {
    title: 'Status',
    dataIndex: 'is_active',
    key: 'status',
    render: (status) => <>{status ? 'ACTIVE' : 'INACTIVE'}</>,
  },
  {
    title: 'Created',
    dataIndex: 'created_at',
    key: 'created',
    render: (created_at) => <>{moment(created_at).format('M/D/Y')}</>,
  },
  {
    title: 'Last Login',
    dataIndex: 'updated_at',
    key: 'lastlogin',
    render: (updated_at) => <>{moment(updated_at).format('M/D/Y')}</>,
  },
];

export default function () {
  const [modalOpen, setModal] = useState('');
  const {
    userList,
    selectedUser,
    showInactive,
    setSelectedUser,
    setShowInactive,
    getUsers,
    updateUser,
  } = useModel('user');
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    getUsers({ is_active: showInactive });
  }, [getUsers, showInactive]);

  return (
    <>
      {contextHolder}
      <Card style={{ width: '100%' }}>
        <Space size={4}>
          <OButton
            btnText={'New User'}
            onClick={() => {
              setSelectedUser(null);
              setModal(modalType.New);
            }}
          />
          <OButton
            btnText={'Edit User'}
            onClick={() => {
              setModal(modalType.New);
            }}
            disabled={!selectedUser}
          />
          <OButton
            btnText={'Deactivate / Activate'}
            disabled={!selectedUser}
            onClick={() => {
              updateUser({ ...selectedUser, is_active: !selectedUser.is_active }).then(() => {
                messageApi.open({
                  type: 'success',
                  content: 'User updated successfully',
                });
              });
            }}
          />
          <OButton btnText={'History'} onClick={() => setModal(modalType.History)} />
          <OButton
            btnText={showInactive ? 'Show Inactive' : 'Show Active'}
            onClick={() => setShowInactive((prev) => !prev)}
          />
        </Space>
        <Table
          columns={TColumns}
          rowSelection={{
            selectedRowKeys: selectedUser ? [selectedUser.id] : [],
            hideSelectAll: true,
            columnWidth: 0, // Set the width to 0
            renderCell: () => '', // Render nothing inside
          }}
          dataSource={userList.map((_item) => ({ ..._item, key: _item.id }))}
          style={{ marginTop: 10 }}
          onRow={(record) => {
            return {
              onClick: () => {
                if (record.id === selectedUser?.id) setSelectedUser(null);
                else setSelectedUser(record);
              }, // click row
            };
          }}
        />
      </Card>

      <NewUserModal
        isOpen={modalOpen === modalType.New}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />

      <UserAdministrationHistory
        isOpen={modalOpen === modalType.History}
        onClose={() => setModal(modalType.Close)}
      />
    </>
  );
}
