import { OButton } from '@/components/Globals/OButton';
import AddCoreProductModal from '@/pages/Products/MainPanel/Modals/AddCoreProduct';
import { modalType } from '@/utils/helpers/types';
import { FormattedMessage, useModel } from '@umijs/max';
import { Popconfirm, Space, Table } from 'antd';
import { useEffect, useState } from 'react';

interface IBundleItems {}

const BundledItems: React.FC<IBundleItems> = () => {
  const { selectedProducts, editableProduct } = useModel('product');
  const [modal, setModal] = useState('');
  const [coreProductList, setCoreProductList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [buttonType, setButtonType] = useState('');

  useEffect(() => {
    setCoreProductList(
      selectedProducts.map((product) => ({
        key: product.id,
        id: product.id,
        masterSKU: product.master_sku,
        name: product.name,
        quantity: product.quantity,
      })),
    );
  }, [selectedProducts]);

  useEffect(() => {
    if (!!editableProduct) {
      setCoreProductList(
        editableProduct.children?.map((product) => ({
          key: product.id,
          id: product.id,
          masterSKU: product.master_sku,
          name: product.name,
          quantity: product.quantity,
        })),
      );
    }
  }, [editableProduct]);

  const handleAddCoreProductClick = () => {
    setButtonType('add');
    setModal(modalType.AddCoreProduct);
  };

  const handleEditCoreProductClick = () => {
    setButtonType('edit');
    setModal(modalType.AddCoreProduct);
  };

  const handleRowClick = (record) => {
    setSelectedItem(record.id);
  };

  const handleRemoveClick = () => {
    setCoreProductList(coreProductList.filter((product) => product.id !== selectedItem));
  };

  const tableColumns = [
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: <FormattedMessage id="component.table.column.masterSku" />,
      dataIndex: 'masterSKU',
      key: 'masterSKU',
    },
    {
      title: <FormattedMessage id="component.table.column.name" />,
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: <FormattedMessage id="component.table.column.quantity" />,
      dataIndex: 'quantity',
      key: 'quantity',
    },
  ];

  return (
    <>
      <h2>
        <FormattedMessage id="pages.products.coreProduct.bundleItems.description" />
      </h2>
      <Space size={HORIZONTAL_SPACE_SIZE} className="button-row">
        <OButton btnText={<FormattedMessage id="component.button.addCoreProduct" />} onClick={handleAddCoreProductClick} />
        <OButton
          btnText={<FormattedMessage id="component.button.editQuantity" />}
          onClick={handleEditCoreProductClick}
          disabled={!selectedItem}
        />
        <Popconfirm
          title={<FormattedMessage id="pages.products.coreProduct.bundleItems.popconfirm.remove.title" />}
          onConfirm={() => handleRemoveClick()}
        >
          <OButton disabled={!selectedItem} btnText={<FormattedMessage id="component.button.remove" />} />
        </Popconfirm>
      </Space>
      <Table
        columns={tableColumns}
        dataSource={coreProductList}
        pagination={false}
        onRow={(record) => {
          return {
            onClick: () => handleRowClick(record), // click row
          };
        }}
        rowClassName={(record) => (record.id === selectedItem ? `data-row active-row` : 'data-row')}
      />

      <AddCoreProductModal
        isOpen={modal == modalType.AddCoreProduct}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
        coreProductList={coreProductList}
        setCoreProductList={setCoreProductList}
        selectedItemKey={selectedItem}
        setSelectedItemKey={setSelectedItem}
        type={buttonType}
      />
    </>
  );
};

export default BundledItems;
