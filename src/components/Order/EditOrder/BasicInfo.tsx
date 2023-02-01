import { useModel } from '@umijs/max';
import { Row, Col, Select, Button, Checkbox, Form, Input, DatePicker } from 'antd';
import moment from 'moment';
import { useState, useMemo, useEffect } from 'react';

const BasicInfo: React.FC = () => {
  const { editableOrder } = useModel('order');
  const [form] = Form.useForm();
  console.log('editableOrder: ', editableOrder);

  useEffect(() => {
    form.setFieldsValue({
      order_number: editableOrder?.orderNumber,
      labels: editableOrder?.labels,
      order_date: moment(new Date(editableOrder?.orderDate)),
      order_paid: moment(new Date(editableOrder?.datePaid)),
    });
  }, [editableOrder, form]);

  return (
    <Form form={form}>
      <Form.Item label="Order Number" name="order_number" labelCol={{ span: 4 }}>
        <Input />
      </Form.Item>
      <Form.Item label="Labels" name="labels" labelCol={{ span: 4 }}>
        <Select />
      </Form.Item>
      <Form.Item label="Order Date" name="order_date" labelCol={{ span: 4 }}>
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Order Paid" name="order_paid" labelCol={{ span: 4 }}>
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" style={{ width: '100%' }} />
      </Form.Item>
    </Form>
  );
};

export default BasicInfo;
