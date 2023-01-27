import { DownOutlined, RetweetOutlined, VerticalAlignTopOutlined } from '@ant-design/icons';
import {
  Button,
  message,
  Card,
  Row,
  Col,
  Dropdown,
  Popconfirm,
  Form,
  Select,
  Table,
  Switch,
  Space,
} from 'antd';
import React, { useState } from 'react';
import { modalType, productType } from '@/utils/helpers/types';
import { OTable } from '@/components/Globals/OTable';
import { OButton } from '@/components/Globals/OButton';
import type { MenuProps } from 'antd';

import CoreProductModal from '@/components/Modals/Product/CoreProduct';
import EditProductModal from '@/components/Modals/Product/EditProduct';
import ImportProductModal from '@/components/Modals/Product/ImportProduct';
import ExportProductModal from '@/components/Modals/Product/ExportProduct';
import NewProductModal from '@/components/Modals/Product/NewProduct';
import ExportVendorProductModal from '@/components/Modals/Product/ExportVendorProduct';
import ImportVendorProductModal from '@/components/Modals/Product/ImportVendorProduct';
import VendorProductImportByVendorModal from '@/components/Modals/Product/VendorProductImportByVendor';
import VendorProductImportAtOnceModal from '@/components/Modals/Product/VendorProductImportAtOnce';
import ImportSummaryModal from '@/components/Modals/Product/ImportSummary';
import BundleKitModal from '@/components/Modals/Product/BundleKit';
import ProductVariantsModal from '@/components/Modals/Product/ProductVariants';
import { PageContainer } from '@ant-design/pro-components';
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

  const handleProductSelectedRows = (_selectedRows = []) => {
    const selectedList = productList.filter((_item) => _selectedRows.includes(_item.id));
    setSelectedProducts(selectedList);
    setEditableProduct(selectedList.length === 0 ? null : selectedList[0]);
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
            <CoreProductsIcon style={{ fontSize: 32 }} />
          ) : text === productType.BundleOrKit ? (
            <BundleIcon style={{ fontSize: 32 }} />
          ) : text === productType.Variations ? (
            <VariationIcon style={{ fontSize: 32 }} />
          ) : (
            <span style={{ position: 'relative' }}>
              <CoreProductsIcon style={{ fontSize: 32 }} />
              <div style={{ position: 'absolute', top: -1, left: 18 }}>
                <VectorIcon style={{ fontSize: 18 }} />
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
      dataIndex: 'h/w/l',
      key: 'h/w/l',
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
  ];

  const importExportMenuOptions: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <span onClick={() => setModal(modalType.Import)}>
          <VerticalAlignTopOutlined style={{ marginRight: '10px' }} />
          Import Products
        </span>
      ),
    },
    {
      key: '3',
      label: (
        <span onClick={() => setModal(modalType.ImportVendorProducts)}>
          <VerticalAlignTopOutlined style={{ marginRight: '10px' }} />
          Import Vendor Products
        </span>
      ),
    },
    {
      key: '4',
      label: (
        <span onClick={() => setModal(modalType.ImportVendorProducts)}>
          <VerticalAlignTopOutlined style={{ marginRight: '10px' }} />
          Import SKU Adjustments
        </span>
      ),
    },
    {
      key: '5',
      label: (
        <span onClick={() => setModal(modalType.ImportVendorProducts)}>
          <VerticalAlignTopOutlined style={{ marginRight: '10px' }} />
          Import Custom Fields
        </span>
      ),
    },
    {
      key: '6',
      label: (
        <span onClick={() => setModal(modalType.Export)}>
          <VerticalAlignTopOutlined rotate={180} style={{ marginRight: '10px' }} />
          Export Products
        </span>
      ),
    },
    {
      key: '8',
      label: (
        <span onClick={() => setModal(modalType.ExportVendorProducts)}>
          <VerticalAlignTopOutlined rotate={180} style={{ marginRight: '10px' }} />
          Export Vendor Products
        </span>
      ),
    },
    {
      key: '9',
      label: (
        <span onClick={() => setModal(modalType.ExportVendorProducts)}>
          <VerticalAlignTopOutlined rotate={180} style={{ marginRight: '10px' }} />
          Custom Product Export
        </span>
      ),
    },
    {
      key: '10',
      label: (
        <span onClick={() => setModal(modalType.ExportVendorProducts)}>
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
                <Row>
                  <Col span={24}>
                    <Space size={10}>
                      <Button
                        type="primary"
                        onClick={() => setModal(modalType.AdjustMasterSKU)}
                        disabled={!editableProduct}
                      >
                        Adjust Sku
                      </Button>
                      <Popconfirm
                        title="Sure to convert to bundle/kit"
                        onConfirm={() => {
                          handleUpdateProduct({
                            ...editableProduct,
                            type: productType.BundleOrKit,
                          });
                          setEditableProduct(null);
                          setSelectedProducts([]);
                        }}
                      >
                        <Button
                          type="primary"
                          disabled={!(editableProduct?.type === productType.CoreProduct)}
                        >
                          Convert To Bundle/Kit
                        </Button>
                      </Popconfirm>
                      <Popconfirm
                        title="Sure to convert to Core"
                        onConfirm={() => {
                          handleUpdateProduct({
                            ...editableProduct,
                            type: productType.CoreProduct,
                          });
                          setEditableProduct(null);
                          setSelectedProducts([]);
                        }}
                      >
                        <Button
                          type="primary"
                          disabled={!(editableProduct?.type === productType.Variations)}
                        >
                          Convert To Core
                        </Button>
                      </Popconfirm>
                      <Popconfirm
                        title={`Sure to Convert to ${showActivate ? 'Activate' : 'Deactivate'}`}
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
                        <Button type="primary" disabled={selectedProducts.length === 0}>
                          {showActivate ? 'Deactivate' : 'Activate'}
                        </Button>
                      </Popconfirm>
                      <Button
                        type="primary"
                        onClick={() => console.log('History')}
                        disabled={selectedProducts.length === 0}
                      >
                        History
                      </Button>
                      <Button type="primary" onClick={() => setModal(modalType.Variation)}>
                        New Product
                      </Button>
                      <Dropdown menu={{ items: importExportMenuOptions }}>
                        <Button type="primary">
                          Import/Export <DownOutlined />
                        </Button>
                      </Dropdown>
                    </Space>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col span={24}>
                    <OTable
                      type="checkbox"
                      columns={Tcolumns}
                      rows={productList
                        .filter((_item) => _item.status == showActivate)
                        .map((_item) => ({ ..._item, key: _item.id }))}
                      selectedRows={selectedProducts.map((_item) => _item.id)}
                      setSelectedRows={handleProductSelectedRows}
                    />
                  </Col>
                </Row>
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
                    title="PRODUCT DETAILS"
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

      <CoreProductModal
        isOpen={modalOpen == modalType.New}
        onSave={(value: any) => setModal(value)}
        onClose={() => setModal(modalType.Close)}
      />

      <BundleKitModal
        isOpen={modalOpen == modalType.BundleKit}
        onSave={() => setModal(modalType.Close)}
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

      <ImportProductModal
        isOpen={modalOpen == modalType.Import}
        onSave={() => setModal(modalType.Import)}
        onClose={() => setModal(modalType.Close)}
      />

      <ExportProductModal
        isOpen={modalOpen == modalType.Export}
        onSave={() => setModal(modalType.Export)}
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

      <ImportVendorProductModal
        isOpen={modalOpen == modalType.ImportVendorProducts}
        onClick={(value: any) => setModal(value)}
        onClose={() => setModal(modalType.Close)}
      />

      <VendorProductImportByVendorModal
        isOpen={modalOpen == modalType.VendorProductImportByVendor}
        onSave={(value: any) => setModal(value)}
        onClose={() => setModal(modalType.Close)}
      />

      <VendorProductImportAtOnceModal
        isOpen={modalOpen == modalType.VendorProductImportOnce}
        onSave={(value: any) => setModal(value)}
        onClose={() => setModal(modalType.Close)}
      />

      <ImportSummaryModal
        isOpen={modalOpen == modalType.ImportVendorProductSummary}
        title={'VENDOR PRODUCT IMPORT BY VENDOR'}
        info={'Vendor SKU Import Summary'}
        onSave={() => {}}
        onClose={() => setModal(modalType.Close)}
      />

      <ExportVendorProductModal
        isOpen={modalOpen == modalType.ExportVendorProducts}
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
    </PageContainer>
  );
};

export default ProductManagement;
