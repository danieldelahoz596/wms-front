import { OModal } from '@/components/Globals/OModal';
import ManufacturerIcon from '@/utils/icons/manufacturer';
import TrainIcon from '@/utils/icons/train';
import { PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, Checkbox, Col, Form, Input, Row, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useState } from 'react';

interface INewVendorModal {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}

const NewVendorModal: React.FC<INewVendorModal> = ({ isOpen, onSave, onClose }) => {
  // const [newVendor, setNewVendor] = useState({
  //   po_default: null,
  //   is_supplier: false,
  //   is_manufacturer: false,
  // });
  // const { createVendor } = useModel('vendor');
  const { poTemplateList } = useModel('poTemplate');
  const { paymentTermList } = useModel('paymentTerm');

  const [form] = Form.useForm();

  // const handleInputChange = (name: string, value: any) => setNewVendor((prevState) => ({ ...prevState, [name]: value }));

  // const handlePOInputChange = (name: string, value: any) =>
  //   setNewVendor((prevState) => ({
  //     ...prevState,
  //     po_default: {
  //       ...prevState.po_default,
  //       [name]: value,
  //     },
  //   }));

  const handleSave = () => {
    form.validateFields().then((values) => {
      console.log('values: ', values);
      // createVendor(newVendor);
      onSave();
    });
  };

  return (
    <OModal
      title="New Vendor"
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
      width={800}
    >
      <Form form={form} style={{ width: '100%' }} labelCol={{ span: 6 }}>
        <Row gutter={10}>
          <Col span={12}>
            <Card title="Basic Info" style={{ padding: '0.5rem' }}>
              <Form.Item label="Name" name="name">
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item label="Address" name="address">
                <TextArea rows={3} />
              </Form.Item>
              <Form.Item label="City" name="city">
                <Input placeholder="City" />
              </Form.Item>
              <Form.Item label="State, Zip">
                <Input.Group compact>
                  <Form.Item name="state">
                    <Input placeholder="State" />
                  </Form.Item>
                  <Form.Item name="zip">
                    <Input placeholder="Zip" />
                  </Form.Item>
                </Input.Group>
              </Form.Item>
              <Form.Item label="Country" name="country">
                <Input placeholder="Country" />
              </Form.Item>
              <Form.Item label="Phone 1" name="phone1">
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
            <Card title="Services" style={{ padding: '0.5rem' }}>
              <Form.Item
                label={<TrainIcon style={{ fontSize: 14 }} />}
                name="is_supplier"
                labelCol={{ span: 2 }}
                colon={false}
                valuePropName="checked"
              >
                <Checkbox onChange={() => form.validateFields()}>This vendor is a supplier</Checkbox>
              </Form.Item>
              <Form.Item
                label={<ManufacturerIcon style={{ fontSize: 14 }} />}
                name="is_manufacturer"
                labelCol={{ span: 2 }}
                colon={false}
                valuePropName="checked"
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
              <Form.Item label="P.O. Template" name={['po_default', 'template']}>
                <Select
                  placeholder="Select..."
                  style={{ width: '100%' }}
                  // onChange={(value) => handlePOInputChange('template', value)}
                  options={poTemplateList?.map((_item) => ({
                    value: _item.value,
                    label: _item.text,
                  }))}
                />
              </Form.Item>
              <Form.Item label="P.O. Format" name={['po_default', 'format']}>
                <Select
                  placeholder="Please select"
                  style={{ width: '100%' }}
                  options={[
                    { value: 'PDF', label: 'PDF Attachment' },
                    { value: 'HTML', label: 'HTML Attachment' },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Payment term" name={['po_default', 'payment_term']}>
                <div style={{ display: 'flex', gap: 4 }}>
                  <Select
                    placeholder="Please select"
                    style={{ flex: '1' }}
                    options={paymentTermList?.map((_item) => ({
                      value: _item.value,
                      label: _item.text,
                    }))}
                  />
                  <PlusOutlined className="plus-button" />
                  <SettingOutlined className="setting-button" />
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

export default NewVendorModal;
