import type { IOButton } from '@/components/Globals/OButton';
import { OButton } from '@/components/Globals/OButton';
import { OTable } from '@/components/Globals/OTable';
import ImportExportSummaryModal from '@/components/Modals/ImportExportSummary';
import { modalType } from '@/utils/helpers/types';
import BranchIcon from '@/utils/icons/branch';
import ClockIcon from '@/utils/icons/clock';
import DuplicateIcon from '@/utils/icons/duplicate';
import {
  BorderHorizontalOutlined,
  CheckCircleOutlined,
  CloseOutlined,
  DownOutlined,
  ExclamationCircleFilled,
  FileFilled,
  FileOutlined,
  FileTextOutlined,
  FormOutlined,
  GlobalOutlined,
  HomeFilled,
  MessageOutlined,
  RetweetOutlined,
  StopOutlined,
  UserOutlined,
  VerticalAlignBottomOutlined,
  VerticalAlignTopOutlined,
} from '@ant-design/icons';
import { uuidv4 } from '@antv/xflow-core';
import { FormattedMessage, useModel } from '@umijs/max';
import { Badge, Button, Card, Dropdown, Modal, Popconfirm, Space } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import { useCallback, useEffect, useMemo, useState } from 'react';
import AddExportSettingsModal from './Modals/AddExportSettings';
import AddImportSettingsModal from './Modals/AddImportSettings';
import CancelOrderModal from './Modals/CancelOrder';
import CreateExternalShipmentsModal from './Modals/CreateExternalShipments';
import CreateRMAModal from './Modals/CreateRMA';
import DuplicateOrderModal from './Modals/DuplicateOrder';
import EditOrderModal from './Modals/EditOrder';
import ExportOrderModal from './Modals/ExportOrder';
import ExportQueueOrderModal from './Modals/ExportQueueOrder';
import OrderHistoryModal from './Modals/History';
import ImportOrderModal from './Modals/ImportOrder';
import ImportOrderShipmentModal from './Modals/ImportOrderShipment';
import ManualOrderModal from './Modals/ManualOrder';
import MarkOrderPaidModal from './Modals/MarkOrderPaid';
import NewShipmentImportMappingsModal from './Modals/NewShipmentImportMappings';
import OrderExportSettingsModal from './Modals/OrderExportSettings';
import OrderImportSettingsModal from './Modals/OrderImportSettings';
import RestoreOrderModal from './Modals/RestoreOrder';
import SelectOrderColumnsModal from './Modals/SelectOrderColumns';
import ShipmentImportMappingsModal from './Modals/ShipmentImportMappings';
import ShippingQueueSummaryModal from './Modals/ShippingQueueSummary';
import SplitOrderModal from './Modals/SplitOrder';
import StockTransferFirstStepModal from './Modals/StockTransferFirstStep';
import StockTransferSecondStepModal from './Modals/StockTransferSecondStep';

interface IMainPanel {
  selectedRows: any[];
  setSelectedRows: (value: any) => void;
}

const { confirm } = Modal;

const defaultShowColumns = [
  'Channel',
  'Order Number',
  'Labels',
  'Notes',
  'Order Date',
  'Date Paid',
  'Age',
  'Recipient',
  'Order Total',
  'Items',
  'Item Names',
];

const defaultOrderTableColumns = [
  {
    title: 'Order Number',
    dataIndex: 'order_num',
    key: 'order_num',
  },
  {
    title: 'Labels',
    dataIndex: 'labels',
    key: 'labels',
  },
  {
    title: 'Notes',
    dataIndex: 'notes',
    key: 'notes',
  },
  {
    title: 'Order Date',
    dataIndex: 'order_date',
    key: 'order_date',
  },
  {
    title: 'Date Paid',
    dataIndex: 'order_paid',
    key: 'order_paid',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Recipient',
    dataIndex: 'recipient',
    key: 'recipient',
  },
  {
    title: 'Order Total',
    dataIndex: 'orderTotal',
    key: 'orderTotal',
  },
  {
    title: 'Items',
    dataIndex: 'items',
    key: 'items',
  },
  {
    title: 'Item Names',
    dataIndex: 'itemNames',
    key: 'itemNames',
  },
];

const showConfirm = () => {
  confirm({
    title: 'Do you Want to Assign these items?',
    icon: <ExclamationCircleFilled />,
    content: 'Some descriptions',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};

const MainPanel: React.FC<IMainPanel> = ({ selectedRows, setSelectedRows }) => {
  const { orderList, shippingQueue, setOrderList, setEditableOrder, setSelectedOrders, getOrderList, setShippingQueue } =
    useModel('order');
  const { userList } = useModel('user');
  const { fieldTypes } = useModel('customOrderFields');
  const { selectedOrderStatus } = useModel('orderStatus');
  const { initialState } = useModel('@@initialState');
  const { getShipmentImportExportSummary } = useModel('exportSummary');
  const [modalOpen, setModal] = useState('');
  const [showChooseColumn, setShowChooseColumn] = useState(true);
  const [showColumns, setShowColumns] = useState(defaultShowColumns);
  const [stockTransferWarehouses, setStockTransferWarehouses] = useState(null);

  useEffect(() => {
    getOrderList({
      order_status: selectedOrderStatus?.status?.id,
    });
  }, [getOrderList, selectedOrderStatus]);

  const handleProductEdit = useCallback(
    (item: any) => {
      setEditableOrder(item);
      setModal(modalType.EditOrder);
    },
    [setEditableOrder, setModal],
  );

  const handleSelectedRows = useCallback(
    (_selectedRows = []) => {
      setSelectedRows(_selectedRows);
      const _selectedOrders = orderList.filter((item) => _selectedRows.includes(item.id));
      setSelectedOrders(_selectedOrders);
      setEditableOrder(_selectedOrders[0]);
    },
    [orderList, setSelectedRows, setSelectedOrders, setEditableOrder],
  );

  const handleShip = useCallback(() => {
    setShippingQueue((prev) => _.uniq([...prev, ...selectedRows]));
    setSelectedRows([]);
  }, [setShippingQueue, selectedRows, setSelectedRows]);

  const actionButtons: IOButton[] = [
    {
      onClick: () => setModal(modalType.ExportQueueOrder),
      btnText: 'Queue',
      hidden: [5, 6, 7].includes(selectedOrderStatus?.status.id),
    },
    {
      onClick: () => setModal(modalType.History),
      btnText: 'History',
      disabled: selectedRows.length !== 1,
    },
    {
      hidden: selectedOrderStatus?.status.id != 3,
      onClick: () => handleShip(),
      btnText: (
        <Popconfirm title="Do you want to ship these items" onConfirm={handleShip}>
          <OButton btnText="Ship" disabled={selectedRows.length === 0} />
        </Popconfirm>
      ),
    },
    {
      btnText: (
        <Dropdown
          menu={{
            items: [
              {
                key: 'pick_list',
                label: (
                  <span
                    onClick={() =>
                      window.open(
                        'https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503297/image__3_.png',
                        '_blank',
                      )
                    }
                  >
                    Pick List(s)
                  </span>
                ),
                icon: <FileOutlined />,
                disabled: selectedRows.length === 0,
              },
              {
                key: 'global_picK_list',
                label: <span> Global Pick List</span>,
                icon: <FileOutlined />,
                disabled: selectedRows.length === 0,
              },
              {
                key: 'packing_slip',
                label: (
                  <span
                    onClick={() =>
                      window.open(
                        'https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503351/image__4_.png',
                        '_blank',
                      )
                    }
                  >
                    Packing Slip(s)
                  </span>
                ),
                icon: <FileTextOutlined />,
                disabled: selectedRows.length === 0,
              },
              {
                key: 'item_label',
                label: <span>Item Label(s)</span>,
                icon: <FileOutlined />,
              },
              {
                key: 'item_label_roll',
                label: <span>Item Label(s) Roll</span>,
                icon: <FileOutlined />,
              },
              {
                key: 'label',
                label: (
                  <span
                    onClick={() =>
                      window.open(
                        'https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504595/orders1__6_.png',
                        '_blank',
                      )
                    }
                  >
                    Label(s)
                  </span>
                ),
                icon: <FileOutlined />,
                disabled: selectedRows.length === 0,
              },
              {
                key: 'custom_form',
                label: <span>Custom Form(s)</span>,
                icon: <FileOutlined />,
              },
            ],
          }}
        >
          <Button size="small">
            <Space>
              Print <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      ),
      hidden: [6, 7].includes(selectedOrderStatus?.status.id),
    },
    {
      onClick: () => console.log('Label'),
      btnText: (
        <Dropdown
          menu={{
            items: [],
          }}
        >
          <Button size="small">
            <Space>
              Label <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      ),
    },
    {
      btnText: (
        <Dropdown
          menu={{
            items: [
              {
                key: 'hold_until',
                label: <span>Hold Until..</span>,
                icon: <ClockIcon style={{ fontSize: 12 }} />,
              },
              // In Awaiting Shipment or Pending Fulfillment
              [2, 3, 4].includes(selectedOrderStatus?.status.id)
                ? {
                    key: 'cancel_order',
                    label: <span onClick={() => setModal(modalType.CancelOrder)}>Cancel Order</span>,
                    icon: <StopOutlined />,
                    disabled: selectedRows.length == 0,
                  }
                : null,
              {
                key: 'assign_to',
                label: <span>Assign To</span>,
                icon: <UserOutlined />,
                children:
                  userList.length > 1 &&
                  userList
                    .filter((user) => user.id !== initialState?.currentUser?.user.id)
                    .map((user) => ({
                      key: user.id,
                      label: <span onClick={showConfirm}>{user.username}</span>,
                    })),
                disabled: selectedRows.length == 0,
              },
              {
                key: 'split_order',
                label: <span onClick={() => setModal(modalType.SplitOrder)}>SplitOrder</span>,
                icon: <BranchIcon style={{ fontSize: 12 }} />,
                disabled: selectedRows.length !== 1,
              },
              {
                key: 'mark_paid',
                label: <span onClick={() => setModal(modalType.MarkOrdersPaid)}>Mark 'Paid'</span>,
                icon: <CheckCircleOutlined />,
                disabled: selectedRows.length == 0,
                hidden: ![2].includes(selectedOrderStatus?.status.id),
              },
              {
                key: 'mark_shipped',
                label: <span onClick={() => setModal(modalType.ExternalShipment)}>Mark 'Shipped'</span>,
                icon: <CheckCircleOutlined />,
                disabled: selectedRows.length == 0,
                hidden: [1, 2, 5, 6, 7].includes(selectedOrderStatus?.status.id),
              },
              {
                key: 'duplicate_order',
                label: <span onClick={() => setModal(modalType.DuplicateOrder)}>Duplicate Order</span>,
                icon: <DuplicateIcon style={{ fontSize: 12 }} />,
                disabled: selectedRows.length !== 1,
              },
              // {
              //   key: '7',
              //   label: (<span> Restore</span>),
              //   icon: <RedoOutlined />
              // },
            ],
          }}
        >
          <Button size="small">
            <Space>
              Edit <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      ),
      hidden: [5, 7].includes(selectedOrderStatus?.status.id),
    },
    {
      onClick: () => setModal(modalType.RestoreOrder),
      btnText: 'Restore',
      hidden: ![6, 7].includes(selectedOrderStatus?.status.id),
      disabled: selectedRows.length === 0,
    },
    {
      onClick: () => console.log('Merge'),
      btnText: 'Merge',
      hidden: [5, 6, 7].includes(selectedOrderStatus?.status.id),
    },
    {
      onClick: () => setModal(modalType.CreateRMA),
      btnText: 'Create RMA',
      hidden: ![5].includes(selectedOrderStatus?.status.id),
      disabled: selectedRows.length === 0,
    },
    {
      btnText: (
        <Dropdown
          menu={{
            items: [
              {
                key: '1',
                label: (
                  <span
                    onClick={() => {
                      setModal(modalType.ManualOrder);
                    }}
                  >
                    Manual Orders
                  </span>
                ),
                icon: <GlobalOutlined />,
              },
              {
                key: '2',
                label: <span onClick={() => setModal(modalType.StockTransferFirstStep)}>Stock Transfer</span>,
                icon: <HomeFilled />,
              },
            ],
          }}
        >
          <Button size="small">
            <Space>
              New Order <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      ),
    },
    {
      onClick: () => console.log('Import/Export'),
      btnText: (
        <Dropdown
          menu={{
            items: [
              {
                key: '1',
                label: <span onClick={() => setModal(modalType.ImportOrder)}>Import Orders</span>,
                icon: <VerticalAlignTopOutlined />,
              },
              {
                key: '2',
                label: <span onClick={() => setModal(modalType.ImportOrderShipments)}>Import Shipments</span>,
                icon: <VerticalAlignTopOutlined />,
              },
              {
                type: 'divider',
              },
              {
                key: '4',
                label: <span onClick={() => setModal(modalType.ExportOrder)}>Export Selected Orders</span>,
                icon: <VerticalAlignBottomOutlined />,
                disabled: selectedRows.length == 0,
              },
            ],
          }}
        >
          <Button size="small">
            <Space>
              Import/Export <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      ),
    },
  ];

  //order list table columns
  const orderTableColumns = useMemo(() => {
    const staticColumns = defaultOrderTableColumns.filter((item) => showColumns.includes(item.title));

    const customColumns = fieldTypes
      .filter((field) => field.show_on_grid && field.active)
      .map((field) => ({
        key: field.name,
        dataIndex: field.id,
        title: field.name,
      }));

    return [...staticColumns, ...customColumns];
  }, [showColumns, fieldTypes]);

  // prepare order list table rows
  const orderTableRows = useMemo(
    () =>
      orderList.map((item) => {
        item.custom_fields?.forEach((field) => (item[field.field_id] = field.value));

        return {
          ...item,
          key: item.id,
          channel: (
            <span>
              {/* <img src={item.sales_channel.icon} />
              <span>{item.sales_channel.name}</span> */}
            </span>
          ),
          orderTotal: `$${item.amount_paid}`,
          order_num: (
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleProductEdit(item);
              }}
            >
              <span style={{ textDecoration: 'underline', cursor: 'pointer', color: '#5F5FFF' }}>{item.order_num}</span>
            </div>
          ),
          notes: (
            <div style={{ display: 'flex', gap: '0.2rem', justifyContent: 'space-around' }}>
              <FormOutlined style={{ color: '#5F5FFF', cursor: 'pointer' }} />
              <MessageOutlined style={{ color: '#5F5FFF', cursor: 'pointer' }} />
              <MessageOutlined style={{ color: '#5F5FFF', cursor: 'pointer', transform: 'scaleX(-1)' }} />
            </div>
          ),
          order_date: item.order_date ? moment(item.order_date).format('Y-M-D') : '',
          order_paid: item.paid_on ? moment(item.paid_on).format('Y-M-D') : '',
          age: (
            <span
              style={{
                color: Math.floor(item.age / 24) > 0 ? 'green' : 'red',
              }}
            >
              {item.order_date && `${Math.floor(item.age / 24)}d ${Math.floor(item.age % 24)}hr`}
            </span>
          ),
          recipient: (
            <div>
              {item.customer && (
                <>
                  <FileFilled style={{ color: '#AD5A7D', marginRight: '3px' }} />
                  {item.customer.name}
                </>
              )}
            </div>
          ),
          items: item.order_items.length,
          itemNames: item.order_items.length > 0 && item.order_items.map((order_item) => order_item.product.name).join(', '),
        };
      }),
    [orderList, handleProductEdit],
  );

  return (
    <>
      <div className="main-panel">
        <div className="title-row space-between">
          <h1 className="page-title">
            <FormattedMessage id="pages.orders.mainpanel.title" /> {selectedOrderStatus?.status.name}
          </h1>
          {/* {selectedOrderStatus?.status.id === 3 && selectedOrderStatus?.filter && ( */}
          {selectedOrderStatus?.status.id === 3 && (
            <Button style={{ paddingTop: '0', paddingBottom: '0' }} onClick={() => setModal(modalType.ShippingQueueSummary)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>
                  {' '}
                  <DownOutlined /> {selectedOrderStatus?.filter?.name} Shipping Queue
                </span>{' '}
                <Badge count={shippingQueue.length} color="#5F5FFF" showZero />
              </div>
            </Button>
          )}
          {/* )} */}
        </div>
        <Card className="content-box">
          <Space size={HORIZONTAL_SPACE_SIZE} className="button-row">
            {actionButtons.map((btn, index) => (
              <OButton key={index} {...btn} />
            ))}
          </Space>
          <OTable
            type="checkbox"
            columns={orderTableColumns}
            rows={orderTableRows}
            selectedRows={selectedRows}
            setSelectedRows={handleSelectedRows}
          />
          <div className="choose-column" style={{ position: 'absolute', bottom: 20 }} hidden={!showChooseColumn}>
            <Space size={HORIZONTAL_SPACE_SIZE} className="button-row">
              <OButton icon={<RetweetOutlined />} btnText={''} style={{ color: 'gray' }} />
              <OButton
                icon={<BorderHorizontalOutlined />}
                btnText={''}
                onClick={() => setModal(modalType.SelectOrderColumns)}
                style={{ color: 'gray' }}
              />
              <OButton
                icon={<CloseOutlined />}
                btnText={''}
                onClick={() => setShowChooseColumn(false)}
                style={{ color: 'gray' }}
              />
            </Space>
          </div>
        </Card>
      </div>

      <ImportExportSummaryModal
        title="External Shipment Import"
        info="TEST Shipment Import Report"
        getImportExportSummary={getShipmentImportExportSummary}
        isOpen={modalOpen === modalType.ImportExportSummary}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />

      <ManualOrderModal
        isOpen={modalOpen === modalType.ManualOrder}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />

      <EditOrderModal
        isOpen={modalOpen === modalType.EditOrder}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />

      <CancelOrderModal
        isOpen={modalOpen === modalType.CancelOrder}
        onSave={() => {}}
        onClose={() => setModal(modalType.Close)}
      />

      <RestoreOrderModal
        isOpen={modalOpen === modalType.RestoreOrder}
        onSave={() => {}}
        onClose={() => setModal(modalType.Close)}
      />

      <ImportOrderModal
        isOpen={modalOpen === modalType.ImportOrder}
        onSave={() => setModal(modalType.Close)}
        handleConfigureSettings={(value: any) => setModal(value)}
        onClose={() => setModal(modalType.Close)}
      />

      <ImportOrderShipmentModal
        isOpen={modalOpen === modalType.ImportOrderShipments}
        onSave={() => setModal(modalType.ImportExportSummary)}
        onConfigure={() => setModal(modalType.ShipmentImportMapping)}
        onClose={() => setModal(modalType.Close)}
      />

      <ShipmentImportMappingsModal
        isOpen={modalOpen === modalType.ShipmentImportMapping}
        onAdd={() => setModal(modalType.NewShipmentImportMapping)}
        onClose={() => setModal(modalType.ImportOrderShipments)}
      />

      <NewShipmentImportMappingsModal
        isOpen={modalOpen === modalType.NewShipmentImportMapping}
        onSave={() => setModal(modalType.ShipmentImportMapping)}
        onClose={() => setModal(modalType.ShipmentImportMapping)}
      />

      <ExportOrderModal
        isOpen={modalOpen === modalType.ExportOrder}
        onSave={() => setModal(modalType.Close)}
        handleConfigureSettings={(value: any) => setModal(value)}
        onClose={() => setModal(modalType.Close)}
      />

      <OrderExportSettingsModal
        isOpen={modalOpen === modalType.OrderExportSettings}
        onAddOrderExportSettings={() => setModal(modalType.AddOrderExportSettings)}
        onClose={() => setModal(modalType.ExportOrder)}
      />

      <ExportQueueOrderModal
        isOpen={modalOpen === modalType.ExportQueueOrder}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />

      <OrderImportSettingsModal
        isOpen={modalOpen === modalType.OrderImportSettings}
        onAddOrderImportSettings={() => setModal(modalType.AddOrderImportSettings)}
        onClose={() => setModal(modalType.ImportOrder)}
      />

      <AddImportSettingsModal
        isOpen={modalOpen === modalType.AddOrderImportSettings}
        onSave={() => setModal(modalType.OrderImportSettings)}
        onClose={() => setModal(modalType.OrderImportSettings)}
      />

      <AddExportSettingsModal
        isOpen={modalOpen === modalType.AddOrderExportSettings}
        onSave={() => setModal(modalType.ExportOrder)}
        onClose={() => setModal(modalType.ExportOrder)}
      />

      <SelectOrderColumnsModal
        isOpen={modalOpen === modalType.SelectOrderColumns}
        onSave={(items) => {
          setShowColumns(items);
          setModal(modalType.Close);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <SplitOrderModal
        isOpen={modalOpen === modalType.SplitOrder}
        onSave={(item) => {
          const newOrderList = [];
          orderList.forEach((order) =>
            order.id === item.id ? newOrderList.push(order, { ...item, id: uuidv4() }) : newOrderList.push(order),
          );
          setOrderList(newOrderList);
          setModal(modalType.Close);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <DuplicateOrderModal
        isOpen={modalOpen === modalType.DuplicateOrder}
        onSave={() => setModal(modalType.ManualOrder)}
        onClose={() => setModal(modalType.Close)}
      />

      <ShippingQueueSummaryModal
        isOpen={modalOpen === modalType.ShippingQueueSummary}
        onClose={() => setModal(modalType.Close)}
      />

      <CreateExternalShipmentsModal
        isOpen={modalOpen === modalType.ExternalShipment}
        items={orderList.filter((order) => selectedRows.includes(order.id))}
        onClose={() => setModal(modalType.Close)}
        onSave={() => setModal(modalType.Close)}
      />

      <StockTransferFirstStepModal
        isOpen={modalOpen === modalType.StockTransferFirstStep}
        onSave={(data) => {
          setStockTransferWarehouses(data);
          setModal(modalType.StockTransferSecondStep);
        }}
        onClose={() => {
          setStockTransferWarehouses(null);
          setModal(modalType.Close);
        }}
        warehouses={stockTransferWarehouses}
      />

      <StockTransferSecondStepModal
        isOpen={modalOpen === modalType.StockTransferSecondStep}
        onSave={(values) => {
          setOrderList((prev) => [
            ...prev,
            {
              id: uuidv4(),
              order_status: 3,
              order_number: values.order_number,
              order_date: new Date(),
              order_paid: new Date(),
              recipient: values.destination,
              orderItems: values.transferRows,
              custom_fields: [],
              sales_channel: {
                icon: 'https://img.icons8.com/ios-glyphs/16/null/google-earth.png',
                name: 'DL Test channel',
              },
            },
          ]);
          setStockTransferWarehouses(null);
          setModal(modalType.Close);
        }}
        onBack={() => {
          setStockTransferWarehouses(null);
          setModal(modalType.Close);
        }}
        onClose={() => setModal(modalType.StockTransferFirstStep)}
        warehouses={stockTransferWarehouses}
      />

      <CreateRMAModal
        isOpen={modalOpen === modalType.CreateRMA}
        title={`Create RMA for ${orderList.find((order) => order.id === selectedRows[0])?.order_number}`}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />

      <MarkOrderPaidModal
        isOpen={modalOpen === modalType.MarkOrdersPaid}
        orderNumber={orderList.find((order) => order.id === selectedRows[0])?.order_number}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />

      <OrderHistoryModal isOpen={modalOpen === modalType.History} onClose={() => setModal(modalType.Close)} />
    </>
  );
};

export default MainPanel;
