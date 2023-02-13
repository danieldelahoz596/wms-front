import { AddNewItemTableColumns, AddNewItemTableData } from '@/components/DemoData/index';
import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import type { IOSelectOption } from '@/components/Globals/OSelect';
import { OSelect } from '@/components/Globals/OSelect';
import { OTable } from '@/components/Globals/OTable';
import { modalType } from '@/utils/helpers/types';
import { Form, Input, Row } from 'antd';
import React from 'react';

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
      title={'Add Items To ' + title}
      helpLink=""
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
                placeholder="Select a product..."
                options={productOptions}
                onChange={() => {}}
                style={{ width: 220 }}
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
            <OButton btnText={'Add'} size="large" />
          </Form>
        </Row>
        <OTable
          bordered
          columns={AddNewItemTableColumns}
          rows={AddNewItemTableData}
          pagination={false}
        />
      </>
    </OModal>
  );
};

export default AddNewItemModal;
