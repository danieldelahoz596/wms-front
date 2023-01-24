import { Card, Form, Input, Button } from 'antd';

const ChanagePassword: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card title="Change Password" style={{ width: 400 }}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Current Password:"
          name="password"
          rules={[{ required: true, message: 'Please input your current password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="New Password:"
          name="password"
          rules={[{ required: true, message: 'Please input your new password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password:"
          name="password"
          rules={[{ required: true, message: 'Please input your new password again!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Change Password
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ChanagePassword;
