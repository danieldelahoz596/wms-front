import { OModal } from '@/components/Globals/OModal';
import { PlusOutlined } from '@ant-design/icons';
import { Checkbox, Col, DatePicker, Form, InputNumber, Row, Select, message } from 'antd';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import NewRecevingLocationModal from './NewRecevingLocation';
import { useModel } from '@umijs/max';
import moment from 'moment';

interface IReceivePOModal {
  isOpen: boolean;
  onSave: (item: any) => void;
  onClose: () => void;
}

const ReceivePOModal: React.FC<IReceivePOModal> = ({ isOpen, onSave, onClose }) => {
  const { selectedPO, poItems, receivePOItems } = useModel('po');
  const { getLocationList, warehouseLocationList } = useModel('warehouseLocation');
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [showModal, setShowModal] = useState(false);
  const initialData = useRef(null);

  const locationOptions = useMemo(
    () => warehouseLocationList.map((location) => ({ value: location.id, label: location.name })),
    [warehouseLocationList],
  );

  useEffect(() => {
    if (isOpen) getLocationList(selectedPO.destination_id);
  }, [isOpen, getLocationList, selectedPO]);

  useEffect(() => {
    if (selectedPO) {
      const initialValues = poItems
        .filter((item) => item.status_id === 0)
        .map((item) => {
          const { billed_on, delivered_on, received_on, ...rest } = item;
          if (billed_on) rest.billed_on = moment(new Date(item.billed_on));
          if (delivered_on) rest.delivered_on = moment(new Date(item.delivered_on));
          if (received_on) rest.received_on = moment(new Date(item.received_on));
          return rest;
        });

      form.setFieldsValue({ items: initialValues });
      initialData.current = initialValues;
      // form.setFieldsValue(selectedPO);
    } else form.resetFields(null);
  }, [isOpen, selectedPO, form, poItems]);

  const handleSave = () => {
    form.validateFields().then((values) => {
      const updateData = values.items.map((item) => {
        const { product, unit_of_measure, ...rest } = item;
        return rest;
      });
      receivePOItems({ items: updateData }).then(() => {
        onSave(values);
      });
    });
  };

  const handleChange = (name, value) => {
    poItems.forEach((_, index) => form.setFieldValue(['items', index, name], value));
  };

  return (
    <OModal
      forceRender
      title={"Receive Item '" + selectedPO?.order_number + "'"}
      helpLink=""
      width={1000}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: onClose,
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h3 style={{ color: 'blue' }}>{'Apply To All {'}</h3>
          <Form layout="inline" style={{ marginLeft: 10 }}>
            <Form.Item label="Delivered">
              <DatePicker style={{ width: 120 }} onChange={(date) => handleChange('delivered_on', date)} />
            </Form.Item>
            <Form.Item label="Received">
              <DatePicker style={{ width: 120 }} onChange={(date) => handleChange('received_on', date)} />
            </Form.Item>
            <Form.Item label="Billed On">
              <DatePicker style={{ width: 120 }} onChange={(date) => handleChange('billed_on', date)} />
            </Form.Item>
            <Form.Item label="Update Inventory">
              <Checkbox onChange={(e) => handleChange('update_inventory', e.target.checked)} />
            </Form.Item>
            <Form.Item label="Receive">
              <Checkbox onChange={(e) => handleChange('receive', e.target.checked)} />
            </Form.Item>
          </Form>
          <h3 style={{ color: 'blue' }}>{'}'}</h3>
        </div>
        <Form labelCol={{ span: 12 }} labelAlign="left" style={{ textAlign: 'right', marginTop: 10 }} form={form}>
          <Form.List name="items">
            {(fields) => (
              <>
                {fields.map(({ key, name, ...resetField }) => (
                  <React.Fragment key={key}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'rgb(222,224,255)',
                        paddingLeft: 5,
                        paddingRight: 5,
                      }}
                    >
                      <h3>
                        {initialData.current[name]?.product.name} ({initialData.current[name]?.product.sku})
                      </h3>
                      <Form.Item label="Receive" name={[name, 'receive']} valuePropName="checked">
                        <Checkbox />
                      </Form.Item>
                    </div>
                    <Row gutter={10} style={{ marginTop: 10 }}>
                      <Col span={5}>
                        <Form.Item label="Delivered" name={[name, 'delivered_on']}>
                          <DatePicker {...resetField} style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item label="Received" name={[name, 'received_on']}>
                          <DatePicker {...resetField} style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item label="Billed On" name={[name, 'billed_on']}>
                          <DatePicker {...resetField} style={{ width: '100%' }} />
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                        <Form.Item label="Original Unit Cost">
                          <span>${initialData.current[name]?.product.vendor_cost}</span>
                        </Form.Item>
                        <Form.Item {...resetField} label="Landed Unit Cost" name={[name, 'landed_cost']}>
                          <InputNumber addonBefore={<>$</>} />
                        </Form.Item>
                      </Col>
                      <Col span={5}>
                        <Form.Item {...resetField} label="Billed Unit Cost" name={[name, 'billed_cost']}>
                          <InputNumber addonBefore="$" />
                        </Form.Item>
                        <Form.Item {...resetField} label="Discount" name={[name, 'discount']}>
                          <InputNumber />
                        </Form.Item>
                      </Col>
                      <Col span={4}>
                        <Form.Item
                          {...resetField}
                          label="Accept"
                          name={[name, 'accept']}
                          rules={[{ required: true, message: 'Please input the accept units' }]}
                        >
                          <InputNumber addonAfter="units" max={initialData.current[name]?.qty} min={1} />
                        </Form.Item>
                        <Form.Item
                          {...resetField}
                          label="Reject"
                          name={[name, 'reject']}
                          shouldUpdate={() => {
                            form.setFieldValue(
                              ['items', name, 'reject'],
                              initialData.current[name]?.qty - form.getFieldValue(['items', name, 'accept']),
                            );
                            return true;
                          }}
                        >
                          <InputNumber
                            addonAfter="units"
                            value={initialData.current[name]?.qty - form.getFieldValue(['items', name, 'accept'])}
                            disabled
                          />
                        </Form.Item>
                        <Form.Item {...resetField} label="Total">
                          <span>
                            <b>{initialData.current[name]?.qty}</b> units
                          </span>
                        </Form.Item>
                      </Col>
                      <Col span={5}>
                        <Form.Item label="Receiving Location" labelCol={{ span: 24 }} style={{ textAlign: 'left' }}>
                          <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center' }}>
                            <div style={{ flex: '1' }}>
                              <Form.Item
                                {...resetField}
                                name={[name, 'location_id']}
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
                  </React.Fragment>
                ))}
              </>
            )}
          </Form.List>
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

export default ReceivePOModal;
