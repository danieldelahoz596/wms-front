import { OModal } from '@/components/Globals/OModal';
import { Input, Form } from 'antd';
import { Colorpicker } from 'antd-colorpicker';
import { useEffect } from 'react';

export interface INewMilestoneModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: any) => void;
}

const NewMilestoneModal: React.FC<INewMilestoneModal> = ({ isOpen, onClose, onSave }) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields().then((value) => {
      onSave(value);
    });
  };

  useEffect(() => {
    form.setFieldsValue({ name: '', color: {} });
  }, [isOpen]);

  return (
    <OModal
      title="New Milestone"
      helpLink=""
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
          key: 'save',
          type: 'default',
          btnLabel: 'save',
          onClick: () => handleSave(),
        },
      ]}
    >
      <Form form={form}>
        <Form.Item label="Milestone Name" name="name">
          <Input style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label="color" name="color" style={{ width: '90px', marginLeft: 'auto' }}>
          <Colorpicker popup />
        </Form.Item>
      </Form>
    </OModal>
  );
};

export default NewMilestoneModal;
