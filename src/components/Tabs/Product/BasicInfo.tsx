import React, { Fragment } from 'react';
import { Row, Col, Form, Input, Select } from 'antd';
import { OInput } from '@/components/Globals/OInput';
import { PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { productSelectOptions } from '@/utils/helpers/base';
import { useModel } from '@umijs/max';
import CoreProductsIcon from '@/utils/icons/coreProduct';

interface IBasicInfo {
  form: any;
}

const BasicInfo: React.FC<IBasicInfo> = ({ form }) => {
  const { editableProduct, onChangeSelectedProduct } = useModel('product');

  return (
    <>
      {!!editableProduct && (
        <Row align="bottom" style={{ marginBottom: 5 }}>
          <Col span={4}>Name</Col>
          <Col span={18}>
            <OInput
              type="text"
              onChange={onChangeSelectedProduct}
              label="Name *"
              name="name1"
              value={editableProduct?.name}
              style={{ width: '100%' }}
            />
          </Col>
          <Col span={2}>
            <Row justify="end">
              <div style={{ position: 'relative' }}>
                <CoreProductsIcon style={{ fontSize: 50 }} />
                <div
                  style={{
                    position: 'absolute',
                    top: 25,
                    left: editableProduct?.status === 1 ? 4 : 1,
                    backgroundColor: 'white',
                    color: 'blue',
                    paddingLeft: 8,
                    paddingRight: 8,
                    borderRadius: 5,
                  }}
                >
                  {editableProduct?.status === 1 ? 'Active' : 'Deactive'}
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      )}
      <Form form={form}>
        {!editableProduct && (
          <>
            <Form.Item
              label="Master SKU"
              name="master_sku"
              labelCol={{ span: 4 }}
              labelAlign="left"
              rules={[{ required: true, message: 'Please input Master SKU' }]}
            >
              <Input placeholder="Required" />
            </Form.Item>
            <Form.Item
              label="Name"
              name="name"
              labelCol={{ span: 4 }}
              labelAlign="left"
              rules={[{ required: true, message: 'Please input Name' }]}
            >
              <Input placeholder="Required" />
            </Form.Item>
          </>
        )}
        <Form.Item label="Buy | Brand *" labelCol={{ span: 4 }} labelAlign="left">
          <Input.Group compact>
            <Form.Item
              name="buyer"
              style={{ width: '50%', margin: 0 }}
              rules={[{ required: true, message: 'Please input Buyer' }]}
            >
              <Select
                options={[
                  {
                    value: 'lucy',
                    label: 'lucky',
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              name="brand"
              style={{ width: '50%', margin: 0 }}
              rules={[{ required: true, message: 'Please input Brand' }]}
            >
              <div style={{ display: 'flex' }}>
                <Select
                  options={[
                    {
                      value: 'lucy',
                      label: 'lucky',
                    },
                  ]}
                />
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
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item
          label="Categories"
          name="categories"
          labelCol={{ span: 4 }}
          labelAlign="left"
          rules={[{ required: true, message: 'Please input Categories' }]}
        >
          <div style={{ display: 'flex' }}>
            <Select placeholder="Please Select" options={productSelectOptions} />
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
        </Form.Item>
        <Form.Item
          label="Labels"
          name="labels"
          labelCol={{ span: 4 }}
          labelAlign="left"
          rules={[{ required: true, message: 'Please input Labels' }]}
        >
          <div style={{ display: 'flex' }}>
            <Select placeholder="Please Select" options={productSelectOptions} />
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
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          labelCol={{ span: 4 }}
          labelAlign="left"
          rules={[{ required: true, message: 'Please input Description' }]}
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </>
  );
};

export default BasicInfo;
