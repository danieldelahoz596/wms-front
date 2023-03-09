import { OButton } from '@/components/Globals/OButton';
import CustomFieldsConfigureModal from '@/pages/Products/MainPanel/Modals/CustomFieldsConfigure';
import { EditableTable } from '@/components/Globals/EditableTable';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { FormattedMessage, useModel } from '@umijs/max';
import { Popconfirm, Select, Space } from 'antd';
import { useMemo, useState } from 'react';

interface ICustomFields {
  customFields: any[];
  setCustomFields: (value: any) => void;
}

const TColumns = [
  {
    key: 'name',
    dataIndex: 'name',
    title: <FormattedMessage id="component.table.column.name" />,
  },
  {
    key: 'value',
    dataIndex: 'value',
    title: <FormattedMessage id="component.table.column.value" />,
    align: 'center',
    editable: true,
  },
  {
    key: 'show_on_grid',
    title: <FormattedMessage id="component.table.column.showOnGrid" />,
    dataIndex: 'show_on_grid',
    align: 'right',
    render: (show_on_grid) => (show_on_grid ? <CheckOutlined /> : <CloseOutlined />),
  },
  {
    key: 'required',
    title: <FormattedMessage id="component.table.column.required" />,
    dataIndex: 'required',
    align: 'right',
    render: (required) => (required ? <CheckOutlined /> : <CloseOutlined />),
  },
];

const CustomFields: React.FC<ICustomFields> = ({ customFields, setCustomFields }) => {
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
      <h2>
        <FormattedMessage id="pages.products.coreProduct.customFields.description" />
      </h2>
      <div className="button-row space-between">
        <Space size={HORIZONTAL_SPACE_SIZE}>
          <Select
            showSearch
            placeholder={<FormattedMessage id="component.select.placeholder.addFields" />}
            style={{ width: '100%' }}
            size="small"
            options={FieldSelectOptions}
            filterOption={(input, option) => (option?.label ?? '').includes(input)}
            onSelect={(id) => {
              setCustomFields([...customFields, { field_id: id, value: 'Any value you want' }]);
            }}
          />
          <Popconfirm
            title={<FormattedMessage id="component.popconfirm.sureToRemove" />}
            onConfirm={() => {
              setCustomFields(customFields.filter((field) => field.field_id !== selectedItemId));
              setSelectedItemId(null);
            }}
          >
            <OButton btnText={<FormattedMessage id="component.button.removeField" />} disabled={!selectedItemId} />
          </Popconfirm>
        </Space>
        <OButton btnText={<FormattedMessage id="component.button.configureFieldTypes" />} onClick={() => setShowModal(true)} />
      </div>
      <EditableTable
        columns={TColumns}
        dataSource={dataSource}
        props={{
          style: { height: 400 },
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
          setCustomFields(customFields.map((field) => (field.field_id === index ? { ...field, [name]: value } : field)));
        }}
      />

      <CustomFieldsConfigureModal isOpen={showModal} onSave={() => setShowModal(false)} onClose={() => setShowModal(false)} />
    </>
  );
};

export default CustomFields;
