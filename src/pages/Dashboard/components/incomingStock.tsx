import { FormattedMessage } from '@umijs/max';
import { Card, Table } from 'antd';
import { useMemo } from 'react';

interface IIncomingStock {
  stock: any;
}

const IncomingStock: React.FC<IIncomingStock> = ({ stock }) => {
  const Tcolumns = [
    {
      title: <FormattedMessage id="component.table.column.product" />,
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: <FormattedMessage id="component.table.column.units" />,
      dataIndex: 'units',
      key: 'units',
      align: 'center',
    },
    {
      title: <FormattedMessage id="component.table.column.value" />,
      dataIndex: 'value',
      key: 'value',
      render: (text) => <>${text}</>,
      align: 'center',
    },
    {
      title: <FormattedMessage id="component.table.column.arriving" />,
      dataIndex: 'arriving',
      key: 'arriving',
      align: 'center',
    },
    {
      title: <FormattedMessage id="component.table.column.poNumber" />,
      dataIndex: 'po_number',
      key: 'po_number',
      align: 'center',
    },
  ];

  const rows = useMemo(() => {
    return stock?.map((_item, index) => ({ key: index, ..._item }));
  }, [stock]);

  return (
    <>
      <Card title={<FormattedMessage id="pages.dashboard.incomingStock" />}>
        <Table columns={Tcolumns} dataSource={rows} scroll={{ y: 200 }} pagination={{ hideOnSinglePage: true }} />
      </Card>
    </>
  );
};

export default IncomingStock;
