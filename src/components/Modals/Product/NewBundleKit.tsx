import { OModal } from '@/components/Globals/OModal';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import BasicInfoTab from '@/components/Tabs/Product/BasicInfo';
import GalleryTab from '@/components/Tabs/Product/Gallery';
import VendorProductTab from '@/components/Tabs/Product/VendorProduct';
import BundledItemsTab from '@/components/Tabs/Product/BundledItems';

interface INewBundleKit {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const NewBundleKit: React.FC<INewBundleKit> = ({ isOpen, onClose, onSave }) => {
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
      title={'New Bundle/Kit'}
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

export default NewBundleKit;
