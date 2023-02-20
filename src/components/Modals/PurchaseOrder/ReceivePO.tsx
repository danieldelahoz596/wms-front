import { OModal } from '@/components/Globals/OModal';
import { PlusOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { uuidv4 } from '@antv/xflow-core';
import { Checkbox, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import NewRecevingLocationModal from './NewRecevingLocation';
const { TextArea } = Input;
interface IReceivePOModal {
  isOpen: boolean;
  item: any;
  onSave: (item: any) => void;
  onClose: () => void;
}

const locationData = [
  {
    id: '1',
    name: 'Location 1',
  },
  {
    id: '2',
    name: 'Location 2',
  },
  {
    id: '3',
    name: 'Location 3',
  },
];

const ReceivePOModal: React.FC<IReceivePOModal> = ({ isOpen, item, onSave, onClose }) => {
  const [form] = Form.useForm();
  const [locations, setLocations] = useState(locationData);
  const [showModal, setShowModal] = useState(false);

  const locationOptions = useMemo(
    () =>
      locations.map((location) => ({ key: location.id, value: location.id, label: location.name })),
    [locations],
  );

  useEffect(() => {
    form.setFieldsValue({
      ...item,
      billedCost: item?.billed_cost,
      landedCost: item?.landed_cost,
    });
  }, [isOpen]);

  const handleSave = () => {
    form.validateFields().then((values) => onSave(values));
  };

  return (
    <OModal
      title={"Receive Item '" + item?.ponumber + "'"}
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
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h3 style={{ color: 'blue' }}>{'Apply To All {'}</h3>
          <Form layout="inline" style={{ marginLeft: 10 }}>
            <Form.Item label="Delivered">
              <Input style={{ width: 80 }} />
            </Form.Item>
            <Form.Item label="Received">
              <Input style={{ width: 80 }} />
            </Form.Item>
            <Form.Item label="Billed On">
              <Input style={{ width: 80 }} />
            </Form.Item>
            <Form.Item label="Reference #.">
              <Input />
            </Form.Item>
            <Form.Item label="Update Inventory">
              <Checkbox />
            </Form.Item>
            <Form.Item label="Receive">
              <Checkbox />
            </Form.Item>
          </Form>
          <h3 style={{ color: 'blue' }}>{'}'}</h3>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
            background: 'rgb(222,224,255)',
            paddingLeft: 5,
            paddingRight: 5,
          }}
        >
          <h3>CLeanse Product (AA0001/AA0002)</h3>
          <Form.Item label="Receive">
            <Checkbox />
          </Form.Item>
        </div>
        <Row gutter={10} style={{ marginTop: 10 }}>
          <Col span={3}>
            <Form labelCol={{ span: 12 }} labelAlign="left">
              <Form.Item label="Delivered">
                <Input />
              </Form.Item>
              <Form.Item label="Received">
                <Input />
              </Form.Item>
              <Form.Item label="Billed On">
                <Input />
              </Form.Item>
              <Form.Item label="Landed Cost Payment Date">
                <DatePicker />
              </Form.Item>
              <Form.Item label="Reference #">
                <Input />
              </Form.Item>
            </Form>
          </Col>
          <Col span={3}>
            <Form.Item label="Item Memo">
              <TextArea rows={2} />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form labelCol={{ span: 12 }} form={form} style={{ textAlign: 'right' }}>
              <Form.Item label="Original Unit Cost">
                <span>$1.00</span>
              </Form.Item>
              <Form.Item label="Landed Unit Cost" name="landedCost">
                <Input type="number" addonBefore="$" />
              </Form.Item>
              <Form.Item label="Landed Cost Payment Date">
                <Input />
              </Form.Item>
            </Form>
          </Col>
          <Col span={5}>
            <Form labelCol={{ span: 12 }} form={form} style={{ textAlign: 'right' }}>
              <Form.Item label="Billed Unit Cost" name="billedCost">
                <Input type="number" addonBefore="$" />
              </Form.Item>
              <Form.Item label="Discount" name="discount">
                <Input
                  type="number"
                  addonBefore={
                    <Select
                      defaultValue="$"
                      style={{ width: 40 }}
                      options={[{ value: '$', label: '$' }]}
                    />
                  }
                  value={0.0}
                />
              </Form.Item>
            </Form>
          </Col>
          <Col span={3}>
            <Form labelCol={{ span: 10 }} style={{ textAlign: 'right' }}>
              <Form.Item label="Accept">
                <Input type="number" addonAfter="units" value={25} />
              </Form.Item>
              <Form.Item label="Reject">
                <Input type="number" addonAfter="units" value={0} />
              </Form.Item>
              <Form.Item label="Total">
                <span>
                  <b>25</b> units
                </span>
              </Form.Item>
            </Form>
          </Col>
          <Col span={5}>
            <Form layout="vertical">
              <Form.Item label="Receiving Location" name="location">
                <div style={{ display: 'flex', gap: 4 }}>
                  <Select options={locationOptions} style={{ flex: '1' }} />
                  <PlusOutlined className="plus-button" onClick={() => setShowModal(true)} />
                </div>
              </Form.Item>
            </Form>
            <div
              style={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                marginTop: 5,
                gap: 3,
              }}
            >
              Update inventory: <Checkbox />
              <QuestionCircleOutlined className="help-button" style={{ marginLeft: 6 }} />
            </div>
          </Col>
        </Row>
      </>

      <NewRecevingLocationModal
        isOpen={showModal}
        onSave={(value) => {
          setShowModal(false);
          setLocations((prev) => [...prev, { id: uuidv4(), name: value }]);
        }}
        onClose={() => setShowModal(false)}
      />
    </OModal>
  );
};

export default ReceivePOModal;
