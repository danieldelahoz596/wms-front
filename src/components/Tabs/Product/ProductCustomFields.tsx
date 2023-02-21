import { OButton } from '@/components/Globals/OButton';
import ConfigureFieldTypes from '@/pages/Products/components/Modals/ConfigFieldTypes';
import { EditableTable } from '@/utils/components/EditableTable';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Col, Row, Select } from 'antd';
import { useMemo, useState } from 'react';

interface IProductCustomFields {
  customFields: any[];
  setCustomFields: (value: any) => void;
}

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

const ProductCustomFields: React.FC<IProductCustomFields> = ({ customFields, setCustomFields }) => {
  const { fieldTypes } = useModel('customProductFields');
  const [showModal, setShowModal] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const dataSource = useMemo(
    () =>
      customFields.map((customField) => ({
        key: customField.field_id,
        ...fieldTypes.find((item) => item.id === customField.field_id),
        value: customField.value,
      })),
    [customFields, fieldTypes],
  );

  const FieldSelectOptions = useMemo(() => {
    const ids = customFields.map((field) => field.field_id);
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
            onSelect={(id) => {
              setCustomFields([...customFields, { field_id: id, value: 'Any value you want' }]);
            }}
          />
        </Col>
        <Col span={10}>
          <OButton
            btnText={'Remove Field'}
            onClick={() => {
              setCustomFields(customFields.filter((field) => field.field_id !== selectedItemId));
              setSelectedItemId(null);
            }}
            disabled={!selectedItemId}
          />
        </Col>
        <Col span={7}>
          <Row justify="end">
            <OButton btnText={'Configure Field Types'} onClick={() => setShowModal(true)} />
          </Row>
        </Col>
      </Row>

      <EditableTable
        columns={TColumns}
        dataSource={dataSource}
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

export default ProductCustomFields;
