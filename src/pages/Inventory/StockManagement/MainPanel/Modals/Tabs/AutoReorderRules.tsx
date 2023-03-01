import { QuestionCircleOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Row, Col, Form, Select, InputNumber, Alert, Button } from 'antd';
import { useMemo } from 'react';

const AutoReorderRules: React.FC = () => {
  const { warehouseList } = useModel('warehouse');
  const { vendorList } = useModel('vendor');

  const vendorOptions = useMemo(() => vendorList.map((vendor) => ({ value: vendor.id, label: vendor.name })), [vendorList]);

  const warehouseOptions = useMemo(
    () => warehouseList.map((warehouse) => ({ value: warehouse.id, label: warehouse.name })),
    [warehouseList],
  );

  return (
    <Row gutter={15}>
      <Col span={12}>
        <Form colon={false} labelCol={{ span: 16 }} labelAlign="left">
          <Form.Item
            label={
              <>
                <QuestionCircleOutlined style={{ fontSize: 14, marginRight: 5, color: 'blue' }} />
                Calculate sales velocity based on the last
              </>
            }
          >
            <InputNumber defaultValue={30} /> day(s).
          </Form.Item>
          <Form.Item
            label={
              <>
                <QuestionCircleOutlined style={{ fontSize: 14, marginRight: 5, color: 'blue' }} />
                This product should be in stock for at least
              </>
            }
          >
            <InputNumber defaultValue={30} /> day(s).
          </Form.Item>
          <Form.Item
            label={
              <>
                <QuestionCircleOutlined style={{ fontSize: 14, marginRight: 5, color: 'blue' }} />
                The forecasted growth for this product is
              </>
            }
          >
            <InputNumber defaultValue={10.0} /> %.
          </Form.Item>
          <Form.Item
            label={
              <>
                <QuestionCircleOutlined style={{ fontSize: 14, marginRight: 5, color: 'blue' }} />
                The buffer between reorder and lead time is
              </>
            }
          >
            <InputNumber defaultValue={3} /> day(s).
          </Form.Item>
        </Form>
        <Row style={{ marginTop: 10 }} gutter={10}>
          <Col span={12}>
            <Select options={vendorOptions} style={{ width: '100%' }} />
            <Select options={warehouseOptions} style={{ width: '100%', marginTop: 10 }} />
            <Button style={{ width: '100%', marginTop: 10 }}>Calculate P.O. Estimates</Button>
          </Col>
          <Col span={12}>
            <Alert
              type="info"
              message={
                <Row>
                  <Col span={12} style={{ color: 'gray' }}>
                    <p>Sales Velocity:</p>
                    <p>Min Level:</p>
                    <p>Reorder Qty:</p>
                    <p>Reorder Date:</p>
                    <p>Runout Date:</p>
                  </Col>
                  <Col span={12}>
                    <p>0/day</p>
                    <p>-1</p>
                    <p>-41</p>
                    <p>01/216/2021</p>
                    <p>01/216/2021</p>
                  </Col>
                </Row>
              }
            />
          </Col>
        </Row>
      </Col>{' '}
      <Col span={12}>
        <p>{`If Auto-P.O. functionality is enabled, Skubana will automatically create P.O.'s using the following:`}</p>
        <p>
          <b>Sales Velocity</b> - Average orders per day.
        </p>
        <p>
          <b>Days in Stock</b> - Desired days product must be in stock.
        </p>
        <p>
          <b>Lead Time</b> - Days it takes the product to be delivered.
        </p>
        <p>
          <b>Reorder Buffer</b> - Safety days to order before lead time.
        </p>
        <p>
          <b>Forecasted Growth</b> - Expected % change in velocity.
        </p>
        <p>
          <b>Reorder Quantity</b> = Sales Velocity x (Days in Stock + Lead Time + Reorder Buffer) x (1 + Forecasted Growth) -
          Incoming Units.
        </p>
        <p>
          <b>Minimum Level</b> = Sales Velocity x (Lead Time + Reorder Buffer) x (1 + Forecasted Growth).
        </p>
      </Col>
    </Row>
  );
};

export default AutoReorderRules;
