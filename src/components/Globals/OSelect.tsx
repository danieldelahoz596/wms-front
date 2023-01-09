import { Select } from 'antd';

export interface IOSelectOption {
  value: string;
  text: string;
}

export interface IOSelect {
  name: string;
  placeholder?: string;
  onChange: (name: string, value: any) => void;
  options?: IOSelectOption[];
  allowClear?: boolean;
  defaultValue?: any;
  style?: any;
}

export const OSelect: React.FC<IOSelect> = ({
  name,
  placeholder,
  onChange,
  options,
  allowClear = false,
  defaultValue,
  style,
}) => {
  return (
    <Select
      placeholder={placeholder}
      onChange={(value) => onChange(name, value)}
      allowClear={allowClear}
      defaultValue={defaultValue ?? '0'}
      style={{ width: '100%', ...style }}
    >
      <Select.Option value="0">Select..</Select.Option>
      {options?.map((option, index) => (
        <Select.Option key={index} value={option.value}>
          {option.text}
        </Select.Option>
      ))}
    </Select>
  );
};
