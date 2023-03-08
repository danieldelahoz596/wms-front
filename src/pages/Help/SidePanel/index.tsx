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
  'warehouse',
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
              key: '/help/inventory/general',
              icon: <SalesIcon />,
              label: <Link to="/help/inventory/general">Overview</Link>,
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
              key: '/help/purchasing/availableActions',
              icon: <UserOutlined />,
              label: <Link to="/help/purchasing/availableActions">Available Actions for a PO</Link>,
            },
            {
              key: '/help/purchasing/restoringPO',
              icon: <UserOutlined />,
              label: <Link to="/help/purchasing/restoringPO">Restoring a PO</Link>,
            },
            {
              key: '/help/purchasing/updatingPONumber',
              icon: <UserOutlined />,
              label: <Link to="/help/purchasing/updatingPONumber">Updating PO Number Prefix</Link>,
            },
            {
              key: '/help/purchasing/reSendingPO',
              icon: <UserOutlined />,
              label: <Link to="/help/purchasing/reSendingPO">Re-Sending a PO</Link>,
            },
            {
              key: '/help/purchasing/receivingPO',
              icon: <UserOutlined />,
              label: <Link to="/help/purchasing/receivingPO">Receiving a P.O.</Link>,
            },
            {
              key: '/help/purchasing/printingPO',
              icon: <UserOutlined />,
              label: <Link to="/help/purchasing/printingPO">Printing a P.O.</Link>,
            },
            {
              key: '/help/purchasing/cancelingPO',
              icon: <UserOutlined />,
              label: <Link to="/help/purchasing/cancelingPO">Canceling a P.O.</Link>,
            },
            {
              key: '/help/purchasing/authorizingPO',
              icon: <UserOutlined />,
              label: <Link to="/help/purchasing/authorizingPO">Authorizing a P.O.</Link>,
            },
            {
              key: '/help/purchasing/workingWithPOMilestone',
              icon: <UserOutlined />,
              label: <Link to="/help/purchasing/workingWithPOMilestone">Working with PO Milestones</Link>,
            },
            {
              key: '/help/purchasing/voidingPO',
              icon: <UserOutlined />,
              label: <Link to="/help/purchasing/voidingPO">Voiding a P.O.</Link>,
            },
            {
              key: '/help/purchasing/searchingForPO',
              icon: <UserOutlined />,
              label: <Link to="/help/purchasing/searchingForPO">Searching for POs</Link>,
            },
            {
              key: '/help/purchasing/autoPOAndReorderRules',
              icon: <UserOutlined />,
              label: <Link to="/help/purchasing/autoPOAndReorderRules">Auto POs + Reorder Rules</Link>,
            },
            {
              key: '/help/purchasing/createManualPO',
              icon: <UserOutlined />,
              label: <Link to="/help/purchasing/createManualPO">How to Create a Manual PO</Link>,
            },
            {
              key: '/help/purchasing/automatePurchaseOrders',
              icon: <UserOutlined />,
              label: <Link to="/help/purchasing/automatePurchaseOrders">How to Automate Purchase Orders (Auto-POs)</Link>,
            },
            {
              key: '/help/purchasing/deleteLineItem',
              icon: <UserOutlined />,
              label: <Link to="/help/purchasing/deleteLineItem"> How can I delete a line item from a purchase order?</Link>,
            },
            {
              key: '/help/purchasing/pasteFromCSV',
              icon: <UserOutlined />,
              label: <Link to="/help/purchasing/pasteFromCSV">Paste from CSV - PO Import</Link>,
            },
            {
              key: '/help/purchasing/explanationPOStatus',
              icon: <UserOutlined />,
              label: <Link to="/help/purchasing/explanationPOStatus">Explanation of PO Statuses</Link>,
            },
            {
              key: '/help/purchasing/exportingPO',
              icon: <UserOutlined />,
              label: <Link to="/help/purchasing/exportingPO">Exporting POs</Link>,
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
            // Vendors
            {
              key: 'vendors',
              icon: <AccountingIcon />,
              label: 'Vendors',
              children: [
                {
                  key: '/help/settings/vendors/createOrUpdate',
                  icon: <AccountingIcon />,
                  label: <Link to="/help/settings/vendors/createOrUpdate">Creating or Updating Vendors</Link>,
                },
                {
                  key: '/help/settings/vendors/search',
                  icon: <AccountingIcon />,
                  label: <Link to="/help/settings/vendors/search">Search for Vendors</Link>,
                },
              ],
            },
            {
              key: '/help/settings/poTemplate',
              icon: <SalesIcon />,
              label: <Link to="/help/settings/poTemplate">PO Template</Link>,
            },
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

        // Warehouse
        {
          key: 'warehouse',
          icon: <AccountingIcon />,
          label: 'Warehouse',
          children: [
            {
              key: 'orderPickingAndPacking',
              icon: <AccountingIcon />,
              label: 'Order Picking & Packing',
              children: [
                {
                  key: 'information',
                  icon: <AccountingIcon />,
                  label: 'Order Pick/Pack Information',
                  children: [
                    {
                      key: '/help/warehouse/orderPickingAndPacking/information/overview',
                      icon: <SalesIcon />,
                      label: <Link to="/help/warehouse/orderPickingAndPacking/information/overview">Order Pick Overview</Link>,
                    },
                    {
                      key: '/help/warehouse/orderPickingAndPacking/information/guidedOrderPick',
                      icon: <SalesIcon />,
                      label: (
                        <Link to="/help/warehouse/orderPickingAndPacking/information/guidedOrderPick">Guided Order Pick</Link>
                      ),
                    },
                    {
                      key: '/help/warehouse/orderPickingAndPacking/information/nonGuidedOrderPick',
                      icon: <SalesIcon />,
                      label: (
                        <Link to="/help/warehouse/orderPickingAndPacking/information/nonGuidedOrderPick">
                          Non-Guided Order Pick
                        </Link>
                      ),
                    },
                    {
                      key: '/help/warehouse/orderPickingAndPacking/information/orderPacking',
                      icon: <SalesIcon />,
                      label: <Link to="/help/warehouse/orderPickingAndPacking/information/orderPacking">Order Packing</Link>,
                    },
                    {
                      key: '/help/warehouse/orderPickingAndPacking/information/packingInMobile',
                      icon: <SalesIcon />,
                      label: (
                        <Link to="/help/warehouse/orderPickingAndPacking/information/packingInMobile">Packing in Mobile</Link>
                      ),
                    },
                  ],
                },
                {
                  key: 'pickingWithDevice',
                  icon: <AccountingIcon />,
                  label: 'Picking with Device / Mobile',
                  children: [
                    {
                      key: '/help/warehouse/orderPickingAndPacking/pickingWithDevice/guided',
                      icon: <SalesIcon />,
                      label: (
                        <Link to="/help/warehouse/orderPickingAndPacking/pickingWithDevice/guided">
                          Step by Step - Guided Order pick on Device
                        </Link>
                      ),
                    },
                    {
                      key: '/help/warehouse/orderPickingAndPacking/pickingWithDevice/nonGuided',
                      icon: <SalesIcon />,
                      label: (
                        <Link to="/help/warehouse/orderPickingAndPacking/pickingWithDevice/nonGuided">
                          Step by Step - Non-Guided Order Pick on Device
                        </Link>
                      ),
                    },
                  ],
                },
                {
                  key: '/help/warehouse/orderPickingAndPacking/noStock',
                  icon: <SalesIcon />,
                  label: <Link to="/help/warehouse/orderPickingAndPacking/noStock">No Stock</Link>,
                },
                {
                  key: '/help/warehouse/orderPickingAndPacking/pickToCarton',
                  icon: <SalesIcon />,
                  label: <Link to="/help/warehouse/orderPickingAndPacking/pickToCarton">Pick to Carton</Link>,
                },
                {
                  key: '/help/warehouse/orderPickingAndPacking/pickItemWithPartScanSettings',
                  icon: <SalesIcon />,
                  label: (
                    <Link to="/help/warehouse/orderPickingAndPacking/pickItemWithPartScanSettings">
                      Pick Item with Part Scan Settings
                    </Link>
                  ),
                },
              ],
            },
            {
              key: 'customerPortal',
              icon: <AccountingIcon />,
              label: 'Customer Portal',
              children: [
                {
                  key: 'info',
                  icon: <AccountingIcon />,
                  label: 'Customer Portal Info',
                  children: [
                    {
                      key: '/help/warehouse/customerPortal/info/overview',
                      icon: <SalesIcon />,
                      label: <Link to="/help/warehouse/customerPortal/info/overview">Customer Portal Overview</Link>,
                    },
                    {
                      key: '/help/warehouse/customerPortal/info/options',
                      icon: <SalesIcon />,
                      label: <Link to="/help/warehouse/customerPortal/info/options">Customer Portal Options</Link>,
                    },
                  ],
                },
                {
                  key: 'settingUp',
                  icon: <AccountingIcon />,
                  label: 'Setting Up Customer Portal',
                  children: [
                    {
                      key: '/help/warehouse/customerPortal/settingUp/overview',
                      icon: <SalesIcon />,
                      label: <Link to="/help/warehouse/customerPortal/settingUp/overview">Setting up Customer Portal User</Link>,
                    },
                    {
                      key: '/help/warehouse/customerPortal/settingUp/location',
                      icon: <SalesIcon />,
                      label: <Link to="/help/warehouse/customerPortal/settingUp/location">Locking User into Location</Link>,
                    },
                    {
                      key: '/help/warehouse/customerPortal/settingUp/clientPart',
                      icon: <SalesIcon />,
                      label: <Link to="/help/warehouse/customerPortal/settingUp/clientPart">Using Client Parts</Link>,
                    },
                    {
                      key: '/help/warehouse/customerPortal/settingUp/customer',
                      icon: <SalesIcon />,
                      label: <Link to="/help/warehouse/customerPortal/settingUp/customer">Customer Portal Permissions</Link>,
                    },
                  ],
                },
                {
                  key: 'using',
                  icon: <AccountingIcon />,
                  label: 'Using Customer Portal',
                  children: [
                    {
                      key: '/help/warehouse/customerPortal/using/loggingInto',
                      icon: <SalesIcon />,
                      label: <Link to="/help/warehouse/customerPortal/using/loggingInto">Logging into Customer Portal</Link>,
                    },
                    {
                      key: '/help/warehouse/customerPortal/using/customization',
                      icon: <SalesIcon />,
                      label: <Link to="/help/warehouse/customerPortal/using/customization">Customer Portal Customization</Link>,
                    },
                  ],
                },
              ],
            },
            {
              key: 'barcoding',
              icon: <AccountingIcon />,
              label: 'Barcoding',
              children: [
                {
                  key: 'barinfo',
                  icon: <AccountingIcon />,
                  label: 'Barcoding 101',
                  children: [
                    {
                      key: '/help/warehouse/barcoding/info/overview',
                      icon: <SalesIcon />,
                      label: <Link to="/help/warehouse/barcoding/info/overview">What is a Barcode?</Link>,
                    },
                    {
                      key: '/help/warehouse/barcoding/info/type',
                      icon: <SalesIcon />,
                      label: <Link to="/help/warehouse/barcoding/info/type">Barcode Types</Link>,
                    },
                  ],
                },
                {
                  key: 'labelPrinting',
                  icon: <AccountingIcon />,
                  label: 'Barcoding 101',
                  children: [
                    {
                      key: '/help/warehouse/barcoding/labelPrinting/hardware',
                      icon: <SalesIcon />,
                      label: <Link to="/help/warehouse/barcoding/labelPrinting/hardware">Label Printer Hardware</Link>,
                    },
                    {
                      key: '/help/warehouse/barcoding/labelPrinting/labelMedia',
                      icon: <SalesIcon />,
                      label: <Link to="/help/warehouse/barcoding/labelPrinting/labelMedia">Selecting Barcode Label Media</Link>,
                    },
                    {
                      key: '/help/warehouse/barcoding/labelPrinting/configureZebra',
                      icon: <SalesIcon />,
                      label: (
                        <Link to="/help/warehouse/barcoding/labelPrinting/configureZebra">
                          How to Configure Zebra WiFi Printer
                        </Link>
                      ),
                    },
                    {
                      key: '/help/warehouse/barcoding/labelPrinting/settingUp',
                      icon: <SalesIcon />,
                      label: <Link to="/help/warehouse/barcoding/labelPrinting/settingUp">Setting up your label printer</Link>,
                    },
                  ],
                },
                {
                  key: 'printingLabel',
                  icon: <AccountingIcon />,
                  label: 'Printing Labels in Warehouse Manager',
                  children: [
                    {
                      key: '/help/warehouse/barcoding/printingLabel/template',
                      icon: <SalesIcon />,
                      label: <Link to="/help/warehouse/barcoding/printingLabel/template">Label Templates</Link>,
                    },
                    {
                      key: '/help/warehouse/barcoding/printingLabel/mobileApp',
                      icon: <SalesIcon />,
                      label: <Link to="/help/warehouse/barcoding/printingLabel/mobileApp">Printing In The Mobile App</Link>,
                    },
                    {
                      key: '/help/warehouse/barcoding/printingLabel/googleChrome',
                      icon: <SalesIcon />,
                      label: <Link to="/help/warehouse/barcoding/printingLabel/googleChrome">Google Chrome Printing Addon</Link>,
                    },
                  ],
                },
              ],
            },
            {
              key: 'bindMove',
              icon: <AccountingIcon />,
              label: 'Bin Move',
              children: [
                {
                  key: '/help/warehouse/bindMove/assetMove',
                  icon: <SalesIcon />,
                  label: <Link to="/help/warehouse/bindMove/assetMove">Asset Move</Link>,
                },
                {
                  key: '/help/warehouse/bindMove/inventoryMove',
                  icon: <SalesIcon />,
                  label: <Link to="/help/warehouse/bindMove/inventoryMove">Inventory Move</Link>,
                },
                {
                  key: '/help/warehouse/bindMove/childBinMove',
                  icon: <SalesIcon />,
                  label: <Link to="/help/warehouse/bindMove/childBinMove">Child Bin Move</Link>,
                },
                {
                  key: '/help/warehouse/bindMove/massBinMove',
                  icon: <SalesIcon />,
                  label: <Link to="/help/warehouse/bindMove/massBinMove">Mass Bin Move</Link>,
                },
              ],
            },
            {
              key: 'mobileReceivingPicking',
              icon: <AccountingIcon />,
              label: 'Mobile Receiving and Picking',
              children: [
                {
                  key: '/help/warehouse/mobileReceivingPicking/packingInMobile',
                  icon: <SalesIcon />,
                  label: <Link to="/help/warehouse/mobileReceivingPicking/packingInMobile">Packing in Mobile</Link>,
                },
                {
                  key: '/help/warehouse/mobileReceivingPicking/shippingInMobile',
                  icon: <SalesIcon />,
                  label: <Link to="/help/warehouse/mobileReceivingPicking/shippingInMobile">Shipping in Mobile</Link>,
                },
              ],
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
