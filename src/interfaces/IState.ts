import type ICity from './ICity';

export default interface IState {
  id: number;
  name: string;
  cities?: ICity[];
}
