import React from 'react';
import { Row, Col, Form, Input, Select, Card, InputNumber, Checkbox } from 'antd';
import { OInput } from '@/components/Globals/OInput';
import { PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import CoreProductsIcon from '@/utils/icons/coreProduct';

interface IBasicInfo {
  form: any;
}

const BasicInfo: React.FC<IBasicInfo> = ({ form }) => {
  const { editableProduct, onChangeSelectedProduct } = useModel('product');
  const { initialState } = useModel('@@initialState');

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
                    top: 26,
                    left: editableProduct?.status === 1 ? 2 : 1,
                    backgroundColor: 'white',
                    color: 'blue',
                    paddingLeft: 7,
                    paddingRight: 8,
                    borderRadius: 5,
                  }}
                >
                  <i style={{ textTransform: 'uppercase' }}>{editableProduct?.status === 1 ? 'Active' : 'Inactive'}</i>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      )}
<<<<<<< HEAD
      <Form form={form} labelCol={{ span: 4 }} labelAlign="left">
=======
      <Form form={form} className="custom">
>>>>>>> origin/develop
        {!editableProduct && (
          <>
            <Form.Item
              label="Master SKU"
              name="master_sku"
              rules={[{ required: true, message: 'Please input Master SKU' }]}
            >
              <Input placeholder="Required" />
            </Form.Item>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input Name' }]}
            >
              <Input placeholder="Required" />
            </Form.Item>
          </>
        )}
        <Form.Item label="Buy | Brand *" >
          <Input.Group compact>
            <Form.Item
              name="buyer"
              style={{ width: '50%', margin: 0 }}
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
                  options={initialState?.initialData?.brands.map((brand) => ({
                    value: brand.id,
                    label: brand.name,
                  }))}
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
        >
          <div style={{ display: 'flex' }}>
            <Select
              placeholder="Please Select"
              options={initialState?.initialData?.categories.map((brand) => ({
                value: brand.id,
                label: brand.name,
              }))}
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
        <Form.Item
          label="Labels"
          name="labels"
        >
          <div style={{ display: 'flex' }}>
            <Select
              placeholder="Please Select"
              options={initialState?.initialData?.labels.map((brand) => ({
                value: brand.id,
                label: brand.name,
              }))}
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
        <Form.Item
          label="Description"
          name="description"
        >
          <Input.TextArea />
        </Form.Item>
        <Row>
          <Col span={6}>
            <Form.Item
              label="M.A.P: $"
              name="m_a_p"
              labelCol={{ span: 10 }}
              labelAlign="left"
              rules={[{ required: true, message: 'Please input M.A.P' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col offset={2} span={8}>
            <Form.Item
              label="Max Shipping Cost: $"
              name="max_shipping_cost"
              labelCol={{ span: 10 }}
              labelAlign="left"
              rules={[{ required: true, message: 'Please input Max Shipping Cost' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col offset={2} span={6}>
            <Form.Item
              label="Vendor Cost: $"
              name="vendor_cost"
              labelCol={{ span: 10 }}
              labelAlign="left"
              rules={[{ required: true, message: 'Please input Vendor Cost' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Card title="Measurements">
          <Row>
            <Col span={8}>
              <Form.Item
                label="Weight"
                labelCol={{ span: 4 }}
                labelAlign="left"
                className="custom-form-item"
              >
                <Input.Group compact>
                  <Form.Item
                    label="lb."
                    name="lb"
                    style={{ width: '50%', margin: 0 }}
                    colon={false}
                    labelCol={{ offset: 1 }}
                  >
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    label="oz."
                    name="oz"
                    style={{ width: '50%', margin: 0 }}
                    colon={false}
                    labelCol={{ offset: 1 }}
                  >
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                </Input.Group>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="H/W/L"
                labelCol={{ span: 4, offset: 1 }}
                labelAlign="left"
                className="custom-form-item"
              >
                <Input.Group compact>
                  <Form.Item
                    label="x"
                    name="x"
                    style={{ width: '33%', margin: 0 }}
                    colon={false}
                    labelCol={{ offset: 1 }}
                  >
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    label="y"
                    name="y"
                    style={{ width: '33%', margin: 0 }}
                    colon={false}
                    labelCol={{ offset: 1 }}
                  >
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    label="z"
                    name="z"
                    style={{ width: '33%', margin: 0 }}
                    colon={false}
                    labelCol={{ offset: 1 }}
                  >
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                </Input.Group>
              </Form.Item>
            </Col>
          </Row>
        </Card>
        <Card title="Special" style={{ marginTop: 20 }}>
          <Row>
            <Col span={4}>
              <Form.Item label="Has Barcode">
                <Checkbox disabled={true} />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Hazmat">
                <Checkbox disabled={true} />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Own Box">
                <Checkbox disabled={true} />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Allow Backorders">
                <Checkbox disabled={true} />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Git Card">
                <Checkbox disabled={true} />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item label="Digital">
                <Checkbox disabled={true} />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Form>
    </>
  );
};

export default BasicInfo;
