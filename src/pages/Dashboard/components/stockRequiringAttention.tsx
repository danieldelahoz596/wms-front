import { Table } from 'antd';
import { useMemo } from 'react';

interface IStockRequiringAttention {
  stock: any;
}

const StockRequiringAttention: React.FC<IStockRequiringAttention> = ({ stock }) => {
  const Tcolumns = [
    {
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: '# BELOW MIN.',
      dataIndex: 'below_min',
      key: 'below_min',
    },
    {
      title: 'EST.RUNOUT',
      dataIndex: 'est_runout',
      key: 'est_runout',
    },
    {
      title: 'WAREHOUSE',
      dataIndex: 'warehouse',
      key: 'warehouse',
    },
    {
      title: 'INC. P.O',
      dataIndex: 'inc_po',
      key: 'inc_po',
    },
  ];

  const rows = useMemo(() => {
    return stock?.map((_item, index) => ({ key: index, ..._item }));
  }, [stock]);

  return (
    <>
      <div style={{ fontSize: 25, marginBottom: 10 }}>STOCK REQUIRING ATTENTION</div>
      <Table
        columns={Tcolumns}
        dataSource={rows}
        scroll={{ y: 200 }}
        pagination={{ hideOnSinglePage: true }}
      />
    </>
  );
};

export default StockRequiringAttention;
