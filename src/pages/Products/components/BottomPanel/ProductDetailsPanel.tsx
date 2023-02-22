import { useModel } from '@umijs/max';
import { OButton } from '@/components/Globals/OButton';
import { CheckOutlined, CloseOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Card, Space, Table, Switch, Image } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import styles from '../../index.less';

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
    <Card
      title="Product Details"
      extra={
        <Space size={4}>
          <OButton btnText={'Fields'} onClick={() => setShowProductDetailType('fields')} disabled={!editableProduct} />
          <OButton
            btnText={'Vendor Products'}
            onClick={() => setShowProductDetailType('vendorProduct')}
            disabled={!editableProduct}
          />
          <OButton btnText={'Gallery'} onClick={() => setShowProductDetailType('gallery')} disabled={!editableProduct} />
        </Space>
      }
      style={{ height: height - 20 }}
    >
      {showProductDetailType === 'fields' ? (
        <Table columns={TFieldColumns} dataSource={fieldTableRows} pagination={{ hideOnSinglePage: true }} />
      ) : showProductDetailType === 'vendorProduct' ? (
        <Table columns={TVendorProductColumns} dataSource={vendorProductTableRows} pagination={{ hideOnSinglePage: true }} />
      ) : showProductDetailType === 'gallery' ? (
        <Image width={200} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
      ) : (
        editableProduct && (
          <Table
            columns={[
              {
                key: 'pushInventory',
                dataIndex: 'pushInventory',
                title: 'Push Inventory',
                render: (pushInventory, record) => (
                  <>
                    <Switch
                      size="small"
                      className={pushInventory ? styles.checked : styles.unchecked}
                      onClick={() => {
                        handleUpdateProduct({
                          ...productList.find((_item) => _item.id === record.key),
                          push_inventory: !pushInventory,
                        });
                        setEditableProduct((prev) => ({
                          ...prev,
                          push_inventory: !prev.push_inventory,
                        }));
                      }}
                      checked={!pushInventory}
                    />
                    {pushInventory ? 'YES' : 'NO'}
                  </>
                ),
              },
            ]}
            dataSource={[
              {
                key: editableProduct?.id,
                pushInventory: editableProduct?.push_inventory,
              },
            ]}
            scroll={{ y: 150 }}
            pagination={{ hideOnSinglePage: true }}
          />
        )
      )}
    </Card>
  );
};

export default ProductDetailsPanel;
