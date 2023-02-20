import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { EditableTable } from '@/utils/components/EditableTable';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { uuidv4 } from '@antv/xflow-core';
import { useModel } from '@umijs/max';
import { Col, Row, Space } from 'antd';
import Checkbox from 'antd/es/checkbox';
import React, { useState } from 'react';
import NewFieldType from './NewFieldType';

interface IConfigureFieldTypesModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ConfigureFieldTypesModal: React.FC<IConfigureFieldTypesModal> = ({
  isOpen,
  onClose,
  onSave,
}) => {
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
      helpLink="/help/orders/general"
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
        <Row justify="space-between">
          <Col>
            <Space size={10}>
              <OButton size="small" btnText="New Field Type" onClick={handleAddNewType} />
              <OButton
                size="small"
                btnText={showActive ? 'Deactivate' : 'Activate'}
                disabled={!selectedItemId}
                onClick={handleDeactive}
              />
            </Space>
          </Col>
          <Col>
            <OButton
              size="small"
              btnText={showActive ? 'Show Inactive' : 'Show Active'}
              onClick={() => {
                setSelectedItemId(null);
                setShowActive((prev) => !prev);
              }}
            />
          </Col>
        </Row>

        <div className="mt-10">
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
      </>
    </OModal>
  );
};

export default ConfigureFieldTypesModal;
