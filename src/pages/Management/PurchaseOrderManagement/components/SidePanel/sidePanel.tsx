import React from 'react';
import 
// Icon, 
{ 
  // CaretRightOutlined, 
  FilterOutlined, 
  SearchOutlined 
} from '@ant-design/icons';
import { 
  // Collapse, 
  // List, 
  // Row, 
  // Col, 
  // Card, 
  Tabs 
} from 'antd';
/* import { 
  sidePanelData, 
  sidePanelChildrenData 
} from '@/data'; */
import SideFilterTree from './sideFilterTree';
import SideSearch from './sideSearchComponent';
// const { Panel } = Collapse;

const SidePanel: React.FC = () => {
  /* const sidePanelChildrenRender = () => {
    return (
      <List
        size="small"
        dataSource={sidePanelChildrenData}
        renderItem={(item) => <List.Item>{item?.title}</List.Item>}
      />
    );
  };

  const sidePanelRender = () => {
    return sidePanelData.map((item) => {
      return (
        <Panel header={item.header} key={item.id} className="site-collapse-custom-panel">
          {sidePanelChildrenRender()}
        </Panel>
      );
    });
  }; */

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
      children: <SideSearch/>,
    }
  ];


  return (
    <div style={{padding: 2}}>
      <Tabs     
        size='small'   
        defaultActiveKey="1"
        items = {items}
      />
    </div>
  );
};

export default SidePanel;
