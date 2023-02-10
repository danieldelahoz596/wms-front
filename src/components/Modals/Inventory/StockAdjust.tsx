import { OModal } from '@/components/Globals/OModal';
import { QuestionCircleTwoTone } from '@ant-design/icons';
import { Row, Col, Input, Card, Form, InputNumber } from 'antd';
import React, { useEffect } from 'react';
const { TextArea } = Input;

interface IStockAdjustModal {
  isOpen: boolean;
  vendorName: string;
  initialData: any;
  onClose: () => void;
  onSave: (data: any) => void;
}

const StockAdjustModal: React.FC<IStockAdjustModal> = ({
  isOpen,
  vendorName,
  initialData,
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
    form.setFieldsValue(initialData);
  }, [isOpen]);

  return (
    <OModal
      title="In-House Warehouse - Adjust Stock"
      width={700}
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
      <Row justify="center">
        <Col>
          <h2>{vendorName}</h2>
        </Col>
      </Row>

      <Card title="Stock">
        <Form form={form} layout="inline" labelCol={{ span: 10 }}>
          <Form.Item label="On Hand" name="on_hand" style={{ width: 180 }}>
            <InputNumber />
          </Form.Item>
          <Form.Item label="Locked" name="locked" style={{ width: 180 }}>
            <InputNumber />
          </Form.Item>
          <Form.Item label="Min" name="min" style={{ width: 220 }}>
            <InputNumber />
            <QuestionCircleTwoTone style={{ fontSize: 16 }} />
          </Form.Item>
        </Form>
      </Card>

      <Form layout="vertical" style={{ marginTop: 10 }}>
        <Form.Item label="Edit Notes:">
          <TextArea />
        </Form.Item>
      </Form>
    </OModal>
  );
};

export default StockAdjustModal;
