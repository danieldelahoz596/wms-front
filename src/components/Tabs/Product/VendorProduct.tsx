import { OButton } from '@/components/Globals/OButton';
import NewVendorProductModal from '@/pages/ProductManagement/components/Modals/NewVendorProduct';
import { modalType } from '@/utils/helpers/types';
import { CheckCircleOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { uuidv4 } from '@antv/xflow-core';
import { Col, Popconfirm, Row, Space, Table } from 'antd';
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
          <OButton
            size="small"
            disabled={!selectedVendorProductKey}
            btnText={`${showActive ? 'Deactivate' : 'Activate'}`}
          ></OButton>
        </Popconfirm>
      ),
    },
    {
      onClick: handleDefaultClick,
      btnText: 'Default',
      disabled: !selectedVendorProductKey,
    },
  ];

  return (
    <>
      <div>
        <p>Add vendor SKUs associated with this product.</p>
        <Row>
          <Col span={18}>
            <Space size={4}>
              {actionButtons.map((btn) => (
                <OButton {...btn} />
              ))}
            </Space>
          </Col>
          <Col span={6} style={{ textAlign: 'right' }}>
            <OButton
              btnText={`${showActive ? 'Show InActive' : 'Show Active'}`}
              disabled={vendorProductList.length == 0}
              onClick={() => {
                setShowActive((prev) => !prev);
                setSelectedVendorProductKey(null);
              }}
            />
          </Col>
        </Row>
        <Table
          columns={vendorProductsTableColumns}
          dataSource={vendorProductsTableRows}
          pagination={{ hideOnSinglePage: true }}
          onRow={(record) => {
            return {
              onClick: () => {
                if (selectedVendorProductKey !== record.key)
                  setSelectedVendorProductKey(record.key);
                else setSelectedVendorProductKey(null);
              },
            };
          }}
          rowClassName={(record) =>
            record.key === selectedVendorProductKey ? `ant-table-row-selected` : ''
          }
          style={{ marginTop: '1rem', minHeight: 200 }}
        />
      </div>

      <NewVendorProductModal
        isOpen={modalOpen == modalType.NewVendorProduct}
        onSave={(item: any) => {
          if (selectedVendorProductKey) {
            setVendorProductList(
              vendorProductList.map((vendorProduct) =>
                vendorProduct.key === selectedVendorProductKey ? item : vendorProduct,
              ),
            );
          } else {
            setVendorProductList([...vendorProductList, { ...item, key: uuidv4() }]);
          }
          setSelectedVendorProductKey(null);
          setModal(modalType.Close);
        }}
        onClose={() => setModal(modalType.Close)}
        initialVendorProduct={
          buttonType === 'edit'
            ? vendorProductList.find((item) => item.key === selectedVendorProductKey)
            : null
        }
      />
    </>
  );
};

export default VendorProduct;
