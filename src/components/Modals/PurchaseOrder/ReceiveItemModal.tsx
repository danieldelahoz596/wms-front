import { OModal } from '@/components/Globals/OModal';
import type { IOSelectOption } from '@/components/Globals/OSelect';
import { OSelect } from '@/components/Globals/OSelect';
import { PlusOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Checkbox, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import React, { useEffect } from 'react';
const { TextArea } = Input;
interface IReceiveItemModal {
  isOpen: boolean;
  item: any;
  onSave: (item: any) => void;
  onCancel: () => void;
}

const ReceiveItemModal: React.FC<IReceiveItemModal> = ({ isOpen, item, onSave, onCancel }) => {
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
      title={"Receive Item '" + item?.product?.name + "'"}
      helpLink=""
      width={800}
      isOpen={isOpen}
      handleCancel={onCancel}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: onCancel,
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
        <div style={{ textAlign: 'center' }}>
          {/* <h1>{receiveItemData?.vendorSku}</h1> */}
          <h1>Vendor SKU: test product</h1>
        </div>
        <Row gutter={10}>
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
                <TextArea rows={4} />
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
              <Form.Item label="Discount">
                <Input.Group compact>
                  <Form.Item name="discountType" noStyle>
                    <Select size="small" options={[{ value: '$', label: '$' }]} />
                  </Form.Item>
                  <Form.Item name="discount" noStyle>
                    <Input type="number" value={0.0} />
                  </Form.Item>
                </Input.Group>
              </Form.Item>
            </Form>
          </Col>
          <Col span={9}>
            <Form labelCol={{ span: 10 }} style={{ textAlign: 'right' }}>
              <Form.Item label="Accept">
                <Form.Item>
                  <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                    <Input type="number" value={25} />
                    <span>units</span>
                  </div>
                </Form.Item>
              </Form.Item>
              <Form.Item label="Reject">
                <Form.Item>
                  <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                    <Input type="number" value={0} />
                    <span>units</span>
                  </div>
                </Form.Item>
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
                <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                  <Input type="number" value={25} />
                  <span>units</span>
                </div>
              </Form.Item>
              <Form.Item label="Reject">
                <Form.Item>
                  <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                    <Input type="number" value={0} />
                    <span>units</span>
                  </div>
                </Form.Item>
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
                <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                  <OSelect name="prefix" options={locationOptions} onChange={() => {}} />
                  <PlusOutlined className="setting-button" />
                </div>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </>
    </OModal>
  );
};

export default ReceiveItemModal;
