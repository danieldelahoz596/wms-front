import { useEffect, useState } from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Tabs, Form } from 'antd';
import type { TabsProps } from 'antd';
<<<<<<< HEAD:src/pages/Products/components/MainPanel/Modals/CoreProduct.tsx
import BasicInfoTab from './Tabs/BasicInfo';
import GalleryTab from './Tabs/Gallery';
import VendorProductsTab from './Tabs/VendorProducts';
import CustomFieldsTab from './Tabs/CustomFields';
=======
import BasicInfoTab from '@/pages/Products/components/BasicInfo';
import GalleryTab from '@/pages/Products/components/Gallery';
import VendorProductTab from '@/pages/Products/components/VendorProduct';
import ProductCustomFields from '@/pages/Products/components/ProductCustomFields';
>>>>>>> origin/develop:src/pages/Products/components/Modals/CoreProduct.tsx
import { useModel } from '@umijs/max';

interface ICoreProductModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: any) => void;
}

const CoreProductModal: React.FC<ICoreProductModal> = ({ isOpen, onClose, onSave }) => {
  const { editableProduct, handleUpdateProduct } = useModel('product');
  const [form] = Form.useForm();
  const [customFields, setCustomFields] = useState([]);

  useEffect(() => {
    form.setFieldsValue({
      master_sku: editableProduct?.master_sku,
      name: editableProduct?.name,
      buyer: editableProduct?.buyer,
      brand: editableProduct?.brand,
      categories: editableProduct?.categories,
      labels: editableProduct?.labels,
      description: editableProduct?.description,
      width: editableProduct?.width,
      height: editableProduct?.height,
      length: editableProduct?.length,
    });

    if (!!editableProduct) {
      setCustomFields(editableProduct.custom_fields);
    }
  }, [editableProduct, form]);

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
      children: <VendorProductsTab />,
    },
    {
      key: 'tab-4',
      label: 'Fields',
      children: <CustomFieldsTab customFields={customFields} setCustomFields={setCustomFields} />,
    },
  ];

  const handleSave = () => {
    form.validateFields().then(() => {
      if (!!editableProduct) {
        handleUpdateProduct({ ...editableProduct, custom_fields: customFields });
      }
      onSave(null);
    });
  };

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
          onClick: handleSave,
        },
      ]}
    >
      <Tabs defaultActiveKey="1" items={tabItems} />
    </OModal>
  );
};

export default CoreProductModal;
