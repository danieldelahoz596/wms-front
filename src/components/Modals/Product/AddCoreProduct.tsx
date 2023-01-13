import { useModel } from '@umijs/max';
import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { OInput } from '@/components/Globals/OInput';

interface IAddProduct {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  coreProductList: any[];
  setCoreProductList: (product: any) => void;
  selectedItemKey: string;
  setSelectedItemKey: (key: any) => void;
  type: string;
}

const AddCoreProduct: React.FC<IAddProduct> = ({
  isOpen,
  onClose,
  onSave,
  coreProductList,
  setCoreProductList,
  selectedItemKey,
  setSelectedItemKey,
  type,
}) => {
  const { productList } = useModel('product');
  const [newCoreProduct, setNewCoreProduct] = useState({
    product: '',
    quantity: '',
  });

  const handleInputChange = (name, value) => {
    setNewCoreProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    if (type === 'add') {
      setNewCoreProduct({
        product: '',
        quantity: '',
      });
    }
    if (type === 'edit') {
      const item = coreProductList.find((item) => item.id === selectedItemKey);
      if (item) {
        setNewCoreProduct({
          product: item.id,
          quantity: item.quantity,
        });
      }
    }
  }, [isOpen]);

  const handleSave = () => {
    if (type === 'add') {
      const item = productList.find((item) => item.id === newCoreProduct.product);
      setCoreProductList([
        ...coreProductList,
        { ...item, masterSKU: item.master_sku, quantity: newCoreProduct.quantity },
      ]);
      setSelectedItemKey(null);
    }
    if (type === 'edit') {
      const product = productList.find((item) => item.id === newCoreProduct.product);
      setCoreProductList(
        coreProductList.map((item) =>
          item.id === selectedItemKey
            ? { ...item, masterSKU: product.master_sku, quantity: newCoreProduct.quantity }
            : item,
        ),
      );
      setSelectedItemKey(null);
    }
    onSave();
  };

  const coreProductInputFields = [
    {
      type: 'select',
      onChange: handleInputChange,
      label: 'Product:',
      name: 'product',
      defaultValue: newCoreProduct.product,
      value: newCoreProduct.product,
      options: productList.map((_item) => ({ value: _item.id, text: _item.name })),
      style: { width: '100%' },
    },
    {
      type: 'number',
      onChange: handleInputChange,
      label: 'quantity:',
      name: 'quantity',
      defaultValue: newCoreProduct.quantity,
      value: newCoreProduct.quantity,
    },
  ];

  return (
    <OModal
      title={'Add Core Product'}
      width={1000}
      centered
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Save',
          onClick: () => handleSave(),
        },
      ]}
    >
      <Form>
        {coreProductInputFields?.map((inputItem, index) => (
          <div key={`input-${index}`} style={{ padding: '0.5rem 0' }}>
            <div>{inputItem.label}</div>
            <OInput {...inputItem} />
          </div>
        ))}
      </Form>
    </OModal>
  );
};

export default AddCoreProduct;
