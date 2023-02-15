import { OInput } from '@/components/Globals/OInput';
import { modalType } from '@/utils/helpers/types';
import { QuestionCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, Form, Space } from 'antd';
import React, { useState } from 'react';
import ConfigureMilestonesModal from '../Modals/PurchaseOrder/ConfigureMilestonesModal';
import PaymentTerm from './PaymentTerm';
interface IPurchaseOrderDetail {
  selectedVendor?: string;
}

const PurchaseOrderDetail: React.FC<IPurchaseOrderDetail> = () => {
  const { handleSelectedPOChange, selectedPO } = useModel('po');
  const { milestonesList } = useModel('milestones');
  const { initialState } = useModel('@@initialState');
  const [showModal, setShowModal] = useState<modalType>(modalType.Close);

  const formInputs = [
    {
      type: 'select',
      label: 'To Destination',
      name: 'destination',
      defaultValue: selectedPO?.destination?.value,
      onChange: handleSelectedPOChange,
      options: initialState?.initialData.warehouses?.map((_item) => ({
        text: _item.name,
        value: `${_item.id}`,
      })),
    },
    {
      type: 'text',
      label: 'Custom P.O. Number',
      name: 'customPONumber',
      defaultValue: selectedPO?.destination?.value,
    },
    {
      type: 'select',
      label: 'P.O. Template',
      name: 'poTemplate',
      defaultValue: selectedPO?.poTemplate?.value,
      onChange: handleSelectedPOChange,
      options: initialState?.initialData.poTemplates?.map((_item) => ({
        text: _item.name,
        value: `${_item.id}`,
      })),
    },
    {
      type: 'select',
      label: 'P.O. Format',
      name: 'poFormat',
      defaultValue: selectedPO?.poTemplate?.value,
      onChange: handleSelectedPOChange,
      options: [
        { value: 'pdf', text: 'PDF Attachment'},
        { value: 'email', text: 'Email Attachment'},
        { value: 'html', text: 'HTML Attachment'},
      ],
    },
    {
      type: 'select',
      label: 'Shipping Terms',
      name: 'shippingTerm',
      defaultValue: selectedPO?.shippingTerm?.value,
      onChange: handleSelectedPOChange,
      options: initialState?.initialData.shippingTerms?.map((_item) => ({
        text: _item.name,
        value: `${_item.id}`,
      })),
    },
    {
      type: 'select',
      label: 'Payment Terms',
      name: 'paymentTerm',
      placeholder: 'Select..',
      defaultValue: selectedPO?.paymentTerm?.value,
      onChange: handleSelectedPOChange,
      options: initialState?.initialData.paymentTerms?.map((_item) => ({
        text: _item.name,
        value: `${_item.id}`,
      })),
      render: (inputField: any) => <PaymentTerm inputField={inputField} />,
    },
    {
      type: 'date',
      label: 'Confirm By',
      name: 'confirmBy',
      defaultValue: selectedPO?.confirmedBy,
      onChange: handleSelectedPOChange,
      rules: [{ required: true, message: 'Required!' }],
    },
    {
      type: 'select',
      label: 'Milestones: ',
      name: 'milestone',
      placeholder: 'Select..',
      defaultValue: selectedPO?.milestone?.value,
      onChange: (name: string, value: any) => handleSelectedPOChange(name, value),
      options: initialState?.initialData.milestones?.map((_item) => ({
        text: _item.name,
        value: `${_item.id}`,
      })),
      render: (inputField: any) => (
        <div style={{ display: 'flex', gap: 3 }}>
          <div style={{ flex: '1' }}>{inputField}</div>
          <span onClick={() => setShowModal(modalType.ConfigureMilestones)}>
            <SettingOutlined className="setting-button" />
          </span>
        </div>
      ),
    },
    {
      type: 'checkbox',
      label: 'Enable Auto Update',
      name: 'enablePortal',
      onChange: () => {},
      render: (inputField: any) => (
        <>
          {inputField}
          <QuestionCircleOutlined className="help-button" style={{ marginLeft: 6 }} />
        </>
      ),
    },
  ];

  return (
    <>
      <Card title="P.O. Details">
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} labelAlign="left">
          <Space direction="vertical" style={{ width: '100%' }} size={4}>
            <Form.Item label="From Vendor">
              <span style={{ fontWeight: 'bold' }}>{selectedPO?.fromVendor?.name}</span>
            </Form.Item>
            {formInputs?.map((inputItem, index) => (
              <Form.Item key={index} label={inputItem.label} rules={inputItem.rules}>
                <OInput {...inputItem} />
              </Form.Item>
            ))}
          </Space>
        </Form>
      </Card>

      <ConfigureMilestonesModal
        isOpen={showModal === modalType.ConfigureMilestones}
        onClose={() => setShowModal(modalType.Close)}
      />
    </>
  );
};

export default PurchaseOrderDetail;
