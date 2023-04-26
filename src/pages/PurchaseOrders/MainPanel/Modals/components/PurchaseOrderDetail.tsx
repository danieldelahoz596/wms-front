import { QuestionCircleOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, DatePicker, Form, Input, Select } from 'antd';
import Checkbox from 'antd/es/checkbox';
import moment from 'moment';
import React, { useEffect, useMemo } from 'react';

interface IPurchaseOrderDetail {
  selectedVendor?: string;
  form: any;
}

const PurchaseOrderDetail: React.FC<IPurchaseOrderDetail> = ({ form }) => {
  const { selectedVendor } = useModel('vendor');
  const { selectedPO } = useModel('po');
  const { warehouseList } = useModel('warehouse');

  useEffect(() => {
    if (!selectedPO) form.resetFields();
    else
      form.setFieldsValue({
        destination_id: selectedPO.destination_id,
        order_number: selectedPO.order_number,
        confirm_by: moment(new Date(selectedPO.confirm_by)),
      });
  }, [selectedPO, form]);

  const warehouseOptions = useMemo(
    () =>
      warehouseList.map((_item) => ({
        label: _item.name,
        value: _item.id,
      })),
    [warehouseList],
  );

  return (
    <>
      <Card title="P.O. Details">
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} labelAlign="left" form={form}>
          <Form.Item label="From Vendor">
            <span style={{ fontWeight: 'bold' }}>{selectedPO ? selectedPO.vendor.name : selectedVendor.name}</span>
          </Form.Item>
          <Form.Item
            label="To Destination"
            name="destination_id"
            rules={[{ required: true, message: 'Please select Destination Warehouse' }]}
          >
            <Select options={warehouseOptions} />
          </Form.Item>
          <Form.Item
            label="Custom P.O. Number"
            name="order_number"
            rules={[{ required: true, message: 'Please input the Order Number' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Confirm By" name="confirm_by" rules={[{ required: true, message: 'Please select the Confirm Date' }]}>
            <DatePicker />
          </Form.Item>
          <Form.Item label="Enable Auto Update" name="enable_portal">
            <>
              <Checkbox />
              <QuestionCircleOutlined className="help-button" style={{ marginLeft: 6 }} />
            </>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default PurchaseOrderDetail;
