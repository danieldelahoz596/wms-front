import { OButton } from '@/components/Globals/OButton';
import AddCoreProductModal from '@/pages/Products/MainPanel/Modals/AddCoreProduct';
import { FormattedMessage, useModel } from '@umijs/max';
import { Popconfirm, Space, Table } from 'antd';
import { useMemo, useState } from 'react';

const TColumns = [
  {
    title: '',
    dataIndex: 'product_id',
    key: 'id',
  },
  {
    title: <FormattedMessage id="component.table.column.masterSku" />,
    dataIndex: 'sku',
    key: 'sku',
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

const BundledItems: React.FC = () => {
  const { bundleItems, setBundleItems } = useModel('product');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const tableRows = useMemo(() => bundleItems?.map((item) => ({ ...item, key: item.product_id })), [bundleItems]);

  const handleAddCoreProductClick = () => {
    setModalOpen(true);
    setSelectedItemId(null);
  };

  const handleEditCoreProductClick = () => {
    setModalOpen(true);
  };

  const handleRemoveClick = () => {
    setBundleItems((prev) => prev.filter((item) => item.product_id !== selectedItemId));
  };

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
          disabled={!selectedItemId}
        />
        <Popconfirm
          title={<FormattedMessage id="pages.products.coreProduct.bundleItems.popconfirm.remove.title" />}
          onConfirm={() => handleRemoveClick()}
        >
          <OButton disabled={!selectedItemId} btnText={<FormattedMessage id="component.button.remove" />} />
        </Popconfirm>
      </Space>
      <Table
        columns={TColumns}
        dataSource={tableRows}
        pagination={false}
        onRow={(record) => {
          return {
            onClick: () => {
              if (record.key === selectedItemId) setSelectedItemId(null);
              else setSelectedItemId(record.key);
            }, // click row
          };
        }}
        rowClassName={(record) => (record.key === selectedItemId ? `ant-table-row-selected` : '')}
      />

      <AddCoreProductModal
        isOpen={modalOpen}
        onSave={() => {
          setModalOpen(false);
          setSelectedItemId(null);
        }}
        onClose={() => setModalOpen(false)}
        selectedItem={bundleItems?.find((item) => item.product_id === selectedItemId)}
      />
    </>
  );
};

export default BundledItems;
