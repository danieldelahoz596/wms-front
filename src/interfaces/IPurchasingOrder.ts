import type IPurchasingOrderCost from './IPurchasingOrderCost';

export default interface IPurchasingOrder {
  id: number;
  order_number: string;
  vendor_id: number;
  destination_id: number;
  confirm_by: Date;
  milestone_id: number;
  status_id: number;
  shipping_cost: number;
  payment_date: Date;
  total_cost: number;
  other_costs: IPurchasingOrderCost[];
  po_items: any[];
}
