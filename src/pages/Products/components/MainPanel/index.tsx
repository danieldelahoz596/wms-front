import { OButton } from '@/components/Globals/OButton';
import { modalType, productType } from '@/utils/helpers/types';
import {
  CaretDownOutlined,
  CaretRightOutlined,
  DownOutlined,
  RetweetOutlined,
  VerticalAlignBottomOutlined,
  VerticalAlignTopOutlined,
} from '@ant-design/icons';
import { Button, Card, Dropdown, Popconfirm, Select, Space, Table } from 'antd';
import React, { useMemo, useState } from 'react';

import ImportExportSummaryModal from '@/components/Modals/ImportExportSummary';
import BundleIcon from '@/utils/icons/bundle';
import CoreProductsIcon from '@/utils/icons/coreProduct';
import VariationIcon from '@/utils/icons/variation';
import VectorIcon from '@/utils/icons/vector';
import { useModel } from '@umijs/max';
import type { ItemType } from 'antd/es/menu/hooks/useItems';
import AdjustMasterSKUModal from './Modals/AdjustMasterSKU';
import BundleKitModal from './Modals/BundleKit';
import BundleKitProductModal from './Modals/BundleKitProduct';
import BundleKitQuantityModal from './Modals/BundleKitQuantity';
import CoreProductModal from './Modals/CoreProduct';
import ExportCustomBundleKitModal from './Modals/ExportCustomBundleKit';
import ExportVendorProductsModal from './Modals/ExportVendorProducts';
import ImportCustomFieldsModal from './Modals/ImportCustomFields';
import ImportProductsModal from './Modals/ImportProducts';
import ImportSKUAdjustmentModal from './Modals/ImportSKUAdjustment';
import ImportVendorProductsModal from './Modals/ImportVendorProducts';
import ImportVendorProductsAllModal from './Modals/ImportVendorProductsAll';
import ImportVendorProductsByVendorModal from './Modals/ImportVendorProductsByVendor';
import ProductVariationsDetailsModal from './Modals/ProductVariationsDetails';
import ProductVariationsModal from './Modals/ProductVariations';
import NewProductSelectTypeModal from './Modals/NewProductSelectType';
import ReturnDownForwardIcon from '@/utils/icons/returnDownForward';
// import EditProductModal from './components/Modals/EditProduct';
// import NewVirtualProductModal from './components/Modals/NewVirtualProduct';

const MainPanel: React.FC = () => {
  const [modalOpen, setModal] = useState('');
  const [showActivate, setShowActivate] = useState(true);
  const { productList, editableProduct, setProductList, setEditableProduct, handleUpdateProduct } = useModel('product');
  const { fieldTypes } = useModel('customProductFields');
  const { getVendorProductImportExportSummary } = useModel('exportSummary');
  const [importExportSummaryData, setImportExportSummaryData] = useState({ title: '', info: '' });

  const handleMasterSKUClick = (event, record) => {
    event.stopPropagation();
    setModal(modalType.New);
    setEditableProduct(record);
  };

  const importExportMenuItems: ItemType[] = [
    {
      key: '1',
      label: <span onClick={() => setModal(modalType.Import)}> Import Products </span>,
      icon: <VerticalAlignTopOutlined />,
    },
    {
      key: '2',
      label: <span onClick={() => setModal(modalType.ImportVendorProducts)}>Import Vendor Products</span>,
      icon: <VerticalAlignTopOutlined />,
    },
    {
      key: '3',
      label: <span onClick={() => setModal(modalType.ImportSKUAdjustment)}>Import SKU Adjustments</span>,
      icon: <VerticalAlignTopOutlined />,
    },
    {
      key: '4',
      label: <span onClick={() => setModal(modalType.ImportCustomFields)}>Import Custom Fields</span>,
      icon: <VerticalAlignTopOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: '5',
      label: <span onClick={() => setModal(modalType.Export)}>Export Products</span>,
      icon: <VerticalAlignBottomOutlined />,
    },
    {
      key: '6',
      label: <span onClick={() => setModal(modalType.ExportVendorProducts)}>Export Vendor Products</span>,
      icon: <VerticalAlignBottomOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: '7',
      label: <span onClick={() => setModal(modalType.ExportVendorProducts)}>Custom Product Export</span>,
      icon: <VerticalAlignBottomOutlined />,
      disabled: true,
    },
    {
      key: '8',
      label: <span onClick={() => setModal(modalType.ExportCustomBundleKit)}>Custom Bundle/Kit Export</span>,
      icon: <VerticalAlignBottomOutlined />,
    },
  ];

  const TColumns = [
    {
      key: 'expand',
      title: '',
      width: 30,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      align: 'center',
      render: (text: any) => (
        <>
          {text === productType.CoreProduct ? (
            <CoreProductsIcon style={{ fontSize: 24 }} />
          ) : text === productType.BundleOrKit ? (
            <BundleIcon style={{ fontSize: 24 }} />
          ) : text === productType.VirtualProduct ? (
            <VariationIcon style={{ fontSize: 24 }} />
          ) : text === productType.Variations ? (
            <ReturnDownForwardIcon fill="blue" style={{ fontSize: 24 }} />
          ) : (
            <span style={{ position: 'relative' }}>
              <CoreProductsIcon style={{ fontSize: 24 }} />
              <div style={{ position: 'absolute', top: 3, left: 12 }}>
                <VectorIcon style={{ fontSize: 14 }} />
              </div>
            </span>
          )}
        </>
      ),
    },
    {
      title: 'Master SKU',
      dataIndex: 'master_sku',
      key: 'master_sku',
      render: (master_sku, record) => (
        <a onClick={(event) => handleMasterSKUClick(event, record)} style={{ display: 'flex', alignItems: 'center' }}>
          {record.type === productType.Variations && <VectorIcon style={{ fontSize: 14, marginRight: 5 }} />}
          <u>{master_sku}</u>
        </a>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Vendor SKU(s)',
      dataIndex: 'vendor_skus',
      key: 'vendor_skus',
    },
    {
      title: 'Desc.',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: 'Categories',
      dataIndex: 'categories',
      key: 'categories',
    },
    {
      title: 'Labels',
      dataIndex: 'labels',
      key: 'labels',
    },
    {
      title: 'Weight',
      dataIndex: 'weight',
      key: 'weight',
    },
    {
      title: 'H/W/L',
      key: 'h/w/l',
      render: (value, record) => {
        return (
          <>
            {record.width}/{record.height}/{record.length}
          </>
        );
      },
    },
  ].concat(
    fieldTypes
      .filter((type) => type.show_on_grid && type.active)
      .map((type) => ({
        title: type.name,
        key: type.id,
        dataIndex: type.id,
      })),
  );

  const productTableRows = useMemo(
    () =>
      productList
        .filter((_item) => _item.status == showActivate)
        .map((_item) => {
          const row = { ..._item, key: _item.id };
          _item.custom_fields.forEach((item) => (row[item.field_id] = item.value));
          return row;
        }),
    [productList, showActivate],
  );

  return (
    <>
      <div className="title-row">
        <h1 className="page-title">Products :: </h1>
        <div>
          <Select
            options={[
              { label: 'Active', value: 'active' },
              { label: 'Inactive', value: 'inactive' },
            ]}
            defaultValue="active"
            size="small"
            style={{ width: '100px', marginLeft: '5px' }}
            onChange={(value) => {
              setShowActivate(value === 'active' ? true : false);
              setEditableProduct(null);
            }}
            value={showActivate ? 'ACTIVE' : 'INACTIVE'}
          />
          <Button icon={<RetweetOutlined />} />
        </div>
      </div>
      <Card className="content-box">
        <Space size={HORIZONTAL_SPACE_SIZE} className="button-row">
          <OButton btnText="Adjust Sku" onClick={() => setModal(modalType.AdjustMasterSKU)} disabled={!editableProduct} />
          <Popconfirm
            title="Sure to convert to bundle/kit?"
            onConfirm={() => {
              handleUpdateProduct({
                ...editableProduct,
                type: productType.BundleOrKit,
              });
              setEditableProduct(null);
            }}
          >
            <OButton
              btnText="Convert To Bundle/Kit"
              disabled={!editableProduct || !(editableProduct?.type === productType.CoreProduct)}
            />
          </Popconfirm>
          <Popconfirm
            title="Sure to convert to Core?"
            onConfirm={() => {
              handleUpdateProduct({
                ...editableProduct,
                type: productType.CoreProduct,
              });
              setEditableProduct(null);
            }}
          >
            <OButton
              btnText="Convert To Core"
              disabled={!editableProduct || !(editableProduct?.type === productType.Variations)}
            />
          </Popconfirm>
          <Popconfirm
            title={`Sure to Convert to ${showActivate ? 'Deactivate' : 'Activate'}`}
            onConfirm={() => {
              setProductList(
                productList.map((_product) =>
                  _product.id === editableProduct.id ? { ..._product, status: !showActivate } : _product,
                ),
              );
              setEditableProduct(null);
            }}
          >
            <OButton btnText={showActivate ? 'Deactivate' : 'Activate'} disabled={!editableProduct} />
          </Popconfirm>
          <OButton type="primary" onClick={() => console.log('History')} disabled={!editableProduct} btnText="History" />
          <OButton btnText={'New Product'} onClick={() => setModal(modalType.Variation)} />
          <Dropdown menu={{ items: importExportMenuItems }}>
            <Button size="small">
              <Space>
                Import/Export <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Space>
        <Table
          columns={TColumns}
          dataSource={productTableRows}
          onRow={(record) => {
            return {
              onClick: () => {
                if (record.id === editableProduct?.id) setEditableProduct(null);
                else setEditableProduct(productList.find((item) => item.id === record.id));
              },
            };
          }}
          rowClassName={(record) => (record.id === editableProduct?.id ? `ant-table-row-selected` : '')}
          expandIcon={(props) => {
            if (props.expandable) {
              if (props.expanded) {
                return (
                  <a
                    style={{ color: 'black' }}
                    onClick={(e) => {
                      props.onExpand(props.record, e);
                    }}
                  >
                    <CaretDownOutlined />
                  </a>
                );
              } else {
                return (
                  <a
                    style={{ color: 'black' }}
                    onClick={(e) => {
                      props.onExpand(props.record, e);
                    }}
                  >
                    <CaretRightOutlined />
                  </a>
                );
              }
            } else return <></>;
          }}
        />
      </Card>

      <AdjustMasterSKUModal
        isOpen={modalOpen == modalType.AdjustMasterSKU}
        onSave={(master_sku) => {
          handleUpdateProduct({ ...editableProduct, master_sku });
          setEditableProduct([]);
          setModal(modalType.Close);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <NewProductSelectTypeModal
        isOpen={modalOpen == modalType.Variation}
        handleClick={(value) => {
          setModal(value);
          setEditableProduct(null);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <CoreProductModal
        isOpen={modalOpen == modalType.CoreProduct}
        onSave={(value: any) => setModal(value)}
        onClose={() => setModal(modalType.Close)}
      />

      <BundleKitProductModal
        isOpen={modalOpen === modalType.BundleKitProduct}
        onSave={() => setModal(modalType.SelectQuantityOfSKU)}
        onClose={() => setModal(modalType.Close)}
      />

      <BundleKitQuantityModal
        isOpen={modalOpen === modalType.SelectQuantityOfSKU}
        onSave={() => setModal(modalType.BundleKit)}
        onClose={() => setModal(modalType.Close)}
      />

      <BundleKitModal
        isOpen={modalOpen == modalType.BundleKit}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />

      <ProductVariationsDetailsModal
        isOpen={modalOpen == modalType.ProductVariants}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />

      <ProductVariationsModal
        isOpen={modalOpen == modalType.ProductVariations}
        onSave={() => setModal(modalType.ProductVariants)}
        onClose={() => setModal(modalType.Close)}
      />

      {/* <EditProductModal
        isOpen={modalOpen == modalType.Edit}
        onSave={() => {
          setModal(modalType.Close);
          handleUpdateProduct(editableProduct);
          setEditableProduct(null);
        }}
        onClose={() => setModal(modalType.Close)}
      /> */}

      <ImportProductsModal
        isOpen={modalOpen == modalType.Import}
        onSave={() => {
          setModal(modalType.ImportExportSummary);
          setImportExportSummaryData({ title: 'Product Import', info: 'Product Import Summary' });
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <ImportVendorProductsModal
        isOpen={modalOpen == modalType.ImportVendorProducts}
        onClick={(value: any) => setModal(value)}
        onClose={() => setModal(modalType.Close)}
      />

      <ImportVendorProductsByVendorModal
        isOpen={modalOpen == modalType.ImportVendorProductsByVendor}
        onSave={() => {
          setModal(modalType.ImportExportSummary);
          setImportExportSummaryData({
            title: 'Vendor Product Import By Vendor',
            info: 'Vendor SKU Import Summary',
          });
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <ImportVendorProductsAllModal
        isOpen={modalOpen == modalType.ImportVendorProductsAll}
        onSave={() => {
          setModal(modalType.ImportExportSummary);
          setImportExportSummaryData({
            title: 'Vendor Product Import By All',
            info: 'Vendor SKU Import Summary',
          });
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <ImportSKUAdjustmentModal
        isOpen={modalOpen == modalType.ImportSKUAdjustment}
        onSave={() => {
          setModal(modalType.ImportExportSummary);
          setImportExportSummaryData({
            title: 'Product SKU Adjustment Import',
            info: 'Product SKU Adjustment Import Summary',
          });
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <ImportCustomFieldsModal
        isOpen={modalOpen == modalType.ImportCustomFields}
        onSave={() => {
          setModal(modalType.ImportExportSummary);
          setImportExportSummaryData({
            title: 'Product Custom Fields Import',
            info: 'Product Custom Fields Import Summary',
          });
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <ImportExportSummaryModal
        title={importExportSummaryData.title}
        info={importExportSummaryData.info}
        getImportExportSummary={getVendorProductImportExportSummary}
        isOpen={modalOpen === modalType.ImportExportSummary}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />

      <ExportVendorProductsModal
        isOpen={modalOpen == modalType.ExportVendorProducts}
        onSave={() => {}}
        onClose={() => setModal(modalType.Close)}
      />

      <ExportCustomBundleKitModal
        isOpen={modalOpen === modalType.ExportCustomBundleKit}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />
    </>
  );
};

export default MainPanel;
