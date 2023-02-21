import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import SearchByProductPanel from './searchByProductPanel';
import SearchByCategoriesPanel from './searchByCategoriesPanel';

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
      children: <SearchByCategoriesPanel />,
    },
    {
      label: (
        <span>
          <SearchOutlined />
          Search By
        </span>
      ),
      key: '2',
      children: <SearchByProductPanel />,
    },
  ];

  return (
    <div className="left-panel" style={{ padding: 2 }}>
      <Tabs size="small" defaultActiveKey="1" items={items} />
    </div>
  );
};

export default SidePanel;
