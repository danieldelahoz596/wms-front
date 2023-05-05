import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Select, Row, Col, Checkbox, Divider, Button, Space } from 'antd';
import { useCallback, useMemo } from 'react';
import type { SelectProps } from 'antd';

interface ISelectOption {
  label: string;
  value: string;
}

interface ISelectDropdown {
  options: ISelectOption[];
  defaultSelectedItems?: any[];
  type: string;
  showCheckAll?: boolean;
  selectedItems: any[];
  setSelectedItems: (value: any) => void;
}

const SelectDropdown: React.FC<ISelectDropdown & SelectProps> = ({
  options,
  defaultSelectedItems,
  type,
  showCheckAll = true,
  selectedItems,
  setSelectedItems,
  ...props
}) => {
  const handleSelectItem = useCallback(
    (value) => {
      if (selectedItems.includes(value)) setSelectedItems(selectedItems.filter((item) => item !== value));
      else setSelectedItems([...selectedItems, value]);
    },
    [selectedItems, setSelectedItems],
  );

  const selectOptions = useMemo(
    () =>
      options?.map((option) => ({
        value: option.value,
        label: (
          <>
            <Row align="middle" gutter={10}>
              <Col>
                <Checkbox checked={selectedItems?.includes(option.value)} onClick={() => handleSelectItem(option.value)} />
              </Col>
              <Col>
                <h3>{option.label}</h3>
              </Col>
            </Row>
          </>
        ),
      })),
    [options, handleSelectItem, selectedItems],
  );

  return (
    <Select
      options={selectOptions}
      dropdownRender={(menu) => (
        <>
          {showCheckAll && (
            <>
              <Space style={{ marginTop: 10, marginLeft: 5 }}>
                <Button icon={<CheckOutlined />} onClick={() => setSelectedItems(options.map((option) => option.value))}>
                  Check all
                </Button>
                <Button icon={<CloseOutlined />} onClick={() => setSelectedItems([])}>
                  Uncheck all
                </Button>
              </Space>
              <Divider style={{ margin: '8px 0' }} />
            </>
          )}
          {menu}
        </>
      )}
      mode="multiple"
      onSelect={(value) => handleSelectItem(value)}
      value={[`Showing ${selectedItems?.length} ${type}s`]}
      tagRender={({ value }) => <div>{value}</div>}
      {...props}
    />
  );
};

export default SelectDropdown;
