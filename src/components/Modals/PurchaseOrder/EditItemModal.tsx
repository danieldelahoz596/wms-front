import React from 'react';
import { Row, Form, Select, Input, Col, DatePicker, InputNumber } from 'antd';
import { modalType } from '@/utils/helpers/types';
import { PercentageOutlined } from '@ant-design/icons';
import { OModal } from '@/components/Globals/OModal';
import type { IOSelectOption } from '@/components/Globals/OSelect';
import { OSelect } from '@/components/Globals/OSelect';

const { Option } = Select;
const { TextArea } = Input;

interface IEditItemModal {
  editItemData?: any;
  editItemModal: string;
  setEditItemModal?: (value: string) => void;
}

const EditItemModal: React.FC<IEditItemModal> = ({
  editItemData,
  editItemModal,
  setEditItemModal,
}) => {
  const prefixSelectorLabel = (
    <Form.Item name="prefix" noStyle>
      <label>$</label>
    </Form.Item>
  );

  const prefixSelectorSelect = (
    <Form.Item name="prefix" noStyle>
      <Select>
        <Option value="1">Item 1</Option>
        <Option value="2">Item 2</Option>
      </Select>
    </Form.Item>
  );

  const handleCancel = () =>
    setEditItemModal ? setEditItemModal(modalType.Close) : console.log('Cancel');
  const handleSave = () =>
    setEditItemModal ? setEditItemModal(modalType.Close) : console.log('Save');

  const buyerOptions: IOSelectOption[] = [
    {
      text: 'Item 1',
      value: '1',
    },
    {
      text: 'Item 2',
      value: '2',
    },
  ];

  return (
    <OModal
      title={'Edit Item ' + editItemData?.product}
      width={1200}
      centered
      isOpen={editItemModal == modalType.Edit}
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
            <h3>{editItemData?.vendorSku}</h3>
          </Col>
        </Row>
        <Row>
          <Col span={11} style={{ margin: '2%' }}>
            <Form layout="horizontal">
              <Form.Item label="Billed On">
                <Input />
              </Form.Item>
              <Form.Item label="Est. Delivery">
                <DatePicker />
              </Form.Item>
              <Form.Item label="Delivered">
                <Input />
              </Form.Item>
              <Form.Item label="Landed Cost Payment Date">
                <DatePicker />
              </Form.Item>
              <Form.Item label="Packaging">
                <Input />
              </Form.Item>
              <Form.Item label="Reference #">
                <Input />
              </Form.Item>
              <Form.Item label="Buyer">
                <OSelect name="buyer" options={buyerOptions} onChange={() => {}} />
              </Form.Item>
              {/* <Form.Item label="InputNumber">
                  <InputNumber />
                </Form.Item> */}
              <Form.Item label="Item Memo">
                <TextArea rows={4} />
              </Form.Item>
            </Form>
          </Col>
          <Col span={11} style={{ margin: '2%' }}>
            <Form layout="horizontal">
              <Form.Item label="Order Quantity">
                <InputNumber value={25} />
              </Form.Item>
              <Form.Item label="Hold Quantity">
                <label>0</label>
              </Form.Item>
              <Form.Item label="Unit of Measure">
                <label>Each (x1)</label>
              </Form.Item>
              <Form.Item label="Total Unit Quantity">
                <label>25</label>
              </Form.Item>
              <Form.Item label="Unit Cost">
                <label>$1.00</label>
              </Form.Item>
              <Form.Item label="Billed Cost">
                <Input type="number" addonBefore={prefixSelectorLabel} value={1.0} />
              </Form.Item>
              <Form.Item label="Landed Cost">
                <Input type="number" addonBefore={prefixSelectorLabel} value={1.0} />
              </Form.Item>
              <Form.Item label="Discount">
                <Input type="number" addonBefore={prefixSelectorSelect} value={1.0} />
              </Form.Item>
              <Form.Item label="Item Tax">
                <Row gutter={8}>
                  <Col span={8}>
                    <Form.Item noStyle>
                      <Input value={'10.0'} />
                    </Form.Item>
                  </Col>
                  <Col span={4}>
                    <PercentageOutlined />
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item label="Total Cost">
                <label>$27.50</label>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </>
    </OModal>
  );
};

export default EditItemModal;
