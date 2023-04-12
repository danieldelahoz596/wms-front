import { OModal } from '@/components/Globals/OModal';
import { Form, Input, Select } from 'antd';
import { PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { FormattedMessage, useModel } from '@umijs/max';
import { useMemo, useState } from 'react';
import { modalType } from '@/utils/helpers/types';
import AddItemModal from './AddItem';
import ConfigureItemModal from './ConfigItem';

interface IProductVariationsModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: (values: any) => void;
}

interface INewItemModalData {
  title: string;
  items: any[];
  setItems: (value: any) => void;
}

const ProductVariationsModal: React.FC<IProductVariationsModal> = ({ isOpen, onClose, onSave }) => {
  const [form] = Form.useForm();
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

  const handleSave = () => {
    form.validateFields().then((values) => {
      onSave(values);
    });
  };

  return (
    <OModal
      title="New Virtual Product"
      helpLink="/help/products/create/productvariations"
      width={800}
      centered
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Continue',
          onClick: handleSave,
        },
      ]}
    >
      <>
        <h3>Create parent virtual product that will group your core product variants</h3>

        <Form form={form} labelCol={{ span: 3 }} labelAlign="left">
          <Form.Item
            label={<FormattedMessage id="component.form.label.masterSku" />}
            name="sku"
            rules={[
              { required: true, message: 'Please input Master SKU' },
              { max: 8, message: 'The length of the SKU must be 8.' },
              { min: 8, message: 'The length of the SKU must be 8.' },
            ]}
          >
            <Input placeholder="Master SKU" />
          </Form.Item>
          <Form.Item
            label={<FormattedMessage id="component.form.label.name" />}
            name="name"
            rules={[{ required: true, message: 'Please input Product Name' }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <div style={{ display: 'flex', gap: 4 }}>
            <span style={{ width: 93 }}>* {<FormattedMessage id="component.form.label.buyBrand" />} :</span>
            <Form.Item name="buyer_id" style={{ flex: '1' }}>
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
            <Form.Item label={<FormattedMessage id="component.form.label.categories" />} name="category_id" style={{ flex: '1' }}>
              <Select placeholder={<FormattedMessage id="component.select.placeholder.select" />} options={categoryOptions} />
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
            <Form.Item label={<FormattedMessage id="component.form.label.labels" />} name="label_id" style={{ flex: '1' }}>
              <Select placeholder={<FormattedMessage id="component.select.placeholder.select" />} options={labelOptions} />
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

          <Form.Item label={<FormattedMessage id="component.form.label.description" />} name="description">
            <Input.TextArea rows={4} />
          </Form.Item>
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
    </OModal>
  );
};

export default ProductVariationsModal;
