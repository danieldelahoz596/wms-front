import { Button, Input, Card, Form, Row, Col, Popconfirm, Checkbox, Select } from 'antd';

export default function () {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <div className="w-full flex flex-column">
        <div className="horizon-content">
          <Card title="Company Info" style={{ width: 400 }}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item label="Company Name" name="username">
                <Input />
              </Form.Item>

              <Form.Item label="Company Contact Name" name="username">
                <Input />
              </Form.Item>

              <Form.Item label="Phone Number" name="username">
                <Input />
              </Form.Item>

              <Form.Item label="Address" name="username">
                <Input />
              </Form.Item>

              <Form.Item label="Address 2" name="username">
                <Input />
              </Form.Item>

              <Form.Item label="Address 3" name="username">
                <Input />
              </Form.Item>

              {/* Company Logo */}
              <h3>Company Logo</h3>

              <Form.Item
                label="Company Logo"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              {/* Order Settings */}
              <h3>Order Settings</h3>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Prevent the editing of partially picked orders</Checkbox>
              </Form.Item>

              {/* Purchase Order Settings */}
              <h3>Purchase Order Settings</h3>

              <Form.Item label="PO Number Prefix" name="username">
                <Input value="PO12" />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Auto PO Generation?</Checkbox>???
              </Form.Item>

              {/* Product Settings */}
              <h3>Product Settings</h3>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>
                  Automatically update product weight and dimensions from shipped orders?
                </Checkbox>
              </Form.Item>

              {/* Inventory Settings */}
              <h3>Inventory Settings</h3>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Use Component Inventory Across Warehouses?</Checkbox>???
              </Form.Item>

              <Form.Item label="Auto Reorder Sales Days Back Default" name="username">
                <Input value="180" />
                <span>day(s) ???</span>
              </Form.Item>

              <Form.Item label="Auto Reorder Days In Stock Default" name="username">
                <Input value="30" />
                <span>day(s) ???</span>
              </Form.Item>

              <Form.Item label="Auto Reorder Growth Percentage Default" name="username">
                <Input value="0.0" />
                <span>% ???</span>
              </Form.Item>

              <Form.Item label="Auto Reorder Lead Days Buffer Default" name="username">
                <Input value="5" />
                <span>day(s) ???</span>
              </Form.Item>

              {/* Inventory Value Reconciliation Settings */}
              <h3>Inventory Value Reconciliation Settings</h3>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Choose from all Vendors for reconciliation?</Checkbox>???
              </Form.Item>

              {/* Returns Settings */}
              <h3>Returns Settings</h3>

              <Form.Item name="gender" label="Automated Returns Receiving Warehouse">
                <Select
                  placeholder="No Overriding Returns Warehouse"
                  // onChange={onGenderChange}
                  allowClear
                >
                  <Select.Option value="male">male</Select.Option>
                  <Select.Option value="female">female</Select.Option>
                  <Select.Option value="other">other</Select.Option>
                </Select>
                ???
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 15, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Update
                </Button>
              </Form.Item>
            </Form>
          </Card>

          <div>
            <Card title="Billing" style={{ width: 400 }}>
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Full Name"
                  name="password"
                  rules={[{ required: true, message: 'Please input your current password!' }]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  label="Phone Number"
                  name="password"
                  rules={[{ required: true, message: 'Please input your new password!' }]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Update
                  </Button>
                </Form.Item>
              </Form>
            </Card>

            <Card title="Operations" style={{ width: 400 }}>
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Full Name"
                  name="password"
                  rules={[{ required: true, message: 'Please input your current password!' }]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  label="Phone Number"
                  name="password"
                  rules={[{ required: true, message: 'Please input your new password!' }]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Update
                  </Button>
                </Form.Item>
              </Form>
            </Card>

            <Card title="Technical" style={{ width: 400 }}>
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Full Name"
                  name="password"
                  rules={[{ required: true, message: 'Please input your current password!' }]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  label="Phone Number"
                  name="password"
                  rules={[{ required: true, message: 'Please input your new password!' }]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Update
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
