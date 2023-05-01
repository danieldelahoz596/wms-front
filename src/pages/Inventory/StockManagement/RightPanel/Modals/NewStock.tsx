import React, { useEffect } from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Input, Checkbox, Row, Col, Card, Form, InputNumber } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

interface INewStockModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: (values: any) => void;
  stockData: any;
}

const NewStockModal: React.FC<INewStockModal> = ({ isOpen, onClose, onSave, stockData }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (isOpen) {
      form.resetFields();
    }
  }, [isOpen, form]);

  const handleSave = () => {
    form.validateFields().then((values) => {
      onSave(values);
    });
  };

  return (
    <OModal
      title="In-House Warehouse - New Stock"
      helpLink=""
      width={500}
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
          btnLabel: 'Continue',
          onClick: handleSave,
        },
      ]}
    >
      <>
        <h2 style={{ textAlign: 'center' }}>{stockData?.product.sku}</h2>
        <Form labelCol={{ span: 8 }} form={form}>
          <Row>
            <Col span={14}>
              <Card title="Location">
                <Form.Item name="name" rules={[{ required: true, message: 'Please input the location name' }]}>
                  <Input placeholder="Required" style={{ width: '100%' }} />
                </Form.Item>
                <div style={{ marginTop: 10 }}>
                  <Checkbox name="is_pickable">Is Pickable?</Checkbox>
                  <Checkbox name="is_receivable">Is Receivable?</Checkbox>
                </div>
              </Card>
            </Col>
            <Col span={10}>
              <Card title="Stock">
                <Form.Item label="On Hand" name="on_hand">
                  <InputNumber min={0} />
                </Form.Item>
                <Form.Item label="Min.Level">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Form.Item name="min_level">
                      <InputNumber style={{ marginRight: 10 }} min={0} />
                    </Form.Item>
                    <QuestionCircleOutlined style={{ fontSize: 15, color: 'blue' }} />
                  </div>
                </Form.Item>
              </Card>
            </Col>
          </Row>
        </Form>
      </>
    </OModal>
  );
};

export default NewStockModal;
