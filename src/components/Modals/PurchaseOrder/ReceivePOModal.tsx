import { OModal } from '@/components/Globals/OModal';
import type { IOSelectOption } from '@/components/Globals/OSelect';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Checkbox, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import React, { useEffect } from 'react';
const { TextArea } = Input;
interface IReceivePOModal {
  isOpen: boolean;
  item: any;
  onSave: (item: any) => void;
  onClose: () => void;
}

const ReceivePOModal: React.FC<IReceivePOModal> = ({ isOpen, item, onSave, onClose }) => {
  const [form] = Form.useForm();
  const locationOptions: IOSelectOption[] = [
    {
      text: 'Item 1',
      value: '1',
    },
    {
      text: 'Item 2',
      value: '2',
    },
  ];

  useEffect(() => {
    form.setFieldsValue({
      ...item,
      billedCost: item?.billed_cost,
      landedCost: item?.landed_cost,
    });
  }, [isOpen]);

  const handleSave = () => {
    form.validateFields().then((values) => onSave(values));
  };

  return (
    <OModal
      title={"Receive Item '" + item?.ponumber + "'"}
      helpLink=""
      width={1000}
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
          btnLabel: 'Save',
          onClick: handleSave,
        },
      ]}
    >
      <>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h3 style={{ color: 'blue' }}>{'Apply To All {'}</h3>
          <Form layout="inline" style={{ marginLeft: 10 }}>
            <Form.Item label="Delivered">
              <Input style={{ width: 80 }} />
            </Form.Item>
            <Form.Item label="Received">
              <Input style={{ width: 80 }} />
            </Form.Item>
            <Form.Item label="Billed On">
              <Input style={{ width: 80 }} />
            </Form.Item>
            <Form.Item label="Reference #.">
              <Input />
            </Form.Item>
            <Form.Item label="Update Inventory">
              <Checkbox />
            </Form.Item>
            <Form.Item label="Receive">
              <Checkbox />
            </Form.Item>
          </Form>
          <h3 style={{ color: 'blue' }}>{'}'}</h3>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
            background: 'rgb(222,224,255)',
            paddingLeft: 5,
            paddingRight: 5,
          }}
        >
          <h3>CLeanse Product (AA0001/AA0002)</h3>
          <Form.Item label="Receive">
            <Checkbox />
          </Form.Item>
        </div>
        <Row gutter={10} style={{ marginTop: 10 }}>
          <Col span={9}>
            <Form labelCol={{ span: 12 }} labelAlign="left">
              <Form.Item label="Delivered">
                <Input />
              </Form.Item>
              <Form.Item label="Received">
                <Input />
              </Form.Item>
              <Form.Item label="Billed On">
                <Input />
              </Form.Item>
              <Form.Item label="Landed Cost Payment Date">
                <DatePicker />
              </Form.Item>
              <Form.Item label="Reference #">
                <Input />
              </Form.Item>
              <Form.Item label="Item Memo">
                <TextArea rows={2} />
              </Form.Item>
            </Form>
          </Col>
          <Col span={6}>
            <Form labelCol={{ span: 12 }} form={form} style={{ textAlign: 'right' }}>
              <Form.Item label="Original Unit Cost">
                <span>$1.00</span>
              </Form.Item>
              <Form.Item label="Billed Unit Cost" name="billedCost">
                <Input type="number" addonBefore="$" />
              </Form.Item>
              <Form.Item label="Landed Unit Cost" name="landedCost">
                <Input type="number" addonBefore="$" />
              </Form.Item>
              <Form.Item label="Discount" name="discount" labelCol={{ span: 6 }}>
                <Input
                  type="number"
                  addonBefore={
                    <Select
                      defaultValue="$"
                      style={{ width: 40 }}
                      options={[{ value: '$', label: '$' }]}
                    />
                  }
                  value={0.0}
                />
              </Form.Item>
            </Form>
          </Col>
          <Col span={9}>
            <Form labelCol={{ span: 10 }} style={{ textAlign: 'right' }}>
              <Form.Item label="Accept">
                <Input type="number" addonAfter="units" value={25} />
              </Form.Item>
              <Form.Item label="Reject">
                <Input type="number" addonAfter="units" value={0} />
              </Form.Item>
              <Form.Item label="Total">
                <span>
                  <b>25</b> units
                </span>
              </Form.Item>
              <Form.Item label="Update inventory" style={{ textAlign: 'left' }}>
                <Checkbox />
                <QuestionCircleOutlined className="help-button" style={{ marginLeft: 6 }} />
              </Form.Item>
              <Form.Item label="Receiving Location" labelCol={{ span: 8 }}>
                <Input type="number" addonAfter="units" value={25} />
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </>
    </OModal>
  );
};

export default ReceivePOModal;
