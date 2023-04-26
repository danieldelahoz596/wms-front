import type IVendor from '@/interfaces/IVendor';
import type IPurchasingOrderCost from './IPurchasingOrderCost';
import type IWarehouse from './IWarehouse';

interface IPurchasingOrderStatus {
  id: number;
  name: string;
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
  po_items: any[];
  vendor: IVendor;
  destination: IWarehouse;
  status: IPurchasingOrderStatus;
}
