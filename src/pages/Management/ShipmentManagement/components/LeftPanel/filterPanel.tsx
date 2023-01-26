import { GlobalOutlined, HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import type { DataNode } from 'antd/es/tree';

const FilterPanel: React.FC = () => {
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
    },
    {
      title: 'Returns',
      key: 'returns',
      children: [
        {
          title: 'End of Day Forms',
          key: 'end_of_day_form',
        },
      ],
    },
  ];

  return <Tree showIcon treeData={treeData} />;
};

export default FilterPanel;
