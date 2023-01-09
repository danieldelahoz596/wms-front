import React from 'react';
import { Button, Card, Row, Col, Form, Upload } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';

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
    }
  ];

const StockAllocationDetailsModal: React.FC<IStockAllocationDetailsModal> = ({
  isOpen,
  onClose,
  dataSource,
}) => {
  return (
    <OModal
      title="Stock Allocation Details"
      width={1000}
      className="OModal"
      centered
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'CLOSE',
          onClick: onClose,
        },
      ]}
    >
      <>
        <Card>
            <OTable
              columns={Tcolumns}
              rows={dataSource}
            />
        </Card>
      </>
    </OModal>
  );
};

export default StockAllocationDetailsModal;
