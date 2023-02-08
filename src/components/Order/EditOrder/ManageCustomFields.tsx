import { OButton } from '@/components/Globals/OButton';
import ConfigureFieldTypes from '@/components/Modals/Order/ConfigFieldTypes';
import { EditableTable } from '@/utils/components/EditableTable';
import { useModel } from '@umijs/max';
import { Button, Checkbox, Col, Row, Select } from 'antd';
import { useMemo, useState } from 'react';

const ManageCustomFields: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { fieldTypes, customFields, setCustomFields } = useModel('customOrderFields');

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
      render: (show_on_grid, record) => (
        <Checkbox
          checked={show_on_grid}
          onClick={() => {
            setCustomFields(
              customFields.map((field) =>
                field.id === record.id ? { ...field, show_on_grid: !field.show_on_grid } : field,
              ),
            );
          }}
        />
      ),
    },
  ];

  const FieldSelectOptions = useMemo(() => {
    const ids = customFields.map((field) => field.id);
    return fieldTypes
      .filter((type) => !ids.includes(type.id) && type.active)
      .map((field) => ({ label: field.name, value: field.id }));
  }, [fieldTypes, customFields]);

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
                { ...addedFieldType, value: 'Any value you want', key: addedFieldType.id },
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
        dataSource={customFields}
        props={{
          style: { marginTop: 10, height: 400 },
        }}
        handleSave={(index, name, value) => {
          setCustomFields(
            customFields.map((field) => (field.id === index ? { ...field, [name]: value } : field)),
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

export default ManageCustomFields;
