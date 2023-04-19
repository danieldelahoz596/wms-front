import { useEffect, useState } from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Tabs, Form } from 'antd';
import type { TabsProps } from 'antd';
import BasicInfoTab from './Tabs/BasicInfo';
import GalleryTab from './Tabs/Gallery';
import VendorProductsTab from './Tabs/VendorProducts';
import CustomFieldsTab from './Tabs/CustomFields';
import { FormattedMessage, useModel } from '@umijs/max';
import type { UploadFile } from 'antd';

interface ICoreProductModal {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  onSave: (value: any) => void;
}

const CoreProductModal: React.FC<ICoreProductModal> = ({ isOpen, title = 'New Core Product', onClose, onSave }) => {
  const { editableProduct, createProduct, updateProduct } = useModel('product');
  const [form] = Form.useForm();
  const [customFields, setCustomFields] = useState([]);
  const [vendorProductList, setVendorProductList] = useState([]);
  const [defaultVendorProductKey, setDefaultVendorProductKey] = useState(null);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  useEffect(() => {
    if (editableProduct) {
      form.setFieldsValue(editableProduct);
      setFileList(
        editableProduct.images.map((image) => ({
          uid: `${image.id}`,
          name: 'image.png',
          status: 'done',
          url: image.image_url,
          response: image.url,
        })),
      );
    } else form.resetFields();

    if (!!editableProduct) {
      setCustomFields(editableProduct.custom_fields);
    }
  }, [editableProduct, form, isOpen]);

  const tabItems: TabsProps['items'] = [
    {
      key: 'tab-1',
      label: <FormattedMessage id="pages.products.coreProduct.basicInfo.title" />,
      children: <BasicInfoTab form={form} />,
    },
    {
      key: 'tab-2',
      label: <FormattedMessage id="pages.products.coreProduct.gallery.title" />,
      children: <GalleryTab fileList={fileList} setFileList={setFileList} />,
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
    const fileUrls = fileList.map((item) => item.response);
    form.validateFields().then((fields) => {
      if (!!editableProduct) {
        updateProduct({ type: 'Core', urls: fileUrls, ...editableProduct, ...fields })
          .then(() => {
            onSave(null);
          })
          .catch(({ response: { data } }) => {
            const errors = [];
            Object.keys(data).map((key) => errors.push({ name: key, errors: data[key] }));
            form.setFields(errors);
          });
      } else {
        createProduct({ type: 'Core', urls: fileUrls, ...fields })
          .then(() => {
            onSave(null);
          })
          .catch(({ response: { data } }) => {
            const errors = [];
            Object.keys(data).map((key) => errors.push({ name: key, errors: data[key] }));
            form.setFields(errors);
          });
      }
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
