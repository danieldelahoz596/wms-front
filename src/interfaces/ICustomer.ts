import type ICity from './ICity';
import type IState from './IState';

export default interface ICustomer {
  id: number;
  type: 'mobile' | 'home';
  phone_number: string;
  name: string;
  sex: boolean;
  age: number;
  pickup_location_id: number;
  channel_id: number;
  state_id: number;
  city_id: number;
  address: string;
  state: IState;
  city: ICity;
}
