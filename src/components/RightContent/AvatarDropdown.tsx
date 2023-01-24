import SKUAlertsModal from '../Modals/Toolbar/SKUAlerts';
import { outLogin } from '@/services/ant-design-pro/api';
import { modalType } from '@/utils/helpers/types';
import ListIcon from '@/utils/icons/list';
import { BellOutlined, LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { FormattedMessage, history, useModel } from '@umijs/max';
import { Avatar, Menu, Spin, Badge, Row, Col } from 'antd';
import type { ItemType } from 'antd/es/menu/hooks/useItems';
import { stringify } from 'querystring';
import type { MenuInfo } from 'rc-menu/lib/interface';
import React, { useCallback, useState, useEffect } from 'react';
import { flushSync } from 'react-dom';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';
import ProfileIcon from '@/utils/icons/profile';

export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
  /**
   * 退出登录，并且将当前的 url 保存
   */
  const [modalOpen, setModalOpen] = useState('');
  const loginOut = async () => {
    await outLogin();
    localStorage.removeItem('authdata');
    const { search, pathname } = window.location;
    const urlParams = new URL(window.location.href).searchParams;
    /** 此方法会跳转到 redirect 参数所在的位置 */
    const redirect = urlParams.get('redirect');
    // Note: There may be security issues, please note
    if (window.location.pathname !== '/user/login' && !redirect) {
      history.replace({
        pathname: '/user/login',
        search: stringify({
          redirect: pathname + search,
        }),
      });
    }
  };
  const { initialState, setInitialState } = useModel('@@initialState');
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    if (initialState && initialState.initialData) setAlerts(initialState.initialData.sku_alerts);
  }, [initialState]);

  const onMenuClick = useCallback(
    (event: MenuInfo) => {
      const { key } = event;
      if (key === 'logout') {
        flushSync(() => {
          setInitialState((s) => ({ ...s, currentUser: null }));
        });
        loginOut();
        return;
      } else if (key === 'sku_alerts') {
        setModalOpen(modalType.SKUAlerts);
        return;
      } else if (key === 'my_profile') {
        history.push(`/settings/myprofile`);
        return;
      }
      history.push(`/account/${key}`);
    },
    [setInitialState],
  );

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

  if (!initialState) {
    return loading;
  }

  const { currentUser } = initialState;

  if (!currentUser || !currentUser?.user?.full_name) {
    return loading;
  }

  const menuItems: ItemType[] = [
    ...(menu
      ? [
          {
            key: 'center',
            icon: <UserOutlined />,
            label: 'Profile',
          },
          {
            key: 'settings',
            icon: <SettingOutlined />,
            label: 'Settings',
          },
          {
            type: 'divider' as const,
          },
        ]
      : []),
    {
      key: 'my_profile',
      icon: <ProfileIcon />,
      label: 'My Profile',
    },
    {
      key: 'sku_alerts',
      icon: <BellOutlined />,
      label: (
        <Row justify="space-between">
          <Col>
            <FormattedMessage id="menu.account.sku-alerts" />{' '}
          </Col>
          <Col>
            <Badge count={alerts.length} size="small" />
          </Col>
        </Row>
      ),
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: <FormattedMessage id="menu.account.logout" />,
    },
  ];

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick} items={menuItems} />
  );

  return (
    <>
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          <Badge count={alerts.length} size="small">
            {/* <Avatar
            shape="square"
            size="large"
            icon={<ListIcon style={{ fill: 'white' }} />}
            // style={{ backgroundColor: 'transparent' }}
          /> */}
            <ListIcon style={{ fill: 'white' }} />
            {/* <Avatar size="small" className={styles.avatar} src={currentUser.avatar} alt="avatar" />
          <span className={`${styles.name} anticon`}>{currentUser?.user?.full_name}</span> */}
          </Badge>
        </span>
      </HeaderDropdown>

      <SKUAlertsModal
        isOpen={modalOpen === modalType.SKUAlerts}
        onClose={() => setModalOpen(modalType.Close)}
        alerts={alerts}
        setAlerts={setAlerts}
      />
    </>
  );
};

export default AvatarDropdown;
