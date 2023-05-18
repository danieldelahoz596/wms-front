import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { Table, Spin } from 'antd';
import moment from 'moment';
import { useEffect, useState } from 'react';

interface IProductHistory {
  id: number;
  product_id: number;
  edit_time: Date;
  type: string;
  user: { id: number; username: string };
  description: string;
}

interface IProductHistoryModal {
  isOpen: boolean;
  onClose: () => void;
}

const Tcolumns = [
  {
    title: 'Edit Time',
    dataIndex: 'edit_time',
    key: 'edit_time',
    render: (date) => moment(date).lang('en').format('YYYY-MM-DD HH:mm A'),
  },
  {
    title: 'User',
    dataIndex: ['user', 'username'],
    key: 'user',
  },
  {
    title: 'Edit Type',
    dataIndex: 'type',
    key: 'edit_type',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
];

const ProductHistoryModal: React.FC<IProductHistoryModal> = ({ isOpen, onClose }) => {
  const { editableProduct, getProductHistories } = useModel('product');
  const [histories, setHistories] = useState<IProductHistory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      getProductHistories(editableProduct.id).then((data) => {
        setIsLoading(false);
        setHistories(data);
      });
    }
  }, [isOpen, getProductHistories, editableProduct]);

  return (
    <OModal
      title="Product History"
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

export default ProductHistoryModal;
