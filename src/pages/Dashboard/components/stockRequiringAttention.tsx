import { FormattedMessage } from '@umijs/max';
import { Card, Table } from 'antd';
import { useMemo } from 'react';

interface IStockRequiringAttention {
  stock: any;
}

const StockRequiringAttention: React.FC<IStockRequiringAttention> = ({ stock }) => {
  const Tcolumns = [
    {
      title: <FormattedMessage id="component.table.column.product" />,
      dataIndex: 'product',
      key: 'product',
    },
    {
      title: <FormattedMessage id="component.table.column.belowMin" />,
      dataIndex: 'below_min',
      key: 'below_min',
    },
    {
      title: <FormattedMessage id="component.table.column.estRunout" />,
      dataIndex: 'est_runout',
      key: 'est_runout',
    },
    {
      title: <FormattedMessage id="component.table.column.warehouse" />,
      dataIndex: 'warehouse',
      key: 'warehouse',
    },
    {
      title: <FormattedMessage id="component.table.column.incPO" />,
      dataIndex: 'inc_po',
      key: 'inc_po',
    },
  ];

  const rows = useMemo(() => {
    return stock?.map((_item, index) => ({ key: index, ..._item }));
  }, [stock]);

  return (
    <>
      <Card title={<FormattedMessage id="pages.dashboard.stockRequiringAttention" />}>
        <Table columns={Tcolumns} dataSource={rows} scroll={{ y: 200 }} pagination={{ hideOnSinglePage: true }} />
      </Card>
    </>
  );
};

export default StockRequiringAttention;
