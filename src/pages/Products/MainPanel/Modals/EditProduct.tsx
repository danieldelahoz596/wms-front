import { OModal } from '@/components/Globals/OModal';
import { Form, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import BasicInfoTab from '@/pages/Products/MainPanel/Modals/Tabs/BasicInfo';
import GalleryTab from '@/pages/Products/MainPanel/Modals/Tabs/Gallery';
interface IEditProductModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const EditProductModal: React.FC<IEditProductModal> = ({ isOpen, onClose, onSave }) => {
  const [form] = Form.useForm();

  const tabItems: TabsProps['items'] = [
    {
      key: 'tab-1',
      label: 'BASIC INFO',
      children: <BasicInfoTab form={form} />,
    },
    {
      key: 'tab-2',
      label: 'GALLERY',
      children: <GalleryTab />,
    },
  ];

  return (
    <OModal
      title="New Core Product"
      helpLink="/help/products/create/coreproduct"
      width={800}
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
      <Tabs defaultActiveKey="1" items={tabItems} />
    </OModal>
  );
};

export default EditProductModal;
