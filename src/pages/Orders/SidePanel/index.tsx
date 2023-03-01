import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import React from 'react';

import FilterByPanel from './filterBy';
import SearchByPanel from './searchBy';

const SidePanel: React.FC = () => {
  const items = [
    {
      key: '1',
      label: (
        <span>
          <FilterOutlined />
          Filter By
        </span>
      ),
      children: <FilterByPanel />,
    },
    {
      key: '2',
      label: (
        <span>
          <SearchOutlined />
          Search By
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
