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
  const [multiSku, setMultiSku] =  useState();

  const {
    editableExportSetting,
    setEditableExportSetting,
    addOrderExportSettings,
    updateOrderExportSettings,
  } = useModel('orderExportSettings');

  const exportFields = [
    { key: 1, field: 'Order Number' },
    { key: 2, field: 'Order Date' },
    { key: 3, field: 'Status Description' },
    { key: 4, field: 'Order Type' },
    { key: 5, field: 'Order Total' },
    { key: 6, field: 'Currency Code3' },
    { key: 7, field: 'Amount Paid' },
    { key: 8, field: 'Amount Paid' },
    { key: 9, field: 'Payment Date' },
    { key: 10, field: 'Customer Ship Amount' },
    { key: 11, field: 'Ship by Date' },
    { key: 12, field: 'Receive by Date' },
    { key: 13, field: 'Notes from Buyer' },
    { key: 14, field: 'Notes to Buyer' },
    { key: 15, field: 'Internal Notes' },
    { key: 16, field: 'Requested Shipping Service' },
    { key: 17, field: 'Order Weight' },
    { key: 18, field: 'Order Height' },
    { key: 19, field: 'Order Width' },
    { key: 20, field: 'Order Length' },
    { key: 21, field: 'Insured Value' },
    { key: 22, field: 'Insurance Cost' },
    { key: 23, field: 'Other Cost' },
    { key: 24, field: 'Saturday Delivery' },
    { key: 25, field: 'Contains Alcohol' },
    { key: 26, field: 'Contains Dry Ice' },
    { key: 27, field: 'Dry Ice Weight' },
    { key: 28, field: 'Gift' },
    { key: 29, field: 'Gift Message' },
    { key: 30, field: 'Non-Machinable' },
    { key: 31, field: 'Show Postage' },
    { key: 32, field: 'ITN' },
    { key: 33, field: 'Intl Non-Delivery Action' },
    { key: 34, field: 'Bill Duties to Sender' },
    { key: 35, field: 'Do Not Prepay Postage' },
    { key: 36, field: 'Include Return Label' },
    { key: 37, field: 'Release Without Signature' },
    { key: 38, field: 'Custom Field 1' },
    { key: 39, field: 'Custom Field 2' },
    { key: 40, field: 'Custom Field 3' },
    { key: 41, field: 'External Order' },
    { key: 42, field: 'Discount' },
    { key: 43, field: 'Order Payment Type' },
    { key: 44, field: 'Multi Package' },
    { key: 45, field: 'Channel Priority' },
    { key: 46, field: 'Fraud Analysis' },
    { key: 47, field: 'Order Labels' },
    { key: 48, field: 'Ship to Name' },
    { key: 49, field: 'Ship Company' },
    { key: 50, field: 'Ship Address1' },
    { key: 51, field: 'Ship Address2' },
    { key: 52, field: 'Ship Address3' },
    { key: 53, field: 'Ship City' },
    { key: 54, field: 'Ship State' },
    { key: 55, field: 'Ship Zip Code' },
    { key: 56, field: 'Ship Country' },
    { key: 57, field: 'Ship to Phone' },
    { key: 58, field: 'Ship Address Type' },
    { key: 59, field: 'Buyer Name' },
    { key: 60, field: 'Buyer Email' },
    { key: 61, field: 'Ship Date' },
    { key: 62, field: 'Tracking Number' },
    { key: 63, field: 'Carrier Fee' },
    { key: 64, field: 'Transaction ID' },
    { key: 65, field: 'Ship Carrier Name' },
    { key: 66, field: 'Ship Service Name' },
    { key: 67, field: 'Ship Package Name' },
    { key: 68, field: 'Listing SKU' },
    { key: 69, field: 'Item Qty Ordered' },
    { key: 70, field: 'Item Unit Price' },
    { key: 71, field: 'Item Tax' },
    { key: 72, field: 'Item Discount' },
    { key: 73, field: 'Item Notes' },
    { key: 74, field: 'Warehouse Name' },
    { key: 77, field: 'Internal SKU' },
    { key: 78, field: 'UPC' },
    { key: 79, field: 'Digital' },
    { key: 80, field: 'Giftcard' },
    { key: 81, field: 'Product Name' },
    { key: 82, field: 'Brand Name' },
    { key: 83, field: 'Customer Name'
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
      id: editableExportSetting?.id,
      exportFields: selectedExportFields,
    };

    if (editableExportSetting) {
      updateOrderExportSettings(values);
    } else {
      addOrderExportSettings(values);
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
      title={editableExportSetting ? "Edit Export Settings" : "New Export Settings"}
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
        wrapperCol={{ span: 18 }}>
        <Row>
          <Col span={11} style={{ padding: 5, paddingTop: 7 }}>
            <Form.Item name="settingName" label="Settings Name" labelCol={{ span: 24 }} wrapperCol={{ span: 23 }}>
              <Input />
            </Form.Item>
            <Card title="File Configuration">
              <Form.Item name={'fileFormat'} label="File Format">
                <Select
                  placeholder="Select..."
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
              <Space size="small">
                <Form.Item label="Multi SKUs" name='multiSku'>
                  <Radio.Group
                    value={multiSku}
                    onChange={(e) => setMultiSku(e.target.value)}
                  >
                    <Radio value={'multiline'}>Multiline</Radio>
                    <Radio value={'delimit'}>Delimit</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item name="delimitValue" style={{ width: 50 }}>
                  <Input />
                </Form.Item>
              </Space>
            </Card>
            <Form.Item
              labelCol={{ span: 21 }}
              name="wrapDoubleQuote"
              valuePropName="checked"
              label="Wrap values in double quotes when exporting CSV/text files?"
              colon={false}>
              <Checkbox />
            </Form.Item>
            <label>NOTE: Vendor Cost and Vendor SKU fields are specific to dropship orders.</label>
          </Col>

          <Col span={13}>
            <Card
              title={
                <Space size={5} align={'start'}>
                  <span>Export Fields</span>  
                  <span style={{ color: 'blue', textTransform: 'capitalize' }}>
                    (Include column headers?
                  </span>
                  <Form.Item name="includeColumnHeader" valuePropName="checked" style={{ marginTop: -6 }}>
                    <Checkbox/>
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
