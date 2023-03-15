import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { FormattedMessage } from '@umijs/max';
import { Tabs } from 'antd';
import React from 'react';

import FilterByPanel from './filterBy';
import SearchByPanel from './searchBy';

const SidePanel: React.FC = () => {
  const items = [
    {
      key: '1',
      label: (
        <span className="filter-panel-title">
          <FilterOutlined />
          <FormattedMessage id="pages.orders.sidepanel.filterBy" />
        </span>
      ),
      children: <FilterByPanel />,
    },
    {
      key: '2',
      label: (
        <span className="filter-panel-title">
          <SearchOutlined />
          <FormattedMessage id="pages.orders.sidepanel.searchBy" />
        </span>
      ),
      children: <SearchByPanel />,
    },
  ];

  return (
    <div className="left-panel">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default SidePanel;
