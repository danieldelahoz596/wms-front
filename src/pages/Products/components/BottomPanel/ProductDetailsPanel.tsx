import { OButton } from '@/components/Globals/OButton';
import { CheckOutlined, CloseOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, Image, Space, Table } from 'antd';
import { useEffect, useMemo, useState } from 'react';

interface IProductDetailsPanel {
  height: number;
}

const TFieldColumns = [
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Name',
  },
  {
    key: 'value',
    dataIndex: 'value',
    title: 'Value',
  },
  {
    key: 'show_on_grid',
    dataIndex: 'show_on_grid',
    title: 'Show On Grid',
    render: (value) => (value ? <CheckOutlined /> : <CloseOutlined />),
  },
  {
    key: 'required',
    dataIndex: 'required',
    title: 'Required',
    render: (value) => (value ? <CheckOutlined /> : <CloseOutlined />),
  },
];

const TVendorProductColumns = [
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
    dataIndex: 'vendorSKU',
    key: 'vendorSKU',
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
    render: () => <UnorderedListOutlined />,
  },
];

const vendorProductTableRows = [
  {
    key: 1,
    id: 1,
    vendor: 'vendor',
    vendorSKU: 'vendorSKU',
    minOrderQty: 10,
    leadTime: 10,
  },
  {
    key: 2,
    id: 2,
    vendor: 'vendor',
    vendorSKU: 'vendorSKU',
    minOrderQty: 20,
    leadTime: 10,
  },
];

const ProductDetailsPanel: React.FC<IProductDetailsPanel> = ({ height }) => {
  const { editableProduct, productList, setEditableProduct, handleUpdateProduct } = useModel('product');
  const { fieldTypes } = useModel('customProductFields');
  const [showProductDetailType, setShowProductDetailType] = useState(null);

  const fieldTableRows = useMemo(
    () =>
      editableProduct?.custom_fields.map((customField) => ({
        key: customField.field_id,
        value: customField.value,
        ...fieldTypes.find((item) => item.id === customField.field_id),
      })),
    [editableProduct, fieldTypes],
  );

  useEffect(() => {
    setShowProductDetailType(null);
  }, [editableProduct]);

  return (
    <>
      <div className="title-row space-between">
        <h1 className="page-title">Product Details</h1>
        <Space size={HORIZONTAL_SPACE_SIZE}>
          <OButton btnText={'Fields'} onClick={() => setShowProductDetailType('fields')} disabled={!editableProduct} />
          <OButton
            btnText={'Vendor Products'}
            onClick={() => setShowProductDetailType('vendorProduct')}
            disabled={!editableProduct}
          />
          <OButton btnText={'Gallery'} onClick={() => setShowProductDetailType('gallery')} disabled={!editableProduct} />
        </Space>
      </div>
      <Card className="content-box" style={{ height: height - 20 }}>
        {showProductDetailType === 'fields' ? (
          <Table columns={TFieldColumns} dataSource={fieldTableRows} pagination={{ hideOnSinglePage: true }} />
        ) : showProductDetailType === 'gallery' ? (
          <Image width={200} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
        ) : (
          <Table columns={TVendorProductColumns} dataSource={vendorProductTableRows} pagination={{ hideOnSinglePage: true }} />
        )}
      </Card>
    </>
  );
};

export default ProductDetailsPanel;
