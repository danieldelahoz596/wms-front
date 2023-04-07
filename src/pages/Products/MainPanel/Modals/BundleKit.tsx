import { OModal } from '@/components/Globals/OModal';
import type { TabsProps } from 'antd';
import { Tabs, Form } from 'antd';
import { useEffect, useState } from 'react';
import BasicInfoTab from './Tabs/BasicInfo';
import BundledItemsTab from './Tabs/BundledItems';
import GalleryTab from './Tabs/Gallery';
import CustomFieldsTab from './Tabs/CustomFields';
import VendorProductsTab from './Tabs/VendorProducts';
import { useModel } from '@umijs/max';

interface IBundleKitModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const BundleKitModal: React.FC<IBundleKitModal> = ({ isOpen, onClose, onSave }) => {
  const [customFields, setCustomFields] = useState([]);
  const { bundleItems, editableProduct, createProduct, updateProduct, setBundleItems } = useModel('product');
  const [form] = Form.useForm();

  useEffect(() => {
    if (!editableProduct) {
      form.resetFields();
      setBundleItems([]);
    } else {
      form.setFieldsValue(editableProduct);
      setBundleItems(
        editableProduct.children?.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
          name: item.name,
          sku: item.sku,
        })),
      );
    }
  }, [form, isOpen, editableProduct, setBundleItems]);

  const handleSave = () => {
    form.validateFields().then((values) => {
      const items = bundleItems.reduce((acc, val) => {
        acc[val.product_id] = {
          quantity: val.quantity,
        };
        return acc;
      }, {});

      if (!!editableProduct) {
        updateProduct({ type: 'Bundle/Kit', ...editableProduct, ...values, items })
          .then(() => {
            onSave();
          })
          .catch(({ response: { data } }) => {
            const errors = [];
            Object.keys(data).map((key) => errors.push({ name: key, errors: data[key] }));
            form.setFields(errors);
          });
      } else {
        createProduct({ type: 'Bundle/Kit', ...values, items })
          .then(() => {
            onSave();
          })
          .catch(({ response: { data } }) => {
            const errors = [];
            Object.keys(data).map((key) => errors.push({ name: key, errors: data[key] }));
            form.setFields(errors);
          });
      }
    });
  };

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
          onClick: handleSave,
        },
      ]}
    >
      <div>
        <Tabs defaultActiveKey="tab-1" items={tabItems} />
      </div>
    </OModal>
  );
};

export default BundleKitModal;
