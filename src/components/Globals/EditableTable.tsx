import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Form, Input, Table, Select } from 'antd';
import type { FormInstance } from 'antd/es/form';

interface EditableRowProps {
  index: number;
}

interface EditableCellProps {
  index: number;
  focused: boolean;
  setFocusIndex: (value: any) => void;
  title: React.ReactNode;
  editable: boolean;
  options: { value; label }[];
  children: React.ReactNode;
  dataIndex: string;
  record: any;
  handleSave: (index: any, name: any, value: any) => void;
}

interface ITable {
  dataSource: any;
  columns: any[];
  handleSave: (index: any, name: any, value: any) => void;
  pagination?: boolean;
  props?: any;
}

interface IColumn {
  editable: boolean;
  dataIndex: string;
  title: string;
}

const EditableContext = React.createContext<FormInstance<any> | null>(null);

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

export const EditableCell: React.FC<EditableCellProps> = ({
  index,
  focused,
  setFocusIndex,
  title,
  editable,
  options,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      inputRef.current!.focus();
    }
  }, [editing]);

  useEffect(() => {
    if (focused) {
      setEditing(true);
      form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    }
  }, [focused, form, dataIndex, record, index]);

  const toggleEdit = () => {
    if (!editing) {
      setFocusIndex(index);
    }
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      const name = Object.keys(values)[0];
      const value = Object.values(values)[0];
      handleSave(record.key, name, value);
      toggleEdit();
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  const handlePressEnter = async () => {
    setFocusIndex((prev) => prev + 1);
    setEditing(!editing);

    try {
      const values = await form.validateFields();
      const name = Object.keys(values)[0];
      const value = Object.values(values)[0];
      handleSave(record.key, name, value);
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      options ? (
        <Form.Item
          style={{ margin: 0 }}
          name={dataIndex}
          rules={[
            {
              required: true,
              message: `${title} is required.`,
            },
          ]}
        >
          <Select
            ref={inputRef}
            options={options}
            onChange={save}
            // onPressEnter={save}
            onBlur={() => toggleEdit()}
            autoFocus={true}
          />
        </Form.Item>
      ) : (
        <Form.Item
          style={{ margin: 0 }}
          name={dataIndex}
          rules={[
            {
              required: true,
              message: `${title} is required.`,
            },
          ]}
        >
          <Input ref={inputRef} onPressEnter={handlePressEnter} onBlur={save} autoFocus={true} />
        </Form.Item>
      )
    ) : (
      <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

export const EditableTable: React.FC<ITable> = ({ dataSource, columns, handleSave, pagination = false, props }) => {
  const [focusIndex, setFocusIndex] = useState<number>(0);
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const _columns = useMemo(() => {
    let index = 0;
    return columns.map((col: any) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: IColumn) => {
          index++;
          return {
            index,
            focused: index === focusIndex,
            setFocusIndex,
            record,
            editable: col.editable,
            options: col.options,
            dataIndex: col.dataIndex,
            title: col.title,
            handleSave,
          };
        },
      };
    });
  }, [columns, handleSave, focusIndex]);

  return (
    <div>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={_columns}
        pagination={pagination}
        {...props}
      />
    </div>
  );
};
