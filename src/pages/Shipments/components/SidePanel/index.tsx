import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import { useMemo } from 'react';
import FilterByPanel from './filterBy';
import SearchByPanel from './searchBy';

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

  return <Tabs defaultActiveKey="1" items={tabItems} />;
};

export default SidePanel;
