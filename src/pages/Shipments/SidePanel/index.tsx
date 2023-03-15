import { FilterOutlined, SearchOutlined } from '@ant-design/icons';
import { FormattedMessage } from '@umijs/max';
import { Tabs } from 'antd';
import { useMemo } from 'react';
import FilterByPanel from './filterBy';
import SearchByPanel from './searchBy';

const SidePanel: React.FC = () => {
  const tabItems = useMemo(
    () => [
      {
        label: (
          <span className="filter-panel-title">
            <FilterOutlined />
            <FormattedMessage id="pages.shipments.sidepanel.filterBy" />
          </span>
        ),
        key: '1',
        children: <FilterByPanel />,
      },
      {
        label: (
          <span className="filter-panel-title">
            <SearchOutlined />
            <FormattedMessage id="pages.shipments.sidepanel.searchBy" />
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
