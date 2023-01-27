import React from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import BasicInfoTab from '@/components/Tabs/Product/BasicInfo';
import GalleryTab from '@/components/Tabs/Product/Gallery';
import VendorProductTab from '@/components/Tabs/Product/VendorProduct';

interface ICoreProduct {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: any) => void;
}

const CoreProduct: React.FC<ICoreProduct> = ({ isOpen, onClose, onSave }) => {
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
      label: 'Vendor Products',
      children: <VendorProductTab />,
    },
  ];

  return (
    <OModal
      title={'New Core Product'}
      width={1000}
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
          onClick: () => onSave(null),
        },
      ]}
    >
      <Tabs defaultActiveKey="1" items={tabItems} />
    </OModal>
  );
};

export default CoreProduct;
