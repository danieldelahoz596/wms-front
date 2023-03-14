import { OModal } from '@/components/Globals/OModal';
import type { TabsProps } from 'antd';
import { Tabs, Form } from 'antd';
import ProcessingTab from './CreateRMA/Processing';
import ReturnItemsTab from './CreateRMA/ReturnItems';

interface ICreateRMAModal {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  onSave: () => void;
}

const CreateRMAModal: React.FC<ICreateRMAModal> = ({ isOpen, title, onClose, onSave }) => {
  const [form] = Form.useForm();

  const tabItems: TabsProps['items'] = [
    {
      key: 'tab-1',
      label: 'Processing',
      children: <ProcessingTab />,
    },
    {
      key: 'tab-2',
      label: 'Return Items',
      children: <ReturnItemsTab form={form} />,
    },
  ];

  return (
    <OModal
      title={title}
      width={MODAL_WIDTH}
      centered
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
          onClick: onSave,
        },
      ]}
    >
      <div>
        <Tabs defaultActiveKey="tab-1" items={tabItems} />
      </div>
    </OModal>
  );
};

export default CreateRMAModal;
