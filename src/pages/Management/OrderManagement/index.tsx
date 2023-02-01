import { PageContainer } from '@ant-design/pro-components';
import { Card, Row, Col, Dropdown, Button, Badge, Modal } from 'antd';
import React, { useEffect, useState, useMemo } from 'react';
import SidePanel from './components/SidePanel/sidePanel';

import { SampleSplitter, cn } from '@/utils/components/SampleSplitter';
import { useResizable } from 'react-resizable-layout';
import OrderItems from './components/Bottoms/orderItems';
import RightPanel from './components/RightPanel/rightPanel';
import { OTable } from '@/components/Globals/OTable';
import type { IOButton } from '@/components/Globals/OButton';
import { OButton } from '@/components/Globals/OButton';
import { useModel } from '@umijs/max';
import {
  BorderHorizontalOutlined,
  CheckCircleOutlined,
  CloseOutlined,
  DownOutlined,
  ExclamationCircleFilled,
  FieldTimeOutlined,
  FileFilled,
  FileOutlined,
  FileTextOutlined,
  FormOutlined,
  GlobalOutlined,
  MessageOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
  RedoOutlined,
  RetweetOutlined,
  StopOutlined,
  UserOutlined,
  VerticalAlignBottomOutlined,
  VerticalAlignTopOutlined,
} from '@ant-design/icons';
import { modalType } from '@/utils/helpers/types';

// modals
import ImportExportSummaryModal from '@/components/Modals/ImportExportSummary';
import ManualOrderModal from '@/components/Modals/Order/ManualOrder';
import EditOrderModal from '@/components/Modals/Order/EditOrder';
import CancelOrderModal from '@/components/Modals/Order/CancelOrder';
import RestoreOrderModal from '@/components/Modals/Order/RestoreOrder';
import ImportOrderModal from '@/components/Modals/Order/ImportOrder';
import ImportOrderShipmentModal from '@/components/Modals/Order/ImportOrderShipment';
import ExportOrderModal from '@/components/Modals/Order/ExportOrder';
import ExportQueueOrderModal from '@/components/Modals/Order/ExportQueueOrder';
import OrderImportSettingsModal from '@/components/Modals/Order/OrderImportSettings';
import AddImportSettingsModal from '@/components/Modals/Order/AddImportSettings';
import AddExportSettingsModal from '@/components/Modals/Order/AddExportSettings';
import ShipmentImportMappingsModal from '@/components/Modals/Order/ShipmentImportMappings';
import NewShipmentImportMappingsModal from '@/components/Modals/Order/NewShipmentImportMappings';
import OrderExportSettingsModal from '@/components/Modals/Order/OrderExportSettings';

import moment from 'moment';
import SelectOrderColumnsModal from '@/components/Modals/Order/SelectOrderColumns';
import { defaultShowColumns } from '@/data/orderData';
import SplitOrder from '@/components/Modals/Order/SplitOrder';
import { uuidv4 } from '@antv/xflow-core';
import DuplicateOrderModal from '@/components/Modals/Order/DuplicateOrder';

const { confirm } = Modal;

const defaultOrderTableColumns = [
  {
    title: 'Order Number',
    dataIndex: 'order_number',
    key: 'order_number',
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

const OrderManagement: React.FC = () => {
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const { orderList, setOrderList, setEditableOrder, setSelectedOrders } = useModel('order');
  const { userList, getUsers } = useModel('user');
  const { customFields } = useModel('customOrderFields');
  const { selectedOrderStatus } = useModel('orderStatus');
  const { initialState } = useModel('@@initialState');
  const [modalOpen, setModal] = useState('');
  const [showChooseColumn, setShowChooseColumn] = useState(true);
  const [showColumns, setShowColumns] = useState(defaultShowColumns);

  const handleProductEdit = (item: any) => {
    setEditableOrder(item);
    setModal(modalType.EditOrder);
  };

  useEffect(() => {
    getUsers({ permission: 'orders' });
  }, [getUsers]);

  const handleSelectedRows = (_selectedRows = []) => {
    setSelectedRows(_selectedRows);
    const _selectedOrders = orderList.filter((item) => _selectedRows.includes(item.id));
    setSelectedOrders(_selectedOrders);
    setEditableOrder(_selectedOrders[0]);
  };

  const {
    isDragging: isBottomDragging,
    position: bottomH,
    splitterProps: bottomDragBarProps,
  } = useResizable({
    axis: 'y',
    initial: 200,
    min: 50,
    reverse: true,
  });

  const {
    isDragging: isLeftDragging,
    position: LeftW,
    splitterProps: leftDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 220,
    min: 50,
  });

  const {
    isDragging: isRightDragging,
    position: RightW,
    splitterProps: rightDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 280,
    min: 50,
    reverse: true,
  });

  const actionButtons: IOButton[] = [
    {
      type: 'primary',
      onClick: () => setModal(modalType.ExportQueueOrder),
      btnText: 'Queue',
      hidden: [6, 7].includes(selectedOrderStatus?.status.id),
    },
    {
      type: 'primary',
      onClick: () => console.log('Ship'),
      btnText: 'Ship',
      hidden: [6, 7].includes(selectedOrderStatus?.status.id),
    },
    // {
    //   type: 'primary',
    //   onClick: () => console.log('Canceled'),
    //   btnText: 'Cancel',
    //   hidden: ![3, 6, 7].includes(selectedOrderStatus?.status.id),
    // },
    {
      type: 'primary',
      btnText: (
        <Dropdown
          menu={{
            items: [
              {
                key: 'pick_list',
                label: (
                  <span>
                    <FileOutlined /> Pick List(s)
                  </span>
                ),
              },
              {
                key: 'global_picK_list',
                label: (
                  <span>
                    <FileOutlined /> Global Pick List
                  </span>
                ),
              },
              {
                key: 'packing_slip',
                label: (
                  <span>
                    <FileTextOutlined /> Packing Slip(s)
                  </span>
                ),
              },
              {
                key: 'item_label',
                label: (
                  <span>
                    {' '}
                    <FileOutlined /> Item Label(s)
                  </span>
                ),
              },
              {
                key: 'item_label_roll',
                label: (
                  <span>
                    <FileOutlined /> Item Label(s) Roll
                  </span>
                ),
              },
              {
                key: 'label',
                label: (
                  <span>
                    <FileOutlined /> Label(s)
                  </span>
                ),
              },
              {
                key: 'custom_form',
                label: (
                  <span>
                    <FileOutlined /> Custom Form(s)
                  </span>
                ),
              },
            ],
          }}
        >
          <Button type="primary" style={{ marginRight: '5px' }}>
            Print <DownOutlined />
          </Button>
        </Dropdown>
      ),
      hidden: [6, 7].includes(selectedOrderStatus?.status.id),
    },
    {
      type: 'primary',
      onClick: () => console.log('Label'),
      btnText: (
        <Dropdown
          menu={{
            items: [],
          }}
        >
          <Button type="primary" style={{ marginRight: '5px', marginTop: '5px' }}>
            Label <DownOutlined />
          </Button>
        </Dropdown>
      ),
    },
    {
      type: 'primary',
      btnText: (
        <Dropdown
          menu={{
            items: [
              {
                key: 'hold_until',
                label: (
                  <span>
                    <FieldTimeOutlined /> Hold Until..
                  </span>
                ),
              },
              // In Awaiting Shipment or Pending Fulfillment
              [3, 4].includes(selectedOrderStatus?.status.id) && selectedRows.length > 0
                ? {
                    key: 'cancel_order',
                    label: (
                      <span onClick={() => setModal(modalType.CancelOrder)}>
                        <StopOutlined /> Cancel Order
                      </span>
                    ),
                  }
                : null,
              {
                key: 'assign_to',
                label: (
                  <span>
                    <UserOutlined /> Assign To
                  </span>
                ),
                children:
                  userList.length > 1 &&
                  userList
                    .filter((user) => user.id !== initialState?.currentUser?.user.id)
                    .map((user) => ({
                      key: user.id,
                      label: <span onClick={showConfirm}>{user.full_name}</span>,
                    })),
                disabled: selectedRows.length < 1,
              },
              {
                key: 'split_order',
                label: (
                  <span onClick={() => setModal(modalType.SplitOrder)}>
                    <MinusCircleOutlined /> SplitOrder{' '}
                  </span>
                ),
                disabled: selectedRows.length !== 1,
              },
              {
                key: 'mark_shipped',
                label: (
                  <span>
                    <CheckCircleOutlined /> ${`Mark 'Shipped'`}
                  </span>
                ),
              },
              {
                key: 'duplicate_order',
                label: (
                  <span onClick={() => setModal(modalType.DuplicateOrder)}>
                    <PlusCircleOutlined /> Duplicate Order
                  </span>
                ),
              },
              // {
              //   key: '7',
              //   label: (
              //     <span>
              //       <RedoOutlined /> Restore
              //     </span>
              //   ),
              // },
            ],
          }}
        >
          <Button type="primary" style={{ marginRight: '5px' }}>
            Edit <DownOutlined />
          </Button>
        </Dropdown>
      ),
      hidden: [7].includes(selectedOrderStatus?.status.id),
    },
    {
      type: 'primary',
      onClick: () => setModal(modalType.RestoreOrder),
      btnText: 'Restore',
      hidden:
        ![6, 7].includes(selectedOrderStatus?.status.id) ||
        ([6, 7].includes(selectedOrderStatus?.status.id) && selectedRows.length < 1),
    },
    {
      type: 'primary',
      onClick: () => console.log('Merge'),
      btnText: 'Merge',
      hidden: [6, 7].includes(selectedOrderStatus?.status.id),
    },
    {
      type: 'primary',
      btnText: (
        <Dropdown
          menu={{
            items: [
              {
                key: '3',
                label: (
                  <span
                    onClick={() => {
                      setModal(modalType.ManualOrder);
                    }}
                  >
                    <GlobalOutlined /> Manual Orders
                  </span>
                ),
              },
            ],
          }}
        >
          <Button type="primary" style={{ marginRight: '5px' }}>
            New Order <DownOutlined />
          </Button>
        </Dropdown>
      ),
    },
    {
      type: 'primary',
      onClick: () => console.log('Import/Export'),
      btnText: (
        <Dropdown
          menu={{
            items: [
              {
                key: '1',
                label: (
                  <span onClick={() => setModal(modalType.ImportOrder)}>
                    <VerticalAlignTopOutlined /> Import Orders
                  </span>
                ),
              },
              {
                key: '2',
                label: (
                  <span onClick={() => setModal(modalType.ImportOrderShipments)}>
                    <VerticalAlignTopOutlined /> Import Shipments
                  </span>
                ),
              },
              selectedRows.length > 0
                ? {
                    type: 'divider',
                  }
                : null,
              selectedRows.length > 0
                ? {
                    key: '4',
                    label: (
                      <span onClick={() => setModal(modalType.ExportOrder)}>
                        <VerticalAlignBottomOutlined /> Export Selected Orders
                      </span>
                    ),
                  }
                : null,
            ],
          }}
        >
          <Button type="primary" style={{ marginRight: '5px' }}>
            Import/Export <DownOutlined />
          </Button>
        </Dropdown>
      ),
    },
  ];

  //order list table columns
  const orderTableColumns = useMemo(() => {
    const staticColumns = defaultOrderTableColumns.filter((item) =>
      showColumns.includes(item.title),
    );

    const customColumns = customFields
      .filter((customField) => customField.show_on_grid)
      .map((customField) => ({
        title: customField.name,
        key: customField.name,
        render: () => <>{customField.value}</>,
      }));

    return [...staticColumns, ...customColumns];
  }, [showColumns, customFields]);

  // prepare order list table rows
  const orderTableRows = orderList.map((item) => {
    return {
      ...item,
      key: item.id,
      channel: (
        <span>
          <img src={item.sales_channel.icon} />
          <span>{item.sales_channel.name}</span>
        </span>
      ),
      orderTotal: `$${item.orderTotal}`,
      order_number: (
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleProductEdit(item);
          }}
        >
          <FileOutlined />{' '}
          <span style={{ textDecoration: 'underline', cursor: 'pointer', color: '#5F5FFF' }}>
            {item.order_number}
          </span>
        </div>
      ),
      notes: (
        <div style={{ display: 'flex', gap: '0.2rem', justifyContent: 'space-around' }}>
          <FormOutlined style={{ color: '#5F5FFF', cursor: 'pointer' }} />
          <MessageOutlined style={{ color: '#5F5FFF', cursor: 'pointer' }} />
          <MessageOutlined
            style={{ color: '#5F5FFF', cursor: 'pointer', transform: 'scaleX(-1)' }}
          />
        </div>
      ),
      order_date: moment(item.order_date).format('Y-M-D'),
      order_paid: moment(item.order_paid).format('Y-M-D'),
      age: (
        <span
          style={{
            color: item.age?.search('d') < 0 ? 'green' : 'red',
          }}
        >
          {item.age}
        </span>
      ),
      recipient: (
        <div>
          <FileFilled style={{ color: '#AD5A7D', marginRight: '3px' }} />
          {item.recipient.name}
        </div>
      ),
    };
  });

  return (
    <PageContainer title={false} className={'flex flex-column overflow-hidden'}>
      <div className={'flex grow'}>
        <div
          className={cn('shrink-0 contents', isLeftDragging && 'dragging')}
          style={{ width: LeftW }}
        >
          <div className="w-full">
            <SidePanel />
          </div>
        </div>
        <SampleSplitter isDragging={isLeftDragging} {...leftDragBarProps} />
        <div className="w-full flex flex-column h-screen">
          <div className="horizon-content">
            <Card size="small" className="horizon-card">
              <Row style={{ marginBottom: '0.5rem' }}>
                <Col span={12}>
                  <p
                    style={{
                      fontSize: '1rem',
                      textTransform: 'uppercase',
                      fontWeight: '700',
                      color: '#A2A2A2',
                    }}
                  >
                    ORDERS :: {selectedOrderStatus?.status.name}{' '}
                  </p>
                </Col>
                <Col span={12} style={{ textAlign: 'right' }}>
                  {selectedOrderStatus?.status.id === 3 && selectedOrderStatus?.filter && (
                    <Button type="primary" style={{ paddingTop: '0', paddingBottom: '0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>
                          {' '}
                          <DownOutlined /> {selectedOrderStatus?.filter.name} QUEUE
                        </span>{' '}
                        <Badge count={3} color="#5F5FFF" />
                      </div>
                    </Button>
                  )}
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  {actionButtons.map((btn, index) => (
                    <OButton key={index} {...btn} />
                  ))}
                </Col>
              </Row>
              <br />
              <Row>
                <Col span={24} style={{ position: 'relative' }}>
                  <OTable
                    type="checkbox"
                    columns={orderTableColumns}
                    rows={orderTableRows}
                    selectedRows={selectedRows}
                    setSelectedRows={handleSelectedRows}
                  />
                  <div
                    className="choose-column"
                    style={{ position: 'absolute', bottom: 20 }}
                    hidden={!showChooseColumn}
                  >
                    <Button type="primary" icon={<RetweetOutlined style={{ color: 'gray' }} />} />
                    <Button
                      type="primary"
                      icon={<BorderHorizontalOutlined style={{ color: 'gray' }} />}
                      onClick={() => setModal(modalType.SelectOrderColumns)}
                    />
                    <Button
                      type="primary"
                      icon={<CloseOutlined style={{ color: 'gray' }} />}
                      onClick={() => setShowChooseColumn(false)}
                    />
                  </div>
                </Col>
              </Row>
            </Card>
          </div>
          <SampleSplitter
            dir={'horizontal'}
            isDragging={isBottomDragging}
            {...bottomDragBarProps}
          />
          <div
            className={cn('shrink-0 contents', isBottomDragging && 'dragging')}
            style={{ height: bottomH }}
          >
            <div className="w-full">{selectedRows.length == 1 && <OrderItems />}</div>
          </div>
        </div>

        <SampleSplitter isDragging={isRightDragging} {...rightDragBarProps} />
        <div
          className={cn('shrink-0 contents', isLeftDragging && 'dragging')}
          style={{ width: RightW }}
        >
          <div className="w-full">
            {' '}
            <RightPanel />
          </div>
        </div>
      </div>

      <ImportExportSummaryModal
        title="External Shipment Import"
        info="TEST Shipment Import Report"
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
        onSave={() => setModal(modalType.ImportOrder)}
        onClose={() => setModal(modalType.ImportOrder)}
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

      <SplitOrder
        isOpen={modalOpen === modalType.SplitOrder}
        onSave={(item) => {
          const newOrderList = [];
          orderList.forEach((order) =>
            order.id === item.id
              ? newOrderList.push(order, { ...item, id: uuidv4() })
              : newOrderList.push(order),
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
    </PageContainer>
  );
};

export default OrderManagement;
