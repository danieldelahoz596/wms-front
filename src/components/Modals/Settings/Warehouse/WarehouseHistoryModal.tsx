import React from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { uuidv4 } from '@antv/xflow-core';
import { useModel } from '@umijs/max';

interface IWarehouseHistory {
  isOpen: boolean;
  onClose: () => void;
}

const columns = [
  {
    title: 'EDIT TIME',
    dataIndex: 'time',
  },
  {
    title: 'USER',
    dataIndex: 'user',
  },
  {
    title: 'CHANGED VALUES',
    dataIndex: 'value',
  },
];

const WarehouseHistory: React.FC<IWarehouseHistory> = ({ isOpen, onClose }) => {
  const { warehouseHistoryList } = useModel('warehouse');

  return (
    <OModal
      title="IN_HOUSE WAREHOUSE EDIT HISTORY"
      isOpen={isOpen}
      width={1000}
      centered
      handleCancel={onClose}
      buttons={[
        {
          key: 'cancel',
          type: 'default',
          btnLabel: 'CANCEL',
          onClick: onClose,
        },
      ]}
    >
      <Table
        columns={columns}
        dataSource={warehouseHistoryList.map((_item) => ({ key: uuidv4(), ..._item }))}
        pagination={{ pageSize: 3 }}
        scroll={{ y: 600 }}
      />
    </OModal>
  );
};

export default WarehouseHistory;
