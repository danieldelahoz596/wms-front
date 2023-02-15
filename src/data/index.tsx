export const productStaticData = [
  {
    id: 1,
    name: 'AA0001 - Product One',
    sku: 'PO0001',
    vendorSku: 'P.O. #FORKS11147',
  },
  {
    id: 2,
    name: 'AA0002 - Product Two',
    sku: 'PO0002',
    vendorSku: 'P.O. #FORKS11148',
  },
];

export const milestonesStaticData = [
  {
    id: 1,
    value: '1',
    text: '30% Deposit Paid',
    color: '#000000',
  },
  {
    id: 2,
    text: '30% Deposit; 50% PAID',
    value: '2',
    color: '#000000',
  },
  {
    id: 3,
    text: '50% sent',
    value: '3',
    color: '#000000',
  },
  {
    id: 4,
    text: 'Added in SAP',
    value: '4',
    color: '#000000',
  },
  {
    id: 5,
    text: 'Awaiting Truck',
    value: '5',
    color: '#000000',
  },
  {
    id: 6,
    text: 'Bagged',
    value: '6',
    color: '#000000',
  },
  {
    id: 7,
    text: 'CEO',
    value: '7',
    color: '#000000',
  },
];

export const sidePanelChildrenData = [
  {
    id: 1,
    title: 'Item 1',
  },
  {
    id: 2,
    title: 'Item 2',
  },
  {
    id: 3,
    title: 'Item 3',
  },
  {
    id: 4,
    title: 'Item 4',
  },
  {
    id: 5,
    title: 'Item 5',
  },
];

export const sidePanelData = [
  {
    id: 1,
    header: 'Panel 1',
    children: sidePanelChildrenData,
  },
  {
    id: 2,
    header: 'Panel 2',
    children: sidePanelChildrenData,
  },
  {
    id: 3,
    header: 'Panel 3',
    children: sidePanelChildrenData,
  },
  {
    id: 4,
    header: 'Panel 4',
    children: sidePanelChildrenData,
  },
  {
    id: 5,
    header: 'Panel 5',
    children: sidePanelChildrenData,
  },
];

export const Table1DemoColumns = [
  {
    title: 'Vendor',
    dataIndex: 'fromVendor',
    key: 'fromVendor',
    render: (obj: any) => obj?.name,
  },
  {
    title: 'P.O. Number',
    dataIndex: 'ponumber',
    key: 'ponumber',
  },
  {
    title: 'Custom P.O. Number',
    dataIndex: 'customponumber',
    key: 'ponumber',
  },
  {
    title: 'Created By',
    dataIndex: 'createdBy',
    key: 'createdBy',
  },
  {
    title: 'Authorizer',
    dataIndex: 'authorizer',
    key: 'authorizer',
  },
  {
    title: 'Milestone',
    dataIndex: 'milestone',
    key: 'milestone',
    render: (obj: any) => obj?.text,
  },
  {
    title: 'Notes',
    dataIndex: 'internalNote',
    key: 'internalNote',
  },
  {
    title: 'Date Created',
    dataIndex: 'dateCreated',
    key: 'dateCreated',
  },
  {
    title: 'Date issued',
    dataIndex: 'dateIssued',
    key: 'dateIssued',
  },
  {
    title: 'Destination',
    dataIndex: 'destination',
    key: 'destination',
    render: (obj: any) => obj?.text,
  },
  {
    title: 'Total Cost',
    dataIndex: 'totalCost',
    key: 'totalCost',
  },
  {
    title: 'Shipping Cost',
    dataIndex: 'shippingCost',
    key: 'shippingCost',
  },
  {
    title: 'Total units',
    dataIndex: 'totalUnits',
    key: 'totalUnits',
  },
];

export const Table2DemoColumns = [
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Vendor SKU',
    dataIndex: 'vendorSku',
    key: 'vendorSku',
  },
  {
    title: 'Buyer',
    dataIndex: 'buyer',
    key: 'buyer',
  },
  {
    title: 'Qty.',
    dataIndex: 'qty',
    key: 'qty',
  },
  {
    title: 'Unit of Measure',
    dataIndex: 'unitMeasure',
    key: 'unitMeasure',
  },
  {
    title: 'Total Unit Qty.',
    dataIndex: 'totalUnitQty',
    key: 'totalUnitQty',
  },
  {
    title: 'Original Cost',
    dataIndex: 'originalCost',
    key: 'originalCost',
  },
  {
    title: 'Billed Cost',
    dataIndex: 'billedCost',
    key: 'billedCost',
  },
  {
    title: 'Landed Cost',
    dataIndex: 'landedCost',
    key: 'landedCost',
  },
  {
    title: 'Discount',
    dataIndex: 'discount',
    key: 'discount',
  },
  {
    title: 'Tax %',
    dataIndex: 'tax',
    key: 'tax',
  },
  {
    title: 'Total Cost',
    dataIndex: 'totalCost',
    key: 'totalCost',
  },
];

export const Table2StaticData = [
  {
    key: '1',
    status: 'icon1',
    product: 'product 1',
    vendorSku: 'P.O. #FORKS1114',
    buyer: 'xyz',
    qty: '10',
    unitMeasure: 'Each',
    totalUnitQty: '50',
    originalCost: '$61',
    billedCost: '$61',
    landedCost: '$61',
    discount: '$0.00',
    tax: '0.0',
    totalCost: '$3000',
  },
  {
    key: '2',
    status: 'icon2',
    product: 'product 2',
    vendorSku: 'P.O. #FORKS11147',
    buyer: 'xyzasd',
    qty: '100',
    unitMeasure: 'Each',
    totalUnitQty: '500',
    originalCost: '$61',
    billedCost: '$610',
    landedCost: '$610',
    discount: '$0.00',
    tax: '0.0',
    totalCost: '$30000',
  },
  {
    key: '3',
    status: 'icon3',
    product: 'product 3',
    vendorSku: 'P.O. #FORKS11148',
    buyer: 'asdafdfr',
    qty: '1000',
    unitMeasure: 'Each',
    totalUnitQty: '5000',
    originalCost: '$6100',
    billedCost: '$6100',
    landedCost: '$6100',
    discount: '$0.00',
    tax: '0.0',
    totalCost: '$300000',
  },
];
