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
  VendorProductImportByVendor = 'VendorProductImportByVendor',
  VendorProductImportOnce = 'VendorProductImportOnce',
  ImportVendorProductSummary = 'ImportVendorProductSummary',
  ExportVendorProducts = 'ExportVendorProducts',
  NewVendorProduct = 'NewVendorProduct',
  BundleKit = 'BundleKit',
  ProductVariants = 'ProductVariants',
  AttributeGroup = 'AttributeGroup',
  AddCoreProduct = 'AddCoreProduct',
  ConfigAttributeGroups = 'ConfigAttributeGroups',

  // order
  ManualOrder = 'Manual Order',
  EditOrder = 'EditOrder',
  CancelOrder = 'CancelOrder',
  RestoreOrder = 'RestoreOrder',

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
  ExportStockEditHistory = 'ExportStockEditHistory',
  BulkReconciliation = 'BulkReconciliation',
  StockAllocationDetails = 'StockAllocationDetails',

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
  ALERT = 'Alert',
  POSTAGE = 'Postage Balance REC...',
}
