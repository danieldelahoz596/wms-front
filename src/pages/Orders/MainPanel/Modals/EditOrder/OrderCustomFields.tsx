import { EditableTable } from '@/components/Globals/EditableTable';
import { OButton } from '@/components/Globals/OButton';
import ConfigureFieldTypesModal from '@/pages/Orders/MainPanel/Modals/ConfigFieldTypes';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Button, Col, Row, Select, Space } from 'antd';
import { useEffect, useMemo, useState } from 'react';

const TColumns = [
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Name',
  },
  {
    key: 'value',
    dataIndex: 'value',
    title: 'Value',
    align: 'center',
    editable: true,
  },
  {
    key: 'show_on_grid',
    title: 'Show On Grid',
    dataIndex: 'show_on_grid',
    align: 'right',
    render: (show_on_grid) => (show_on_grid ? <CheckOutlined /> : <CloseOutlined />),
  },
];

const OrderCustomFields: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { editableOrder } = useModel('order');
  const { fieldTypes, customFields, setCustomFields } = useModel('customOrderFields');

  useEffect(() => {
    if (!editableOrder) setCustomFields([]);
    else setCustomFields(editableOrder.custom_fields);
  }, [editableOrder, fieldTypes, setCustomFields]);

  const FieldSelectOptions = useMemo(() => {
    const ids = customFields.map((field) => field.field_id);
    return fieldTypes
      .filter((type) => !ids.includes(type.id) && type.active)
      .map((field) => ({ label: field.name, value: field.id }));
  }, [fieldTypes, customFields]);

  const customFieldsTableRows = useMemo(
    () =>
      customFields.map((field) => ({
        key: field.field_id,
        value: field.value,
        ...fieldTypes.find((item) => item.id === field.field_id),
      })),
    [customFields, fieldTypes],
  );

  return (
    <>
      <h2>Manage Custom Fields</h2>
      <div className="button-row space-between">
        <Space size={HORIZONTAL_SPACE_SIZE}>
          <Select
            showSearch
            placeholder="Add Fields"
            style={{ width: '100%' }}
            size="small"
            options={FieldSelectOptions}
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            onSelect={(value) => {
              const addedFieldType = fieldTypes.find((fieldType) => fieldType.id === value);
              setCustomFields([
                ...customFields,
                {
                  field_id: addedFieldType.id,
                  value: 'Any value you want',
                },
              ]);
            }}
          />
          <OButton btnText={'Remove Field'} />
        </Space>
        <OButton btnText={'Configure Field Types'} onClick={() => setShowModal(true)} />
      </div>
      <EditableTable
        columns={TColumns}
        dataSource={customFieldsTableRows}
        props={{
          style: { marginTop: 10, height: 400 },
        }}
        handleSave={(index, name, value) => {
          setCustomFields(customFields.map((field) => (field.field_id === index ? { ...field, [name]: value } : field)));
        }}
      />

      <ConfigureFieldTypesModal isOpen={showModal} onSave={() => setShowModal(false)} onClose={() => setShowModal(false)} />
    </>
  );
};

export default OrderCustomFields;
