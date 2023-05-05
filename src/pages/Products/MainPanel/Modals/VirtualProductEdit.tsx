import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import type { TabsProps } from 'antd';
import { Tabs, Form } from 'antd';
import React, { useState, useEffect } from 'react';
import BasicInfoTab from './Tabs/BasicInfo';
import VariationDetailsTab from './Tabs/VariationDetails';
import VendorProductsTab from './Tabs/VendorProducts';

interface IVirtualProductEditModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const VirtualProductEditModal: React.FC<IVirtualProductEditModal> = ({ isOpen, onClose, onSave }) => {
  const [vendorProductList, setVendorProductList] = useState([]);
  const [defaultVendorProductKey, setDefaultVendorProductKey] = useState(null);
  const [variationForm] = Form.useForm();
  const [basicForm] = Form.useForm();
  const { editableProduct, updateProduct } = useModel('product');
  const [selectedAttributeGroupId, setSelectedAttributeGroupId] = useState(null);

  useEffect(() => {
    if (editableProduct) {
      basicForm.setFieldsValue(editableProduct);
      variationForm.setFieldsValue({ variations: editableProduct.children });
      setSelectedAttributeGroupId(editableProduct.attribute_group_id);
    }
  }, [editableProduct, variationForm, basicForm]);

  const handleSave = () => {
    basicForm.validateFields().then((values) => {
      variationForm.validateFields().then(({ variations }) => {
        updateProduct({ ...editableProduct, ...values, variations }).then(() => onSave());
      });
    });
  };

  const tabItems: TabsProps['items'] = [
    {
      key: 'tab-1',
      label: 'Basic Info',
      children: <BasicInfoTab form={basicForm} />,
    },
    {
      key: 'tab-3',
      label: 'Variation Details',
      children: (
        <VariationDetailsTab
          form={variationForm}
          selectedAttributeGroupId={selectedAttributeGroupId}
          setSelectedAttributeGroupId={setSelectedAttributeGroupId}
        />
      ),
    },
    {
      key: 'tab-4',
      label: 'Vendor Products',
      children: (
        <VendorProductsTab
          vendorProductList={vendorProductList}
          setVendorProductList={setVendorProductList}
          defaultVendorProductKey={defaultVendorProductKey}
          setDefaultVendorProductKey={setDefaultVendorProductKey}
        />
      ),
    },
  ];

  return (
    <OModal
      forceRender
      title="Virtual Product Edit"
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

export default VirtualProductEditModal;
