import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { CloseOutlined, QuestionCircleTwoTone } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, Checkbox, Form, Input, Select } from 'antd';
import { useState } from 'react';

export default function ({ isOpen, onSave, onClose }) {
  const [form] = Form.useForm();
  const { warehouseList, createWarehouse } = useModel('warehouse');
  const [backupWarehouses, setBackupWarehouses] = useState([]);

  const handleSave = () => {
    const values = form.getFieldsValue();
    createWarehouse(values);
    form.resetFields();
    onSave();
  };

  const newWarehouseBackupWarehouses = backupWarehouses.map((_item, _index) => {
    return {
      sl: _index + 1,
      name: warehouseList.find((_i) => _i.id == _item)?.name,
      remove: (
        <CloseOutlined
          style={{ color: '#5F5FFF' }}
          onClick={() => setBackupWarehouses(backupWarehouses.filter((_w) => _w !== _item))}
        />
      ),
    };
  });

  const handleAddBackupWarehouse = (value) => {
    setBackupWarehouses((prev) => [...prev, value]);
    form.setFieldValue('backup_warehouses', [...backupWarehouses, value]);
  };

  return (
    <OModal
      title="New Direct Fulfillment Warehouse"
      width={600}
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
        <Form
          form={form}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 20,
          }}
        >
          <Form.Item label="Warehouse Name" name={'name'}>
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

          <Form.Item label="City" name={'city'}>
            <Input />
          </Form.Item>

          <Form.Item label="State/Province, Zip">
            <Input.Group>
              <Form.Item name={'state'} noStyle>
                <Input style={{ width: '49%', marginRight: '1%' }} />
              </Form.Item>
              <Form.Item name={'zip'} noStyle>
                <Input style={{ width: '50%' }} />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item label="Country" initialValue={'usa'} name={'country'}>
            <Select placeholder="Select...">
              <Select.Option value="usa">United States of America</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Contact Phone">
            <Input.Group>
              <Form.Item name={'phone'} noStyle>
                <Input style={{ width: '89%', marginRight: '1%' }} />
              </Form.Item>
              <Form.Item name={'ext'} noStyle>
                <Input style={{ width: '10%' }} placeholder="Ext." />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item label="Fax Number" name={'fax'}>
            <Input />
          </Form.Item>
          <Form.Item label="Contact E-Mail" name={'email'}>
            <Input />
          </Form.Item>
          <Form.Item colon={false} name={'is_backup_warehouse'} style={{ textAlign: 'right' }}>
            Add as Backup Warehouse{' '}
            <Checkbox
              onChange={(_e) => form.setFieldValue('is_backup_warehouse', _e.target.checked)}
            />
          </Form.Item>
          <div>
            <Card
              title={
                <p style={{ fontSize: '0.8rem' }}>
                  <QuestionCircleTwoTone /> DOMESTIC BACKUP WAREHOUSES(Drag up/down to order)
                </p>
              }
              style={{ marginTop: '1rem' }}
            >
              <Form.Item
                labelCol={{
                  span: 6,
                }}
                wrapperCol={{
                  span: 18,
                }}
                label="Add Warehouse"
                name={'backup_warehouses'}
              >
                <Select placeholder="Select..." onChange={handleAddBackupWarehouse}>
                  {warehouseList.map((_item) => (
                    <Select.Option key={_item.id} value={_item.id}>
                      {_item.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <OTable
                pagination={false}
                columns={[
                  {
                    key: 'sl',
                    dataIndex: 'sl',
                    title: '',
                  },
                  {
                    key: 'name',
                    dataIndex: 'name',
                    title: 'BACKUP WAREHOUSES',
                  },
                  {
                    key: 'remove',
                    dataIndex: 'remove',
                    title: '',
                  },
                ]}
                rows={newWarehouseBackupWarehouses}
              />
            </Card>
          </div>
        </Form>
      </>
    </OModal>
  );
}
