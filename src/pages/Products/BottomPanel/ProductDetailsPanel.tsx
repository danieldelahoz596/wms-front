import { CheckCircleFilled, CheckOutlined, CloseOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, Image, Space, Table, Radio } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import type { RadioChangeEvent } from 'antd';

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
    dataIndex: 'vendorSku',
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
    key: 'uom',
    render: () => <UnorderedListOutlined />,
  },
];

const ProductDetailsPanel: React.FC<IProductDetailsPanel> = ({ height }) => {
  const { editableProduct } = useModel('product');
  const { fieldTypes } = useModel('customProductFields');
  const [selectedMode, setSelectedMode] = useState<'vendorProduct' | 'fields' | 'gallery'>('vendorProduct');
  const { vendorList } = useModel('vendor');

  const fieldTableRows = useMemo(
    () =>
      editableProduct?.custom_fields?.map((customField) => ({
        key: customField.field_id,
        value: customField.value,
        ...fieldTypes.find((item) => item.id === customField.field_id),
      })),
    [editableProduct, fieldTypes],
  );

  const vendorProductTableRows = useMemo(
    () =>
      editableProduct?.vendor_products?.map((item) => ({
        key: item.key,
        vendor: (
          <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            {editableProduct?.default_vendor_product === item.key && <CheckCircleFilled />}
            <div>{vendorList.find((vendor) => vendor.id === item.vendor).name}</div>
          </div>
        ),
        vendorSku: item.vendorSku,
        minOrderQty: item.minOrderQty,
        leadTime: item.leadTime,
      })),
    [editableProduct, vendorList],
  );

  useEffect(() => {
    if (!editableProduct) setSelectedMode('vendorProduct');
  }, [editableProduct]);

  const handleTabSelect = (e: RadioChangeEvent) => {
    setSelectedMode(e.target.value);
  };

  return (
    <>
      <div className="title-row space-between">
        <h1 className="page-title">Product Details</h1>
        <Radio.Group size="small" buttonStyle="solid" value={selectedMode} onChange={handleTabSelect}>
          <Space size={HORIZONTAL_SPACE_SIZE}>
            <Radio.Button value="fields">Fields</Radio.Button>
            <Radio.Button value="vendorProduct">Vendor Products</Radio.Button>
            <Radio.Button value="gallery">Gallery</Radio.Button>
          </Space>
        </Radio.Group>
      </div>
      <Card className="content-box" style={{ height: height - 20 }}>
        {selectedMode === 'fields' ? (
          <Table columns={TFieldColumns} dataSource={fieldTableRows} pagination={{ hideOnSinglePage: true }} />
        ) : selectedMode === 'gallery' ? (
          <Image width={200} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
        ) : (
          <Table columns={TVendorProductColumns} dataSource={vendorProductTableRows} pagination={{ hideOnSinglePage: true }} />
        )}
      </Card>
    </>
  );
};

export default ProductDetailsPanel;
