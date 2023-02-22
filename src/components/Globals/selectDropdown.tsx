import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Select, Row, Col, Checkbox, Divider, Button, Space } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { useEffect, useState } from 'react';

interface ISelectOption {
  label: string;
  value: string;
}

interface ISelectDropdown {
  options: ISelectOption[];
  defaultSelectedItems: any[];
  type: string;
  size: SizeType;
  style: React.CSSProperties;
}

const SelectDropdown: React.FC<ISelectDropdown> = ({ options, defaultSelectedItems, type, ...props }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    setSelectedItems(defaultSelectedItems);
  }, [defaultSelectedItems]);

  const handleSelectItem = (value) => {
    if (selectedItems.includes(value)) setSelectedItems(selectedItems.filter((item) => item !== value));
    else setSelectedItems([...selectedItems, value]);
  };

  return (
    <Select
      options={options?.map((option) => ({
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
      }))}
      dropdownRender={(menu) => (
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
