import React, { useEffect, useState } from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Card, Checkbox, Col, DatePicker, Form, Input, Radio, Row, Select } from 'antd';
import { OTable } from '@/components/Globals/OTable';
import { CloseOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
interface IAddExportSettingsModal {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}

const AddExportSettingsModal: React.FC<IAddExportSettingsModal> = ({ isOpen, onSave, onClose }) => {
  const [form] = Form.useForm();
  const [selectedExportFields, setSelectedExportFields] = useState([]);
  const [multiSku, setMultiSku] = useState(null);
  const [includeColumnHeader, setIncludeColumnHeader] = useState(false);

  const {
    editableCustomBundleKitExportSetting,
    setEditableBundleKitExportSetting,
    addCustomBundleKitExportSettings,
    updateCustomBundleKitExportSettings,
  } = useModel('customBundleKitExportSettings');

  const exportFields = [
    {
      key: 1,
      field: 'Bundle Description',
      name: '',
    },
    {
      key: 2,
      field: 'Bundle UPC',
      name: '',
    },
    {
      key: 3,
      field: 'Bundle Image',
      name: '',
    },
    {
      key: 4,
      field: 'Bundle Brand',
      name: '',
    },
    {
      key: 5,
      field: 'Bundle Category',
      name: '',
    },
    {
      key: 6,
      field: 'Bundle Category',
      name: '',
    },
    {
      key: 7,
      field: 'Bundle Label',
      name: '',
    },
    {
      key: 8,
      field: 'BUndle M.A.P',
      name: '',
    },
    {
      key: 9,
      field: 'Bundle Shipping Cost',
      name: '',
    },
    {
      key: 10,
      field: 'Bundle Pounds',
      name: '',
    },
    {
      key: 11,
      field: 'Bundle Ounces',
      name: '',
    },
    {
      key: 12,
      field: 'Bundle Height(in)',
      name: '',
    },
    {
      key: 13,
      field: 'Bundle Width(in)',
      name: '',
    },
    {
      key: 14,
      field: 'Bundle Length(in)',
      name: '',
    },
    {
      key: 15,
      field: 'Bundle Allow Backorders',
      name: '',
    },
    {
      key: 16,
      field: 'Bundle Hazmat',
      name: '',
    },
    {
      key: 17,
      field: 'BUndle Ships in own box',
      name: '',
    },
    {
      key: 18,
      field: 'Bundle Active',
      name: '',
    },
    {
      key: 19,
      field: 'Bundle Vendor Cost',
      name: '',
    },
    {
      key: 20,
      field: 'Bundle Width Barcode',
      name: '',
    },
    {
      key: 21,
      field: 'Bundle Buyer (E-mail)',
      name: '',
    },
    {
      key: 22,
      field: 'Bundle MPN',
      name: '',
    },
    {
      key: 23,
      field: 'Bundle Gift Card',
      name: '',
    },
    {
      key: 24,
      field: 'Bundle Digital',
      name: '',
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
      multi_sku: multiSku,
      includeColumnHeader: includeColumnHeader,
    };

    if (editableCustomBundleKitExportSetting) {
      updateCustomBundleKitExportSettings(values);
    } else {
      addCustomBundleKitExportSettings(values);
    }

    setEditableBundleKitExportSetting(null);
    form.resetFields();
    setMultiSku(null);
    setIncludeColumnHeader(false);
    onSave();
  };

  const handleClose = () => {
    setEditableBundleKitExportSetting(null);
    form.resetFields();
    setMultiSku(null);
    setIncludeColumnHeader(false);
    onClose();
  };

  const preparedImportFieldsRows = selectedExportFields?.map((item, index) => ({
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

  useEffect(() => {
    if (editableCustomBundleKitExportSetting) {
      form.setFieldsValue(editableCustomBundleKitExportSetting);
      setMultiSku(editableCustomBundleKitExportSetting.multi_sku);
      setIncludeColumnHeader(editableCustomBundleKitExportSetting.includeColumnHeader);
    }

    if (editableCustomBundleKitExportSetting?.exportFields) {
      setSelectedExportFields(editableCustomBundleKitExportSetting?.exportFields);
    }
  }, [editableCustomBundleKitExportSetting, form]);

  return (
    <OModal
      title="New export settings"
      width={900}
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
      <Form form={form} initialValues={editableCustomBundleKitExportSetting}>
        <Row>
          <Col span={10}>
            <div style={{ padding: '0.5rem', marginBottom: '1rem' }}>
              <Form.Item name="settingName" label="Settings Name">
                <Input />
              </Form.Item>
            </div>
            <Card title="File Configuration">
              <Form.Item name={'fileFormat'} label="File Format">
                <Select
                  placeholder="Select.."
                  options={[
                    { value: 'csv', label: 'CSV' },
                    { value: 'excel', label: 'EXCEL' },
                    { value: 'text', label: 'Text' },
                  ]}
                />
              </Form.Item>

              <Form.Item name={'dateFormat'} label="Date Format ">
                <Select
                  placeholder="MM/dd/yyyy"
                  options={[
                    { value: 'MM/dd/yyyy', label: 'MM/dd/yyyy' },
                    { value: 'yyyy-MM-dd', label: 'yyyy-MM-dd' },
                  ]}
                />
              </Form.Item>

              <Form.Item label="Multi SKUs" name={'multi_sku'} style={{ display: 'flex' }}>
                <Input.Group style={{ display: 'flex' }}>
                  <Radio.Group
                    style={{ display: 'flex' }}
                    name={'multi_sku'}
                    value={multiSku}
                    onChange={(e) => setMultiSku(e.target.value)}
                  >
                    <Radio value={'multiline'}>Multiline</Radio>
                    <Radio value={'delimit'}>Delimit</Radio>
                  </Radio.Group>
                  <Form.Item name="delimit_value" style={{ display: 'flex' }}>
                    <Input />
                  </Form.Item>
                </Input.Group>
              </Form.Item>
            </Card>
            <Form.Item
              labelCol={{ span: '22' }}
              valuePropName="checked"
              name="wrapDoubleQuote"
              label="Wrap values in double quotes when exporting CSV/text files?"
              style={{ padding: '0.5rem', marginBottom: '1rem' }}
            >
              <Checkbox />
            </Form.Item>
          </Col>

          <Col offset={1} span={13}>
            <Card
              title={
                <Form.Item name="includeColumnHeader" initialValue={includeColumnHeader}>
                  <span>
                    Export Fields{' '}
                    <span style={{ color: 'blue', textTransform: 'capitalize' }}>
                      ( Include column headers?{' '}
                    </span>
                  </span>
                  <Checkbox
                    checked={includeColumnHeader}
                    onChange={(e) => setIncludeColumnHeader(e.target.checked)}
                  />
                  <span style={{ color: 'blue' }}> )</span>
                </Form.Item>
              }
            >
              <Form.Item
                name={'exportFields'}
                label="Add Field"
                labelCol={{ offset: 2 }}
                labelAlign="right"
              >
                <Select
                  placeholder="Select.."
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
