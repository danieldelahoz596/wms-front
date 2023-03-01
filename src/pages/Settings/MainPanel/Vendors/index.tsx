import { OButton } from '@/components/Globals/OButton';
import type IVendors from '@/interfaces/IVendors';
import { cn, SampleSplitter } from '@/components/Globals/SampleSplitter';
import { modalType } from '@/utils/helpers/types';
import ManufacturerIcon from '@/utils/icons/manufacturer';
import TrainIcon from '@/utils/icons/train';
import { FormattedMessage, useModel } from '@umijs/max';
import { Card, Input, Space, Table } from 'antd';
import qs from 'qs';
import { useEffect, useMemo, useState } from 'react';
import { useResizable } from 'react-resizable-layout';
// import HistoryModal from './components/Modals/History';
import HistoryModal from '@/components/History';
import VendorModal from './components/Modals/Vendor';
import RightPanel from './components/RightPanel';

const { Search } = Input;

const TColumns = [
  {
    title: <FormattedMessage id="component.table.column.vendor" />,
    dataIndex: 'name',
    key: 'name',
    render: (name: string) => name.toUpperCase(),
  },
  {
    title: <FormattedMessage id="component.table.column.services" />,
    key: 'services',
    render: (_, record) => (
      <div style={{ display: 'flex', gap: '0.1rem', justifyContent: 'center', alignItems: 'center' }}>
        {record.is_supplier ? <TrainIcon style={{ fontSize: 15 }} /> : ''}
        {record.is_manufacturer ? <ManufacturerIcon style={{ fontSize: 15 }} /> : ''}
      </div>
    ),
  },
  {
    title: <FormattedMessage id="component.table.column.status" />,
    dataIndex: 'status',
    key: 'status',
    render: (status) => (status ? 'ACTIVE' : 'INACTIVE'),
  },
  {
    title: <FormattedMessage id="component.table.column.openPos" />,
    dataIndex: 'open_pos',
    key: 'openPos',
  },
  {
    title: <FormattedMessage id="component.table.column.pendingUnits" />,
    dataIndex: 'pending_units',
    key: 'pendingUnits',
  },
  {
    title: <FormattedMessage id="component.table.column.pendingValue" />,
    dataIndex: 'pending_value',
    key: 'pendingValue',
  },
];

const THistoryColumns = [
  {
    title: <FormattedMessage id="component.table.column.editTime" />,
    dataIndex: 'time',
    key: 'editTime',
  },
  {
    title: <FormattedMessage id="component.table.column.vendor" />,
    dataIndex: 'vendor',
    key: 'vendor',
  },
  {
    title: <FormattedMessage id="component.table.column.changedValues" />,
    dataIndex: 'value',
    key: 'changedValues',
  },
];

export default function () {
  const [modalOpen, setModal] = useState('');
  const {
    vendorList,
    selectedVendor,
    vendorHistory,
    showActive,
    createVendor,
    updateVendor,
    getVendor,
    getVendorList,
    setSelectedVendor,
    setShowActive,
  } = useModel('vendor');
  const [searchText, setSearchText] = useState('');

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

  const vendorListRows = useMemo(
    () =>
      vendorList.map((_item) => ({
        key: _item.id,
        ..._item,
      })),
    [vendorList],
  );

  const vendorHistoryRows = useMemo(() => vendorHistory.map((_item) => ({ ..._item, key: _item.id })), [vendorHistory]);

  useEffect(() => {
    setSearchText('');
    getVendorList();
  }, [showActive, getVendorList]);

  const handleSearch = (value) => {
    const queryString = qs.stringify({
      name: value,
    });

    getVendorList(queryString);
  };

  return (
    <>
      <div className="title-row">
        <h1 className="page-title">Vendors</h1>
      </div>
      <Card className="content-box">
        <Space size={HORIZONTAL_SPACE_SIZE} className="button-row">
          <Search
            placeholder="Search vendors by name..."
            allowClear
            onSearch={(value) => handleSearch(value)}
            onChange={(event) => setSearchText(event.target.value)}
            value={searchText}
            size="small"
            style={{ width: 200 }}
          />
          <OButton
            btnText={<FormattedMessage id="component.button.newVendor" />}
            onClick={() => {
              setModal(modalType.New);
              setSelectedVendor(null);
            }}
          />
          <OButton
            btnText={
              showActive ? (
                <FormattedMessage id="component.button.showActive" />
              ) : (
                <FormattedMessage id="component.button.showInactive" />
              )
            }
            onClick={() => {
              setShowActive((prev) => !prev);
              setSelectedVendor(null);
            }}
          />
        </Space>
        <Table
          columns={TColumns}
          dataSource={vendorListRows}
          onRow={(record) => {
            return {
              onClick: () => {
                if (record.id === selectedVendor?.id) setSelectedVendor(null);
                else getVendor(record.id);
              }, // click row
            };
          }}
          rowClassName={(record) => (record.id === selectedVendor?.id ? `ant-table-row-selected` : '')}
        />
      </Card>

      <SampleSplitter isDragging={isRightDragging} {...rightDragBarProps} />

      <div className={cn('shrink-0 contents right-panel', isRightDragging && 'dragging')} style={{ width: RightW }}>
        <div className="w-full">
          <RightPanel setModal={setModal} />
        </div>
      </div>

      {/* Modals */}
      <VendorModal
        isOpen={modalOpen === modalType.New || modalOpen === modalType.Edit}
        onSave={(values: IVendors) => {
          if (modalOpen === modalType.New) {
            createVendor(values);
            getVendorList();
          } else if (modalOpen === modalType.Edit) {
            updateVendor({ id: selectedVendor.id, ...values });
            setSelectedVendor(null);
          }
          setModal(modalType.Close);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      {/* <HistoryModal
        isOpen={modalOpen === modalType.History}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      /> */}

      <HistoryModal
        isOpen={modalOpen === modalType.History}
        TColumns={THistoryColumns}
        TRows={vendorHistoryRows}
        title={<FormattedMessage id="pages.settings.vendors.history.title" />}
        onClose={() => setModal(modalType.Close)}
      />
    </>
  );
}
