import { Card, Form, Input, Select } from 'antd';

interface IRecipient {
  form: any;
}

const Recipient: React.FC<IRecipient> = ({ form }) => {
  return (
    <Card title="Recipient">
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        labelAlign="left"
        initialValues={{ remember: true }}
        autoComplete="off"
        form={form}
      >
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input Customer Name' }]}>
          <Input size="small" placeholder="Required" />
        </Form.Item>
        <Form.Item label="Company" name="company">
          <Input size="small" />
        </Form.Item>
        <Form.Item label="Address" name="address1" rules={[{ required: true, message: 'Please input Address' }]}>
          <Input size="small" placeholder="Required" />
        </Form.Item>
        <Form.Item label=" " name="address2" colon={false}>
          <Input size="small" />
        </Form.Item>
        <Form.Item label=" " name="address3" colon={false}>
          <Input size="small" />
        </Form.Item>
        <Form.Item label="City" name="city" rules={[{ required: true, message: 'Please input City' }]}>
          <Input size="small" placeholder="Required" />
        </Form.Item>
        <Form.Item label="State, Zip">
          {/* <Input.Group compact>
          <div style={{ display: 'flex', gap: 10 }}>
            <Form.Item>
              <Input size="small" />
            </Form.Item>
            <Form.Item>
              <Input size="small" />
            </Form.Item>
          </div>
        </Input.Group> */}
          <Form.Item
            style={{ display: 'inline-block', width: 'calc(70% - 4px)' }}
            name="state"
            rules={[{ required: true, message: 'Please input State' }]}
          >
            <Select size="small" />
          </Form.Item>
          <Form.Item
            style={{ display: 'inline-block', width: 'calc(30% - 4px)', margin: '0 0 0 8px' }}
            name="zip"
            rules={[{ required: true, message: 'Please input Zip' }]}
          >
            <Input size="small" placeholder="Required" />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Country" name="country">
          <Select size="small" />
        </Form.Item>
        <Form.Item label="Phone" name="phone">
          <Input size="small" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input size="small" />
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Recipient;
