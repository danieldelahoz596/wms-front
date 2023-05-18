import { PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, Col, Form, Row, Input, DatePicker, InputNumber, Select } from 'antd';
import { useMemo } from 'react';

const { TextArea } = Input;

interface IOrderDetails {
  form: any;
}

const OrderDetails: React.FC<IOrderDetails> = ({ form }) => {
  const { paymentTermList } = useModel('paymentTerm');

  const paymentTermOptions = useMemo(
    () => paymentTermList?.map((item) => ({ value: item.id, label: item.name })),
    [paymentTermList],
  );

  // const onFinish = (values: any) => {
  //   console.log('Success:', values);
  // };

  return (
    <Card title="ORDER DETAILS">
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        // initialValues={{ remember: true }}
        // onFinish={onFinish}
        // autoComplete="off"
        form={form}
      >
        <Form.Item label="Channel">
          <div>Manual Orders</div>
        </Form.Item>
        {/* <Form.Item label="Order #" name="order_number">
          <Input size="small" />
        </Form.Item> */}
        <Form.Item label=" " colon={false}>
          <Row gutter={10}>
            <Col span={12}>
              <Form.Item label="Order Date" labelCol={{ span: 24 }} name="order_date">
                <DatePicker style={{ width: '100%' }} size="small" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Paid On" labelCol={{ span: 24 }} name="paid_on">
                <DatePicker style={{ width: '100%' }} size="small" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Ship By" labelCol={{ span: 24 }} name="ship_by">
                <DatePicker style={{ width: '100%' }} size="small" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Deliver By" labelCol={{ span: 24 }} name="deliver_by">
                <DatePicker style={{ width: '100%' }} size="small" />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item label="Payment Type">
          <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
            <div style={{ flex: '1' }}>
              <Form.Item name="payment_type_id">
                <Select options={[{ value: 0, label: 'No Selet' }, ...paymentTermOptions]} size="small" />
              </Form.Item>
            </div>
            <PlusOutlined
              style={{
                color: 'blue',
                cursor: 'pointer',
                padding: '0.5rem',
                border: '1px solid blue',
              }}
            />
            <SettingOutlined
              style={{
                color: 'blue',
                cursor: 'pointer',
                padding: '0.5rem',
                border: '1px solid blue',
              }}
            />
          </div>
        </Form.Item>
        <Row gutter={10}>
          <Col span={16}>
            <Form.Item labelCol={{ span: 9 }} label="Amount Paid" name="amount_paid">
              <InputNumber size="small" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item labelCol={{ span: 9 }} label="Discount" name="discount">
              <InputNumber size="small" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} label="Internal Notes" name="note">
              <TextArea maxLength={100} rows={5} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default OrderDetails;
