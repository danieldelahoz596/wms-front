import { OButton } from '@/components/Globals/OButton';
import { OTable } from '@/components/Globals/OTable';
import { cn, SampleSplitter } from '@/utils/components/SampleSplitter';
import { modalType } from '@/utils/helpers/types';
import ManufacturerIcon from '@/utils/icons/manufacturer';
import TrainIcon from '@/utils/icons/train';
import { useModel } from '@umijs/max';
import { Card, Input, Space } from 'antd';
import qs from 'qs';
import { useEffect, useState } from 'react';
import { useResizable } from 'react-resizable-layout';
import EditVendorModal from './components/Modals/EditVendor';
import HistoryModal from './components/Modals/History';
import NewVendorModal from './components/Modals/NewVendor';
import RightPanel from './components/RightPanel';

const { Search } = Input;

export default function () {
  const [modalOpen, setModal] = useState('');
  const { vendorList, getVendorList, setSelectedVendor, setEditableVendor, setVendorList } = useModel('vendor');
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [showInactive, setShowInactive] = useState(false);
  const [, setSearchText] = useState('');

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

  const vendorListRows = vendorList
    ?.filter((_item) => _item.status == !showInactive)
    .map((_item) => ({
      key: _item.id,
      name: <div style={{ width: '10rem' }}>{_item.name.toUpperCase()}</div>,
      services: (
        <div style={{ display: 'flex', gap: '0.2rem', justifyContent: 'center', alignItems: 'center' }}>
          {_item.is_supplier ? <TrainIcon /> : ''}
          {_item.is_manufacturer ? <ManufacturerIcon /> : ''}
        </div>
      ),
      status: _item.status ? 'ACTIVE' : 'INACTIVE',
      openPos: _item.open_pos,
      pendingUnits: _item.pending_units,
      pendingValue: _item.pending_value,
    }));

  const handleSelectedRows = (_selectedRows = []) => {
    setSelectedRows(_selectedRows);
    const _selectedVendor = vendorList.find((_item) => _item.id == _selectedRows[0]);
    setSelectedVendor(_selectedVendor);
  };

  useEffect(() => {
    const queryString = qs.stringify({
      status: showInactive ? false : true,
    });

    setSearchText('');
    getVendorList(queryString);
  }, [showInactive, getVendorList]);

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
              btnText={showInactive ? 'Show Active' : 'Show Inactive'}
              onClick={() => {
                setShowInactive((prev) => !prev);
                setSelectedVendor(null);
                setVendorList([]);
              }}
            />
          </Space>
          <OTable
            type="radio"
            columns={[
              {
                title: 'Vendor',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: 'Services',
                dataIndex: 'services',
                key: 'services',
              },
              {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
              },
              {
                title: "Open P.O.'s",
                dataIndex: 'openPos',
                key: 'openPos',
              },
              {
                title: 'Pending Units',
                dataIndex: 'pendingUnits',
                key: 'pendingUnits',
              },
              {
                title: 'Pending Value',
                dataIndex: 'pendingValue',
                key: 'pendingValue',
              },
            ]}
            rows={vendorListRows}
            selectedRows={selectedRows}
            setSelectedRows={handleSelectedRows}
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
