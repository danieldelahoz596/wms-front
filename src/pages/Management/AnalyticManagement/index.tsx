import React, { useMemo } from 'react';
import { Layout } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { useLocation } from '@umijs/max';
import { useResizable } from 'react-resizable-layout';
import { SampleSplitter, cn } from '@/utils/components/SampleSplitter';
import LeftPanel from './components/LeftPanel';
import LandingPage from './components/LandingPage';
import HistoricalOrdersExports from './Orders/HistoricalOrdersExports';
import HistoricalPurchaseOrdersExports from './PurchaseOrders/HistoricalPurchaseOrdersExports';
import SKUProfitability from './Products/SKUProfitability';

const AnalyticManagement: React.FC = () => {
  const location = useLocation();

  const {
    isDragging: isLeftDragging,
    position: LeftW,
    separatorProps: leftDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 250,
    min: 100,
  });

  const mainContent = useMemo(() => {
    switch (location.pathname) {
      case '/analytics/products/skuprofitability':
        return <SKUProfitability />;
      case '/analytics/orders/historicalexports':
        return <HistoricalOrdersExports />;
      case '/analytics/purchaseorders/historicalexports':
        return <HistoricalPurchaseOrdersExports />;
      default:
        return <LandingPage />;
    }
  }, [location.pathname]);

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
              <LeftPanel />
            </div>
          </div>

          <SampleSplitter isDragging={isLeftDragging} {...leftDragBarProps} />

          <div className="w-full flex flex-column h-screen">
            <div className="horizon-content">
              <Layout className="site-layout"> {mainContent}</Layout>
            </div>
          </div>
        </div>
      </Layout>
    </PageContainer>
  );
};

export default AnalyticManagement;
