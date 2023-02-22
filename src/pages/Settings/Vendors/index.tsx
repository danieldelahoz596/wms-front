import { useEffect, useMemo, useState } from 'react';
import { OButton } from '@/components/Globals/OButton';
import { cn, SampleSplitter } from '@/utils/components/SampleSplitter';
import { modalType } from '@/utils/helpers/types';
import ManufacturerIcon from '@/utils/icons/manufacturer';
import TrainIcon from '@/utils/icons/train';
import { useModel } from '@umijs/max';
import { Card, Input, Space, Table } from 'antd';
import qs from 'qs';
import { useResizable } from 'react-resizable-layout';
import EditVendorModal from './components/Modals/EditVendor';
import HistoryModal from './components/Modals/History';
import NewVendorModal from './components/Modals/NewVendor';
import RightPanel from './components/RightPanel';

const { Search } = Input;

const TColumns = [
  {
    title: 'Vendor',
    dataIndex: 'name',
    key: 'name',
    render: (name: string) => <div style={{ width: '10rem' }}>{name.toUpperCase()}</div>,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'Phone 1',
    dataIndex: 'phone1',
    key: 'phone1',
  },
  {
    title: 'Phone 2',
    dataIndex: 'phone2',
    key: 'phone2',
  },
  {
    title: 'Services',
    key: 'services',
    render: (_, record) => (
      <div style={{ display: 'flex', gap: '0.2rem', justifyContent: 'center', alignItems: 'center' }}>
        {record.is_supplier ? <TrainIcon style={{ fontSize: 20 }} /> : ''}
        {record.is_manufacturer ? <ManufacturerIcon style={{ fontSize: 20 }} /> : ''}
      </div>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (status ? 'ACTIVE' : 'INACTIVE'),
  },
  {
    title: "Open P.O.'s",
    dataIndex: 'open_pos',
    key: 'openPos',
  },
  {
    title: 'Pending Units',
    dataIndex: 'pending_units',
    key: 'pendingUnits',
  },
  {
    title: 'Pending Value',
    dataIndex: 'pending_value',
    key: 'pendingValue',
  },
];

export default function () {
  const [modalOpen, setModal] = useState('');
  const { vendorList, selectedVendor, showActive, getVendorList, setSelectedVendor, setEditableVendor, setShowActive } =
    useModel('vendor');
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
      <div className="w-full flex flex-column h-screen">
        <Card>
          <Space size={4} className="mb-5">
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
              btnText="New Vendor"
              onClick={() => {
                setModal(modalType.New);
              }}
            />
            <OButton
              btnText={showActive ? 'Show Active' : 'Show Inactive'}
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
                  else setSelectedVendor(record);
                }, // click row
              };
            }}
            rowClassName={(record) => (record.id === selectedVendor?.id ? `ant-table-row-selected` : '')}
          />
        </Card>
      </div>

      <SampleSplitter isDragging={isRightDragging} {...rightDragBarProps} />

      <div className={cn('shrink-0 contents', isRightDragging && 'dragging')} style={{ width: RightW }}>
        <div className="w-full">
          <RightPanel setModal={setModal} />
        </div>
      </div>

      {/* Modals */}
      <NewVendorModal
        isOpen={modalOpen === modalType.New}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />

      <EditVendorModal
        isOpen={modalOpen === modalType.Edit}
        onSave={() => {
          setEditableVendor(null);
          setModal(modalType.Close);
        }}
        onClose={() => {
          setEditableVendor(null);
          setModal(modalType.Close);
        }}
      />

      <HistoryModal
        isOpen={modalOpen === modalType.History}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />
    </>
  );
}
