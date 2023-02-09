import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import React from 'react';

interface IStockAllocationDetailsModal {
  isOpen: boolean;
  onClose: () => void;
  dataSource: any[];
}

const Tcolumns = [
  {
    title: 'Warehouse',
    dataIndex: 'warehouse',
    key: 'warehouse',
  },
  {
    title: 'Stock Location',
    dataIndex: 'stock_location',
    key: 'stock_location',
  },
  {
    title: 'Order Number',
    dataIndex: 'order_number',
    key: 'order_number',
  },
  {
    title: 'Allocated',
    dataIndex: 'allocated',
    key: 'allocated',
  },
  {
    title: 'Picked',
    dataIndex: 'picked',
    key: 'picked',
  },
];

const StockAllocationDetailsModal: React.FC<IStockAllocationDetailsModal> = ({
  isOpen,
  onClose,
  dataSource,
}) => {
  return (
    <OModal
      title="Stock allocation details"
      width={600}
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
      <OTable columns={Tcolumns} rows={dataSource} />
    </OModal>
  );
};

export default StockAllocationDetailsModal;
