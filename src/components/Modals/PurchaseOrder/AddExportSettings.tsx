import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { CloseOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, Checkbox, Col, Form, Input, Radio, Row, Select, Space } from 'antd';
import React, { useEffect, useState } from 'react';

interface IAddExportSettingsModal {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}

const AddExportSettingsModal: React.FC<IAddExportSettingsModal> = ({ isOpen, onSave, onClose }) => {
  const [form] = Form.useForm();
  const [selectedExportFields, setSelectedExportFields] = useState([]);
  const [multiSku, setMultiSku] = useState();

  const {
    editableExportSetting,
    setEditableExportSetting,
    addPOExportSettings,
    updatePOExportSettings,
  } = useModel('poExportSettings');

  const exportFields = [
    { key: 1, field: 'Authorizer' },
    { key: 2, field: 'Billed Item Cost' },
    { key: 3, field: 'Blank/Empty' },
    { key: 4, field: 'Buyer Name' },
    { key: 5, field: 'Company City' },
    { key: 6, field: 'Company City State Zip' },
    { key: 7, field: 'Company Country' },
    { key: 8, field: 'Company Email' },
    { key: 9, field: 'Company Phone' },
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
      title: 'Data Field',
    },
    {
      key: 'columnName',
      dataIndex: 'columnName',
      title: 'Column Name',
    },
    {
      key: 'remove',
      dataIndex: 'remove',
      title: '',
    },
  ];

  const handleAddField = (value) => {
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
    let values = form.getFieldsValue();
    values = {
      ...values,
      id: editableExportSetting?.id,
      exportFields: selectedExportFields,
    };

    if (editableExportSetting) {
      updatePOExportSettings(values);
    } else {
      addPOExportSettings(values);
    }

    setEditableExportSetting(null);
    form.resetFields();
    setSelectedExportFields(null);
    onSave();
  };

  const handleClose = () => {
    setEditableExportSetting(null);
    form.resetFields();
    setSelectedExportFields(null);
    onClose();
  };

  const preparedImportFieldsRows = selectedExportFields?.map((item, index) => ({
    sl: index + 1,
    dataField: item.field.toUpperCase(),
    columnName: (
      <Input
        defaultValue={item.field.toUpperCase()}
        onChange={(e) => handleColumnNameChange(item, e.target.value)}
      />
    ),
    remove: (
      <span onClick={() => handleRemoveField(item.key)}>
        <CloseOutlined style={{ color: '#5F5FFF', cursor: 'pointer' }} />
      </span>
    ),
  }));

  useEffect(() => {
    if (editableExportSetting) {
      form.setFieldsValue(editableExportSetting);
    }

    if (editableExportSetting?.exportFields) {
      setSelectedExportFields(editableExportSetting?.exportFields);
    }
  }, [editableExportSetting, form]);

  return (
    <OModal
      title={editableExportSetting ? 'Edit Export Settings' : 'New Export Settings'}
      width={700}
      isOpen={isOpen}
      handleCancel={handleClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Close',
          onClick: handleClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Save',
          onClick: handleSave,
        },
      ]}
    >
      <Form
        form={form}
        initialValues={editableExportSetting}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
      >
        <Row>
          <Col span={11} style={{ padding: 5, paddingTop: 7 }}>
            <Form.Item
              name="settingName"
              label="Settings Name"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 23 }}
            >
              <Input />
            </Form.Item>
            <Card title="File Configuration">
              <Form.Item name={'fileFormat'} label="File Format">
                <Select
                  placeholder="Select..."
                  size="small"
                  defaultValue={'csv'}
                  options={[
                    { value: 'csv', label: 'CSV' },
                    { value: 'excel', label: 'EXCEL' },
                    { value: 'text', label: 'Text' },
                  ]}
                />
              </Form.Item>
              <Form.Item name={'dateFormat'} label="Date Format ">
                <Select
                  placeholder="Select..."
                  size="small"
                  defaultValue={'MM/dd/yyyy'}
                  options={[
                    { value: 'MM/dd/yyyy', label: 'MM/dd/yyyy' },
                    { value: 'yyyy-MM-dd', label: 'yyyy-MM-dd' },
                  ]}
                />
              </Form.Item>
              <Space size="small">
                <Form.Item label="Multi SKUs" name="multiSku">
                  <Radio.Group value={multiSku} onChange={(e) => setMultiSku(e.target.value)}>
                    <Radio value={'multiline'}>Multiline</Radio>
                    <Radio value={'delimit'}>Delimit</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item name="delimitValue" style={{ width: 50 }}>
                  <Input />
                </Form.Item>
              </Space>
            </Card>
          </Col>
          <Col span={13}>
            <Card
              title={
                <Space size={5} align={'start'}>
                  <span>Export Fields</span>
                  <span style={{ color: 'blue', textTransform: 'capitalize' }}>
                    (Include column headers?
                  </span>
                  <Form.Item
                    name="includeColumnHeader"
                    valuePropName="checked"
                    style={{ marginTop: -6 }}
                  >
                    <Checkbox />
                  </Form.Item>
                  <span style={{ color: 'blue' }}>)</span>
                </Space>
              }
            >
              <Form.Item
                name={'exportFields'}
                label="Add Field"
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 15 }}
              >
                <Select
                  placeholder="Select..."
                  size="small"
                  onChange={(_val) => handleAddField(_val)}
                  options={exportFields.map((item) => ({ value: item.key, label: item.field }))}
                />
              </Form.Item>
              <OTable
                pagination={false}
                columns={exportFieldsColumns}
                rows={preparedImportFieldsRows}
              />
            </Card>
          </Col>
        </Row>
      </Form>
    </OModal>
  );
};

export default AddExportSettingsModal;
