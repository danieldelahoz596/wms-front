import { AddNewItemTableColumns, AddNewItemTableData } from '@/components/DemoData/index';
import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import type { IOSelectOption } from '@/components/Globals/OSelect';
import { OSelect } from '@/components/Globals/OSelect';
import { OTable } from '@/components/Globals/OTable';
import { Form, Input, Space } from 'antd';
import React from 'react';

interface IAddNewItem {
  isOpen: boolean;
  onSave: () => void;
  onCancel: () => void;
}

const AddNewItem: React.FC<IAddNewItem> = ({ isOpen, onSave, onCancel }) => {
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
      text: 'Each',
      value: '1',
    },
    {
      text: 'Item 2',
      value: '2',
    },
  ];

  return (
    <OModal
      title={'Add Items To P.O. #PO12147'}
      helpLink=""
      width={1000}
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
          onClick: onSave,
        },
      ]}
    >
      <>
        <Form>
          <Space>
            <Form.Item>
              <OSelect
                name="product"
                placeholder="Select a product..."
                options={productOptions}
                onChange={() => {}}
                style={{ width: 250 }}
              />
            </Form.Item>
            <Form.Item label="Quantity">
              <Input type="number" style={{ width: 70 }} />
            </Form.Item>
            <Form.Item label="Unit of measure">
              <OSelect
                name="unitMeasure"
                options={unitMeasureOptions}
                onChange={() => {}}
                style={{ width: 120 }}
              />
            </Form.Item>
            <OButton btnText={'Add'} size="large" />
          </Space>
        </Form>
        <OTable
          bordered
          columns={AddNewItemTableColumns}
          rows={[]}
          pagination={false}
          style={{ marginTop: 10 }}
        />
      </>
    </OModal>
  );
};

export default AddNewItem;
