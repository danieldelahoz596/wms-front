import React, { useState } from 'react';
import { OButton } from '@/components/Globals/OButton';
import { Table } from 'antd';
import { modalType } from '@/utils/helpers/types';
import AddCoreProductModal from '@/components/Modals/Product/AddCoreProduct';

interface IBundleItems {
  tableRows: any[];
}

const BundledItems: React.FC<IBundleItems> = ({ tableRows }) => {
  const [modal, setModal] = useState('');
  const [coreProductList, setCoreProductList] = useState(tableRows);
  const [selectedItem, setSelectedItem] = useState(null);
  const [buttonType, setButtonType] = useState('');

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

  const itemButtons = [
    {
      type: 'primary',
      onClick: handleAddCoreProductClick,
      btnText: 'Add Core Product',
    },
    {
      type: 'primary',
      onClick: handleEditCoreProductClick,
      btnText: 'Edit Quantity',
      disabled: !selectedItem,
    },
    {
      type: 'primary',
      onClick: handleRemoveClick,
      btnText: 'Remove',
      disabled: !selectedItem,
    },
  ];

  const tableColumns = [
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'MASTER SKU',
      dataIndex: 'masterSKU',
      key: 'masterSKU',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'QUANTITY',
      dataIndex: 'quantity',
      key: 'quantity',
    },
  ];

  return (
    <>
      <div>
        <div>
          <h3>Manage cord products and their respective quantities within this bundle/kit</h3>
        </div>

        {itemButtons.map((btn, index) => (
          <OButton key={index} {...btn} />
        ))}
        <div style={{ marginTop: '5px' }}>
          <Table
            columns={tableColumns}
            dataSource={coreProductList}
            pagination={false}
            onRow={(record, rowIndex) => {
              return {
                onClick: () => handleRowClick(record), // click row
              };
            }}
            rowClassName={(record) =>
              record.id === selectedItem ? `data-row active-row pb-3` : 'data-row'
            }
          />
        </div>
      </div>
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
