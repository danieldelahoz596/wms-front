import httpClient from '@/utils/http-client';
import NewPasswordIcon from '@/utils/icons/newPassword';
import { FormattedMessage } from '@umijs/max';
import { Card, Form, Input, Button, Row, message } from 'antd';

const ChanagePassword: React.FC = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const handleChangePassword = () => {
    form
      .validateFields()
      .then((values) =>
        httpClient
          .post('/auth/change-password', values)
          .then((response) => {
            messageApi.open({
              type: 'success',
              content: response.data,
            });
            form.setFieldsValue({
              old_password: '',
              new_password: '',
              new_password_confirmation: '',
            });
          })
          .catch((err) => {
            const formData = [];
            for (const [name, errors] of Object.entries(err.response.data)) {
              formData.push({ name, errors });
            }
            form.setFields(formData);
          }),
      )
      .catch(() => {});
  };

  return (
    <>
      {contextHolder}
      <Card
        title={<FormattedMessage id="app.settings.profile.change-password.title" />}
        style={{ width: 600, marginTop: 10 }}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
          form={form}
          labelAlign="left"
        >
          <Form.Item
            label={<FormattedMessage id="app.settings.profile.change-password.current-password" />}
            name="old_password"
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage id="app.settings.profile.change-password.current-password-message" />
                ),
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="new_password"
            label={<FormattedMessage id="app.settings.profile.change-password.new-password" />}
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage id="app.settings.profile.change-password.new-password-message" />
                ),
              },
            ]}
            hasFeedback
          >
            <Input.Password iconRender={() => <NewPasswordIcon style={{ fill: 'gray' }} />} />
          </Form.Item>

          <Form.Item
            name="new_password_confirmation"
            label={<FormattedMessage id="app.settings.profile.change-password.confirm-password" />}
            dependencies={['new_password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage id="app.settings.profile.change-password.confirm-password-message1" />
                ),
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('new_password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('The two passwords that you entered do not match!'),
                  );
                },
              }),
            ]}
          >
            <Input.Password iconRender={() => <NewPasswordIcon style={{ fill: 'gray' }} />} />
          </Form.Item>

          <Row justify="end">
            <Button type="primary" htmlType="submit" onClick={handleChangePassword}>
              <FormattedMessage id="app.settings.profile.change-password.title" />
            </Button>
          </Row>
        </Form>
      </Card>
    </>
  );
};

export default ChanagePassword;
