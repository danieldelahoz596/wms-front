import { OModal } from '@/components/Globals/OModal';
import { Table } from 'antd';
import WarehouseIcon from '@/utils/icons/warehouse';

interface IIncomingUnitsModal {
  isOpen: boolean;
  onClose: () => void;
}

const TColumns = [
  {
    key: 'source',
    dataIndex: 'source',
    title: 'Source',
  },
  {
    key: 'orderNumber',
    dataIndex: 'orderNumber',
    title: 'Order Number',
    render: (orderNumber) => (
      <>
        <WarehouseIcon />
        {orderNumber}
      </>
    ),
  },
  {
    key: 'quantity',
    dataIndex: 'quantity',
    title: 'Quantity',
  },
  {
    key: 'orderDate',
    dataIndex: 'orderDate',
    title: 'Order Date',
  },
  {
    key: 'deliveryDate',
    dataIndex: 'deliveryDate',
    title: 'Delivery Date',
  },
];

const dataSource = [
  {
    key: 1,
    source: "Wendy's 3PL",
    orderNumber: 'Transfer 123',
    quantity: 5,
    orderDate: '07/15/2020',
    deliveryDate: '',
  },
];

const IncomingUnitsModal: React.FC<IIncomingUnitsModal> = ({ isOpen, onClose }) => {
  return (
    <OModal
      title="Incoming Units"
      helpLink=""
      width={800}
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

export default IncomingUnitsModal;
