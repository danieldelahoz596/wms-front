import { useMemo } from 'react';
import { useModel } from '@umijs/max';
import { Pie } from '@ant-design/charts';
import { Row, Col } from 'antd';

const OrderAgingByWarehouse: React.FC = () => {
  const { warehouseList } = useModel('warehouse');

  const pieData = useMemo(() => {
    return warehouseList.map((_warehouse) => {
      const currentDay = new Date();
      const createdDay = new Date(_warehouse.created_at);
      const days = Math.ceil((currentDay.getTime() - createdDay.getTime()) / (1000 * 60 * 60 * 24));
      return { name: _warehouse.name, days };
    });
  }, [warehouseList]);

  return (
    <>
      <div style={{ fontSize: 25 }}>ORDER AGING BY WAREHOUSE</div>
      <Row>
        <Col span={24}>
          <Pie
            data={pieData}
            angleField="days"
            colorField="name"
            radius={0.75}
            interactions={[
              {
                type: 'element-selected',
              },
              {
                type: 'element-active',
              },
            ]}
            legend={{
              position: 'bottom-left',
              maxRow: 5,
              flipPage: false,
              marker: { symbol: 'square' },
              offsetX: 100,
            }}
            label={false}
          />
        </Col>
      </Row>
    </>
  );
};

export default OrderAgingByWarehouse;
