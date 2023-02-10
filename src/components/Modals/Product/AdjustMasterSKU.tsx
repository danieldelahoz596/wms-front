import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { Alert, Form, Input } from 'antd';
import React from 'react';

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
      title={'Adjust Master SKU'}
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
        <Form form={form}>
          <Form.Item label="Current Master SKU" labelCol={{ span: 10 }}>
            {editableProduct?.master_sku}
          </Form.Item>
          <Form.Item
            label="New Master SKU"
            name="master_sku"
            labelCol={{ span: 11 }}
            rules={[{ required: true, message: 'Please input a New Master SKU!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </>
    </OModal>
  );
};

export default AdjustMasterSKU;
