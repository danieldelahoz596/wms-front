import { AddNewPOItemTableColumns } from '@/components/DemoData/index';
import { OButton } from '@/components/Globals/OButton';
import { OInput } from '@/components/Globals/OInput';
import type { IOSelectOption } from '@/components/Globals/OSelect';
import { EditableTable } from '@/utils/components/EditableTable';
import { CloseOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, Col, Form, Row } from 'antd';
import React, { useState } from 'react';

const AddNewPOItemTable: React.FC = () => {
  const { selectedPO, addPoItem, removePoItem, updatePoItem } = useModel('po');
  const { productList } = useModel('product');
  const [poItem, setPoItem] = useState({});

  const unitMeasureOptions: IOSelectOption[] = [
    {
      text: 'Each',
      value: '1',
    },
    {
      text: 'Each',
      value: '2',
    },
  ];

  // store product to po model
  const handleAddNewPOProductItem = () => {
    addPoItem({ ...poItem, unitCost: 0, discountType: '$', discount: 0 });
    setPoItem({});
  };

  const handleInputChange = (name: any, value: any) =>
    setPoItem((prevState) => ({ ...prevState, [name]: value }));

  // add new product to poItems list form input fields
  const inputFields = [
    {
      type: 'select',
      label: 'Add Item',
      name: 'product',
      placeholder: 'Add Item',
      onChange: (name: any, value: any) =>
        handleInputChange(
          name,
          productList.find((item) => item.id === value),
        ),
      options: productList.map((_product) => ({ text: _product.name, value: _product.id })),
    },
    {
      type: 'number',
      label: 'Quantity',
      name: 'quantity',
      placeholder: 'Quantity',
      onChange: (name: any, value: any) => handleInputChange(name, value),
    },
    {
      type: 'select',
      label: 'Unit of Measure',
      name: 'unitMeasure',
      placeholder: 'Unit of Measure',
      onChange: (name: any, value: any) => handleInputChange(name, value),
      options: unitMeasureOptions,
    },
  ];

  // prepare data table rows
  const rows = selectedPO.poItems.map((item: any, index: any) => ({
    key: index,
    removeBtn: (
      <div onClick={() => removePoItem(index)}>
        <CloseOutlined style={{ color: 'blue', cursor: 'pointer' }} />
      </div>
    ),
    product: item.product?.name,
    vendorSku: item.product?.vendorSku,
    quantity: item.quantity,
    unitMeasure: item.unitMeasure,
    totalUnitQty: item.quantity,
    unitCost: item.unitCost,
    discountType: item.discountType,
    discount: item.discount,
  }));

  return (
    <>
      <Row className="add-item-row" style={{ marginTop: '.5rem', marginBottom: '.5rem' }}>
        <Col>
          <Form layout="inline">
            {inputFields.map((inputItem, index) => (
              <Form.Item label={inputItem.label} key={index}>
                <OInput
                  type={inputItem.type}
                  name={inputItem.name}
                  options={inputItem.options}
                  onChange={inputItem.onChange}
                  placeholder={inputItem.placeholder}
                />
              </Form.Item>
            ))}
            <OButton btnText="Save" onClick={handleAddNewPOProductItem} />
          </Form>
        </Col>
      </Row>
      <Row className="add-item-row" style={{ marginTop: '.5rem', marginBottom: '.5rem' }}>
        <Col>
          <Card style={{ width: '100%' }}>
            <EditableTable
              dataSource={rows}
              columns={AddNewPOItemTableColumns}
              handleSave={updatePoItem}
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AddNewPOItemTable;
