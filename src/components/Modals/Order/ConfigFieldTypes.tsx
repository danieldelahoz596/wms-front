import React, { useState } from 'react';
import { Row, Col, Button, Space } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { EditableTable } from '@/utils/components/EditableTable';
import NewFieldType from './NewFieldType';
import Checkbox from 'antd/es/checkbox';
import { uuidv4 } from '@antv/xflow-core';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

interface IConfigureFieldTypes {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ConfigureFieldTypes: React.FC<IConfigureFieldTypes> = ({ isOpen, onClose, onSave }) => {
  const { fieldTypes, setFieldTypes } = useModel('customOrderFields');
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
              fieldTypes.map((field) =>
                field.id === record.id ? { ...field, show_on_grid: !field.show_on_grid } : field,
              ),
            )
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
    setFieldTypes(
      fieldTypes.map((field) =>
        field.id === selectedItemId ? { ...field, active: !field.active } : field,
      ),
    );
  };

  return (
    <OModal
      title="Configure Fields Definitions"
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
      <Row justify="space-between">
        <Col>
          <Space size={10}>
            <Button onClick={handleAddNewType}>New Field Type</Button>
            <Button disabled={!selectedItemId} onClick={handleDeactive}>
              {showActive ? 'Deactivate' : 'Activate'}
            </Button>
          </Space>
        </Col>
        <Col>
          <Button
            onClick={() => {
              setSelectedItemId(null);
              setShowActive((prev) => !prev);
            }}
          >
            Show {showActive ? 'Inactive' : 'Active'}
          </Button>
        </Col>
      </Row>

      <div style={{ marginTop: 10 }}>
        <EditableTable
          columns={TColumns}
          dataSource={fieldTypes
            .filter((field) => field.active === showActive)
            .map((fields) => ({ key: fields.id, ...fields }))}
          handleSave={(key: any, name: any, value: any) => {
            setFieldTypes(
              fieldTypes.map((field) => (field.id === key ? { ...field, [name]: value } : field)),
            );
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
            rowClassName: (record) =>
              record.id === selectedItemId ? `ant-table-row-selected` : '',
          }}
        />
      </div>

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
              active: false,
            },
          ]);
          setShowModal(false);
        }}
        onClose={() => setShowModal(false)}
      />
    </OModal>
  );
};

export default ConfigureFieldTypes;
