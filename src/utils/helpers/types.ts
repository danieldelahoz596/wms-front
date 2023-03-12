export enum modalType {
  New = 'New',
  Edit = 'Edit',
  Delete = 'Delete',
  Export = 'Export',
  Import = 'Import',
  Close = 'Close',
  Preview = 'Preview',
  History = 'History',
  Merge = 'Merge',
  Receive = 'Receive',
  Void = 'Void',
  Cancel = 'Cancel',
  Remove = 'Remove',
  Variation = 'Variation',
  ImportExportSummary = 'ImportExportSummary',
  Activate = 'Activate',
  Add = 'Add',
  Configure = 'Configure',

  // products
  AdjustMasterSKU = 'AdjustMasterSKU',
  CoreProduct = 'CoreProduct',
  BundleKit = 'BundleKit',
  ImportVendorProducts = 'ImportVendorProducts',
  ImportVendorProductsByVendor = 'ImportVendorProductsByVendor',
  ImportVendorProductsAll = 'ImportVendorProductsAll',
  ImportSKUAdjustment = 'ImportSKUAdjustment',
  ImportCustomFields = 'ImportCustomFields',
  ExportVendorProducts = 'ExportVendorProducts',
  NewVendorProduct = 'NewVendorProduct',
  ProductVariants = 'ProductVariants',
  AttributeGroup = 'AttributeGroup',
  AddCoreProduct = 'AddCoreProduct',
  ConfigAttributeGroups = 'ConfigAttributeGroups',
  ProductVariations = 'ProductVariations',
  BundleKitProduct = 'BundleKitProduct',
  SelectQuantityOfSKU = 'SelectQuantityOfSKU',
  ExportCustomBundleKit = 'ExportCustomBundleKit',
  VirtualProductEdit = 'VirtualProductEdit',

  // order
  ManualOrder = 'Manual Order',
  EditOrder = 'EditOrder',
  CancelOrder = 'CancelOrder',
  RestoreOrder = 'RestoreOrder',
  SelectOrderColumns = 'SelectOrderColumns',
  SplitOrder = 'SplitOrder',
  DuplicateOrder = 'DuplicateOrder',
  NewFieldType = 'NewFieldType',

  ImportOrder = 'ImportOrder',
  OrderImportSettings = 'OrderImportSettings',
  OrderExportSettings = 'OrderExportSettings',
  AddOrderImportSettings = 'AddOrderImportSettings',
  AddOrderExportSettings = 'AddOrderExportSettings',

  ExportOrder = 'ExportOrder',
  ExportQueueOrder = 'ExportQueueOrder',

  ImportOrderShipments = 'ImportOrderShipments',
  ShipmentImportMapping = 'ShipmentImportMapping',
  NewShipmentImportMapping = 'NewShipmentImportMapping',

  ShippingQueueSummary = 'ShippingQueueSummary',
  ExternalShipment = 'ExternalShipment',

  // inventory
  StockHistory = 'StockHistory',
  StockDeactive = 'StockDeactive',
  StockDrawRank = 'StockDrawRank',
  StockLocationChange = 'StockLocationChange',
  StockLocationTransfer = 'StockLocationTransfer',
  StockAdjust = 'StockAdjust',
  StockEdit = 'StockEdit',
  ExportStockEditHistory = 'ExportStockEditHistory',
  ExportStockDetails = 'ExportStockDetails',
  ExportInventory = 'ExportInventory',
  BulkReconciliation = 'BulkReconciliation',
  StockAllocationDetails = 'StockAllocationDetails',
  ImportReorderRules = 'ImportReorderRules',
  InventoryRules = 'InventoryRules',
  SelectWarehouseForInventoryImport = 'SelectWarehouseForInventoryImport',
  IncomingUnits = 'IncomingUnits',
  NewStock = 'NewStock',

  // Purchasing
  ManagePurchaseOrders = 'Manage',
  ExportPOSettings = 'ExportPOSetings',
  ConfigureMilestones = 'ConfigureMilestones',
  ManageMilestones = 'ManageMilestones',
  AddNewPo = 'AddNewPo',

  // Shipments
  ExportRmas = 'ExportRmas',
  ExportShipments = 'ExportShipments',
  VoidShipments = 'VoidShipments',

  // warehouse
  WarehouseBasicInfo = 'WarehouseBasicInfo',
  WarehouseReturnLocation = 'WarehouseReturnLocation',
  WarehouseShippingZones = 'WarehouseShippingZones',
  DocumentPrintSettings = 'DocumentPrintSettings',
  RankOrder = 'RankOrder',
  WarehouseDeactivate = 'WarehouseDeactivate',
  WarehouseHistory = 'WarehouseHistory',

  //toolbar
  SKUAlerts = 'SKUAlerts',
}

export enum EPOStatus {
  AAuth = '0',
  AConfirm = '1',
  ARAuth = '2',
  ADelivery = '3',
  ADelivered = '4',
  PDelivery = '5',
  PDelivered = '6',
  Fulfilled = '7',
  Closed = '8',
  Voided = '9',
  Canceled = '10',
}

export enum productType {
  CoreProduct = 'Core Product',
  VariationCoreProduct = 'Variation Core Product',
  BundleOrKit = 'Bundle or Kit',
  VirtualProduct = 'Virtual Product',
  Variations = 'Variations',
}

export enum productStatus {
  yellow = 'yellow',
  green = 'green',
  red = 'red',
  lightBlue = 'light blue',
}

export enum skuAlertsType {
  WARNING = 'Warning',
  INFO = 'Info',
}
