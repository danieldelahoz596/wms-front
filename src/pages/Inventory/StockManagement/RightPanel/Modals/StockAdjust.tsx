import { OModal } from '@/components/Globals/OModal';
import { QuestionCircleTwoTone } from '@ant-design/icons';
import { Row, Col, Input, Card, Form, InputNumber } from 'antd';
import React, { useEffect } from 'react';
const { TextArea } = Input;

interface IStockAdjustModal {
  isOpen: boolean;
  vendorName: string;
  onClose: () => void;
  onSave: (data: any) => void;
}

const StockAdjustModal: React.FC<IStockAdjustModal> = ({ isOpen, vendorName, onClose, onSave }) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields().then((values) => {
      onSave(values);
    });
  };

  useEffect(() => {
    if (isOpen) form.resetFields();
  }, [isOpen, form]);

  return (
    <OModal
      title="In-House Warehouse - Adjust Stock"
      helpLink=""
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
      <>
        <Row justify="center">
          <Col>
            <h2>{vendorName}</h2>
          </Col>
        </Row>

        <Card title="Stock">
          <Form form={form} layout="inline">
            <Form.Item label="On Hand" name="on_hand">
              <InputNumber style={{ width: 130 }} />
            </Form.Item>
            <Form.Item label="Locked" name="locked">
              <InputNumber style={{ width: 130 }} />
            </Form.Item>
            <Form.Item label="Min">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Form.Item name="min_level">
                  <InputNumber style={{ width: 130 }} />
                </Form.Item>
                <QuestionCircleTwoTone style={{ fontSize: 16 }} />
              </div>
            </Form.Item>
          </Form>
        </Card>

        <Form layout="vertical" style={{ marginTop: 10 }}>
          <Form.Item label="Edit Notes:">
            <TextArea />
          </Form.Item>
        </Form>
      </>
    </OModal>
  );
};

export default StockAdjustModal;
