import React from 'react';
import { Button, Row, Form, Input, Table } from 'antd';
import { modalType } from '@/utils/helpers/types';
import { AddNewItemTableColumns, AddNewItemTableData } from '@/components/DemoData/index';
import { OModal } from '@/components/Globals/OModal';
import type { IOSelectOption } from '@/components/Globals/OSelect';
import { OSelect } from '@/components/Globals/OSelect';

interface IAddNewItemModal {
  title?: string;
  newItemModal: string;
  setNewItemModal?: (value: string) => void;
}

const AddNewItemModal: React.FC<IAddNewItemModal> = ({ title, newItemModal, setNewItemModal }) => {
  const handleCancel = () =>
    setNewItemModal ? setNewItemModal(modalType.Close) : console.log('Cancel');
  const handleSave = () =>
    setNewItemModal ? setNewItemModal(modalType.Close) : console.log('Save');

  const productOptions: IOSelectOption[] = [
    {
      text: 'Item 1',
      value: '1',
    },
    {
      text: 'Item 2',
      value: '2',
    },
  ];

  const unitMeasureOptions: IOSelectOption[] = [
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
      title={'Add Items To ' + title}
      width={1200}
      isOpen={newItemModal == modalType.New}
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
          <Form layout="inline">
            <Form.Item>
              <OSelect
                name="product"
                options={productOptions}
                onChange={() => {}}
                placeholder="Select a product..."
              />
            </Form.Item>

            <Form.Item label="Quantity">
              <Input type="number" />
            </Form.Item>

            <Form.Item label="Unit of measure">
              <OSelect
                name="unitMeasure"
                options={unitMeasureOptions}
                onChange={() => {}}
                placeholder="Select..."
              />
            </Form.Item>
            <Button type="default">Add</Button>
          </Form>
        </Row>
        <Row
          style={{
            marginTop: '1%',
          }}
        >
          <Table
            bordered
            columns={AddNewItemTableColumns}
            dataSource={AddNewItemTableData}
            size="small"
            style={{
              minWidth: '100%',
            }}
            pagination={false}
          />
        </Row>
      </>
    </OModal>
  );
};

export default AddNewItemModal;
