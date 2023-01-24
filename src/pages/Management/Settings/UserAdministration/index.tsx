import NewUserModal from '@/components/Modals/Settings/UserAdministration/NewUserModal';
import { modalType } from '@/utils/helpers/types';
import { Button, Card, Space, Table } from 'antd';
import { useState, useMemo } from 'react';

const vendorList = [
  {
    id: 1,
    name: 'Support',
    phonenumber: '1234567890',
    status: true,
    created: '03/24/2015',
    lastlogin: '04/12/2018',
  },
  {
    id: 2,
    name: 'Arnaud Bouliann',
    phonenumber: '98765443210',
    status: true,
    created: '03/24/2015',
    lastlogin: '04/12/2018',
  },
  {
    id: 3,
    name: 'Chad Rubin',
    phonenumber: '6543219870',
    status: true,
    created: '03/24/2015',
    lastlogin: '04/12/2018',
  },
  {
    id: 4,
    name: 'Abdullah Wali',
    phonenumber: '7564532890',
    status: true,
    created: '03/24/2015',
    lastlogin: '04/12/2018',
  },
  {
    id: 5,
    name: 'Arnaud Bouliann',
    phonenumber: '7564532890',
    status: true,
    created: '03/24/2015',
    lastlogin: '04/12/2018',
  },
  {
    id: 6,
    name: 'Cindy Yuk',
    phonenumber: '7564532890',
    status: true,
    created: '03/24/2015',
    lastlogin: '04/12/2018',
  },
  {
    id: 7,
    name: 'Emily Garcia',
    phonenumber: '7564532890',
    status: true,
    created: '03/24/2015',
    lastlogin: '04/12/2018',
  },
  {
    id: 8,
    name: 'Sand',
    phonenumber: '7564532890',
    status: true,
    created: '03/24/2015',
    lastlogin: '04/12/2018',
  },
  {
    id: 9,
    name: 'Alex Mcvarish',
    phonenumber: '7564532890',
    status: true,
    created: '03/24/2015',
    lastlogin: '04/12/2018',
  },
  {
    id: 10,
    name: 'Jennifer Malise',
    phonenumber: '7564532890',
    status: true,
    created: '03/24/2015',
    lastlogin: '04/12/2018',
  },
  {
    id: 11,
    name: 'Samantha Potter',
    phonenumber: '7564532890',
    status: true,
    created: '03/24/2015',
    lastlogin: '04/12/2018',
  },
  {
    id: 12,
    name: 'Gareth Roberts',
    phonenumber: '7564532890',
    status: true,
    created: '03/24/2015',
    lastlogin: '04/12/2018',
  },
  {
    id: 13,
    name: 'Gina Tirelli',
    phonenumber: '7564532890',
    status: true,
    created: '03/24/2015',
    lastlogin: '04/12/2018',
  },
  {
    id: 14,
    name: 'Gina Tirelli',
    phonenumber: '7564532890',
    status: false,
    created: '03/24/2015',
    lastlogin: '04/12/2018',
  },
  {
    id: 15,
    name: 'Gina Tirelli',
    phonenumber: '7564532890',
    status: false,
    created: '03/24/2015',
    lastlogin: '04/12/2018',
  },
];

export default function () {
  const [modalOpen, setModal] = useState('');
  const [showInactive, setShowInactive] = useState(true);

  const TRows = useMemo(() => vendorList.map((_item) => ({ ..._item, key: _item.id })), []);

  const TColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phonenumber',
      key: 'phonenumber',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => <>{status ? 'ACTIVE' : 'INACTIVE'}</>,
    },
    {
      title: 'Created',
      dataIndex: 'created',
      key: 'created',
    },
    {
      title: 'Last Login',
      dataIndex: 'lastlogin',
      key: 'lastlogin',
    },
  ];

  return (
    <>
      <Card style={{ width: '100%' }}>
        <Space size={5}>
          <Button
            onClick={() => {
              setModal(modalType.New);
            }}
          >
            New User
          </Button>
          <Button>Edit User</Button>
          <Button>Deactivate / Activate</Button>
          <Button>History</Button>
          <Button onClick={() => setShowInactive((prev) => !prev)}>
            {showInactive ? 'SHOW ACTIVE' : 'SHOW INACTIVE'}
          </Button>
        </Space>
        <Table columns={TColumns} dataSource={TRows} style={{ marginTop: 10 }} />
      </Card>

      <NewUserModal
        isOpen={modalOpen === modalType.New}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />
    </>
  );
}
