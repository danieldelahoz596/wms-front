import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import React from 'react';

import SideFilterTree from './sideFilterTree';
import SideSearch from './sideSearchComponent';

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
      children: <SideFilterTree />,
    },
    {
      key: '2',
      label: (
        <span>
          <SearchOutlined />
          Search By
        </span>
      ),
      children: <SideSearch />,
    },
  ];

  return (
    <div className="left-panel" style={{ padding: 2 }}>
      <Tabs size="small" defaultActiveKey="1" items={items} />
    </div>
  );
};

export default SidePanel;
