import { OModal } from '@/components/Globals/OModal';
import { SettingOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Form, Select } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import ConfigureMilestonesModal from './ConfigureMilestones';

export interface IManageMilestoneModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ManageMilestoneModal: React.FC<IManageMilestoneModal> = ({ isOpen, onClose, onSave }) => {
  const [form] = Form.useForm();
  const { milestonesList } = useModel('milestones');
  const { selectedPO, updatePO, setSelectedPO } = useModel('po');
  const [showModal, setShowModal] = useState(false);

  const milestoneOptions = useMemo(
    () => milestonesList.map((milestone) => ({ label: milestone.text, value: milestone.value })),
    [milestonesList],
  );

  useEffect(() => {
    form.setFieldsValue({ milestone: selectedPO?.milestone?.value });
  }, [selectedPO, form]);

  const handleSave = () => {
    form.validateFields().then((values) => {
      setSelectedPO((prev) => ({ ...prev, milestone: milestonesList.find((milestone) => milestone.value === values.milestone) }));
      updatePO({ ...selectedPO, milestone: milestonesList.find((milestone) => milestone.value === values.milestone) });
    });
    onSave();
  };

  return (
    <OModal
      title={`Manage Milestones For P.O #${selectedPO?.ponumber}`}
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
      <>
        <Form form={form}>
          <div style={{ display: 'flex', gap: 5 }}>
            <div style={{ flex: 1 }}>
              <Form.Item label="Milestones" name="milestone">
                <Select options={milestoneOptions} />
              </Form.Item>
            </div>
            <span onClick={() => setShowModal(true)}>
              <SettingOutlined className="setting-button" />
            </span>
          </div>
        </Form>

        <ConfigureMilestonesModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </>
    </OModal>
  );
};

export default ManageMilestoneModal;
