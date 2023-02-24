import { OModal } from '@/components/Globals/OModal';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import BasicInfoTab from '@/pages/Products/components/BasicInfo';
import GalleryTab from '@/pages/Products/components/Gallery';
import VendorProductTab from '@/pages/Products/components/VendorProduct';
import BundledItemsTab from '@/pages/Products/components/BundledItems';

interface INewBundleKitModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const NewBundleKitModal: React.FC<INewBundleKitModal> = ({ isOpen, onClose, onSave }) => {
  const tabItems: TabsProps['items'] = [
    {
      key: 'tab-1',
      label: 'Basic Info',
      children: <BasicInfoTab />,
    },
    {
      key: 'tab-2',
      label: 'Gallery',
      children: <GalleryTab />,
    },
    {
      key: 'tab-3',
      label: 'Bundled Items',
      children: <BundledItemsTab />,
    },
    {
      key: 'tab-4',
      label: 'Vendor Products',
      children: <VendorProductTab />,
    },
    {
      key: 'tab-5',
      label: 'Fields',
      children: '',
    },
  ];

  return (
    <OModal
      title="New Bundle/Kit"
      helpLink="/help/products/create/bundlekit"
      width={800}
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
        <Tabs defaultActiveKey="1" items={tabItems} />
      </div>
    </OModal>
  );
};

export default NewBundleKitModal;
