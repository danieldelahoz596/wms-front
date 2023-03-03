import { useLocation } from '@umijs/max';

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
import FAQ from './Products/faq';
import Importproducts from './Products/importproducts';
import ImportSkuAdjustments from './Products/importskuadjustments';
import ImportVendorProducts from './Products/importvendorproducts';
import Manageproducts from './Products/manageproducts';
import Products from './Products/products';
import Searchproducts from './Products/searchproducts';

// Analytics
import Opportunitiesfoundbyextensivordermanager from './Analytics/Dashboard/opportunitiesfoundbyextensivordermanager';
import Analyticsreports from './Analytics/General/analyticsreports';
import Exportingreports from './Analytics/General/exportingreports';
import Printingchartsfromanalytics from './Analytics/General/printingchartsfromanalytics';
import Theanalyticsmodules from './Analytics/General/theanalyticsmodules';
import Analyticscriticalinventorylevels from './Analytics/Inventory/analyticscriticalinventorylevels';
import Analyticsinventoryaging from './Analytics/Inventory/analyticsinventoryaging';
import Analyticsinventoryreplenishmentalerts from './Analytics/Inventory/analyticsinventoryreplenishmentalerts';
import Analyticssnapshotinventoryvalue from './Analytics/Inventory/analyticssnapshotinventoryvalue';
import Analyticstrendinginventoryvalue from './Analytics/Inventory/analyticstrendinginventoryvalue';
import Biggesttickets from './Analytics/Orders/biggesttickets';
import Historicalordersexports from './Analytics/Orders/historicalordersexports';
import Salesoverview from './Analytics/Orders/salesoverview';
import Shipments from './Analytics/Orders/shipments';
import Analyticslistingprofitability from './Analytics/Products/analyticslistingprofitability';
import Analyticsskuprofitability from './Analytics/Products/analyticsskuprofitability';
import Analyticstrendingprofitability from './Analytics/Products/analyticstrendingprofitability';
import Topsellersandworstsellersreports from './Analytics/Products/topsellersandworstsellersreports';
import Yoygrowth from './Analytics/Products/yoygrowth';
import Historicalpurchaseordersexports from './Analytics/PurchaseOrders/historicalpurchaseordersexports';

// Settings
import Companyinfo from './Settings/companyinfo';
import Myprofile from './Settings/myprofile';
import Useradministration from './Settings/useradministration';

const MainPanel: React.FC = () => {
  const location = useLocation();

  return (
    <div className="help-content">
      {location.pathname === '/help/dashboard/general' ? (
        <SkuAlerts />
      ) : location.pathname === '/help/dashboard/skualerts' ? (
        <Dashboard />
      ) : // Orders
      location.pathname === '/help/orders/general' ? (
        <Orders />
      ) : location.pathname === '/help/orders/manage/cancel' ? (
        <Cancelorders />
      ) : location.pathname === '/help/orders/exportorders' ? (
        <Exportorders />
      ) : // Customers
      location.pathname === '/help/customers/search' ? (
        <Searchcustomers />
      ) : location.pathname === '/help/customers/module' ? (
        <Customersmodule />
      ) : location.pathname === '/help/customers/exportphonenumbers' ? (
        <Exportcustomerphonenumbers />
      ) : // Products
      location.pathname === '/help/products/general' ? (
        <Products />
      ) : location.pathname === '/help/products/manage' ? (
        <Manageproducts />
      ) : location.pathname === '/help/products/create/coreproduct' ? (
        <CreateCoreProduct />
      ) : location.pathname === '/help/products/create/bundlekit' ? (
        <CreateBundleKit />
      ) : location.pathname === '/help/products/create/productvariations' ? (
        <CreateProductVariations />
      ) : location.pathname === '/help/products/import/products' ? (
        <Importproducts />
      ) : location.pathname === '/help/products/import/vendorproducts' ? (
        <ImportVendorProducts />
      ) : location.pathname === '/help/products/import/skuadjustments' ? (
        <ImportSkuAdjustments />
      ) : location.pathname === '/help/products/export/products' ? (
        <Exportproducts />
      ) : location.pathname === '/help/products/export/vendorproducts' ? (
        <Exportvendorproducts />
      ) : location.pathname === '/help/products/export/custombundlekit' ? (
        <Exportcustombundlekit />
      ) : location.pathname === '/help/products/searchproducts' ? (
        <Searchproducts />
      ) : location.pathname === '/help/products/customproductfields' ? (
        <Customproductfields />
      ) : location.pathname === '/help/products/faq' ? (
        <FAQ />
      ) : // Analytics
      location.pathname === '/help/analytics/general/theanalyticsmodules' ? (
        <Theanalyticsmodules />
      ) : location.pathname === '/help/analytics/general/analyticsreports' ? (
        <Analyticsreports />
      ) : location.pathname === '/help/analytics/general/printingchartsfromanalytics' ? (
        <Printingchartsfromanalytics />
      ) : location.pathname === '/help/analytics/general/exportingreports' ? (
        <Exportingreports />
      ) : location.pathname === '/help/analytics/suborders/historicalsexports' ? (
        <Historicalordersexports />
      ) : location.pathname === '/help/analytics/suborders/salesoverview' ? (
        <Salesoverview />
      ) : location.pathname === '/help/analytics/suborders/biggesttickets' ? (
        <Biggesttickets />
      ) : location.pathname === '/help/analytics/suborders/shipments' ? (
        <Shipments />
      ) : location.pathname === '/help/analytics/subproducts/analyticsskuprofitability' ? (
        <Analyticsskuprofitability />
      ) : location.pathname === '/help/analytics/subproducts/yoygrowth' ? (
        <Yoygrowth />
      ) : location.pathname === '/help/analytics/subproducts/analyticslistingprofitability' ? (
        <Analyticslistingprofitability />
      ) : location.pathname === '/help/analytics/subproducts/topsellersandworstsellersreports' ? (
        <Topsellersandworstsellersreports />
      ) : location.pathname === '/help/analytics/subproducts/analyticstrendingprofitability' ? (
        <Analyticstrendingprofitability />
      ) : location.pathname === '/help/analytics/subdashboard/opportunitiesfoundbyextensivordermanager' ? (
        <Opportunitiesfoundbyextensivordermanager />
      ) : location.pathname === '/help/analytics/subinventory/analyticsinventoryreplenishmentalerts' ? (
        <Analyticsinventoryreplenishmentalerts />
      ) : location.pathname === '/help/analytics/subinventory/analyticssnapshotinventoryvalue' ? (
        <Analyticssnapshotinventoryvalue />
      ) : location.pathname === '/help/analytics/subinventory/analyticstrendinginventoryvalue' ? (
        <Analyticstrendinginventoryvalue />
      ) : location.pathname === '/help/analytics/subinventory/analyticscriticalinventorylevels' ? (
        <Analyticscriticalinventorylevels />
      ) : location.pathname === '/help/analytics/subinventory/analyticsinventoryaging' ? (
        <Analyticsinventoryaging />
      ) : location.pathname === '/help/analytics/subpurchaseorders/historicalexports' ? (
        <Historicalpurchaseordersexports />
      ) : // Settings
      location.pathname === '/help/settings/myprofile' ? (
        <Myprofile />
      ) : location.pathname === '/help/settings/useradministration' ? (
        <Useradministration />
      ) : location.pathname === '/help/settings/companyinfo' ? (
        <Companyinfo />
      ) : location.pathname === '/help/settings/companyinfo/' ? (
        <Companyinfo />
      ) : (
        <></>
      )}
    </div>
  );
};

export default MainPanel;
