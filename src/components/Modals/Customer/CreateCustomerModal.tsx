import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { Form, Input } from 'antd';

export default function CreateCustomerModal({ isOpen, onClose, onSave }) {
  const [form] = Form.useForm();
  const { onChangeNewCustomer, handleCreateCustomer } = useModel('customer');

  // new customer create modal handler
  const handleNewCustomerCreate = () => {
    handleCreateCustomer();
    onClose();
  };

  return (
    <OModal
      title="Create New Customer"
      helpLink="/help/customers/module"
      width={500}
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
          onClick: handleCreateCustomer,
        },
      ]}
    >
      <Form form={form} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
        <Form.Item
          label="Phone Number"
          name="phonenumber"
          rules={[{ required: true, message: 'Please input Phone Number!' }]}
        >
          <Input placeholder="Phone Number" />
        </Form.Item>
        <Form.Item
          label="Card ID Number"
          name="card_number"
          rules={[{ required: true, message: 'Please input Card ID Number!' }]}
        >
          <Input placeholder="Card ID Number" />
        </Form.Item>
        <Form.Item label="Address" name="address">
          <Input placeholder="Customer Address" />
        </Form.Item>
        <Form.Item label="Name" name="name">
          <Input placeholder="Customer Name" />
        </Form.Item>
      </Form>
    </OModal>
  );
}
