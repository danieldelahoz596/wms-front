export default interface IVendor {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  phone1: string;
  phone2: string;
  website: string;
  is_supplier: boolean;
  is_manufacturer: boolean;
  status: boolean;
  open_pos: number;
  pending_units: number;
  pending_value: string;
  template: number;
  format: number;
  payment_term: number;
  ltr: boolean;
}
