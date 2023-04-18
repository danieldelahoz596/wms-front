import { OModal } from '@/components/Globals/OModal';
import { FormattedMessage, useModel } from '@umijs/max';
import { Form, Input, Select } from 'antd';

interface ICreateCustomerModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const CreateCustomerModal: React.FC<ICreateCustomerModal> = ({ isOpen, onClose, onSave }) => {
  const [form] = Form.useForm();
  const { createCustomer } = useModel('customer');

  const handleSave = () => {
    form.validateFields().then((values) => {
      createCustomer(values)
        .then(() => {
          onSave();
        })
        .catch(({ response: { data } }) => {
          const errors = [];
          Object.keys(data).map((key) => errors.push({ name: key, errors: data[key] }));
          form.setFields(errors);
        });
    });
  };

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
          onClick: handleSave,
        },
      ]}
    >
      <Form form={form} labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} labelAlign="left">
        <Form.Item label={<FormattedMessage id="component.form.label.name" />} name="name">
          <Input placeholder="Customer Name" />
        </Form.Item>
        <Form.Item name="phone_type" rules={[{ required: true, message: 'Please Select Phone Type!' }]} label="Phone Type">
          <Select
            placeholder="Phone Type"
            options={[
              { value: 'mobile', label: 'Mobile' },
              { value: 'home', label: 'Home' },
            ]}
          />
        </Form.Item>
        <Form.Item name="phone_number" rules={[{ required: true, message: 'Please input Phone Number!' }]} label="Phone Number">
          <Input placeholder="Phone Number" />
        </Form.Item>
      </Form>
    </OModal>
  );
};

export default CreateCustomerModal;
