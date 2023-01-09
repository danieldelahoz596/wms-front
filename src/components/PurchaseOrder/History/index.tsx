import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'antd';
import { Table2DemoColumns } from '@/components/DemoData';
import AddNewItemModal from '@/components/Modals/PurchaseOrder/AddNewItemModal';
import EditItemModal from '@/components/Modals/PurchaseOrder/EditItemModal';
import ReceiveItemModal from '@/components/Modals/PurchaseOrder/ReceiveItemModal';
import VoidItemModal from '@/components/Modals/PurchaseOrder/VoidItemModal';
import CancelItemModal from '@/components/Modals/PurchaseOrder/CancelItemModal';
import RemoveItemModal from '@/components/Modals/PurchaseOrder/RemoveItemModal';
import { modalType } from '@/utils/helpers/types';
import { OTable } from '@/components/Globals/OTable';
import type { IOButton } from '@/components/Globals/OButton';
import { OButton } from '@/components/Globals/OButton';
import { useModel } from '@umijs/max';

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
      type: 'primary',
      onClick: () => setNewItemModal(modalType.New),
      btnText: 'Add',
      style: btnStyle,
      disabled: isDisableButtons,
    },
    {
      type: 'primary',
      onClick: () => setEditItemModal(modalType.Edit),
      btnText: 'Edit',
      style: btnStyle,
      disabled: isDisableButtons,
      hidden: selectedPOStatus?.key !== '5' && selectedPOStatus?.key !== '9',
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
      <Row>
        <Col span={22}>
          <Card size="small">
            <OTable
              columns={Table2DemoColumns}
              rows={rows}
              type={'radio'}
              selectedRows={selectedRows}
              setSelectedRows={setSelectedRows}
              onSelect={onSelect}
            />
          </Card>
        </Col>
        <Col span={2}>
          <Card size="small">
            {actionButtons.map((btn, index) => (
              <OButton key={index} {...btn} />
            ))}
          </Card>
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
