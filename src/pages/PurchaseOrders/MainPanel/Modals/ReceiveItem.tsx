import { OModal } from '@/components/Globals/OModal';
import { PlusOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Checkbox, Col, DatePicker, Form, Row, Select, InputNumber, message } from 'antd';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import NewRecevingLocationModal from './NewRecevingLocation';

interface IReceiveItemModal {
  isOpen: boolean;
  item: any;
  onSave: () => void;
  onCancel: () => void;
}

const ReceiveItemModal: React.FC<IReceiveItemModal> = ({ isOpen, item, onSave, onCancel }) => {
  const { selectedPO, receivePOItem } = useModel('po');
  const [form] = Form.useForm();
  const accept = Form.useWatch('accept', form);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { warehouseLocationList, getLocationList } = useModel('warehouseLocation');

  useEffect(() => {
    if (item) {
      const { billed_on, delivered_on, received_on, ...rest } = item;
      if (billed_on) rest.billed_on = moment(new Date(item.billed_on));
      if (delivered_on) rest.delivered_on = moment(new Date(item.delivered_on));
      if (received_on) rest.received_on = moment(new Date(item.received_on));
      form.setFieldsValue(rest);
    }
  }, [item, form, isOpen]);

  useEffect(() => {
    if (isOpen) getLocationList(selectedPO?.destination_id);
  }, [isOpen, getLocationList, selectedPO]);

  const handleSave = () => {
    form.validateFields().then((values) => {
      receivePOItem({ ...item, ...values }).then(() => {
        onSave();
      });
    });
  };

  const locationOptions = useMemo(
    () => warehouseLocationList.map((location) => ({ value: location.id, label: location.name })),
    [warehouseLocationList],
  );

  return (
    <OModal
      title={`Receive Item '${selectedPO.order_number} - ${item?.product.name} Product'`}
      helpLink=""
      width={800}
      isOpen={isOpen}
      handleCancel={onCancel}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: onCancel,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Save',
          onClick: handleSave,
        },
      ]}
    >
      <>
        {contextHolder}
        <div style={{ textAlign: 'center' }}>
          <h1>Vendor SKU: {item?.product.sku}</h1>
        </div>
        <Form labelCol={{ span: 12 }} labelAlign="left" form={form}>
          <Row gutter={15}>
            <Col span={9}>
              <Form.Item label="Delivered" name="delivered_on">
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item label="Received" name="received_on">
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item label="Billed On" name="billed_on">
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item label="Landed Cost Payment Date">
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="Original Unit Cost">
                <span>{item?.product.vendor_cost}</span>
              </Form.Item>
              <Form.Item label="Billed Unit Cost" name="billed_cost">
                <InputNumber />
              </Form.Item>
              <Form.Item label="Landed Unit Cost" name="landed_cost">
                <InputNumber />
              </Form.Item>
              <Form.Item label="Discount" name="discount">
                <InputNumber />
              </Form.Item>
            </Col>
            <Col span={9}>
              <Form.Item label="Accept" name="accept" rules={[{ required: true, message: 'Please input the accept units' }]}>
                <InputNumber addonAfter="units" max={item?.qty} min={1} />
              </Form.Item>
              <Form.Item label="Reject">
                <InputNumber addonAfter="units" value={item?.qty - accept} max={item?.qty} min={0} disabled />
              </Form.Item>
              <Form.Item label="Total">
                <span>
                  <b>{item?.qty}</b> units
                </span>
              </Form.Item>
              <Form.Item label="Update inventory" style={{ textAlign: 'left' }}>
                <Checkbox />
                <QuestionCircleOutlined className="help-button" style={{ marginLeft: 6 }} />
              </Form.Item>
              <Form.Item label="Receiving Location">
                <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
                  <div style={{ flex: '1' }}>
                    <Form.Item
                      labelCol={{ span: 8 }}
                      name="location_id"
                      rules={[{ required: true, message: 'Please select location' }]}
                    >
                      <Select options={locationOptions} />
                    </Form.Item>
                  </div>
                  <PlusOutlined className="plus-button" onClick={() => setShowModal(true)} />
                </div>
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <NewRecevingLocationModal
          isOpen={showModal}
          onSave={() => {
            setShowModal(false);
            messageApi.open({
              type: 'success',
              content: 'Successful to create a new location',
            });
          }}
          onClose={() => setShowModal(false)}
        />
      </>
    </OModal>
  );
};

export default ReceiveItemModal;
