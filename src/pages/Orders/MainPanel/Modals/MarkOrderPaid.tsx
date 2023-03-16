import { Form, Row, Col, DatePicker, InputNumber, Alert } from 'antd';
import { OModal } from '@/components/Globals/OModal';

interface IMarkOrderPaidModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: (values: any) => void;
  orderNumber: string;
}

const MarkOrderPaidModal: React.FC<IMarkOrderPaidModal> = ({ isOpen, onClose, onSave, orderNumber }) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields().then((values) => onSave(values.fileData));
  };

  return (
    <OModal
      title="Mark Order Paid"
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
          btnLabel: 'Save',
          onClick: handleSave,
        },
      ]}
    >
      <Form form={form} layout="vertical">
        <Alert type="info" message="Marking this order as paid will allow the order to be fulfilled." />
        <Row>
          <Col span={10}>
            <Form.Item label="Order Number">
              <span>{orderNumber}</span>
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label="Amount Paid">
              $<InputNumber />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item label="Payment Date">
              <DatePicker />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </OModal>
  );
};

export default MarkOrderPaidModal;
