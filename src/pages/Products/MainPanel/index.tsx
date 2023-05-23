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
import { Button, Card, Dropdown, Popconfirm, Select, Space, Table, Tooltip, Badge, message } from 'antd';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import ImportExportSummaryModal from '@/components/Modals/ImportExportSummary';
import BundleIcon from '@/utils/icons/bundle';
import CoreProductsIcon from '@/utils/icons/coreProduct';
import VariationIcon from '@/utils/icons/variation';
import VectorIcon from '@/utils/icons/vector';
import { FormattedMessage, useModel } from '@umijs/max';
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
import VirtualProductEditModal from './Modals/VirtualProductEdit';
import ProductHistoryModal from './Modals/History';
// import EditProductModal from './components/Modals/EditProduct';
// import NewVirtualProductModal from './components/Modals/NewVirtualProduct';

const MainPanel: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [modalOpen, setModal] = useState('');
  const {
    productList,
    editableProduct,
    getProductList,
    updateProductStatus,
    setEditableProduct,
    handleUpdateProduct,
    showActive,
    setShowActive,
    handleExportProductsToCSV,
  } = useModel('product');
  // const { fieldTypes } = useModel('customProductFields');
  const { getVendorProductImportExportSummary } = useModel('exportSummary');
  const [importExportSummaryData, setImportExportSummaryData] = useState({ title: '', info: '' });
  const [virtualProductData, setVirtualProductData] = useState(null);

  useEffect(() => {
    getProductList();
  }, [getProductList]);

  const handleMasterSkuClick = useCallback(
    (event, record) => {
      event.stopPropagation();
      if (record.type === productType.VirtualProduct) setModal(modalType.VirtualProductEdit);
      else if (record.type === productType.BundleOrKit) setModal(modalType.BundleKit);
      else setModal(modalType.CoreProduct);
      setEditableProduct(record);
    },
    [setEditableProduct],
  );

  const exportProductDataToCSV = useCallback(() => {
    setModal(modalType.Export);
    handleExportProductsToCSV().then((data) => {
      const url = window.URL.createObjectURL(new Blob([data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'products.csv');
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }, [handleExportProductsToCSV]);

  const importExportMenuItems: ItemType[] = [
    {
      key: '1',
      label: (
        <span onClick={() => setModal(modalType.Import)}>
          <FormattedMessage id="component.button.importProducts" />
        </span>
      ),
      icon: <VerticalAlignTopOutlined />,
    },
    {
      key: '2',
      label: (
        <span onClick={() => setModal(modalType.ImportVendorProducts)}>
          <FormattedMessage id="component.button.importVendorProducts" />
        </span>
      ),
      icon: <VerticalAlignTopOutlined />,
    },
    {
      key: '3',
      label: (
        <span onClick={() => setModal(modalType.ImportSKUAdjustment)}>
          <FormattedMessage id="component.button.importSkuAdjustments" />
        </span>
      ),
      icon: <VerticalAlignTopOutlined />,
    },
    {
      key: '4',
      label: (
        <span onClick={() => setModal(modalType.ImportCustomFields)}>
          <FormattedMessage id="component.button.importCustomFields" />
        </span>
      ),
      icon: <VerticalAlignTopOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: '5',
      label: (
        <span data-href={`${BACKEND_URL || 'http://127.0.0.1:8000'}/api/products/export-csv`} onClick={exportProductDataToCSV}>
          <FormattedMessage id="component.button.exportProducts" />
        </span>
      ),
      icon: <VerticalAlignBottomOutlined />,
    },
    {
      key: '6',
      label: (
        <span onClick={() => setModal(modalType.ExportVendorProducts)}>
          <FormattedMessage id="component.button.exportVendorProducts" />
        </span>
      ),
      icon: <VerticalAlignBottomOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: '7',
      label: (
        <span onClick={() => setModal(modalType.ExportVendorProducts)}>
          <FormattedMessage id="component.button.customProductExport" />
        </span>
      ),
      icon: <VerticalAlignBottomOutlined />,
      disabled: true,
    },
    {
      key: '8',
      label: (
        <span onClick={() => setModal(modalType.ExportCustomBundleKit)}>
          <FormattedMessage id="component.button.cutomBundleKitExport" />
        </span>
      ),
      icon: <VerticalAlignBottomOutlined />,
    },
  ];

  const TColumns = useMemo(
    () => [
      {
        key: 'expand',
        title: '',
        width: 30,
      },
      {
        title: <FormattedMessage id="component.table.column.type" />,
        dataIndex: 'type',
        key: 'type',
        align: 'center' as const,
        render: (text: any, record) => {
          return (
            <>
              {text === productType.Variations || (text === productType.CoreProduct && record.children_item) ? (
                <ReturnDownForwardIcon fill="blue" style={{ fontSize: 24 }} />
              ) : text === productType.BundleOrKit ? (
                <Tooltip placement="bottomLeft" title="Bundle/Kit">
                  <BundleIcon style={{ fontSize: 24 }} />
                </Tooltip>
              ) : text === productType.VirtualProduct ? (
                <VariationIcon style={{ fontSize: 24 }} />
              ) : text === productType.CoreProduct ? (
                <CoreProductsIcon style={{ fontSize: 24 }} />
              ) : (
                <span style={{ position: 'relative' }}>
                  <CoreProductsIcon style={{ fontSize: 24 }} />
                  <div style={{ position: 'absolute', top: 3, left: 12 }}>
                    <VectorIcon style={{ fontSize: 14 }} />
                  </div>
                </span>
              )}
            </>
          );
        },
      },
      {
        title: <FormattedMessage id="component.table.column.masterSku" />,
        dataIndex: 'sku',
        key: 'sku',
        render: (sku, record) => (
          <a onClick={(event) => handleMasterSkuClick(event, record)} style={{ display: 'flex', alignItems: 'center' }}>
            {record.type === productType.Variations && (
              <Tooltip placement="bottomLeft" title="Variation Core Product">
                <VectorIcon style={{ fontSize: 14, marginRight: 5 }} />
              </Tooltip>
            )}
            {record.type === productType.CoreProduct && record.children_item && (
              <Badge count={`x${record.quantity}`} color="blue" size="small" style={{ marginRight: 5 }} />
            )}
            <u>{sku}</u>
          </a>
        ),
      },
      {
        title: <FormattedMessage id="component.table.column.name" />,
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: <FormattedMessage id="component.table.column.desc" />,
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: <FormattedMessage id="component.table.column.brand" />,
        dataIndex: ['brand', 'name'],
        key: 'brand',
      },
      {
        title: <FormattedMessage id="component.table.column.categories" />,
        dataIndex: ['category', 'name'],
        key: 'categories',
      },
      {
        title: <FormattedMessage id="component.table.column.labels" />,
        dataIndex: ['label', 'name'],
        key: 'labels',
      },
      {
        title: <FormattedMessage id="component.table.column.weight" />,
        key: 'weight',
        render: (value, record) => {
          return <>{record.pound && record.ounce ? `${record.pound + record.ounce / 12.0}` : ''}</>;
        },
      },
      {
        title: <FormattedMessage id="component.table.column.hwl" />,
        key: 'h/w/l',
        render: (value, record) => {
          return <>{record.width && record.height && record.length ? `${record.width}/${record.height}/${record.length}` : ''}</>;
        },
      },
      // {
      //   title: 'Publishment',
      //   dataIndex: 'post_status',
      //   key: 'publishment',
      //   align: 'center' as const,
      //   render: (post_status) =>
      //     post_status == true ? <Badge color="blue" count="Published" /> : <Badge count="Not Published" />,
      // },
    ],
    [handleMasterSkuClick],
  );
  // .concat(
  //   fieldTypes
  //     .filter((type) => type.show_on_grid && type.active)
  //     .map((type) => ({
  //       title: type.name,
  //       key: type.id,
  //       dataIndex: type.id,
  //     })),
  // )

  const productTableRows = useMemo(
    () =>
      productList
        .filter((_item) => _item.status == showActive)
        .map((_item) => {
          const row = { ..._item, key: _item.id };
          if (_item.children)
            row.children = _item.children.map((childrenItem) => ({
              ...childrenItem,
              children_item: true,
              key: `${_item.id}-${childrenItem.id}`,
            }));

          _item.custom_fields.forEach((item) => {
            row[item.field_id] = item.value;
          });
          return row;
        }),
    [productList, showActive],
  );

  // const handlePublishToStore = useCallback(() => {
  //   updatePostStatus(editableProduct.id).then(() => {
  //     messageApi.open({
  //       type: 'success',
  //       content: 'Publishing to the store is successful.',
  //     });
  //     setEditableProduct(null);
  //   });
  // }, [editableProduct, messageApi, updatePostStatus, setEditableProduct]);

  return (
    <>
      {contextHolder}
      <div className="title-row">
        <h1 className="page-title">
          <FormattedMessage id="pages.products.mainPage.title" /> ::{' '}
        </h1>
        <div>
          <Select
            options={[
              { label: <FormattedMessage id="component.select.options.active" />, value: 'active' },
              { label: <FormattedMessage id="component.select.options.inactive" />, value: 'inactive' },
            ]}
            defaultValue="active"
            size="small"
            style={{ width: '100px', marginLeft: '5px' }}
            onChange={(value) => {
              setShowActive(value === 'active' ? true : false);
              setEditableProduct(null);
            }}
            value={showActive ? 'active' : 'inactive'}
          />
          <Button icon={<RetweetOutlined />} />
        </div>
      </div>
      <Card className="content-box">
        <Space size={HORIZONTAL_SPACE_SIZE} className="button-row">
          <OButton
            btnText={<FormattedMessage id="component.button.adjustSku" />}
            onClick={() => setModal(modalType.AdjustMasterSKU)}
            disabled={!editableProduct}
          />
          <Popconfirm
            title={<FormattedMessage id="pages.products.mainPag.convertToBundleKit.title" />}
            onConfirm={() => {
              handleUpdateProduct({
                ...editableProduct,
                type: productType.BundleOrKit,
              });
              setEditableProduct(null);
            }}
          >
            <OButton
              btnText={<FormattedMessage id="component.button.converrtToBundleKit" />}
              disabled={!editableProduct || !(editableProduct?.type === productType.CoreProduct)}
            />
          </Popconfirm>
          <Popconfirm
            title={<FormattedMessage id="pages.products.mainPag.convertToCore.title" />}
            onConfirm={() => {
              handleUpdateProduct({
                ...editableProduct,
                type: productType.CoreProduct,
              });
              setEditableProduct(null);
            }}
          >
            <OButton
              btnText={<FormattedMessage id="component.button.converrtToCore" />}
              disabled={!editableProduct || !(editableProduct?.type === productType.Variations)}
            />
          </Popconfirm>
          {/* <Popconfirm title="Do you really want to publish this product to store?" onConfirm={handlePublishToStore}>
            <OButton
              btnText="Publish To Store"
              disabled={!editableProduct || editableProduct?.post_status == true}
              hidden={!showActive}
            />
          </Popconfirm> */}
          <Popconfirm
            title={
              showActive ? (
                <FormattedMessage id="pages.products.mainPag.deactivate.title" />
              ) : (
                <FormattedMessage id="pages.products.mainPag.activate.title" />
              )
            }
            onConfirm={() => {
              updateProductStatus(editableProduct.id, !showActive);
              setEditableProduct(null);
            }}
          >
            <OButton
              btnText={
                showActive ? (
                  <FormattedMessage id="component.button.deactivate" />
                ) : (
                  <FormattedMessage id="component.button.activate" />
                )
              }
              disabled={!editableProduct}
            />
          </Popconfirm>
          <OButton
            type="primary"
            onClick={() => setModal(modalType.History)}
            disabled={!editableProduct}
            btnText={<FormattedMessage id="component.button.history" />}
          />
          <OButton
            btnText={<FormattedMessage id="component.button.newProduct" />}
            onClick={() => setModal(modalType.Variation)}
          />
          <Dropdown menu={{ items: importExportMenuItems }}>
            <Button size="small">
              <Space>
                <FormattedMessage id="component.button.importExport" /> <DownOutlined />
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
        onSave={() => {
          setEditableProduct(null);
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
        title={editableProduct?.sku}
        onSave={(value: any) => {
          setModal(value);
          // setEditableProduct(null);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <VirtualProductEditModal
        isOpen={modalOpen == modalType.VirtualProductEdit}
        onSave={() => setModal(modalType.Close)}
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

      <ProductVariationsModal
        isOpen={modalOpen == modalType.ProductVariations}
        onSave={(values) => {
          setModal(modalType.ProductVariants);
          setVirtualProductData(values);
        }}
        onClose={() => setModal(modalType.Close)}
      />

      <ProductVariationsDetailsModal
        isOpen={modalOpen == modalType.ProductVariants}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
        virtualProductData={virtualProductData}
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

      <ProductHistoryModal isOpen={modalOpen === modalType.History} onClose={() => setModal(modalType.Close)} />
    </>
  );
};

export default MainPanel;
