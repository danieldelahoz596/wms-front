import type { IOButton } from '@/components/Globals/OButton';
import { OButton } from '@/components/Globals/OButton';
import ManageItemsModal from '@/components/Modals/ManageItems';
import AddNewItemModal from '@/pages/PurchaseOrders/MainPanel/Modals/AddNewItem';
import EditItemModal from '@/pages/PurchaseOrders/MainPanel/Modals/EditItem';
import ReceiveItemModal from '@/pages/PurchaseOrders/MainPanel/Modals/ReceiveItem';
import { modalType } from '@/utils/helpers/types';
import { PlayCircleFilled } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Col, Row, Space, Table } from 'antd';
import { useEffect, useMemo, useState } from 'react';

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
    key: 'status',
    render: () => (
      // status === '1' ? (
      <PlayCircleFilled style={{ color: 'blue', fontSize: 14 }} />
    ), // Fulfilled
    // ) : status === '2' ? (
    //   <CheckCircleFilled style={{ color: 'blue', fontSize: 14 }} /> //
    // ) : status === '3' ? (
    //   <CloseCircleFilled style={{ color: 'red', fontSize: 14 }} /> //
    // ) : status === '4' ? (
    //   <MinusCircleFilled style={{ color: 'red', fontSize: 14 }} /> //
    // ) : (
    //   <StopOutlined style={{ color: 'red', fontSize: 14 }} /> //
    // ),
  },
  {
    title: 'Product',
    dataIndex: 'product_name',
    key: 'product_name',
  },
  {
    title: 'Vendor SKU',
    dataIndex: 'vendor_sku',
    key: 'vendor_sku',
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
    dataIndex: 'unit_measure',
    key: 'unit_measure',
  },
  // {
  //   title: 'Total Unit Qty.',
  //   dataIndex: 'totalUnitQty',
  //   key: 'totalUnitQty',
  // },
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

const ItemsManagement = () => {
  const { selectedPOStatus } = useModel('poStatus');
  const { selectedPO } = useModel('po');
  const [showModal, setShowModal] = useState<modalType>(modalType.Close);
  const [poItems, setPoItems] = useState([]);

  const [selectedRow, setSelectedRow] = useState(null);
  const [manageOrdersModalData, setManageOrdersModalData] = useState<IManagePurchaseOrdersModal>(null);

  useEffect(() => {
    if (selectedPO.po_items) setPoItems(selectedPO.po_items);
    setSelectedRow(null);
  }, [selectedPO]);

  const actionButtons: IOButton[] = [
    {
      onClick: () => setShowModal(modalType.New),
      btnText: 'Add Item',
      hidden: selectedPOStatus == null || !['1', '2', '3', '4', '5'].includes(selectedPOStatus.poStatus),
      // Only NOT in Fulfilled, Closed Short, Voided, Canceled
    },
    {
      onClick: () => setShowModal(modalType.Edit),
      btnText: 'Edit',
      disabled: !selectedRow,
      // hidden: selectedPOStatus?.key !== '5' && selectedPOStatus?.key !== '9',
    },
    {
      onClick: () => setShowModal(modalType.Receive),
      btnText: 'Receive',
      disabled: !selectedRow,
      hidden: selectedPOStatus == null || !['4', '5'].includes(selectedPOStatus.poStatus),
      // Only NOT in Awaiting Confirmation
    },
    {
      btnText: 'Void',
      onClick: () => {
        setShowModal(modalType.ManagePurchaseOrders);
        setManageOrdersModalData({
          title: `Void Item '${selectedRow?.product.name} - ${selectedRow?.product.name}'`,
          submitBtnText: 'Yes - Void Item',
          description: 'Voiding this item will mark it as unfulfilled by the vendor.',
          confirmMessage: 'Are you sure you want to proceed?',
          onSave: () => {
            setShowModal(modalType.Close);
          },
          onClose: () => setShowModal(modalType.Close),
        });
      },
      disabled: !selectedRow,
      hidden: selectedPOStatus == null || !['4', '5'].includes(selectedPOStatus.poStatus),
      // Only NOT in Awaiting Confirmation
    },
    {
      btnText: 'Cancel',
      onClick: () => {
        setShowModal(modalType.ManagePurchaseOrders);
        setManageOrdersModalData({
          title: `Cancel Item '${selectedRow?.product.name} - ${selectedRow?.product.name}'`,
          submitBtnText: 'Yes - Cancel Item',
          description:
            "Canceling this item will mark it as an error. Please note that canceled items <b> do not </b> count against a vendor's score card.",
          confirmMessage: 'Are you sure you want to proceed?',
          onSave: () => {
            setShowModal(modalType.Close);
          },
          onClose: () => setShowModal(modalType.Close),
        });
      },
      disabled: !selectedRow,
      hidden: selectedPOStatus == null || !['4', '5'].includes(selectedPOStatus.poStatus),
      // Only NOT in Awaiting Confirmation
    },
    {
      btnText: 'Remove',
      onClick: () => {
        setShowModal(modalType.ManagePurchaseOrders);
        setManageOrdersModalData({
          title: `Remove Item '${selectedRow?.product.name}'`,
          submitBtnText: 'Yes - Remove Item',
          description: 'Removing this item will exclue it from the issued P.O.',
          confirmMessage: 'Are you sure you want to proceed?',
          onSave: () => {
            setShowModal(modalType.Close);
            setPoItems((prev) => prev.filter((item) => item.id !== selectedRow.id));
            setSelectedRow(null);
          },
          onClose: () => setShowModal(modalType.Close),
        });
      },
      disabled: !selectedRow,
      hidden: selectedPOStatus == null || !['1', '2', '3'].includes(selectedPOStatus.poStatus),
      // Only in Awaiting Authorization, Awaiting Confirmation, Awaiting Re-Authorization
    },
  ];

  const rows = useMemo(
    () =>
      poItems.map((poItem) => ({
        key: poItem.id,
        id: poItem.id,
        product_name: poItem.product.name,
        vendor_sku: poItem.product.sku,
        buyer: '',
        qty: poItem.qty,
        unit_measure: poItem.unit_of_measure.name,
        // totalUnitQty: poItem.quantity,
        originalCost: poItem.product.vendor_cost,
        discount: 0,
        tax: 0,
        totalCost: poItem.qty * poItem.product.vendor_cost,
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
            rowClassName={(record) => (record.id === selectedRow?.id ? `ant-table-row-selected` : '')}
          />
        </Col>
        <Col span={2}>
          <Space size={VERTICAL_SPACE_SIZE} direction={'vertical'} style={{ display: 'flex' }}>
            {actionButtons.map((btn, index) => (
              <OButton key={index} {...btn} style={{ width: '100%' }} />
            ))}
          </Space>
        </Col>
      </Row>

      <AddNewItemModal
        isOpen={showModal === modalType.New}
        poNumber={selectedPO.order_number}
        items={selectedPO.po_items}
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
        isOpen={showModal === modalType.Receive}
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

      <ManageItemsModal isOpen={showModal === modalType.ManagePurchaseOrders} {...manageOrdersModalData} />
    </>
  );
};

export default ItemsManagement;
