import { CaretDownOutlined, ToolFilled } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Row, Col, Button, Form, Select, Input, InputNumber, Checkbox, Card } from 'antd';
import { useMemo } from 'react';

const { TextArea } = Input;

const ProcessingTab: React.FC = () => {
  const [form] = Form.useForm();
  const { warehouseList } = useModel('warehouse');

  const warehouseOptions = useMemo(
    () => warehouseList.map((warehouse) => ({ value: warehouse.id, label: warehouse.name })),
    [warehouseList],
  );

  return (
    <Form form={form} labelAlign="left" labelCol={{ span: 6 }}>
      <Row justify="end">
        <Col>
          <Form.Item name="includeShipping">
            <Checkbox>This RMA includes a shipping label</Checkbox>
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Card
            title={
              <div>
                Shipping
                <span style={{ color: 'blue', marginLeft: 10 }}>
                  {'('}
                  <ToolFilled style={{ border: 1, borderStyle: 'solid' }} />
                  <span
                    style={{
                      fontSize: 10,
                      marginLeft: 3,
                      borderBottom: 1,
                      borderBottomStyle: 'solid',
                    }}
                  >
                    Presets
                  </span>
                  <CaretDownOutlined style={{ color: 'gray' }} />
                  {')'}
                </span>
              </div>
            }
          >
            <Form.Item label="Provider" name="provider">
              <Select size="small" options={[{ value: 'endicia', label: 'Endicia' }]} />
            </Form.Item>
            <Form.Item label="Service" name="service">
              <Select size="small" options={[{ value: 'usps', label: 'USPS First-Class Mail' }]} />
            </Form.Item>
            <Form.Item label="Package" name="package">
              <Select size="small" options={[{ value: 'my', label: 'My Packaging' }]} />
            </Form.Item>
            <Form.Item label="Confirm" name="confirm">
              <Select size="small" options={[{ value: false, label: 'No Confirmation' }]} />
            </Form.Item>
            <Form.Item label="Insurance" name="insurance">
              <Select size="small" options={[{ value: false, label: 'No Insurance Provider' }]} />
            </Form.Item>
            <Row justify="end">
              <Col>
                <Form.Item label="Insured Value" labelCol={{ span: 12 }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    $<Input size="small" style={{ width: '100%-10' }} />
                  </div>
                </Form.Item>
              </Col>
            </Row>
          </Card>

          <Card title="Measurements" style={{ marginTop: 20 }}>
            <Row>
              <Col span={24}>
                <Form.Item label="Weight" labelCol={{ span: 24 }} className="custom-form-item">
                  <Input.Group compact>
                    <Form.Item label="lbs." name="lb" colon={false} labelCol={{ offset: 1 }} style={{ width: '50%' }}>
                      <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item label="oz." name="oz" colon={false} labelCol={{ offset: 1 }} style={{ width: '50%' }}>
                      <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                  </Input.Group>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Dimensions(inches)" labelCol={{ span: 24 }} className="custom-form-item">
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
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={12}>
          <Card title="RMA Details">
            <Form.Item label="Return To">
              <Select options={warehouseOptions} />
            </Form.Item>
            <Form.Item label="Issue Date">
              <Input />
            </Form.Item>
            <Form.Item label="RMA Number">
              <Input />
            </Form.Item>
            <Form.Item label={<Checkbox>Email Label?</Checkbox>}>
              <Input />
            </Form.Item>
            <Form.Item label="Internal Notes">
              <TextArea />
            </Form.Item>
          </Card>

          <Card style={{ marginTop: 40 }}>
            <div
              style={{
                backgroundColor: 'gray',
                width: '100%',
                height: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Button>Calculate Shipping Rate</Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};

export default ProcessingTab;
