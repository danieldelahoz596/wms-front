import { OButton } from '@/components/Globals/OButton';
import { useModel } from '@umijs/max';
import { Button, Card, Col, Form, Input, Row, Space } from 'antd';
import { useEffect } from 'react';

const RightPanel: React.FC = () => {
  const { selectedCustomer, handleUpdateCustomer, handleDeleteCustomer } = useModel('customer');

  const [form] = Form.useForm();

  const handleUpdate = (values) => {
    handleUpdateCustomer(selectedCustomer.id, values);
  };

  useEffect(() => {
    if (selectedCustomer) {
      form.setFieldsValue(selectedCustomer);
    }
  }, [form, selectedCustomer]);

  return selectedCustomer ? (
    <Row>
      <Col span={24}>
        <Card
          size="small"
          title={
            <h3
              style={{
                fontSize: '1rem',
                textTransform: 'uppercase',
                fontWeight: '700',
                color: '#A2A2A2',
              }}
            >
              {selectedCustomer?.name}
            </h3>
          }
        >
          <Space>
            <Form layout="vertical" form={form} onFinish={handleUpdate}>
              <Form.Item name="phonenumber" label={'Phone *'}>
                <Input />
              </Form.Item>
              <Form.Item name="card_number" label={'Card ID Number *'}>
                <Input />
              </Form.Item>
              <Form.Item name="name" label={'Name'}>
                <Input />
              </Form.Item>
              <Form.Item name="address" label={'Address'}>
                <Input />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit">
                  Update
                </Button>{' '}
                <OButton btnText={'Delete'} onClick={handleDeleteCustomer} />
              </Form.Item>
            </Form>
          </Space>
        </Card>
      </Col>
    </Row>
  ) : null;
};

export default RightPanel;
