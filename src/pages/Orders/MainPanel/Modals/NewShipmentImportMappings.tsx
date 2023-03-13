import { useMemo, useState, useEffect } from 'react';
import { Card, Col, Form, Row, Input } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { EditableTable } from '@/components/Globals/EditableTable';
import { useModel } from '@umijs/max';
import { uuidv4 } from '@antv/xflow-core';

interface INewShipmentImportMappings {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}

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
    editable: true,
  },
];

const importFieldsRows = [
  {
    key: 1,
    sl: 1,
    dataField: 'order number',
    columnName: 'order number',
  },
  {
    key: 2,
    sl: 2,
    dataField: 'order date',
    columnName: 'order date',
  },
  {
    key: 3,
    sl: 3,
    dataField: 'payment date',
    columnName: 'payment date',
  },
  {
    key: 4,
    sl: 4,
    dataField: 'ship to name',
    columnName: 'ship to name',
  },
  {
    key: 5,
    sl: 5,
    dataField: 'ship to address 1',
    columnName: 'ship to address 1',
  },
  {
    key: 6,
    sl: 6,
    dataField: 'ship to city',
    columnName: 'ship to city',
  },
  {
    key: 7,
    sl: 7,
    dataField: 'ship to state',
    columnName: 'ship to state',
  },
  {
    key: 8,
    sl: 8,
    dataField: 'ship to zip code',
    columnName: 'ship to zip code',
  },
];

const NewShipmentImportMappingsModal: React.FC<INewShipmentImportMappings> = ({ isOpen, onSave, onClose }) => {
  const [salesChannels, setSalesChannels] = useState(importFieldsRows);
  const [shippingCarriers, setShippingCarriers] = useState(importFieldsRows);
  const { editableImportSetting, updateShipmentImportSettings, addShipmentImportSettings } = useModel('shipmentImportSettings');
  const [form] = Form.useForm();

  const handleSalesChannelRowEdit = (index, name, value) => {
    setSalesChannels(salesChannels.map((row) => (row.key === index ? { ...row, [name]: value } : row)));
  };

  const handleShippingCarrierRowEdit = (index, name, value) => {
    setShippingCarriers(shippingCarriers.map((row) => (row.key === index ? { ...row, [name]: value } : row)));
  };

  const salesChannelRows = useMemo(
    () =>
      salesChannels.map((item) => ({
        ...item,
        dataField: item.dataField.toUpperCase(),
        columnName: item.columnName.toUpperCase(),
      })),
    [salesChannels],
  );

  const shippingCarrierRows = useMemo(
    () =>
      shippingCarriers.map((item) => ({
        ...item,
        dataField: item.dataField.toUpperCase(),
        columnName: item.columnName.toUpperCase(),
      })),
    [shippingCarriers],
  );

  useEffect(() => {
    if (!editableImportSetting) {
      setSalesChannels(importFieldsRows);
      setShippingCarriers(importFieldsRows);
      // form.resetFields();
    } else {
      setSalesChannels(editableImportSetting?.salesChannelRows);
      setShippingCarriers(editableImportSetting?.shippingCarriers);
      // form.setFieldsValue({ name: editableImportSetting?.name });
    }
  }, [isOpen, editableImportSetting, form]);

  const handleSave = () => {
    if (!editableImportSetting) {
      form.validateFields().then((values) => {
        addShipmentImportSettings({ key: uuidv4(), name: values.name, salesChannelRows, shippingCarriers });
      });
    } else {
      form.validateFields().then((values) => {
        updateShipmentImportSettings({ key: uuidv4(), name: values.name, salesChannelRows, shippingCarriers });
      });
    }

    onSave();
  };

  return (
    <OModal
      title="New Shipment Import Mappings"
      helpLink=""
      width={700}
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
      <>
        <Row className="mb-10">
          <Col span={12}>
            <Form form={form}>
              <Form.Item name="name" label="Import Mapping Name">
                <Input />
              </Form.Item>
            </Form>
          </Col>
          <Col span={12}>&nbsp;</Col>
        </Row>
        <Row gutter={12}>
          <Col span={12}>
            <Card title="Sales Channel Mappings">
              <EditableTable
                pagination={false}
                columns={importFieldsColumns}
                dataSource={salesChannelRows}
                handleSave={handleSalesChannelRowEdit}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Shipping Carrier Mappings">
              <EditableTable
                pagination={false}
                columns={importFieldsColumns}
                dataSource={shippingCarrierRows}
                handleSave={handleShippingCarrierRowEdit}
              />
            </Card>
          </Col>
        </Row>
      </>
    </OModal>
  );
};

export default NewShipmentImportMappingsModal;
