import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { Row, Col, Input, Select, Form, InputNumber } from 'antd';
import React, { useEffect, useMemo } from 'react';
const { TextArea } = Input;

interface IStockLocationTransferModal {
  isOpen: boolean;
  vendorName: string;
  selectedLocation: any;
  warehouseId: number;
  onClose: () => void;
  onSave: (data: any) => void;
}

const StockLocationTransferModal: React.FC<IStockLocationTransferModal> = ({
  isOpen,
  vendorName,
  selectedLocation,
  warehouseId,
  onClose,
  onSave,
}) => {
  const [form] = Form.useForm();
  const { warehouseLocationList, getLocationList } = useModel('warehouseLocation');

  const handleSave = () => {
    form.validateFields().then((values) => {
      onSave(values);
    });
  };

  useEffect(() => {
    if (isOpen) {
      form.resetFields();
      getLocationList(warehouseId);
    }
  }, [isOpen, form, getLocationList, warehouseId]);

  const locationOptions = useMemo(
    () => warehouseLocationList.map((item) => ({ label: item.name, value: item.id })),
    [warehouseLocationList],
  );

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

        <Form form={form} labelCol={{ span: 6 }} labelAlign="left">
          <Form.Item label="Quantity" name="amount" rules={[{ required: true, message: 'Please input the quantity of item' }]}>
            <InputNumber max={selectedLocation?.available} min={0} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            label="To Location"
            name="destination_id"
            rules={[{ required: true, message: 'Please select the destination location' }]}
          >
            <Select options={locationOptions} />
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
