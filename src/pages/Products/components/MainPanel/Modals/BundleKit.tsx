import { OModal } from '@/components/Globals/OModal';
import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import { useState } from 'react';
import BasicInfoTab from './Tabs/BasicInfo';
import BundledItemsTab from './Tabs/BundledItems';
import GalleryTab from './Tabs/Gallery';
import CustomFieldsTab from './Tabs/CustomFields';
import VendorProductsTab from './Tabs/VendorProducts';

interface IBundleKitModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const BundleKitModal: React.FC<IBundleKitModal> = ({ isOpen, onClose, onSave }) => {
  const [customFields, setCustomFields] = useState([]);
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
      children: <VendorProductsTab />,
    },
    {
      key: 'tab-5',
      label: 'Fields',
      children: <CustomFieldsTab customFields={customFields} setCustomFields={setCustomFields} />,
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

export default BundleKitModal;
