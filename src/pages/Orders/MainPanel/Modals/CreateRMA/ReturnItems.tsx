import { CloseOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Select, InputNumber, Form, Row, Col } from 'antd';
import { useMemo } from 'react';

interface IReturnItemsTab {
  form: any;
}

const ReturnItemsTab: React.FC<IReturnItemsTab> = ({ form }) => {
  const { productList } = useModel('product');

  const productOptions = useMemo(() => productList.map((product) => ({ value: product.id, label: product.name })), [productList]);

  return (
    <Form form={form} labelCol={{ span: 8 }}>
      <Form.List name="items">
        {(fields, { add, remove }) => (
          <>
            <Row justify="center" style={{ marginBottom: 2, paddingBottom: 4, borderBottom: '2px dashed blue' }}>
              <Col>
                <Select
                  onChange={(value) => {
                    const product = productList.find((item) => item.id === value);
                    add({ product: product.name });
                  }}
                  placeholder="Add an ordered product to the RMA list..."
                  options={productOptions}
                  style={{ width: 400 }}
                />
              </Col>
            </Row>

            <Row>
              <Row style={{ width: '100%' }} gutter={2}>
                <Col span={3}>
                  <div style={{ width: '100%', height: 20, backgroundColor: 'lightgray' }} />
                </Col>
                <Col span={12}>
                  <div style={{ width: '100%', height: 20, color: 'blue', backgroundColor: 'lightgray' }}>RMA Item</div>
                </Col>
                <Col span={9}>
                  <div style={{ width: '100%', height: 20, color: 'blue', backgroundColor: 'lightgray' }}>Details</div>
                </Col>
              </Row>

              {fields.map((field) => (
                <Row key={field.name} style={{ width: '100%' }}>
                  <Col span={3}>
                    <CloseOutlined style={{ padding: 10, border: '1px solid black' }} onClick={() => remove(field.name)} />
                  </Col>
                  <Col span={12}>
                    <Form.Item name={[field.name, 'product']}>
                      <span>{form.getFieldValue(['items', field.name, 'product'])}</span>
                      {/* <Input /> */}
                    </Form.Item>
                    <Row>
                      <Col span={12}>
                        <Form.Item {...field} label="Qty. Returned" name={[field.name, 'qty']} labelCol={{ span: 12 }}>
                          <InputNumber />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item {...field} label="Loss to Seller" name={[field.name, 'seller']} labelCol={{ span: 12 }}>
                          $<InputNumber />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={9}>
                    <Form.Item {...field} label="Type" name={[field.name, 'type']}>
                      <Select options={[{ value: 'refund', label: 'Retund' }]} />
                    </Form.Item>
                    <Form.Item {...field} label="Reason" name={[field.name, 'reason']}>
                      <Select options={[{ value: 'customer', label: 'Customer Satisfact...' }]} />
                    </Form.Item>
                    <Form.Item {...field} label="Action" name={[field.name, 'action']}>
                      <Select options={[{ value: 'reinsert', label: 'Reinsert' }]} />
                    </Form.Item>
                  </Col>
                </Row>
              ))}
            </Row>
          </>
        )}
      </Form.List>
    </Form>
  );
};

export default ReturnItemsTab;
