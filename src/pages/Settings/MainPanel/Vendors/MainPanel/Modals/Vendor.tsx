import { OModal } from '@/components/Globals/OModal';
import type IVendor from '@/interfaces/IVendor';
import ManufacturerIcon from '@/utils/icons/manufacturer';
import TrainIcon from '@/utils/icons/train';
import { PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { FormattedMessage, useModel } from '@umijs/max';
import { Card, Checkbox, Col, Form, Input, Row, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useEffect, useMemo } from 'react';

interface IVendorModal {
  isOpen: boolean;
  onSave: (values: IVendor) => void;
  onClose: () => void;
}

const VendorModal: React.FC<IVendorModal> = ({ isOpen, onSave, onClose }) => {
  const { selectedVendor } = useModel('vendor');
  const { poTemplateList } = useModel('poTemplate');
  const { paymentTermList } = useModel('paymentTerm');

  const [form] = Form.useForm();

  useEffect(() => {
    if (!selectedVendor) {
      form.resetFields();
    } else {
      form.setFieldsValue(selectedVendor);
    }
  }, [isOpen, selectedVendor, form]);

  const handleSave = () => {
    form.validateFields().then((values) => {
      onSave(values);
    });
  };

  const poTemplateOptions = useMemo(
    () =>
      poTemplateList?.map((_item) => ({
        value: _item.id,
        label: _item.name,
      })),
    [poTemplateList],
  );

  const paymentTermOptions = useMemo(
    () =>
      paymentTermList?.map((_item) => ({
        value: _item.id,
        label: _item.name,
      })),
    [paymentTermList],
  );

  return (
    <OModal
      forceRender
      title={
        !selectedVendor ? (
          <FormattedMessage id="pages.settings.vendors.vendor.new.title" />
        ) : (
          <FormattedMessage id="pages.settings.vendors.vendor.edit.title" />
        )
      }
      helpLink=""
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: <FormattedMessage id="component.button.cancel" />,
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: <FormattedMessage id="component.button.save" />,
          onClick: handleSave,
        },
      ]}
      width={MODAL_WIDTH}
    >
      <Form form={form} labelCol={{ span: 6 }} labelAlign="left">
        <Row gutter={8}>
          <Col span={12}>
            <Card title={<FormattedMessage id="component.card.title.basicInfo" />}>
              <Form.Item
                label={<FormattedMessage id="component.form.label.name" />}
                name="name"
                rules={[{ required: true, message: 'Please input Name' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label={<FormattedMessage id="component.form.label.address" />}
                name="address"
                rules={[{ required: true, message: 'Please input Address' }]}
              >
                <TextArea rows={3} />
              </Form.Item>
              <Form.Item label={<FormattedMessage id="component.form.label.cityState" />}>
                <Input.Group compact>
                  <Form.Item name="city">
                    <Input placeholder="City" />
                  </Form.Item>
                  <Form.Item name="state">
                    <Input placeholder="State" />
                  </Form.Item>
                </Input.Group>
              </Form.Item>
              <Form.Item
                label={<FormattedMessage id="component.form.label.phone1" />}
                name="phone1"
                rules={[{ required: true, message: 'Please input Phone1' }]}
              >
                <Input placeholder="Phone 1" />
              </Form.Item>
              <Form.Item label={<FormattedMessage id="component.form.label.phone2" />} name="phone2">
                <Input placeholder="Phone 2" />
              </Form.Item>
              <Form.Item label={<FormattedMessage id="component.form.label.website" />} name="website">
                <Input placeholder="Website" />
              </Form.Item>
            </Card>
          </Col>
          <Col span={12}>
            <Card title={<FormattedMessage id="component.card.title.services" />}>
              <Form.Item
                label={<TrainIcon style={{ fontSize: 15 }} />}
                name="is_supplier"
                labelCol={{ span: 2 }}
                colon={false}
                valuePropName="checked"
                labelAlign="right"
              >
                <Checkbox onChange={() => form.validateFields()}>
                  <FormattedMessage id="pages.settings.vendors.supplier.title" />
                </Checkbox>
              </Form.Item>
              <Form.Item
                label={<ManufacturerIcon style={{ fontSize: 15 }} />}
                name="is_manufacturer"
                labelCol={{ span: 2 }}
                colon={false}
                valuePropName="checked"
                labelAlign="right"
                rules={[
                  {
                    validator: async () => {
                      if (!form.getFieldValue('is_supplier') && !form.getFieldValue('is_manufacturer')) {
                        return Promise.reject(new Error('At least the supplier or manufacturer should be checked'));
                      }
                    },
                  },
                ]}
              >
                <Checkbox>
                  <FormattedMessage id="pages.settings.vendors.manufacturer.title" />
                </Checkbox>
              </Form.Item>
            </Card>
            <Card
              title={<FormattedMessage id="component.card.title.poDefaults" />}
              style={{ marginTop: '1rem', padding: '0.5rem' }}
            >
              <Form.Item
                label={<FormattedMessage id="component.form.label.poTemplate" />}
                name="template"
                rules={[{ required: true, message: 'Please select P.O. template' }]}
              >
                <Select placeholder="Select..." style={{ width: '100%' }} options={poTemplateOptions} />
              </Form.Item>
              <Form.Item
                label={<FormattedMessage id="component.form.label.poFormat" />}
                name="format"
                rules={[{ required: true, message: 'Please select P.O. format' }]}
              >
                <Select
                  style={{ width: '100%' }}
                  options={[
                    { value: 1, label: 'PDF Attachment' },
                    { value: 2, label: 'HTML Attachment' },
                  ]}
                />
              </Form.Item>
              <Form.Item label={<FormattedMessage id="component.form.label.paymentTerm" />}>
                <div style={{ display: 'flex', gap: 4 }}>
                  <Form.Item name="payment_term" style={{ flex: 1 }}>
                    <Select placeholder="Please select" options={paymentTermOptions} />
                  </Form.Item>
                  <>
                    <PlusOutlined className="plus-button" />
                    <SettingOutlined className="setting-button" />
                  </>
                </div>
              </Form.Item>
              <Form.Item label={<FormattedMessage id="component.form.label.poltr" />} name="ltr" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Card>
          </Col>
        </Row>
      </Form>
    </OModal>
  );
};

export default VendorModal;
