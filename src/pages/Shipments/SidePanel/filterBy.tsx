import { GlobalOutlined, HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, Tree } from 'antd';
import type { DataNode } from 'antd/es/tree';

const FilterByPanel: React.FC = () => {
  const { setSearchType } = useModel('shipment');

  const treeData: DataNode[] = [
    {
      title: 'Shipments',
      key: 'shipments',
      children: [
        {
          title: 'In-House Warehouse',
          key: 'warehouse',
          icon: <HomeOutlined />,
          children: [
            {
              title: 'Channels',
              key: 'channels',
              icon: <ShoppingCartOutlined />,
              children: [
                {
                  title: 'Manual Orders',
                  key: 'manual_orders',
                  icon: <GlobalOutlined />,
                },
                {
                  title: 'Shopify',
                  key: 'shopify',
                  icon: <GlobalOutlined />,
                },
              ],
            },
            {
              title: 'Carriers',
              key: 'carriers',
              icon: <ShoppingCartOutlined />,
            },
          ],
        },
      ],
    },
    {
      title: 'Batches',
      key: 'batches',
      children: [
        {
          title: 'In-House Warehouse',
          key: 'warehouse',
          icon: <HomeOutlined />,
          children: [
            {
              title: 'Channels',
              key: 'channels',
              icon: <ShoppingCartOutlined />,
              children: [
                {
                  title: 'Manual Orders',
                  key: 'manual_orders',
                  icon: <GlobalOutlined />,
                },
                {
                  title: 'Shopify',
                  key: 'shopify',
                  icon: <GlobalOutlined />,
                },
              ],
            },
            {
              title: 'Carriers',
              key: 'carriers',
              icon: <ShoppingCartOutlined />,
            },
          ],
        },
      ],
    },
    {
      title: 'Returns',
      key: 'returns',
      children: [
        {
          title: 'In-House Warehouse',
          key: 'warehouse',
          icon: <HomeOutlined />,
          children: [
            {
              title: 'Channels',
              key: 'channels',
              icon: <ShoppingCartOutlined />,
              children: [
                {
                  title: 'Manual Orders',
                  key: 'manual_orders',
                  icon: <GlobalOutlined />,
                },
                {
                  title: 'Shopify',
                  key: 'shopify',
                  icon: <GlobalOutlined />,
                },
              ],
            },
            {
              title: 'Carriers',
              key: 'carriers',
              icon: <ShoppingCartOutlined />,
            },
          ],
        },
      ],
    },
    {
      title: 'End of Day Forms',
      key: 'end_of_day_form',
    },
  ];

  return (
    <Card>
      <Tree showIcon treeData={treeData} onSelect={(selectedKeys) => setSearchType(selectedKeys[0])} />
    </Card>
  );
};

export default FilterByPanel;
