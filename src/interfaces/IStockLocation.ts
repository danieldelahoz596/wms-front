import type IProduct from './IProduct';

export default interface IStockLocation {
  id: number;
  product_id: number;
  location_id: number;
  on_hand: number;
  locked: number;
  allocated: number;
  available: number;
  discrepation: number;
  product: IProduct;
}
