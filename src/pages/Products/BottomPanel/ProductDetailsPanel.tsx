import { CheckCircleFilled, CheckOutlined, CloseOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { FormattedMessage, useModel } from '@umijs/max';
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
    title: <FormattedMessage id="component.table.column.name" />,
  },
  {
    key: 'value',
    dataIndex: 'value',
    title: <FormattedMessage id="component.table.column.value" />,
  },
  {
    key: 'show_on_grid',
    dataIndex: 'show_on_grid',
    title: <FormattedMessage id="component.table.column.showOnGrid" />,
    render: (value) => (value ? <CheckOutlined /> : <CloseOutlined />),
  },
  {
    key: 'required',
    dataIndex: 'required',
    title: <FormattedMessage id="component.table.column.required" />,
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
    title: <FormattedMessage id="component.table.column.vendor" />,
    dataIndex: 'vendor',
    key: 'vendor',
  },
  {
    title: <FormattedMessage id="component.table.column.vendorSku" />,
    dataIndex: 'vendorSku',
    key: 'vendorSKU',
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
    key: 'uom',
    render: () => <UnorderedListOutlined />,
  },
];

const ProductDetailsPanel: React.FC<IProductDetailsPanel> = ({ height }) => {
  const { editableProduct } = useModel('product');
  const { fieldTypes } = useModel('customProductFields');
  const [selectedMode, setSelectedMode] = useState<'vendorProduct' | 'fields' | 'gallery'>('vendorProduct');
  const { vendorList } = useModel('vendor');

  const fielUrls = useMemo(
    () => (editableProduct ? editableProduct?.images.map((item) => item.image_url) : []),
    [editableProduct],
  );

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
        <h1 className="page-title">
          <FormattedMessage id="pages.products.bottomPanel.productDetails.title" />
        </h1>
        <Radio.Group size="small" buttonStyle="solid" value={selectedMode} onChange={handleTabSelect}>
          <Space size={HORIZONTAL_SPACE_SIZE}>
            <Radio.Button value="fields">
              <FormattedMessage id="component.button.fields" />
            </Radio.Button>
            <Radio.Button value="vendorProduct">
              <FormattedMessage id="component.button.vendorProducts" />
            </Radio.Button>
            <Radio.Button value="gallery">
              <FormattedMessage id="component.button.gallery" />
            </Radio.Button>
          </Space>
        </Radio.Group>
      </div>
      <Card className="content-box" style={{ height: height - 20 }}>
        {selectedMode === 'fields' ? (
          <Table columns={TFieldColumns} dataSource={fieldTableRows} pagination={{ hideOnSinglePage: true }} />
        ) : selectedMode === 'gallery' ? (
          <Image.PreviewGroup>
            {fielUrls.map((url, index) => (
              <Image key={index} width={200} src={url} />
            ))}
          </Image.PreviewGroup>
        ) : (
          <Table columns={TVendorProductColumns} dataSource={vendorProductTableRows} pagination={{ hideOnSinglePage: true }} />
        )}
      </Card>
    </>
  );
};

export default ProductDetailsPanel;
