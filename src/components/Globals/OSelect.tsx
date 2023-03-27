import { FormattedMessage } from '@umijs/max';
import { Select } from 'antd';
import { useMemo } from 'react';

export interface IOSelectOption {
  value: string | number;
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
  mode?: 'multiple' | 'tags';
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
  mode,
}) => {
  const selectOptions = useMemo(() => {
    const optionList = options?.map((option) => ({ value: option.value, label: option.text })) || [];

    if (showPlaceholder)
      return [{ value: 0, label: <FormattedMessage id="component.select.placeholder.select" /> }, ...optionList];
    return optionList;
  }, [options, showPlaceholder]);

  return hidden ? (
    <></>
  ) : (
    <Select
      mode={mode}
      placeholder={placeholder}
      onChange={(value) => onChange(name, value)}
      allowClear={allowClear}
      defaultValue={defaultValue ?? '0'}
      value={value ?? '0'}
      size="middle"
      style={{ width: '100%', ...style }}
      className={className}
      options={selectOptions}
    />
  );
};
