import { useEffect } from 'react';
import { Row, Col, Input, Select, Form, InputNumber } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';

interface ISplitOrderModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: (item: any) => void;
}

const SplitOrderModal: React.FC<ISplitOrderModal> = ({ isOpen, onClose, onSave }) => {
  const { editableOrder } = useModel('order');
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields().then((value) => {
      onSave({ ...editableOrder, order_number: value.order_number });
    });
  };

  useEffect(() => {
    form.resetFields();
  }, [isOpen]);

  return (
    <OModal
      forceRender
      title={`Split Order ${editableOrder?.order_number}`}
      helpLink="/help/orders/manage/split"
      width={1200}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'cancel',
          type: 'default',
          btnLabel: 'Cancel',
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
      <Form className="split-order-form" form={form}>
        <Row gutter={5}>
          <Col offset={4} span={10}>
            <h1 style={{ textAlign: 'right' }}>This Order</h1>
            <hr />
          </Col>
          <Col span={10}>
            <h1 style={{ textAlign: 'right' }}>New Order</h1>
            <hr />
          </Col>
        </Row>
        <Form.Item label="Order Number" labelCol={{ span: 4 }}>
          <Input.Group compact>
            <Form.Item label={editableOrder?.order_number} labelCol={{ span: 24 }} style={{ width: '50%' }} colon={false} />
            <Form.Item
              label=" "
              labelCol={{ span: 12 }}
              style={{ width: '50%' }}
              name="order_number"
              colon={false}
              rules={[{ required: true, message: 'Order Number is required' }]}
            >
              <Input />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item label="Labels" labelCol={{ span: 4 }}>
          <Input.Group compact>
            <Form.Item style={{ width: '50%', paddingRight: 5 }} name="label1">
              <Select size="small" />
            </Form.Item>
            <Form.Item style={{ width: '50%', paddingLeft: 5 }} name="label2">
              <Select size="small" />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item label=" " labelCol={{ span: 4 }} colon={false}>
          <Input.Group compact>
            <Form.Item
              label={`Quantity: ${editableOrder?.orderItems[0].unitQty}`}
              labelCol={{ span: 24 }}
              style={{ width: '50%' }}
            />
            <Form.Item
              label="Quantity"
              labelCol={{ span: 12 }}
              style={{ width: '50%' }}
              name="quantity"
              colon={true}
              rules={[{ required: true, message: 'Quantity is required!' }]}
            >
              <InputNumber style={{ width: '100%' }} max={editableOrder?.orderItems[0].unitQty} min={1} />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item label="Order Total" labelCol={{ span: 4 }}>
          <Input.Group compact>
            <Form.Item label="$0.00" labelCol={{ span: 24 }} style={{ width: '50%' }} colon={false} />
            <Form.Item label=" " labelCol={{ span: 12 }} style={{ width: '50%' }} name="order_total" colon={false}>
              <Input />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item label="Amount Paid" labelCol={{ span: 4 }}>
          <Input.Group compact>
            <Form.Item label="$0.00" labelCol={{ span: 24 }} style={{ width: '50%' }} colon={false} />
            <Form.Item label=" " labelCol={{ span: 12 }} style={{ width: '50%' }} name="amount_paid" colon={false}>
              <Input />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item label="Shipping Paid" labelCol={{ span: 4 }}>
          <Input.Group compact>
            <Form.Item label="$0.00" labelCol={{ span: 24 }} style={{ width: '50%' }} colon={false} />
            <Form.Item label=" " labelCol={{ span: 12 }} style={{ width: '50%' }} name="shipping_paid" colon={false}>
              <Input />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item label="Tax Amount" labelCol={{ span: 4 }}>
          <Input.Group compact>
            <Form.Item label="$0.00" labelCol={{ span: 24 }} style={{ width: '50%' }} colon={false} />
            <Form.Item label=" " labelCol={{ span: 12 }} style={{ width: '50%' }} name="tax_amount" colon={false}>
              <Input />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item label="Insured Value" labelCol={{ span: 4 }}>
          <Input.Group compact>
            <Form.Item label="$0.00" labelCol={{ span: 24 }} style={{ width: '50%' }} colon={false} />
            <Form.Item label=" " labelCol={{ span: 12 }} style={{ width: '50%' }} name="insured_value" colon={false}>
              <Input />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item label="Weight(oz)" labelCol={{ span: 4 }}>
          <Input.Group compact>
            <Form.Item label="384.0" labelCol={{ span: 24 }} style={{ width: '50%' }} colon={false} />
            <Form.Item label=" " labelCol={{ span: 12 }} style={{ width: '50%' }} name="weight" colon={false}>
              <Input />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item label="Discount" labelCol={{ span: 4 }}>
          <Input.Group compact>
            <Form.Item label="$0.00" labelCol={{ span: 24 }} style={{ width: '50%' }} colon={false} />
            <Form.Item label=" " labelCol={{ span: 12 }} style={{ width: '50%' }} name="discount" colon={false}>
              <Input />
            </Form.Item>
          </Input.Group>
        </Form.Item>
      </Form>
    </OModal>
  );
};

export default SplitOrderModal;
