import React, { useMemo } from 'react';
import { Layout } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { useLocation } from '@umijs/max';
import { useResizable } from 'react-resizable-layout';
import { SampleSplitter, cn } from '@/components/Globals/SampleSplitter';
import LeftPanel from './components/LeftPanel';
import LandingPage from './components/LandingPage';
import HistoricalOrdersExports from './components/Orders/HistoricalOrdersExports';
import HistoricalPurchaseOrdersExports from './components/PurchaseOrders/HistoricalPurchaseOrdersExports';
import SKUProfitability from './components/Products/SKUProfitability';
import TopSellers from './components/Products/TopSellers';
import WorstSellers from './components/Products/WorstSellers';
import YOYGrowth from './components/Products/YOYGrowth';
import TrendingProfitability from './components/Products/TrendingProfitability';
import ShipmentSummary from './components/Accounting/ShipmentSummary';
import CogsBySKU from './components/Accounting/CogsBySKU';
import SalesSummary from './components/Accounting/SalesSummary';
import InventoryValue from './components/Accounting/InventoryValue';
import ReplenishmentAlerts from './components/Inventory/ReplenishmentAlerts';
import CriticalInventoryLevels from './components/Inventory/CriticalInventoryLevels';
import InventoryAging from './components/Inventory/inventoryaging';
import SnapshotInventory from './components/Inventory/SnapshotInventory';
import TrendingInventory from './components/Inventory/TrendingInventory';
import BiggestTickets from './components/Orders/BiggestTickets';
import Shipments from './components/Orders/Shipments';
import SalesOverview from './components/Orders/SalesOverview';
import LifetimeValue from './components/Customers/LifetimeValue';
import BiggestSpenders from './components/Customers/BiggestSpenders';
import MostFrequentCustomers from './components/Customers/MostFrequentCustomers';
import MostRecentCustomers from './components/Customers/MostRecentCustomers';

const Analytics: React.FC = () => {
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
      // product
      case '/analytics/products/topsellers':
        return <TopSellers />;
      case '/analytics/products/worstsellers':
        return <WorstSellers />;
      case '/analytics/products/yoygrowth':
        return <YOYGrowth />;
      case '/analytics/products/skuprofitability':
        return <SKUProfitability />;
      case '/analytics/products/trendingprofitability':
        return <TrendingProfitability />;

      // inventory
      case '/analytics/inventory/replenishmentalerts':
        return <ReplenishmentAlerts />;
      case '/analytics/inventory/snapshotinventory':
        return <SnapshotInventory />;
      case '/analytics/inventory/trendinginventory':
        return <TrendingInventory />;
      case '/analytics/inventory/criticalinventorylevels':
        return <CriticalInventoryLevels />;
      case '/analytics/inventory/inventoryaging':
        return <InventoryAging />;

      // orders
      case '/analytics/orders/salesoverview':
        return <SalesOverview />;
      case '/analytics/orders/biggesttickets':
        return <BiggestTickets />;
      case '/analytics/orders/shipments':
        return <Shipments />;
      case '/analytics/orders/historicalexports':
        return <HistoricalOrdersExports />;

      // purchaseorders
      case '/analytics/purchaseorders/historicalexports':
        return <HistoricalPurchaseOrdersExports />;

      // customers
      case '/analytics/customers/lifetimevalue':
        return <LifetimeValue />;
      case '/analytics/customers/biggestspenders':
        return <BiggestSpenders />;
      case '/analytics/customers/mostfrequentcustomers':
        return <MostFrequentCustomers />;
      case '/analytics/customers/mostrecentcustomers':
        return <MostRecentCustomers />;

      // accounting
      case '/analytics/accounting/shipmentsummary':
        return <ShipmentSummary />;
      case '/analytics/accounting/cogsbysku':
        return <CogsBySKU />;
      case '/analytics/accounting/salessummary':
        return <SalesSummary />;
      case '/analytics/accounting/inventoryvalue':
        return <InventoryValue />;
      default:
        return <LandingPage />;
    }
  }, [location.pathname]);

  return (
    <PageContainer title={false} className={'flex flex-column overflow-hidden'} header={{ breadcrumb: {} }}>
      <Layout>
        <div className={'flex grow'}>
          <div className={cn('shrink-0 contents', isLeftDragging && 'dragging')} style={{ width: LeftW }}>
            <div className="w-full">
              <LeftPanel />
            </div>
          </div>

          <SampleSplitter isDragging={isLeftDragging} {...leftDragBarProps} />

          <div className="w-full flex flex-column">
            <div className="horizon-content">
              <Layout className="site-layout">{mainContent}</Layout>
            </div>
          </div>
        </div>
      </Layout>
    </PageContainer>
  );
};

export default Analytics;
