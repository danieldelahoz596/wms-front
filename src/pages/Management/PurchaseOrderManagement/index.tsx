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
import { Button, Card, Dropdown, message, Space } from 'antd';
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

const CustomerManagement: React.FC = () => {
  const {
    poList,
    initialSelectedPO,
    getPoTotalCost,
    getTotalUnitQuantity,
    setSelectedPO,
    setPoList,
  } = useModel('po');
  const { initialMilestonesList } = useModel('milestones');
  const { initialShippingTermList } = useModel('shippingTerm');
  const { selectedPOStatus } = useModel('poStatus');

  // const [vendorModal, setVendorModal] = useState('');
  // const [newPOModal, setNewPOModal] = useState('');
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [manageOrdersModalData, setManageOrdersModalData] =
    useState<IManagePurchaseOrdersModal>(null);

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

  // const onVendorModalNext = () => {
  //   setVendorModal(modalType.Close);
  //   if (form.getFieldValue('vendor')) {
  //     setNewPOModal(modalType.New);
  //   }
  // };

  // const onVendorModalCancel = () => {
  //   setVendorModal(modalType.Close);
  // };

  // const onVendorChange = (value: string) => {
  //   handleSelectedPOChange('fromVendor', value);
  //   // Need to use the local storage's vendors
  //   // const itemValue = initialState?.initialData?.vendors?.find((item) => item.id == value)?.name;
  //   form.setFieldsValue({
  //     vendor: value,
  //   });
  // };

  const handleNewPOModalOpen = () => {
    initialSelectedPO();
    setModal(modalType.New);
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
      btnText: 'Authorize',
      onClick: () => {
        setModal(modalType.ManagePurchaseOrders);
        setManageOrdersModalData({
          title: 'Authorize P.O.(s)',
          submitBtnText: 'Yes - Authorize P.O.',
          description:
            'Authorizing will send the P.O.(s) to the vendor for confirmation. If a P.O. is tied to a Dropship Order, it will move to Pending Delivery status.',
          confirmMessage: 'Are you sure you want to proceed?',
          onSave: () => {
            setModal(modalType.Close);
            message.success(
              <p>
                P.O.(s) moved to <b>Awaiting Confirmation</b> status.
              </p>,
            );
          },
          onClose: () => setModal(modalType.Close),
        });
      },
      disabled: selectedRows.length === 0,
      hidden: selectedPOStatus == null || !['1'].includes(selectedPOStatus.poStatus),
      // Only in Awaiting Authorization.
    },
    {
      btnText: 'Restore P.O.',
      onClick: () => {
        setModal(modalType.ManagePurchaseOrders);
        setManageOrdersModalData({
          title: 'Restore P.O.(s)',
          submitBtnText: 'Yes - Restore P.O.',
          description: 'This will restore and send the selected P.O.(s) back to pending delivery.',
          confirmMessage: 'Are you sure you want to proceed?',
          onSave: () => {
            setModal(modalType.Close);
            message.success(
              <p>
                P.O.(s) moved to <b>Pending Delivery</b> status
              </p>,
            );
          },
          onClose: () => setModal(modalType.Close),
        });
      },
      disabled: selectedRows.length === 0,
      hidden: selectedPOStatus == null || !['9'].includes(selectedPOStatus.poStatus),
      // Only in Canceled status.
    },
    {
      btnText: 'Re-send',
      disabled: selectedRows.length === 0,
      onClick: () => {
        setModal(modalType.ManagePurchaseOrders);
        setManageOrdersModalData({
          title: 'Resend P.O.(s)',
          submitBtnText: 'Yes - Resend P.O.',
          description: 'This will resend the selected P.O.(s) to your vendor partner.',
          confirmMessage: 'Are you sure you want to proceed?',
          onSave: () => {
            setModal(modalType.Close);
            message.success(<p>The selected P.O.(s) have been re-sent to their vendors.</p>);
          },
          onClose: () => setModal(modalType.Close),
        });
      },
      hidden: selectedPOStatus == null || !['2', '3', '4', '5'].includes(selectedPOStatus.poStatus),
      // Only in Awaiting Confirm ation, Awaiting Re-Authorization, Pending Delivery, or Partially Delivered
    },
    {
      btnText: 'Cancel',
      onClick: () => {
        setModal(modalType.ManagePurchaseOrders);
        setManageOrdersModalData({
          title: 'Cancel P.O.(s)',
          submitBtnText: 'Yes - Cancel P.O.',
          description: 'Canceling will prevent the selected P.O.(s) from being issued to vendors.',
          confirmMessage: 'Are you sure you want to proceed?',
          onSave: () => {
            setModal(modalType.Close);
            message.success(
              <p>
                P.O.(s) moved to <b>Canceled</b> status
              </p>,
            );
          },
          onClose: () => setModal(modalType.Close),
        });
      },
      disabled: selectedRows.length === 0,
      hidden: selectedPOStatus == null || !['1', '2', '3'].includes(selectedPOStatus.poStatus),
      // Only in Awaiting Authorization, Awaiting Confirmation, or Awaiting Re-Authorization status.
    },
    {
      btnText: 'Confirm',
      onClick: () => {
        setModal(modalType.ManagePurchaseOrders);
        setManageOrdersModalData({
          title: 'Confirm P.O.(s)',
          submitBtnText: 'Yes - Confirm P.O.',
          description: 'Confirming will effectively issue the selected P.O.(s).',
          confirmMessage: 'Are you sure you want to proceed?',
          onSave: () => {
            setModal(modalType.Close);
            message.success(
              <p>
                P.O.(s) moved to <b>Pending Delivery</b> status
              </p>,
            );
          },
          onClose: () => setModal(modalType.Close),
        });
      },
      disabled: selectedRows.length === 0,
      hidden: selectedPOStatus == null || !['2'].includes(selectedPOStatus.poStatus),
      // Only in Awaiting Confirmation
      // Confirming will effectively issue the selected P.O.(s).
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
      btnText: 'Void',
      onClick: () => {
        setModal(modalType.ManagePurchaseOrders);
        setManageOrdersModalData({
          title: 'Void P.O.(s)',
          submitBtnText: 'Yes - Void P.O.',
          description: 'This will void all pending items and close the seleted P.O.(s).',
          confirmMessage: 'Are you sure you want to proceed?',
          onSave: () => {
            setModal(modalType.Close);
            message.success(
              <p>
                P.O.(s) moved to <b>Voided</b> status.
              </p>,
            );
          },
          onClose: () => setModal(modalType.Close),
        });
      },
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
                disabled: selectedRows.length === 0,
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
    console.log('click');
    setSelectedRows([]);
  }, [selectedPOStatus]);

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
        isOpen={modalOpen === modalType.New}
        onSave={() => {
          setModal(modalType.AddNewPo);
          initialSelectedPO();
        }}
        onClose={() => {}}
      />

      <AddNewPOModal
        isOpen={modalOpen === modalType.AddNewPo}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />

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
