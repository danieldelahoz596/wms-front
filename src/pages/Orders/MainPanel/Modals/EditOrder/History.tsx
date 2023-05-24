import { useModel } from '@umijs/max';
import { Spin, Table } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';
import type { IOrderHistory } from '@/interfaces/IOrder';

const TColumns = [
  {
    title: 'Edit Time',
    dataIndex: 'edit_time',
    key: 'edit_time',
    render: (date) => moment(date).locale('en').format('YYYY-MM-DD HH:mm A'),
  },
  {
    title: 'User',
    dataIndex: ['user', 'username'],
    key: 'user',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
];

const History: React.FC = () => {
  const { editableOrder, getOrderHistories } = useModel('order');
  const [histories, setHistories] = useState<IOrderHistory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getOrderHistories(editableOrder.id).then((data) => {
      setIsLoading(false);
      setHistories(data);
    });
  }, [getOrderHistories, editableOrder]);

  return (
    <>
      {isLoading && (
        <div style={{ height: 80 }}>
          <Spin tip="Loading" size="large" style={{ marginTop: 30 }}>
            <div className="content" />
          </Spin>
        </div>
      )}
      {!isLoading && (
        <Table
          columns={TColumns}
          dataSource={histories.map((item) => ({ key: item.id, ...item }))}
          pagination={{ hideOnSinglePage: true }}
        />
      )}
    </>
  );
};

export default History;
