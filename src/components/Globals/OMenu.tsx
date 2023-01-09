import { Menu } from 'antd';

export interface IOMenu {
  onSelect: (data: any) => void;
  options: any[];
}

export const OMenu: React.FC<IOMenu> = ({ onSelect, options }) => {
  return (
    <Menu onSelect={onSelect}>
      {options.map((option) => (
        <Menu.Item key={option.key}>{option.text}</Menu.Item>
      ))}
    </Menu>
  );
};
