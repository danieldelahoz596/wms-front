import { useMemo } from 'react';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import SearchByPanel from './searchBy';
import FilterByPanel from './filterBy';

const SidePanel: React.FC = () => {
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
        children: <FilterByPanel />,
      },
      {
        label: (
          <span>
            <SearchOutlined />
            Search By
          </span>
        ),
        key: '2',
        children: <SearchByPanel />,
      },
    ],
    [],
  );

  return (
    <div className="left-panel">
      <Tabs defaultActiveKey="1" items={tabItems} />
    </div>
  );
};

export default SidePanel;
