import React from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Input, Form } from 'antd';
import { useModel } from '@umijs/max';

interface IAdjustMasterSKU {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: string) => void;
}

const AdjustMasterSKU: React.FC<IAdjustMasterSKU> = ({ isOpen, onClose, onSave }) => {
  const { editableProduct } = useModel('product');
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields().then(({ master_sku }) => {
      onSave(master_sku);
    });
  };
  return (
    <OModal
      title={'New Core Product'}
      width={600}
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
          onClick: handleSave,
        },
      ]}
    >
      <>
        <p
          style={{
            backgroundColor: '#DFDFFF',
            border: 'solid',
            borderColor: 'blue',
            borderWidth: 1,
            padding: 5,
          }}
        >
          Please note that changing the master SKU for a product could have adverse effects on
          analytics and data integrity. Adjust the master SKU <u>only</u>. if you made a typo.
        </p>
        <Form form={form}>
          <Form.Item label="Current Master SKU">{editableProduct?.master_sku}</Form.Item>
          <Form.Item
            label="New Master SKU"
            name="master_sku"
            rules={[{ required: true, message: 'Please input Master SKU!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </>
    </OModal>
  );
};

export default AdjustMasterSKU;
