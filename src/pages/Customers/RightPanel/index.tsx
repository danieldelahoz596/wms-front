import { useEffect, useMemo, useState } from 'react';
import { OButton } from '@/components/Globals/OButton';
import { FormattedMessage, useModel } from '@umijs/max';
import { Card, Form, Input, Space, Select, message, InputNumber } from 'antd';

const RightPanel: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { selectedCustomer, updateCustomer, deleteCustomer } = useModel('customer');
  const { stateList } = useModel('states');
  const [cityOptions, setCityOptions] = useState<{ label: string; value: string | number }[]>([]);

  const [form] = Form.useForm();

  const stateOptions = useMemo(() => stateList.map((state) => ({ value: state.id, label: state.name })), [stateList]);

  const handleUpdate = () => {
    form.validateFields().then((values) => {
      updateCustomer({ ...selectedCustomer, ...values })
        .then(() =>
          messageApi.open({
            type: 'success',
            content: 'Success updating the customer',
          }),
        )
        .catch(({ response: { data } }) => {
          const errors = [];
          Object.keys(data).map((key) => errors.push({ name: key, errors: data[key] }));
          form.setFields(errors);
          messageApi.open({
            type: 'error',
            content: 'Failed updating the customer',
          });
        });
    });
  };

  const handleDelete = () => {
    deleteCustomer(selectedCustomer.id).then(() => {
      messageApi.open({
        type: 'success',
        content: 'Success deleting the customer',
      });
    });
  };

  useEffect(() => {
    if (selectedCustomer) {
      form.resetFields();
      form.setFieldsValue(selectedCustomer);
      if (selectedCustomer.state_id) {
        setCityOptions(
          stateList
            .find((item) => item.id === selectedCustomer.state_id)
            .cities.map((city) => ({ label: city.name, value: city.id })),
        );
      }
    }
  }, [form, selectedCustomer, stateList]);

  const handleFieldChange = (changedFields) => {
    if (changedFields[0].name.includes('state_id')) {
      form.setFieldValue('city_id', null);
      setCityOptions(
        stateList.find((item) => item.id === changedFields[0].value).cities.map((city) => ({ label: city.name, value: city.id })),
      );
    }
  };

  return (
    <>
      {contextHolder}
      {selectedCustomer ? (
        <Card title={selectedCustomer.name}>
          <Form layout="horizontal" form={form} labelCol={{ span: 8 }} labelAlign="left" onFieldsChange={handleFieldChange}>
            <Form.Item
              name="phone_type"
              rules={[{ required: true, message: 'Please Select Phone Type!' }]}
              label="Phone Type"
              style={{ marginBottom: '5px' }}
            >
              <Select
                placeholder="Phone Type"
                options={[
                  { value: 'mobile', label: 'Mobile' },
                  { value: 'home', label: 'Home' },
                ]}
              />
            </Form.Item>
            <Form.Item
              name="phone_number"
              label={<FormattedMessage id="component.form.label.phone" />}
              rules={[{ required: true, message: 'Please Input Phone Number!' }]}
              style={{ marginBottom: '5px' }}
            >
              <Input placeholder="Phone Number" />
            </Form.Item>
            <Form.Item name="name" label={<FormattedMessage id="component.form.label.name" />} style={{ marginBottom: '5px' }}>
              <Input placeholder="Customer Name" />
            </Form.Item>
            <Form.Item
              name="address"
              label={<FormattedMessage id="component.form.label.address" />}
              style={{ marginBottom: '5px' }}
            >
              <Input placeholder="Customer Address" />
            </Form.Item>
            <Form.Item name="sex" label="Sex" style={{ marginBottom: '5px' }}>
              <Select
                options={[
                  { value: 1, label: 'Male' },
                  { value: 0, label: 'Female' },
                ]}
              />
            </Form.Item>
            <Form.Item name="age" label="Age" style={{ marginBottom: '5px' }}>
              <InputNumber style={{ width: '100%' }} min={1} />
            </Form.Item>
            <Form.Item name="state_id" label="State" style={{ marginBottom: '5px' }}>
              <Select options={stateOptions} />
            </Form.Item>
            <Form.Item name="city_id" label="City" style={{ marginBottom: '5px' }}>
              <Select options={cityOptions} />
            </Form.Item>
            <Form.Item style={{ marginBottom: '5px' }}>
              <Space size={HORIZONTAL_SPACE_SIZE}>
                <OButton btnText={<FormattedMessage id="component.button.update" />} onClick={handleUpdate} />
                <OButton btnText={<FormattedMessage id="component.button.delete" />} onClick={handleDelete} />
              </Space>
            </Form.Item>
          </Form>
        </Card>
      ) : null}
    </>
  );
};

export default RightPanel;
