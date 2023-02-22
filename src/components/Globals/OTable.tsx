import { Table } from 'antd';
import React from 'react';

interface IOTableColumn {
  title?: string;
  dataIndex?: string;
  key?: string;
  align?: string;
}

interface IOTable {
  columns: IOTableColumn[];
  rows: any[];
  type?: 'checkbox' | 'radio';
  pagination?: boolean;
  selectedRows?: any[];
  setSelectedRows?: (rows: any[]) => void;
  onSelect?: (record: any) => void;
  scrollx?: false;
  scrolly?: false;
  style?: any;
  bordered?: boolean;
}

export const OTable: React.FC<IOTable> = ({
  columns,
  rows,
  type = 'checkbox',
  pagination = true,
  selectedRows,
  setSelectedRows,
  onSelect,
  scrollx,
  scrolly,
  style,
  bordered = true,
}) => {
  const selectRow = (record: any) => {
    let _selectedRowKeys = selectedRows ? [...selectedRows] : [];
    if (_selectedRowKeys.indexOf(record.key) >= 0) {
      _selectedRowKeys.splice(_selectedRowKeys.indexOf(record.key), 1);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      type === 'radio' ? (_selectedRowKeys = [record.key]) : _selectedRowKeys.push(record.key);
    }

    if (setSelectedRows) {
      setSelectedRows(_selectedRowKeys);
    }
  };

  const rowSelection = {
    selectedRowKeys: selectedRows ? [...selectedRows] : [],
    onChange: (_selectedRowKeys: React.Key[]) => {
      if (setSelectedRows) {
        setSelectedRows(_selectedRowKeys);
      }
    },
    onselect: onSelect,
    getCheckboxProps: (record: any) => ({
      disabled: record.vendor === '', // Column configuration not to be checked
      vendor: record.vendor,
    }),
  };

  return (
    <Table
      className={type == 'radio' ? 'radioTable' : 'checkboxTable'}
      rowSelection={selectedRows && { type: type, ...rowSelection }}
      onRow={(record) => ({
        onClick: () => {
          selectRow(record);
        },
      })}
      bordered={bordered}
      columns={columns}
      scroll={scrollx ? (scrolly ? { x: scrollx, y: scrolly } : { x: scrollx }) : scrolly ? { y: scrolly } : {}}
      dataSource={rows}
      size={'small'}
      pagination={
        pagination
          ? {
              defaultPageSize: 10,
              showSizeChanger: true,
              pageSizeOptions: ['10', '20', '30'],
              showTotal: (total, range) => `${range[0]} to ${range[1]} of ${total}`,
            }
          : false
      }
      style={style}
    />
  );
};
