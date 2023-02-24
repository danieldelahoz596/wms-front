import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import FilterByPanel from './filterBy';
import SearchByPanel from './searchBy';

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
  ];

  return (
    <div className="left-panel">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default SidePanel;
