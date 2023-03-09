/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,title 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/dashboard',
    component: './Dashboard',
    title: 'menu.dashboard',
  },
  {
    path: '/orders',
    component: './Orders',
    title: 'menu.orders',
    key: 'orders',
    access: 'routeFilter',
  },
  {
    path: '/inventory',
    component: './Inventory',
    title: 'menu.inventory',
    key: 'inventory',
    access: 'routeFilter',
  },
  {
    path: '/purchasing',
    component: './PurchaseOrders',
    title: 'menu.purchasing',
    key: 'purchase_orders',
    access: 'routeFilter',
  },
  {
    path: '/shipments',
    component: './Shipments',
    title: 'menu.shipments',
    key: 'shipments',
    access: 'routeFilter',
  },
  {
    path: '/customers',
    component: './Customers',
    title: 'menu.customers',
    key: 'customers',
    access: 'routeFilter',
  },
  {
    path: '/products',
    component: './Products',
    title: 'menu.products',
    key: 'products',
    access: 'routeFilter',
  },
  {
    path: '/settings',
    component: './Settings',
    title: 'menu.settings',
    key: 'user_administration',
    access: 'routeFilter',
    routes: [
      {
        hideInMenu: true,
        path: '/settings/myprofile',
        component: './Settings/MainPanel/MyProfile',
      },
      {
        hideInMenu: true,
        path: '/settings/warehouses',
        component: './Settings/MainPanel/Warehouses',
      },
      {
        hideInMenu: true,
        path: '/settings/vendors',
        component: './Settings/MainPanel/Vendors',
      },
      {
        hideInMenu: true,
        path: '/settings/orderbots',
        component: './Settings/MainPanel/Orderbots',
      },
      {
        hideInMenu: true,
        path: '/settings/potemplates',
        component: './Settings/MainPanel/POTemplates',
      },
      {
        hideInMenu: true,
        path: '/settings/useradministration',
        component: './Settings/MainPanel/UserAdministration',
      },
      {
        hideInMenu: true,
        path: '/settings/companyinfo',
        component: './Settings/MainPanel/CompanyInfo',
      },
    ],
  },
  {
    path: '/analytics',
    component: './Analytics',
    title: 'menu.analytics',
    key: 'analytics',
    access: 'routeFilter',
    routes: [
      {
        hideInMenu: true,
        path: '/analytics/products/topsellers',
        component: './Analytics',
      },
      {
        hideInMenu: true,
        path: '/analytics/products/worstsellers',
        component: './Analytics',
      },
      {
        hideInMenu: true,
        path: '/analytics/products/yoygrowth',
        component: './Analytics',
      },
      {
        hideInMenu: true,
        path: '/analytics/products/skuprofitability',
        component: './Analytics',
      },
      {
        hideInMenu: true,
        path: '/analytics/products/trendingprofitability',
        component: './Analytics',
      },
      {
        hideInMenu: true,
        path: '/analytics/inventory/replenishmentalerts',
        component: './Analytics',
      },
      {
        hideInMenu: true,
        path: '/analytics/inventory/snapshotinventory',
        component: './Analytics',
      },
      {
        hideInMenu: true,
        path: '/analytics/inventory/trendinginventory',
        component: './Analytics',
      },
      {
        hideInMenu: true,
        path: '/analytics/inventory/criticalinventorylevels',
        component: './Analytics',
      },
      {
        hideInMenu: true,
        path: '/analytics/inventory/inventoryaging',
        component: './Analytics',
      },
      {
        hideInMenu: true,
        path: '/analytics/orders/salesoverview',
        component: './Analytics',
      },
      {
        hideInMenu: true,
        path: '/analytics/orders/biggesttickets',
        component: './Analytics',
      },
      {
        hideInMenu: true,
        path: '/analytics/orders/shipments',
        component: './Analytics',
      },
      {
        hideInMenu: true,
        path: '/analytics/orders/historicalexports',
        component: './Analytics',
      },
      {
        hideInMenu: true,
        path: '/analytics/purchaseorders/historicalexports',
        component: './Analytics',
      },
      {
        hideInMenu: true,
        path: '/analytics/customers/lifetimevalue',
        component: './Analytics',
      },
      {
        hideInMenu: true,
        path: '/analytics/customers/biggestspenders',
        component: './Analytics',
      },
      {
        hideInMenu: true,
        path: '/analytics/customers/mostfrequentcustomers',
        component: './Analytics',
      },
      {
        hideInMenu: true,
        path: '/analytics/customers/mostrecentcustomers',
        component: './Analytics',
      },
      {
        hideInMenu: true,
        path: '/analytics/accounting/shipmentsummary',
        component: './Analytics',
      },
      {
        hideInMenu: true,
        path: '/analytics/accounting/cogsbysku',
        component: './Analytics',
      },
      {
        hideInMenu: true,
        path: '/analytics/accounting/salessummary',
        component: './Analytics',
      },
      {
        hideInMenu: true,
        path: '/analytics/accounting/inventoryvalue',
        component: './Analytics',
      },
    ],
  },
  {
    path: '/help',
    component: './Help',
    title: 'menu.help',
    key: 'skubana_apps',
    routes: [
      // Dashboard
      {
        hideInMenu: true,
        path: '/help/dashboard/general',
        component: './Help/MainPanel/Dashboard/dashboard',
      },
      {
        hideInMenu: true,
        path: '/help/dashboard/skualerts',
        component: './Help/MainPanel/Dashboard/skualerts',
      },
      // Orders
      {
        hideInMenu: true,
        path: '/help/orders/general',
        component: './Help/MainPanel/Orders/orders',
      },
      {
        hideInMenu: true,
        path: '/help/orders/manage/cancel',
        component: './Help/MainPanel/Orders/cancelorders',
      },
      {
        hideInMenu: true,
        path: '/help/orders/exportorders',
        component: './Help/MainPanel/Orders/exportorders',
      },
      // Inventory
      {
        hideInMenu: true,
        path: '/help/inventory/general',
        component: './Help/MainPanel',
      },
      // Shipments
      {
        hideInMenu: true,
        path: '/help/shipments/searchingForShipments',
        component: './Help/MainPanel/Shipments/searchingForShipments',
      },
      {
        hideInMenu: true,
        path: '/help/shipments/printingShippingLabels',
        component: './Help/MainPanel/Shipments/printingShippingLabels',
      },
      {
        hideInMenu: true,
        path: '/help/shipments/printEndOfDayForms',
        component: './Help/MainPanel/Shipments/printEndOfDayForms',
      },
      {
        hideInMenu: true,
        path: '/help/shipments/trackingShipments',
        component: './Help/MainPanel/Shipments/trackingShipments',
      },
      {
        hideInMenu: true,
        path: '/help/shipments/rmaExports',
        component: './Help/MainPanel/Shipments/rmaExports',
      },
      {
        hideInMenu: true,
        path: '/help/shipments/printForUPSShipments',
        component: './Help/MainPanel/Shipments/printForPackage',
      },
      {
        hideInMenu: true,
        path: '/help/shipments/resendingConfirmationEmails',
        component: './Help/MainPanel/Shipments/resendingConfirmationEmails',
      },
      {
        hideInMenu: true,
        path: '/help/shipments/voidingShipments',
        component: './Help/MainPanel/Shipments/voidingShipments',
      },
      {
        hideInMenu: true,
        path: '/help/shipments/postalZones',
        component: './Help/MainPanel/Shipments/postalZones',
      },
      {
        hideInMenu: true,
        path: '/help/shipments/exportingShipments',
        component: './Help/MainPanel/Shipments/exportingShipments',
      },
      // Purchase Orders
      {
        hideInMenu: true,
        path: '/help/purchasing/availableActions',
        component: './Help/MainPanel/PurchaseOrders/availableActions',
      },
      {
        hideInMenu: true,
        path: '/help/purchasing/restoringPO',
        component: './Help/MainPanel/PurchaseOrders/restoring',
      },
      {
        hideInMenu: true,
        path: '/help/purchasing/updatingPONumber',
        component: './Help/MainPanel/PurchaseOrders/updatePONumber',
      },
      {
        hideInMenu: true,
        path: '/help/purchasing/reSendingPO',
        component: './Help/MainPanel/PurchaseOrders/reSending',
      },
      {
        hideInMenu: true,
        path: '/help/purchasing/receivingPO',
        component: './Help/MainPanel/PurchaseOrders/receiving',
      },
      {
        hideInMenu: true,
        path: '/help/purchasing/printingPO',
        component: './Help/MainPanel/PurchaseOrders/printing',
      },
      {
        hideInMenu: true,
        path: '/help/purchasing/cancelingPO',
        component: './Help/MainPanel/PurchaseOrders/canceling',
      },
      {
        hideInMenu: true,
        path: '/help/purchasing/authorizingPO',
        component: './Help/MainPanel/PurchaseOrders/authorizing',
      },
      {
        hideInMenu: true,
        path: '/help/purchasing/workingWithPOMilestone',
        component: './Help/MainPanel/PurchaseOrders/workingWithPOMilestones',
      },
      {
        hideInMenu: true,
        path: '/help/purchasing/voidingPO',
        component: './Help/MainPanel/PurchaseOrders/voiding',
      },
      {
        hideInMenu: true,
        path: '/help/purchasing/searchingForPO',
        component: './Help/MainPanel/PurchaseOrders/searchingForPOs',
      },
      {
        hideInMenu: true,
        path: '/help/purchasing/autoPOAndReorderRules',
        component: './Help/MainPanel/PurchaseOrders/autoPoAndRecordRules',
      },
      {
        hideInMenu: true,
        path: '/help/purchasing/createManualPO',
        component: './Help/MainPanel/PurchaseOrders/createManualPO',
      },
      {
        hideInMenu: true,
        path: '/help/purchasing/automatePurchaseOrders',
        component: './Help/MainPanel/PurchaseOrders/automatePurchaseOrders',
      },
      {
        hideInMenu: true,
        path: '/help/purchasing/deleteLineItem',
        component: './Help/MainPanel/PurchaseOrders/deleteLineItem',
      },
      {
        hideInMenu: true,
        path: '/help/purchasing/pasteFromCSV',
        component: './Help/MainPanel/PurchaseOrders/pasteFromCSV',
      },
      {
        hideInMenu: true,
        path: '/help/purchasing/explanationPOStatus',
        component: './Help/MainPanel/PurchaseOrders/explanationPoStatus',
      },
      {
        hideInMenu: true,
        path: '/help/purchasing/exportingPO',
        component: './Help/MainPanel/PurchaseOrders/exportingPO',
      },
      // Customers
      {
        hideInMenu: true,
        path: '/help/customers/search',
        component: './Help/MainPanel/Customers/searchcustomers',
      },
      {
        hideInMenu: true,
        path: '/help/customers/module',
        component: './Help/MainPanel/Customers/customersmodule',
      },
      {
        hideInMenu: true,
        path: '/help/customers/exportphonenumbers',
        component: './Help/MainPanel/Customers/exportcustomerphonenumbers',
      },
      // Products
      {
        hideInMenu: true,
        path: '/help/products/general',
        component: './Help/MainPanel/Products/products',
      },
      {
        hideInMenu: true,
        path: '/help/products/manage',
        component: './Help/MainPanel/Products/manageproducts',
      },
      {
        hideInMenu: true,
        path: '/help/products/create/coreproduct',
        component: './Help/MainPanel/Products/createcoreproduct',
      },
      {
        hideInMenu: true,
        path: '/help/products/create/bundlekit',
        component: './Help/MainPanel/Products/createbundlekit',
      },
      {
        hideInMenu: true,
        path: '/help/products/create/productvariations',
        component: './Help/MainPanel/Products/createproductvariations',
      },
      {
        hideInMenu: true,
        path: '/help/products/import/products',
        component: './Help/MainPanel/Products/importproducts',
      },
      {
        hideInMenu: true,
        path: '/help/products/import/vendorproducts',
        component: './Help/MainPanel/Products/importvendorproducts',
      },
      {
        hideInMenu: true,
        path: '/help/products/import/skuadjustments',
        component: './Help/MainPanel/Products/importskuadjustments',
      },
      {
        hideInMenu: true,
        path: '/help/products/export/products',
        component: './Help/MainPanel/Products/exportproducts',
      },
      {
        hideInMenu: true,
        path: '/help/products/export/vendorproducts',
        component: './Help/MainPanel/Products/exportvendorproducts',
      },
      {
        hideInMenu: true,
        path: '/help/products/export/custombundlekit',
        component: './Help/MainPanel/Products/exportcustombundlekit',
      },
      {
        hideInMenu: true,
        path: '/help/products/searchproducts',
        component: './Help/MainPanel/Products/searchproducts',
      },
      {
        hideInMenu: true,
        path: '/help/products/importproducts',
        component: './Help/MainPanel/Products/importproducts',
      },
      {
        hideInMenu: true,
        path: '/help/products/customproductfields',
        component: './Help/MainPanel/Products/customproductfields',
      },
      {
        hideInMenu: true,
        path: '/help/products/faq',
        component: './Help/MainPanel/Products/faq',
      },
      // Help - Settings
      {
        hideInMenu: true,
        path: '/help/settings/myprofile',
        component: './Help/MainPanel/Settings/myprofile',
      },
      {
        hideInMenu: true,
        path: '/help/settings/useradministration',
        component: './Help/MainPanel/Settings/useradministration',
      },
      {
        hideInMenu: true,
        path: '/help/settings/companyinfo',
        component: './Help/MainPanel/Settings/companyinfo',
      },
      {
        hideInMenu: true,
        path: '/help/settings/poTemplate',
        component: './Help/MainPanel/Settings/poTemplate',
      },
      {
        hideInMenu: true,
        path: '/help/settings/vendors/createOrUpdate',
        component: './Help/MainPanel/Settings/Vendors/createOrUpdate',
      },
      {
        hideInMenu: true,
        path: '/help/settings/vendors/search',
        component: './Help/MainPanel/Settings/Vendors/search',
      },
      // Help - Warehouse
      {
        hideInMenu: true,
        path: '/help/warehouse/orderPickingAndPacking/information/overview',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/orderPickingAndPacking/information/guidedOrderPick',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/orderPickingAndPacking/information/nonGuidedOrderPick',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/orderPickingAndPacking/information/orderPacking',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/orderPickingAndPacking/information/packingInMobile',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/orderPickingAndPacking/pickingWithDevice/guided',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/orderPickingAndPacking/pickingWithDevice/nonGuided',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/orderPickingAndPacking/noStock',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/orderPickingAndPacking/pickToCarton',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/orderPickingAndPacking/pickItemWithPartScanSettings',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/customerPortal/info/overview',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/customerPortal/info/options',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/customerPortal/settingUp/overview',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/customerPortal/settingUp/location',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/customerPortal/settingUp/clientPart',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/customerPortal/settingUp/customer',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/customerPortal/using/loggingInto',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/customerPortal/using/customization',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/barcoding/info/overview',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/barcoding/info/type',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/barcoding/labelPrinting/hardware',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/barcoding/labelPrinting/labelMedia',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/barcoding/labelPrinting/configureZebra',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/barcoding/labelPrinting/settingUp',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/barcoding/printingLabel/template',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/barcoding/printingLabel/mobileApp',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/barcoding/printingLabel/googleChrome',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/bindMove/assetMove',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/bindMove/inventoryMove',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/bindMove/childBinMove',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/bindMove/massBinMove',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/mobileReceivingPicking/packingInMobile',
        component: './Help/MainPanel',
      },
      {
        hideInMenu: true,
        path: '/help/warehouse/mobileReceivingPicking/shippingInMobile',
        component: './Help/MainPanel',
      },
      // Analytics
      {
        hideInMenu: true,
        path: '/help/analytics/suborders/historicalsexports',
        component: './Help/MainPanel/Analytics/Orders/historicalordersexports',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/suborders/salesoverview',
        component: './Help/MainPanel/Analytics/Orders/salesoverview',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/suborders/biggesttickets',
        component: './Help/MainPanel/Analytics/Orders/biggesttickets',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/suborders/shipments',
        component: './Help/MainPanel/Analytics/Orders/shipments',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/general/theanalyticsmodules',
        component: './Help/MainPanel/Analytics/General/theanalyticsmodules',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/general/analyticsreports',
        component: './Help/MainPanel/Analytics/General/analyticsreports',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/general/printingchartsfromanalytics',
        component: './Help/MainPanel/Analytics/General/printingchartsfromanalytics',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/general/exportingreports',
        component: './Help/MainPanel/Analytics/General/exportingreports',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subproducts/analyticsskuprofitability',
        component: './Help/MainPanel/Analytics/Products/analyticsskuprofitability',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subproducts/yoygrowth',
        component: './Help/MainPanel/Analytics/Products/yoygrowth',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subproducts/analyticslistingprofitability',
        component: './Help/MainPanel/Analytics/Products/analyticslistingprofitability',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subproducts/topsellersandworstsellersreports',
        component: './Help/MainPanel/Analytics/Products/topsellersandworstsellersreports',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subproducts/analyticstrendingprofitability',
        component: './Help/MainPanel/Analytics/Products/analyticstrendingprofitability',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subdashboard/opportunitiesfoundbyextensivordermanager',
        component: './Help/MainPanel/Analytics/Dashboard/opportunitiesfoundbyextensivordermanager',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subinventory/analyticsinventoryreplenishmentalerts',
        component: './Help/MainPanel/Analytics/Inventory/analyticsinventoryreplenishmentalerts',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subinventory/analyticssnapshotinventoryvalue',
        component: './Help/MainPanel/Analytics/Inventory/analyticssnapshotinventoryvalue',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subinventory/analyticstrendinginventoryvalue',
        component: './Help/MainPanel/Analytics/Inventory/analyticstrendinginventoryvalue',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subinventory/analyticscriticalinventorylevels',
        component: './Help/MainPanel/Analytics/Inventory/analyticscriticalinventorylevels',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subinventory/analyticsinventoryaging',
        component: './Help/MainPanel/Analytics/Inventory/analyticsinventoryaging',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subpurchaseorders/historicalexports',
        component: './Help/MainPanel/Analytics/PurchaseOrders/historicalpurchaseordersexports',
      },
    ],
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
