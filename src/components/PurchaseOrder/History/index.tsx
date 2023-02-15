import { Table } from 'antd';

const TColumns = [
  {
    key: 'editTime',
    dataIndex: 'editTime',
    title: 'Edit Time',
  },
  {
    key: 'user',
    dataIndex: 'user',
    title: 'User',
  },
  {
    key: 'changedValues',
    dataIndex: 'changedValues',
    title: 'Changed Values',
  },
];

const rows = [
  {
    key: 1,
    editTime: '09/22/2020 9:37 AM',
    user: 'DANIEL.LEVIN@SKUBANA.com',
    changedValues:
      'P.O. Created and Authorized by Daniel Levin, then sent to vendor for confirmation.',
  },
];

const PoItemHistoryModal: React.FC = () => {
  return (
    <>
      <Table columns={TColumns} dataSource={rows} pagination={{ hideOnSinglePage: true }} />
    </>
  );
};

export default PoItemHistoryModal;
