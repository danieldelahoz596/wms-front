import AddItemModal from '@/pages/Products/MainPanel/Modals/AddItem';
import ConfigureItemModal from '@/pages/Products/MainPanel/Modals/ConfigItem';
import { modalType } from '@/utils/helpers/types';
import CoreProductsIcon from '@/utils/icons/coreProduct';
import { PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { FormattedMessage, useModel } from '@umijs/max';
import { Card, Col, Form, Input, InputNumber, Row, Select } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import AddCategoryModal from '../AddCategory';
import ConfigCategoryModal from '../ConfigCategory';

interface IBasicInfo {
  form: any;
}

export interface INewItemModalData {
  title: string;
  items: any[];
  type: 'tag' | 'brand' | 'label' | 'category' | 'subCategory';
  setItems: (value: any) => void;
}

const cateogryData = [
  {
    id: 1,
    name: 'Alcohol & Beer',
    description: 'This is Alcohol & Beer',
    items: [
      {
        id: 1,
        name: 'Alcohol',
      },
      {
        id: 2,
        name: 'Beer',
      },
    ],
  },
  {
    id: 2,
    name: 'Beverage',
    description: 'This is Beverage',
    items: [
      {
        id: 1,
        name: 'Water',
      },
      {
        id: 2,
        name: 'Coffee',
      },
      {
        id: 3,
        name: 'Tea',
      },
      {
        id: 4,
        name: 'Soft drinks',
      },
      {
        id: 5,
        name: 'Milk',
      },
    ],
  },
];

const BasicInfo: React.FC<IBasicInfo> = ({ form }) => {
  const { editableProduct } = useModel('product');
  const { brands, setBrands } = useModel('brand');
  // const { categories, setCategories } = useModel('category');
  const [categories, setCategories] = useState(cateogryData);
  const [subcategories, setSubCategories] = useState([]);
  const { labels, setLabels } = useModel('label');
  const { tags, setTags } = useModel('tag');
  const [currentModal, setCurrentModal] = useState(modalType.Close);
  const [itemModalData, setItemModalData] = useState<INewItemModalData>(null);
  const categoryId = Form.useWatch('category_id', form);

  useEffect(() => {
    const selectedCategoryItem = categories.find((category) => category.id === categoryId);
    if (selectedCategoryItem) setSubCategories(selectedCategoryItem.items);
  }, [categoryId, categories]);

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
      categories.map((category) => ({
        value: category.id,
        label: category.name,
      })),
    [categories],
  );

  const subCategoryOptions = useMemo(
    () =>
      subcategories.map((subCategory) => ({
        value: subCategory.id,
        label: subCategory.name,
      })),
    [subcategories],
  );

  const labelOptions = useMemo(
    () =>
      labels.map((item) => ({
        value: item.id,
        label: item.name,
      })),
    [labels],
  );

  const tagOptions = useMemo(
    () =>
      tags.map((tag) => ({
        value: tag.id,
        label: tag.name,
      })),
    [tags],
  );

  return (
    <>
      <Form form={form} labelCol={{ span: 3 }} labelAlign="left">
        {!!editableProduct && (
          <Row align="bottom" style={{ marginBottom: 5 }}>
            {/* <Col span={3}>
              <span>
                <FormattedMessage id="pages.products.coreProduct.basicInfo.name" /> :
              </span>
            </Col> */}
            <Col span={22}>
              <Form.Item
                label={<FormattedMessage id="component.form.label.name" />}
                name="name"
                rules={[{ required: true, message: 'Please input Product Name' }]}
              >
                <Input placeholder="Required" />
              </Form.Item>
              {/* <OInput
              type="text"
              onChange={onChangeSelectedProduct}
              label="Name *"
              name="name"
              // value={editableProduct?.name}
              style={{ width: '100%' }}
            /> */}
            </Col>
            <Col span={2}>
              <Row justify="end">
                <div style={{ position: 'relative' }}>
                  <CoreProductsIcon style={{ fontSize: 50 }} />
                  <div
                    style={{
                      position: 'absolute',
                      top: 26,
                      left: editableProduct?.status == true ? 2 : 1,
                      backgroundColor: 'white',
                      color: 'blue',
                      paddingLeft: 7,
                      paddingRight: 8,
                      borderRadius: 5,
                    }}
                  >
                    <i style={{ textTransform: 'uppercase' }}>{editableProduct?.status == true ? 'Active' : 'Inactive'}</i>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        )}
        {!editableProduct && (
          <>
            <Form.Item
              label={<FormattedMessage id="component.form.label.masterSku" />}
              name="sku"
              rules={[{ required: true, message: 'Please input Master SKU' }]}
            >
              <Input placeholder="Required" />
            </Form.Item>
            <Form.Item
              label={<FormattedMessage id="component.form.label.name" />}
              name="name"
              rules={[{ required: true, message: 'Please input Product Name' }]}
            >
              <Input placeholder="Required" />
            </Form.Item>
          </>
        )}
        <div style={{ display: 'flex', gap: 4 }}>
          <span style={{ width: 93 }}>* {<FormattedMessage id="component.form.label.buyBrand" />} :</span>
          <Form.Item name="buyer" style={{ flex: '1' }}>
            <Select
              placeholder={<FormattedMessage id="component.select.placeholder.select" />}
              options={[{ value: 'lucy', label: 'lucky' }]}
            />
          </Form.Item>
          <Form.Item name="brand_id" style={{ flex: '1' }} rules={[{ required: true, message: 'Please input Brand' }]}>
            <Select placeholder={<FormattedMessage id="component.select.placeholder.select" />} options={brandOptions} />
          </Form.Item>
          <PlusOutlined
            className="plus-button"
            onClick={() => {
              setCurrentModal(modalType.New);
              setItemModalData({ title: 'Add New Brand', items: brands, setItems: setBrands, type: 'brand' });
            }}
          />
          <SettingOutlined
            className="setting-button"
            onClick={() => {
              setCurrentModal(modalType.Edit);
              setItemModalData({ title: 'Configure Brand', items: brands, setItems: setBrands, type: 'brand' });
            }}
          />
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          &nbsp;&nbsp;
          <Form.Item label={<FormattedMessage id="component.form.label.categories" />} name="category_id" style={{ flex: '1' }}>
            <Select placeholder={<FormattedMessage id="component.select.placeholder.select" />} options={categoryOptions} />
          </Form.Item>
          <PlusOutlined
            className="plus-button"
            onClick={() => {
              setCurrentModal(modalType.NewCategory);
              setItemModalData({ title: 'Add New Category', items: categories, setItems: setCategories, type: 'category' });
            }}
          />
          <SettingOutlined
            className="setting-button"
            onClick={() => {
              setCurrentModal(modalType.ConfigCategory);
              setItemModalData({ title: 'Configure Category', items: categories, setItems: setCategories, type: 'category' });
            }}
          />
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          &nbsp;&nbsp;
          <Form.Item label="SubCategory" name="sub_category_id" style={{ flex: '1' }}>
            <Select placeholder={<FormattedMessage id="component.select.placeholder.select" />} options={subCategoryOptions} />
          </Form.Item>
          <PlusOutlined
            className="plus-button"
            onClick={() => {
              setCurrentModal(modalType.New);
              setItemModalData({
                title: 'Add New Sub Category',
                items: subcategories,
                setItems: setSubCategories,
                type: 'subCategory',
              });
            }}
          />
          <SettingOutlined
            className="setting-button"
            onClick={() => {
              setCurrentModal(modalType.Edit);
              setItemModalData({
                title: 'Configure Sub Category',
                items: subcategories,
                setItems: setSubCategories,
                type: 'subCategory',
              });
            }}
          />
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          &nbsp;&nbsp;
          <Form.Item label={<FormattedMessage id="component.form.label.labels" />} name="label_id" style={{ flex: '1' }}>
            <Select placeholder={<FormattedMessage id="component.select.placeholder.select" />} options={labelOptions} />
          </Form.Item>
          <PlusOutlined
            className="plus-button"
            onClick={() => {
              setCurrentModal(modalType.New);
              setItemModalData({ title: 'Add New Label', items: labels, setItems: setLabels, type: 'label' });
            }}
          />
          <SettingOutlined
            className="setting-button"
            onClick={() => {
              setCurrentModal(modalType.Edit);
              setItemModalData({ title: 'Configure Label', items: labels, setItems: setLabels, type: 'label' });
            }}
          />
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          &nbsp;&nbsp;
          <Form.Item label="Tag" name="tag_id" style={{ flex: '1' }}>
            <Select placeholder={<FormattedMessage id="component.select.placeholder.select" />} options={tagOptions} />
          </Form.Item>
          <PlusOutlined
            className="plus-button"
            onClick={() => {
              setCurrentModal(modalType.New);
              setItemModalData({ title: 'Add New Tag', items: tags, setItems: setTags, type: 'tag' });
            }}
          />
          <SettingOutlined
            className="setting-button"
            onClick={() => {
              setCurrentModal(modalType.Edit);
              setItemModalData({ title: 'Configure Tag', items: tags, setItems: setTags, type: 'tag' });
            }}
          />
        </div>

        <Form.Item label={<FormattedMessage id="component.form.label.description" />} name="description">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item label={<FormattedMessage id="component.form.label.vendorCost" />} colon={false} style={{ marginBottom: 0 }}>
          <Form.Item name="vendor_cost" style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="selling_cost"
            label="Sell Cost"
            style={{ display: 'inline-block', width: 'calc(50% - 12px)', marginLeft: '24px' }}
          >
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>
        </Form.Item>
        <Card title="Measurements" style={{ marginTop: 20 }}>
          <Row>
            <Col span={8}>
              <Form.Item
                label={<FormattedMessage id="component.form.label.weight" />}
                labelCol={{ span: 6 }}
                className="custom-form-item"
              >
                <Input.Group compact>
                  <Form.Item
                    label={<FormattedMessage id="component.form.label.lb" />}
                    name="pound"
                    colon={false}
                    labelCol={{ offset: 1 }}
                    style={{ width: '50%' }}
                  >
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    label={<FormattedMessage id="component.form.label.oz" />}
                    name="ounce"
                    colon={false}
                    labelCol={{ offset: 1 }}
                    style={{ width: '50%' }}
                  >
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                </Input.Group>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label={<FormattedMessage id="component.form.label.hwl" />}
                labelCol={{ span: 4, offset: 1 }}
                className="custom-form-item"
              >
                <Input.Group compact>
                  <Form.Item
                    label={<FormattedMessage id="component.form.label.x" />}
                    name="height"
                    style={{ width: '33%', margin: 0 }}
                    colon={false}
                    labelCol={{ offset: 1 }}
                  >
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    label={<FormattedMessage id="component.form.label.y" />}
                    name="width"
                    style={{ width: '33%', margin: 0 }}
                    colon={false}
                    labelCol={{ offset: 1 }}
                  >
                    <InputNumber style={{ width: '100%' }} />
                  </Form.Item>
                  <Form.Item
                    label={<FormattedMessage id="component.form.label.z" />}
                    name="length"
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
        {/* <Card title={<FormattedMessage id="component.card.title.special" />} style={{ marginTop: 20 }}>
          <Row>
            <Col span={4}>
              <Form.Item name="has_Barcode" valuePropName="checked">
                <Checkbox>
                  <FormattedMessage id="pages.products.coreProduct.basicInfo.hasBarcode" />
                </Checkbox>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="hazmat" valuePropName="checked">
                <Checkbox>
                  <FormattedMessage id="pages.products.coreProduct.basicInfo.hazmat" />
                </Checkbox>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="own_box" valuePropName="checked">
                <Checkbox>
                  <FormattedMessage id="pages.products.coreProduct.basicInfo.ownBox" />
                </Checkbox>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="allow_backorders" valuePropName="checked">
                <Checkbox>
                  <FormattedMessage id="pages.products.coreProduct.basicInfo.allowBackorders" />
                </Checkbox>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="gift_card" valuePropName="checked">
                <Checkbox>
                  <FormattedMessage id="pages.products.coreProduct.basicInfo.giftCard" />
                </Checkbox>
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="digital" valuePropName="checked">
                <Checkbox>
                  <FormattedMessage id="pages.products.coreProduct.basicInfo.digital" />
                </Checkbox>
              </Form.Item>
            </Col>
          </Row>
        </Card> */}
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

      <AddCategoryModal
        isOpen={currentModal === modalType.NewCategory}
        onSave={() => setCurrentModal(modalType.Close)}
        onClose={() => setCurrentModal(modalType.Close)}
        {...itemModalData}
      />

      <ConfigCategoryModal
        isOpen={currentModal === modalType.ConfigCategory}
        onSave={() => setCurrentModal(modalType.Close)}
        onClose={() => setCurrentModal(modalType.Close)}
        {...itemModalData}
      />
    </>
  );
};

export default BasicInfo;
