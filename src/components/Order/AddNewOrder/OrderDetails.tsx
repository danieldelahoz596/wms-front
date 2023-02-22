import { OInput } from '@/components/Globals/OInput';
import PaymentTerm from '@/components/PaymentTerm';
import { Card, Col, Form, Row } from 'antd';

interface IOrderDetails {
  form: any;
}

const OrderDetails: React.FC<IOrderDetails> = ({ form }) => {
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
        <Form.Item name="channel" label="Channel">
          <div>Manual Orders</div>
        </Form.Item>
        {formInputs.map((item, index) =>
          Array.isArray(item) ? (
            Array.isArray(item[0]) ? (
              <Row gutter={12} key={index}>
                {item.map((group, groupIndex) => (
                  <Col span={groupIndex !== 0 ? 8 : 16} key={groupIndex}>
                    {group.map((groupInput, groupInputIndex) => (
                      <Row key={groupInputIndex}>
                        <Col span={groupIndex !== 0 ? 24 : 7}>
                          <small>{groupInput.label}:</small>
                        </Col>
                        <Col span={groupIndex !== 0 ? 24 : 15}>
                          <Form.Item name={groupInput.name} wrapperCol={{ span: 24 }}>
                            <OInput type={groupInput.type} placeholder={groupInput.placeholder} />
                          </Form.Item>
                        </Col>
                      </Row>
                    ))}
                  </Col>
                ))}
              </Row>
            ) : (
              <Form.Item>
                {item.map((groupItem, groupIndex) => (
                  <Form.Item key={groupIndex} style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
                    <div>{groupItem.label}:</div>
                    <OInput type={groupItem.type} placeholder={groupItem.placeholder} />
                  </Form.Item>
                ))}
              </Form.Item>
            )
          ) : (
            <Form.Item key={index} label={item.label} name={item.name} style={{ justifyContent: 'flex-end' }}>
              <OInput {...item} />
            </Form.Item>
          ),
        )}
      </Form>
    </Card>
  );
};

export default OrderDetails;
