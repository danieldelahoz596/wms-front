import { FormattedMessage, useModel } from '@umijs/max';
import { Collapse } from 'antd';
import StockCollapse from './StockCollapse';

interface IStockDetails {
  selectedShowWarehouseItems: any[];
}

const StockDetails: React.FC<IStockDetails> = ({ selectedShowWarehouseItems }) => {
  const { warehouseList } = useModel('warehouse');
  const { stockDetails } = useModel('stockLocation');

  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ marginLeft: '10px' }}>
        <FormattedMessage id="pages.inventory.stock.rightpanel.title" />
      </h2>
      <Collapse defaultActiveKey={warehouseList[0]?.id}>
        {stockDetails
          .filter((item) => selectedShowWarehouseItems.includes(item.warehouse_id))
          .map((stockData) => (
            <StockCollapse data={stockData} key={stockData.warehouse_id} />
          ))}
      </Collapse>
    </div>
  );
};

export default StockDetails;
