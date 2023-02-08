import React, { useState } from 'react';
import { OModal } from '@/components/Globals/OModal';
import { OInput } from '@/components/Globals/OInput';
import { Card, Col, Form, Input, Row } from 'antd';
import { OTable } from '@/components/Globals/OTable';
import { CloseOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import moment from 'moment';
import orderImportSettings from '@/models/orderImportSettings';
import { uuidv4 } from '@antv/xflow-core';

interface IAddImportSettingsModal {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}

const AddImportSettingsModal: React.FC<IAddImportSettingsModal> = ({ isOpen, onSave, onClose }) => {
  const [form] = Form.useForm();

  const {
    editableImportSetting,
    setEditableImportSetting,
    addOrderImportSettings,
    updateOrderImportSettings,
  } = useModel('orderImportSettings');

  const initialState = {
    settingName: '',
    date: moment.now(),
    fileFormat: 'csv',
    structure: 'fixed',
  };
  const [selectedImportFields, setSelectedImportFields] = useState(
    editableImportSetting?.optionalFields ?? [],
  );

  const [newSettings, setNewSettings] = useState(
    editableImportSetting ? { ...editableImportSetting } : { ...initialState },
  );

  const optionalFields = [
    {
      key: 1,
      field: 'Order Number',
      name: 'Order Number',
    },
    {
      key: 2,
      field: 'Order Date',
      name: 'Order Date',
    },
    {
      key: 3,
      field: 'Payment Date',
      name: 'Payment Date',
    },
    {
      key: 4,
      field: 'Ship To Name',
      name: 'Ship To Name',
    },
    {
      key: 5,
      field: 'Ship To Address 1',
      name: 'Ship To Address 1',
    },
    {
      key: 6,
      field: 'Ship To City',
      name: 'Ship To City',
    },
    {
      key: 7,
      field: 'Ship To State',
      name: 'Ship To State',
    },
    {
      key: 8,
      field: 'Ship To Zip Code',
      name: 'Ship To Zip Code',
    },
  ];

  const importFieldsColumns = [
    {
      key: 'sl',
      dataIndex: 'sl',
      title: '',
    },
    {
      key: 'dataField',
      dataIndex: 'dataField',
      title: 'DATA FIELD',
    },
    {
      key: 'columnName',
      dataIndex: 'columnName',
      title: 'COLUMN NAME',
    },
    {
      key: 'remove',
      dataIndex: 'remove',
      title: '',
    },
  ];

  const handleNewSettingsChange = (name, value) => {
    setNewSettings((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddField = (name, value) => {
    // check if is already added
    const _index = selectedImportFields.findIndex((item) => item.key === value);
    if (_index < 0) {
      const _item = optionalFields.find((item) => item.key === value);
      setSelectedImportFields((prevState) => [...prevState, _item]);
    }
  };

  const handleRemoveField = (itemKey) => {
    setSelectedImportFields((prevState) => prevState.filter((item) => item.key !== itemKey));
  };

  const handleColumnNameChange = (item, value) => {
    setSelectedImportFields((prevState) =>
      prevState.map((cur) => (cur.key == item.key ? { ...cur, name: value } : cur)),
    );
  };

  const handleSave = () => {
    // update or create settings
    // check if exists

    if (!newSettings.key) {
      // create new
      addOrderImportSettings({
        ...newSettings,
        key: uuidv4(),
        optionalFields: selectedImportFields,
      });
    } else {
      // update existing
      updateOrderImportSettings({
        ...newSettings,
        optionalFields: selectedImportFields,
      });
    }

    setEditableImportSetting(null);

    setSelectedImportFields([]);
    form.resetFields();
    setNewSettings(initialState);

    onSave();
  };

  const preparedImportFieldsRows = selectedImportFields.map((item, index) => ({
    sl: index + 1,
    dataField: item.field.toUpperCase(),
    columnName: (
      <Input
        defaultValue={item.name}
        onChange={(e) => handleColumnNameChange(item, e.target.value)}
      />
    ),
    remove: (
      <span onClick={() => handleRemoveField(item.key)}>
        <CloseOutlined style={{ color: '#5F5FFF', cursor: 'pointer' }} />
      </span>
    ),
  }));

  return (
    <OModal
      title="New import settings"
      width={1000}
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
      <Row>
        <Col span={10}>
          <Form form={form}>
            <Form.Item style={{ padding: '0.5rem', marginBottom: '1rem' }}>
              <span>Settings Name</span>
              <OInput
                type="text"
                defaultValue={newSettings.settingName}
                name="settingName"
                onChange={handleNewSettingsChange}
              />
            </Form.Item>
            <Card title="FILE CONFIGURATION" style={{ padding: '0.5rem' }}>
              <Form.Item name={'fileFormat'} label="File Format">
                <OInput
                  type="select"
                  name={'fileFormat'}
                  defaultValue={newSettings.fileFormat ?? 'csv'}
                  options={[
                    { value: 'csv', text: 'CSV' },
                    { value: 'excel', text: 'EXCEL' },
                    { value: 'text', text: 'Text' },
                  ]}
                  onChange={handleNewSettingsChange}
                />
              </Form.Item>

              <Form.Item name={'structure'} label="Structure">
                <OInput
                  type="select"
                  name={'structure'}
                  defaultValue={newSettings.structure ?? 'fixed'}
                  options={[{ value: 'fixed', text: 'Fixed' }]}
                  onChange={handleNewSettingsChange}
                />
              </Form.Item>

              <Form.Item name={'date'} label="Date Format ">
                <OInput
                  type="date"
                  name="date"
                  defaultValue={newSettings.date}
                  onChange={handleNewSettingsChange}
                />
              </Form.Item>
            </Card>
          </Form>
        </Col>
        <Col span={14}>
          <Card
            title={
              <div>
                IMPORT FIELDS{' '}
                <span style={{ color: 'blue' }}>
                  (Include column headers?{' '}
                  <OInput
                    type="checkbox"
                    name="includeColumnHeader"
                    checked={!!newSettings.includeColumnHeader}
                    onChange={handleNewSettingsChange}
                  />
                  )
                </span>
              </div>
            }
            style={{ padding: '0.5rem' }}
          >
            <Form>
              <Form.Item name={'add_field'} label="Add Optional Field">
                <OInput
                  name="add_field"
                  type="select"
                  placeholder="Select..."
                  options={optionalFields.map((item) => ({ value: item.key, text: item.field }))}
                  onChange={handleAddField}
                />
              </Form.Item>
            </Form>
            <OTable
              pagination={false}
              columns={importFieldsColumns}
              rows={preparedImportFieldsRows}
            />
          </Card>
        </Col>
      </Row>
    </OModal>
  );
};

export default AddImportSettingsModal;
