import { useEffect, useState } from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Tabs, Form } from 'antd';
import type { TabsProps } from 'antd';
import BasicInfoTab from '@/components/Tabs/Product/BasicInfo';
import GalleryTab from '@/components/Tabs/Product/Gallery';
import VendorProductTab from '@/components/Tabs/Product/VendorProduct';
import ProductCustomFields from '@/components/Tabs/Product/ProductCustomFields';
import { useModel } from '@umijs/max';

interface ICoreProduct {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: any) => void;
}

const CoreProduct: React.FC<ICoreProduct> = ({ isOpen, onClose, onSave }) => {
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
      children: <VendorProductTab />,
    },
    {
      key: 'tab-4',
      label: 'Fields',
      children: (
        <ProductCustomFields customFields={customFields} setCustomFields={setCustomFields} />
      ),
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
      title={'New Core Product'}
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

export default CoreProduct;
