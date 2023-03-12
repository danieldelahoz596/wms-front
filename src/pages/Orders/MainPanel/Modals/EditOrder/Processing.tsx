import { CaretDownOutlined, ToolFilled } from '@ant-design/icons';
import { Row, Col, Select, Form, Input, InputNumber, Checkbox, Card } from 'antd';

const Processing: React.FC = () => {
  // const { editableOrder } = useModel('order');
  const [form] = Form.useForm();

  // useEffect(() => {
  //   form.setFieldsValue({
  //     order_number: editableOrder?.order_number,
  //     labels: editableOrder?.labels,
  //     order_date: moment(new Date(editableOrder?.order_date)),
  //     order_paid: moment(new Date(editableOrder?.order_paid)),
  //     ship_by: moment(new Date(editableOrder?.ship_by)),
  //     deliver_by: moment(new Date(editableOrder?.deliver_by)),
  //     recipient: editableOrder?.recipient,
  //   });
  // }, [editableOrder, form]);

  return (
    <Form form={form} labelCol={{ span: 6 }} labelAlign="left">
      <Row gutter={20}>
        <Col span={12}>
          <Card
            title={
              <div>
                Shipping
                <span style={{ color: 'blue', marginLeft: 10 }}>
                  {'('}
                  <ToolFilled />
                  <span
                    style={{
                      fontSize: 10,
                      marginLeft: 3,
                      borderBottom: 1,
                      borderBottomStyle: 'solid',
                    }}
                  >
                    {'Presets'}
                  </span>
                  <CaretDownOutlined style={{ color: 'gray' }} />
                  {')'}
                </span>
              </div>
            }
          >
            <p>Request:</p>
            <Form.Item label="Provider">
              <Select options={[{ value: 'ups', label: 'UPS Crucial US' }]} />
            </Form.Item>
            <Form.Item label="Service">
              <Select options={[{ value: 'ups', label: 'UPS Ground' }]} />
            </Form.Item>
            <Form.Item label="Package">
              <Select options={[{ value: 'my', label: 'My Packaging' }]} />
            </Form.Item>
            <Form.Item label="Confirm">
              <Select
                options={[
                  { value: 'no', label: 'No Confirmation' },
                  { value: 'delivery', label: 'Delivery Confirmation' },
                  { value: 'signature', label: 'Signature Confirmation' },
                  { value: 'adult', label: 'Adult Signature Confirmation' },
                  { value: 'direct', label: 'Direct Signature Confirmation' },
                ]}
              />
            </Form.Item>
            <Form.Item label="Insurance">
              <Select
                options={[
                  { value: 'carrier', label: 'Carrier Insurance' },
                  { value: 'no', label: 'No Insurance Provider' },
                  { value: 'other', label: 'Other (External)' },
                ]}
              />
            </Form.Item>
            <Form.Item label="Insured Value">
              <Input />
            </Form.Item>
          </Card>

          <Card title="Measurements">
            <Form.Item label="Weight" className="custom-form-item">
              <Input.Group compact>
                <Form.Item label="lbs." name="lbs" colon={false} labelCol={{ offset: 1 }} style={{ width: '50%' }}>
                  <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="oz" name="oz" colon={false} labelCol={{ offset: 1 }} style={{ width: '50%' }}>
                  <InputNumber style={{ width: '100%' }} />
                </Form.Item>
              </Input.Group>
            </Form.Item>
            <Form.Item label="Dimensions (inches)" className="custom-form-item">
              <Input.Group compact>
                <Form.Item label="X" name="height" style={{ width: '33%', margin: 0 }} colon={false} labelCol={{ offset: 1 }}>
                  <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label="X" name="width" style={{ width: '33%', margin: 0 }} colon={false} labelCol={{ offset: 1 }}>
                  <InputNumber style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item name="length" style={{ width: '33%', margin: 0 }} colon={false} labelCol={{ offset: 1 }}>
                  <InputNumber style={{ width: '100%' }} />
                </Form.Item>
              </Input.Group>
            </Form.Item>
          </Card>

          <Card
            title={
              <>
                <Checkbox /> Contains Dry Ice <a>(FedEx/UPS)</a>
              </>
            }
          >
            <Form.Item label="Dry Ice Weight" />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Options">
            <Form.Item name="options">
              <Checkbox value="A" style={{ lineHeight: '32px' }}>
                Do not prepay postage. (Endicia)
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Checkbox value="B" style={{ lineHeight: '32px' }} disabled>
                Print postage on the shipping label.
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Checkbox value="C" style={{ lineHeight: '32px' }}>
                This order is non-machinable.
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Checkbox value="D" style={{ lineHeight: '32px' }}>
                Saturday delivery.
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Checkbox value="E" style={{ lineHeight: '32px' }}>
                Driver may release without signature. (UPS)
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Checkbox value="F" style={{ lineHeight: '32px' }}>
                Include a return label with outgoing shipping label.
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Checkbox value="F" style={{ lineHeight: '32px' }}>
                Order includes alcohol. (FedEx)
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Checkbox value="F" style={{ lineHeight: '32px' }}>
                Do not update channel when shipped.
              </Checkbox>
            </Form.Item>
          </Card>

          <Card
            title={
              <>
                Shipping Charges <a>(FedEx/UPS/DHL Express)</a>
              </>
            }
          >
            <Form.Item label="Bill To">
              <Select options={[{ value: 'my', label: 'My Account' }]} />
            </Form.Item>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};

export default Processing;
