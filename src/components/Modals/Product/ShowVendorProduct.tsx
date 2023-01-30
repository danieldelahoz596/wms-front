import React from 'react';
import { Table } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { UnorderedListOutlined } from '@ant-design/icons';

interface IShowVendorProductModal {
  isOpen: boolean;
  onClose: () => void;
}

const TColumns = [
  {
    title: '',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Vendor',
    dataIndex: 'vendor',
    key: 'vendor',
  },
  {
    title: 'Vendor SKU',
    dataIndex: 'vendorSKU',
    key: 'vendorSKU',
  },
  {
    title: 'Min Order Qty',
    dataIndex: 'minOrderQty',
    key: 'minOrderQty',
  },
  {
    title: 'Lead Time',
    dataIndex: 'leadTime',
    key: 'leadTime',
  },
  {
    title: 'U.O.M',
    dataIndex: 'uom',
    key: 'uom',
    render: () => <UnorderedListOutlined />,
  },
];

const dataSource = [
  {
    key: 1,
    id: 1,
    vendor: 'vendor',
    vendorSKU: 'vendorSKU',
    minOrderQty: 10,
    leadTime: 10,
  },
  {
    key: 2,
    id: 2,
    vendor: 'vendor',
    vendorSKU: 'vendorSKU',
    minOrderQty: 20,
    leadTime: 10,
  },
];

const ShowVendorProductModal: React.FC<IShowVendorProductModal> = ({ isOpen, onClose }) => {
  return (
    <OModal
      title="Core Product Details"
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
      <Table columns={TColumns} dataSource={dataSource} />
    </OModal>
  );
};

export default ShowVendorProductModal;
