import { OButton } from '@/components/Globals/OButton';
import NewUserModal from '@/pages/Settings/MainPanel/Modals/UserAdministration/NewUser';
import UserAdministrationHistoryModal from '@/pages/Settings/MainPanel/Modals/UserAdministration/UserAdministrationHistory';
import { modalType } from '@/utils/helpers/types';
import { FormattedMessage, useModel } from '@umijs/max';
import { Card, message, Space, Table } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';

const TColumns = [
  {
    title: <FormattedMessage id="component.table.column.name" />,
    dataIndex: 'full_name',
    key: 'name',
  },
  {
    title: <FormattedMessage id="component.table.column.status" />,
    dataIndex: 'is_active',
    key: 'status',
    render: (status) => <>{status ? 'ACTIVE' : 'INACTIVE'}</>,
  },
  {
    title: <FormattedMessage id="component.table.column.created" />,
    dataIndex: 'created_at',
    key: 'created',
    render: (created_at) => <>{moment(created_at).format('M/D/Y')}</>,
  },
  {
    title: <FormattedMessage id="component.table.column.lastLogin" />,
    dataIndex: 'updated_at',
    key: 'lastlogin',
    render: (updated_at) => <>{moment(updated_at).format('M/D/Y')}</>,
  },
];

export default function () {
  const [modalOpen, setModal] = useState('');
  const { userList, selectedUser, showInactive, setSelectedUser, setShowInactive, getUsers, updateUser } = useModel('user');
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    getUsers({ is_active: showInactive });
  }, [getUsers, showInactive]);

  return (
    <>
      {contextHolder}
      <div className="title-row">
        <h1 className="page-title">User Administration</h1>
      </div>
      <Card className="content-box">
        <Space size={HORIZONTAL_SPACE_SIZE} className="button-row">
          <OButton
            btnText={<FormattedMessage id="component.button.newUser" />}
            onClick={() => {
              setSelectedUser(null);
              setModal(modalType.New);
            }}
          />
          <OButton
            btnText={<FormattedMessage id="component.button.editUser" />}
            onClick={() => {
              setModal(modalType.New);
            }}
            disabled={!selectedUser}
          />
          <OButton
            btnText={
              showInactive ? (
                <FormattedMessage id="component.button.deactivate" />
              ) : (
                <FormattedMessage id="component.button.activate" />
              )
            }
            disabled={!selectedUser}
            onClick={() => {
              updateUser({ ...selectedUser, is_active: !selectedUser.is_active }).then(() => {
                messageApi.open({
                  type: 'success',
                  content: <FormattedMessage id="pages.settings.userAdministration.updated.content" />,
                });
              });
            }}
          />
          <OButton btnText={<FormattedMessage id="component.button.history" />} onClick={() => setModal(modalType.History)} />
          <OButton
            btnText={
              showInactive ? (
                <FormattedMessage id="component.button.showInactive" />
              ) : (
                <FormattedMessage id="component.button.showActive" />
              )
            }
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

      {/* Modals */}
      <NewUserModal
        isOpen={modalOpen === modalType.New}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />

      <UserAdministrationHistoryModal isOpen={modalOpen === modalType.History} onClose={() => setModal(modalType.Close)} />
    </>
  );
}
