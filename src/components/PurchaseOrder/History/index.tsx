import { OTable } from '@/components/Globals/OTable';

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
  {
    key: 2,
    editTime: '04/11/2018 04:39 PM',
    user: 'Skubana',
    changedValues: 'Items Added = [ SC701980787843(x4) SC701980787843(x996) ]',
  },
  {
    key: 3,
    editTime: '04/09/2018 05:20 PM',
    user: 'DANIEL.LEVIN@SKUBANA.com',
    changedValues: 'P.O. created by Skubana. Awaiting authorization.',
  },
];

const PoItemHistoryModal: React.FC = () => {
  return (
    <>
      <OTable columns={TColumns} rows={rows} pagination={false} />
    </>
  );
};

export default PoItemHistoryModal;
