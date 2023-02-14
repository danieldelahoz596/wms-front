import { Table2DemoColumns } from '@/components/DemoData';
import type { IOButton } from '@/components/Globals/OButton';
import { OButton } from '@/components/Globals/OButton';
import { OTable } from '@/components/Globals/OTable';
import AddNewItemModal from '@/components/Modals/PurchaseOrder/AddNewItemModal';
import CancelItemModal from '@/components/Modals/PurchaseOrder/CancelItemModal';
import EditItemModal from '@/components/Modals/PurchaseOrder/EditItemModal';
import ReceiveItemModal from '@/components/Modals/PurchaseOrder/ReceiveItemModal';
import RemoveItemModal from '@/components/Modals/PurchaseOrder/RemoveItemModal';
import VoidItemModal from '@/components/Modals/PurchaseOrder/VoidItemModal';
import { modalType } from '@/utils/helpers/types';
import { useModel } from '@umijs/max';
import { Col, Row, Space } from 'antd';
import React, { useEffect, useState } from 'react';

interface IHistoryManagement {
  data: any[];
}

const HistoryManagement: React.FC<IHistoryManagement> = ({ data }) => {
  const [newItemModal, setNewItemModal] = useState('');
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
  const { selectedPOStatus } = useModel('poStatus');

  const onSelect = (record: any) => {
    setNewItemModalTitle(record.vendorSku);
    setEditItemData(record);
    setReceiveItemData(record);
    setVoidItemData(record);
    setCancelItemData(record);
    setRemoveItemData(record);
  };

  useEffect(() => {
    if (selectedRows.length) {
      setIsDisableButtons(false);
    } else {
      setIsDisableButtons(true);
    }
  }, [selectedRows]);

  const btnStyle = {
    marginBottom: '10px',
    width: '80%',
  };

  const actionButtons: IOButton[] = [
    {
      onClick: () => setNewItemModal(modalType.New),
      btnText: 'Add Item',
      hidden: selectedPOStatus == null || !['1', '2', '3', '4', '5'].includes(selectedPOStatus.poStatus),
      // Only NOT in Fulfilled, Closed Short, Voided, Canceled
    },
    {
      onClick: () => setEditItemModal(modalType.Edit),
      btnText: 'Edit',
      disabled: isDisableButtons,
      // hidden: selectedPOStatus?.key !== '5' && selectedPOStatus?.key !== '9',
    },
    {
      type: 'primary',
      onClick: () => setReceiveItemModal(modalType.Receive),
      btnText: 'Receive',
      style: btnStyle,
      disabled: isDisableButtons,
    },
    {
      type: 'primary',
      onClick: () => setVoidItemModal(modalType.Void),
      btnText: 'Void',
      style: btnStyle,
      disabled: isDisableButtons,
    },
    {
      type: 'primary',
      onClick: () => setCancelItemModal(modalType.Cancel),
      btnText: 'Cancel',
      style: btnStyle,
      disabled: isDisableButtons,
    },
    {
      type: 'primary',
      onClick: () => setRemoveItemModal(modalType.Remove),
      btnText: 'Remove',
      style: btnStyle,
      disabled: isDisableButtons,
      hidden:
        (selectedPOStatus?.key !== '0' && selectedPOStatus?.key !== '1') ||
        !selectedPOStatus?.selectedWarehouse,
    },
  ];

  const rows = data.map((poItem: any) => ({
    product: poItem.product?.name,
    vendorSku: poItem.product?.vendorSku,
    Qty: poItem.quantity,
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
          <OTable
            columns={Table2DemoColumns}
            rows={rows}
            type={'radio'}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
            onSelect={onSelect}
            pagination={false}
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
        title={newItemModalTitle}
        newItemModal={newItemModal}
        setNewItemModal={setNewItemModal}
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
