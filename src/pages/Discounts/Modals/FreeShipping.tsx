import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { Form, Input, InputNumber, Checkbox, DatePicker, Space, Card, Radio, Select } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { useEffect, useState } from 'react';

interface IFreeShippingModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const FreeShippingModal: React.FC<IFreeShippingModal> = ({ isOpen, onClose, onSave }) => {
  const [form] = Form.useForm();
  const [requirementValue, setRequirementValue] = useState('no');
  const [customerEligibility, setCustomerEligibility] = useState('all');

  useEffect(() => {
    if (isOpen) form.resetFields();
  }, [isOpen, form]);

  const handleChangeRequirement = (e: RadioChangeEvent) => {
    setRequirementValue(e.target.value);
  };

  const handleChangeCustomerEligibility = (e: RadioChangeEvent) => {
    setCustomerEligibility(e.target.value);
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      console.log(values);
    });
  };

  return (
    <OModal
      title="Create shipping discount"
      width={600}
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
      <>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ textTransform: 'uppercase' }}>Select Discount Type</h2>
        </div>
        <Form layout="vertical" form={form}>
          <Card title="Free Shipping">
            <Form.Item label="Discount code">
              <div style={{ display: 'flex', gap: 10 }}>
                <div style={{ flex: 1 }}>
                  <Form.Item rules={[{ required: true, message: 'Customers must enter this code at checkout.' }]}>
                    <Input size="small" />
                  </Form.Item>
                </div>
                <OButton btnText="Generate" />
              </div>
            </Form.Item>
          </Card>
          <Card title="Minimum purchase requirements">
            <Radio.Group onChange={handleChangeRequirement} value={requirementValue}>
              <Space direction="vertical">
                <Radio value="no"> No minimum requirements </Radio>
                <Radio value="amount"> Minimum purchase amount ($) </Radio>
                {requirementValue === 'amount' && (
                  <Form.Item
                    name="amount"
                    rules={[{ required: true, message: 'Applies to all products' }]}
                    style={{ marginLeft: 20 }}
                  >
                    <InputNumber addonBefore={<>$</>} />
                  </Form.Item>
                )}
                <Radio value="items"> Minimum quantity of items </Radio>
                {requirementValue === 'items' && (
                  <Form.Item
                    name="amount"
                    rules={[{ required: true, message: 'Applies to all products' }]}
                    style={{ marginLeft: 20 }}
                  >
                    <InputNumber />
                  </Form.Item>
                )}
              </Space>
            </Radio.Group>
          </Card>
          <Card title="Customer eligibility">
            <Radio.Group onChange={handleChangeCustomerEligibility} value={customerEligibility}>
              <Space direction="vertical">
                <Radio value="all"> All customers </Radio>
                <Radio value="customer_segments"> Specific customer segments </Radio>
                {customerEligibility === 'customer_segments' && (
                  <Form.Item
                    name="customer"
                    rules={[{ required: true, message: 'Applies to all products' }]}
                    style={{ marginLeft: 20 }}
                  >
                    <Select showSearch />
                  </Form.Item>
                )}
                <Radio value="customers"> Specific customers </Radio>
                {customerEligibility === 'customers' && (
                  <Form.Item
                    name="customer"
                    rules={[{ required: true, message: 'Applies to all products' }]}
                    style={{ marginLeft: 20 }}
                  >
                    <Select showSearch />
                  </Form.Item>
                )}
              </Space>
            </Radio.Group>
          </Card>
          <Card title="Maximum discount uses">
            <Space direction="vertical">
              <Form.Item valuePropName="checked" noStyle>
                <Checkbox>Limit number of times this discount can be used in total</Checkbox>
              </Form.Item>
              <Form.Item valuePropName="checked" noStyle>
                <Checkbox>Limit to one use per customer</Checkbox>
              </Form.Item>
            </Space>
          </Card>
          <Card title="Active dates">
            <Form.Item label="Start Date">
              <DatePicker showTime style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="End Date">
              <DatePicker showTime style={{ width: '100%' }} />
            </Form.Item>
          </Card>
        </Form>
      </>
    </OModal>
  );
};

export default FreeShippingModal;
