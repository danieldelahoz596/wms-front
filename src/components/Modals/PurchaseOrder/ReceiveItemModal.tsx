import React from 'react';
import { Row, Form, Input, Col, DatePicker, Checkbox } from 'antd';
import { modalType } from '@/utils/helpers/types';
import { QuestionCircleOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { OModal } from '@/components/Globals/OModal';
import type { IOSelectOption } from '@/components/Globals/OSelect';
import { OSelect } from '@/components/Globals/OSelect';
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
      <label>$</label>
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
      title={'Receive Item ' + receiveItemData?.product}
      centered
      width={1200}
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
        <Row>
          <Col span={8} offset={8}>
            <h3>{receiveItemData?.vendorSku}</h3>
          </Col>
        </Row>
        <Row>
          <Col span={7} style={{ margin: '2%' }}>
            <Form layout="horizontal">
              <Form.Item label="Delivered:">
                <Input />
              </Form.Item>
              <Form.Item label="Received:">
                <Input />
              </Form.Item>
              <Form.Item label="Billed On:">
                <Input />
              </Form.Item>
              <Form.Item label="Landed Cost Payment Date:">
                <DatePicker />
              </Form.Item>
              <Form.Item label="Reference #:">
                <Input />
              </Form.Item>
              <Form.Item label="Item Memo:">
                <TextArea rows={4} />
              </Form.Item>
            </Form>
          </Col>
          <Col span={7} style={{ margin: '2%' }}>
            <Form layout="horizontal">
              <Form.Item label="Original Unit Quantity:">
                <Row gutter={8}>
                  <Col span={8}>
                    <label>25</label>
                  </Col>
                  <Col span={4}>units</Col>
                </Row>
              </Form.Item>
              <Form.Item label="Billed Unit Cost:">
                <Input type="number" addonBefore={prefixSelectorLabel} value={1.0} />
              </Form.Item>
              <Form.Item label="Landed Unit Cost:">
                <Input type="number" addonBefore={prefixSelectorLabel} value={1.0} />
              </Form.Item>
              <Form.Item label="Discount:">
                <Input type="number" addonBefore={prefixSelectorSelect} value={1.0} />
              </Form.Item>
            </Form>
          </Col>
          <Col span={7} style={{ margin: '2%' }}>
            <Form.Item label="Accept:">
              <Row gutter={8}>
                <Col span={8}>
                  <Form.Item>
                    <Input type="number" value={25} />
                  </Form.Item>
                </Col>
                <Col span={4}>units</Col>
              </Row>
            </Form.Item>
            <Form.Item label="Reject:">
              <Row gutter={8}>
                <Col span={8}>
                  <Form.Item>
                    <Input type="number" value={0} />
                  </Form.Item>
                </Col>
                <Col span={4}>units</Col>
              </Row>
            </Form.Item>
            <Form.Item label="Total:">
              <Row gutter={8}>
                <Col span={8}>
                  <label>25</label>
                </Col>
                <Col span={4}>units</Col>
              </Row>
            </Form.Item>
            <Form.Item label="Update inventory:">
              <Row>
                <Col span={4}>
                  <Checkbox />
                </Col>
                <Col>
                  <QuestionCircleOutlined />
                </Col>
              </Row>
            </Form.Item>
            <Form.Item label="Receiving Location:">
              <Row>
                <Col span={20}>
                  <Form.Item name="prefix" noStyle>
                    <OSelect name="prefix" options={locationOptions} onChange={() => {}} />
                  </Form.Item>
                </Col>
                <Col span={4} style={{ paddingLeft: '10%' }}>
                  <PlusSquareOutlined />
                </Col>
              </Row>
            </Form.Item>
          </Col>
        </Row>
      </>
    </OModal>
  );
};

export default ReceiveItemModal;
