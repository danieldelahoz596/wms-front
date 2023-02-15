import { OModal } from '@/components/Globals/OModal';
import type { IOSelectOption } from '@/components/Globals/OSelect';
import { OSelect } from '@/components/Globals/OSelect';
import { modalType } from '@/utils/helpers/types';
import { PlusOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Checkbox, Col, DatePicker, Form, Input, Row, Space } from 'antd';
import React from 'react';
const { TextArea } = Input;
interface IReceiveItemModal {
  receiveItemData?: any;
  receiveItemModal: string;
  setReceiveItemModal?: (value: string) => void;
}

const ReceiveItemModal: React.FC<IReceiveItemModal> = ({
  receiveItemData,
  receiveItemModal,
  setReceiveItemModal,
}) => {
  const prefixSelectorLabel = (
    <Form.Item name="prefix" noStyle>
      <span>$</span>
    </Form.Item>
  );

  const handleCancel = () =>
    setReceiveItemModal ? setReceiveItemModal(modalType.Close) : console.log('Cancel');
  const handleSave = () =>
    setReceiveItemModal ? setReceiveItemModal(modalType.Close) : console.log('Save');

  const locationOptions: IOSelectOption[] = [
    {
      text: 'Item 1',
      value: '1',
    },
    {
      text: 'Item 2',
      value: '2',
    },
  ];

  const prefixOptions: IOSelectOption[] = [
    {
      text: 'Item 1',
      value: '1',
    },
    {
      text: 'Item 2',
      value: '2',
    },
  ];

  const prefixSelectorSelect = (
    <Form.Item name="prefix" noStyle>
      <OSelect name="prefix" options={prefixOptions} onChange={() => {}} />
    </Form.Item>
  );

  return (
    <OModal
      title={"Receive Item '" + receiveItemData?.product + "'"}
      helpLink=""
      width={800}
      isOpen={receiveItemModal == modalType.Receive}
      handleCancel={handleCancel}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: handleCancel,
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
        <div style={{ textAlign: 'center' }}>
          {/* <h1>{receiveItemData?.vendorSku}</h1> */}
          <h1>Vendor SKU: test product</h1>
        </div>
        <Row gutter={10}>
          <Col span={9}>
            <Form labelCol={{ span: 12 }} labelAlign="left">
              <Space direction="vertical" size={4} style={{ width: '100%' }}>
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
                <Form.Item label="Item Memo">
                  <TextArea rows={4} />
                </Form.Item>
              </Space>
            </Form>
          </Col>
          <Col span={6}>
            <Form labelCol={{ span: 12 }}>
              <Space direction="vertical" size={4} style={{ width: '100%', textAlign: 'right' }}>
                <Form.Item label="Original Unit Cost">
                  <span>$1.00</span>
                </Form.Item>
                <Form.Item label="Billed Unit Cost">
                  <Input type="number" addonBefore="$" value={1.0} />
                </Form.Item>
                <Form.Item label="Landed Unit Cost">
                  <Input type="number" addonBefore="$" value={1.0} />
                </Form.Item>
                <Form.Item label="Discount">
                  <Input type="number" addonBefore={prefixSelectorSelect} value={1.0} />
                </Form.Item>
              </Space>
            </Form>
          </Col>
          <Col span={9}>
            <Form labelCol={{ span: 10 }}>
              <Space direction="vertical" size={4} style={{ width: '100%', textAlign: 'right' }}>
                <Form.Item label="Accept">
                  <Form.Item>
                    <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                      <Input type="number" value={25} />
                      <span>units</span>
                    </div>
                  </Form.Item>
                </Form.Item>
                <Form.Item label="Reject">
                  <Form.Item>
                    <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                      <Input type="number" value={0} />
                      <span>units</span>
                    </div>
                  </Form.Item>
                </Form.Item>
                <Form.Item label="Total">
                  <span><b>25</b> units</span>
                </Form.Item>
                <Form.Item label="Update inventory" style={{ textAlign: 'left'}}>
                  <Checkbox />
                  <QuestionCircleOutlined className="help-button" style={{ marginLeft: 6 }} />
                </Form.Item>
                <Form.Item label="Receiving Location" labelCol={{ span: 8}}>
                  <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                    <OSelect name="prefix" options={locationOptions} onChange={() => {}} />
                    <PlusOutlined className="setting-button" />
                  </div>
                </Form.Item>
              </Space>
            </Form>
          </Col>
        </Row>
      </>
    </OModal>
  );
};

export default ReceiveItemModal;
