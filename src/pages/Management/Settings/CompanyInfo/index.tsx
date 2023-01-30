import { useEffect } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Input, Card, Form, Row, Col, Checkbox, Select, Image, Upload } from 'antd';
import { Link } from 'umi';
import { useModel } from '@umijs/max';

export default function () {
  const { company, getCompany, uploadLogo, deleteLogo } = useModel('company');

  useEffect(() => {
    getCompany();
  }, []);

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
        <Card title="Company Info" style={{ marginLeft: 10, marginTop: 10 }}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            labelAlign="left"
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
            <h2>Company Logo</h2>
            <hr />

            <Row>
              <Image
                width={200}
                height={200}
                preview={false}
                placeholder={<div style={{ fontSize: 30 }}>SKUBANA</div>}
                src={company?.logo_path}
              />
              <Col style={{ marginLeft: 20 }}>
                <Row align="middle" gutter={10}>
                  <Col span={24}>Image File Path:</Col>
                  <Col span={18}>
                    <Input size="small" />
                  </Col>
                  <Col span={6}>
                    <Upload
                      beforeUpload={(file) => {
                        const formData = new FormData();

                        formData.append('logo', file, 'logo');

                        uploadLogo(formData);
                      }}
                      itemRender={() => <></>}
                    >
                      <Button>SELECT...</Button>
                    </Upload>
                  </Col>
                  <Col style={{ marginTop: 20 }}>
                    <Button onClick={() => deleteLogo()}>DELETE LOGO</Button>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* Order Settings */}
            <h2>Order Settings</h2>
            <hr />

            <Form.Item
              name="remember"
              valuePropName="checked"
              label="Prevent the editing of partially picked orders"
            >
              <Checkbox />
            </Form.Item>

            {/* Purchase Order Settings */}
            <h2>Purchase Order Settings</h2>
            <hr />
            <Form.Item label="PO Number Prefix" name="username">
              <Input value="PO12" />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked" label="Auto PO Generation?">
              <>
                <Checkbox />
                <Link to="/help/settings/companyinfo/#Product_Settings_Section">
                  <QuestionCircleOutlined
                    style={{ color: '#A6AEF4', fontSize: 18, marginLeft: 5 }}
                  />
                </Link>
              </>
            </Form.Item>

            {/* Product Settings */}
            <h2>Product Settings</h2>
            <hr />

            <Form.Item
              name="remember"
              valuePropName="checked"
              label="Automatically update product weight and dimensions from shipped orders?"
              labelCol={{ span: 15 }}
            >
              <Checkbox />
            </Form.Item>

            {/* Inventory Settings */}
            <h2>Inventory Settings</h2>
            <hr />

            <Form.Item name="remember" valuePropName="checked" label="Inventory Update?">
              <>
                <Checkbox />
                <QuestionCircleOutlined style={{ color: '#A6AEF4', fontSize: 18, marginLeft: 5 }} />
              </>
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              label="Use Component Inventory Across Warehouses?"
            >
              <>
                <Checkbox />
                <QuestionCircleOutlined style={{ color: '#A6AEF4', fontSize: 18, marginLeft: 5 }} />
              </>
            </Form.Item>

            <Form.Item label="Auto Reorder Sales Days Back Default" name="username">
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

            <Form.Item label="Auto Reorder Days In Stock Default" name="username">
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

            <Form.Item label="Auto Reorder Growth Percentage Default" name="username">
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

            <Form.Item label="Auto Reorder Lead Days Buffer Default" name="username">
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
            <h2>Inventory Value Reconciliation Settings</h2>
            <hr />

            <Form.Item
              name="remember"
              valuePropName="checked"
              label="Choose from all Vendors for reconciliation?"
            >
              <>
                <Checkbox />
                <QuestionCircleOutlined style={{ color: '#A6AEF4', fontSize: 18, marginLeft: 5 }} />
              </>
            </Form.Item>

            {/* Returns Settings */}
            <h2>Returns Settings</h2>
            <hr />

            <Form.Item name="gender" label="Automated Returns Receiving Warehouse">
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
        <Card title="Billing" style={{ marginTop: 10, marginRight: 10 }}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            labelAlign="left"
          >
            <Form.Item
              label="Full Name:"
              name="full_name"
              rules={[{ required: true, message: 'Please input your Name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email:"
              name="email"
              rules={[{ required: true, message: 'Please input your Email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Phone Number:"
              name="password"
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

        <Card title="Operations" style={{ marginTop: 10, marginRight: 10 }}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            labelAlign="left"
          >
            <Form.Item
              label="Full Name:"
              name="full_name"
              rules={[{ required: true, message: 'Please input your Name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email:"
              name="email"
              rules={[{ required: true, message: 'Please input your Email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Phone Number:"
              name="password"
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

        <Card title="Technical" style={{ marginTop: 10, marginRight: 10 }}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            labelAlign="left"
          >
            <Form.Item
              label="Full Name:"
              name="full_name"
              rules={[{ required: true, message: 'Please input your Name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email:"
              name="email"
              rules={[{ required: true, message: 'Please input your Email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Phone Number:"
              name="password"
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
