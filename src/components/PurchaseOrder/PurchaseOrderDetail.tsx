import React from 'react';
import { Card, Form } from 'antd';
import { OInput } from '@/components/Globals/OInput';
import { useModel } from '@umijs/max';
import PaymentTerm from './PaymentTerm';
interface IPurchaseOrderDetail {
  selectedVendor?: string;
}

const PurchaseOrderDetail: React.FC<IPurchaseOrderDetail> = () => {
  const { handleSelectedPOChange, selectedPO } = useModel('po');
  const { milestonesList } = useModel('milestones');
  const { shippingTermList } = useModel('shippingTerm');
  const { poTemplateList } = useModel('poTemplate');
  const { paymentTermList } = useModel('paymentTerm');
  const { initialState } = useModel('@@initialState');

  const formInputs = [
    {
      type: 'select',
      label: 'To Destination:',
      name: 'destination',
      placeholder: 'Select..',
      defaultValue: selectedPO?.destination?.value,
      onChange: handleSelectedPOChange,
      options: initialState?.initialData.warehouses?.map((_item) => ({
        text: _item.name,
        value: `${_item.id}`,
      })),
      rules: [{ required: true, message: 'Please select destination!' }],
    },
    {
      type: 'select',
      label: 'P. O. Format : ',
      name: 'poTemplate',
      placeholder: 'Select..',
      defaultValue: selectedPO?.poTemplate?.value,
      onChange: handleSelectedPOChange,
      options: poTemplateList,
      rules: [{ required: true, message: 'Please select P. O. Format!' }],
    },
    {
      type: 'select',
      label: 'Shipping terms :',
      name: 'shippingTerm',
      placeholder: 'Select..',
      defaultValue: selectedPO?.shippingTerm?.value,
      onChange: handleSelectedPOChange,
      options: shippingTermList,
      rules: [{ required: true, message: 'Please select shipping terms!' }],
    },
    {
      type: 'select',
      label: 'Payment Terms :',
      name: 'paymentTerm',
      placeholder: 'Select..',
      defaultValue: selectedPO?.paymentTerm?.value,
      onChange: handleSelectedPOChange,
      options: paymentTermList?.map((_item) => ({ value: _item.id, text: _item.value })),
      rules: [{ required: true, message: 'Please select Payment terms!' }],
      render: (inputField: any) => <PaymentTerm inputField={inputField} />,
    },
    {
      type: 'date',
      label: 'Confirmed By :',
      name: 'confirmedBy',
      defaultValue: selectedPO?.confirmedBy,
      onChange: handleSelectedPOChange,
      rules: [{ required: true, message: 'Required!' }],
    },
    {
      type: 'checkbox',
      label: 'Enable Portal',
      name: 'enablePortal',
      onChange: () => {},
    },
    {
      type: 'select',
      label: 'Milestones: ',
      name: 'milestone',
      placeholder: 'Select..',
      defaultValue: selectedPO?.milestone?.value,
      onChange: (name: string, value: any) => handleSelectedPOChange(name, value),
      options: milestonesList,
      rules: [{ required: true, message: 'Please select Payment terms!' }],
    },
  ];

  return (
    <Card title="P.O. DETAILS" style={{ marginRight: '.5rem' }}>
      <Form>
        <Form.Item label="From Vendor">
          <label style={{ fontWeight: 'bold' }}>{selectedPO?.fromVendor?.name}</label>
        </Form.Item>
        {formInputs?.map((inputItem, index) => (
          <Form.Item key={index} label={inputItem.label} rules={inputItem.rules}>
            <OInput {...inputItem} />
          </Form.Item>
        ))}
      </Form>
    </Card>
  );
};

export default PurchaseOrderDetail;
