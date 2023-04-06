import { useModel } from '@umijs/max';
import React, { useEffect, useMemo } from 'react';
import { Form, Select, InputNumber, Space } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import type { IBundleItem } from '@/models/product';
import { productType } from '@/utils/helpers/types';

interface IAddCoreProductModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  selectedItem: IBundleItem | null;
}

const AddCoreProductModal: React.FC<IAddCoreProductModal> = ({ isOpen, onClose, onSave, selectedItem }) => {
  const { productList, bundleItems, setBundleItems } = useModel('product');
  const [form] = Form.useForm();

  const productSelectOptions = useMemo(
    () =>
      productList
        .filter((product) => product.type === productType.CoreProduct || product.type === productType.Variations)
        .map((product) => ({ value: product.id, label: product.name })),
    [productList],
  );

  useEffect(() => {
    if (selectedItem) {
      form.setFieldsValue(selectedItem);
    } else {
      form.resetFields();
    }
  }, [form, selectedItem, isOpen]);

  const handleSave = () => {
    form.validateFields().then((values) => {
      const bundleItem = bundleItems.find((item) => item.product_id === values.product_id);
      const product = productList.find((item) => item.id === values.product_id);
      if (!selectedItem) {
        if (!bundleItem) {
          setBundleItems((prev) => [
            ...prev,
            { product_id: product.id, name: product.name, sku: product.sku, quantity: values.quantity },
          ]);
        } else {
          setBundleItems((prev) =>
            prev.map((item) =>
              item.product_id === bundleItem.product_id ? { ...item, quantity: item.quantity + values.quantity } : item,
            ),
          );
        }
      } else {
        if (!bundleItem || (bundleItem && bundleItem.product_id === selectedItem.product_id)) {
          setBundleItems((prev) =>
            prev.map((item) =>
              item.product_id === selectedItem.product_id
                ? {
                    product_id: values.product_id,
                    sku: product.sku,
                    name: product.name,
                    quantity: values.quantity,
                  }
                : item,
            ),
          );
        } else {
          setBundleItems((prev) => {
            const index = prev.indexOf(selectedItem);
            if (index > -1) prev.splice(index, 1);
            return prev.map((item) =>
              item.product_id === values.product_id
                ? {
                    product_id: values.product_id,
                    sku: product.sku,
                    name: product.name,
                    quantity: values.quantity + item.quantity,
                  }
                : item,
            );
          });
        }
      }

      onSave();
    });
  };

  return (
    <OModal
      title="Add Core Product"
      helpLink="/help/products/create/bundlekit"
      width={400}
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
      <Form layout="vertical" form={form}>
        <Space size={10} direction="vertical" style={{ width: '100%' }}>
          <Form.Item label="Product" name="product_id">
            <Select options={productSelectOptions} />
          </Form.Item>
          <Form.Item label="Quantity" name="quantity">
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
        </Space>
      </Form>
    </OModal>
  );
};

export default AddCoreProductModal;
