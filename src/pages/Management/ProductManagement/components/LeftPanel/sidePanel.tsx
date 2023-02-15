import React, { useState } from 'react';
import { Button, Row, Col } from 'antd';
import { DoubleRightOutlined, SearchOutlined } from '@ant-design/icons';
import SearchByProductPanel from './searchByProductPanel';
import SearchByCategoriesPanel from './searchByCategoriesPanel';

const SidePanel: React.FC = () => {
  const [searchType, setSearchType] = useState(true);

  return (
    <div className='left-panel'>
      <Row justify="space-between" align="middle">
        <Col flex="auto">
          <div style={{ marginLeft: '5px' }}>
            <h2>{searchType ? 'Search Products...' : 'Filter By'}</h2>
          </div>
        </Col>
        <Col>
          <Button
            icon={
              searchType ? (
                <DoubleRightOutlined rotate={270} />
              ) : (
                <DoubleRightOutlined rotate={90} />
              )
            }
            onClick={() => setSearchType(!searchType)}
            size="large"
            ghost
            style={{ border: 'none' }}
          >
            <SearchOutlined />
          </Button>
        </Col>
      </Row>
      <div>{searchType ? <SearchByProductPanel /> : <SearchByCategoriesPanel />}</div>
    </div>
  );
};

export default SidePanel;
