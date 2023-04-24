import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { Input, Form } from 'antd';
import { Colorpicker } from 'antd-colorpicker';
import { useEffect } from 'react';

export interface INewMilestoneModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const NewMilestoneModal: React.FC<INewMilestoneModal> = ({ isOpen, onClose, onSave }) => {
  const [form] = Form.useForm();
  const { createMilestone } = useModel('milestones');

  const handleSave = () => {
    form.validateFields().then((values) => {
      createMilestone({ name: values.name, color: values.color.hex }).then(() => {
        onSave();
      });
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
        <Form.Item label="Milestone Name" name="name" rules={[{ required: true, message: 'Please input milestone name' }]}>
          <Input style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          label="color"
          name="color"
          style={{ width: '90px', marginLeft: 'auto' }}
          rules={[{ required: true, message: 'Please select the milestone color' }]}
        >
          <Colorpicker popup />
        </Form.Item>
      </Form>
    </OModal>
  );
};

export default NewMilestoneModal;
