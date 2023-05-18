import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { Table, Spin } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';

interface IOrderHistory {
  id: number;
  product_id: number;
  edit_time: Date;
  type: string;
  user: { id: number; username: string };
  description: string;
}

interface IOrderHistoryModal {
  isOpen: boolean;
  onClose: () => void;
}

const Tcolumns = [
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

const OrderHistoryModal: React.FC<IOrderHistoryModal> = ({ isOpen, onClose }) => {
  const { editableOrder, getOrderHistories } = useModel('order');
  const [histories, setHistories] = useState<IOrderHistory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      getOrderHistories(editableOrder.id).then((data) => {
        setIsLoading(false);
        setHistories(data);
      });
    }
  }, [isOpen, getOrderHistories, editableOrder]);

  return (
    <OModal
      title="Order History"
      helpLink=""
      width={1000}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Close',
          onClick: onClose,
        },
      ]}
    >
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
            columns={Tcolumns}
            dataSource={histories.map((item) => ({ key: item.id, ...item }))}
            pagination={{ hideOnSinglePage: true }}
          />
        )}
      </>
    </OModal>
  );
};

export default OrderHistoryModal;
