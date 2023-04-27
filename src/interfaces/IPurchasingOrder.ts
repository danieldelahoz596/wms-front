import type IVendor from '@/interfaces/IVendor';
import type IPurchasingOrderCost from './IPurchasingOrderCost';
import type IWarehouse from './IWarehouse';

interface IPurchasingOrderStatus {
  id: number;
  name: string;
}

interface IPurchasingOrderItem {
  id: number;
  order_id: number;
  product_id: number;
  qty: number;
  unit_of_measure_id: number;
  billed_cost: number;
  landed_cost: number;
  discount: number;
  tax: number;
  billed_on: Date;
  received_on: Date;
  delivered_on: Date;
  status_id: number;
}

export default interface IPurchasingOrder {
  id: number;
  order_number: string;
  vendor_id: number;
  destination_id: number;
  confirm_by: Date;
  status_id: number;
  shipping_cost: number;
  payment_date: Date;
  total_cost: number;
  other_costs: IPurchasingOrderCost[];
  po_items: IPurchasingOrderItem[];
  vendor: IVendor;
  destination: IWarehouse;
  status: IPurchasingOrderStatus;
}
