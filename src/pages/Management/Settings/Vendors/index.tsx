import { Button, Input, Card, Row, Col, Popconfirm, Space } from 'antd';
import { useEffect, useState } from 'react';
import { modalType } from '@/utils/helpers/types';
import { OTable } from '@/components/Globals/OTable';
import { useModel } from '@umijs/max';
import EditVendorModal from '@/components/Modals/Settings/Vendor/EditVendorModal';
import NewVendorModal from '@/components/Modals/Settings/Vendor/NewVendorModal';
import { CarOutlined, SearchOutlined } from '@ant-design/icons';
import RightPanel from './components/RightPanel';
import { useResizable } from 'react-resizable-layout';
import { cn, SampleSplitter } from '@/utils/components/SampleSplitter';
import EditHistoryModal from '@/components/Modals/Settings/Vendor/EditHistoryModal';
import TrainIcon from '@/utils/icons/train';
import ManufacturerIcon from '@/utils/icons/manufacturer';
import ShippingIcon from '@/utils/icons/shipping';
import qs from 'qs';
import React from 'react';
import { OButton } from '../../../../components/Globals/OButton';

const { Search } = Input;

export default function () {
  const [modalOpen, setModal] = useState('');
  const { vendorList, getVendorList, setSelectedVendor, setEditableVendor, setVendorList } =
    useModel('vendor');
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [showInactive, setShowInactive] = useState(false);
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

  const editVendor = (_record) => {
    setEditableVendor(_record);
    setModal(modalType.Edit);
  };

  const vendorListRows = vendorList
    ?.filter((_item) => _item.status == !showInactive)
    .map((_item) => ({
      key: _item.id,
      name: <div style={{ width: '10rem' }}>{_item.name.toUpperCase()}</div>,
      services: (
        <div
          style={{ display: 'flex', gap: '0.2rem', justifyContent: 'center', alignItems: 'center' }}
        >
          {_item.is_supplier ? <TrainIcon style={{ fontSize: 20 }} /> : ''}
          {_item.is_manufacturer ? <ManufacturerIcon style={{ fontSize: 20 }} /> : ''}
          {_item.is_dropshipper ? <ShippingIcon style={{ fontSize: 24 }} /> : ''}
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
        <Card style={{ width: '100%' }}>
          <Space size={3} className="mb-10">
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
              onClick={() => { setModal(modalType.New); }} />
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

      <div
        className={cn('shrink-0 contents', isRightDragging && 'dragging')}
        style={{ width: RightW }}
      >
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

      <EditHistoryModal
        isOpen={modalOpen === modalType.History}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />
    </>
  );
}
