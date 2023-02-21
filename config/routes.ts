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
    component: './OrderManagement',
    title: 'menu.orders',
    key: 'orders',
    access: 'routeFilter',
  },
  {
    path: '/inventory',
    component: './InventoryManagement',
    title: 'menu.inventory',
    key: 'inventory',
    access: 'routeFilter',
  },
  {
    path: '/purchasing',
    component: './PurchaseOrderManagement',
    title: 'menu.purchasing',
    key: 'purchase_orders',
    access: 'routeFilter',
  },
  {
    path: '/shipments',
    component: './ShipmentManagement',
    title: 'menu.shipments',
    key: 'shipments',
    access: 'routeFilter',
  },
  {
    path: '/customers',
    component: './CustomerManagement',
    title: 'menu.customers',
    key: 'customers',
    access: 'routeFilter',
  },
  {
    path: '/products',
    component: './ProductManagement',
    title: 'menu.products',
    key: 'products',
    access: 'routeFilter',
  },
  {
    path: '/analytics',
    component: './AnalyticManagement',
    title: 'menu.analytics',
    key: 'analytics',
    access: 'routeFilter',
    routes: [
      {
        hideInMenu: true,
        path: '/analytics/products/topsellers',
        component: './AnalyticManagement',
      },
      {
        hideInMenu: true,
        path: '/analytics/products/worstsellers',
        component: './AnalyticManagement',
      },
      {
        hideInMenu: true,
        path: '/analytics/products/yoygrowth',
        component: './AnalyticManagement',
      },
      {
        hideInMenu: true,
        path: '/analytics/products/skuprofitability',
        component: './AnalyticManagement',
      },
      {
        hideInMenu: true,
        path: '/analytics/products/trendingprofitability',
        component: './AnalyticManagement',
      },
      {
        hideInMenu: true,
        path: '/analytics/inventory/replenishmentalerts',
        component: './AnalyticManagement',
      },
      {
        hideInMenu: true,
        path: '/analytics/inventory/snapshotinventory',
        component: './AnalyticManagement',
      },
      {
        hideInMenu: true,
        path: '/analytics/inventory/trendinginventory',
        component: './AnalyticManagement',
      },
      {
        hideInMenu: true,
        path: '/analytics/inventory/criticalinventorylevels',
        component: './AnalyticManagement',
      },
      {
        hideInMenu: true,
        path: '/analytics/inventory/inventoryaging',
        component: './AnalyticManagement',
      },
      {
        hideInMenu: true,
        path: '/analytics/orders/salesoverview',
        component: './AnalyticManagement',
      },
      {
        hideInMenu: true,
        path: '/analytics/orders/biggesttickets',
        component: './AnalyticManagement',
      },
      {
        hideInMenu: true,
        path: '/analytics/orders/shipments',
        component: './AnalyticManagement',
      },
      {
        hideInMenu: true,
        path: '/analytics/orders/historicalexports',
        component: './AnalyticManagement',
      },
      {
        hideInMenu: true,
        path: '/analytics/purchaseorders/historicalexports',
        component: './AnalyticManagement',
      },
      {
        hideInMenu: true,
        path: '/analytics/customers/lifetimevalue',
        component: './AnalyticManagement',
      },
      {
        hideInMenu: true,
        path: '/analytics/customers/biggestspenders',
        component: './AnalyticManagement',
      },
      {
        hideInMenu: true,
        path: '/analytics/customers/mostfrequentcustomers',
        component: './AnalyticManagement',
      },
      {
        hideInMenu: true,
        path: '/analytics/customers/mostrecentcustomers',
        component: './AnalyticManagement',
      },
      {
        hideInMenu: true,
        path: '/analytics/accounting/shipmentsummary',
        component: './AnalyticManagement',
      },
      {
        hideInMenu: true,
        path: '/analytics/accounting/cogsbysku',
        component: './AnalyticManagement',
      },
      {
        hideInMenu: true,
        path: '/analytics/accounting/salessummary',
        component: './AnalyticManagement',
      },
      {
        hideInMenu: true,
        path: '/analytics/accounting/inventoryvalue',
        component: './AnalyticManagement',
      },
    ],
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
        component: './Settings/MyProfile',
      },
      {
        hideInMenu: true,
        path: '/settings/warehouses',
        component: './Settings/Warehouses',
      },
      {
        hideInMenu: true,
        path: '/settings/vendors',
        component: './Settings/Vendors',
      },
      {
        hideInMenu: true,
        path: '/settings/potemplates',
        component: './Settings/POTemplates',
      },
      {
        hideInMenu: true,
        path: '/settings/useradministration',
        component: './Settings/UserAdministration',
      },
      {
        hideInMenu: true,
        path: '/settings/companyinfo',
        component: './Settings/CompanyInfo',
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
        component: './Help/Dashboard/dashboard',
      },
      {
        hideInMenu: true,
        path: '/help/dashboard/skualerts',
        component: './Help/Dashboard/skualerts',
      },

      // Orders
      {
        hideInMenu: true,
        path: '/help/orders/general',
        component: './Help/Orders/orders',
      },
      {
        hideInMenu: true,
        path: '/help/orders/manage/cancel',
        component: './Help/Orders/cancelorders',
      },
      {
        hideInMenu: true,
        path: '/help/orders/exportorders',
        component: './Help/Orders/exportorders',
      },

      // Customers
      {
        hideInMenu: true,
        path: '/help/customers/search',
        component: './Help/Customers/searchcustomers',
      },
      {
        hideInMenu: true,
        path: '/help/customers/module',
        component: './Help/Customers/customersmodule',
      },
      {
        hideInMenu: true,
        path: '/help/customers/exportphonenumbers',
        component: './Help/Customers/exportcustomerphonenumbers',
      },

      // Products
      {
        hideInMenu: true,
        path: '/help/products/general',
        component: './Help/Products/products',
      },
      {
        hideInMenu: true,
        path: '/help/products/manage',
        component: './Help/Products/manageproducts',
      },
      {
        hideInMenu: true,
        path: '/help/products/create/coreproduct',
        component: './Help/Products/createcoreproduct',
      },
      {
        hideInMenu: true,
        path: '/help/products/create/bundlekit',
        component: './Help/Products/createbundlekit',
      },
      {
        hideInMenu: true,
        path: '/help/products/create/productvariations',
        component: './Help/Products/createproductvariations',
      },
      {
        hideInMenu: true,
        path: '/help/products/import/products',
        component: './Help/Products/importproducts',
      },
      {
        hideInMenu: true,
        path: '/help/products/import/vendorproducts',
        component: './Help/Products/importvendorproducts',
      },
      {
        hideInMenu: true,
        path: '/help/products/import/skuadjustments',
        component: './Help/Products/importskuadjustments',
      },
      {
        hideInMenu: true,
        path: '/help/products/export/products',
        component: './Help/Products/exportproducts',
      },
      {
        hideInMenu: true,
        path: '/help/products/export/vendorproducts',
        component: './Help/Products/exportvendorproducts',
      },
      {
        hideInMenu: true,
        path: '/help/products/export/custombundlekit',
        component: './Help/Products/exportcustombundlekit',
      },
      {
        hideInMenu: true,
        path: '/help/products/searchproducts',
        component: './Help/Products/searchproducts',
      },
      {
        hideInMenu: true,
        path: '/help/products/importproducts',
        component: './Help/Products/importproducts',
      },
      {
        hideInMenu: true,
        path: '/help/products/customproductfields',
        component: './Help/Products/customproductfields',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/suborders/historicalsexports',
        component: './Help/Analytics/Orders/historicalordersexports',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/suborders/salesoverview',
        component: './Help/Analytics/Orders/salesoverview',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/suborders/biggesttickets',
        component: './Help/Analytics/Orders/biggesttickets',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/suborders/shipments',
        component: './Help/Analytics/Orders/shipments',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/general/theanalyticsmodules',
        component: './Help/Analytics/General/theanalyticsmodules',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/general/analyticsreports',
        component: './Help/Analytics/General/analyticsreports',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/general/printingchartsfromanalytics',
        component: './Help/Analytics/General/printingchartsfromanalytics',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/general/exportingreports',
        component: './Help/Analytics/General/exportingreports',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subproducts/analyticsskuprofitability',
        component: './Help/Analytics/Products/analyticsskuprofitability',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subproducts/yoygrowth',
        component: './Help/Analytics/Products/yoygrowth',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subproducts/analyticslistingprofitability',
        component: './Help/Analytics/Products/analyticslistingprofitability',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subproducts/topsellersandworstsellersreports',
        component: './Help/Analytics/Products/topsellersandworstsellersreports',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subproducts/analyticstrendingprofitability',
        component: './Help/Analytics/Products/analyticstrendingprofitability',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subdashboard/opportunitiesfoundbyextensivordermanager',
        component: './Help/Analytics/Dashboard/opportunitiesfoundbyextensivordermanager',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subinventory/analyticsinventoryreplenishmentalerts',
        component: './Help/Analytics/Inventory/analyticsinventoryreplenishmentalerts',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subinventory/analyticssnapshotinventoryvalue',
        component: './Help/Analytics/Inventory/analyticssnapshotinventoryvalue',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subinventory/analyticstrendinginventoryvalue',
        component: './Help/Analytics/Inventory/analyticstrendinginventoryvalue',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subinventory/analyticscriticalinventorylevels',
        component: './Help/Analytics/Inventory/analyticscriticalinventorylevels',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subinventory/analyticsinventoryaging',
        component: './Help/Analytics/Inventory/analyticsinventoryaging',
      },
      {
        hideInMenu: true,
        path: '/help/analytics/subpurchaseorders/historicalexports',
        component: './Help/Analytics/PurchaseOrders/historicalpurchaseordersexports',
      },
      {
        hideInMenu: true,
        path: '/help/settings/myprofile',
        component: './Help/Settings/myprofile',
      },
      {
        hideInMenu: true,
        path: '/help/settings/useradministration',
        component: './Help/Settings/useradministration',
      },
      {
        hideInMenu: true,
        path: '/help/settings/companyinfo',
        component: './Help/Settings/companyinfo',
      },
    ],
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
