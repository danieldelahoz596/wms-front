import ConfigureFieldTypes from '@/components/Modals/Product/ConfigFieldTypes';
import { EditableTable } from '@/utils/components/EditableTable';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Row, Col, Select, Button } from 'antd';
import { useState, useMemo } from 'react';

const ProductCustomFields: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { fieldTypes, customFields, setCustomFields } = useModel('customProductFields');
  const [selectedItemId, setSelectedItemId] = useState(null);

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
    {
      key: 'required',
      title: 'Required',
      dataIndex: 'required',
      align: 'right',
      render: (required) => (required ? <CheckOutlined /> : <CloseOutlined />),
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
          <Button
            onClick={() => {
              setCustomFields(customFields.filter((field) => field.id !== selectedItemId));
              setSelectedItemId(null);
            }}
            disabled={!selectedItemId}
          >
            Remove Field
          </Button>
        </Col>
        <Col span={7}>
          <Row justify="end">
            <Button onClick={() => setShowModal(true)}>Configure Field Types</Button>
          </Row>
        </Col>
      </Row>

      <EditableTable
        columns={TColumns}
        dataSource={customFields}
        props={{
          style: { marginTop: 10, height: 400 },
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

export default ProductCustomFields;
