import React from 'react';
import { Card, Form } from 'antd';
import { OInput } from '@/components/Globals/OInput';
import { useModel } from '@umijs/max';

const POCommunication: React.FC = () => {
  const { handleSelectedPOChange, selectedPO } = useModel('po');

  const formInputs = [
    {
      type: 'textarea',
      label: 'Message To Vendor',
      name: 'messageToVendor',
      rows: 4,
      defaultValue: selectedPO?.messageToVendor,
      onChange: handleSelectedPOChange,
    },
    {
      type: 'textarea',
      label: 'Internal Notes',
      name: 'internalNote',
      rows: 4,
      defaultValue: selectedPO?.internalNote,
      onChange: handleSelectedPOChange,
    },
  ];

  return (
    <Card className="communication-card" title="Communication">
      <Form layout="vertical">
        {formInputs.map((inputItem, index) => (
          <Form.Item key={index} label={inputItem.label}>
            <OInput {...inputItem} />
          </Form.Item>
        ))}
      </Form>
    </Card>
  );
};

export default POCommunication;
