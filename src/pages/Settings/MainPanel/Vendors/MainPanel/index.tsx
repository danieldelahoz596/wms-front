import { useEffect, useMemo, useState } from 'react';
import { OButton } from '@/components/Globals/OButton';
import { FormattedMessage, useModel } from '@umijs/max';
import { Card, Space, Input, Table } from 'antd';
import TrainIcon from '@/utils/icons/train';
import ManufacturerIcon from '@/utils/icons/manufacturer';
import qs from 'qs';
import { modalType } from '@/utils/helpers/types';

const { Search } = Input;

interface IMainPanel {
  setModal: (value: any) => void;
}

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

const MainPanel: React.FC<IMainPanel> = ({ setModal }) => {
  const { vendorList, selectedVendor, showActive, getVendor, getVendorList, setSelectedVendor, setShowActive } =
    useModel('vendor');
  const [searchText, setSearchText] = useState('');

  const handleSearch = (value) => {
    const queryString = qs.stringify({
      name: value,
    });

    getVendorList(queryString);
  };

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

  return (
    <>
      <div className="title-row">
        <h1 className="page-title">
          <FormattedMessage id="pages.settings.menu.vendors" />
        </h1>
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
    </>
  );
};

export default MainPanel;
