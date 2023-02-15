import type { IOButton } from '@/components/Globals/OButton';
import { OButton } from '@/components/Globals/OButton';
import AddNewItemModal from '@/components/Modals/PurchaseOrder/AddNewItemModal';
import CancelItemModal from '@/components/Modals/PurchaseOrder/CancelItemModal';
import EditItemModal from '@/components/Modals/PurchaseOrder/EditItemModal';
import ReceiveItemModal from '@/components/Modals/PurchaseOrder/ReceiveItemModal';
import RemoveItemModal from '@/components/Modals/PurchaseOrder/RemoveItemModal';
import VoidItemModal from '@/components/Modals/PurchaseOrder/VoidItemModal';
import { modalType } from '@/utils/helpers/types';
import { CheckCircleFilled, MinusCircleFilled, PlayCircleFilled } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Col, Row, Space, Table } from 'antd';
import React, { useState } from 'react';

interface IHistoryManagement {
  data: any[];
}

const TColumns = [
  {
    title: '',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) =>
      status === 'success' ? (
        <CheckCircleFilled style={{ color: 'blue' }} />
      ) : status === 'pending' ? (
        <PlayCircleFilled style={{ color: 'blue' }} />
      ) : (
        <MinusCircleFilled style={{ color: 'red' }} />
      ),
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Vendor SKU',
    dataIndex: 'vendorSku',
    key: 'vendorSku',
  },
  {
    title: 'Buyer',
    dataIndex: 'buyer',
    key: 'buyer',
  },
  {
    title: 'Qty.',
    dataIndex: 'qty',
    key: 'qty',
  },
  {
    title: 'Unit of Measure',
    dataIndex: 'unitMeasure',
    key: 'unitMeasure',
  },
  {
    title: 'Total Unit Qty.',
    dataIndex: 'totalUnitQty',
    key: 'totalUnitQty',
  },
  {
    title: 'Original Cost',
    dataIndex: 'originalCost',
    key: 'originalCost',
  },
  {
    title: 'Billed Cost',
    dataIndex: 'billedCost',
    key: 'billedCost',
  },
  {
    title: 'Landed Cost',
    dataIndex: 'landedCost',
    key: 'landedCost',
  },
  {
    title: 'Discount',
    dataIndex: 'discount',
    key: 'discount',
  },
  {
    title: 'Tax %',
    dataIndex: 'tax',
    key: 'tax',
  },
  {
    title: 'Total Cost',
    dataIndex: 'totalCost',
    key: 'totalCost',
  },
];

const HistoryManagement: React.FC<IHistoryManagement> = ({ data }) => {
  const [showModal, setShowModal] = useState<modalType>(modalType.Close);
  const [newItemModalTitle, setNewItemModalTitle] = useState<any>('');
  const [isDisableButtons, setIsDisableButtons] = useState(true);

  const [editItemModal, setEditItemModal] = useState('');
  const [editItemData, setEditItemData] = useState<any>({});

  const [receiveItemModal, setReceiveItemModal] = useState('');
  const [receiveItemData, setReceiveItemData] = useState<any>({});

  const [voidItemModal, setVoidItemModal] = useState('');
  const [voidItemData, setVoidItemData] = useState<any>({});

  const [cancelItemModal, setCancelItemModal] = useState('');
  const [cancelItemData, setCancelItemData] = useState<any>({});

  const [removeItemModal, setRemoveItemModal] = useState('');
  const [removeItemData, setRemoveItemData] = useState<any>({});
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const { selectedPOStatus } = useModel('poStatus');

  // useEffect(() => {
  //   if (selectedRows.length) {
  //     setIsDisableButtons(false);
  //   } else {
  //     setIsDisableButtons(true);
  //   }
  // }, [selectedRows]);

  const btnStyle = {
    marginBottom: '10px',
    width: '80%',
  };

  const actionButtons: IOButton[] = [
    {
      onClick: () => setShowModal(modalType.New),
      btnText: 'Add Item',
      hidden:
        selectedPOStatus == null || !['1', '2', '3', '4', '5'].includes(selectedPOStatus.poStatus),
      // Only NOT in Fulfilled, Closed Short, Voided, Canceled
    },
    {
      onClick: () => setEditItemModal(modalType.Edit),
      btnText: 'Edit',
      disabled: isDisableButtons,
      // hidden: selectedPOStatus?.key !== '5' && selectedPOStatus?.key !== '9',
    },
    {
      onClick: () => setReceiveItemModal(modalType.Receive),
      btnText: 'Receive',
      disabled: isDisableButtons,
      hidden: selectedPOStatus == null || !['4', '5'].includes(selectedPOStatus.poStatus),
      // Only NOT in Awaiting Confirmation
    },
    {
      onClick: () => setVoidItemModal(modalType.Void),
      btnText: 'Void',
      disabled: isDisableButtons,
      hidden: selectedPOStatus == null || !['4', '5'].includes(selectedPOStatus.poStatus),
      // Only NOT in Awaiting Confirmation
    },
    {
      onClick: () => setCancelItemModal(modalType.Cancel),
      btnText: 'Cancel',
      disabled: isDisableButtons,
      hidden: selectedPOStatus == null || !['4', '5'].includes(selectedPOStatus.poStatus),
      // Only NOT in Awaiting Confirmation
    },
    {
      onClick: () => setRemoveItemModal(modalType.Remove),
      btnText: 'Remove',
      disabled: isDisableButtons,
      hidden: selectedPOStatus == null || !['1', '2', '3'].includes(selectedPOStatus.poStatus),
      // Only in Awaiting Authorization, Awaiting Confirmation, Awaiting Re-Authorization
    },
  ];

  const rows = data.map((poItem: any, index) => ({
    key: index + 1,
    id: poItem.id,
    status: poItem.status,
    product: poItem.product?.name,
    vendorSku: poItem.product?.vendorSku,
    Qty: poItem.quantity,
    holdQty: poItem.holdQty,
    qty: poItem.quantity,
    unitMeasure: poItem.unitMeasure,
    totalUnitQty: poItem.quantity,
    originalCost: poItem.unitCost,
    discount: poItem.discount,
    totalCost:
      parseInt(poItem.quantity) * parseFloat(poItem.unitCost) - parseFloat(poItem.discount),
  }));

  return (
    <>
      <Row gutter={10}>
        <Col span={22}>
          <Table
            columns={TColumns}
            dataSource={rows}
            pagination={{ hideOnSinglePage: true }}
            onRow={(record) => {
              return {
                onClick: () => {
                  if (record.id === selectedRow?.id) setSelectedRow(null);
                  else setSelectedRow(record);
                }, // click row
              };
            }}
            rowClassName={(record) =>
              record.id === selectedRow?.id ? `ant-table-row-selected` : ''
            }
          />
        </Col>
        <Col span={2}>
          <Space size={4} direction={'vertical'} style={{ display: 'flex' }}>
            {actionButtons.map((btn, index) => (
              <OButton key={index} {...btn} style={{ width: '100%' }} />
            ))}
          </Space>
        </Col>
      </Row>

      <AddNewItemModal
        isOpen={showModal === modalType.New}
        title={newItemModalTitle}
        onSave={() => setShowModal(modalType.Close)}
        onCancel={() => setShowModal(modalType.Close)}
      />

      <EditItemModal
        editItemData={editItemData}
        editItemModal={editItemModal}
        setEditItemModal={setEditItemModal}
      />
      <ReceiveItemModal
        receiveItemData={receiveItemData}
        receiveItemModal={receiveItemModal}
        setReceiveItemModal={setReceiveItemModal}
      />
      <VoidItemModal
        voidItemData={voidItemData}
        voidItemModal={voidItemModal}
        setVoidItemModal={setVoidItemModal}
      />
      <CancelItemModal
        cancelItemData={cancelItemData}
        cancelItemModal={cancelItemModal}
        setCancelItemModal={setCancelItemModal}
      />
      <RemoveItemModal
        removeItemData={removeItemData}
        removeItemModal={removeItemModal}
        setRemoveItemModal={setRemoveItemModal}
      />
    </>
  );
};

export default HistoryManagement;
