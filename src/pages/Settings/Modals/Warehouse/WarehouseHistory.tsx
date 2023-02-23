import React from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Table } from 'antd';
import { uuidv4 } from '@antv/xflow-core';
import { FormattedMessage, useModel } from '@umijs/max';

interface IWarehouseHistoryModal {
  isOpen: boolean;
  onClose: () => void;
}

const columns = [
  {
    title: <FormattedMessage id="component.table.column.editTime" />,
    dataIndex: 'time',
  },
  {
    title: <FormattedMessage id="component.table.column.user" />,
    dataIndex: 'user',
  },
  {
    title: <FormattedMessage id="component.table.column.changedValues" />,
    dataIndex: 'value',
  },
];

const WarehouseHistoryModal: React.FC<IWarehouseHistoryModal> = ({ isOpen, onClose }) => {
  const { warehouseHistoryList } = useModel('warehouse');

  return (
    <OModal
      title={<FormattedMessage id="pages.settings.warehouses.warehouseHistory.title" />}
      helpLink=""
      width={1000}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'cancel',
          type: 'default',
          btnLabel: <FormattedMessage id="component.button.cancel" />,
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
