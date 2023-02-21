import { OButton } from '@/components/Globals/OButton';
import { OInput } from '@/components/Globals/OInput';
import type { IOSelectOption } from '@/components/Globals/OSelect';
import POItemsFromCSVModal from '@/pages/PurchaseOrders/components/Modals/POItemsFromCSV';
import { EditableTable } from '@/utils/components/EditableTable';
import { CloseOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Form, Space } from 'antd';
import React, { useState } from 'react';

const AddNewPOItemTableColumns = [
  {
    title: '',
    dataIndex: 'removeBtn',
    key: 'removeBtn',
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Vendor SKU',
    dataIndex: 'vendorSku',
    key: 'vendorSku',
  },
  {
    title: 'Buyer.',
    dataIndex: 'buyer',
    key: 'buyer',
  },
  {
    title: 'Qty.',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Unit of Measure',
    dataIndex: 'unitMeasure',
    key: 'unitMeasure',
  },
  {
    title: 'Total Unit Qty.',
    dataIndex: 'totalUnitQty',
    key: 'totalUnitQty',
  },
  {
    title: 'Unit Cost',
    dataIndex: 'originalCost',
    key: 'unitCost',
    editable: true,
  },
  {
    title: 'Discount Type',
    dataIndex: 'discountType',
    key: 'discountType',
    editable: true,
  },
  {
    title: 'Discount',
    dataIndex: 'discount',
    key: 'discount',
    editable: true,
  },
];

const AddNewPOItemTable: React.FC = () => {
  const { selectedPO, addPoItem, addPoItems, removePoItem, updatePoItem } = useModel('po');
  const { productList } = useModel('product');
  const [poItem, setPoItem] = useState({});
  const [showModal, setShowModal] = useState(false);

  const unitMeasureOptions: IOSelectOption[] = [
    {
      text: 'Each',
      value: '1',
    },
    {
      text: 'Each',
      value: '2',
    },
  ];

  // store product to po model
  const handleAddNewPOProductItem = () => {
    addPoItem({ ...poItem, unitCost: 0, discountType: '$', discount: 0 });
    setPoItem({});
  };

  const handleInputChange = (name: any, value: any) =>
    setPoItem((prevState) => ({ ...prevState, [name]: value }));

  // add new product to poItems list form input fields
  const inputFields = [
    {
      type: 'select',
      label: 'Add Item',
      name: 'product',
      placeholder: 'Add Item',
      onChange: (name: any, value: any) =>
        handleInputChange(
          name,
          productList.find((item) => item.id === value),
        ),
      value: poItem.product?.id,
      options: productList.map((_product) => ({ text: _product.name, value: _product.id })),
      style: { width: 250 },
    },
    {
      type: 'number',
      label: 'Quantity',
      name: 'quantity',
      placeholder: 'Quantity',
      value: poItem.quantity,
      onChange: (name: any, value: any) => handleInputChange(name, value),
      style: { width: 70 },
    },
    {
      type: 'select',
      label: 'Unit of Measure',
      name: 'unitMeasure',
      placeholder: 'Unit of Measure',
      onChange: (name: any, value: any) => handleInputChange(name, value),
      value: poItem.unitMeasure,
      options: unitMeasureOptions,
      style: { width: 120 },
    },
  ];

  // prepare data table rows
  const rows = selectedPO.poItems.map((item: any, index: any) => ({
    key: index,
    removeBtn: (
      <div onClick={() => removePoItem(index)}>
        <CloseOutlined style={{ color: 'blue', cursor: 'pointer' }} />
      </div>
    ),
    product: item.product?.name,
    vendorSku: item.product?.vendorSku,
    quantity: item.quantity,
    unitMeasure: item.unitMeasure,
    totalUnitQty: item.totalUnitqQuantity,
    originalCost: item.originalCost,
    discountType: item.discountType,
    discount: item.discount,
  }));

  return (
    <>
      <div className="space-between" style={{ margin: '20px 0 8px' }}>
        <Form>
          <Space>
            {inputFields.map((inputItem, index) => (
              <Form.Item label={inputItem.label} key={index}>
                <OInput {...inputItem} />
              </Form.Item>
            ))}
            <OButton btnText="Add" onClick={handleAddNewPOProductItem} size="large" />
          </Space>
        </Form>
        <OButton btnText="Paste From CSV" size="large" onClick={() => setShowModal(true)} />
      </div>

      <EditableTable
        dataSource={rows}
        columns={AddNewPOItemTableColumns}
        handleSave={updatePoItem}
        pagination={false}
      />

      <POItemsFromCSVModal
        isOpen={showModal}
        onSave={(items) => {
          console.log('items: ', items);
          addPoItems(items);
          setShowModal(false);
        }}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default AddNewPOItemTable;
