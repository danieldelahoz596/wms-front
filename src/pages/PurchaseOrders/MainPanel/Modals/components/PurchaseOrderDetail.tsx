import AddItemModal from '@/pages/Products/MainPanel/Modals/AddItem';
import ConfigureItemModal from '@/pages/Products/MainPanel/Modals/ConfigItem';
import ConfigureMilestonesModal from '@/pages/PurchaseOrders/MainPanel/Modals/ConfigureMilestones';
import { modalType } from '@/utils/helpers/types';
import { PlusOutlined, QuestionCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, DatePicker, Form, Input, Select } from 'antd';
import Checkbox from 'antd/es/checkbox';
import React, { useEffect, useMemo, useState } from 'react';
// import PaymentTerm from './PaymentTerm';
interface IPurchaseOrderDetail {
  selectedVendor?: string;
  form: any;
}

const PurchaseOrderDetail: React.FC<IPurchaseOrderDetail> = ({ form }) => {
  const { selectedVendor } = useModel('vendor');
  const { milestonesList } = useModel('milestones');
  const { selectedPO } = useModel('po');
  const { warehouseList } = useModel('warehouse');
  const { poTemplateList } = useModel('poTemplate');
  const { shippingTermList } = useModel('shippingTerm');
  const { paymentTermList, setPaymentTermList } = useModel('paymentTerm');
  const [showModal, setShowModal] = useState<modalType>(modalType.Close);

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
      form.setFielsValue({});
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

  const poTemplateOptions = useMemo(
    () =>
      poTemplateList.map((_item) => ({
        label: _item.name,
        value: _item.id,
      })),
    [poTemplateList],
  );

  const shippingTermOptions = useMemo(
    () =>
      shippingTermList.map((_item) => ({
        label: _item.text,
        value: _item.value,
      })),
    [shippingTermList],
  );

  const paymentTermOptions = useMemo(
    () =>
      paymentTermList.map((_item) => ({
        label: _item.name,
        value: _item.id,
      })),
    [paymentTermList],
  );

  const milestoneOptions = useMemo(
    () =>
      milestonesList?.map((_item) => ({
        label: _item.text,
        value: _item.id,
      })),
    [milestonesList],
  );

  return (
    <>
      <Card title="P.O. Details">
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} labelAlign="left" form={form}>
          <Form.Item label="From Vendor">
            <span style={{ fontWeight: 'bold' }}>{selectedPO ? selectedPO.fromVendor?.name : selectedVendor?.name}</span>
          </Form.Item>
          <Form.Item label="To Destination" name="destination">
            <Select options={warehouseOptions} />
          </Form.Item>
          <Form.Item label="Custom P.O. Number" name="customPONumber">
            <Input />
          </Form.Item>
          <Form.Item label="P.O. Template" name="poTemplate">
            <Select options={poTemplateOptions} />
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
            <Select options={shippingTermOptions} />
          </Form.Item>
          <Form.Item label="Payment Terms">
            <div style={{ display: 'flex', gap: HORIZONTAL_SPACE_SIZE }}>
              <Form.Item name="paymentTerm" style={{ flex: 1 }}>
                <Select options={paymentTermOptions} />
              </Form.Item>
              <PlusOutlined className="plus-button" onClick={() => setShowModal(modalType.Add)} />
              <SettingOutlined className="setting-button" onClick={() => setShowModal(modalType.Configure)} />
            </div>
          </Form.Item>
          <Form.Item label="Confirm By" name="confirmBy">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Milestones">
            <div style={{ display: 'flex', gap: 3 }}>
              <div style={{ flex: '1' }}>
                <Form.Item name="milestone">
                  <Select options={milestoneOptions} />
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

      <AddItemModal
        isOpen={showModal === modalType.Add}
        title="Add New Payment Term"
        onSave={() => setShowModal(modalType.Close)}
        onClose={() => setShowModal(modalType.Close)}
        items={paymentTermList}
        setItems={setPaymentTermList}
      />

      <ConfigureItemModal
        isOpen={showModal === modalType.Configure}
        title="Add New Payment Term"
        onSave={() => setShowModal(modalType.Close)}
        onClose={() => setShowModal(modalType.Close)}
        items={paymentTermList}
        setItems={setPaymentTermList}
      />
    </>
  );
};

export default PurchaseOrderDetail;
