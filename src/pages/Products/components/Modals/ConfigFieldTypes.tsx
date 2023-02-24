import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { EditableTable } from '@/components/Globals/EditableTable';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { uuidv4 } from '@antv/xflow-core';
import { useModel } from '@umijs/max';
import { Popconfirm, Space } from 'antd';
import Checkbox from 'antd/es/checkbox';
import React, { useState } from 'react';
import NewFieldType from './NewFieldType';

interface IConfigureFieldTypesModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ConfigureFieldTypesModal: React.FC<IConfigureFieldTypesModal> = ({ isOpen, onClose, onSave }) => {
  const { fieldTypes, setFieldTypes } = useModel('customProductFields');
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showActive, setShowActive] = useState(true);

  const TColumns = [
    {
      key: 'name',
      dataIndex: 'name',
      title: 'Name',
      editable: true,
    },
    {
      key: 'description',
      dataIndex: 'description',
      title: 'Description',
      align: 'center',
      editable: true,
    },
    {
      key: 'show_on_grid',
      dataIndex: 'show_on_grid',
      title: 'Show On Grid',
      align: 'center',
      render: (value, record) => (
        <Checkbox
          checked={value}
          onClick={() =>
            setFieldTypes(
              fieldTypes.map((field) => (field.id === record.id ? { ...field, show_on_grid: !field.show_on_grid } : field)),
            )
          }
        />
      ),
    },
    {
      key: 'required',
      dataIndex: 'required',
      title: 'Required',
      align: 'center',
      render: (value, record) => (
        <Checkbox
          checked={value}
          onClick={() =>
            setFieldTypes(fieldTypes.map((field) => (field.id === record.id ? { ...field, required: !field.required } : field)))
          }
        />
      ),
    },
    {
      key: 'active',
      dataIndex: 'active',
      title: 'Active',
      align: 'right',
      render: (active) => (active ? <CheckOutlined /> : <CloseOutlined />),
    },
  ];

  const handleAddNewType = () => {
    setShowModal(true);
  };

  const handleDeactive = () => {
    setFieldTypes(fieldTypes.map((field) => (field.id === selectedItemId ? { ...field, active: !field.active } : field)));
  };

  return (
    <OModal
      title="Configure Fields Definitions"
      helpLink="/help/products/customproductfields"
      width={600}
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
          onClick: onSave,
        },
      ]}
    >
      <>
        <div className="button-row space-between">
          <Space size={HORIZONTAL_SPACE_SIZE}>
            <OButton btnText="New Field Type" onClick={handleAddNewType} />
            <Popconfirm
              title={'Sure to Deactivate?'}
              onConfirm={() => {
                handleDeactive;
              }}
            >
              <OButton disabled={!selectedItemId} btnText={showActive ? 'Deactivate' : 'Activate'} />
            </Popconfirm>
          </Space>
          <OButton
            btnText={showActive ? 'Show Inactive' : 'Show Active'}
            onClick={() => {
              setSelectedItemId(null);
              setShowActive((prev) => !prev);
            }}
          />
        </div>
        <EditableTable
          columns={TColumns}
          dataSource={fieldTypes.filter((field) => field.active === showActive).map((fields) => ({ key: fields.id, ...fields }))}
          handleSave={(key: any, name: any, value: any) => {
            setFieldTypes(fieldTypes.map((field) => (field.id === key ? { ...field, [name]: value } : field)));
          }}
          props={{
            onRow: (record) => {
              return {
                onClick: () => {
                  if (selectedItemId === record.id) setSelectedItemId(null);
                  else setSelectedItemId(record.id);
                },
              };
            },
            rowClassName: (record) => (record.id === selectedItemId ? `ant-table-row-selected` : ''),
          }}
        />

        <NewFieldType
          isOpen={showModal}
          onSave={(values) => {
            setFieldTypes([
              ...fieldTypes,
              {
                id: uuidv4(),
                name: values.name,
                description: values.description,
                show_on_grid: true,
                required: true,
                active: false,
              },
            ]);
            setShowModal(false);
          }}
          onClose={() => setShowModal(false)}
        />
      </>
    </OModal>
  );
};

export default ConfigureFieldTypesModal;
