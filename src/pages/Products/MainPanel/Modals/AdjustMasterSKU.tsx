import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { Alert, Form, Input } from 'antd';
import React, { useEffect } from 'react';

interface IAdjustMasterSKUModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const AdjustMasterSKUModal: React.FC<IAdjustMasterSKUModal> = ({ isOpen, onClose, onSave }) => {
  const { editableProduct, updateProductSKU } = useModel('product');
  const [form] = Form.useForm();

  useEffect(() => {
    if (isOpen) {
      form.resetFields();
    }
  }, [isOpen, form]);

  const handleSave = () => {
    form.validateFields().then(({ master_sku }) => {
      updateProductSKU(editableProduct.id, master_sku).then(() => {
        onSave();
      });
    });
  };

  return (
    <OModal
      title="Adjust Master SKU"
      helpLink="/help/products/manage"
      width={350}
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
          onClick: handleSave,
        },
      ]}
    >
      <>
        <Alert
          description="Please note that changing the master SKU for a product could have adverse effects on
              analytics and data integrity. Adjust the master SKU <u>only</u>. if you made a typo."
        />
        <Form form={form} labelCol={{ span: 10 }}>
          <Form.Item label="Current Master SKU">{editableProduct?.sku}</Form.Item>
          <Form.Item
            label="New Master SKU"
            name="master_sku"
            rules={[{ required: true, message: 'Please input a New Master SKU!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </>
    </OModal>
  );
};

export default AdjustMasterSKUModal;
