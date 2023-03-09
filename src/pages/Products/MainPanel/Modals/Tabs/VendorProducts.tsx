import { OButton } from '@/components/Globals/OButton';
import VendorProductModal from '@/pages/Products/MainPanel/Modals/VendorProduct';
import { modalType } from '@/utils/helpers/types';
import { CheckCircleFilled, PlusOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { uuidv4 } from '@antv/xflow-core';
import { FormattedMessage, useModel } from '@umijs/max';
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
    title: <FormattedMessage id="component.table.column.vendor" />,
    dataIndex: 'vendor',
    key: 'vendor',
  },
  {
    title: <FormattedMessage id="component.table.column.vendorSku" />,
    dataIndex: 'vendorSku',
    key: 'vendorSku',
  },
  {
    title: <FormattedMessage id="component.table.column.minOrderQty" />,
    dataIndex: 'minOrderQty',
    key: 'minOrderQty',
  },
  {
    title: <FormattedMessage id="component.table.column.leadTime" />,
    dataIndex: 'leadTime',
    key: 'leadTime',
  },
  {
    title: <FormattedMessage id="component.table.column.uom" />,
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
      btnText: <FormattedMessage id="component.button.newVendorProduct" />,
      disabled: false,
    },
    {
      onClick: handleEditVendorProductClick,
      btnText: <FormattedMessage id="component.button.edit" />,
      disabled: !selectedVendorProductKey,
    },
    {
      btnText: (
        <Popconfirm
          title={
            showActive ? (
              <FormattedMessage id="pages.products.coreProduct.vendorProducts.popconfirm.deactivate.title" />
            ) : (
              <FormattedMessage id="pages.products.coreProduct.vendorProducts.popconfirm.activate.title" />
            )
          }
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
          <OButton
            disabled={!selectedVendorProductKey}
            btnText={
              showActive ? (
                <FormattedMessage id="component.button.deactivate" />
              ) : (
                <FormattedMessage id="component.button.activate" />
              )
            }
          />
        </Popconfirm>
      ),
    },
    {
      onClick: handleDefaultClick,
      btnText: (
        <Popconfirm
          title={<FormattedMessage id="pages.products.coreProduct.vendorProducts.popconfirm.default.title" />}
          onConfirm={() => handleDefaultClick()}
        >
          <OButton
            disabled={!selectedVendorProductKey || defaultVendorProductKey === selectedVendorProductKey}
            btnText={<FormattedMessage id="component.button.default" />}
          />
        </Popconfirm>
      ),
    },
  ];

  return (
    <>
      <h2>
        <FormattedMessage id="pages.products.coreProduct.vendorProducts.description" />
      </h2>
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
