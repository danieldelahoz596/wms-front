import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useState } from 'react';
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

const SidePanel = () => {
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState([location.pathname.split('/')[2], location.pathname.split('/')[3]]);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
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
                  label: <Link to="/help/orders/manage/makeorders">Mark Orders as Shipped</Link>,
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
                  label: <Link to="/help/orders/edit/add">Add an item to an existing order</Link>,
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
                  label: <Link to="/help/orders/resolve/missingorderinfo">Missing Order Info</Link>,
                },
                {
                  key: '/help/orders/resolve/missingproductinfo',
                  icon: <AccountingIcon />,
                  label: <Link to="/help/orders/resolve/missingproductinfo">Missing Product Info</Link>,
                },
                {
                  key: '/help/orders/resolve/missingfulfillmentsource',
                  icon: <AccountingIcon />,
                  label: <Link to="/help/orders/resolve/missingfulfillmentsource">Missing Fulfillment Source</Link>,
                },
                {
                  key: '/help/orders/resolve/missingstocklocation',
                  icon: <AccountingIcon />,
                  label: <Link to="/help/orders/resolve/missingstocklocation">Missing Stock Location</Link>,
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
              key: '/help/shipments/searchingForShipments',
              icon: <AccountingIcon />,
              label: <Link to="/help/shipments/searchingForShipments">Searching for Shipments</Link>,
            },
            {
              key: '/help/shipments/printingShippingLabels',
              icon: <AccountingIcon />,
              label: <Link to="/help/shipments/printingShippingLabels">Printing Shipping Labels</Link>,
            },
            {
              key: '/help/shipments/printEndOfDayForms',
              icon: <AccountingIcon />,
              label: <Link to="/help/shipments/printEndOfDayForms">How To Print End of Day Forms</Link>,
            },
            {
              key: '/help/shipments/trackingShipments',
              icon: <AccountingIcon />,
              label: <Link to="/help/shipments/trackingShipments">Tracking Shipments</Link>,
            },
            {
              key: '/help/shipments/rmaExports',
              icon: <AccountingIcon />,
              label: <Link to="/help/shipments/rmaExports">RMA Exports</Link>,
            },
            {
              key: '/help/shipments/printForUPSShipments',
              icon: <AccountingIcon />,
              label: (
                <Link to="/help/shipments/printForUPSShipments">
                  How do I print an End of Day form or Package Level Detail report for UPS shipments?
                </Link>
              ),
            },
            {
              key: '/help/shipments/resendingConfirmationEmails',
              icon: <AccountingIcon />,
              label: <Link to="/help/shipments/resendingConfirmationEmails">Resending Confirmation Emails</Link>,
            },
            {
              key: '/help/shipments/voidingShipments',
              icon: <AccountingIcon />,
              label: <Link to="/help/shipments/voidingShipments">Voiding Shipments</Link>,
            },
            {
              key: '/help/shipments/postalZones',
              icon: <AccountingIcon />,
              label: <Link to="/help/shipments/postalZones">Postal Zones</Link>,
            },
            {
              key: '/help/shipments/exportingShipments',
              icon: <AccountingIcon />,
              label: <Link to="/help/shipments/exportingShipments">Exporting Shipments</Link>,
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
              label: <Link to="/help/customers/exportphonenumbers">Exporting Customer Phone Numbers from the Orders Module</Link>,
            },
          ],
        },
        {
          // Products
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
            {
              // Create
              key: 'create',
              icon: <AccountingIcon />,
              label: 'How to Create Through the UI',
              children: [
                {
                  key: '/help/products/create/coreproduct',
                  icon: <AccountingIcon />,
                  label: <Link to="/help/products/create/coreproduct">Create Core Products</Link>,
                },
                {
                  key: '/help/products/create/bundlekit',
                  icon: <AccountingIcon />,
                  label: <Link to="/help/products/create/bundlekit">Create Bundles/Kits</Link>,
                },
                {
                  key: '/help/products/create/productvariations',
                  icon: <AccountingIcon />,
                  label: <Link to="/help/products/create/productvariations">Create Product Variations</Link>,
                },
              ],
            },
            {
              // Import
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
                  label: <Link to="/help/products/import/vendorproducts">Import Vendor Products</Link>,
                },
                {
                  key: '/help/products/import/skuadjustments',
                  icon: <AccountingIcon />,
                  label: <Link to="/help/products/import/skuadjustments">Import SKU Adjustments</Link>,
                },
              ],
            },
            {
              // Export
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
                  label: <Link to="/help/products/export/vendorproducts">Export Vendor Products</Link>,
                },
                {
                  key: '/help/products/export/custombundlekit',
                  icon: <AccountingIcon />,
                  label: <Link to="/help/products/export/custombundlekit">Export Custom Bundle/Kit</Link>,
                },
              ],
            },
            {
              // Search
              key: '/help/products/searchproducts',
              icon: <AccountingIcon />,
              label: <Link to="/help/products/searchproducts">How to Search Products</Link>,
            },
            {
              // Custom Product Fields
              key: '/help/products/customproductfields',
              icon: <AccountingIcon />,
              label: <Link to="/help/products/customproductfields">How to Create Custom Product Fields</Link>,
            },

            {
              // FAQ
              key: '/help/products/faq',
              icon: <AccountingIcon />,
              label: <Link to="/help/products/faq">FAQ</Link>,
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
                  label: <Link to="/help/analytics/general/theanalyticsmodules">{"The Analytics Module's Landing Page"}</Link>,
                },
                {
                  key: '/help/analytics/general/analyticsreports',
                  icon: <SalesIcon />,
                  label: <Link to="/help/analytics/general/analyticsreports">Analytics Reports</Link>,
                },
                {
                  key: '/help/analytics/general/printingchartsfromanalytics',
                  icon: <SalesIcon />,
                  label: <Link to="/help/analytics/general/printingchartsfromanalytics">Printing Charts from Analytics</Link>,
                },
                {
                  key: '/help/analytics/general/exportingreports',
                  icon: <SalesIcon />,
                  label: <Link to="/help/analytics/general/exportingreports">Exporting Reports</Link>,
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
                  label: <Link to="/help/analytics/suborders/historicalsexports">Historical Exports</Link>,
                },
                {
                  key: '/help/analytics/suborders/salesoverview',
                  icon: <SalesIcon />,
                  label: <Link to="/help/analytics/suborders/salesoverview">Sales Overview</Link>,
                },
                {
                  key: '/help/analytics/suborders/biggesttickets',
                  icon: <SalesIcon />,
                  label: <Link to="/help/analytics/suborders/biggesttickets">Biggest Tickets</Link>,
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
                  label: <Link to="/help/analytics/subpurchaseorders/historicalexports">Historical Exports</Link>,
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
                  label: <Link to="/help/analytics/subproducts/analyticsskuprofitability">Analytics - SKU Profitability</Link>,
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
                    <Link to="/help/analytics/subproducts/analyticslistingprofitability">Analytics - Listing Profitability</Link>
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
                  label: <Link to="/help/analytics/subinventory/analyticsinventoryaging">Analytics - Inventory Aging</Link>,
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
  );
};

export default SidePanel;
