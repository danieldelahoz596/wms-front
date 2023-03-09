import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { CloseOutlined, QuestionCircleTwoTone } from '@ant-design/icons';
import { FormattedMessage, useModel } from '@umijs/max';
import { Card, Checkbox, Form, Input, Select } from 'antd';
import { useState } from 'react';

interface INewWarehouseModal {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}

const NewWarehouseModal: React.FC<INewWarehouseModal> = ({ isOpen, onSave, onClose }) => {
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
      title={<FormattedMessage id="pages.settings.warehouses.newWarehouses.title" />}
      helpLink=""
      width={600}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: <FormattedMessage id="component.button.close" />,
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: <FormattedMessage id="component.button.continue" />,
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
          <Form.Item label={<FormattedMessage id="component.form.label.warehouseName" />} name={'name'}>
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

          <Form.Item label={<FormattedMessage id="component.form.label.city" />} name={'city'}>
            <Input />
          </Form.Item>

          <Form.Item label={<FormattedMessage id="component.form.label.stateProvinceZip" />}>
            <Input.Group>
              <Form.Item name={'state'} noStyle>
                <Input style={{ width: '49%', marginRight: '1%' }} />
              </Form.Item>
              <Form.Item name={'zip'} noStyle>
                <Input style={{ width: '50%' }} />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item label={<FormattedMessage id="component.form.label.contactPhone" />}>
            <Input.Group>
              <Form.Item name={'phone'} noStyle>
                <Input style={{ width: '89%', marginRight: '1%' }} />
              </Form.Item>
              <Form.Item name={'ext'} noStyle>
                <Input style={{ width: '10%' }} placeholder="Ext." />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item label={<FormattedMessage id="component.form.label.faxNumber" />} name={'fax'}>
            <Input />
          </Form.Item>
          <Form.Item label={<FormattedMessage id="component.form.label.contactEMail" />} name={'email'}>
            <Input />
          </Form.Item>
          <Form.Item colon={false} name={'is_backup_warehouse'} style={{ textAlign: 'right' }}>
            <FormattedMessage id="pages.settings.warehouses.isBackupWarehouse.description" />{' '}
            <Checkbox onChange={(_e) => form.setFieldValue('is_backup_warehouse', _e.target.checked)} />
          </Form.Item>
          <div>
            <Card
              title={
                <p style={{ fontSize: '0.8rem' }}>
                  <QuestionCircleTwoTone /> <FormattedMessage id="component.card.title.domesticBackupWarehouses" />
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
                label={<FormattedMessage id="component.form.label.addWarehouse" />}
                name={'backup_warehouses'}
              >
                <Select
                  placeholder={<FormattedMessage id="component.select.placeholder.select" />}
                  size="small"
                  options={warehouseList.map((_item) => ({
                    valeu: _item.id,
                    label: _item.name,
                  }))}
                  onChange={handleAddBackupWarehouse}
                />
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
                    title: <FormattedMessage id="component.table.column.backupWarehouses" />,
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
};

export default NewWarehouseModal;
