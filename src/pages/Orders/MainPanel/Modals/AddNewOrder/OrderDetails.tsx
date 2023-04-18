import { OInput } from '@/components/Globals/OInput';
import PaymentTerm from '@/components/PaymentTerm';
import { Card, Col, Form, Row, Input, DatePicker, InputNumber } from 'antd';

const { TextArea } = Input;

interface IOrderDetails {
  form: any;
}
const formInputs = [
  {
    type: 'text',
    name: 'order',
    label: 'Order #',
    placeholder: 'Required',
  },
  [
    {
      type: 'date',
      name: 'order_date',
      label: 'Order Date',
    },
    {
      type: 'date',
      name: 'paidOn',
      label: 'Paid On',
    },
  ],
  [
    {
      type: 'date',
      name: 'shipBy',
      label: 'Ship By',
    },
    {
      type: 'date',
      name: 'deliverBy',
      label: 'Deliver By',
    },
  ],
  {
    type: 'select',
    name: 'paymentType',
    label: 'Payment Type',
    placeholder: 'Select..',
    options: [{ key: 'credit', value: 'Credit' }],
    render: (inputField: any) => <PaymentTerm inputField={inputField} />,
  },
  [
    [
      {
        type: 'text',
        name: 'amountPaid',
        label: 'Amount Paid',
      },
      {
        type: 'text',
        name: 'discount',
        label: 'Discount',
      },
      {
        type: 'text',
        name: 'shippingPaid',
        label: 'Shipping Paid',
      },
      {
        type: 'text',
        name: 'taxAmount',
        label: 'Tax Amount',
      },
    ],
    [
      {
        type: 'textarea',
        name: 'internalNotes',
        label: 'Internal Notes',
      },
    ],
  ],
];

const OrderDetails: React.FC<IOrderDetails> = ({ form }) => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <Card title="ORDER DETAILS">
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        form={form}
      >
        <Form.Item label="Channel">
          <div>Manual Orders</div>
        </Form.Item>
        {formInputs.map((item, index) =>
          Array.isArray(item) ? (
            Array.isArray(item[0]) ? (
              <Row gutter={12} key={index}>
                {item.map((group, groupIndex) => (
                  <Col span={groupIndex !== 0 ? 10 : 14} key={groupIndex}>
                    {group.map((groupInput, groupInputIndex) => (
                      <>
                        {groupIndex === 0 && (
                          <Form.Item
                            key={groupInputIndex}
                            label={groupInput.label}
                            name={groupInput.name}
                            labelCol={{ span: 11 }}
                          >
                            <OInput type={groupInput.type} placeholder={groupInput.placeholder} />
                          </Form.Item>
                        )}
                        {groupIndex !== 0 && (
                          <Form.Item
                            key={groupInputIndex}
                            label={groupInput.label}
                            name={groupInput.name}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                          >
                            <OInput type={groupInput.type} placeholder={groupInput.placeholder} />
                          </Form.Item>
                        )}
                      </>
                    ))}
                  </Col>
                ))}
              </Row>
            ) : (
              <Form.Item key={`item1-${index}`} label=" " colon={false}>
                {item.map((groupItem, groupIndex) => (
                  <Form.Item key={`groupItem-${groupIndex}`} style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
                    <div>{groupItem.label}:</div>
                    <OInput type={groupItem.type} placeholder={groupItem.placeholder} />
                  </Form.Item>
                ))}
              </Form.Item>
            )
          ) : (
            <Form.Item key={`item-${index}`} label={item.label} name={item.name} style={{ justifyContent: 'flex-end' }}>
              <OInput {...item} />
            </Form.Item>
          ),
        )}
        <Form.Item label="Order #">
          <Input size="small" />
        </Form.Item>
        <Form.Item label=" " colon={false}>
          <Row gutter={10}>
            <Col span={12}>
              <Form.Item label="Order Date" labelCol={{ span: 24 }}>
                <DatePicker style={{ width: '100%' }} size="small" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Paid On" labelCol={{ span: 24 }}>
                <DatePicker style={{ width: '100%' }} size="small" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Ship By" labelCol={{ span: 24 }}>
                <DatePicker style={{ width: '100%' }} size="small" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Deliver By" labelCol={{ span: 24 }}>
                <DatePicker style={{ width: '100%' }} size="small" />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        <Row gutter={5}>
          <Col span={16}>
            <Form.Item labelCol={{ span: 9 }} label="Amount Paid">
              <InputNumber size="small" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item labelCol={{ span: 9 }} label="Discount">
              <InputNumber size="small" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item labelCol={{ span: 9 }} label="Shipping Paid">
              <InputNumber size="small" style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item labelCol={{ span: 9 }} label="Tax Amount">
              <InputNumber size="small" style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item labelCol={{ span: 24 }} label="Internal Notes">
              <TextArea style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default OrderDetails;
