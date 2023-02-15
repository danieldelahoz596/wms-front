import type { IOButton } from '@/components/Globals/OButton';
import { OButton } from '@/components/Globals/OButton';
import ManageItemsModal from '@/components/Modals/ManageItemsModal';
import AddNewItem from '@/components/Modals/PurchaseOrder/AddNewItem';
import EditItemModal from '@/components/Modals/PurchaseOrder/EditItemModal';
import ReceiveItemModal from '@/components/Modals/PurchaseOrder/ReceiveItemModal';
import { modalType } from '@/utils/helpers/types';
import {
  CheckCircleFilled,
  CloseCircleFilled,
  MinusCircleFilled,
  PlayCircleFilled,
  StopOutlined,
} from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Col, Row, Space, Table } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';

interface IItemsManagement {
  data: any[];
}

interface IManagePurchaseOrdersModal {
  title: string;
  submitBtnText: string;
  description: string;
  confirmMessage: string;
  onClose: () => void;
  onSave: () => void;
}

const TColumns = [
  {
    title: '',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) =>
      status === '1' ? (
        <PlayCircleFilled style={{ color: 'blue', fontSize: 14 }} /> // Fulfilled
      ) : status === '2' ? (
        <CheckCircleFilled style={{ color: 'blue', fontSize: 14 }} /> //
      ) : status === '3' ? (
        <CloseCircleFilled style={{ color: 'red', fontSize: 14 }} /> //
      ) : status === '4' ? (
        <MinusCircleFilled style={{ color: 'red', fontSize: 14 }} /> //
      ) : (
        <StopOutlined style={{ color: 'red', fontSize: 14 }} /> //
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

const ItemsManagement: React.FC<IItemsManagement> = ({ data }) => {
  const { selectedPOStatus } = useModel('poStatus');
  const { selectedPO } = useModel('po');
  const [showModal, setShowModal] = useState<modalType>(modalType.Close);
  const [poItems, setPoItems] = useState([]);

  const [receiveItemModal, setReceiveItemModal] = useState('');
  const [receiveItemData, setReceiveItemData] = useState<any>({});

  const [selectedRow, setSelectedRow] = useState(null);
  const [modalOpen, setModal] = useState('');
  const [manageOrdersModalData, setManageOrdersModalData] =
    useState<IManagePurchaseOrdersModal>(null);

  useEffect(() => setPoItems(data), [data]);

  const actionButtons: IOButton[] = [
    {
      onClick: () => setShowModal(modalType.New),
      btnText: 'Add Item',
      hidden:
        selectedPOStatus == null || !['1', '2', '3', '4', '5'].includes(selectedPOStatus.poStatus),
      // Only NOT in Fulfilled, Closed Short, Voided, Canceled
    },
    {
      onClick: () => setShowModal(modalType.Edit),
      btnText: 'Edit',
      disabled: !selectedRow,
      // hidden: selectedPOStatus?.key !== '5' && selectedPOStatus?.key !== '9',
    },
    {
      onClick: () => setReceiveItemModal(modalType.Receive),
      btnText: 'Receive',
      hidden: selectedPOStatus == null || !['4', '5'].includes(selectedPOStatus.poStatus),
      // Only NOT in Awaiting Confirmation
    },
    {
      btnText: 'Void',
      onClick: () => {
        setModal(modalType.ManagePurchaseOrders);
        setManageOrdersModalData({
          title: "Void Item 'Test Product - Test Product'",
          submitBtnText: 'Yes - Void Item',
          description: 'Voiding this item will mark it as unfulfilled by the vendor.',
          confirmMessage: 'Are you sure you want to proceed?',
          onSave: () => {
            setModal(modalType.Close);
          },
          onClose: () => setModal(modalType.Close),
        });
      },
      hidden: selectedPOStatus == null || !['4', '5'].includes(selectedPOStatus.poStatus),
      // Only NOT in Awaiting Confirmation
    },
    {
      btnText: 'Cancel',
      onClick: () => {
        setModal(modalType.ManagePurchaseOrders);
        setManageOrdersModalData({
          title: "Cancel Item 'Test Product - Test Product'",
          submitBtnText: 'Yes - Cancel Item',
          description:
            "Canceling this item will mark it as an error. Please note that canceled items <b> do not </b> count against a vendor's score card.",
          confirmMessage: 'Are you sure you want to proceed?',
          onSave: () => {
            setModal(modalType.Close);
          },
          onClose: () => setModal(modalType.Close),
        });
      },
      hidden: selectedPOStatus == null || !['4', '5'].includes(selectedPOStatus.poStatus),
      // Only NOT in Awaiting Confirmation
    },
    {
      btnText: 'Remove',
      onClick: () => {
        setModal(modalType.ManagePurchaseOrders);
        setManageOrdersModalData({
          title: "Remove Item 'Test Product - Test Product'",
          submitBtnText: 'Yes - Remove Item',
          description: 'Removing this item will exclue it from the issued P.O.',
          confirmMessage: 'Are you sure you want to proceed?',
          onSave: () => {
            setModal(modalType.Close);
          },
          onClose: () => setModal(modalType.Close),
        });
      },
      hidden: selectedPOStatus == null || !['1', '2', '3'].includes(selectedPOStatus.poStatus),
      // Only in Awaiting Authorization, Awaiting Confirmation, Awaiting Re-Authorization
    },
  ];

  const rows = useMemo(
    () =>
      poItems.map((poItem: any, index) => ({
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
        originalCost: poItem.originalCost,
        discount: poItem.discount,
        tax: poItem.tax,
        totalCost:
          parseInt(poItem.quantity) * parseFloat(poItem.unitCost) - parseFloat(poItem.discount),
      })),
    [poItems],
  );

  return (
    <>
      <Row gutter={10}>
        <Col span={22}>
          <Table
            columns={TColumns}
            dataSource={rows}
            pagination={false}
            onRow={(record) => {
              return {
                onClick: () => {
                  if (record.id === selectedRow?.id) setSelectedRow(null);
                  else setSelectedRow(poItems.find((item) => item.id === record.id));
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

      <AddNewItem
        isOpen={showModal === modalType.New}
        poNumber={selectedPO?.ponumber}
        items={data}
        onSave={(items) => {
          setPoItems(items);
          setShowModal(modalType.Close);
        }}
        onCancel={() => setShowModal(modalType.Close)}
      />
      <EditItemModal
        isOpen={showModal === modalType.Edit}
        item={selectedRow}
        onSave={(poData) => {
          setSelectedRow(null);
          setPoItems((prev) =>
            prev.map((item) =>
              item.id === selectedRow.id
                ? {
                    ...item,
                    ...poData,
                    billed_cost: poData.billedCost,
                    landed_cost: poData.landedCost,
                  }
                : item,
            ),
          );
          setShowModal(modalType.Close);
        }}
        onCancel={() => setShowModal(modalType.Close)}
      />
      <ReceiveItemModal
        receiveItemData={receiveItemData}
        receiveItemModal={receiveItemModal}
        setReceiveItemModal={setReceiveItemModal}
      />
      <ManageItemsModal
        isOpen={modalOpen === modalType.ManagePurchaseOrders}
        {...manageOrdersModalData}
      />
    </>
  );
};

export default ItemsManagement;
