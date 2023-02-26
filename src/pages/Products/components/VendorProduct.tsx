import { OButton } from '@/components/Globals/OButton';
import NewVendorProductModal from '@/pages/Products/components/Modals/NewVendorProduct';
import { modalType } from '@/utils/helpers/types';
import { CheckCircleOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { uuidv4 } from '@antv/xflow-core';
import { Popconfirm, Space, Table } from 'antd';
import { useEffect, useState } from 'react';

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

const VendorProduct: React.FC = () => {
  const [modalOpen, setModal] = useState('');
  const [vendorProductsTableRows, setVendorProductsTableRows] = useState([]);
  const [vendorProductList, setVendorProductList] = useState([]);
  const [selectedVendorProductKey, setSelectedVendorProductKey] = useState(null);
  const [buttonType, setButtonType] = useState('');
  const [showActive, setShowActive] = useState(true);

  useEffect(() => {
    setVendorProductsTableRows(
      vendorProductList
        .filter((item) => item.active === showActive)
        .map((vendorProduct) => ({
          key: vendorProduct.key,
          id: (
            <span>
              <CheckCircleOutlined color="blue" />
            </span>
          ),
          vendor: vendorProduct.vendor,
          vendorSku: vendorProduct.vendorSku,
          minOrderQty: vendorProduct.minOrderQty,
          leadTime: vendorProduct.leadTime,
          uom: <UnorderedListOutlined />,
        })),
    );
  }, [vendorProductList, showActive]);

  const handleDefaultClick = () => {
    setVendorProductList(
      vendorProductList.map((_item) =>
        _item.key === selectedVendorProductKey ? { ..._item, vendorSku: 'Default Vendor' } : _item,
      ),
    );
    setSelectedVendorProductKey(null);
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
          <OButton disabled={!selectedVendorProductKey} btnText="Default" />
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

      <NewVendorProductModal
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

export default VendorProduct;
