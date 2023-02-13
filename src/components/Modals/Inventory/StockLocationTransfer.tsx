import { OModal } from '@/components/Globals/OModal';
import { Row, Col, Input, Select, Form, InputNumber } from 'antd';
import React, { useEffect } from 'react';
const { TextArea } = Input;

interface IStockLocationTransferModal {
  isOpen: boolean;
  vendorName: string;
  selectedLocation: any;
  locations: any[];
  onClose: () => void;
  onSave: (data: any) => void;
}

const StockLocationTransferModal: React.FC<IStockLocationTransferModal> = ({
  isOpen,
  vendorName,
  selectedLocation,
  locations,
  onClose,
  onSave,
}) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields().then((values) => {
      onSave(values);
    });
  };

  useEffect(() => {
    form.setFieldsValue({ available: 0, destination: '' });
  }, [isOpen]);

  return (
    <OModal
      title="In-House Warehouse Stock Location Transfer"
      helpLink=""
      width={500}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'close',
          type: 'default',
          btnLabel: 'Close',
          onClick: onClose,
        },
        {
          key: 'save',
          type: 'default',
          btnLabel: 'Save',
          onClick: () => handleSave(),
        },
      ]}
    >
      <>
        <Row justify="center">
          <Col>
            <h2>{vendorName}</h2>
          </Col>
        </Row>

        <Form form={form}>
          <Form.Item label="Quantity" name="available">
            <InputNumber max={selectedLocation?.available} min={0} />
          </Form.Item>
          <Form.Item label="To Location" name="destination">
            <Select
              options={locations
                .filter((location) => location.key !== selectedLocation?.key)
                .map((item) => ({ label: item.location, value: item.key }))}
            />
          </Form.Item>
        </Form>

        <Form layout="vertical" style={{ marginTop: 10 }}>
          <Form.Item label="Edit Notes:">
            <TextArea />
          </Form.Item>
        </Form>
      </>
    </OModal>
  );
};

export default StockLocationTransferModal;
