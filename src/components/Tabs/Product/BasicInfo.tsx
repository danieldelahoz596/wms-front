import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import { OInput } from '@/components/Globals/OInput';
import { PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { productSelectOptions } from '@/utils/helpers/base';
import { useModel } from '@umijs/max';

const BasicInfo: React.FC = () => {
  const { editableProduct, onChangeSelectedProduct } = useModel('product');

  const inputFields = [
    {
      type: 'text',
      onChange: onChangeSelectedProduct,
      label: 'Master Sku *',
      name: 'master_sku',
      value: editableProduct?.master_sku,
      rules: [
        {
          required: true,
          message: "ssdfds",
        },
      ]
    },
    {
      type: 'text',
      onChange: onChangeSelectedProduct,
      label: 'Name *',
      name: 'name',
      value: editableProduct?.name,
    },
    [
      {
        type: 'select',
        onChange: onChangeSelectedProduct,
        label: 'Buy | Brand *',
        name: 'buyer',
        value: editableProduct?.buyer,
        options: [
          {
            value: 'lucy',
            label: 'lucky',
          },
        ],
      },
      {
        type: 'select',
        onChange: onChangeSelectedProduct,
        name: 'brand',
        value: editableProduct?.brand,
        options: [
          {
            value: 'lucy',
            label: 'lucky',
          },
        ],
        render: (inputField: any) => (
          <div style={{ display: 'flex' }}>
            {inputField}
            <PlusOutlined
              style={{
                color: 'blue',
                cursor: 'pointer',
                padding: '0.5rem',
                border: '1px solid blue',
              }}
            />
            <SettingOutlined
              style={{
                color: 'blue',
                cursor: 'pointer',
                padding: '0.5rem',
                border: '1px solid blue',
              }}
            />
          </div>
        ),
      },
    ],
    {
      type: 'select',
      onChange: onChangeSelectedProduct,
      label: 'Categories',
      name: 'categories',
      placeholder: 'Please Select',
      options: productSelectOptions,
      value: editableProduct?.categories,
      render: (inputField: any) => (
        <div style={{ display: 'flex' }}>
          {inputField}
          <PlusOutlined
            style={{
              color: 'blue',
              cursor: 'pointer',
              padding: '0.5rem',
              border: '1px solid blue',
            }}
          />
          <SettingOutlined
            style={{
              color: 'blue',
              cursor: 'pointer',
              padding: '0.5rem',
              border: '1px solid blue',
            }}
          />
        </div>
      ),
    },
    {
      type: 'select',
      onChange: onChangeSelectedProduct,
      label: 'Labels',
      name: 'labels',
      placeholder: 'Please Select',
      options: productSelectOptions,
      value: editableProduct?.labels,
      render: (inputField: any) => (
        <div style={{ display: 'flex' }}>
          {inputField}
          <PlusOutlined
            style={{
              color: 'blue',
              cursor: 'pointer',
              padding: '0.5rem',
              border: '1px solid blue',
            }}
          />
          <SettingOutlined
            style={{
              color: 'blue',
              cursor: 'pointer',
              padding: '0.5rem',
              border: '1px solid blue',
            }}
          />
        </div>
      ),
    },
    {
      type: 'textarea',
      onChange: onChangeSelectedProduct,
      label: 'Description',
      name: 'description',
      value: editableProduct?.description,
    },
    {
      type: 'text',
      onChange: onChangeSelectedProduct,
      label: 'Vendor Cost',
      name: 'vendor_cost',
      value: editableProduct?.vendor_cost,
    },
  ];

  return (
    <>
      {inputFields.map((inputItem, inputItemIndex) =>
        Array.isArray(inputItem) ? (
          <Row className="pb-3" key={inputItemIndex}>
            {inputItem.map((item: any, index) => (
              <Fragment key={`inputs-${index}`}>
                {item.label && <Col span={4}> {item.label} </Col>}
                <Col span={10}>
                  <OInput {...item} style={{ width: '100%' }} />
                </Col>
              </Fragment>
            ))}
          </Row>
        ) : (
          <Row key={inputItemIndex} className="pb-3">
            <Col span={4}>{inputItem.label}</Col>
            <Col span={20}>
              <OInput {...inputItem} style={{ width: '100%' }} />
            </Col>
          </Row>
        ),
      )}
    </>
  );
};

export default BasicInfo;
