import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { Form, Input } from 'antd';

interface ICreateCustomerModal {
  isOpen: boolean;
  onClose: () => void;
  onSave?: () => void;
}

const CreateCustomerModal: React.FC<ICreateCustomerModal> = ({ isOpen, onClose }) => {
  const [form] = Form.useForm();
  const { handleCreateCustomer } = useModel('customer');

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
        <Form.Item label="Phone Number" name="phonenumber" rules={[{ required: true, message: 'Please input Phone Number!' }]}>
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
};

export default CreateCustomerModal;
