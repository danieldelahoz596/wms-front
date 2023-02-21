import { useState } from 'react';
import { OTable } from '@/components/Globals/OTable';
import { EditTwoTone, LikeFilled, PlayCircleFilled } from '@ant-design/icons';
import { Card } from 'antd';
import { recieveData } from './structure';

const Rcolumns = [
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) =>
      status === 'Complete' ? (
        <LikeFilled style={{ color: 'red', fontSize: 15 }} />
      ) : (
        <PlayCircleFilled style={{ color: '#00FF00', fontSize: 15 }} />
      ),
    align: 'center',
  },
  {
    title: 'Master SKU',
    dataIndex: 'master_sku',
    key: 'master_sku',
  },
  {
    title: 'Notes',
    dataIndex: 'notes',
    key: 'notes',
    render: () => <EditTwoTone />,
    align: 'center',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'noquantitytes',
    align: 'center',
  },
  {
    title: 'Recieved Location',
    dataIndex: 'recieved_location',
    key: 'recieved_location',
  },
];

const TransferDetails: React.FC = () => {
  const [recieveDataSource] = useState(recieveData);

  return (
    <>
      <Card>
        <h3>Stock Transfer Order Details</h3>
      </Card>
      <Card>
        <OTable columns={Rcolumns} rows={recieveDataSource} />
      </Card>
    </>
  );
};

export default TransferDetails;
