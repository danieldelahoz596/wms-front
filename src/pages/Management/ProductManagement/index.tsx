import { DownOutlined, RetweetOutlined, VerticalAlignBottomOutlined, VerticalAlignTopOutlined } from '@ant-design/icons';
import { Button, message, Card, Row, Col, Dropdown, Popconfirm, Form, Select, Table, Switch, Space } from 'antd';
import React, { useState } from 'react';
import { modalType, productType } from '@/utils/helpers/types';
import { OTable } from '@/components/Globals/OTable';
import { OButton } from '@/components/Globals/OButton';
import type { MenuProps } from 'antd';

import CoreProductModal from '@/components/Modals/Product/CoreProduct';
import EditProductModal from '@/components/Modals/Product/EditProduct';
import ImportProductsModal from '@/components/Modals/Product/ImportProducts';
import ExportProductModal from '@/components/Modals/Product/ExportProduct';
import NewProductModal from '@/components/Modals/Product/NewProduct';
import ExportVendorProductsModal from '@/components/Modals/Product/ExportVendorProducts';
import ImportVendorProductsModal from '@/components/Modals/Product/ImportVendorProducts';
import ImportVendorProductsByVendor from '@/components/Modals/Product/ImportVendorProductsByVendor';
import ImportVendorProductsAll from '@/components/Modals/Product/ImportVendorProductsAll';
import ImportVendorProductsSummary from '@/components/Modals/Product/ImportVendorProductsSummary';
import NewBundleKitModal from '@/components/Modals/Product/NewBundleKit';
import ProductVariantsModal from '@/components/Modals/Product/ProductVariants';
import { getPageTitle, PageContainer } from '@ant-design/pro-components';
import { OInput } from '@/components/Globals/OInput';
import { cn, SampleSplitter } from '@/utils/components/SampleSplitter';
import { useResizable } from 'react-resizable-layout';
import { useModel } from '@umijs/max';
import SidePanel from './components/SidePanel/sidePanel';
import styles from './index.less';
import CoreProductsIcon from '@/utils/icons/coreProduct';
import BundleIcon from '@/utils/icons/bundle';
import VariationIcon from '@/utils/icons/variation';
import ShowProductFieldsModal from '@/components/Modals/Product/ShowProductFields';
import ShowGalleryModal from '@/components/Modals/Product/ShowGallery';
import ShowVendorProductModal from '@/components/Modals/Product/ShowVendorProduct';
import VectorIcon from '@/utils/icons/vector';
import AdjustMasterSKUModal from '@/components/Modals/Product/AdjustMasterSKU';
import ImportSKUAdjustment from '@/components/Modals/Product/ImportSKUAdjustment';
import NewVirtualProduct from '@/components/Modals/Product/NewVirtualProduct';
import SelectCoreProductModal from '@/components/Modals/Product/SelectCoreProduct';
import SelectQuantityOfSKUModal from '@/components/Modals/Product/SelectQuantityOfSKU';
import CustomBundleKitExport from '@/components/Modals/Product/CustomBundleKitExport';

const ProductManagement: React.FC = () => {
  const [modalOpen, setModal] = useState('');
  const [showActivate, setShowActivate] = useState(true);
  const {
    productList,
    selectedProducts,
    editableProduct,
    setSelectedProducts,
    setProductList,
    setEditableProduct,
    handleUpdateProduct,
  } = useModel('product');
  const { fieldTypes } = useModel('customProductFields');

  const handleProductSelectedRows = (_selectedRows = []) => {
    const selectedList = productList.filter((_item) => _selectedRows.includes(_item.id));
    setSelectedProducts(selectedList);
    setEditableProduct(selectedList.length === 0 ? null : selectedList[0]);
  };

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

  const Tcolumns = [
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
    {
      title: 'Action',
      dataIndex: '',
      render: (_, record) =>
        productList.length >= 1 ? (
          <>
            <a
              onClick={(event) => {
                event.stopPropagation();
                setEditableProduct(productList.find((_item) => _item.id === record.id));
                setModal(modalType.Edit);
              }}
            >
              Edit
            </a>{' '}
            &nbsp;&nbsp;
            <Popconfirm title="Sure to delete?" onConfirm={() => message.success('Deleted')}>
              <a>Delete</a>
            </Popconfirm>
          </>
        ) : null,
    },
  ].concat(
    fieldTypes
      .filter((type) => type.show_on_grid && type.active)
      .map((type) => ({
        title: type.name,
        key: type.name,
        render: () => <>{type.description}</>,
      })),
  );

  const importExportMenuItems: MenuProps['items'] = [
    {
      key: '1',
      label: (<span onClick={() => setModal(modalType.Import)}> Import Products </span>),
      icon: <VerticalAlignTopOutlined />,
    },
    {
      key: '2',
      label: (<span onClick={() => setModal(modalType.ImportVendorProducts)}>Import Vendor Products</span>),
      icon: <VerticalAlignTopOutlined />,
    },
    {
      key: '3',
      label: (<span onClick={() => setModal(modalType.ImportSKUAdjustment)}>Import SKU Adjustments</span>),
      icon: <VerticalAlignTopOutlined />,
    },
    {
      key: '4',
      label: (<span onClick={() => setModal(modalType.ImportVendorProducts)}>Import Custom Fields</span>),
      icon: <VerticalAlignTopOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: '5',
      label: (<span onClick={() => setModal(modalType.Export)}>Export Products</span>),
      icon: <VerticalAlignBottomOutlined />,
    },
    {
      key: '6',
      label: (<span onClick={() => setModal(modalType.ExportVendorProducts)}>Export Vendor Products</span>),
      icon: <VerticalAlignBottomOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: '7',
      label: (<span onClick={() => setModal(modalType.ExportVendorProducts)}>Custom Product Export</span>),
      icon: <VerticalAlignBottomOutlined />,
    },
    {
      key: '10',
      label: (
        <span onClick={() => setModal(modalType.CustomBundleKitExport)}>
          <VerticalAlignTopOutlined rotate={180} style={{ marginRight: '10px' }} />
          Custom Bundle/Kit Export
        </span>
      ),
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
            <SidePanel />
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
                      setSelectedProducts([]);
                    }}
                    value={showActivate ? 'active' : 'inactive'}
                  />
                  <Button icon={<RetweetOutlined />} type="primary" />
                </div>
              </Row>
              <Card style={{ width: '100%' }}>
                <Space size={5}>
                  <OButton 
                    btnText="Adjust Sku"
                    onClick={() => setModal(modalType.AdjustMasterSKU)}
                    disabled={!editableProduct} />
                  <Popconfirm
                    title="Sure to convert to bundle/kit?"
                    onConfirm={() => {
                      handleUpdateProduct({
                        ...editableProduct,
                        type: productType.BundleOrKit,
                      });
                      setEditableProduct(null);
                      setSelectedProducts([]);
                    }}
                  >
                    <OButton
                      btnText="Convert To Bundle/Kit"
                      disabled={!(editableProduct?.type === productType.CoreProduct)} />
                  </Popconfirm>
                  <Popconfirm
                    title="Sure to convert to Core?"
                    onConfirm={() => {
                      handleUpdateProduct({
                        ...editableProduct,
                        type: productType.CoreProduct,
                      });
                      setEditableProduct(null);
                      setSelectedProducts([]);
                    }}
                  >
                    <OButton
                      btnText="Convert To Core"
                      disabled={!(editableProduct?.type === productType.Variations)} />
                  </Popconfirm>
                  <Popconfirm
                    title={`Sure to Convert to ${showActivate ? 'Deactivate' : 'Activate'}`}
                    onConfirm={() => {
                      setSelectedProducts([]);
                      const selectedKeys = selectedProducts.map((_item) => _item.id);
                      setProductList(
                        productList.map((_product) =>
                          selectedKeys.includes(_product.id)
                            ? { ..._product, status: !showActivate }
                            : _product,
                        ),
                      );
                    }}
                  >
                    <OButton 
                      btnText={showActivate ? 'Deactivate' : 'Activate'} 
                      disabled={selectedProducts.length === 0} />
                  </Popconfirm>
                  <OButton
                    type="primary"
                    onClick={() => console.log('History')}
                    disabled={selectedProducts.length === 0} btnText="History" />
                  <OButton 
                    btnText={'New Product'} 
                    onClick={() => setModal(modalType.Variation)} /> 
                  <Dropdown menu={{ items: importExportMenuItems }}>
                    <Button type="primary" size='small'>
                      <Space>
                        Import/Export <DownOutlined />
                      </Space>
                    </Button>
                  </Dropdown>
                </Space>
                
                <OTable
                  type="checkbox"
                  columns={Tcolumns}
                  rows={productList
                    .filter((_item) => _item.status == showActivate)
                    .map((_item) => ({ ..._item, key: _item.id }))}
                  selectedRows={selectedProducts.map((_item) => _item.id)}
                  setSelectedRows={handleProductSelectedRows}
                  style={{ marginTop: 10 }}
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
              <Row gutter={32}>
                <Col span={12}>
                  <Card
                    title="Performance"
                    extra={
                      <div>
                        <OButton type="primary" btnText={'Year-Over-Year'} />
                        <OButton type="primary" btnText={'Recent Orders'} />
                      </div>
                    }
                  >
                    <Form style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                      <Form.Item>
                        <OInput
                          type="select"
                          name="days"
                          defaultValue={'30'}
                          options={[
                            {
                              value: '30',
                              text: '30 Days',
                            },
                          ]}
                          onChange={() => {}}
                        />
                      </Form.Item>
                      <Form.Item>
                        <OInput
                          type="select"
                          name="quantity"
                          defaultValue={'30'}
                          options={[
                            {
                              value: 'quantitySold',
                              text: 'Quantity Solds',
                            },
                          ]}
                          onChange={() => {}}
                        />
                      </Form.Item>
                    </Form>
                    <div style={{ textAlign: 'center', padding: '1rem' }}>
                      Select a product to view performance
                    </div>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card
                    title="Product Details"
                    extra={
                      <div style={{ display: selectedProducts.length > 1 ? 'none' : 'inline' }}>
                        <OButton
                          type="primary"
                          btnText={'Fields'}
                          onClick={() => setModal(modalType.ShowProductFields)}
                          disabled={selectedProducts.length === 0}
                        />
                        <OButton
                          type="primary"
                          btnText={'Vendor Products'}
                          onClick={() => setModal(modalType.ShowVendorProduct)}
                          disabled={selectedProducts.length === 0}
                        />
                        <OButton
                          type="primary"
                          btnText={'Gallery'}
                          onClick={() => setModal(modalType.ShowGallery)}
                          disabled={selectedProducts.length === 0}
                        />
                      </div>
                    }
                  >
                    <Table
                      columns={[
                        {
                          key: 'pushInventory',
                          dataIndex: 'pushInventory',
                          title: 'Push Inventory',
                          render: (pushInventory, record) => {
                            return (
                              <>
                                <Switch
                                  size="small"
                                  className={pushInventory ? styles.checked : styles.unchecked}
                                  onClick={() => {
                                    const item = productList.find(
                                      (_item) => _item.id === record.id,
                                    );
                                    handleUpdateProduct({
                                      ...item,
                                      push_inventory: !pushInventory,
                                    });
                                    setSelectedProducts(
                                      selectedProducts.map((_item) =>
                                        _item.id === record.id
                                          ? { ..._item, push_inventory: !pushInventory }
                                          : _item,
                                      ),
                                    );
                                  }}
                                  checked={!pushInventory}
                                />
                                {pushInventory ? 'YES' : 'NO'}
                              </>
                            );
                          },
                        },
                      ]}
                      dataSource={selectedProducts.map((_item) => ({
                        key: _item.id,
                        id: _item.id,
                        pushInventory: _item.push_inventory,
                      }))}
                      scroll={{ y: 150 }}
                    />
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>

      <NewProductModal
        isOpen={modalOpen == modalType.Variation}
        handleClick={(value) => {
          setModal(value);
          setSelectedProducts([]);
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
        onSave={() => {
          setModal(modalType.Close);
          setSelectedProducts([]);
        }}
        onClose={() => {
          setModal(modalType.Close);
          setSelectedProducts([]);
        }}
      />

      <SelectCoreProductModal
        isOpen={modalOpen === modalType.SelectCoreProduct}
        onSave={() => setModal(modalType.SelectQuantityOfSKU)}
        onClose={() => {
          setModal(modalType.Close);
          setSelectedProducts([]);
        }}
      />

      <SelectQuantityOfSKUModal
        isOpen={modalOpen === modalType.SelectQuantityOfSKU}
        onSave={() => setModal(modalType.BundleKit)}
        onClose={() => {
          setModal(modalType.Close);
          setSelectedProducts([]);
        }}
      />

      <NewVirtualProduct
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
          setSelectedProducts([]);
          setEditableProduct(null);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <ImportProductsModal
        isOpen={modalOpen == modalType.Import}
        onSave={() => setModal(modalType.Import)}
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
          setSelectedProducts([]);
          setEditableProduct(null);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      {/* Import Vendor Products */}
      <ImportVendorProductsModal
        isOpen={modalOpen == modalType.ImportVendorProducts}
        onClick={(value: any) => setModal(value)}
        onClose={() => setModal(modalType.Close)}
      />

      <ImportVendorProductsByVendor
        isOpen={modalOpen == modalType.ImportVendorProductsByVendor}
        onSave={(value: any) => setModal(value)}
        onClose={() => setModal(modalType.Close)}
      />

      <ImportVendorProductsAll
        isOpen={modalOpen == modalType.ImportVendorProductsAll}
        onSave={(value: any) => setModal(value)}
        onClose={() => setModal(modalType.Close)}
      />

      <ImportVendorProductsSummary
        isOpen={modalOpen == modalType.ImportVendorProductsSummary}
        title={'Vendor Product Import By Vendor'}
        info={'Vendor SKU Import Summary'}
        onSave={() => {}}
        onClose={() => setModal(modalType.Close)}
      />

      <ShowProductFieldsModal
        isOpen={modalOpen == modalType.ShowProductFields}
        onClose={() => setModal(modalType.Close)}
      />

      <ShowGalleryModal
        isOpen={modalOpen == modalType.ShowGallery}
        onClose={() => setModal(modalType.Close)}
      />

      <ShowVendorProductModal
        isOpen={modalOpen == modalType.ShowVendorProduct}
        onClose={() => setModal(modalType.Close)}
      />

      <AdjustMasterSKUModal
        isOpen={modalOpen == modalType.AdjustMasterSKU}
        onSave={(master_sku) => {
          handleUpdateProduct({ ...editableProduct, master_sku });
          setEditableProduct([]);
          setSelectedProducts([]);
          setModal(modalType.Close);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <ImportSKUAdjustment
        isOpen={modalOpen == modalType.ImportSKUAdjustment}
        onSave={() => {}}
        onClose={() => setModal(modalType.Close)}
      />

      <CustomBundleKitExport
        isOpen={modalOpen === modalType.CustomBundleKitExport}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />
    </PageContainer>
  );
};

export default ProductManagement;
