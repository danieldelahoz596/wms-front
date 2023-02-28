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
  const { editableProduct } = useModel('product');

  useEffect(() => {
    const items = [];
    if (editableProduct?.children) {
      editableProduct.children.forEach((product) => {
        items.push({
          master_sku: product.master_sku,
          attribute: product.attribute,
        });
      });
    }
    variationForm.setFieldsValue({ variationDetailsGroup: items });
  }, [editableProduct, variationForm]);

  const tabItems: TabsProps['items'] = [
    {
      key: 'tab-1',
      label: 'Basic Info',
      children: <BasicInfoTab />,
    },
    {
      key: 'tab-2',
      label: 'Variation Details',
      children: (
        <VariationDetailsTab
          form={variationForm}
          attributeGroup={editableProduct?.children ? editableProduct.children[0].attribute_group : null}
        />
      ),
    },
    {
      key: 'tab-3',
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
          onClick: onSave,
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
