import React from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Input, Checkbox, Row, Col, Card, Form, InputNumber } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

interface INewStockModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  stockData: any;
}

const NewStockModal: React.FC<INewStockModal> = ({ isOpen, onClose, onSave, stockData }) => {
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
          onClick: onSave,
        },
      ]}
    >
      <>
        <h2 style={{ textAlign: 'center' }}>{stockData?.master_sku}</h2>
        <Row>
          <Col span={14}>
            <Card title="Location">
              <Input placeholder="Required" style={{ width: '100%' }} />
              <div style={{ marginTop: 10 }}>
                <Checkbox value="is_pickable">Is Pickable?</Checkbox>
                <Checkbox value="is_receivable">Is Receivable?</Checkbox>
              </div>
            </Card>
          </Col>
          <Col span={10}>
            <Card title="Stock">
              <Form labelCol={{ span: 8 }}>
                <Form.Item label="On Hand">
                  <InputNumber />
                </Form.Item>
                <Form.Item label="Min.Level">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <InputNumber style={{ marginRight: 10 }} />
                    <QuestionCircleOutlined style={{ fontSize: 15, color: 'blue' }} />
                  </div>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </>
    </OModal>
  );
};

export default NewStockModal;
