import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { CloseOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, Checkbox, Col, Form, Input, Row, Select, Space } from 'antd';
import React, { useEffect, useState } from 'react';
interface IAddExportSettingsModal {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}

const AddExportSettingsModal: React.FC<IAddExportSettingsModal> = ({ isOpen, onSave, onClose }) => {
  const [form] = Form.useForm();
  const [selectedExportFields, setSelectedExportFields] = useState([]);

  const {
    editableCustomBundleKitExportSetting,
    setEditableBundleKitExportSetting,
    addCustomBundleKitExportSettings,
    updateCustomBundleKitExportSettings,
  } = useModel('customBundleKitExportSettings');

  const exportFields = [
    { key: 1, field: 'Bundle Master SKU' },
    { key: 2, field: 'Bundle Name' },
    { key: 3, field: 'Component SKU (Core SKU)' },
    { key: 4, field: 'Component Name (Core SKU Name)' },
    { key: 5, field: 'Component Qty' },
    { key: 6, field: 'Bundle UPC' },
    { key: 7, field: 'Bundle Image' },
    { key: 8, field: 'Bundle Brand' },
    { key: 9, field: 'Bundle Category' },
    { key: 10, field: 'Bundle Category' },
    { key: 11, field: 'Bundle Label' },
    { key: 12, field: 'BUndle M.A.P' },
    { key: 13, field: 'Bundle Shipping Cost' },
    { key: 14, field: 'Bundle Pounds' },
    { key: 15, field: 'Bundle Ounces' },
    { key: 16, field: 'Bundle Height(in)' },
    { key: 17, field: 'Bundle Width(in)' },
    { key: 18, field: 'Bundle Length(in)' },
    { key: 19, field: 'Bundle Allow Backorders' },
    { key: 20, field: 'Bundle Hazmat' },
    { key: 21, field: 'BUndle Ships in own box' },
    { key: 22, field: 'Bundle Active' },
    { key: 23, field: 'Bundle Vendor Cost' },
    { key: 24, field: 'Bundle Width Barcode' },
    { key: 25, field: 'Bundle Buyer (E-mail)' },
    { key: 26, field: 'Bundle MPN' },
    { key: 27, field: 'Bundle Gift Card' },
    { key: 28, field: 'Bundle Digital' },
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
      id: editableCustomBundleKitExportSetting?.id,
      exportFields: selectedExportFields,
    };

    if (editableCustomBundleKitExportSetting) {
      updateCustomBundleKitExportSettings(values);
    } else {
      addCustomBundleKitExportSettings(values);
    }

    setEditableBundleKitExportSetting(null);
    form.resetFields();
    setSelectedExportFields(null);
    onSave();
  };

  const handleClose = () => {
    setEditableBundleKitExportSetting(null);
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
        <CloseOutlined
          style={{ color: '#5F5FFF', cursor: 'pointer', textAlign: 'center', width: 20 }}
        />
      </span>
    ),
  }));

  useEffect(() => {
    if (editableCustomBundleKitExportSetting) {
      form.setFieldsValue(editableCustomBundleKitExportSetting);
    }

    if (editableCustomBundleKitExportSetting?.exportFields) {
      setSelectedExportFields(editableCustomBundleKitExportSetting?.exportFields);
    }
  }, [editableCustomBundleKitExportSetting, form]);

  return (
    <OModal
      title={editableCustomBundleKitExportSetting ? 'Edit Export Settings' : 'New Export Settings'}
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
        initialValues={editableCustomBundleKitExportSetting}
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
              <Form.Item name="dateFormat" label="Date Format">
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
            </Card>
            <Form.Item
              labelCol={{ span: 21 }}
              name="wrapDoubleQuote"
              valuePropName="checked"
              label="Wrap values in double quotes when exporting CSV/text files?"
              colon={false}
            >
              <Checkbox />
            </Form.Item>
            <Form.Item
              labelCol={{ span: 21 }}
              name="onlyExportActive"
              valuePropName="checked"
              label="Only export active bundles/kits"
              colon={false}
            >
              <Checkbox />
            </Form.Item>
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
