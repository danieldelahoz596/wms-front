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
import AvailableActions from './PurchaseOrders/availableActions';
import Restoring from './PurchaseOrders/restoring';
import UpdatePONumber from './PurchaseOrders/updatePONumber';
import ReSending from './PurchaseOrders/reSending';
import Receiving from './PurchaseOrders/receiving';
import Printing from './PurchaseOrders/printing';
import Canceling from './PurchaseOrders/canceling';
import Authorizing from './PurchaseOrders/authorizing';
import WorkingWithPOMilestones from './PurchaseOrders/workingWithPOMilestones';
import Voiding from './PurchaseOrders/voiding';
import SearchingForPOs from './PurchaseOrders/searchingForPOs';
import AutoPoAndRecordRules from './PurchaseOrders/autoPoAndRecordRules';
import CreateManualPO from './PurchaseOrders/createManualPO';
import AutomatePurchaseOrders from './PurchaseOrders/automatePurchaseOrders';
import DeleteLineItem from './PurchaseOrders/deleteLineItem';
import PasteFromCSV from './PurchaseOrders/pasteFromCSV';
import ExplanationPoStatus from './PurchaseOrders/explanationPoStatus';
import ExportingPO from './PurchaseOrders/exportingPO';

// Shipments
import SearchingForShipments from './Shipments/searchingForShipments';
import PrintingShippingLabels from './Shipments/printingShippingLabels';
import PrintEndOfDayForms from './Shipments/printEndOfDayForms';
import TrackingShipments from './Shipments/trackingShipments';
import RmaExports from './Shipments/rmaExports';
import PrintForPackage from './Shipments/printForPackage';
import ResendingConfirmationEmails from './Shipments/resendingConfirmationEmails';
import VoidingShipments from './Shipments/voidingShipments';
import PostalZones from './Shipments/postalZones';
import ExportingShipments from './Shipments/exportingShipments';

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
import CreateOrUpdate from './Settings/Vendors/createOrUpdate';
import Search from './Settings/Vendors/search';
import PoTemplate from './Settings/poTemplate';
import OrderPickOverview from './Settings/Warehouse/OrderPickingAndPacking/Information/orderPickOverview';
import GuideOrderPick from './Settings/Warehouse/OrderPickingAndPacking/Information/guideOrderPick';
import NonGuideOrderPick from './Settings/Warehouse/OrderPickingAndPacking/Information/nonGuideOrderPick';
import OrderPacking from './Settings/Warehouse/OrderPickingAndPacking/Information/orderPacking';
import PackingInMobile from './Settings/Warehouse/OrderPickingAndPacking/Information/packingInMobile';
import GuidedOrderPickOnDevice from './Settings/Warehouse/OrderPickingAndPacking/PickingWithDevice/guidedOrderPickOnDevice';
import NonGuidedOrderPickOnDevice from './Settings/Warehouse/OrderPickingAndPacking/PickingWithDevice/nonGuidedOrderPickOnDevice';
import NoStock from './Settings/Warehouse/OrderPickingAndPacking/noStock';
import PickToCarton from './Settings/Warehouse/OrderPickingAndPacking/pickToCarton';
import PickItemWithPartSceanSettings from './Settings/Warehouse/OrderPickingAndPacking/pickItemWithPartSceanSettings';
import Overview from './Settings/Warehouse/CustomerPortal/Info/overview';
import Options from './Settings/Warehouse/CustomerPortal/Info/options';
import Location from './Settings/Warehouse/CustomerPortal/SettingUp/location';
import ClientPart from './Settings/Warehouse/CustomerPortal/SettingUp/clientPart';
import Customer from './Settings/Warehouse/CustomerPortal/SettingUp/customer';
import LoggingInto from './Settings/Warehouse/CustomerPortal/Using/loggingInto';
import Customization from './Settings/Warehouse/CustomerPortal/Using/customization';
import Type from './Settings/Warehouse/Barcoding/Info/type';
import Hardware from './Settings/Warehouse/Barcoding/labelPrinting/hardware';
import SelectingBarcodeLabelMedia from './Settings/Warehouse/Barcoding/labelPrinting/selectingBarcodeLabelMedia';
import ConfigureZebra from './Settings/Warehouse/Barcoding/labelPrinting/configureZebra';
import SettingUp from './Settings/Warehouse/Barcoding/labelPrinting/settingUp';
import Template from './Settings/Warehouse/Barcoding/printingLabel/template';
import MobileApp from './Settings/Warehouse/Barcoding/printingLabel/mobileApp';
import GoogleChromeAddon from './Settings/Warehouse/Barcoding/printingLabel/googleChromeAddon';
import AssetMove from './Settings/Warehouse/BinMove/assetMove';
import InventoryMove from './Settings/Warehouse/BinMove/inventoryMove';
import ChildBinMove from './Settings/Warehouse/BinMove/childBinMove';
import MassBinMove from './Settings/Warehouse/BinMove/massBinMove';
import ShippingInMobile from './Settings/Warehouse/MobileReceivingPicking/shippingInMobile';
import Inventory from './Inventory';

const MainPanel: React.FC = () => {
  const location = useLocation();

  return (
    <div className="help-content">
      {
        // dashboard
        location.pathname === '/help/dashboard/general' ? (
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
        ) : location.pathname === '/help/settings/vendors/createOrUpdate' ? (
          <CreateOrUpdate />
        ) : location.pathname === '/help/settings/vendors/search' ? (
          <Search />
        ) : location.pathname === '/help/settings/poTemplate' ? (
          <PoTemplate />
        ) : // Settings - Warehouse
        location.pathname === '/help/settings/warehouse/orderPickingAndPacking/information/overview' ? (
          <OrderPickOverview />
        ) : location.pathname === '/help/settings/warehouse/orderPickingAndPacking/information/guidedOrderPick' ? (
          <GuideOrderPick />
        ) : location.pathname === '/help/settings/warehouse/orderPickingAndPacking/information/nonGuidedOrderPick' ? (
          <NonGuideOrderPick />
        ) : location.pathname === '/help/settings/warehouse/orderPickingAndPacking/information/orderPacking' ? (
          <OrderPacking />
        ) : location.pathname === '/help/settings/warehouse/orderPickingAndPacking/information/packingInMobile' ? (
          <PackingInMobile />
        ) : location.pathname === '/help/settings/warehouse/orderPickingAndPacking/pickingWithDevice/guided' ? (
          <GuidedOrderPickOnDevice />
        ) : location.pathname === '/help/settings/warehouse/orderPickingAndPacking/pickingWithDevice/nonGuided' ? (
          <NonGuidedOrderPickOnDevice />
        ) : location.pathname === '/help/settings/warehouse/orderPickingAndPacking/noStock' ? (
          <NoStock />
        ) : location.pathname === '/help/settings/warehouse/orderPickingAndPacking/pickToCarton' ? (
          <PickToCarton />
        ) : location.pathname === '/help/settings/warehouse/orderPickingAndPacking/pickItemWithPartScanSettings' ? (
          <PickItemWithPartSceanSettings />
        ) : location.pathname === '/help/settings/warehouse/customerPortal/info/overview' ? (
          <Overview />
        ) : location.pathname === '/help/settings/warehouse/customerPortal/info/options' ? (
          <Options />
        ) : location.pathname === '/help/settings/warehouse/customerPortal/settingUp/overview' ? (
          <Overview />
        ) : location.pathname === '/help/settings/warehouse/customerPortal/settingUp/location' ? (
          <Location />
        ) : location.pathname === '/help/settings/warehouse/customerPortal/settingUp/clientPart' ? (
          <ClientPart />
        ) : location.pathname === '/help/settings/warehouse/customerPortal/settingUp/customer' ? (
          <Customer />
        ) : location.pathname === '/help/settings/warehouse/customerPortal/using/loggingInto' ? (
          <LoggingInto />
        ) : location.pathname === '/help/settings/warehouse/customerPortal/using/customization' ? (
          <Customization />
        ) : location.pathname === '/help/settings/warehouse/barcoding/info/overview' ? (
          <Overview />
        ) : location.pathname === '/help/settings/warehouse/barcoding/info/type' ? (
          <Type />
        ) : location.pathname === '/help/settings/warehouse/barcoding/labelPrinting/hardware' ? (
          <Hardware />
        ) : location.pathname === '/help/settings/warehouse/barcoding/labelPrinting/labelMedia' ? (
          <SelectingBarcodeLabelMedia />
        ) : location.pathname === '/help/settings/warehouse/barcoding/labelPrinting/configureZebra' ? (
          <ConfigureZebra />
        ) : location.pathname === '/help/settings/warehouse/barcoding/labelPrinting/settingUp' ? (
          <SettingUp />
        ) : location.pathname === '/help/settings/warehouse/barcoding/printingLabel/template' ? (
          <Template />
        ) : location.pathname === '/help/settings/warehouse/barcoding/printingLabel/mobileApp' ? (
          <MobileApp />
        ) : location.pathname === '/help/settings/warehouse/barcoding/printingLabel/googleChrome' ? (
          <GoogleChromeAddon />
        ) : location.pathname === '/help/settings/warehouse/bindMove/assetMove' ? (
          <AssetMove />
        ) : location.pathname === '/help/settings/warehouse/bindMove/inventoryMove' ? (
          <InventoryMove />
        ) : location.pathname === '/help/settings/warehouse/bindMove/childBinMove' ? (
          <ChildBinMove />
        ) : location.pathname === '/help/settings/warehouse/bindMove/massBinMove' ? (
          <MassBinMove />
        ) : location.pathname === '/help/settings/warehouse/mobileReceivingPicking/packingInMobile' ? (
          <PackingInMobile />
        ) : location.pathname === '/help/settings/warehouse/mobileReceivingPicking/shippingInMobile' ? (
          <ShippingInMobile />
        ) : // Shipments
        location.pathname === '/help/shipments/searchingForShipments' ? (
          <SearchingForShipments />
        ) : location.pathname === '/help/shipments/printingShippingLabels' ? (
          <PrintingShippingLabels />
        ) : location.pathname === '/help/shipments/printEndOfDayForms' ? (
          <PrintEndOfDayForms />
        ) : location.pathname === '/help/shipments/trackingShipments' ? (
          <TrackingShipments />
        ) : location.pathname === '/help/shipments/rmaExports' ? (
          <RmaExports />
        ) : location.pathname === '/help/shipments/printForUPSShipments' ? (
          <PrintForPackage />
        ) : location.pathname === '/help/shipments/resendingConfirmationEmails' ? (
          <ResendingConfirmationEmails />
        ) : location.pathname === '/help/shipments/voidingShipments' ? (
          <VoidingShipments />
        ) : location.pathname === '/help/shipments/postalZones' ? (
          <PostalZones />
        ) : location.pathname === '/help/shipments/exportingShipments' ? (
          <ExportingShipments />
        ) : // Purchase Orders
        location.pathname === '/help/purchasing/availableActions' ? (
          <AvailableActions />
        ) : location.pathname === '/help/purchasing/restoringPO' ? (
          <Restoring />
        ) : location.pathname === '/help/purchasing/updatingPONumber' ? (
          <UpdatePONumber />
        ) : location.pathname === '/help/purchasing/reSendingPO' ? (
          <ReSending />
        ) : location.pathname === '/help/purchasing/receivingPO' ? (
          <Receiving />
        ) : location.pathname === '/help/purchasing/printingPO' ? (
          <Printing />
        ) : location.pathname === '/help/purchasing/cancelingPO' ? (
          <Canceling />
        ) : location.pathname === '/help/purchasing/authorizingPO' ? (
          <Authorizing />
        ) : location.pathname === '/help/purchasing/workingWithPOMilestone' ? (
          <WorkingWithPOMilestones />
        ) : location.pathname === '/help/purchasing/voidingPO' ? (
          <Voiding />
        ) : location.pathname === '/help/purchasing/searchingForPO' ? (
          <SearchingForPOs />
        ) : location.pathname === '/help/purchasing/autoPOAndReorderRules' ? (
          <AutoPoAndRecordRules />
        ) : location.pathname === '/help/purchasing/createManualPO' ? (
          <CreateManualPO />
        ) : location.pathname === '/help/purchasing/automatePurchaseOrders' ? (
          <AutomatePurchaseOrders />
        ) : location.pathname === '/help/purchasing/deleteLineItem' ? (
          <DeleteLineItem />
        ) : location.pathname === '/help/purchasing/pasteFromCSV' ? (
          <PasteFromCSV />
        ) : location.pathname === '/help/purchasing/explanationPOStatus' ? (
          <ExplanationPoStatus />
        ) : location.pathname === '/help/purchasing/exportingPO' ? (
          <ExportingPO />
        ) : // Purchase Orders
        location.pathname === '/help/inventory/general' ? (
          <Inventory />
        ) : (
          <></>
        )
      }
    </div>
  );
};

export default MainPanel;
