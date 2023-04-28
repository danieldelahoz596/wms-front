import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { Checkbox, Form, Input } from 'antd';
interface INewRecevingLocationModal {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}
const NewRecevingLocationModal: React.FC<INewRecevingLocationModal> = ({ isOpen, onSave, onClose }) => {
  const [form] = Form.useForm();
  const { selectedPO } = useModel('po');
  const { createLocation } = useModel('warehouseLocation');

  const handleSave = () => {
    form.validateFields().then((values) => {
      console.log('values: ', values, selectedPO.destination_id);
      createLocation(selectedPO.destination_id, { ...values, warehouse_id: selectedPO.destination_id }).then(() => {
        onSave();
      });
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
        <h2 style={{ textAlign: 'center' }}>{selectedPO?.destination.name}</h2>
        <Form form={form}>
          <Form.Item label="Location" name="name" rules={[{ required: true, message: 'Please input location' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="" name="isPickable" valuePropName="checked">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end', gap: 5 }}>
              <Checkbox /> Is Pickable?
            </div>
          </Form.Item>
        </Form>
      </>
    </OModal>
  );
};

export default NewRecevingLocationModal;
