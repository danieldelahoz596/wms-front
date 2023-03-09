export interface IAction {
  action: string;
  operator?: any;
  value: any;
}

export interface IFilter {
  filter: string;
  operator?: string;
  value?: any;
}

export interface IOrderbots {
  id: number;
  rank: number;
  name: string;
  status: boolean;
  actions: IAction[];
  filters: IFilter[];
}
