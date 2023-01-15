import { Input, Row, Col, DatePicker, Checkbox } from 'antd';
import React from 'react';
import type { IOSelectOption } from './OSelect';
import { OSelect } from './OSelect';

export interface IOInput {
  type?: string;
  onChange?: (name: string, value: any) => void;
  name?: string;
  label?: string;
  placeholder?: string;
  defaultValue?: any;
  options?: IOSelectOption[];
  addonBefore?: string;
  rows?: number;
  render?: any;
  style?: any;
  value?: any;
  checked?: boolean;
}
const { TextArea } = Input;

export const OInput: React.FC<IOInput> = ({
  type = 'text',
  onChange = () => {},
  name,
  placeholder,
  defaultValue,
  options,
  addonBefore,
  rows = 4,
  render,
  style,
  value,
  checked = false,
}) => {
  let inputField = null;

  if (type === 'number') {
    inputField = (
      <Input
        type="number"
        name={name}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        defaultValue={parseFloat(defaultValue)}
        value={value}
        addonBefore={addonBefore}
        style={style}
      />
    );
  } else if (type === 'select') {
    inputField = (
      <OSelect
        defaultValue={defaultValue}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        options={options}
        style={style}
      />
    );
  } else if (type === 'date') {
    inputField = <DatePicker onChange={(value) => onChange(name, value)} />;
  } else if (type === 'textarea') {
    inputField = (
      <TextArea
        showCount={false}
        maxLength={100}
        style={{ height: 120, marginBottom: 24, ...style }}
        rows={rows}
        name={name}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
      />
    );
  } else if (type === 'checkbox') {
    inputField = (
      <Checkbox name={name} onChange={(e) => onChange(name, e.target.checked)} checked={checked} />
    );
  } else {
    inputField = (
      <Input
        name={name}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        addonBefore={addonBefore}
        style={style}
      />
    );
  }

  return render ? render(inputField) : inputField;
};

interface IOTextArea {
  label: string;
  vertical?: boolean;
  rows?: number;
  maxLength?: number;
}

export const OTextArea: React.FC<IOTextArea> = (label, vertical = 0, rows = 6, maxLength = 9) => {
  return (
    <>
      {vertical == 0 && (
        <Row className="pb-3">
          <Col span={4}>{label}:</Col>
          <Col span={20}>
            <TextArea
              rows={rows}
              placeholder="maxLength is 6"
              maxLength={maxLength}
              showCount={false}
            />
          </Col>
        </Row>
      )}
      {vertical == 1 && (
        <div>
          <span>{label}</span>
          <TextArea
            rows={rows}
            placeholder="maxLength is 6"
            maxLength={maxLength}
            showCount={false}
          />
        </div>
      )}
    </>
  );
};
