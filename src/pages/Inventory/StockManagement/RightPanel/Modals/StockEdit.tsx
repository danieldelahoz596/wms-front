import { OModal } from '@/components/Globals/OModal';
import { Row, Col, Input, Form, InputNumber } from 'antd';
import React, { useEffect } from 'react';
const { TextArea } = Input;

interface IStockEditModal {
  isOpen: boolean;
  vendorName: string;
  locationInfo: any;
  actionType: string;
  onClose: () => void;
  onSave: (values: any) => void;
}

const StockEditModal: React.FC<IStockEditModal> = ({ isOpen, vendorName, locationInfo, actionType, onClose, onSave }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (isOpen) form.resetFields();
  }, [isOpen, form]);

  const handleSave = () => {
    form.validateFields().then((values) => {
      onSave(values);
    });
  };

  return (
    <OModal
      title={`In-House Warehouse - ${actionType} Stock`}
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
          onClick: handleSave,
        },
      ]}
    >
      <>
        <Row justify="center">
          <Col>
            <h1>{vendorName}</h1>
          </Col>
        </Row>

        <div style={{ position: 'relative' }}>
          <h2 style={{ textAlign: 'center' }}>
            Available stock at <u>{`${locationInfo?.name}`}</u>{' '}
          </h2>
          <h2 style={{ position: 'absolute', top: 0, left: 440 }}>{`${locationInfo?.available}`}</h2>
        </div>

        <Form layout="inline" style={{ marginTop: 10 }} form={form}>
          <Form.Item label={`${actionType}`} style={{ marginLeft: 'auto' }} name="amount">
            <InputNumber style={{ width: '100%' }} min={0} max={actionType === 'Remove' && locationInfo?.available} />
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

export default StockEditModal;
