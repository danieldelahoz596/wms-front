import { useState, useEffect } from 'react';
import { Row, Col, Table } from 'antd';
import { useModel } from '@umijs/max';
import { OButton } from '@/components/Globals/OButton';
import { CheckCircleOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { modalType } from '@/utils/helpers/types';
import NewVendorProductModal from '@/components/Modals/Product/NewVendorProduct';

const VendorProduct: React.FC = () => {
  const [modalOpen, setModal] = useState('');
  const [selectedProductId, setSelectedProductId] = useState(-1);
  const [vendorProducts, setVendorProducts] = useState([]);
  const { productList } = useModel('product');

  useEffect(() => {
    setVendorProducts(
      productList.map((product) => ({
        id: (
          <span>
            <CheckCircleOutlined color="blue" />
          </span>
        ),
        vendor: <span>{product.name}</span>,
        vendorSku: product.master_sku,
        minOrderQty: '1',
        leadTime: 1,
        uom: <UnorderedListOutlined />,
      })),
    );
  }, [productList]);

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

  const actionButtons = [
    {
      type: 'dashed',
      onClick: () => setModal(modalType.NewVendorProduct),
      btnText: 'NEW VENDOR PRODUCT',
    },
    {
      type: 'dashed',
      onClick: () => {},
      btnText: 'EDIT',
    },
    {
      type: 'dashed',
      onClick: () => {},
      btnText: 'DEACTIVE',
    },
    {
      type: 'dashed',
      onClick: () => {},
      btnText: 'DEFAULT',
    },
  ];

  const handleVendorRowClick = (record) => {
    setSelectedProductId(record.id);
  };

  return (
    <>
      <div>
        <p>Add vendor SKUs associated with this product.</p>
        <Row justify="space-between">
          <Col>
            {actionButtons.map((btn, index) => (
              <OButton key={index} {...btn} />
            ))}
          </Col>
          <Col>
            <OButton type="dashed" btnText="SHOW INACTIVE" />
          </Col>
        </Row>
        <div style={{ marginTop: '1rem', minHeight: '200px' }}>
          <Table
            columns={vendorProductsTableColumns}
            dataSource={vendorProducts}
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
              record.id === selectedProductId ? `data-row active-row pb-3` : 'data-row'
            }
          />
        </div>
      </div>

      <NewVendorProductModal
        isOpen={modalOpen == modalType.NewVendorProduct}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />
    </>
  );
};

export default VendorProduct;
