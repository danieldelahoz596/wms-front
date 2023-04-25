import { QuestionCircleOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, DatePicker, Form, Input, Select } from 'antd';
import Checkbox from 'antd/es/checkbox';
import React, { useEffect, useMemo } from 'react';
// import PaymentTerm from './PaymentTerm';
interface IPurchaseOrderDetail {
  selectedVendor?: string;
  form: any;
}

const PurchaseOrderDetail: React.FC<IPurchaseOrderDetail> = ({ form }) => {
  const { selectedVendor } = useModel('vendor');
  const { selectedPO } = useModel('po');
  const { warehouseList } = useModel('warehouse');

  useEffect(() => {
    // if (!!selectedPO.key) {
    //   form.setFieldsValue({
    //     destination: selectedPO?.destination?.id,
    //     customPONumber: selectedPO?.customponumber,
    //     poTemplate: selectedPO?.poTemplate?.id,
    //     poFormat: selectedPO?.poFormat,
    //     shippingTerm: selectedPO?.shipmentTerm?.id,
    //     paymentTerm: selectedPO?.paymentTerm?.id,
    //     milestone: selectedPO?.milestone?.id,
    //     enablePortal: selectedPO?.enablePortal,
    //   });
    // }

    if (!selectedPO) {
      form.resetFields();
    } else {
      form.setFieldsValue({});
    }
  }, [selectedPO, form]);

  const warehouseOptions = useMemo(
    () =>
      warehouseList.map((_item) => ({
        label: _item.name,
        value: _item.id,
      })),
    [warehouseList],
  );
  // );

  return (
    <>
      <Card title="P.O. Details">
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} labelAlign="left" form={form}>
          <Form.Item label="From Vendor">
            <span style={{ fontWeight: 'bold' }}>{selectedVendor.name}</span>
          </Form.Item>
          <Form.Item label="To Destination" name="destination_id">
            <Select options={warehouseOptions} />
          </Form.Item>
          <Form.Item label="Custom P.O. Number" name="order_number">
            <Input />
          </Form.Item>
          <Form.Item label="Confirm By" name="confirm_by">
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
