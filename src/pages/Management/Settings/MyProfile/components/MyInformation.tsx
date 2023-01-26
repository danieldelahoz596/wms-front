import httpClient from '@/utils/http-client';
import { FormattedMessage, useModel } from '@umijs/max';
import { Card, Form, Button, Input, Row, message } from 'antd';

const MyInformation: React.FC = () => {
  const [form] = Form.useForm();
  const { initialState } = useModel('@@initialState');
  const [messageApi, contextHolder] = message.useMessage();

  const handleUpdate = () => {
    form
      .validateFields()
      .then((values) =>
        httpClient
          .post('/auth/update-account-info', values)
          .then((response) => {
            localStorage.setItem(
              'authdata',
              JSON.stringify({ ...initialState.currentUser, user: response.data }),
            );
            messageApi.open({
              type: 'success',
              content: 'Username is updated successfully!',
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
        title={<FormattedMessage id="app.settings.basic.title" />}
        style={{ width: 600 }}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ full_name: initialState?.currentUser?.user.full_name, username: initialState?.currentUser?.user.username}}
          autoComplete="off"
          form={form}
          labelAlign="left"
        >
          <Form.Item
            label={<FormattedMessage id="app.settings.basic.fullname" />}
            name="full_name"
            rules={[
              {
                required: true,
                message: <FormattedMessage id="app.settings.basic.fullname-message" />,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={<FormattedMessage id="app.settings.basic.username" />}
            name="username"
            rules={[
              {
                required: true,
                message: <FormattedMessage id="app.settings.basic.username-message" />,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Row justify="end">
            <Button type="primary" onClick={handleUpdate}>
              <FormattedMessage id="app.settings.basic.update" />
            </Button>
          </Row>
        </Form>
      </Card>
    </>
  );
};

export default MyInformation;
