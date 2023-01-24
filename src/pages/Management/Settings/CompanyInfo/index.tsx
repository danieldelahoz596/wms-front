import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Input, Card, Form, Row, Col, Popconfirm, Checkbox, Select, Image } from 'antd';

export default function () {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Row style={{ width: '100%' }} gutter={20}>
      <Col span={24} style={{ marginLeft: 20, marginTop: 10 }}>
        <Button>History</Button>
      </Col>
      <Col span={15}>
        <Card title="Company Info" style={{ borderRadius: 10, marginLeft: 10, marginTop: 10 }}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label="Company Name" name="username" labelAlign="left" colon={true}>
              <Input />
            </Form.Item>

            <Form.Item label="Company Contact Name" name="username" labelAlign="left" colon={true}>
              <Input />
            </Form.Item>

            <Form.Item label="Phone Number" name="username" labelAlign="left" colon={true}>
              <Input />
            </Form.Item>

            <Form.Item label="Address" name="username" labelAlign="left" colon={true}>
              <Input />
            </Form.Item>

            <Form.Item label="Address 2" name="username" labelAlign="left" colon={true}>
              <Input />
            </Form.Item>

            <Form.Item label="Address 3" name="username" labelAlign="left" colon={true}>
              <Input />
            </Form.Item>

            <Form.Item label="City, State, Zip" name="username" labelAlign="left" colon={true}>
              <Row gutter={5}>
                <Col span={12}>
                  <Input />
                </Col>
                <Col span={6}>
                  <Select defaultValue="lucy" options={[{ value: 'lucy', label: 'Lucy' }]} />
                </Col>
                <Col span={6}>
                  <Input />
                </Col>
              </Row>
            </Form.Item>

            <Form.Item
              label="Country"
              name="username"
              labelAlign="left"
              colon={true}
              style={{ flexDirection: 'column' }}
            >
              <Input />
            </Form.Item>

            {/* Company Logo */}
            <h3>Company Logo</h3>
            <hr />

            <Row>
              <Image
                width={200}
                height={200}
                preview={false}
                placeholder={<div style={{ fontSize: 30 }}>SKUBANA</div>}
              />
              <Col style={{ marginLeft: 20 }}>
                <Row align="middle" gutter={10}>
                  <Col span={24}>Image File Path:</Col>
                  <Col span={18}>
                    <Input size="small" />
                  </Col>
                  <Col span={6}>
                    <Button>SELECT...</Button>
                  </Col>
                  <Col style={{ marginTop: 20 }}>
                    <Button>DELETE LOGO</Button>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* Order Settings */}
            <h3>Order Settings</h3>
            <hr />

            <Form.Item
              name="remember"
              valuePropName="checked"
              label="Prevent the editing of partially picked orders"
              labelAlign="left"
            >
              <Checkbox />
            </Form.Item>

            {/* Purchase Order Settings */}
            <h3>Purchase Order Settings</h3>
            <hr />
            <Form.Item label="PO Number Prefix: " name="username" labelAlign="left">
              <Input value="PO12" />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              label="Auto PO Generation?"
              labelAlign="left"
            >
              <Checkbox />
              <QuestionCircleOutlined style={{ color: '#A6AEF4', fontSize: 18, marginLeft: 5 }} />
            </Form.Item>

            {/* Product Settings */}
            <h3>Product Settings</h3>
            <hr />

            <Form.Item
              name="remember"
              valuePropName="checked"
              label="Automatically update product weight and dimensions from shipped orders?"
              labelAlign="left"
              labelCol={{ span: 15 }}
            >
              <Checkbox />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              label="Allow Default FBA Box Content Measurements?"
              labelAlign="left"
            >
              <Checkbox />
            </Form.Item>

            {/* Inventory Settings */}
            <h3>Inventory Settings</h3>
            <hr />

            <Form.Item
              name="remember"
              valuePropName="checked"
              label="Inventory Update?"
              labelAlign="left"
            >
              <Checkbox />
              <QuestionCircleOutlined style={{ color: '#A6AEF4', fontSize: 18, marginLeft: 5 }} />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              label="Use Component Inventory Across Warehouses?"
              labelAlign="left"
            >
              <Checkbox />
              <QuestionCircleOutlined style={{ color: '#A6AEF4', fontSize: 18, marginLeft: 5 }} />
            </Form.Item>

            <Form.Item
              label="Auto Reorder Sales Days Back Default: "
              name="username"
              labelAlign="left"
            >
              <Row align="middle">
                <Col span={6}>
                  <Input value="180" />
                </Col>
                <Col span={18}>
                  <span style={{ marginLeft: 5 }}>day(s)</span>
                  <QuestionCircleOutlined
                    style={{ color: '#A6AEF4', fontSize: 18, marginLeft: 5 }}
                  />
                </Col>
              </Row>
            </Form.Item>

            <Form.Item
              label="Auto Reorder Days In Stock Default: "
              name="username"
              labelAlign="left"
            >
              <Row align="middle">
                <Col span={6}>
                  <Input value="30" />
                </Col>
                <Col span={18}>
                  <span style={{ marginLeft: 5 }}>day(s)</span>
                  <QuestionCircleOutlined
                    style={{ color: '#A6AEF4', fontSize: 18, marginLeft: 5 }}
                  />
                </Col>
              </Row>
            </Form.Item>

            <Form.Item
              label="Auto Reorder Growth Percentage Default: "
              name="username"
              labelAlign="left"
            >
              <Row align="middle">
                <Col span={6}>
                  <Input value="0.0" />
                </Col>
                <Col span={18}>
                  <span style={{ marginLeft: 5 }}>%</span>
                  <QuestionCircleOutlined
                    style={{ color: '#A6AEF4', fontSize: 18, marginLeft: 5 }}
                  />
                </Col>
              </Row>
            </Form.Item>

            <Form.Item
              label="Auto Reorder Lead Days Buffer Default: "
              name="username"
              labelAlign="left"
            >
              <Row align="middle">
                <Col span={6}>
                  <Input value="5" />
                </Col>
                <Col span={18}>
                  <span style={{ marginLeft: 5 }}>day(s)</span>
                  <QuestionCircleOutlined
                    style={{ color: '#A6AEF4', fontSize: 18, marginLeft: 5 }}
                  />
                </Col>
              </Row>
            </Form.Item>

            {/* Inventory Value Reconciliation Settings */}
            <h3>Inventory Value Reconciliation Settings</h3>
            <hr />

            <Form.Item
              name="remember"
              valuePropName="checked"
              label="Choose from all Vendors for reconciliation?"
              labelAlign="left"
            >
              <Checkbox />
              <QuestionCircleOutlined style={{ color: '#A6AEF4', fontSize: 18, marginLeft: 5 }} />
            </Form.Item>

            {/* Returns Settings */}
            <h3>Returns Settings</h3>
            <hr />

            <Form.Item
              name="gender"
              label="Automated Returns Receiving Warehouse"
              labelAlign="left"
            >
              <Row align="middle">
                <Col span={6}>
                  <Select
                    placeholder="No Overriding Returns Warehouse"
                    options={[
                      { value: 'male', label: 'male' },
                      { value: 'female', label: 'female' },
                      { value: 'other', label: 'other' },
                    ]}
                  />
                </Col>
                <Col span={18}>
                  <QuestionCircleOutlined
                    style={{ color: '#A6AEF4', fontSize: 18, marginLeft: 5 }}
                  />
                </Col>
              </Row>
            </Form.Item>

            <Row justify="end">
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </Row>
          </Form>
        </Card>
      </Col>

      <Col span={9}>
        <Card title="Billing" style={{ borderRadius: 10, marginTop: 10, marginRight: 10 }}>
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
              label="Full Name:"
              labelAlign="left"
              name="full_name"
              rules={[{ required: true, message: 'Please input your Name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email:"
              labelAlign="left"
              name="email"
              rules={[{ required: true, message: 'Please input your Email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Phone Number:"
              name="password"
              labelAlign="left"
              rules={[{ required: true, message: 'Please input your new password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Row justify="end">
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </Row>
          </Form>
        </Card>

        <Card title="Operations" style={{ borderRadius: 10, marginTop: 10, marginRight: 10 }}>
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
              label="Full Name:"
              labelAlign="left"
              name="full_name"
              rules={[{ required: true, message: 'Please input your Name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email:"
              labelAlign="left"
              name="email"
              rules={[{ required: true, message: 'Please input your Email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Phone Number:"
              name="password"
              labelAlign="left"
              rules={[{ required: true, message: 'Please input your new password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Row justify="end">
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </Row>
          </Form>
        </Card>

        <Card title="Technical" style={{ borderRadius: 10, marginTop: 10, marginRight: 10 }}>
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
              label="Full Name:"
              labelAlign="left"
              name="full_name"
              rules={[{ required: true, message: 'Please input your Name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email:"
              labelAlign="left"
              name="email"
              rules={[{ required: true, message: 'Please input your Email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Phone Number:"
              name="password"
              labelAlign="left"
              rules={[{ required: true, message: 'Please input your new password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Row justify="end">
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
