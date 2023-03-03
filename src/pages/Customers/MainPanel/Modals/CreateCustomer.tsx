import { OModal } from '@/components/Globals/OModal';
import { FormattedMessage, useModel } from '@umijs/max';
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
      title={<FormattedMessage id="pages.customers.new.title" />}
      helpLink="/help/customers/module"
      width={500}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: <FormattedMessage id="component.button.cancel" />,
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: <FormattedMessage id="component.button.save" />,
          onClick: handleCreateCustomer,
        },
      ]}
    >
      <Form form={form} labelCol={{ span: 7 }} wrapperCol={{ span: 17 }}>
        <Form.Item
          label={<FormattedMessage id="component.form.label.phoneNumber" />}
          name="phonenumber"
          rules={[{ required: true, message: 'Please input Phone Number!' }]}
        >
          <Input placeholder="Phone Number" />
        </Form.Item>
        <Form.Item
          label={<FormattedMessage id="component.form.label.cardIdNumber" />}
          name="card_number"
          rules={[{ required: true, message: 'Please input Card ID Number!' }]}
        >
          <Input placeholder="Card ID Number" />
        </Form.Item>
        <Form.Item label={<FormattedMessage id="component.form.label.address" />} name="address">
          <Input placeholder="Customer Address" />
        </Form.Item>
        <Form.Item label={<FormattedMessage id="component.form.label.name" />} name="name">
          <Input placeholder="Customer Name" />
        </Form.Item>
      </Form>
    </OModal>
  );
};

export default CreateCustomerModal;
