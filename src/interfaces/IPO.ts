export interface IPOStatus {
  key: string;
  title: any;
  children?: IPOStatus[];
}

export interface IWarehouses {
  id: number;
  code: string;
  name: string;
}

export interface IVendors {
  id: number;
  code: string;
  name: string;
}

export interface IPOTemplates {
  id: number;
  name: string;
}

export interface IShippingTerms {
  id: number;
  name: string;
}

export interface IPaymentTerms {
  id: number;
  name: string;
}
export interface IMilestones {
  name: string;
}

export interface Iitem {
  id: number;
  code: string;
  name: string;
}

export interface IUnits {
  id: number;
  name: string;
}

export interface IUsers {
  id: number;
  name: string;
  type: number;
}

export interface IUserTypes {
  id: number;
  name: string;
}

export interface IPO {
  fromVendor: number;
  destination: number;
  poTemplate: number;
  poFormat: number;
  shippingTerm: number;
  paymentTerm: number;
  confirmedBy: string;
  itemCost: number;
  shippingCost: number;
  paymentDate: string;
  messageToVendor: string;
  internalNote: string;
  status: number;
}

export interface IPOItems {
  id: number;
  po: number;
  itemId: number;
  qty: number;
  unitType: number;
  unitCost: number;
  buyer: number;
  discountType: number;
  discountAmount: number;
}

export interface IPOOtherCost {
  name: string;
  cost: number;
}

export interface IPOMilestones {
  milestone: number;
}
