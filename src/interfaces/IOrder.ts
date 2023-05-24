import type ICustomer from './ICustomer';
import type IProduct from './IProduct';

export interface IOrderHistory {
  id: number;
  product_id: number;
  edit_time: Date;
  type: string;
  user: { id: number; username: string };
  description: string;
}

interface IOrderItem {
  id: number;
  order_id: number;
  product_id: number;
  unit_price: number;
  discount: number;
  qty: number;
  product: IProduct;
}

interface IOrderStatus {
  id: number;
  name: string;
}

export default interface IOrder {
  id: number;
  customer_id: number;
  channel_id: number;
  order_number: string;
  order_date: Date;
  paid_on: Date;
  ship_by: Date;
  deliver_by: Date;
  payment_type_id: number;
  amount_paid: number;
  order_total: number;
  discount: number;
  note: string;
  customer?: ICustomer;
  order_items: IOrderItem[];
  age: number;
  order_num: string;
  order_status: IOrderStatus;
}
