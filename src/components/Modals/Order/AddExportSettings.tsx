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
    editableExportSetting,
    setEditableExportSetting,
    addOrderExportSettings,
    updateOrderExportSettings,
  } = useModel('orderExportSettings');

  const exportFields = [
    {
      key: 1,
      field: 'Order Number',
      name: '',
    },
    {
      key: 2,
      field: 'Order Date',
      name: '',
    },
    {
      key: 3,
      field: 'Status Description',
      name: '',
    },
    {
      key: 4,
      field: 'Order Type',
      name: '',
    },
    {
      key: 5,
      field: 'Order Total',
      name: '',
    },
    {
      key: 6,
      field: 'Currency Code3',
      name: '',
    },
    {
      key: 7,
      field: 'Amount Paid',
      name: '',
    },
    {
      key: 8,
      field: 'Amount Paid',
      name: '',
    },
    {
      key: 9,
      field: 'Payment Date',
      name: '',
    },
    {
      key: 10,
      field: 'Customer Ship Amount',
      name: '',
    },
    {
      key: 11,
      field: 'Ship by Date',
      name: '',
    },
    {
      key: 12,
      field: 'Receive by Date',
      name: '',
    },
    {
      key: 13,
      field: 'Notes from Buyer',
      name: '',
    },
    {
      key: 14,
      field: 'Notes to Buyer',
      name: '',
    },
    {
      key: 15,
      field: 'Internal Notes',
      name: '',
    },
    {
      key: 16,
      field: 'Requested Shipping Service',
      name: '',
    },
    {
      key: 17,
      field: 'Order Weight',
      name: '',
    },
    {
      key: 18,
      field: 'Order Height',
      name: '',
    },
    {
      key: 19,
      field: 'Order Width',
      name: '',
    },
    {
      key: 20,
      field: 'Order Length',
      name: '',
    },
    {
      key: 21,
      field: 'Insured Value',
      name: '',
    },
    {
      key: 22,
      field: 'Insurance Cost',
      name: '',
    },
    {
      key: 23,
      field: 'Other Cost',
      name: '',
    },
    {
      key: 24,
      field: 'Saturday Delivery',
      name: '',
    },
    {
      key: 25,
      field: 'Contains Alcohol',
      name: '',
    },
    {
      key: 26,
      field: 'Contains Dry Ice',
      name: '',
    },
    {
      key: 27,
      field: 'Dry Ice Weight',
      name: '',
    },
    {
      key: 28,
      field: 'Gift',
      name: '',
    },
    {
      key: 29,
      field: 'Gift Message',
      name: '',
    },
    {
      key: 30,
      field: 'Non-Machinable',
      name: '',
    },
    {
      key: 31,
      field: 'Show Postage',
      name: '',
    },
    {
      key: 32,
      field: 'ITN',
      name: '',
    },
    {
      key: 33,
      field: 'Intl Non-Delivery Action',
      name: '',
    },
    {
      key: 34,
      field: 'Bill Duties to Sender',
      name: '',
    },
    {
      key: 35,
      field: 'Do Not Prepay Postage',
      name: '',
    },
    {
      key: 36,
      field: 'Include Return Label',
      name: '',
    },
    {
      key: 37,
      field: 'Release Without Signature',
      name: '',
    },
    {
      key: 38,
      field: 'Custom Field 1',
      name: '',
    },
    {
      key: 39,
      field: 'Custom Field 2',
      name: '',
    },
    {
      key: 40,
      field: 'Custom Field 3',
      name: '',
    },
    {
      key: 41,
      field: 'External Order',
      name: '',
    },
    {
      key: 42,
      field: 'Discount',
      name: '',
    },
    {
      key: 43,
      field: 'Order Payment Type',
      name: '',
    },
    {
      key: 44,
      field: 'Multi Package',
      name: '',
    },
    {
      key: 45,
      field: 'Channel Priority',
      name: '',
    },
    {
      key: 46,
      field: 'Fraud Analysis',
      name: '',
    },
    {
      key: 47,
      field: 'Order Labels',
      name: '',
    },
    {
      key: 48,
      field: 'Ship to Name',
      name: '',
    },
    {
      key: 49,
      field: 'Ship Company',
      name: '',
    },
    {
      key: 50,
      field: 'Ship Address1',
      name: '',
    },
    {
      key: 51,
      field: 'Ship Address2',
      name: '',
    },
    {
      key: 52,
      field: 'Ship Address3',
      name: '',
    },
    {
      key: 53,
      field: 'Ship City',
      name: '',
    },
    {
      key: 54,
      field: 'Ship State',
      name: '',
    },
    {
      key: 55,
      field: 'Ship Zip Code',
      name: '',
    },
    {
      key: 56,
      field: 'Ship Country',
      name: '',
    },
    {
      key: 57,
      field: 'Ship to Phone',
      name: '',
    },
    {
      key: 58,
      field: 'Ship Address Type',
      name: '',
    },
    {
      key: 59,
      field: 'Buyer Name',
      name: '',
    },
    {
      key: 60,
      field: 'Buyer Email',
      name: '',
    },
    {
      key: 61,
      field: 'Ship Date',
      name: '',
    },
    {
      key: 62,
      field: 'Tracking Number',
      name: '',
    },
    {
      key: 63,
      field: 'Carrier Fee',
      name: '',
    },
    {
      key: 64,
      field: 'Transaction ID',
      name: '',
    },
    {
      key: 65,
      field: 'Ship Carrier Name',
      name: '',
    },
    {
      key: 66,
      field: 'Ship Service Name',
      name: '',
    },
    {
      key: 67,
      field: 'Ship Package Name',
      name: '',
    },
    {
      key: 68,
      field: 'Listing SKU',
      name: '',
    },
    {
      key: 69,
      field: 'Item Qty Ordered',
      name: '',
    },
    {
      key: 70,
      field: 'Item Unit Price',
      name: '',
    },
    {
      key: 71,
      field: 'Item Tax',
      name: '',
    },
    {
      key: 72,
      field: 'Item Discount',
      name: '',
    },
    {
      key: 73,
      field: 'Item Notes',
      name: '',
    },
    {
      key: 74,
      field: 'Warehouse Name',
      name: '',
    },
    {
      key: 77,
      field: 'Internal SKU',
      name: '',
    },
    {
      key: 78,
      field: 'UPC',
      name: '',
    },
    {
      key: 79,
      field: 'Digital',
      name: '',
    },
    {
      key: 80,
      field: 'Giftcard',
      name: '',
    },
    {
      key: 81,
      field: 'Product Name',
      name: '',
    },
    {
      key: 82,
      field: 'Brand Name',
      name: '',
    },
    {
      key: 83,
      field: 'Customer Name',
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
      multi_sku: multiSku,
      includeColumnHeader: includeColumnHeader,
    };

    if (editableExportSetting) {
      updateOrderExportSettings(values);
    } else {
      addOrderExportSettings(values);
    }

    setEditableExportSetting(null);
    form.resetFields();
    setMultiSku(null);
    setIncludeColumnHeader(false);
    onSave();
  };

  const handleClose = () => {
    setEditableExportSetting(null);
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
    if (editableExportSetting) {
      form.setFieldsValue(editableExportSetting);
      setMultiSku(editableExportSetting.multi_sku);
      setIncludeColumnHeader(editableExportSetting.includeColumnHeader);
    }

    if (editableExportSetting?.exportFields) {
      setSelectedExportFields(editableExportSetting?.exportFields);
    }
  }, [editableExportSetting, form]);

  return (
    <OModal
      title="NEW EXPORT SETTINGS"
      width={1000}
      centered
      className="OModal"
      isOpen={isOpen}
      handleCancel={handleClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'CLOSE',
          onClick: handleClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'SAVE',
          onClick: handleSave,
        },
      ]}
    >
      <Form form={form} initialValues={editableExportSetting}>
        <Row>
          <Col span={10}>
            <div style={{ padding: '0.5rem', marginBottom: '1rem' }}>
              <Form.Item name="settingName" label="Settings Name">
                <Input />
              </Form.Item>
            </div>
            <Card title="FILE CONFIGURATION" style={{ padding: '0.5rem' }}>
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

              <Form.Item name={'date'} label="Date Format ">
                <DatePicker style={{ width: '100%' }} />
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

            <p style={{ padding: '0 1rem' }}>
              NOTE: Vendor Cost and Vendor SKU fields are specific to dropship orders.
            </p>
          </Col>
          <Col span={14}>
            <Card
              title={
                <Form.Item name="includeColumnHeader" initialValue={includeColumnHeader}>
                  <span>
                    EXPORT FIELDS <span style={{ color: 'blue' }}>( Include column headers? </span>
                  </span>
                  <Checkbox
                    checked={includeColumnHeader}
                    onChange={(e) => setIncludeColumnHeader(e.target.checked)}
                  />
                  <span style={{ color: 'blue' }}> )</span>
                </Form.Item>
              }
              style={{ padding: '0.5rem' }}
            >
              <Form.Item name={'exportFields'} label="Add Field">
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
