export default interface IPoDefault {
  id: number;
  vendor_id: number;
  template: number;
  email: string;
  fax: string;
  format: number;
  incoterm: string;
  payment_term: number;
  itemaa_tax: string;
  ltr: string;
  created_at: Date;
  updated_at: Date;
}
