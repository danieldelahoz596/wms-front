import { modalType } from '@/utils/helpers/types';
import { QuestionCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, DatePicker, Form, Input, Select } from 'antd';
import Checkbox from 'antd/es/checkbox';
import React, { useEffect, useState } from 'react';
import ConfigureMilestonesModal from '@/pages/PurchaseOrders/components/Modals/ConfigureMilestones';
// import PaymentTerm from './PaymentTerm';
interface IPurchaseOrderDetail {
  selectedVendor?: string;
  form: any;
}

const PurchaseOrderDetail: React.FC<IPurchaseOrderDetail> = ({ form }) => {
  const { selectedVendor } = useModel('vendor');
  const { milestonesList } = useModel('milestones');
  const { initialState } = useModel('@@initialState');
  const { selectedPO } = useModel('po');
  const [showModal, setShowModal] = useState<modalType>(modalType.Close);

  useEffect(() => {
    if (!!selectedPO.key) {
      form.setFieldsValue({
        destination: selectedPO?.destination?.id,
        customPONumber: selectedPO?.customponumber,
        poTemplate: selectedPO?.poTemplate?.id,
        poFormat: selectedPO?.poFormat,
        shippingTerm: selectedPO?.shipmentTerm?.id,
        paymentTerm: selectedPO?.paymentTerm?.id,
        milestone: selectedPO?.milestone?.id,
        enablePortal: selectedPO?.enablePortal,
      });
    }
  }, [selectedPO, form]);

  return (
    <>
      <Card title="P.O. Details">
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} labelAlign="left" form={form}>
          <Form.Item label="From Vendor">
            <span style={{ fontWeight: 'bold' }}>
              {selectedPO.fromVendor ? selectedPO.fromVendor?.name : selectedVendor?.name}
            </span>
          </Form.Item>
          <Form.Item label="To Destination" name="destination">
            <Select
              options={initialState?.initialData?.warehouses?.map((_item) => ({
                label: _item.name,
                value: _item.id,
              }))}
            />
          </Form.Item>
          <Form.Item label="Custom P.O. Number" name="customPONumber">
            <Input />
          </Form.Item>
          <Form.Item label="P.O. Template" name="poTemplate">
            <Select
              options={initialState?.initialData?.poTemplates?.map((_item) => ({
                label: _item.name,
                value: _item.id,
              }))}
            />
          </Form.Item>
          <Form.Item label="P.O. Format" name="poFormat">
            <Select
              options={[
                { value: 'pdf', label: 'PDF Attachment' },
                { value: 'email', label: 'Email Attachment' },
                { value: 'html', label: 'HTML Attachment' },
              ]}
            />
          </Form.Item>
          <Form.Item label="Shipping Terms" name="shippingTerm">
            <Select
              options={initialState?.initialData?.shippingTerms?.map((_item) => ({
                label: _item.name,
                value: _item.id,
              }))}
            />
          </Form.Item>
          <Form.Item label="Payment Terms" name="paymentTerm">
            <Select
              options={initialState?.initialData?.paymentTerms?.map((_item) => ({
                label: _item.name,
                value: _item.id,
              }))}
            />
          </Form.Item>
          <Form.Item label="Confirm By" name="confirmBy">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Milestones">
            <div style={{ display: 'flex', gap: 3 }}>
              <div style={{ flex: '1' }}>
                <Form.Item name="milestone">
                  <Select
                    options={milestonesList?.map((_item) => ({
                      label: _item.text,
                      value: _item.id,
                    }))}
                  />
                </Form.Item>
              </div>
              <span onClick={() => setShowModal(modalType.ConfigureMilestones)}>
                <SettingOutlined className="setting-button" />
              </span>
            </div>
          </Form.Item>
          <Form.Item label="Enable Auto Update" name="enablePortal">
            <>
              <Checkbox />
              <QuestionCircleOutlined className="help-button" style={{ marginLeft: 6 }} />
            </>
          </Form.Item>
        </Form>
      </Card>

      <ConfigureMilestonesModal
        isOpen={showModal === modalType.ConfigureMilestones}
        onClose={() => setShowModal(modalType.Close)}
      />
    </>
  );
};

export default PurchaseOrderDetail;
