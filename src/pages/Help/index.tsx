import { SampleSplitter } from '@/utils/components/SampleSplitter';
import { PageContainer } from '@ant-design/pro-components';
import { Layout, Menu } from 'antd';
import { useResizable } from 'react-resizable-layout';

import AccountingIcon from '@/utils/icons/accounting';
import BiggestTicketsIcon from '@/utils/icons/biggestTickets';
import CustomersIcon from '@/utils/icons/customers';
import InventoryIcon from '@/utils/icons/inventory';
import OrdersIcon from '@/utils/icons/orders';
import ProductsIcon from '@/utils/icons/products';
import SalesIcon from '@/utils/icons/sales';
import ShippingIcon from '@/utils/icons/shipping';
import { BellOutlined, UserOutlined } from '@ant-design/icons';

import { Link, useLocation } from '@umijs/max';
import type { MenuProps } from 'antd';
import React, { useMemo, useState } from 'react';

// Dashboard
import Dashboard from './Dashboard/dashboard';
import SkuAlerts from './Dashboard/skualerts';

// Orders
import Cancelorders from './Orders/cancelorders';
import Exportorders from './Orders/exportorders';
import Orders from './Orders/orders';

// Inventory

// Purchase Order

// Shipments

// Customers
import Customersmodule from './Customers/customersmodule';
import Exportcustomerphonenumbers from './Customers/exportcustomerphonenumbers';
import Searchcustomers from './Customers/searchcustomers';

// Products
import CreateBundleKit from './Products/createbundlekit';
import CreateCoreProduct from './Products/createcoreproduct';
import CreateProductVariations from './Products/createproductvariations';
import Customproductfields from './Products/customproductfields';
import Exportcustombundlekit from './Products/exportcustombundlekit';
import Exportproducts from './Products/exportproducts';
import Exportvendorproducts from './Products/exportvendorproducts';
import Importproducts from './Products/importproducts';
import ImportSkuAdjustments from './Products/importskuadjustments';
import ImportVendorProducts from './Products/importvendorproducts';
import Manageproducts from './Products/manageproducts';
import Products from './Products/products';
import Searchproducts from './Products/searchproducts';

// Analytics
import Analyticsreports from './Analytics/General/analyticsreports';
import Exportingreports from './Analytics/General/exportingreports';
import Printingchartsfromanalytics from './Analytics/General/printingchartsfromanalytics';
import Theanalyticsmodules from './Analytics/General/theanalyticsmodules';
import Biggesttickets from './Analytics/Orders/biggesttickets';
import Historicalordersexports from './Analytics/Orders/historicalordersexports';
import Salesoverview from './Analytics/Orders/salesoverview';
import Shipments from './Analytics/Orders/shipments';
import Analyticslistingprofitability from './Analytics/Products/analyticslistingprofitability';
import Analyticsskuprofitability from './Analytics/Products/analyticsskuprofitability';
import Yoygrowth from './Analytics/Products/yoygrowth';
import Topsellersandworstsellersreports from './Analytics/Products/topsellersandworstsellersreports';
import Analyticstrendingprofitability from './Analytics/Products/analyticstrendingprofitability';
import Historicalpurchaseordersexports from './Analytics/PurchaseOrders/historicalpurchaseordersexports';
import Opportunitiesfoundbyextensivordermanager from './Analytics/Dashboard/opportunitiesfoundbyextensivordermanager';
import Analyticsinventoryreplenishmentalerts from './Analytics/Inventory/analyticsinventoryreplenishmentalerts';
import Analyticssnapshotinventoryvalue from './Analytics/Inventory/analyticssnapshotinventoryvalue';
import Analyticstrendinginventoryvalue from './Analytics/Inventory/analyticstrendinginventoryvalue';
import Analyticscriticalinventorylevels from './Analytics/Inventory/analyticscriticalinventorylevels';
import Analyticsinventoryaging from './Analytics/Inventory/analyticsinventoryaging';

// Settings
import Companyinfo from './Settings/companyinfo';
import Myprofile from './Settings/myprofile';
import Useradministration from './Settings/useradministration';

const { Sider, Content } = Layout;
const rootSubmenuKeys = [
  'dashboard',
  'orders',
  'inventory',
  'purchasing',
  'shipments',
  'customers',
  'products',
  'analytics',
  'settings',
  'help',
];

const Help: React.FC = () => {
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState([
    location.pathname.split('/')[2],
    location.pathname.split('/')[3],
  ]);

  const {
    isDragging: isLeftDragging,
    position: LeftW,
    separatorProps: leftDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 250,
    min: 100,
  });

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const renderableContent = useMemo(() => {
    switch (location.pathname) {
      case '/help/dashboard/general':
        return <SkuAlerts />;
      case '/help/dashboard/skualerts':
        return <Dashboard />;
      // Orders
      case '/help/orders/general':
        return <Orders />;
      case '/help/orders/manage/cancel':
        return <Cancelorders />;
      case '/help/orders/exportorders':
        return <Exportorders />;
      // Customers
      case '/help/customers/search':
        return <Searchcustomers />;
      case '/help/customers/module':
        return <Customersmodule />;
      case '/help/customers/exportphonenumbers':
        return <Exportcustomerphonenumbers />;
      // Product
      case '/help/products/general':
        return <Products />;
      case '/help/products/manage':
        return <Manageproducts />;
      case '/help/products/create/coreproduct':
        return <CreateCoreProduct />;
      case '/help/products/create/bundlekit':
        return <CreateBundleKit />;
      case '/help/products/create/productvariations':
        return <CreateProductVariations />;
      case '/help/products/import/products':
        return <Importproducts />;
      case '/help/products/import/vendorproducts':
        return <ImportVendorProducts />;
      case '/help/products/import/skuadjustments':
        return <ImportSkuAdjustments />;
      case '/help/products/export/products':
        return <Exportproducts />;
      case '/help/products/export/vendorproducts':
        return <Exportvendorproducts />;
      case '/help/products/export/custombundlekit':
        return <Exportcustombundlekit />;
      case '/help/products/searchproducts':
        return <Searchproducts />;
      case '/help/products/customproductfields':
        return <Customproductfields />;
      case '/help/analytics/general/theanalyticsmodules':
        return <Theanalyticsmodules />;
      case '/help/analytics/general/analyticsreports':
        return <Analyticsreports />;
      case '/help/analytics/general/printingchartsfromanalytics':
        return <Printingchartsfromanalytics />;
      case '/help/analytics/general/exportingreports':
        return <Exportingreports />;
      case '/help/analytics/suborders/historicalsexports':
        return <Historicalordersexports />;
      case '/help/analytics/suborders/salesoverview':
        return <Salesoverview />;
      case '/help/analytics/suborders/biggesttickets':
        return <Biggesttickets />;
      case '/help/analytics/suborders/shipments':
        return <Shipments />;
      case '/help/analytics/subproducts/analyticsskuprofitability':
        return <Analyticsskuprofitability />;
      case '/help/analytics/subproducts/yoygrowth':
        return <Yoygrowth />;
      case '/help/analytics/subproducts/analyticslistingprofitability':
        return <Analyticslistingprofitability />;
      case '/help/analytics/subproducts/topsellersandworstsellersreports':
        return <Topsellersandworstsellersreports />;
      case '/help/analytics/subproducts/analyticstrendingprofitability':
        return <Analyticstrendingprofitability />;
      case '/help/analytics/subdashboard/opportunitiesfoundbyextensivordermanager':
        return <Opportunitiesfoundbyextensivordermanager />;
      case '/help/analytics/subinventory/analyticsinventoryreplenishmentalerts':
        return <Analyticsinventoryreplenishmentalerts />;
      case '/help/analytics/subinventory/analyticssnapshotinventoryvalue':
        return <Analyticssnapshotinventoryvalue />;
      case '/help/analytics/subinventory/analyticstrendinginventoryvalue':
        return <Analyticstrendinginventoryvalue />;
      case '/help/analytics/subinventory/analyticscriticalinventorylevels':
        return <Analyticscriticalinventorylevels />;
      case '/help/analytics/subinventory/analyticsinventoryaging':
        return <Analyticsinventoryaging />;
      case '/help/analytics/subpurchaseorders/historicalexports':
        return <Historicalpurchaseordersexports />;
      case '/help/settings/myprofile':
        return <Myprofile />;
      case '/help/settings/useradministration':
        return <Useradministration />;
      case '/help/settings/companyinfo':
        return <Companyinfo />;
      default:
        return <></>;
    }
  }, [location.pathname]);

  return (
    <PageContainer title={false} className={'flex flex-column overflow-hidden'}>
      <div className={'flex grow'}>
        <Sider width={LeftW} trigger={null}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[location.pathname]}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            items={[
              // Dashboard
              {
                key: 'dashboard',
                icon: <ProductsIcon />,
                label: 'Dashboard',
                children: [
                  {
                    key: '/help/dashboard/general',
                    icon: <BellOutlined />,
                    label: <Link to="/help/dashboard/general">Dashboard</Link>,
                  },
                  {
                    key: '/help/dashboard/skualerts',
                    icon: <BellOutlined />,
                    label: <Link to="/help/dashboard/skualerts">SKU Alerts</Link>,
                  },
                ],
              },

              // Orders
              {
                key: 'orders',
                icon: <InventoryIcon />,
                label: 'Orders',
                children: [
                  // Orders - General
                  {
                    key: '/help/orders/general',
                    icon: <AccountingIcon />,
                    label: <Link to="/help/orders/general">Orders</Link>,
                  },
                  // Orders - Manage
                  {
                    key: 'manage',
                    icon: <AccountingIcon />,
                    label: 'How to Manage Orders',
                    children: [
                      {
                        key: '/help/orders/manage/cancel',
                        icon: <AccountingIcon />,
                        label: <Link to="/help/orders/manage/cancel">Cancel Order</Link>,
                      },
                      {
                        key: '/help/orders/manage/merge',
                        icon: <AccountingIcon />,
                        label: <Link to="/help/orders/manage/merge">Merge Orders</Link>,
                      },
                      {
                        key: '/help/orders/manage/split',
                        icon: <AccountingIcon />,
                        label: <Link to="/help/orders/manage/split">Split Orders</Link>,
                      },
                      {
                        key: '/help/orders/manage/restore',
                        icon: <AccountingIcon />,
                        label: <Link to="/help/orders/manage/restore">Restore Orders</Link>,
                      },
                      {
                        key: '/help/orders/manage/makeorders',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/orders/manage/makeorders">Mark Orders as Shipped</Link>
                        ),
                      },
                    ],
                  },
                  // Orders - Edit
                  {
                    key: 'edit',
                    icon: <AccountingIcon />,
                    label: 'How to Edit Orders',
                    children: [
                      {
                        key: '/help/orders/edit/add',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/orders/edit/add">Add an item to an existing order</Link>
                        ),
                      },
                    ],
                  },
                  // Orders - ExportOrders
                  {
                    key: '/help/orders/exportorders',
                    icon: <AccountingIcon />,
                    label: <Link to="/help/orders/exportorders">How to Export Orders</Link>,
                  },
                  // Orders - Resolve
                  {
                    key: 'resolve',
                    icon: <AccountingIcon />,
                    label: 'How to Resolve Orders',
                    children: [
                      {
                        key: '/help/orders/resolve/missingorderinfo',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/orders/resolve/missingorderinfo">Missing Order Info</Link>
                        ),
                      },
                      {
                        key: '/help/orders/resolve/missingproductinfo',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/orders/resolve/missingproductinfo">
                            Missing Product Info
                          </Link>
                        ),
                      },
                      {
                        key: '/help/orders/resolve/missingfulfillmentsource',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/orders/resolve/missingfulfillmentsource">
                            Missing Fulfillment Source
                          </Link>
                        ),
                      },
                      {
                        key: '/help/orders/resolve/missingstocklocation',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/orders/resolve/missingstocklocation">
                            Missing Stock Location
                          </Link>
                        ),
                      },
                      {
                        key: '/help/orders/resolve/outofstock',
                        icon: <AccountingIcon />,
                        label: <Link to="/help/orders/resolve/outofstock">Out of Stock</Link>,
                      },
                    ],
                  },
                ],
              },

              // Inventory
              {
                key: 'inventory',
                icon: <OrdersIcon />,
                label: 'Inventory',
                children: [
                  {
                    key: '/help/inventory/salesoverview',
                    icon: <SalesIcon />,
                    label: <Link to="/help/inventory/salesoverview">Sales Overview</Link>,
                  },
                ],
              },

              // Purchasing
              {
                key: 'purchasing',
                icon: <CustomersIcon />,
                label: 'Purchasing',
                children: [
                  {
                    key: '/help/purchasing/test',
                    icon: <UserOutlined />,
                    label: <Link to="/help/purchasing/test">Test</Link>,
                  },
                ],
              },

              // Shipments
              {
                key: 'shipments',
                icon: <AccountingIcon />,
                label: 'Shipments',
                children: [
                  {
                    key: '/help/shipments/test',
                    icon: <UserOutlined />,
                    label: <Link to="/help/shipments/test">Test</Link>,
                  },
                ],
              },

              // Customers
              {
                key: 'customers',
                icon: <AccountingIcon />,
                label: 'Customers',
                children: [
                  {
                    key: '/help/customers/search',
                    icon: <AccountingIcon />,
                    label: <Link to="/help/customers/search">How to Search Customers</Link>,
                  },
                  {
                    key: '/help/customers/module',
                    icon: <AccountingIcon />,
                    label: <Link to="/help/customers/module">Customers Module</Link>,
                  },
                  {
                    key: '/help/customers/exportphonenumbers',
                    icon: <AccountingIcon />,
                    label: (
                      <Link to="/help/customers/exportphonenumbers">
                        Exporting Customer Phone Numbers from the Orders Module
                      </Link>
                    ),
                  },
                ],
              },

              // Products
              {
                key: 'products',
                icon: <AccountingIcon />,
                label: 'Products',
                children: [
                  {
                    key: '/help/products/general',
                    icon: <AccountingIcon />,
                    label: <Link to="/help/products/general">Products</Link>,
                  },
                  {
                    key: '/help/products/manage',
                    icon: <AccountingIcon />,
                    label: <Link to="/help/products/manage">How to Manage Products</Link>,
                  },

                  // Product - Create
                  {
                    key: 'create',
                    icon: <AccountingIcon />,
                    label: 'How to Create Through the UI',
                    children: [
                      {
                        key: '/help/products/create/coreproduct',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/products/create/coreproduct">Create Core Products</Link>
                        ),
                      },
                      {
                        key: '/help/products/create/bundlekit',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/products/create/bundlekit">Create Bundles/Kits</Link>
                        ),
                      },
                      {
                        key: '/help/products/create/productvariations',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/products/create/productvariations">
                            Create Product Variations
                          </Link>
                        ),
                      },
                    ],
                  },

                  // Product - Import
                  {
                    key: 'import',
                    icon: <AccountingIcon />,
                    label: 'How to Import',
                    children: [
                      {
                        key: '/help/products/import/products',
                        icon: <AccountingIcon />,
                        label: <Link to="/help/products/import/products">Import Products</Link>,
                      },
                      {
                        key: '/help/products/import/vendorproducts',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/products/import/vendorproducts">
                            Import Vendor Products
                          </Link>
                        ),
                      },
                      {
                        key: '/help/products/import/skuadjustments',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/products/import/skuadjustments">
                            Import SKU Adjustments
                          </Link>
                        ),
                      },
                    ],
                  },

                  // Product - Export
                  {
                    key: 'export',
                    icon: <AccountingIcon />,
                    label: 'How to Export',
                    children: [
                      {
                        key: '/help/products/export/products',
                        icon: <AccountingIcon />,
                        label: <Link to="/help/products/export/products">Export Products</Link>,
                      },
                      {
                        key: '/help/products/export/vendorproducts',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/products/export/vendorproducts">
                            Export Vendor Products
                          </Link>
                        ),
                      },
                      {
                        key: '/help/products/export/custombundlekit',
                        icon: <AccountingIcon />,
                        label: (
                          <Link to="/help/products/export/custombundlekit">
                            Export Custom Bundle/Kit
                          </Link>
                        ),
                      },
                    ],
                  },

                  // Product - Search
                  {
                    key: '/help/products/searchproducts',
                    icon: <AccountingIcon />,
                    label: <Link to="/help/products/searchproducts">How to Search Products</Link>,
                  },

                  // Product - Custom Product Fields
                  {
                    key: '/help/products/customproductfields',
                    icon: <AccountingIcon />,
                    label: (
                      <Link to="/help/products/customproductfields">
                        How to Create Custom Product Fields
                      </Link>
                    ),
                  },
                ],
              },

              // Analytics
              {
                key: 'analytics',
                icon: <ShippingIcon />,
                label: 'Analytics',
                children: [
                  // Analytics - General
                  {
                    key: 'general',
                    icon: <SalesIcon />,
                    label: 'General',
                    children: [
                      {
                        key: '/help/analytics/general/theanalyticsmodules',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/general/theanalyticsmodules">
                            {"The Analytics Module's Landing Page"}
                          </Link>
                        ),
                      },
                      {
                        key: '/help/analytics/general/analyticsreports',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/general/analyticsreports">
                            Analytics Reports
                          </Link>
                        ),
                      },
                      {
                        key: '/help/analytics/general/printingchartsfromanalytics',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/general/printingchartsfromanalytics">
                            Printing Charts from Analytics
                          </Link>
                        ),
                      },
                      {
                        key: '/help/analytics/general/exportingreports',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/general/exportingreports">
                            Exporting Reports
                          </Link>
                        ),
                      },
                    ],
                  },

                  // Analytics - Orders
                  {
                    key: 'suborders',
                    icon: <OrdersIcon />,
                    label: 'Orders',
                    children: [
                      {
                        key: '/help/analytics/suborders/historicalsexports',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/suborders/historicalsexports">
                            Historical Exports
                          </Link>
                        ),
                      },
                      {
                        key: '/help/analytics/suborders/salesoverview',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/suborders/salesoverview">Sales Overview</Link>
                        ),
                      },
                      {
                        key: '/help/analytics/suborders/biggesttickets',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/suborders/biggesttickets">Biggest Tickets</Link>
                        ),
                      },
                      {
                        key: '/help/analytics/suborders/shipments',
                        icon: <SalesIcon />,
                        label: <Link to="/help/analytics/suborders/shipments">Shipments</Link>,
                      },
                    ],
                  },

                  // Analytics - Purchase Orders
                  {
                    key: 'subpurchaseorders',
                    icon: <OrdersIcon />,
                    label: 'Purchase Orders',
                    children: [
                      {
                        key: '/help/analytics/subpurchaseorders/historicalexports',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/subpurchaseorders/historicalexports">
                            Historical Exports
                          </Link>
                        ),
                      },
                    ],
                  },

                  // Analytics - Products
                  {
                    key: 'subproducts',
                    icon: <OrdersIcon />,
                    label: 'Products',
                    children: [
                      {
                        key: '/help/analytics/subproducts/analyticsskuprofitability',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/subproducts/analyticsskuprofitability">
                            Analytics - SKU Profitability
                          </Link>
                        ),
                      },
                      {
                        key: '/help/analytics/subproducts/yoygrowth',
                        icon: <SalesIcon />,
                        label: <Link to="/help/analytics/subproducts/yoygrowth">Y-O-Y Growth</Link>,
                      },
                      {
                        key: '/help/analytics/subproducts/analyticslistingprofitability',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/subproducts/analyticslistingprofitability">
                            Analytics - Listing Profitability
                          </Link>
                        ),
                      },
                      {
                        key: '/help/analytics/subproducts/topsellersandworstsellersreports',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/subproducts/topsellersandworstsellersreports">
                            Top Sellers & Worst Sellers Reports
                          </Link>
                        ),
                      },
                      {
                        key: '/help/analytics/subproducts/analyticstrendingprofitability',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/subproducts/analyticstrendingprofitability">
                            Analytics - Trending Profitability
                          </Link>
                        ),
                      },
                    ],
                  },

                  // Analytics - Dashboard
                  {
                    key: 'subdashboard',
                    icon: <OrdersIcon />,
                    label: 'Dashboard',
                    children: [
                      {
                        key: '/help/analytics/subdashboard/opportunitiesfoundbyextensivordermanager',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/subdashboard/opportunitiesfoundbyextensivordermanager">
                            Opportunities Found by Extensiv Order Manager
                          </Link>
                        ),
                      },
                    ],
                  },

                  // Analytics - Inventory
                  {
                    key: 'subinventory',
                    icon: <OrdersIcon />,
                    label: 'Inventory',
                    children: [
                      {
                        key: '/help/analytics/subinventory/analyticsinventoryreplenishmentalerts',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/subinventory/analyticsinventoryreplenishmentalerts">
                            Analytics - Inventory Replenishment Alerts
                          </Link>
                        ),
                      },
                      {
                        key: '/help/analytics/subinventory/analyticssnapshotinventoryvalue',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/subinventory/analyticssnapshotinventoryvalue">
                            Analytics - Snapshot Inventory Value
                          </Link>
                        ),
                      },
                      {
                        key: '/help/analytics/subinventory/analyticstrendinginventoryvalue',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/subinventory/analyticstrendinginventoryvalue">
                            Analytics - Trending Inventory Value
                          </Link>
                        ),
                      },
                      {
                        key: '/help/analytics/subinventory/analyticscriticalinventorylevels',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/subinventory/analyticscriticalinventorylevels">
                            Analytics - Critical Inventory Levels
                          </Link>
                        ),
                      },
                      {
                        key: '/help/analytics/subinventory/analyticsinventoryaging',
                        icon: <SalesIcon />,
                        label: (
                          <Link to="/help/analytics/subinventory/analyticsinventoryaging">
                            Analytics - Inventory Aging
                          </Link>
                        ),
                      },
                    ],
                  },
                ],
              },

              // Settings
              {
                key: 'settings',
                icon: <BiggestTicketsIcon />,
                label: 'Settings',
                children: [
                  {
                    key: '/help/settings/myprofile',
                    icon: <SalesIcon />,
                    label: <Link to="/help/settings/myprofile">My Profile</Link>,
                  },
                  {
                    key: '/help/settings/useradministration',
                    icon: <SalesIcon />,
                    label: <Link to="/help/settings/useradministration">User Administration</Link>,
                  },
                  {
                    key: '/help/settings/companyinfo',
                    icon: <SalesIcon />,
                    label: <Link to="/help/settings/companyinfo">Company Info</Link>,
                  },
                ],
              },

              // Help
              {
                key: 'help',
                icon: <AccountingIcon />,
                label: 'Help',
                children: [
                  {
                    key: '/help/help',
                    icon: <UserOutlined />,
                    label: <Link to="/help/help">Test</Link>,
                  },
                ],
              },
            ]}
          />
        </Sider>

        <SampleSplitter isDragging={isLeftDragging} {...leftDragBarProps} />

        <div className="help-content">{renderableContent}</div>

        {/* <div className="w-full flex flex-column h-screen">
          <div className="horizon-content">
            <Layout className="site-layout">
              <Content className="site-layout-background">{renderableContent}</Content>
            </Layout>
          </div>
        </div> */}
      </div>
    </PageContainer>
  );
};

export default Help;
