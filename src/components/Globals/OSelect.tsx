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
  value?: any;
  style?: any;
  hidden?: boolean;
  showPlaceholder?: boolean;
  className?: string;
}

export const OSelect: React.FC<IOSelect> = ({
  name,
  placeholder,
  onChange,
  options,
  allowClear = false,
  defaultValue,
  value,
  style,
  showPlaceholder = true, 
  hidden = false,
  className,
}) => {
  return hidden ? (
    <></>
  ) : (
    <Select
      placeholder={placeholder}
      onChange={(value) => onChange(name, value)}
      allowClear={allowClear}
      defaultValue={defaultValue ?? '0'}
      value={value ?? '0'}
      size="middle"
      style={{ width: '100%', ...style }}
      className={className}
    >
      { showPlaceholder && <Select.Option value="0">Select...</Select.Option> }
      {options?.map((option, index) => (
        <Select.Option key={`option-${index}`} value={option.value}>
          {option.text}
        </Select.Option>
      ))}
    </Select>
  );
};
