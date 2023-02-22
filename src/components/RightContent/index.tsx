import { QuestionCircleOutlined } from '@ant-design/icons';
import { useModel, SelectLang, useLocation } from '@umijs/max';
import { Space } from 'antd';
import React, { useMemo } from 'react';
import HeaderSearch from '../HeaderSearch';
import Avatar from './AvatarDropdown';
import styles from './index.less';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const location = useLocation();
  const helpUrl = useMemo(() => location.pathname.split('/')[1], [location.pathname]);
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'realDark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <Space className={className}>
      <SelectLang />
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="Search"
        defaultValue="umi ui"
        options={[
          { label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>, value: 'umi ui' },
          {
            label: <a href="next.ant.design">Ant Design</a>,
            value: 'Ant Design',
          },
          {
            label: <a href="https://protable.ant.design/">Pro Table</a>,
            value: 'Pro Table',
          },
          {
            label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
            value: 'Pro Layout',
          },
        ]}
        // onSearch={value => {
        //   console.log('input', value);
        // }}
      />
      <a
        className={styles.action}
        style={{
          color: '#ffffff',
        }}
        href={`help/${helpUrl}/general`}
      >
        <QuestionCircleOutlined />
      </a>
      <Avatar />
    </Space>
  );
};
export default GlobalHeaderRight;
