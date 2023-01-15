import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import { OInput } from '@/components/Globals/OInput';
import { PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { productSelectOptions } from '@/utils/helpers/base';

const BasicInfo: React.FC = () => {
  const inputFields = [
    {
      type: 'text',
      onChange: () => {},
      label: 'Master Sku *:',
      name: 'masterSku',
      placeholder: 'Master Sku',
      defaultValue: '',
    },
    {
      type: 'text',
      onChange: () => {},
      label: 'Name *:',
      name: 'name',
      placeholder: 'Name',
      defaultValue: '',
    },
    [
      {
        type: 'select',
        onChange: () => {},
        label: 'Buy | Brand *:',
        name: 'buy',
        defaultValue: 'lucy',
        options: [
          {
            value: 'lucy',
            label: 'lucky',
          },
        ],
      },
      {
        type: 'select',
        onChange: () => {},
        name: 'band',
        defaultValue: 'lucy',
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
      onChange: () => {},
      label: 'Categories:',
      name: 'categories',
      placeholder: 'Please Select',
      options: productSelectOptions,
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
      onChange: () => {},
      label: 'Lables:',
      name: 'lables',
      placeholder: 'Please Select',
      options: productSelectOptions,
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
      onChange: () => {},
      label: 'Description:',
      name: 'description',
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
