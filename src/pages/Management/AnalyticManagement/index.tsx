import { useMemo } from 'react';
import { Layout } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import HistoricalOrdersExports from './Orders/HistoricalExports';
import HistoricalPurchaseOrdersExports from './PurchaseOrders/HistoricalExports';
import React, { useState } from 'react';
import { SampleSplitter, cn } from '@/utils/components/SampleSplitter';
import { useResizable } from 'react-resizable-layout';
import LeftPanel from './components/LeftPanel';
import LandingPage from './components/LandingPage';

const { Content } = Layout;

const AnalyticManagement: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState(null);

  const {
    isDragging: isLeftDragging,
    position: LeftW,
    separatorProps: leftDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 250,
    min: 100,
  });

  const mainContent = useMemo(
    () =>
      selectedKey === 'sub34' ? (
        <HistoricalOrdersExports />
      ) : selectedKey === 'sub41' ? (
        <HistoricalPurchaseOrdersExports />
      ) : (
        <LandingPage />
      ),
    [selectedKey],
  );

  return (
    <PageContainer
      title={false}
      className={'flex flex-column overflow-hidden'}
      header={{ breadcrumb: {} }}
    >
      <Layout>
        <div className={'flex grow'}>
          <div
            className={cn('shrink-0 contents', isLeftDragging && 'dragging')}
            style={{ width: LeftW }}
          >
            <div className="w-full">
              <LeftPanel selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
            </div>
          </div>

          <SampleSplitter isDragging={isLeftDragging} {...leftDragBarProps} />

          <div className="w-full flex flex-column h-screen">
            <div className="horizon-content">
              <Layout className="site-layout">
                <Content className="site-layout-background">{mainContent}</Content>
              </Layout>
            </div>
          </div>
        </div>
      </Layout>
    </PageContainer>
  );
};

export default AnalyticManagement;
