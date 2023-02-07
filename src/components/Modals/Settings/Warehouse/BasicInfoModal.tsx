import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { Form, Input, Select } from 'antd';
import { useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';

export default function ({ isOpen, onSave, onClose }) {
  const [form] = Form.useForm();
  const { selectedWarehouse, updateWarehouse, setSelectedWarehouse } = useModel('warehouse');
  const [displayColorPicker, setDisplayColorPicker] = useState({
    show: false,
    color: '#4a90e2',
  });

  const handleSave = () => {
    const values = form.getFieldsValue();
    updateWarehouse(selectedWarehouse.id, {
      ...values,
      id_color: displayColorPicker.color,
    });
    form.resetFields();
    setSelectedWarehouse(null);
    onSave();
  };

  const handleClick = () => {
    setDisplayColorPicker((prev) => ({ ...prev, show: !prev.show }));
  };

  const handleClose = () => {
    setDisplayColorPicker((prev) => ({ ...prev, show: false }));
  };

  const handleChange = (color) => {
    setDisplayColorPicker((prev) => ({ ...prev, color: color.hex }));
  };

  useEffect(() => {
    if (selectedWarehouse) {
      form.setFieldsValue(selectedWarehouse);
      if (selectedWarehouse?.id_color) {
        setDisplayColorPicker((prev) => ({ ...prev, color: selectedWarehouse.id_color }));
      }
    }
  }, [selectedWarehouse, form]);

  return (
    <OModal
      title="In-House warehouse"
      width={600}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Close',
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Save',
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
          <Form.Item label="Warehouse Name" name={'name'} initialValue={selectedWarehouse?.name}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Address Line 1"
            name={'address1'}
            initialValue={selectedWarehouse?.address1}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Address Line 2"
            name={'address2'}
            initialValue={selectedWarehouse?.address2}
          >
            <Input style={{ marginTop: '0.2rem' }} />
          </Form.Item>
          <Form.Item
            label="Address Line 3"
            name={'address3'}
            initialValue={selectedWarehouse?.address3}
          >
            <Input style={{ marginTop: '0.2rem' }} />
          </Form.Item>

          <Form.Item label="City" name={'city'} initialValue={selectedWarehouse?.city}>
            <Input />
          </Form.Item>

          <Form.Item label="State/Province, Zip">
            <Input.Group>
              <Form.Item name={'state'} noStyle initialValue={selectedWarehouse?.state}>
                <Input style={{ width: '49%', marginRight: '1%' }} />
              </Form.Item>
              <Form.Item name={'zip'} noStyle initialValue={selectedWarehouse?.zip}>
                <Input style={{ width: '50%' }} />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item label="Country" name={'country'} initialValue={selectedWarehouse?.country}>
            <Select placeholder="Select...">
              <Select.Option value="usa">United States of America</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Contact Phone">
            <Input.Group>
              <Form.Item name={'phone'} noStyle initialValue={selectedWarehouse?.phone}>
                <Input style={{ width: '89%', marginRight: '1%' }} />
              </Form.Item>
              <Form.Item name={'ext'} noStyle initialValue={selectedWarehouse?.ext}>
                <Input style={{ width: '10%' }} placeholder="Ext." />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item label="Fax Number" name={'fax'} initialValue={selectedWarehouse?.fax}>
            <Input />
          </Form.Item>
          <Form.Item label="Contact E-Mail" name={'email'} initialValue={selectedWarehouse?.email}>
            <Input />
          </Form.Item>
          <Form.Item label="Timezone" name={'timezone'} initialValue={selectedWarehouse?.timezone}>
            <Select placeholder="Select...">
              <Select.Option value={'est'}>EST</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Inventory Allocation Shipping Zone I.D Color" name={'id_color'}>
            <div style={{ textAlign: 'right' }}>
              <div
                style={{
                  padding: '5px',
                  background: '#fff',
                  borderRadius: '1px',
                  boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                  display: 'inline-block',
                  cursor: 'pointer',
                }}
                onClick={handleClick}
              >
                <div
                  style={{
                    width: '36px',
                    height: '14px',
                    borderRadius: '2px',
                    background: `${displayColorPicker.color}`,
                  }}
                />
              </div>
              {displayColorPicker.show ? (
                <div
                  style={{
                    position: 'absolute',
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      position: 'fixed',
                      top: '0px',
                      right: '0px',
                      bottom: '0px',
                      left: '0px',
                    }}
                    onClick={handleClose}
                  />
                  <SketchPicker color={displayColorPicker.color} onChange={handleChange} />
                </div>
              ) : null}
            </div>
          </Form.Item>
        </Form>
      </>
    </OModal>
  );
}
