import React from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Table } from 'antd';
import { uuidv4 } from '@antv/xflow-core';
import { useModel } from '@umijs/max';

interface IWarehouseHistoryModal {
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

const WarehouseHistoryModal: React.FC<IWarehouseHistoryModal> = ({ isOpen, onClose }) => {
  const { warehouseHistoryList } = useModel('warehouse');

  return (
    <OModal
      title="In_House Warehouse Edit History"
      helpLink=""
      width={1000}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'cancel',
          type: 'default',
          btnLabel: 'Cancel',
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

export default WarehouseHistoryModal;
