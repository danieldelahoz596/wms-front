import { OModal } from '@/components/Globals/OModal';
import type { IOSelectOption } from '@/components/Globals/OSelect';
import { OSelect } from '@/components/Globals/OSelect';
import { Card, Col, DatePicker, Form, Input, InputNumber, Row, Select } from 'antd';
import React, { useEffect } from 'react';

const { TextArea } = Input;

interface IEditItemModal {
  isOpen: boolean;
  item: any;
  onSave: (item: any) => void;
  onCancel: () => void;
}

const EditItemModal: React.FC<IEditItemModal> = ({ isOpen, item, onSave, onCancel }) => {
  const [form] = Form.useForm();
  const buyerOptions: IOSelectOption[] = [
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
      title={`Edit Item '${item?.product.name}'`}
      helpLink=""
      width={600}
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
          <h1>Vendor SKU: {item?.product.vendor_skus}</h1>
        </div>
        <Row gutter={8}>
          <Col span={14}>
            <Card title="Details">
              <Form labelCol={{ span: 10 }} labelAlign="left">
                <Form.Item label="Billed On">
                  <Input />
                </Form.Item>
                <Form.Item label="Est. Delivery">
                  <DatePicker />
                </Form.Item>
                <Form.Item label="Delivered">
                  <Input />
                </Form.Item>
                <Form.Item label="Landed Cost Payment Date">
                  <DatePicker />
                </Form.Item>
                <Form.Item label="Packaging">
                  <Input />
                </Form.Item>
                <Form.Item label="Reference #">
                  <Input />
                </Form.Item>
                <Form.Item label="Buyer">
                  <OSelect name="buyer" options={buyerOptions} onChange={() => {}} />
                </Form.Item>
                <Form.Item label="Item Memo">
                  <TextArea rows={4} />
                </Form.Item>
              </Form>
            </Card>
          </Col>
          <Col span={10}>
            <Card title="Item Totals">
              <Form labelCol={{ span: 14 }} form={form} style={{ textAlign: 'right' }}>
                <Form.Item label="Order Quantity" name="quantity">
                  <InputNumber value={25} />
                </Form.Item>
                <Form.Item label="Hold Quantity">
                  <span>0</span>
                </Form.Item>
                <Form.Item label="Unit of Measure">
                  <span>Each (x1)</span>
                </Form.Item>
                <Form.Item label="Total Unit Quantity">
                  <span>25</span>
                </Form.Item>
                <Form.Item label="Unit Cost">
                  <span>$1.00</span>
                </Form.Item>
                <Form.Item label="Billed Cost" name="billedCost">
                  <Input type="number" addonBefore="$" value={1.0} />
                </Form.Item>
                <Form.Item label="Landed Cost" name="landedCost">
                  <Input type="number" addonBefore="$" value={1.0} />
                </Form.Item>
                <Form.Item label="Discount" name="discount" labelCol={{ span: 6 }}>
                  <Input
                    type="number"
                    addonBefore={<Select defaultValue="$" style={{ width: 40 }} options={[{ value: '$', label: '$' }]} />}
                    value={0.0}
                  />
                </Form.Item>
                <Form.Item label="Item Tax" name="tax">
                  <Input value={'10.0'} addonAfter="%" />
                </Form.Item>
                <hr />
                <Form.Item label="Total Cost">
                  <span>$27.50</span>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </>
    </OModal>
  );
};

export default EditItemModal;
