import { OModal } from '@/components/Globals/OModal';
import type { IOSelectOption } from '@/components/Globals/OSelect';
import { OSelect } from '@/components/Globals/OSelect';
import { modalType } from '@/utils/helpers/types';
import { PercentageOutlined } from '@ant-design/icons';
import { Card, Col, DatePicker, Form, Input, InputNumber, Row, Select, Space } from 'antd';
import React from 'react';

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
  const prefixSelectorLabel = <span>$</span>;

  const prefixSelectorSelect = <Form.Item name="prefix" noStyle></Form.Item>;

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
      title={"Edit Item '" + editItemData?.product + "'"}
      helpLink=""
      width={600}
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
        <div style={{ textAlign: 'center' }}>
          {/* <h1>{editItemData?.vendorSku}</h1> */}
          <h1>Vendor SKU: test product</h1>
        </div>
        <Row gutter={10}>
          <Col span={14}>
            <Card title="Details">
              <Form labelCol={{ span: 10 }} labelAlign="left">
                <Space direction="vertical" size={4} style={{ width: '100%' }}>
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
                  <Form.Item label="Item Memo">
                    <TextArea rows={4} />
                  </Form.Item>
                </Space>
              </Form>
            </Card>
          </Col>
          <Col span={10}>
            <Card title="Item Totals">
              <Form labelCol={{ span: 14 }}>
                <Space direction="vertical" size={3} style={{ width: '100%' }}>
                  <Form.Item label="Order Quantity">
                    <InputNumber value={25} />
                  </Form.Item>
                  <Form.Item label="Hold Quantity">
                    <span>0</span>
                  </Form.Item>
                  <Form.Item label="Unit of Measure">
                    <span>Each (x1)</span>
                  </Form.Item>
                  <Form.Item label="Total Unit Quantity">
                    <span>25</span>
                  </Form.Item>
                  <Form.Item label="Unit Cost">
                    <span>$1.00</span>
                  </Form.Item>
                  <Form.Item label="Billed Cost">
                    <Input type="number" addonBefore="$" value={1.0} />
                  </Form.Item>
                  <Form.Item label="Landed Cost">
                    <Input type="number" addonBefore="$" value={1.0} />
                  </Form.Item>
                  <Form.Item label="Discount">
                    <Input
                      type="number"
                      addonBefore={
                        <Select
                          size="small"
                          options={[
                            { value: 1, label: 'Item 1' },
                            { value: 2, label: 'Item 2' },
                          ]}
                        />
                      }
                      value={0.0}
                    />
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
                  <hr/>
                  <Form.Item label="Total Cost">
                    <span>$27.50</span>
                  </Form.Item>
                </Space>
              </Form>
            </Card>
          </Col>
        </Row>
      </>
    </OModal>
  );
};

export default EditItemModal;
