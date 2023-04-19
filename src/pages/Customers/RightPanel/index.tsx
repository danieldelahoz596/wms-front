import { useEffect } from 'react';
import { OButton } from '@/components/Globals/OButton';
import { FormattedMessage, useModel } from '@umijs/max';
import { Card, Form, Input, Space, Select, message } from 'antd';

const RightPanel: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { selectedCustomer, updateCustomer, deleteCustomer } = useModel('customer');
  console.log('selectedCustomer: ', selectedCustomer);

  const [form] = Form.useForm();

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
      form.setFieldsValue(selectedCustomer);
    }
  }, [form, selectedCustomer]);

  return (
    <>
      {contextHolder}
      {selectedCustomer ? (
        <Card title={selectedCustomer?.name}>
          <Form layout="vertical" form={form}>
            <Form.Item name="phone_type" rules={[{ required: true, message: 'Please Select Phone Type!' }]} label="Phone Type">
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
            >
              <Input placeholder="Phone Number" />
            </Form.Item>
            <Form.Item name="name" label={<FormattedMessage id="component.form.label.name" />}>
              <Input placeholder="Customer Name" />
            </Form.Item>
            <Form.Item name="address" label={<FormattedMessage id="component.form.label.address" />}>
              <Input placeholder="Customer Address" />
            </Form.Item>
            <Form.Item>
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
