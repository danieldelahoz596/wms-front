import { useModel } from '@umijs/max';
import { Card, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import moment from 'moment';
import { useEffect } from 'react';

const BasicInfo: React.FC = () => {
  const { editableOrder } = useModel('order');
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      order_number: editableOrder?.order_number,
      labels: editableOrder?.labels,
      order_date: moment(new Date(editableOrder?.order_date)),
      order_paid: moment(new Date(editableOrder?.order_paid)),
      ship_by: moment(new Date(editableOrder?.ship_by)),
      deliver_by: moment(new Date(editableOrder?.deliver_by)),
      recipient: editableOrder?.recipient,
    });
  }, [editableOrder, form]);

  return (
    <Form form={form}>
      <Row gutter={10}>
        <Col span={12}>
          <Card title="Recipient">
            <Form.Item label="Name" name={['recipient', 'name']} labelCol={{ span: 6 }}>
              <Input />
            </Form.Item>
            <Form.Item label="Company" name={['recipient', 'company']} labelCol={{ span: 6 }}>
              <Input />
            </Form.Item>
            <Form.Item label="Address" name={['recipient', 'address1']} labelCol={{ span: 6 }}>
              <Input />
            </Form.Item>
            <Form.Item label=" " name={['recipient', 'address2']} labelCol={{ span: 6 }} colon={false}>
              <Input />
            </Form.Item>
            <Form.Item label=" " name={['recipient', 'address3']} labelCol={{ span: 6 }} colon={false}>
              <Input />
            </Form.Item>
            <Form.Item label="City" name={['recipient', 'city']} labelCol={{ span: 6 }}>
              <Input />
            </Form.Item>
            <Form.Item label="State" name={['recipient', 'state']} labelCol={{ span: 6 }}>
              <Input />
            </Form.Item>
            <Form.Item label="Country" name={['recipient', 'country']} labelCol={{ span: 6 }}>
              <Input />
            </Form.Item>
            <Form.Item label="Phone Number" name={['recipient', 'phone']} labelCol={{ span: 6 }}>
              <Input />
            </Form.Item>
            <Form.Item label="Email" name={['recipient', 'email']} labelCol={{ span: 6 }}>
              <Input />
            </Form.Item>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Order Details">
            <Form.Item label="Order Number" name="order_number" labelCol={{ span: 6 }}>
              <Input />
            </Form.Item>
            <Form.Item label="Labels" name="labels" labelCol={{ span: 6 }}>
              <Select size="small" />
            </Form.Item>
            <Form.Item label="Order Date" name="order_date" labelCol={{ span: 6 }}>
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Order Paid" name="order_paid" labelCol={{ span: 6 }}>
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Ship By" name="ship_by" labelCol={{ span: 6 }}>
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Deliver By" name="deliver_by" labelCol={{ span: 6 }}>
              <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" style={{ width: '100%' }} />
            </Form.Item>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};

export default BasicInfo;
