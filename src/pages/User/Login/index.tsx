import Footer from '@/components/Footer';
import httpClient from '@/utils/http-client';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { FormattedMessage, history, useModel } from '@umijs/max';
import { Alert, message } from 'antd';
import React, { useState } from 'react';
import styles from './index.less';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const { setInitialState } = useModel('@@initialState');
  const { login } = useModel('auth');

  const fetchInitialData = () => {
    httpClient.get('/api/initial-data').then((response) => {
      localStorage.setItem('initialData', JSON.stringify(response.data));
      console.log(response.data);
      setInitialState((s) => ({
        ...s,
        initialData: response.data,
      }));
    });
  };

  const handleSubmit = async (values: API.LoginParams) => {
    try {
      // 登录
      const userData = await login({ ...values, type });
      setUserLoginState(userData);
      if (!!userData) {
        // Sent login success notification
        const defaultLoginSuccessMessage = 'Login Success';
        message.success(defaultLoginSuccessMessage);

        // Set user data on localstorage
        localStorage.setItem('authdata', JSON.stringify(userData));

        // Set initialState user data
        setInitialState((s) => ({
          ...s,
          currentUser: userData,
        }));

        fetchInitialData();

        // Redirect user to dashboard
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/dashboard');
      }
      // 如果失败去设置用户错误信息
    } catch (error) {
      const defaultLoginFailureMessage = 'Login Fault';
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };
  const { status, type: loginType } = userLoginState;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          logo={<img alt="logo" src="/logo.svg" />}
          title="Skubana"
          subTitle="Skubana SYSTEM"
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.LoginParams);
          }}
        >
          {status === 'error' && <LoginMessage content="Error" />}

          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={styles.prefixIcon} />,
            }}
            placeholder="admin"
            rules={[
              {
                required: true,
                message: 'username is requests',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={styles.prefixIcon} />,
            }}
            placeholder="ant.design"
            rules={[
              {
                required: true,
                message: 'password request',
              },
            ]}
          />

          {status === 'error' && loginType === 'mobile' && <LoginMessage content="Login" />}
          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              <FormattedMessage id="pages.login.rememberMe" />
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              <FormattedMessage id="pages.login.forgotPassword" />
            </a>
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
