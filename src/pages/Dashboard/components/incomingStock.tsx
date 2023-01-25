import { Card, Table } from 'antd';
import { useMemo } from 'react';

interface IIncomingStock {
  stock: any;
}

const IncomingStock: React.FC<IIncomingStock> = ({ stock }) => {
  const Tcolumns = [
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: 'UNITS',
      dataIndex: 'units',
      key: 'units',
      align: 'center',
    },
    {
      title: 'VALUE',
      dataIndex: 'value',
      key: 'value',
      render: (text) => <>${text}</>,
      align: 'center',
    },
    {
      title: 'ARRIVING',
      dataIndex: 'arriving',
      key: 'arriving',
      align: 'center',
    },
    {
      title: 'P.O. #',
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
      <Card title="Incoming Stock">
        <Table
          columns={Tcolumns}
          dataSource={rows}
          scroll={{ y: 200 }}
          pagination={{ hideOnSinglePage: true }}
        />
      </Card>
    </>
  );
};

export default IncomingStock;
