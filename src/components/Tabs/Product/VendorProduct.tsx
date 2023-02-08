import { OButton } from '@/components/Globals/OButton';
import NewVendorProductModal from '@/components/Modals/Product/NewVendorProduct';
import { modalType } from '@/utils/helpers/types';
import { CheckCircleOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Col, Popconfirm, Row, Space, Table } from 'antd';
import { useEffect, useState } from 'react';

const VendorProduct: React.FC = () => {
  const [modalOpen, setModal] = useState('');
  const [vendorProductsTableRows, setVendorProductsTableRows] = useState([]);
  const [vendorProductList, setVendorProductList] = useState([]);
  const [selectedVendorProductKey, setSelectedVendorProductKey] = useState(null);
  const [buttonType, setButtonType] = useState('');

  useEffect(() => {
    setVendorProductsTableRows(
      vendorProductList.map((vendorProduct) => ({
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
  }, [vendorProductList]);

  const handleDeactiveClick = () => {
    setVendorProductList(
      vendorProductList.filter((_item) => _item.key !== selectedVendorProductKey),
    );
    setSelectedVendorProductKey(null);
  };

  const handleDefaultClick = () => {
    setVendorProductList(
      vendorProductList.map((_item) =>
        _item.key === selectedVendorProductKey ? { ..._item, vendorSku: 'Default Vendor' } : _item,
      ),
    );
    setSelectedVendorProductKey(null);
  };

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
      onClick: handleDeactiveClick,
      // btnText: 'Deactivate',
      btnText: (
        <Popconfirm
          title={'Sure to Deactivate?'}
          onConfirm={() => {
            handleDeactiveClick;
          }}
        >
          <OButton size="small" disabled={!selectedVendorProductKey} btnText={'Deactivate'}></OButton>
        </Popconfirm>
      ),
      
    },
    {
      onClick: handleDefaultClick,
      btnText: 'Default',
      disabled: !selectedVendorProductKey,
    },
  ];

  const handleVendorRowClick = (record) => {
    setSelectedVendorProductKey(record.key);
  };

  return (
    <>
      <div>
        <p>Add vendor SKUs associated with this product.</p>
        <Row>
          <Col span={18}>
            <Space size={4}>
              {actionButtons.map((btn, index) => (
                <OButton {...btn} />
              ))}
            </Space>
          </Col>
          <Col span={6} style={{ textAlign: 'right' }}>
            <OButton btnText="Show Inactive" disabled={vendorProductList.length == 0} />
          </Col>
        </Row>
        <Table
          columns={vendorProductsTableColumns}
          dataSource={vendorProductsTableRows}
          pagination={false}
          onRow={(record, rowIndex) => {
            return {
              onClick: () => {
                handleVendorRowClick(record);
              }, // clicow
              onDoubleClick: (event) => {
                handleVendorRowClick(record);
              }, // double clicow
            };
          }}
          rowClassName={(record) =>
            record.key === selectedVendorProductKey ? `data-row active-row pb-3` : 'data-row'
          }
          style={{ marginTop: '1rem', minHeight: 200 }}
        />
      </div>

      <NewVendorProductModal
        isOpen={modalOpen == modalType.NewVendorProduct}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
        vendorProductList={vendorProductList}
        setVendorProductList={setVendorProductList}
        selectedItemKey={selectedVendorProductKey}
        setSelectedItemkey={setSelectedVendorProductKey}
        type={buttonType}
      />
    </>
  );
};

export default VendorProduct;
