import type { IOButton } from '@/components/Globals/OButton';
import { OButton } from '@/components/Globals/OButton';
import { OTable } from '@/components/Globals/OTable';
import AddNewPOModal from '@/components/Modals/PurchaseOrder/AddNewPOModal';
import ExportPOModal from '@/components/Modals/PurchaseOrder/ExportPO';
import ManageItemsModal from '@/components/Modals/ManageItemsModal';
import VendorModal from '@/components/Modals/PurchaseOrder/VendorModal';
import { Table1DemoColumns } from '@/data';
import { cn, SampleSplitter } from '@/utils/components/SampleSplitter';
import { modalType } from '@/utils/helpers/types';
import { DownOutlined, FileOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Dropdown, Form, message, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { useResizable } from 'react-resizable-layout';
import { useModel } from 'umi';
import TabComponent from './components/Bottoms/tabcomponent';
import SidePanel from './components/SidePanel/sidePanel';

interface IManagePurchaseOrdersModal {
  title: string;
  submitBtnText: string;
  description: string;
  confirmMessage: string;
  onClose: () => void;
  onSave: () => void;
}

const vendorModalLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const CustomerManagement: React.FC = () => {
  const {
    poList,
    initialSelectedPO,
    handleSelectedPOChange,
    getPoTotalCost,
    getTotalUnitQuantity,
    setSelectedPO,
    setPoList,
  } = useModel('po');
  const { initialMilestonesList } = useModel('milestones');
  const { initialShippingTermList } = useModel('shippingTerm');
  const { selectedPOStatus } = useModel('poStatus');

  const [vendorModal, setVendorModal] = useState('');
  const [newPOModal, setNewPOModal] = useState('');
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [manageOrdersModalData, setManageOrdersModalData] =
    useState<IManagePurchaseOrdersModal>(null);

  const [form] = Form.useForm();
  const [modalOpen, setModal] = useState('');

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

  const onVendorModalNext = () => {
    setVendorModal(modalType.Close);
    if (form.getFieldValue('vendor')) {
      setNewPOModal(modalType.New);
    }
  };

  const onVendorModalCancel = () => {
    setVendorModal(modalType.Close);
  };

  const onVendorChange = (value: string) => {
    handleSelectedPOChange('fromVendor', value);
    // Need to use the local storage's vendors
    // const itemValue = initialState?.initialData?.vendors?.find((item) => item.id == value)?.name;
    form.setFieldsValue({
      vendor: value,
    });
  };

  const handleNewPOModalOpen = () => {
    initialSelectedPO();
    setVendorModal(modalType.New);
  };

  const actionButtons: IOButton[] = [
    {
      onClick: () => console.log('Vendor'),
      btnText: (
        <Dropdown
          menu={{
            items: [
              {
                key: 'pro_forma',
                label: <span>Pro Forma</span>,
                icon: <FileOutlined />,
              },
            ],
          }}
          disabled={selectedRows.length === 0}
        >
          <Button size="small">
            <Space>
              Print <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      ),
    },
    {
      onClick: () => console.log('Authorized'),
      btnText: 'Authorize',
      disabled: selectedRows.length === 0,
      hidden: selectedPOStatus == null || !['1'].includes(selectedPOStatus.poStatus),
      // Only in Awaiting Authorization.
    },
    {
      onClick: () => {
        setModal(modalType.ManagePurchaseOrders);
        setManageOrdersModalData({
          title: 'Restore P.O.(S)',
          submitBtnText: 'Yes - Restore P.O.',
          description: 'This will restore and send the selected P.O.(s) back to pending delivery.',
          confirmMessage: 'Are you sure you want to proceed?',
          onSave: () => {
            setModal(modalType.Close);
            message.success('P.O.(s) moved to Pending Delivery status');
          },
          onClose: () => setModal(modalType.Close),
        });
      },
      btnText: 'Restore P.O.',
      disabled: selectedRows.length === 0,
      hidden: selectedPOStatus == null || !['9'].includes(selectedPOStatus.poStatus),
      // Only in Canceled status.
    },
    {
      onClick: () => {
        message.success('The selected P.O.(s) have been re-sent to their vendors.');
      },
      btnText: 'Re-Send',
      disabled: selectedRows.length === 0,
      hidden: selectedPOStatus == null || !['2', '3', '4', '5'].includes(selectedPOStatus.poStatus),
      // Only in Awaiting Confirm ation, Awaiting Re-Authorization, Pending Delivery, or Partially Delivered
    },
    {
      onClick: () => setModal(modalType.ManagePurchaseOrders),
      btnText: 'Cancel',
      disabled: selectedRows.length === 0,
      hidden: selectedPOStatus == null || !['1', '2', '3'].includes(selectedPOStatus.poStatus),
      // Only in Awaiting Authorization, Awaiting Confirmation, or Awaiting Re-Authorization status.
    },
    {
      onClick: () => setModal(modalType.ManagePurchaseOrders),
      btnText: 'Confirm',
      disabled: selectedRows.length === 0,
      hidden: selectedPOStatus == null || !['2'].includes(selectedPOStatus.poStatus),
      // Only in Awaiting Confirmation
    },
    {
      onClick: () => {
        setPoList((prev) => prev.filter((item) => !selectedRows.includes(item.key)));
        // setPoList(
        //   poList.map((item) =>
        //     selectedRows.includes(item.key)
        //       ? {
        //           ...item,
        //           po_status: {
        //             code: '6',
        //             id: 6,
        //             name: 'Fullfilled',
        //           },
        //         }
        //       : item,
        //   ),
        // );
        setSelectedRows([]);
        message.success('P.O.(s) moved to Fulfilled status.');
      },
      btnText: 'Receive',
      disabled: selectedRows.length === 0,
      hidden: selectedPOStatus == null || !['4', '5'].includes(selectedPOStatus.poStatus),
      // Only in Pending Delivery or Partially Delivered
    },
    {
      onClick: () => {
        setModal(modalType.ManagePurchaseOrders);
        setManageOrdersModalData({
          title: 'Void P.O.(S)',
          submitBtnText: 'Yes - Void P.O.',
          description: 'This will all pending items and close the seleted P.O.(s).',
          confirmMessage: 'Are you sure you want to proceed?',
          onSave: () => {
            setModal(modalType.Close);
            message.success('P.O.(s) moved to Voided status');
          },
          onClose: () => setModal(modalType.Close),
        });
      },
      btnText: 'Void',
      disabled: selectedRows.length === 0,
      hidden: selectedPOStatus == null || !['4', '5'].includes(selectedPOStatus.poStatus),
      // Only in Pending Delivery or Partially Delivered
    },
    {
      onClick: handleNewPOModalOpen,
      btnText: 'New P.O.',
    },
    {
      onClick: () => console.log('Export Purchase Orders'),
      btnText: (
        <Dropdown
          menu={{
            items: [
              {
                key: 'pick_list',
                label: <span>Export Purchase Orders</span>,
                icon: <VerticalAlignBottomOutlined />,
                onClick: () => setModal(modalType.ExportPOSettings),
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

  // get selected po product items
  const selectedFullPO = poList.find((poItem) => poItem.key === selectedRows[0]);
  const POProductItems = selectedFullPO ? selectedFullPO.poItems : [];

  // prepare po list table rows
  const poListTableRows = poList.map((poItem) => ({
    ...poItem,
    totalCost: getPoTotalCost(poItem),
    totalUnits: getTotalUnitQuantity(poItem),
  }));

  useEffect(() => {
    initialMilestonesList();
    initialShippingTermList();
  }, [initialMilestonesList, initialShippingTermList]);

  useEffect(() => {
    if (selectedRows && selectedRows[0]) {
      const _selectedPo = poList.find((poItem) => poItem.key === selectedRows[0]);
      setSelectedPO(_selectedPo);
    }
  }, [selectedRows, poList, setSelectedPO]);

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
            <Card style={{ width: '100%' }}>
              <p className="page-title">
                Purchase Orders :: {selectedPOStatus ? selectedPOStatus.poStatus : ''}
              </p>
              <Space size={4} style={{ marginBottom: 10 }}>
                {actionButtons.map((btn, index) => (
                  <OButton key={index} {...btn} />
                ))}
              </Space>
              <OTable
                columns={Table1DemoColumns}
                rows={poListTableRows}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
              />
            </Card>
          </div>
          <SampleSplitter
            dir={'horizontal'}
            isDragging={isBottomDragging}
            {...bottomDragBarProps}
          />
          <div
            className={cn('shrink-0 contents bottom-panel', isBottomDragging && 'dragging')}
            style={{ height: bottomH }}
          >
            <div className="w-full">
              {selectedRows.length == 1 && <TabComponent POProductItems={POProductItems} />}
            </div>
          </div>
        </div>
      </div>

      <VendorModal
        vendorModal={vendorModal}
        onVendorModalNext={onVendorModalNext}
        onVendorModalCancel={onVendorModalCancel}
        vendorModalLayout={vendorModalLayout}
        form={form}
        onVendorChange={onVendorChange}
      />

      <AddNewPOModal newPOModal={newPOModal} setNewPOModal={setNewPOModal} />

      <ManageItemsModal
        isOpen={modalOpen === modalType.ManagePurchaseOrders}
        {...manageOrdersModalData}
      />

      <ExportPOModal
        isOpen={modalOpen === modalType.ExportPOSettings}
        onSave={() => setModal(modalType.Close)}
        handleConfigureSettings={(value: any) => setModal(value)}
        onClose={() => setModal(modalType.Close)}
      />
    </PageContainer>
  );
};

export default CustomerManagement;
