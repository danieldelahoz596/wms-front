import { Card, Space, Radio } from 'antd';
import { useEffect, useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { FormattedMessage, useModel } from '@umijs/max';
import YearOverYear from './YearOverYear';
import RecentOrders from './RecentOrders';

interface IPerformancePanel {
  height: number;
}

const PerformancePanel: React.FC<IPerformancePanel> = ({ height }) => {
  const [selectedMode, setSelectedMode] = useState<'yearOverYear' | 'recentOrders'>('yearOverYear');
  const { editableProduct } = useModel('product');

  const handleTabSelect = (e: RadioChangeEvent) => {
    setSelectedMode(e.target.value);
  };

  useEffect(() => {
    if (!editableProduct) setSelectedMode('yearOverYear');
  }, [editableProduct]);

  return (
    <>
      <div className="title-row space-between">
        <h1 className="page-title">
          <FormattedMessage id="pages.products.bottomPanel.performance.title" />
        </h1>
        <Radio.Group size="small" buttonStyle="solid" value={selectedMode} onChange={handleTabSelect}>
          <Space size={HORIZONTAL_SPACE_SIZE}>
            <Radio.Button value="yearOverYear">
              <FormattedMessage id="component.button.yearOverYear" />
            </Radio.Button>
            <Radio.Button value="recentOrders">
              <FormattedMessage id="component.button.recentOrders" />
            </Radio.Button>
          </Space>
        </Radio.Group>
      </div>
      <Card className="content-box" style={{ height, padding: '5px 10px' }}>
        {!editableProduct ? (
          <h2 style={{ textAlign: 'center', marginTop: height / 2.0 - 50 }}>
            <FormattedMessage id="pages.products.bottomPanel.performance.description" />
          </h2>
        ) : selectedMode === 'yearOverYear' ? (
          <YearOverYear height={height} />
        ) : (
          <RecentOrders />
        )}
      </Card>
    </>
  );
};

export default PerformancePanel;
