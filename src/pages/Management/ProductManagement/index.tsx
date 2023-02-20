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
import { Button, Card, Dropdown, Popconfirm, Row, Select, Space } from 'antd';
import React, { useMemo, useState } from 'react';

import { OTable } from '@/components/Globals/OTable';
import ImportExportSummaryModal from '@/components/Modals/ImportExportSummary';
import AdjustMasterSKUModal from '@/components/Modals/Product/AdjustMasterSKU';
import CoreProductModal from '@/components/Modals/Product/CoreProduct';
import EditProductModal from '@/components/Modals/Product/EditProduct';
import ExportCustomBundleKitModal from '@/components/Modals/Product/ExportCustomBundleKit';
import ExportVendorProductsModal from '@/components/Modals/Product/ExportVendorProducts';
import ImportCustomFieldsModal from '@/components/Modals/Product/ImportCustomFields';
import ImportProductsModal from '@/components/Modals/Product/ImportProducts';
import ImportSKUAdjustmentModal from '@/components/Modals/Product/ImportSKUAdjustment';
import ImportVendorProductsModal from '@/components/Modals/Product/ImportVendorProducts';
import ImportVendorProductsAllModal from '@/components/Modals/Product/ImportVendorProductsAll';
import ImportVendorProductsByVendorModal from '@/components/Modals/Product/ImportVendorProductsByVendor';
import NewBundleKitModal from '@/components/Modals/Product/NewBundleKit';
import NewProductModal from '@/components/Modals/Product/NewProduct';
import NewVirtualProductModal from '@/components/Modals/Product/NewVirtualProduct';
import ProductVariantsModal from '@/components/Modals/Product/ProductVariants';
import SelectCoreProductModal from '@/components/Modals/Product/SelectCoreProduct';
import SelectQuantityOfSKUModal from '@/components/Modals/Product/SelectQuantityOfSKU';
import { cn, SampleSplitter } from '@/utils/components/SampleSplitter';
import BundleIcon from '@/utils/icons/bundle';
import CoreProductsIcon from '@/utils/icons/coreProduct';
import VariationIcon from '@/utils/icons/variation';
import VectorIcon from '@/utils/icons/vector';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { useResizable } from 'react-resizable-layout';
import BottomPanel from './components/BottomPanel';
import LeftPanel from './components/LeftPanel/sidePanel';

const ProductManagement: React.FC = () => {
  const [modalOpen, setModal] = useState('');
  const [showActivate, setShowActivate] = useState(true);
  const { productList, editableProduct, setProductList, setEditableProduct, handleUpdateProduct } =
    useModel('product');
  const { fieldTypes } = useModel('customProductFields');
  const { getVendorProductImportExportSummary } = useModel('exportSummary');
  const [importExportSummaryData, setImportExportSummaryData] = useState({ title: '', info: '' });

  const handleMasterSKUClick = (event, record) => {
    event.stopPropagation();
    setModal(modalType.New);
    setEditableProduct(record);
  };

  const {
    isDragging: isLeftDragging,
    position: LeftW,
    separatorProps: leftDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 250,
    min: 100,
  });

  const {
    isDragging: isBottomDragging,
    position: bottomH,
    separatorProps: bottomDragBarProps,
  } = useResizable({
    axis: 'y',
    initial: 300,
    min: 50,
    reverse: true,
  });

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
          ) : text === productType.Variations ? (
            <VariationIcon style={{ fontSize: 24 }} />
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
        <a onClick={(event) => handleMasterSKUClick(event, record)}>
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

  const importExportMenuItems = [
    {
      key: '1',
      label: <span onClick={() => setModal(modalType.Import)}> Import Products </span>,
      icon: <VerticalAlignTopOutlined />,
    },
    {
      key: '2',
      label: (
        <span onClick={() => setModal(modalType.ImportVendorProducts)}>Import Vendor Products</span>
      ),
      icon: <VerticalAlignTopOutlined />,
    },
    {
      key: '3',
      label: (
        <span onClick={() => setModal(modalType.ImportSKUAdjustment)}>Import SKU Adjustments</span>
      ),
      icon: <VerticalAlignTopOutlined />,
    },
    {
      key: '4',
      label: (
        <span onClick={() => setModal(modalType.ImportCustomFields)}>Import Custom Fields</span>
      ),
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
      label: (
        <span onClick={() => setModal(modalType.ExportVendorProducts)}>Export Vendor Products</span>
      ),
      icon: <VerticalAlignBottomOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: '7',
      label: (
        <span onClick={() => setModal(modalType.ExportVendorProducts)}>Custom Product Export</span>
      ),
      icon: <VerticalAlignBottomOutlined />,
      disabled: true,
    },
    {
      key: '8',
      label: (
        <span onClick={() => setModal(modalType.ExportCustomBundleKit)}>
          Custom Bundle/Kit Export
        </span>
      ),
      icon: <VerticalAlignBottomOutlined />,
    },
  ];

  return (
    <PageContainer title={false} className={'flex flex-column overflow-hidden'}>
      <div className={'flex grow'}>
        <div
          className={cn('shrink-0 contents', isLeftDragging && 'dragging')}
          style={{ width: LeftW }}
        >
          <div className="w-full">
            <LeftPanel />
          </div>
        </div>
        <SampleSplitter isDragging={isLeftDragging} {...leftDragBarProps} />
        <div className="w-full flex flex-column h-screen">
          <div className="horizon-content" style={{ overflow: 'scroll' }}>
            <div style={{ width: '100%' }}>
              <Row style={{ marginLeft: '10px', marginTop: '10px' }}>
                <div style={{ fontSize: '15px' }}>Products :: </div>
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
                    value={showActivate ? 'active' : 'inactive'}
                  />
                  <Button icon={<RetweetOutlined />} />
                </div>
              </Row>
              <Card style={{ width: '100%' }}>
                <Space size={4}>
                  <OButton
                    btnText="Adjust Sku"
                    onClick={() => setModal(modalType.AdjustMasterSKU)}
                    disabled={!editableProduct}
                  />
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
                      disabled={
                        !editableProduct || !(editableProduct?.type === productType.CoreProduct)
                      }
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
                      disabled={
                        !editableProduct || !(editableProduct?.type === productType.Variations)
                      }
                    />
                  </Popconfirm>
                  <Popconfirm
                    title={`Sure to Convert to ${showActivate ? 'Deactivate' : 'Activate'}`}
                    onConfirm={() => {
                      setProductList(
                        productList.map((_product) =>
                          _product.id === editableProduct.id
                            ? { ..._product, status: !showActivate }
                            : _product,
                        ),
                      );
                      setEditableProduct(null);
                    }}
                  >
                    <OButton
                      btnText={showActivate ? 'Deactivate' : 'Activate'}
                      disabled={!editableProduct}
                    />
                  </Popconfirm>
                  <OButton
                    type="primary"
                    onClick={() => console.log('History')}
                    disabled={!editableProduct}
                    btnText="History"
                  />
                  <OButton btnText={'New Product'} onClick={() => setModal(modalType.Variation)} />
                  <Dropdown menu={{ items: importExportMenuItems }}>
                    <Button size="small">
                      <Space>
                        Import/Export <DownOutlined />
                      </Space>
                    </Button>
                  </Dropdown>
                </Space>

                <OTable
                  columns={TColumns}
                  rows={productTableRows}
                  style={{ marginTop: 10 }}
                  onRow={(record) => {
                    return {
                      onClick: () => {
                        if (record.id === editableProduct?.id) setEditableProduct(null);
                        else setEditableProduct(productList.find((item) => item.id === record.id));
                      },
                    };
                  }}
                  rowClassName={(record) =>
                    record.id === editableProduct?.id ? `ant-table-row-selected` : ''
                  }
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
                    }
                  }}
                />
              </Card>
            </div>
          </div>
          <SampleSplitter
            dir={'horizontal'}
            isDragging={isBottomDragging}
            {...bottomDragBarProps}
          />
          <div
            className={cn('shrink-0 contents', isBottomDragging && 'dragging')}
            style={{ height: bottomH }}
          >
            <div className="w-full">
              <BottomPanel height={bottomH} />
            </div>
          </div>
        </div>
      </div>

      <NewProductModal
        isOpen={modalOpen == modalType.Variation}
        handleClick={(value) => {
          setModal(value);
          setEditableProduct(null);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <CoreProductModal
        isOpen={modalOpen == modalType.New}
        onSave={(value: any) => setModal(value)}
        onClose={() => setModal(modalType.Close)}
      />

      <NewBundleKitModal
        isOpen={modalOpen == modalType.BundleKit}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />

      <SelectCoreProductModal
        isOpen={modalOpen === modalType.SelectCoreProduct}
        onSave={() => setModal(modalType.SelectQuantityOfSKU)}
        onClose={() => setModal(modalType.Close)}
      />

      <SelectQuantityOfSKUModal
        isOpen={modalOpen === modalType.SelectQuantityOfSKU}
        onSave={() => setModal(modalType.BundleKit)}
        onClose={() => setModal(modalType.Close)}
      />

      <NewVirtualProductModal
        isOpen={modalOpen == modalType.NewVirtualProduct}
        onSave={() => setModal(modalType.ProductVariants)}
        onClose={() => setModal(modalType.Close)}
      />

      <ProductVariantsModal
        isOpen={modalOpen == modalType.ProductVariants}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />

      <EditProductModal
        isOpen={modalOpen == modalType.Edit}
        onSave={() => {
          setModal(modalType.Close);
          handleUpdateProduct(editableProduct);
          setEditableProduct(null);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <ImportProductsModal
        isOpen={modalOpen == modalType.Import}
        onSave={() => {
          setModal(modalType.ImportExportSummary);
          setImportExportSummaryData({ title: 'Product Import', info: 'Product Import Summary' });
        }}
        onClose={() => setModal(modalType.Close)}
      />

      {/* Import Vendor Products */}
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

      {/* <ExportProductModal
        isOpen={modalOpen == modalType.Export}
        onSave={() => setModal(modalType.Export)}
        onClose={() => setModal(modalType.Close)}
      /> */}

      {/* Export Vendor Products */}
      <ExportVendorProductsModal
        isOpen={modalOpen == modalType.ExportVendorProducts}
        onSave={() => {}}
        onClose={() => setModal(modalType.Close)}
      />

      <NewProductModal
        isOpen={modalOpen == modalType.Variation}
        handleClick={(value) => {
          setModal(value);
          setEditableProduct(null);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <AdjustMasterSKUModal
        isOpen={modalOpen == modalType.AdjustMasterSKU}
        onSave={(master_sku) => {
          handleUpdateProduct({ ...editableProduct, master_sku });
          setEditableProduct([]);
          setModal(modalType.Close);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <ExportCustomBundleKitModal
        isOpen={modalOpen === modalType.ExportCustomBundleKit}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />
    </PageContainer>
  );
};

export default ProductManagement;
