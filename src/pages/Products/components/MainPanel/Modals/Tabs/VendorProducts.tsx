import { OButton } from '@/components/Globals/OButton';
import VendorProductModal from '@/pages/Products/components/MainPanel/Modals/VendorProduct';
import { modalType } from '@/utils/helpers/types';
import { CheckCircleFilled, PlusOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { uuidv4 } from '@antv/xflow-core';
import { useModel } from '@umijs/max';
import { Popconfirm, Space, Table } from 'antd';
import { useEffect, useState } from 'react';

interface IVendorProduct {
  vendorProductList: any[];
  setVendorProductList: (value: any) => void;
  defaultVendorProductKey: any;
  setDefaultVendorProductKey: (value: any) => void;
}

const vendorProductsTableColumns = [
  {
    title: '',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Vendor',
    dataIndex: 'vendor',
    key: 'vendor',
  },
  {
    title: 'Vendor SKU',
    dataIndex: 'vendorSku',
    key: 'vendorSku',
  },
  {
    title: 'Min Order Qty',
    dataIndex: 'minOrderQty',
    key: 'minOrderQty',
  },
  {
    title: 'Lead Time',
    dataIndex: 'leadTime',
    key: 'leadTime',
  },
  {
    title: 'U.O.M',
    dataIndex: 'uom',
    key: 'uom',
  },
];

const VendorProducts: React.FC<IVendorProduct> = ({
  vendorProductList,
  setVendorProductList,
  defaultVendorProductKey,
  setDefaultVendorProductKey,
}) => {
  const [modalOpen, setModal] = useState('');
  const [vendorProductsTableRows, setVendorProductsTableRows] = useState([]);
  const [selectedVendorProductKey, setSelectedVendorProductKey] = useState(null);
  const [buttonType, setButtonType] = useState('');
  const [showActive, setShowActive] = useState(true);
  const { vendorList } = useModel('vendor');

  useEffect(() => {
    if (vendorProductList.filter((item) => item.active === true).length === 1)
      setDefaultVendorProductKey(vendorProductList[0].key);
  }, [vendorProductList, setDefaultVendorProductKey]);

  useEffect(() => {
    setVendorProductsTableRows(
      vendorProductList
        .filter((item) => item.active === showActive)
        .map((vendorProduct) => ({
          key: vendorProduct.key,
          id: (
            <span>
              <PlusOutlined />
            </span>
          ),
          vendor: (
            <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
              {defaultVendorProductKey === vendorProduct.key && <CheckCircleFilled />}
              <div>{vendorList.find((vendor) => vendor.id === vendorProduct.vendor).name}</div>
            </div>
          ),
          vendorSku: vendorProduct.vendorSku,
          minOrderQty: vendorProduct.minOrderQty,
          leadTime: vendorProduct.leadTime,
          uom: <UnorderedListOutlined />,
        })),
    );
  }, [vendorProductList, showActive, vendorList, defaultVendorProductKey]);

  const handleDefaultClick = () => {
    // setVendorProductList(
    //   vendorProductList.map((_item) =>
    //     _item.key === selectedVendorProductKey ? { ..._item, vendorSku: 'Default Vendor' } : _item,
    //   ),
    // );
    // setSelectedVendorProductKey(null);
    setDefaultVendorProductKey(selectedVendorProductKey);
  };

  const handleNewVendorProductClick = () => {
    setModal(modalType.NewVendorProduct);
    setButtonType('add');
  };

  const handleEditVendorProductClick = () => {
    setModal(modalType.NewVendorProduct);
    setButtonType('edit');
  };

  const actionButtons = [
    {
      onClick: handleNewVendorProductClick,
      btnText: 'New Vendor Product',
      disabled: false,
    },
    {
      onClick: handleEditVendorProductClick,
      btnText: 'Edit',
      disabled: !selectedVendorProductKey,
    },
    {
      btnText: (
        <Popconfirm
          title={'Sure to Deactivate?'}
          onConfirm={() => {
            setVendorProductList(
              vendorProductList.map((vendorProduct) =>
                vendorProduct.key === selectedVendorProductKey
                  ? { ...vendorProduct, active: !vendorProduct.active }
                  : vendorProduct,
              ),
            );
          }}
        >
          <OButton disabled={!selectedVendorProductKey} btnText={`${showActive ? 'Deactivate' : 'Activate'}`} />
        </Popconfirm>
      ),
    },
    {
      onClick: handleDefaultClick,
      btnText: (
        <Popconfirm title={'Sure to Set it as default?'} onConfirm={() => handleDefaultClick()}>
          <OButton
            disabled={!selectedVendorProductKey || defaultVendorProductKey === selectedVendorProductKey}
            btnText="Default"
          />
        </Popconfirm>
      ),
    },
  ];

  return (
    <>
      <h2>Add vendor SKUs associated with this product.</h2>
      <div className="button-row space-between">
        <Space size={HORIZONTAL_SPACE_SIZE}>
          {actionButtons.map((btn, index) => (
            <OButton key={index} {...btn} />
          ))}
        </Space>
        <OButton
          btnText={`${showActive ? 'Show InActive' : 'Show Active'}`}
          disabled={vendorProductList.length == 0}
          onClick={() => {
            setShowActive((prev) => !prev);
            setSelectedVendorProductKey(null);
          }}
        />
      </div>
      <Table
        columns={vendorProductsTableColumns}
        dataSource={vendorProductsTableRows}
        pagination={{ hideOnSinglePage: true }}
        onRow={(record) => {
          return {
            onClick: () => {
              if (selectedVendorProductKey !== record.key) setSelectedVendorProductKey(record.key);
              else setSelectedVendorProductKey(null);
            },
          };
        }}
        rowClassName={(record) => (record.key === selectedVendorProductKey ? `ant-table-row-selected` : '')}
        style={{ minHeight: 200 }}
      />

      <VendorProductModal
        isOpen={modalOpen == modalType.NewVendorProduct}
        onSave={(item: any) => {
          if (selectedVendorProductKey) {
            setVendorProductList(
              vendorProductList.map((vendorProduct) => (vendorProduct.key === selectedVendorProductKey ? item : vendorProduct)),
            );
          } else {
            setVendorProductList([...vendorProductList, { ...item, key: uuidv4() }]);
          }
          setSelectedVendorProductKey(null);
          setModal(modalType.Close);
        }}
        onClose={() => setModal(modalType.Close)}
        initialVendorProduct={
          buttonType === 'edit' ? vendorProductList.find((item) => item.key === selectedVendorProductKey) : null
        }
      />
    </>
  );
};

export default VendorProducts;
