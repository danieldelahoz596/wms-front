import { OButton } from '@/components/Globals/OButton';
import { useModel } from '@umijs/max';
import { Card, Form, Space, Select, Input, DatePicker } from 'antd';
import moment from 'moment';
import React, { useMemo } from 'react';

const SearchByPanel: React.FC = () => {
  const { orderStatusList } = useModel('orderStatus');
  const { warehouseList } = useModel('warehouse');
  const { getOrderList } = useModel('order');
  const [form] = Form.useForm();

  const orderStatusOptions = useMemo(
    () => orderStatusList.map((item) => ({ value: item.id, label: item.name })),
    [orderStatusList],
  );

  const warehouseOptions = useMemo(
    () => [
      { value: 0, label: 'Select ...' },
      ...warehouseList.map((warehouse) => ({ value: warehouse.id, label: warehouse.name })),
    ],
    [warehouseList],
  );

  const handleSearch = () => {
    // form.validateFields().then((values) => setOrderSearchQuery(values));
    form.validateFields().then((values) => {
      if (values.from_order_date) values.from_order_date = moment(values.from_order_date).format('YYYY-MM-DD');
      if (values.to_order_date) values.to_order_date = moment(values.to_order_date).format('YYYY-MM-DD');
      if (values.from_ship_date) values.from_ship_date = moment(values.from_ship_date).format('YYYY-MM-DD');
      if (values.to_ship_date) values.to_ship_date = moment(values.to_ship_date).format('YYYY-MM-DD');

      getOrderList(values);
    });
  };

  const handleClear = () => {
    form.resetFields();
  };

  return (
    <Card>
      <Form layout="vertical" form={form}>
        <Space direction="vertical" size={VERTICAL_SPACE_SIZE}>
          <Form.Item label="Status" name="status">
            <Select options={orderStatusOptions} mode="multiple" placeholder="Select..." />
          </Form.Item>
          <Form.Item label="Order Number" name="order_number">
            <Input placeholder="Number" />
          </Form.Item>
          <Form.Item label="Warehouse" name="warehouse_id">
            <Select options={warehouseOptions} placeholder="Select..." />
          </Form.Item>
          <Form.Item label="Recipient" name="recipient">
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item label="SKU" name="sku">
            <Input placeholder="Master SKU, Listing SKU" />
          </Form.Item>
          <Form.Item label={'Order Date'}>
            <Space size={3} align={'baseline'}>
              <Form.Item name="from_order_date">
                <DatePicker />
              </Form.Item>
              <span>to</span>
              <Form.Item name="to_order_date">
                <DatePicker />
              </Form.Item>
            </Space>
          </Form.Item>
          <Form.Item label={'Ship Date'}>
            <Space size={3} align={'baseline'}>
              <Form.Item name="from_ship_date">
                <DatePicker />
              </Form.Item>
              <span>to</span>
              <Form.Item name="to_ship_date">
                <DatePicker />
              </Form.Item>
            </Space>
          </Form.Item>
        </Space>
        <div className="search-button-row space-between">
          <OButton btnText={'Clear'} onClick={handleClear} />
          <OButton btnText={'Search'} onClick={handleSearch} />
        </div>
      </Form>
    </Card>
  );
};

export default SearchByPanel;
