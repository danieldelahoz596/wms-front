export default interface IWarehouse {
  id: number;
  name: string;
  address1: string;
  address2: string;
  address3: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  ext: string;
  fax: string;
  email: string;
  is_backup_warehouse: boolean;
  backup_warehouses: string;
  shipping_zones: string;
  rank: number;
  timezone: string;
  id_color: string;
}
