import { OInput } from '@/components/Globals/OInput';
import { OModal } from '@/components/Globals/OModal';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Alert, Col, Form, Row } from 'antd';
import React from 'react';

interface ICancelOrderModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const CancelOrderModal: React.FC<ICancelOrderModal> = ({ isOpen, onClose, onSave }) => {
  return (
    <OModal
      title="Cancel orders"
      helpLink="/help/orders/manage/cancel"
      width={400}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Yes - cancel order',
          onClick: onSave,
        },
      ]}
    >
      <>
        <Alert
          description={
            <ul>
              <li>If the sales channel is not notified, these orders can be restored.</li>
              <li>
                {`When "Notify Channel" is selected, the options to "Refund order(s)" and "Request`}
                {`Channel Email Update" will be available if all sales channels selected support those `}
                options.
              </li>
            </ul>
          }
        />
        <Row>
          <Col offset={6} span={18}>
            <Form labelAlign='right' labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
              <Form.Item name="reason" label="Select Reason">
                <OInput
                  type="select"
                  options={[
                    {
                      text: 'No Inventory Available',
                      value: '1',
                    },
                    {
                      text: 'Shipping Address Undeliverable',
                      value: '2',
                    },
                    {
                      text: 'Customer Exchange',
                      value: '3',
                    },
                    {
                      text: 'Buyer Cancelled',
                      value: '4',
                    },
                    {
                      text: 'Buyer Has Not Paid',
                      value: '5',
                    },
                    {
                      text: 'General Adjustment',
                      value: '6',
                    },
                    {
                      text: 'Carrier Credit Decision',
                      value: '7',
                    },
                    {
                      text: 'Risk Assessment Information Not Valid',
                      value: '8',
                    },
                    {
                      text: 'Customer Return',
                      value: '9',
                    },
                  ]}
                  placeholder="No Inventory Available"
                />
              </Form.Item>
              <Form.Item name="details" label="Details">
                <OInput type="textarea" rows={3} />
              </Form.Item>
              <Form.Item name="notify" wrapperCol={{ span: 18, offset: 6 }}>
                <OInput type="checkbox" /> Notify sales channel
              </Form.Item>
              <Form.Item name="refund" wrapperCol={{ span: 18, offset: 6 }}>
                <OInput type="checkbox" /> Refund order(s)&nbsp;
                <QuestionCircleOutlined style={{ fontSize: 15, color: '#5F5FFF' }} />
              </Form.Item>
              <Form.Item name="emailUpdate" wrapperCol={{ span: 18, offset: 6 }}>
                <OInput type="checkbox" /> Request channel email update&nbsp;
                <QuestionCircleOutlined style={{ fontSize: 15, color: '#5F5FFF' }} />
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </>
    </OModal>
  );
};

export default CancelOrderModal;
