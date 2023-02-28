import { useEffect } from 'react';
import { OButton } from '@/components/Globals/OButton';
import { useModel } from '@umijs/max';
import { Card, Form, Input, Space } from 'antd';

const RightPanel: React.FC = () => {
  const { selectedCustomer, handleUpdateCustomer, handleDeleteCustomer } = useModel('customer');

  const [form] = Form.useForm();

  const handleUpdate = (values) => {
    handleUpdateCustomer(selectedCustomer.id, values);
  };

  useEffect(() => {
    if (selectedCustomer) {
      form.setFieldsValue(selectedCustomer);
    }
  }, [form, selectedCustomer]);

  return selectedCustomer ? (
    <Card title={selectedCustomer?.name}>
      <Space>
        <Form layout="vertical" form={form} onFinish={handleUpdate}>
          <Form.Item name="phonenumber" label={'Phone *'}>
            <Input />
          </Form.Item>
          <Form.Item name="card_number" label={'Card ID Number *'}>
            <Input />
          </Form.Item>
          <Form.Item name="name" label={'Name'}>
            <Input />
          </Form.Item>
          <Form.Item name="address" label={'Address'}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Space size={HORIZONTAL_SPACE_SIZE}>
              <OButton btnText={'Update'} />
              <OButton btnText={'Delete'} onClick={handleDeleteCustomer} />
            </Space>
          </Form.Item>
        </Form>
      </Space>
    </Card>
  ) : null;
};

export default RightPanel;
