import { OButton } from '@/components/Globals/OButton';
import type { IOButton } from '@/components/Globals/OButton';
import { OTable } from '@/components/Globals/OTable';
import { DownOutlined, FileOutlined, VerticalAlignBottomOutlined } from '@ant-design/icons';
import { FormattedMessage, useModel } from '@umijs/max';
import { Card, Space, Button, message } from 'antd';
import Dropdown from 'antd/es/dropdown';
import { useEffect, useState } from 'react';
import { modalType } from '@/utils/helpers/types';
import NoteEditIcon from '@/utils/icons/noteEdit';
import ChatIcon from '@/utils/icons/chat';
import SelectVendorModal from './Modals/SelectVendor';
import AddNewPOModal from './Modals/AddNewPO';
import ReceivePOModal from './Modals/ReceivePO';
import ManageItemsModal from '@/components/Modals/ManageItems';
import ExportPOModal from './Modals/ExportPO';
import type IVendor from '@/interfaces/IVendor';
import type IWarehouse from '@/interfaces/IWarehouse';
import moment from 'moment';

interface IManagePurchaseOrdersModal {
  title: string;
  cancelBtnText?: string;
  submitBtnText: string;
  description: string;
  confirmMessage: string;
  onClose: () => void;
  onSave: () => void;
}

interface IMainPanel {
  selectedRows: any[];
  setSelectedRows: (value: any) => void;
}

export const TColumns = [
  {
    title: 'Vendor',
    dataIndex: 'vendor',
    key: 'vendor',
    render: (vendor: IVendor) => vendor.name,
  },
  {
    title: 'P.O. Number',
    dataIndex: 'po_number',
    key: 'po_number',
  },
  // {
  //   title: 'Custom P.O. Number',
  //   dataIndex: 'customponumber',
  //   key: 'ponumber',
  // },
  // {
  //   title: 'Created By',
  //   dataIndex: 'createdBy',
  //   key: 'createdBy',
  // },
  // {
  //   title: 'Authorizer',
  //   dataIndex: 'authorizer',
  //   key: 'authorizer',
  // },
  {
    title: 'Notes',
    dataIndex: 'internalNote',
    key: 'internalNote',
    align: 'center',
    render: () => (
      <div style={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
        <NoteEditIcon style={{ fontSize: 16, fill: 'blue' }} />
        <ChatIcon style={{ fontSize: 16, fill: 'blue' }} />
      </div>
    ),
  },
  {
    title: 'Confirm Date',
    dataIndex: 'confirm_by',
    key: 'confirm_by',
  },
  // {
  //   title: 'Date issued',
  //   dataIndex: 'dateIssued',
  //   key: 'dateIssued',
  // },
  {
    title: 'Destination',
    dataIndex: 'destination',
    key: 'destination',
    render: (destination: IWarehouse) => destination.name,
  },
  {
    title: 'Shipping Cost',
    dataIndex: 'shipping_cost',
    key: 'shipping_cost',
  },
  {
    title: 'Total Cost',
    dataIndex: 'total_cost',
    key: 'total_cost',
  },
  // {
  //   title: 'Total units',
  //   dataIndex: 'totalUnits',
  //   key: 'totalUnits',
  // },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
];

const MainPanel: React.FC<IMainPanel> = ({ selectedRows, setSelectedRows }) => {
  const { poList, setSelectedPO, selectedPO, updatePOStatus, setPoItems, setOtherCosts } = useModel('po');
  const { selectedPOStatus, poStatusList } = useModel('poStatus');

  const [manageOrdersModalData, setManageOrdersModalData] = useState<IManagePurchaseOrdersModal>(null);

  const [modalOpen, setModal] = useState('');

  const handleNewPOModalOpen = () => {
    setSelectedPO(null);
    setSelectedRows([]);
    setPoItems([]);
    setOtherCosts([]);
    setModal(modalType.New);
  };

  const actionButtons: IOButton[] = [
    {
      key: 'print',
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
      key: 'authorize',
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
            updatePOStatus(2).then(() => {
              setModal(modalType.Close);
              message.success(
                <p>
                  P.O.(s) moved to <b>Awaiting Confirmation</b> status.
                </p>,
              );
            });
          },
          onClose: () => setModal(modalType.Close),
        });
      },
      disabled: selectedRows.length === 0,
      hidden: selectedPOStatus == null || ['2'].includes(selectedPOStatus),
      // Only in Awaiting Authorization.
    },
    {
      key: 'restore',
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
      hidden: selectedPOStatus == null || !['9'].includes(selectedPOStatus),
      // Only in Canceled status.
    },
    {
      key: 'resend',
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
      hidden: selectedPOStatus == null || !['2', '3', '4', '5'].includes(selectedPOStatus),
      // Only in Awaiting Confirm ation, Awaiting Re-Authorization, Pending Delivery, or Partially Delivered
    },
    {
      key: 'cancel',
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
      hidden: selectedPOStatus == null || !['1', '2', '3'].includes(selectedPOStatus),
      // Only in Awaiting Authorization, Awaiting Confirmation, or Awaiting Re-Authorization status.
    },
    {
      key: 'confirm',
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
      hidden: selectedPOStatus == null || !['2'].includes(selectedPOStatus),
      // Only in Awaiting Confirmation
      // Confirming will effectively issue the selected P.O.(s).
    },
    {
      key: 'receive',
      onClick: () => {
        // setPoList((prev) => prev.filter((item) => !selectedRows.includes(item.key)));
        // setSelectedRows([]);
        // message.success('P.O.(s) moved to Fulfilled status.');
        setModal(modalType.Receive);
      },
      btnText: 'Receive',
      disabled: selectedRows.length !== 1,
      hidden: selectedPOStatus == null || !['4', '5'].includes(selectedPOStatus),
      // Only in Pending Delivery or Partially Delivered
    },
    {
      key: 'void',
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
      hidden: selectedPOStatus == null || !['4', '5'].includes(selectedPOStatus),
      // Only in Pending Delivery or Partially Delivered
    },
    {
      key: 'new',
      onClick: handleNewPOModalOpen,
      btnText: 'New P.O.',
    },
    {
      key: 'import',
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

  // prepare po list table rows
  const poListTableRows = poList.map((poItem) => ({
    ...poItem,
    key: poItem.id,
    vendor: poItem.vendor,
    po_number: poItem.order_number,
    destination: poItem.destination,
    total_cost: poItem.total_cost,
    shipping_cost: poItem.shipping_cost,
    confirm_by: poItem.confirm_by && moment(poItem.confirm_by).format('YYYY-MM-DD'),
    status: poItem.status.name,
  }));

  return (
    <>
      <div className="main-panel">
        <div className="title-row">
          <h1 className="page-title">
            <FormattedMessage id="pages.purchasing.mainpanel.title" />{' '}
            {selectedPOStatus ? poStatusList.find((item) => item.po_status.id == selectedPOStatus)?.po_status.name : ''}
          </h1>
        </div>
        <Card className="content-box">
          <Space size={HORIZONTAL_SPACE_SIZE} className="button-row">
            {actionButtons.map((btn) => (
              <OButton key={btn.key} {...btn} />
            ))}
          </Space>
          <OTable columns={TColumns} rows={poListTableRows} selectedRows={selectedRows} setSelectedRows={setSelectedRows} />
        </Card>
      </div>

      <SelectVendorModal
        isOpen={modalOpen === modalType.New}
        onSave={() => {
          setModal(modalType.AddNewPo);
        }}
        onClose={() => {
          setModal(modalType.Cancel);
        }}
      />

      <AddNewPOModal
        isOpen={modalOpen === modalType.AddNewPo}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />

      <ReceivePOModal
        isOpen={modalOpen === modalType.Receive}
        item={selectedPO}
        onSave={() => {
          setModal(modalType.ManagePurchaseOrders);
          setManageOrdersModalData({
            title: 'P.O.Status Change',
            cancelBtnText: 'OK',
            submitBtnText: '',
            description: 'P.O.(s) moved to <b>Fulfilled</b> status.',
            confirmMessage: 'Press OK to proceed.',
            onSave: () => {
              setModal(modalType.Close);
            },
            onClose: () => setModal(modalType.Close),
          });
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <ManageItemsModal isOpen={modalOpen === modalType.ManagePurchaseOrders} {...manageOrdersModalData} />

      <ExportPOModal
        isOpen={modalOpen === modalType.ExportPOSettings}
        onSave={() => setModal(modalType.Close)}
        handleConfigureSettings={(value: any) => setModal(value)}
        onClose={() => setModal(modalType.Close)}
      />
    </>
  );
};

export default MainPanel;
