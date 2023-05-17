import { OModal } from '@/components/Globals/OModal';
import { Table } from 'antd';
import moment from 'moment';
import React from 'react';

interface IProductHistoryModal {
  isOpen: boolean;
  dataSource: any[];
  onClose: () => void;
}

const Tcolumns = [
  {
    title: 'Edit Time',
    dataIndex: 'edit_time',
    key: 'edit_time',
    render: (date) => moment(date).format('YYYY-MM-DD HH:mm A'),
  },
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: 'Edit Type',
    dataIndex: 'edit_type',
    key: 'edit_type',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
];

const ProductHistoryModal: React.FC<IProductHistoryModal> = ({ isOpen, dataSource, onClose }) => {
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
      <Table columns={Tcolumns} dataSource={dataSource} pagination={{ hideOnSinglePage: true }} />
    </OModal>
  );
};

export default ProductHistoryModal;
