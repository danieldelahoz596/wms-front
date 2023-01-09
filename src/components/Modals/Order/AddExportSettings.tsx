import React, { useState } from 'react';
import { OModal } from '@/components/Globals/OModal';
import { OInput } from '@/components/Globals/OInput';
import { Card, Col, Form, Input, Radio, Row } from 'antd';
import { OTable } from '@/components/Globals/OTable';
import { CloseOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import moment from 'moment';
import { uuidv4 } from '@antv/xflow-core';
interface IAddExportSettingsModal {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}

const initialState = {
  settingName: '',
  date: moment.now(),
  fileFormat: 'csv',
};

const AddExportSettingsModal: React.FC<IAddExportSettingsModal> = ({ isOpen, onSave, onClose }) => {
  const [form] = Form.useForm();

  const {
    orderExportSettings,
    editableExportSetting,
    setEditableExportSetting,
    addOrderExportSettings,
    updateOrderExportSettings,
  } = useModel('orderExportSettings');
  const [selectedExportFields, setSelectedExportFields] = useState(
    editableExportSetting?.exportFields ?? [],
  );
  const [newSettings, setNewSettings] = useState(editableExportSetting ?? initialState);

  const exportFields = [
    {
      key: 1,
      field: 'Carrier Fee',
      name: '',
    },
    {
      key: 2,
      field: 'Order Number',
      name: '',
    },
    {
      key: 3,
      field: 'Buyer Name',
      name: '',
    },
    {
      key: 4,
      field: 'Ship To Address 1',
      name: '',
    },
    {
      key: 5,
      field: 'Sales Channel',
      name: '',
    },
    {
      key: 6,
      field: 'Product Name',
      name: 'Product Name',
    },
    {
      key: 7,
      field: 'Customer Name',
      name: 'Customer Name',
    },
    {
      key: 8,
      field: 'Shiop To Name',
      name: 'Shiop To Name',
    },
    {
      key: 9,
      field: 'Ship To Phone',
      name: 'Ship To Phone',
    },
  ];

  const exportFieldsColumns = [
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

  const handleMultiSkuSelect = (e) => {
    const _name = e.target.value;
    if (_name === 'multiline') {
      handleNewSettingsChange('multiSku', {
        name: 'multiline',
        value: '',
      });
    }

    if (_name === 'delimit') {
      handleNewSettingsChange('multiSku', {
        name: 'delimit',
        value: '',
      });
    }
  };

  const handleDelimitChange = (value) => {
    handleNewSettingsChange('multiSku', {
      name: 'delimit',
      value,
    });
  };

  const handleAddField = (name, value) => {
    // check if is already added
    const _index = selectedExportFields.findIndex((item) => item.key === value);
    if (_index < 0) {
      const _item = exportFields.find((item) => item.key === value);
      setSelectedExportFields((prevState) => [...prevState, _item]);
    }
  };

  const handleRemoveField = (itemKey) => {
    setSelectedExportFields((prevState) => prevState.filter((item) => item.key !== itemKey));
  };

  const handleColumnNameChange = (item, value) => {
    setSelectedExportFields((prevState) =>
      prevState.map((cur) => (cur.key == item.key ? { ...cur, name: value } : cur)),
    );
  };

  const handleSave = () => {
    // update or create settings
    // check if exists

    if (!newSettings.key) {
      // create new
      addOrderExportSettings({
        ...newSettings,
        key: uuidv4(),
        exportFields: selectedExportFields,
      });
    } else {
      // update existing
      updateOrderExportSettings({
        ...newSettings,
        exportFields: selectedExportFields,
      });
    }

    setEditableExportSetting(null);

    setSelectedExportFields([]);
    form.resetFields();
    setNewSettings(initialState);

    onSave();
  };

  const preparedImportFieldsRows = selectedExportFields.map((item, index) => ({
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
      title="NEW EXPORT SETTINGS"
      width={1000}
      centered
      className="OModal"
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'CLOSE',
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'SAVE',
          onClick: handleSave,
        },
      ]}
    >
      <Row>
        <Col span={10}>
          <Form form={form}>
            <div style={{ padding: '0.5rem', marginBottom: '1rem' }}>
              <label>Settings Name</label>
              <OInput
                type="text"
                defaultValue={newSettings.settingName}
                name="settingName"
                onChange={handleNewSettingsChange}
              />
            </div>
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

              <Form.Item name={'date'} label="Date Format ">
                <OInput
                  type="date"
                  defaultValue={newSettings.date}
                  onChange={handleNewSettingsChange}
                />
              </Form.Item>

              <Form.Item name={'multiSku'} label="Multi SKUs">
                <Radio.Group style={{ display: 'flex' }} onChange={handleMultiSkuSelect}>
                  <Radio value={'multiline'} checked={newSettings.multiSku?.name == 'multiline'}>
                    Multiline
                  </Radio>
                  <Radio value={'delimit'} checked={newSettings.multiSku?.name == 'delimit'}>
                    <div style={{ display: 'flex' }}>
                      Delimit:{' '}
                      <OInput
                        defaultValue={newSettings?.multiline?.value}
                        onChange={(name, value) => handleDelimitChange(value)}
                      />
                    </div>
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </Card>
          </Form>
          <p style={{ padding: '1rem' }}>
            Wrap values in double quotes when exporting CSV/text files?{' '}
            <OInput
              name="wrapDoubleQuote"
              checked={!!newSettings.wrapDoubleQuote}
              type="checkbox"
              onChange={handleNewSettingsChange}
            />
          </p>
          <p style={{ padding: '0 1rem' }}>
            NOTE: Vendor Cost and Vendor SKU fields are specific to dropship orders.
          </p>
        </Col>
        <Col span={14}>
          <Card
            title={
              <div>
                EXPORT FIELDS{' '}
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
              <Form.Item name={'fileFormat'} label="Add Field">
                <OInput
                  name="add_field"
                  type="select"
                  placeholder="Select.."
                  options={exportFields.map((item) => ({ value: item.key, text: item.field }))}
                  onChange={handleAddField}
                />
              </Form.Item>
            </Form>
            <OTable
              pagination={false}
              columns={exportFieldsColumns}
              rows={preparedImportFieldsRows}
            />
          </Card>
        </Col>
      </Row>
    </OModal>
  );
};

export default AddExportSettingsModal;
