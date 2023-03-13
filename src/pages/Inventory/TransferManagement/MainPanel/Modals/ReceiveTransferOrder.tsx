import { OModal } from '@/components/Globals/OModal';
import { OInput } from '@/components/Globals/OInput';
import { Row, Col, Space, Select, Button, Checkbox, Input, InputNumber, Form } from 'antd';
import { PlusOutlined, QuestionCircleTwoTone } from '@ant-design/icons';

const { TextArea } = Input;

interface IReceiveTransferModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  title: string;
}

const ReceiveTransferModal: React.FC<IReceiveTransferModal> = ({ isOpen, onClose, onSave, title }) => {
  return (
    <OModal
      title={title}
      width={700}
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
          btnLabel: 'Submit',
          onClick: onSave,
        },
      ]}
    >
      <Form>
        <Row align="middle" gutter={10}>
          <Col>
            <h3>Apply To All ( </h3>
          </Col>
          <Col>
            <Form.Item label="Received">
              <OInput />
            </Form.Item>
          </Col>
          <Col>
            <Checkbox>Update Inventory</Checkbox>
            <Checkbox>Receive</Checkbox>
          </Col>
          <Col>
            <h3>)</h3>
          </Col>
        </Row>

        <hr />

        <Row justify="space-between" gutter={10}>
          <Col span={20}>
            <h2>Red Satin (1234 Red Satin)</h2>
          </Col>
          <Col>
            <Checkbox>Receive</Checkbox>
          </Col>
          <Col span={8}>
            <Form.Item label="Item notes" labelCol={{ span: 24 }}>
              <TextArea />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Accept">
              <InputNumber /> Units.
            </Form.Item>
            <Form.Item label="Reject">
              <InputNumber /> Units.
            </Form.Item>
            <Form.Item label="Total">5 Units.</Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Receiving Location" labelCol={{ span: 24 }}>
              <Space size={10}>
                <Select options={[{ value: 'roll1', label: 'Roll 1' }]} style={{ width: 150 }} />
                <Button icon={<PlusOutlined />} />
              </Space>
            </Form.Item>
            <Form.Item label="Received">
              <Input />
            </Form.Item>
            <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
              <Space size={HORIZONTAL_SPACE_SIZE}>
                <span>Update Inventory:</span>
                <Checkbox />
                <QuestionCircleTwoTone style={{ fontSize: 15 }} />
              </Space>
            </div>
          </Col>
        </Row>

        <Row justify="space-between" gutter={10}>
          <Col span={20}>
            <h2>Pink Water Bottle (1234000)</h2>
          </Col>
          <Col>
            <Checkbox>Receive</Checkbox>
          </Col>
          <Col span={8}>
            <Form.Item label="Item notes" labelCol={{ span: 24 }}>
              <TextArea />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Accept">
              <InputNumber /> Units.
            </Form.Item>
            <Form.Item label="Reject">
              <InputNumber /> Units.
            </Form.Item>
            <Form.Item label="Total">5 Units.</Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Receiving Location" labelCol={{ span: 24 }}>
              <Space size={10}>
                <Select options={[{ value: 'roll1', label: 'Roll 1' }]} style={{ width: 150 }} />
                <Button icon={<PlusOutlined />} />
              </Space>
            </Form.Item>
            <Form.Item label="Received">
              <Input />
            </Form.Item>
            <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
              <Space size={HORIZONTAL_SPACE_SIZE}>
                <span>Update Inventory:</span>
                <Checkbox />
                <QuestionCircleTwoTone style={{ fontSize: 15 }} />
              </Space>
            </div>
          </Col>
        </Row>
      </Form>
    </OModal>
  );
};

export default ReceiveTransferModal;
