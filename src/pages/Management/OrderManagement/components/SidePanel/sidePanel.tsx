import React from 'react';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';

import SideFilterTree from './sideFilterTree';
import SideSearch from './sideSearchComponent';

const SidePanel: React.FC = () => {
  const items = [
    {
      label: (
        <span>
          <FilterOutlined />
          Filter By
        </span>
      ),
      key: '1',
      children: <SideFilterTree />,
    },
    {
      label: (
        <span>
          <SearchOutlined />
          Search By
        </span>
      ),
      key: '2',
      children: <SideSearch />,
    },
  ];

  return (
    <div style={{ padding: 2 }}>
      <Tabs size="small" defaultActiveKey="1" items={items} />
    </div>
  );
};

export default SidePanel;
