import { Table } from 'antd';

const historyData = [
  {
    key: 1,
    editTime: '01/05/2021 11:28 AM',
    user: 'support@skubana.com',
    description:
      'Channel Allocation Rules(SCMagentotes :: Standard = 100% Of Available] Excluded Warehouses[In-House Warehouse]',
  },
  {
    key: 2,
    editTime: '06/30/2020 4:05 PM',
    user: 'support@skubana.com',
    description: 'Channel Allocation Rules(SCMagentotes ::Standard = 97% Of Available]',
  },
  {
    key: 3,
    editTime: '06/23/2020 5:53 PM',
    user: 'support@skubana.com',
    description: 'Excluded Warehouses[]',
  },
  {
    key: 4,
    editTime: '12/05/2019 2:43 PM',
    user: 'support@skubana.com',
    description: 'Excluded Warehouses[Virtual In-House Warehouse]',
  },
  {
    key: 5,
    editTime: '11/20/2019 7:24 PM',
    user: 'support@skubana.com',
    description: "Excluded Warehouses[Vendor . Steve's shirtshirts, FBA]",
  },
  {
    key: 6,
    editTime: '10/18/2019 11:35 AM',
    user: 'support@skubana.com',
    description: 'Channel Allocation Rules(SCMagentotes :: Min, Level = 100% Of Available]',
  },
  {
    key: 7,
    editTime: '08/22/2019 3:51 PM',
    user: 'support@skubana.com',
    description: 'Channel Allocation Rules(SCMagentotes :: Min, Level = 50% Of Available]',
  },
];

const EditHistory: React.FC = () => {
  const TColumns = [
    {
      key: 'edit_time',
      dataIndex: 'editTime',
      title: 'Edit Time',
      sorter: (a, b) => Date.parse(a.editTime) < Date.parse(b.editTime),
      align: 'center',
    },
    {
      key: 'user',
      dataIndex: 'user',
      title: 'User',
    },
    {
      key: 'description',
      dataIndex: 'description',
      title: 'Description',
    },
  ];

  return <Table columns={TColumns} dataSource={historyData} />;
};

export default EditHistory;
