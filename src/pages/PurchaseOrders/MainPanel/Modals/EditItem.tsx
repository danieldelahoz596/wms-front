import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { Card, Col, DatePicker, Form, InputNumber, Row } from 'antd';
import moment from 'moment';
import React, { useEffect, useMemo } from 'react';

interface IEditItemModal {
  isOpen: boolean;
  item: any;
  onSave: () => void;
  onCancel: () => void;
}

const EditItemModal: React.FC<IEditItemModal> = ({ isOpen, item, onSave, onCancel }) => {
  const { updatePOItem } = useModel('po');
  const [form] = Form.useForm();
  const qty = Form.useWatch('qty', form);
  const billedCost = Form.useWatch('billed_cost', form);
  const landedCost = Form.useWatch('landed_cost', form);
  const discount = Form.useWatch('discount', form);
  const tax = Form.useWatch('tax', form);

  // const buyerOptions: IOSelectOption[] = [
  //   {
  //     text: 'Item 1',
  //     value: '1',
  //   },
  //   {
  //     text: 'Item 2',
  //     value: '2',
  //   },
  // ];

  useEffect(() => {
    if (item) {
      const { billed_on, delivered_on, received_on, ...rest } = item;
      if (billed_on) rest.billed_on = moment(new Date(item.billed_on));
      if (delivered_on) rest.delivered_on = moment(new Date(item.delivered_on));
      if (received_on) rest.received_on = moment(new Date(item.received_on));
      form.setFieldsValue(rest);
    }
  }, [isOpen, form, item]);

  const totalCost = useMemo(
    () => qty * item?.unit_of_measure.qty * item?.product.vendor_cost * (1 + tax / 100.0) + billedCost + landedCost - discount,
    [qty, item, billedCost, tax, landedCost, discount],
  );

  const handleSave = () => {
    form.validateFields().then((values) => {
      updatePOItem({ ...item, ...values, total_cost: totalCost }).then(() => {
        onSave();
      });
    });
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
          <h1>Vendor SKU: {item?.product.sku}</h1>
        </div>
        <Form labelCol={{ span: 14 }} form={form} labelAlign="left">
          <Row gutter={8}>
            <Col span={14}>
              <Card title="Details">
                <Form.Item label="Billed On" name="billed_on">
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Est. Delivery" name="received_on">
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Delivered" name="delivered_on">
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
                {/* <Form.Item label="Landed Cost Payment Date">
                  <DatePicker />
                </Form.Item> */}
                {/* <Form.Item label="Packaging">
                  <Input />
                </Form.Item>
                <Form.Item label="Reference #">
                  <Input />
                </Form.Item> */}
                {/* <Form.Item label="Buyer">
                  <OSelect name="buyer" options={buyerOptions} onChange={() => {}} />
                </Form.Item> */}
                {/* <Form.Item label="Item Memo">
                  <TextArea rows={4} />
                </Form.Item> */}
              </Card>
            </Col>
            <Col span={10}>
              <Card title="Item Totals">
                <Form.Item label="Order Quantity" name="qty">
                  <InputNumber value={25} />
                </Form.Item>
                <Form.Item label="Hold Quantity">
                  <span>0</span>
                </Form.Item>
                <Form.Item label="Unit of Measure">
                  <span>
                    {item?.unit_of_measure.name} (x{item?.unit_of_measure.qty})
                  </span>
                </Form.Item>
                <Form.Item label="Total Unit Quantity">
                  <span>{qty && item && qty * item?.unit_of_measure.qty}</span>
                </Form.Item>
                <Form.Item label="Unit Cost">
                  <span>${item?.product.vendor_cost}</span>
                </Form.Item>
                <Form.Item label="Billed Cost" name="billed_cost">
                  <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Landed Cost" name="landed_cost">
                  <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Discount" name="discount">
                  <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="Item Tax" name="tax">
                  <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <hr />
                <Form.Item label="Total Cost">
                  <span>${totalCost}</span>
                </Form.Item>
              </Card>
            </Col>
          </Row>
        </Form>
      </>
    </OModal>
  );
};

export default EditItemModal;
