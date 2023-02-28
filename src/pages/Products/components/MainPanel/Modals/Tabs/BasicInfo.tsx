import { OInput } from '@/components/Globals/OInput';
import AddItemModal from '@/pages/Products/components/Modals/AddItem';
import ConfigureItemModal from '@/pages/Products/components/Modals/ConfigItem';
import { modalType } from '@/utils/helpers/types';
import CoreProductsIcon from '@/utils/icons/coreProduct';
import { PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, Checkbox, Col, Form, Input, InputNumber, Row, Select } from 'antd';
import { useMemo, useState } from 'react';

interface IBasicInfo {
  form: any;
}

interface INewItemModalData {
  title: string;
  items: any[];
  setItems: (value: any) => void;
}

const BasicInfo: React.FC<IBasicInfo> = ({ form }) => {
  const { editableProduct, onChangeSelectedProduct } = useModel('product');
  const { brands, setBrands } = useModel('brand');
  const { categories, setCategories } = useModel('category');
  const { labels, setLabels } = useModel('label');
  const [currentModal, setCurrentModal] = useState(modalType.Close);
  const [itemModalData, setItemModalData] = useState<INewItemModalData>(null);

  const brandOptions = useMemo(
    () =>
      brands.map((brand) => ({
        value: brand.id,
        label: brand.name,
      })),
    [brands],
  );

  const categoryOptions = useMemo(
    () =>
      categories.map((brand) => ({
        value: brand.id,
        label: brand.name,
      })),
    [categories],
  );

  const labelOptions = useMemo(
    () =>
      labels.map((brand) => ({
        value: brand.id,
        label: brand.name,
      })),
    [labels],
  );

  return (
    <>
      {!!editableProduct && (
        <Row align="bottom" style={{ marginBottom: 5 }}>
          <Col span={3}>
            <span>Name :</span>
          </Col>
          <Col span={19}>
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
      <Form form={form} labelCol={{ span: 3 }} labelAlign="left">
        {!editableProduct && (
          <>
            <Form.Item label="Master SKU" name="master_sku" rules={[{ required: true, message: 'Please input Master SKU' }]}>
              <Input placeholder="Required" />
            </Form.Item>
            <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input Product Name' }]}>
              <Input placeholder="Required" />
            </Form.Item>
          </>
        )}
        <div style={{ display: 'flex', gap: 4 }}>
          <span style={{ width: 93 }}>* Buy | Brand :</span>
          <Form.Item name="buyer" style={{ flex: '1' }}>
            <Select placeholder="Select..." options={[{ value: 'lucy', label: 'lucky' }]} />
          </Form.Item>
          <Form.Item name="brand" style={{ flex: '1' }} rules={[{ required: true, message: 'Please input Brand' }]}>
            <Select placeholder="Select..." options={brandOptions} />
          </Form.Item>
          <PlusOutlined
            className="plus-button"
            onClick={() => {
              setCurrentModal(modalType.New);
              setItemModalData({ title: 'Add New Brand', items: brands, setItems: setBrands });
            }}
          />
          <SettingOutlined
            className="setting-button"
            onClick={() => {
              setCurrentModal(modalType.Edit);
              setItemModalData({ title: 'Configure Brand', items: brands, setItems: setBrands });
            }}
          />
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {/* <span>Categories</span> */}
          &nbsp;&nbsp;
          <Form.Item label="Categories" name="categories" style={{ flex: '1' }}>
            <Select placeholder="Select..." options={categoryOptions} />
          </Form.Item>
          <PlusOutlined
            className="plus-button"
            onClick={() => {
              setCurrentModal(modalType.New);
              setItemModalData({ title: 'Add New Category', items: categories, setItems: setCategories });
            }}
          />
          <SettingOutlined
            className="setting-button"
            onClick={() => {
              setCurrentModal(modalType.Edit);
              setItemModalData({ title: 'Configure Category', items: categories, setItems: setCategories });
            }}
          />
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          &nbsp;&nbsp;
          <Form.Item label="Labels" name="labels" style={{ flex: '1' }}>
            <Select placeholder="Select..." options={labelOptions} />
          </Form.Item>
          <PlusOutlined
            className="plus-button"
            onClick={() => {
              setCurrentModal(modalType.New);
              setItemModalData({ title: 'Add New Label', items: labels, setItems: setLabels });
            }}
          />
          <SettingOutlined
            className="setting-button"
            onClick={() => {
              setCurrentModal(modalType.Edit);
              setItemModalData({ title: 'Configure Label', items: labels, setItems: setLabels });
            }}
          />
        </div>

        <Form.Item label="Description" name="description">
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Vendor Cost: $" name="vendor_cost" colon={false}>
          <Input />
        </Form.Item>
        <Card title="Measurements" style={{ marginTop: 20 }}>
          <Row>
            <Col span={8}>
              <Form.Item label="Weight" labelCol={{ span: 6 }} className="custom-form-item">
                <Input.Group compact>
                  <Form.Item label="lb." name="lb" colon={false} labelCol={{ offset: 1 }} style={{ width: '50%' }}>
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item label="oz." name="oz" colon={false} labelCol={{ offset: 1 }} style={{ width: '50%' }}>
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                </Input.Group>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="H/W/L" labelCol={{ span: 4, offset: 1 }} className="custom-form-item">
                <Input.Group compact>
                  <Form.Item label="x" name="height" style={{ width: '33%', margin: 0 }} colon={false} labelCol={{ offset: 1 }}>
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item label="y" name="width" style={{ width: '33%', margin: 0 }} colon={false} labelCol={{ offset: 1 }}>
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item label="z" name="length" style={{ width: '33%', margin: 0 }} colon={false} labelCol={{ offset: 1 }}>
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
              <Form.Item name="has_Barcode" valuePropName="checked">
                <Checkbox>Has Barcode</Checkbox>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="hazmat" valuePropName="checked">
                <Checkbox>Hazmat</Checkbox>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="own_box" valuePropName="checked">
                <Checkbox>Own Box</Checkbox>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="allow_backorders" valuePropName="checked">
                <Checkbox>Allow Backorders</Checkbox>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="gift_card" valuePropName="checked">
                <Checkbox>Gift Card</Checkbox>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="digital" valuePropName="checked">
                <Checkbox>Digital</Checkbox>
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Form>

      <AddItemModal
        isOpen={currentModal === modalType.New}
        onSave={() => setCurrentModal(modalType.Close)}
        onClose={() => setCurrentModal(modalType.Close)}
        {...itemModalData}
      />

      <ConfigureItemModal
        isOpen={currentModal === modalType.Edit}
        onSave={() => setCurrentModal(modalType.Close)}
        onClose={() => setCurrentModal(modalType.Close)}
        {...itemModalData}
      />
    </>
  );
};

export default BasicInfo;
