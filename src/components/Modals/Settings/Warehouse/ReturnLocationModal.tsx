import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { Form, Input, Select } from 'antd';
import { useEffect } from 'react';

export default function ({ isOpen, onSave, onClose }) {
  const [form] = Form.useForm();
  const { selectedWarehouse, updateReturnLocation, setSelectedWarehouse } = useModel('warehouse');

  console.log(selectedWarehouse);

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
      title="EDIT RETURN LOCATION FOR IN-HOUSE WAREHOUSE"
      isOpen={isOpen}
      width={600}
      centered
      handleCancel={onClose}
      className="OModal"
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'CANCEL',
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'SAVE CHANGES',
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
            label="Location Name"
            name={'name'}
            initialValue={selectedWarehouse?.return_location?.name}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Attention"
            name={'attention'}
            initialValue={selectedWarehouse?.return_location?.attention}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Address">
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
            label="City"
            name={'city'}
            initialValue={selectedWarehouse?.return_location?.city}
          >
            <Input />
          </Form.Item>

          <Form.Item label="State/Province, Zip">
            <Input.Group>
              <Form.Item
                name={'state'}
                noStyle
                initialValue={selectedWarehouse?.return_location?.state}
              >
                <Input style={{ width: '49%', marginRight: '1%' }} />
              </Form.Item>
              <Form.Item
                name={'zip'}
                noStyle
                initialValue={selectedWarehouse?.return_location?.zip}
              >
                <Input style={{ width: '50%' }} />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item
            label="Country"
            name={'country'}
            initialValue={selectedWarehouse?.return_location?.country}
          >
            <Select placeholder="Select..">
              <Select.Option value="usa">United States of America</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Contact Phone">
            <Input.Group>
              <Form.Item
                name={'phone'}
                noStyle
                initialValue={selectedWarehouse?.return_location?.phone}
              >
                <Input style={{ width: '89%', marginRight: '1%' }} />
              </Form.Item>
              <Form.Item
                name={'ext'}
                noStyle
                initialValue={selectedWarehouse?.return_location?.ext}
              >
                <Input style={{ width: '10%' }} placeholder="Ext." />
              </Form.Item>
            </Input.Group>
          </Form.Item>
        </Form>
      </>
    </OModal>
  );
}
