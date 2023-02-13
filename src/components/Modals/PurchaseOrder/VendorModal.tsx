import { OModal } from '@/components/Globals/OModal';
import type { IOSelectOption } from '@/components/Globals/OSelect';
import { modalType } from '@/utils/helpers/types';
import { useModel } from '@umijs/max';
import { Card, Select } from 'antd';
import React from 'react';
interface IVendorModal {
  vendorModal: string;
  onVendorModalNext: () => void;
  onVendorModalCancel: () => void;
  vendorModalLayout: any;
  form?: any;
  onVendorChange?: (value: string) => void;
}

const VendorModal: React.FC<IVendorModal> = ({
  vendorModal,
  onVendorModalNext,
  onVendorModalCancel,
  vendorModalLayout,
  form,
  onVendorChange,
}) => {
  const { vendorList } = useModel('vendor');
  const { initialState } = useModel('@@initialState');

  const handleVendorChange = (name: string, value: string) => {
    if (onVendorChange) {
      onVendorChange(value);
    }
  };

  const selectVendorOptions: IOSelectOption[] = vendorList?.map((item) => ({
    value: item.id,
    text: item.name,
  }));

  return (
    <OModal
      title="Choose P.O. Vendor"
      helpLink=""
      width={400}
      isOpen={vendorModal === modalType.New}
      handleCancel={onVendorModalCancel}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: onVendorModalCancel,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Next',
          onClick: onVendorModalNext,
        },
      ]}
    >
      <Card title="Vendor">
        <>
          <Select
            placeholder="Select..."
            size="middle"
            name="vendor"
            options={initialState?.initialData?.vendors.map((_item) => ({
              value: _item.id,
              label: _item.name,
            }))}
            onChange={handleVendorChange}
            allowClear
            style={{ width: '100%', marginBottom: 5 }}
          />
          {/* <Form {...vendorModalLayout} className="choose-vendor" form={form} name="control-hooks">
            <Form.Item name="vendor" label="Vendor" rules={[{ required: true }]}>
              <OSelect
                name="vendor"
                options={selectVendorOptions}
                placeholder="Select Vendor"
                onChange={handleVendorChange}
                allowClear
              />
            </Form.Item>
          </Form> */}
        </>
      </Card>
    </OModal>
  );
};

export default VendorModal;
