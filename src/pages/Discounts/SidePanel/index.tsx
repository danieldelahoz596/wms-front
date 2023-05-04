import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { FormattedMessage } from '@umijs/max';
import { Tabs } from 'antd';
import FilterByPanel from './filterBy';
import SearchByPanel from './searchBy';

const SidePanel: React.FC = () => {
  const items = [
    {
      label: (
        <span className="filter-panel-title">
          <FilterOutlined />
          <FormattedMessage id="pages.products.sidepanel.filterBy.title" />
        </span>
      ),
      key: '1',
      children: <FilterByPanel />,
    },
    {
      label: (
        <span className="filter-panel-title">
          <SearchOutlined />
          <FormattedMessage id="pages.products.sidepanel.searchBy.title" />
        </span>
      ),
      key: '2',
      children: <SearchByPanel />,
    },
  ];

  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default SidePanel;
