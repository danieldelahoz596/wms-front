import React from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Tabs, Form } from 'antd';
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
  const [form] = Form.useForm();

  const tabItems: TabsProps['items'] = [
    {
      key: 'tab-1',
      label: 'Basic Info',
      children: <BasicInfoTab form={form} />,
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

  const handleSave = () => {
    form.validateFields().then(() => {
      onSave(null);
    });
  };

  return (
    <OModal
      title={'New Core Product'}
      width={1000}
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
      <Tabs defaultActiveKey="1" items={tabItems} />
    </OModal>
  );
};

export default CoreProduct;
