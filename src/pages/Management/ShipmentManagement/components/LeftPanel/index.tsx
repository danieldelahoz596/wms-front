import { useMemo } from 'react';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import SearchPanel from './searchPanel';
import FilterPanel from './filterPanel';

const LeftPanel: React.FC = () => {
  const tabItems = useMemo(
    () => [
      {
        label: (
          <span>
            <FilterOutlined />
            Filter By
          </span>
        ),
        key: '1',
        children: <FilterPanel />,
      },
      {
        label: (
          <span>
            <SearchOutlined />
            Search Shipment
          </span>
        ),
        key: '2',
        children: <SearchPanel />,
      },
    ],
    [],
  );

  return (
    <div style={{ padding: 2 }}>
      <Tabs size="small" defaultActiveKey="1" items={tabItems} />
    </div>
  );
};

export default LeftPanel;
