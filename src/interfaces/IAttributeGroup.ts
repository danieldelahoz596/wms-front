import type IAttribute from './IAttribute';

export default interface IAttributeGroup {
  id: number;
  name: string;
  items: IAttribute[];
}
