import { OModal } from '@/components/Globals/OModal';
import { Checkbox, Form, Input } from 'antd';
interface INewRecevingLocationModal {
  isOpen: boolean;
  onSave: (item: string) => void;
  onClose: () => void;
}
const NewRecevingLocationModal: React.FC<INewRecevingLocationModal> = ({
  isOpen,
  onSave,
  onClose,
}) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields().then((values) => {
      onSave(values.location);
    });
  };

  return (
    <OModal
      title={'New Receving Location'}
      helpLink=""
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
      <>
        <h2 style={{ textAlign: 'center' }}>AA0001</h2>
        <Form form={form}>
          <Form.Item
            label="Location"
            name="location"
            rules={[{ required: true, message: 'Please input location' }]}
          >
            <Input />
          </Form.Item>
        </Form>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end', gap: 5 }}>
          <Checkbox /> Is Pickable?
        </div>
      </>
    </OModal>
  );
};

export default NewRecevingLocationModal;
