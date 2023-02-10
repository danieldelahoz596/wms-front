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

  // products
  ImportVendorProducts = 'ImportVendorProducts',
  ImportVendorProductsByVendor = 'ImportVendorProductsByVendor',
  ImportVendorProductsAll = 'ImportVendorProductsAll',
  ImportCustomFields = 'ImportCustomFields',
  ExportVendorProducts = 'ExportVendorProducts',
  NewVendorProduct = 'NewVendorProduct',
  BundleKit = 'BundleKit',
  ProductVariants = 'ProductVariants',
  AttributeGroup = 'AttributeGroup',
  AddCoreProduct = 'AddCoreProduct',
  ConfigAttributeGroups = 'ConfigAttributeGroups',
  AdjustMasterSKU = 'AdjustMasterSKU',
  ImportSKUAdjustment = 'ImportSKUAdjustment',
  NewVirtualProduct = 'NewVirtualProduct',
  SelectCoreProduct = 'SelectCoreProduct',
  SelectQuantityOfSKU = 'SelectQuantityOfSKU',
  ExportCustomBundleKit = 'ExportCustomBundleKit',

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

  // Purchasing
  CancelPurchaseOrders = 'Cancel',

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
  Fullfilled = '7',
  Closed = '8',
  Voided = '9',
  Canceled = '10',
}

export enum productType {
  CoreProduct = 'Core Product',
  VariationCoreProduct = 'Variation Core Product',
  BundleOrKit = 'Bundle or Kit',
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
