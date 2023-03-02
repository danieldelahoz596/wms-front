import { useEffect } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Input, Card, Form, Row, Col, Checkbox, Select, Image, Upload } from 'antd';
import { Link } from 'umi';
import { FormattedMessage, useModel } from '@umijs/max';

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
        <Button>
          <FormattedMessage id="component.button.history" />
        </Button>
      </Col>
      <Col span={15}>
        <Card title={<FormattedMessage id="component.card.title.companyInfo" />} style={{ marginLeft: 10, marginTop: 10 }}>
          <Form
            name="company_info"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            labelAlign="left"
          >
            <Form.Item label={<FormattedMessage id="component.form.label.companyName" />} name="username">
              <Input />
            </Form.Item>

            <Form.Item label={<FormattedMessage id="component.form.label.companyContactName" />} name="username">
              <Input />
            </Form.Item>

            <Form.Item label={<FormattedMessage id="component.form.label.phoneNumber" />} name="username">
              <Input />
            </Form.Item>

            <Form.Item label={<FormattedMessage id="component.form.label.address" />} name="username">
              <Input />
            </Form.Item>

            <Form.Item label={<FormattedMessage id="component.form.label.address2" />} name="username">
              <Input />
            </Form.Item>

            <Form.Item label={<FormattedMessage id="component.form.label.address3" />} name="username">
              <Input />
            </Form.Item>

            {/* Company Logo */}
            <h2>{<FormattedMessage id="pages.settings.companyInfo.companyLogo.title" />}</h2>
            <hr />

            <Row>
              <Image
                width={200}
                height={200}
                preview={false}
                placeholder={
                  <div style={{ fontSize: 30 }}>
                    {<FormattedMessage id="pages.settings.companyInfo.companyLogo.placeholder" />}
                  </div>
                }
                src={company?.logo_path}
              />
              <Col style={{ marginLeft: 20 }}>
                <Row align="middle" gutter={10}>
                  <Col span={24}>{<FormattedMessage id="pages.settings.companyInfo.companyLogo.filePath" />}</Col>
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
                      <Button>
                        <FormattedMessage id="component.button.select..." />
                      </Button>
                    </Upload>
                  </Col>
                  <Col style={{ marginTop: 20 }}>
                    <Button onClick={() => deleteLogo()}>
                      <FormattedMessage id="component.button.deleteLogo" />
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* Order Settings */}
            <h2>
              <FormattedMessage id="pages.settings.companyInfo.orderSettings.title" />
            </h2>
            <hr />

            <Form.Item
              name="remember"
              valuePropName="checked"
              label={<FormattedMessage id="component.form.label.preventEditing" />}
            >
              <Checkbox />
            </Form.Item>

            {/* Purchase Order Settings */}
            <h2>
              <FormattedMessage id="pages.settings.companyInfo.purchaseOrderSettings.title" />
            </h2>
            <hr />
            <Form.Item label={<FormattedMessage id="component.form.label.poNumberPrefix" />} name="username">
              <Input value="PO12" />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              label={<FormattedMessage id="component.form.label.autoPoGeneration" />}
            >
              <>
                <Checkbox />
                <Link to="/help/settings/companyinfo/#Product_Settings_Section">
                  <QuestionCircleOutlined style={{ color: '#A6AEF4', fontSize: 18, marginLeft: 5 }} />
                </Link>
              </>
            </Form.Item>

            {/* Product Settings */}
            <h2>
              <FormattedMessage id="pages.settings.companyInfo.productSettings.title" />
            </h2>
            <hr />

            <Form.Item
              name="remember"
              valuePropName="checked"
              label={<FormattedMessage id="component.form.label.automaticallyUpdateProduct" />}
              labelCol={{ span: 15 }}
            >
              <Checkbox />
            </Form.Item>

            {/* Inventory Settings */}
            <h2>
              <FormattedMessage id="pages.settings.companyInfo.inventorySettings.title" />
            </h2>
            <hr />

            <Form.Item
              name="remember"
              valuePropName="checked"
              label={<FormattedMessage id="component.form.label.inventoryUpdate" />}
            >
              <>
                <Checkbox />
                <QuestionCircleOutlined style={{ color: '#A6AEF4', fontSize: 18, marginLeft: 5 }} />
              </>
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              label={<FormattedMessage id="component.form.label.useComponentInventory" />}
            >
              <>
                <Checkbox />
                <QuestionCircleOutlined style={{ color: '#A6AEF4', fontSize: 18, marginLeft: 5 }} />
              </>
            </Form.Item>

            <Form.Item label={<FormattedMessage id="component.form.label.autoReorderSales" />} name="username">
              <Row align="middle">
                <Col span={6}>
                  <Input value="180" />
                </Col>
                <Col span={18}>
                  <span style={{ marginLeft: 5 }}>
                    <FormattedMessage id="component.form.label.autoReorderDays" />
                  </span>
                  <QuestionCircleOutlined style={{ color: '#A6AEF4', fontSize: 18, marginLeft: 5 }} />
                </Col>
              </Row>
            </Form.Item>

            <Form.Item label={<FormattedMessage id="component.form.label.autoReorderDays" />} name="username">
              <Row align="middle">
                <Col span={6}>
                  <Input value="30" />
                </Col>
                <Col span={18}>
                  <span style={{ marginLeft: 5 }}>
                    <FormattedMessage id="pages.settings.companyInfo.inventorySettings.days" />
                  </span>
                  <QuestionCircleOutlined style={{ color: '#A6AEF4', fontSize: 18, marginLeft: 5 }} />
                </Col>
              </Row>
            </Form.Item>

            <Form.Item label={<FormattedMessage id="component.form.label.autoReorderGrowth" />} name="username">
              <Row align="middle">
                <Col span={6}>
                  <Input value="0.0" />
                </Col>
                <Col span={18}>
                  <span style={{ marginLeft: 5 }}>%</span>
                  <QuestionCircleOutlined style={{ color: '#A6AEF4', fontSize: 18, marginLeft: 5 }} />
                </Col>
              </Row>
            </Form.Item>

            <Form.Item label={<FormattedMessage id="component.form.label.autoReorderLead" />} name="username">
              <Row align="middle">
                <Col span={6}>
                  <Input value="5" />
                </Col>
                <Col span={18}>
                  <span style={{ marginLeft: 5 }}>
                    <FormattedMessage id="pages.settings.companyInfo.inventorySettings.days" />
                  </span>
                  <QuestionCircleOutlined style={{ color: '#A6AEF4', fontSize: 18, marginLeft: 5 }} />
                </Col>
              </Row>
            </Form.Item>

            {/* Inventory Value Reconciliation Settings */}
            <h2>
              <FormattedMessage id="pages.settings.companyInfo.inventoryValue.title" />
            </h2>
            <hr />

            <Form.Item
              name="remember"
              valuePropName="checked"
              label={<FormattedMessage id="component.form.label.chooseFromAllVendors" />}
            >
              <>
                <Checkbox />
                <QuestionCircleOutlined style={{ color: '#A6AEF4', fontSize: 18, marginLeft: 5 }} />
              </>
            </Form.Item>

            {/* Returns Settings */}
            <h2>
              <FormattedMessage id="pages.settings.companyInfo.returnSettings.title" />
            </h2>
            <hr />

            <Form.Item name="gender" label={<FormattedMessage id="component.form.label.automatedReturns" />}>
              <Row align="middle">
                <Col span={6}>
                  <Select
                    placeholder={<FormattedMessage id="pages.settings.companyInfo.returnSettings.placeholder" />}
                    size="small"
                    options={[
                      { value: 'male', label: 'male' },
                      { value: 'female', label: 'female' },
                      { value: 'other', label: 'other' },
                    ]}
                  />
                </Col>
                <Col span={18}>
                  <QuestionCircleOutlined style={{ color: '#A6AEF4', fontSize: 18, marginLeft: 5 }} />
                </Col>
              </Row>
            </Form.Item>

            <Row justify="end">
              <Button htmlType="submit">
                <FormattedMessage id="component.button.update" />
              </Button>
            </Row>
          </Form>
        </Card>
      </Col>

      <Col span={9}>
        <Card title={<FormattedMessage id="component.card.title.billing" />} style={{ marginTop: 10, marginRight: 10 }}>
          <Form
            name="billing"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            labelAlign="left"
          >
            <Form.Item
              label={<FormattedMessage id="component.form.label.fullName" />}
              name="full_name"
              rules={[{ required: true, message: <FormattedMessage id="component.form.label.fullName.required" /> }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<FormattedMessage id="component.form.label.email" />}
              name="email"
              rules={[{ required: true, message: <FormattedMessage id="component.form.label.email.required" /> }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<FormattedMessage id="component.form.label.phoneNumber" />}
              name="password"
              rules={[{ required: true, message: <FormattedMessage id="component.form.label.phoneNumber.required" /> }]}
            >
              <Input.Password />
            </Form.Item>

            <Row justify="end">
              <Button htmlType="submit">
                <FormattedMessage id="component.button.update" />
              </Button>
            </Row>
          </Form>
        </Card>

        <Card title={<FormattedMessage id="component.card.title.operations" />} style={{ marginTop: 10, marginRight: 10 }}>
          <Form
            name="operations"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            labelAlign="left"
          >
            <Form.Item
              label={<FormattedMessage id="component.form.label.fullName" />}
              name="full_name"
              rules={[{ required: true, message: <FormattedMessage id="component.form.label.fullName.required" /> }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<FormattedMessage id="component.form.label.email" />}
              name="email"
              rules={[{ required: true, message: <FormattedMessage id="component.form.label.email.required" /> }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<FormattedMessage id="component.form.label.phoneNumber" />}
              name="password"
              rules={[{ required: true, message: <FormattedMessage id="component.form.label.phoneNumber.required" /> }]}
            >
              <Input.Password />
            </Form.Item>

            <Row justify="end">
              <Button htmlType="submit">
                <FormattedMessage id="component.button.update" />
              </Button>
            </Row>
          </Form>
        </Card>

        <Card title={<FormattedMessage id="component.card.title.technical" />} style={{ marginTop: 10, marginRight: 10 }}>
          <Form
            name="technical"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            labelAlign="left"
          >
            <Form.Item
              label={<FormattedMessage id="component.form.label.fullName" />}
              name="full_name"
              rules={[{ required: true, message: <FormattedMessage id="component.form.label.fullName.required" /> }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<FormattedMessage id="component.form.label.email" />}
              name="email"
              rules={[{ required: true, message: <FormattedMessage id="component.form.label.email.required" /> }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<FormattedMessage id="component.form.label.phoneNumber" />}
              name="password"
              rules={[{ required: true, message: <FormattedMessage id="component.form.label.phoneNumber.required" /> }]}
            >
              <Input.Password />
            </Form.Item>

            <Row justify="end">
              <Button htmlType="submit">
                <FormattedMessage id="component.button.update" />
              </Button>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
