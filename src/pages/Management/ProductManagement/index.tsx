import Icon from '@ant-design/icons';
import { Button, message, Card, Row, Col, Dropdown, Popconfirm, Form } from 'antd';
import React, { useState } from 'react';
import { modalType } from '@/utils/helpers/types';
import { OTable } from '@/components/Globals/OTable';
import type { IOButton } from '@/components/Globals/OButton';
import { OButton } from '@/components/Globals/OButton';
import type { MenuProps } from 'antd';

import CoreProductModal from '@/components/Modals/Product/CoreProduct';
import NewVendorProductModal from '@/components/Modals/Product/NewVendorProduct';
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

const ProductManagement: React.FC = () => {
  const [modalOpen, setModal] = useState('');
  const { productList } = useModel('product');

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
    initial: 400,
    min: 50,
    reverse: true,
  });

  const Tcolumns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'MASTER SKU',
      dataIndex: 'master_sku',
      key: 'master_sku',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Buyer',
      dataIndex: 'buyer',
      key: 'buyer',
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
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      dataIndex: '',
      render: () =>
        productList.length >= 1 ? (
          <>
            <a onClick={() => setModal(modalType.Edit)}>Edit</a> &nbsp;&nbsp;
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
      label: <span onClick={() => setModal(modalType.Import)}>Import Products</span>,
    },
    {
      key: '3',
      label: (
        <span onClick={() => setModal(modalType.ImportVendorProducts)}>Import Vendor Products</span>
      ),
    },
    {
      key: '4',
      label: 'Import SKU Adjustments',
    },
    {
      key: '5',
      label: 'Import Custom Fields',
    },
    {
      key: '6',
      label: <span onClick={() => setModal(modalType.Export)}>Export Products</span>,
    },
    {
      key: '8',
      label: (
        <span onClick={() => setModal(modalType.ExportVendorProducts)}>Export Vendor Products</span>
      ),
    },
    {
      key: '9',
      label: 'Custom Product Export',
    },
    {
      key: '10',
      label: 'Custom Bundle/Kit Export',
    },
  ];

  const actionButtons: IOButton[] = [
    {
      type: 'dashed',
      onClick: () => console.log('Adjust Sku'),
      btnText: 'Adjust Sku',
      hidden: false,
    },
    {
      type: 'dashed',
      onClick: () => console.log('Convert To Bundle/Kit'),
      btnText: 'Convert To Bundle/Kit',
      hidden: false,
    },
    {
      type: 'dashed',
      onClick: () => console.log('Convert To Core'),
      btnText: 'Convert To Core',
      hidden: false,
    },
    {
      type: 'dashed',
      onClick: () => console.log('Deactivate'),
      btnText: 'Deactivate',
      hidden: false,
    },
    {
      type: 'dashed',
      onClick: () => console.log('History'),
      btnText: 'History',
      hidden: false,
    },
    {
      type: 'dashed',
      onClick: () => setModal(modalType.Variation),
      btnText: 'New Product',
      hidden: false,
    },
    {
      type: 'dashed',
      btnText: (
        <Dropdown menu={{ items: importExportMenuOptions }}>
          <Button type="dashed">
            Import/Export <Icon type="down" />
          </Button>
        </Dropdown>
      ),
      hidden: false,
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
          <div className="horizon-content">
            <Card style={{ width: '100%' }}>
              <Row>
                <Col span={24}>
                  {actionButtons.map((btn, index) => (
                    <OButton key={index} {...btn} />
                  ))}
                </Col>
              </Row>
              <br />
              <Row>
                <Col span={24}>
                  <OTable columns={Tcolumns} rows={productList} type={'checkbox'} />
                </Col>
              </Row>
            </Card>
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
                    title="PERFORMANCE"
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
                      <div>
                        <OButton type="primary" btnText={'Fields'} />
                        <OButton type="primary" btnText={'Active Listing'} />
                        <OButton type="primary" btnText={'Vendor Products'} />
                        <OButton type="primary" btnText={'Gallery'} />
                      </div>
                    }
                  >
                    <OTable
                      columns={[
                        {
                          key: 'channel',
                          dataIndex: 'channel',
                          title: 'Channel',
                        },
                        {
                          key: 'pushInventory',
                          dataIndex: 'pushInventory',
                          title: 'Push Inventory',
                        },
                      ]}
                      rows={[]}
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

      <NewVendorProductModal
        isOpen={modalOpen == modalType.NewVendorProduct}
        onSave={() => {}}
        onClose={() => setModal(modalType.Close)}
      />

      <EditProductModal
        isOpen={modalOpen == modalType.Edit}
        onSave={() => setModal(modalType.Close)}
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
        handleClick={(value) => setModal(value)}
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
    </PageContainer>
  );
};

export default ProductManagement;
