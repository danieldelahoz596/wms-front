import React, { useMemo } from 'react';
import { Layout } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import { useLocation } from '@umijs/max';
import { useResizable } from 'react-resizable-layout';
import { SampleSplitter, cn } from '@/components/Globals/SampleSplitter';
import LeftPanel from './LeftPanel';
import LandingPage from './MainPanel/LandingPage';
import HistoricalOrdersExports from './MainPanel/Orders/HistoricalOrdersExports';
import HistoricalPurchaseOrdersExports from './MainPanel/PurchaseOrders/HistoricalPurchaseOrdersExports';
import SKUProfitability from './MainPanel/Products/SKUProfitability';
import TopSellers from './MainPanel/Products/TopSellers';
import WorstSellers from './MainPanel/Products/WorstSellers';
import YOYGrowth from './MainPanel/Products/YOYGrowth';
import TrendingProfitability from './MainPanel/Products/TrendingProfitability';
import ShipmentSummary from './MainPanel/Accounting/ShipmentSummary';
import CogsBySKU from './MainPanel/Accounting/CogsBySKU';
import SalesSummary from './MainPanel/Accounting/SalesSummary';
import InventoryValue from './MainPanel/Accounting/InventoryValue';
import ReplenishmentAlerts from './MainPanel/Inventory/ReplenishmentAlerts';
import CriticalInventoryLevels from './MainPanel/Inventory/CriticalInventoryLevels';
import InventoryAging from './MainPanel/Inventory/inventoryaging';
import SnapshotInventory from './MainPanel/Inventory/SnapshotInventory';
import TrendingInventory from './MainPanel/Inventory/TrendingInventory';
import BiggestTickets from './MainPanel/Orders/BiggestTickets';
import Shipments from './MainPanel/Orders/Shipments';
import SalesOverview from './MainPanel/Orders/SalesOverview';
import LifetimeValue from './MainPanel/Customers/LifetimeValue';
import BiggestSpenders from './MainPanel/Customers/BiggestSpenders';
import MostFrequentCustomers from './MainPanel/Customers/MostFrequentCustomers';
import MostRecentCustomers from './MainPanel/Customers/MostRecentCustomers';

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
