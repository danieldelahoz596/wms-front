import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { FormattedMessage } from '@umijs/max';
import { Tabs } from 'antd';
import React from 'react';
import FilterByPanel from './filterBy';
import SearchByPanel from './searchBy';

const SidePanel: React.FC = () => {
  const items = [
    {
      label: (
        <span>
          <FilterOutlined />
          <FormattedMessage id='pages.purchasing.sidepanel.filterBy'/>
        </span>
      ),
      key: '1',
      children: <FilterByPanel />,
    },
    {
      label: (
        <span>
          <SearchOutlined />
          <FormattedMessage id='pages.purchasing.sidepanel.searchBy'/>
        </span>
      ),
      key: '2',
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
