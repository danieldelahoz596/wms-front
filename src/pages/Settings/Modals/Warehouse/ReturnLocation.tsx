import { OModal } from '@/components/Globals/OModal';
import { FormattedMessage, useModel } from '@umijs/max';
import { Form, Input } from 'antd';
import { useEffect } from 'react';

interface IReturnLocationModal {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}

const ReturnLocationModal: React.FC<IReturnLocationModal> = ({ isOpen, onSave, onClose }) => {
  const [form] = Form.useForm();
  const { selectedWarehouse, updateReturnLocation, setSelectedWarehouse } = useModel('warehouse');

  const handleSave = () => {
    const values = form.getFieldsValue();
    updateReturnLocation(selectedWarehouse.id, values);
    form.resetFields();
    setSelectedWarehouse(null);
    onSave();
  };

  useEffect(() => {
    if (selectedWarehouse) {
      form.setFieldsValue(selectedWarehouse.return_location);
    }
  }, [selectedWarehouse, form]);

  return (
    <OModal
      title={<FormattedMessage id="pages.settings.warehouses.returnLocation.title" />}
      helpLink=""
      width={600}
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
          btnLabel: <FormattedMessage id="component.button.saveChanges" />,
          onClick: handleSave,
        },
      ]}
    >
      <>
        <Form
          form={form}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
        >
          <Form.Item
            label={<FormattedMessage id="component.form.label.locationName" />}
            name={'name'}
            initialValue={selectedWarehouse?.return_location?.name}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={<FormattedMessage id="component.form.label.attention" />}
            name={'attention'}
            initialValue={selectedWarehouse?.return_location?.attention}
          >
            <Input />
          </Form.Item>

          <Form.Item label={<FormattedMessage id="component.form.label.address" />}>
            <Input.Group>
              <Form.Item name={'address1'} noStyle>
                <Input />
              </Form.Item>
              <Form.Item name={'address2'} noStyle>
                <Input style={{ marginTop: '0.2rem' }} />
              </Form.Item>
              <Form.Item name={'address3'} noStyle>
                <Input style={{ marginTop: '0.2rem' }} />
              </Form.Item>
            </Input.Group>
          </Form.Item>

          <Form.Item
            label={<FormattedMessage id="component.form.label.city" />}
            name={'city'}
            initialValue={selectedWarehouse?.return_location?.city}
          >
            <Input />
          </Form.Item>

          <Form.Item label={<FormattedMessage id="component.form.label.stateProvinceZip" />}>
            <Input.Group>
              <Form.Item name={'state'} noStyle initialValue={selectedWarehouse?.return_location?.state}>
                <Input style={{ width: '49%', marginRight: '1%' }} />
              </Form.Item>
              <Form.Item name={'zip'} noStyle initialValue={selectedWarehouse?.return_location?.zip}>
                <Input style={{ width: '50%' }} />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item label={<FormattedMessage id="component.form.label.contactPhone" />}>
            <Input.Group>
              <Form.Item name={'phone'} noStyle initialValue={selectedWarehouse?.return_location?.phone}>
                <Input style={{ width: '89%', marginRight: '1%' }} />
              </Form.Item>
              <Form.Item name={'ext'} noStyle initialValue={selectedWarehouse?.return_location?.ext}>
                <Input style={{ width: '10%' }} placeholder="Ext." />
              </Form.Item>
            </Input.Group>
          </Form.Item>
        </Form>
      </>
    </OModal>
  );
};

export default ReturnLocationModal;
