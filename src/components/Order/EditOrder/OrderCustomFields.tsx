import { OButton } from '@/components/Globals/OButton';
import ConfigureFieldTypes from '@/components/Modals/Order/ConfigFieldTypes';
import { EditableTable } from '@/utils/components/EditableTable';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Button, Col, Row, Select } from 'antd';
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
      <Row align="middle" gutter={10}>
        <Col span={24}>
          <p>
            <b>Manage Custom Fields</b>
          </p>
        </Col>
        <Col span={7}>
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
        </Col>
        <Col span={10}>
          <Button>Remove Field</Button>
        </Col>
        <Col span={7}>
          <Row justify="end">
            <OButton btnText={'Configure Field Types'} onClick={() => setShowModal(true)} />
          </Row>
        </Col>
      </Row>

      <EditableTable
        columns={TColumns}
        dataSource={customFieldsTableRows}
        props={{
          style: { marginTop: 10, height: 400 },
        }}
        handleSave={(index, name, value) => {
          setCustomFields(
            customFields.map((field) =>
              field.field_id === index ? { ...field, [name]: value } : field,
            ),
          );
        }}
      />

      <ConfigureFieldTypes
        isOpen={showModal}
        onSave={() => setShowModal(false)}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default OrderCustomFields;
