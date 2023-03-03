import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { CloseOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, Checkbox, Col, Form, Input, Row, Select, Space } from 'antd';
import { useEffect, useState } from 'react';
interface IExportSettingsEditModal {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}

const ExportSettingsEditModal: React.FC<IExportSettingsEditModal> = ({ isOpen, onSave, onClose }) => {
  const [form] = Form.useForm();
  const [selectedExportFields, setSelectedExportFields] = useState([]);

  const { editableRmaExportSetting, setEditableRmaExportSetting, addRmaExportSettings, updateRmaExportSettings } =
    useModel('rmaExportSettings');

  const exportFields = [
    { key: 1, field: 'Action' },
    { key: 2, field: 'Blank/Empty' },
    { key: 3, field: 'Carrier Fee' },
    { key: 4, field: 'Customer Name' },
    { key: 5, field: 'Delivery Status' },
    { key: 6, field: 'Item SKU' },
    { key: 7, field: 'Master SKU' },
    { key: 8, field: 'Order Date' },
    { key: 9, field: 'Order Item Quantity' },
    { key: 10, field: 'Order Number' },
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
      id: editableRmaExportSetting?.id,
      exportFields: selectedExportFields,
    };

    if (editableRmaExportSetting) {
      updateRmaExportSettings(values);
    } else {
      addRmaExportSettings(values);
    }

    setEditableRmaExportSetting(null);
    form.resetFields();
    setSelectedExportFields([]);
    onSave();
  };

  const handleClose = () => {
    setEditableRmaExportSetting(null);
    form.resetFields();
    setSelectedExportFields([]);
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
    if (editableRmaExportSetting) {
      form.setFieldsValue(editableRmaExportSetting);
    }

    if (editableRmaExportSetting?.exportFields) {
      setSelectedExportFields(editableRmaExportSetting?.exportFields);
    }
  }, [editableRmaExportSetting, form]);

  return (
    <OModal
      title={editableRmaExportSetting ? 'Edit Export Settings' : 'New Export Settings'}
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
        initialValues={editableRmaExportSetting}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        labelAlign="left"
      >
        <Row>
          <Col span={11} style={{ padding: 5 }}>
            <Form.Item name="settingName" label="Settings Name" labelCol={{ span: 24 }} wrapperCol={{ span: 23 }}>
              <Input />
            </Form.Item>
            <Card title="File Configuration" style={{ marginTop: 15 }}>
              <Form.Item name={'fileFormat'} label="File Format">
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
                  <span>Export Fields</span>
                  <span style={{ color: 'blue', textTransform: 'capitalize' }}>(Include column headers?</span>
                  <Form.Item name="includeColumnHeader" valuePropName="checked" style={{ marginTop: -6 }}>
                    <Checkbox />
                  </Form.Item>
                  <span style={{ color: 'blue' }}>)</span>
                </Space>
              }
            >
              <Form.Item name={'exportFields'} label="Add Field" labelCol={{ span: 5 }} wrapperCol={{ span: 15 }}>
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

export default ExportSettingsEditModal;
