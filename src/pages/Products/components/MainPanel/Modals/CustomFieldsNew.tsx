import React, { useEffect } from 'react';
import { Form, Input } from 'antd';
import { OModal } from '@/components/Globals/OModal';

interface ICustomFieldsNewModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: (values: any) => void;
}

const CustomFieldsNewModal: React.FC<ICustomFieldsNewModal> = ({ isOpen, onClose, onSave }) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields().then((values) => {
      onSave(values);
    });
  };

  useEffect(() => {
    form.setFieldsValue({ name: '', description: '' });
  }, [isOpen]);

  return (
    <OModal
      title="Add New Type"
      helpLink="/help/products/customproductfields"
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
          onClick: handleSave,
        },
      ]}
    >
      <Form form={form}>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Name is required' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Description is required' }]}>
          <Input />
        </Form.Item>
      </Form>
    </OModal>
  );
};

export default CustomFieldsNewModal;
