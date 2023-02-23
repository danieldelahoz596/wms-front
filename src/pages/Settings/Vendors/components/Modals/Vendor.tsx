import { OModal } from '@/components/Globals/OModal';
import type IVendors from '@/interfaces/IVendors';
import ManufacturerIcon from '@/utils/icons/manufacturer';
import TrainIcon from '@/utils/icons/train';
import { PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, Checkbox, Col, Form, Input, Row, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useEffect, useMemo } from 'react';

interface IVendorModal {
  isOpen: boolean;
  onSave: (values: IVendors) => void;
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
  }, [isOpen]);

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
      title={`${!selectedVendor ? 'New' : 'Edit'} Vendor`}
      helpLink=""
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
          btnLabel: 'Save',
          onClick: handleSave,
        },
      ]}
      width={MODAL_WIDTH}
    >
      <Form form={form} labelCol={{ span: 6 }} labelAlign="left">
        <Row gutter={8}>
          <Col span={12}>
            <Card title="Basic Info">
              <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input Name' }]}>
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please input Address' }]}>
                <TextArea rows={3} />
              </Form.Item>
              <Form.Item label="City, State">
                <Input.Group compact>
                  <Form.Item name="city">
                    <Input placeholder="City" />
                  </Form.Item>
                  <Form.Item name="state">
                    <Input placeholder="State" />
                  </Form.Item>
                </Input.Group>
              </Form.Item>
              <Form.Item label="Phone 1" name="phone1" rules={[{ required: true, message: 'Please input Phone1' }]}>
                <Input placeholder="Phone 1" />
              </Form.Item>
              <Form.Item label="Phone 2" name="phone2">
                <Input placeholder="Phone 2" />
              </Form.Item>
              <Form.Item label="Website" name="website">
                <Input placeholder="Website" />
              </Form.Item>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Services">
              <Form.Item
                label={<TrainIcon style={{ fontSize: 15 }} />}
                name="is_supplier"
                labelCol={{ span: 2 }}
                colon={false}
                valuePropName="checked"
                labelAlign='right'
              >
                <Checkbox onChange={() => form.validateFields()}>This vendor is a supplier</Checkbox>
              </Form.Item>
              <Form.Item
                label={<ManufacturerIcon style={{ fontSize: 15 }} />}
                name="is_manufacturer"
                labelCol={{ span: 2 }}
                colon={false}
                valuePropName="checked"
                labelAlign='right'
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
                <Checkbox>This vendor is a manufacturer</Checkbox>
              </Form.Item>
            </Card>
            <Card title="P.O. Defaults" style={{ marginTop: '1rem', padding: '0.5rem' }}>
              <Form.Item
                label="P.O. Template"
                name={['po_default', 'template']}
                rules={[{ required: true, message: 'Please select P.O. template' }]}
              >
                <Select placeholder="Select..." style={{ width: '100%' }} options={poTemplateOptions} />
              </Form.Item>
              <Form.Item
                label="P.O. Format"
                name={['po_default', 'format']}
                rules={[{ required: true, message: 'Please select P.O. format' }]}
              >
                <Select
                  placeholder="Please select"
                  style={{ width: '100%' }}
                  options={[
                    { value: 1, label: 'PDF Attachment' },
                    { value: 2, label: 'HTML Attachment' },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Payment term" name={['po_default', 'payment_term']}>
                <div style={{ display: 'flex', gap: 4 }}>
                  <Select placeholder="Please select" style={{ flex: '1' }} options={paymentTermOptions} />
                  <>
                    <PlusOutlined className="plus-button" />
                    <SettingOutlined className="setting-button" />
                  </>
                </div>
              </Form.Item>
              <Form.Item label="P.O L.T.R" name={['po_default', 'ltr']} valuePropName="checked">
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
