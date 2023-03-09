import { useState } from 'react';
import { OTable } from '@/components/Globals/OTable';
import { EditTwoTone, LikeFilled, PlayCircleFilled } from '@ant-design/icons';
import { Card } from 'antd';
import { FormattedMessage } from '@umijs/max';

export const recieveData = [
  {
    key: 1,
    status: 'Complete',
    master_sku: '123323',
    notes: 'This order is changes',
    quantity: '2',
    recieved_location: 'Rejected Item',
  },
  {
    key: 2,
    status: 'In progress',
    master_sku: '124354',
    notes: 'This order is changes',
    quantity: '25',
    recieved_location: 'Not Received Yet',
  },
];

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
        <h3>
          <FormattedMessage id="pages.inventory.transfer.rightpanel.title" />{' '}
        </h3>
      </Card>
      <Card>
        <OTable columns={Rcolumns} rows={recieveDataSource} />
      </Card>
    </>
  );
};

export default TransferDetails;
