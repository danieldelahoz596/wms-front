import { useEffect, useState } from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Tabs, Form } from 'antd';
import type { TabsProps } from 'antd';
import BasicInfoTab from './Tabs/BasicInfo';
import GalleryTab from './Tabs/Gallery';
import VendorProductsTab from './Tabs/VendorProducts';
import CustomFieldsTab from './Tabs/CustomFields';
import { FormattedMessage, useModel } from '@umijs/max';

interface ICoreProductModal {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  onSave: (value: any) => void;
}

const CoreProductModal: React.FC<ICoreProductModal> = ({ isOpen, title = 'New Core Product', onClose, onSave }) => {
  const { editableProduct, handleUpdateProduct } = useModel('product');
  const [form] = Form.useForm();
  const [customFields, setCustomFields] = useState([]);
  const [vendorProductList, setVendorProductList] = useState([]);
  const [defaultVendorProductKey, setDefaultVendorProductKey] = useState(null);

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
      label: <FormattedMessage id="pages.products.coreProduct.basicInfo.title" />,
      children: <BasicInfoTab form={form} />,
    },
    {
      key: 'tab-2',
      label: <FormattedMessage id="pages.products.coreProduct.gallery.title" />,
      children: <GalleryTab />,
    },
    {
      key: 'tab-3',
      label: <FormattedMessage id="pages.products.coreProduct.vendorProduct.title" />,
      children: (
        <VendorProductsTab
          vendorProductList={vendorProductList}
          setVendorProductList={setVendorProductList}
          defaultVendorProductKey={defaultVendorProductKey}
          setDefaultVendorProductKey={setDefaultVendorProductKey}
        />
      ),
    },
    {
      key: 'tab-4',
      label: <FormattedMessage id="pages.products.coreProduct.fields.title" />,
      children: <CustomFieldsTab customFields={customFields} setCustomFields={setCustomFields} />,
    },
  ];

  const handleSave = () => {
    form.validateFields().then(() => {
      if (!!editableProduct) {
        handleUpdateProduct({
          ...editableProduct,
          custom_fields: customFields,
          vendor_products: vendorProductList,
          default_vendor_product: defaultVendorProductKey,
        });
      }
      onSave(null);
    });
  };

  return (
    <OModal
      forceRender
      title={title}
      helpLink="/help/products/create/coreproduct"
      width={800}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: <FormattedMessage id="component.button.cancel" />,
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: <FormattedMessage id="component.button.save" />,
          onClick: handleSave,
        },
      ]}
    >
      <Tabs defaultActiveKey="1" items={tabItems} />
    </OModal>
  );
};

export default CoreProductModal;
