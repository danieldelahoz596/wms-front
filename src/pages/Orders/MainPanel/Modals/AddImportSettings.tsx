import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { CloseOutlined } from '@ant-design/icons';
import { uuidv4 } from '@antv/xflow-core';
import { useModel } from '@umijs/max';
import { Card, Checkbox, Col, Form, Input, Row, Select, Space } from 'antd';
import { useEffect, useState } from 'react';
interface IAddImportSettingsModal {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}

const AddImportSettingsModal: React.FC<IAddImportSettingsModal> = ({ isOpen, onSave, onClose }) => {
  const [form] = Form.useForm();
  const [selectedExportFields, setSelectedExportFields] = useState([]);

  const { editableImportSetting, setEditableImportSetting, addOrderImportSettings, updateOrderImportSettings } =
    useModel('orderImportSettings');

  const exportFields = [
    {
      key: 1,
      field: 'Order Number',
    },
    {
      key: 2,
      field: 'Order Date',
    },
    {
      key: 3,
      field: 'Payment Date',
    },
    {
      key: 4,
      field: 'Ship To Name',
    },
    {
      key: 5,
      field: 'Ship To Address 1',
    },
    {
      key: 6,
      field: 'Ship To City',
    },
    {
      key: 7,
      field: 'Ship To State',
    },
    {
      key: 8,
      field: 'Ship To Zip Code',
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
    setSelectedExportFields((prevState) => prevState.map((cur) => (cur.key == item.key ? { ...cur, name: value } : cur)));
  };

  const handleSave = () => {
    let values = form.getFieldsValue();
    values = {
      ...values,
      key: uuidv4(),
      id: editableImportSetting?.id,
      exportFields: selectedExportFields,
    };

    if (editableImportSetting) {
      updateOrderImportSettings(values);
    } else {
      addOrderImportSettings(values);
    }

    setEditableImportSetting(null);
    form.resetFields();
    setSelectedExportFields(null);
    onSave();
  };

  const handleClose = () => {
    setEditableImportSetting(null);
    form.resetFields();
    setSelectedExportFields(null);
    onClose();
  };

  const preparedImportFieldsRows = selectedExportFields?.map((item, index) => ({
    sl: index + 1,
    dataField: item.field.toUpperCase(),
    columnName: <Input defaultValue={item.field.toUpperCase()} onChange={(e) => handleColumnNameChange(item, e.target.value)} />,
    remove: (
      <span onClick={() => handleRemoveField(item.key)}>
        <CloseOutlined style={{ color: '#5F5FFF', cursor: 'pointer', textAlign: 'center', width: 20 }} />
      </span>
    ),
  }));

  useEffect(() => {
    if (editableImportSetting) {
      form.setFieldsValue(editableImportSetting);
    }

    if (editableImportSetting?.exportFields) {
      setSelectedExportFields(editableImportSetting?.exportFields);
    }
  }, [editableImportSetting, form]);

  return (
    <OModal
      title={editableImportSetting ? 'Edit Export Settings' : 'New Export Settings'}
      helpLink="/help/products/customproductfields"
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
      <Form form={form} initialValues={editableImportSetting} labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} labelAlign="left">
        <Row>
          <Col span={11} style={{ padding: 5 }}>
            <Form.Item name="settingName" label="Settings Name" labelCol={{ span: 24 }} wrapperCol={{ span: 23 }}>
              <Input />
            </Form.Item>
            <Card title="File Configuration" style={{ marginTop: 15 }}>
              <Form.Item name="fileFormat" label="File Format">
                <Select
                  placeholder="Select..."
                  defaultValue={'csv'}
                  options={[
                    { value: 'csv', label: 'CSV' },
                    { value: 'excel', label: 'EXCEL' },
                    { value: 'text', label: 'Text' },
                  ]}
                />
              </Form.Item>
              <Form.Item name="structure" label="Structure">
                <Select placeholder="Select..." defaultValue={'csv'} options={[{ value: 'fixed', label: 'Fixed' }]} />
              </Form.Item>
              <Form.Item name="dateFormat" label="Date Format">
                <Select
                  placeholder="Select..."
                  defaultValue={'MM/dd/yyyy'}
                  options={[
                    { value: 'MM/dd/yyyy', label: 'MM/dd/yyyy' },
                    { value: 'yyyy-MM-dd', label: 'yyyy-MM-dd' },
                  ]}
                />
              </Form.Item>
            </Card>
          </Col>

          <Col span={13}>
            <Card
              title={
                <Space size={5} align={'start'}>
                  <span>Import Fields</span>
                  <span style={{ color: 'blue', textTransform: 'capitalize' }}>(Include column headers?</span>
                  <Form.Item name="includeColumnHeader" valuePropName="checked" style={{ marginTop: -6 }}>
                    <Checkbox />
                  </Form.Item>
                  <span style={{ color: 'blue' }}>)</span>
                </Space>
              }
            >
              <Form.Item name="exportFields" label="Add Optional Field" labelCol={{ span: 10 }} wrapperCol={{ span: 15 }}>
                <Select
                  placeholder="Select..."
                  onChange={(_val) => handleAddField(_val)}
                  options={exportFields.map((item) => ({ value: item.key, label: item.field }))}
                />
              </Form.Item>
              <OTable pagination={false} columns={exportFieldsColumns} rows={preparedImportFieldsRows} />
            </Card>
          </Col>
        </Row>
      </Form>
    </OModal>
  );
};

export default AddImportSettingsModal;
