import BookIcon from '@/utils/icons/book';
import {
  CaretDownOutlined,
} from '@ant-design/icons';
import { Tree } from 'antd';
import type { DataNode } from 'antd/es/tree';
import React, { useState } from 'react';

const SearchByCategoriesPanel: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const treeData: DataNode[] = [
    {
      title: 'Categories',
      key: '0-0',
      children: [
        {
          title: 'leaf',
          key: '0-0-0',
          icon: <BookIcon style={{ width: 15 }} />,
        },
        {
          title: 'leaf',
          key: '0-0-1',
          icon: <BookIcon style={{ width: 15 }} />,
        },
      ],
    },
  ];

  const onSelect = (selectedKeysValue: React.Key[], event: any) => {
    if (event.nativeEvent.ctrlKey) {
      setSelectedKeys(selectedKeysValue)
    } else {
      setSelectedKeys([event.node.key]);
    }
  };

  return <div>
    <h3>Hold 'Ctrl' or '' Key to select multiple.</h3>
    <Tree
      showIcon
      defaultExpandAll
      defaultSelectedKeys={['0-0-0']}
      switcherIcon={<CaretDownOutlined />}
      treeData={treeData}
      rootStyle={{ fontSize: 15 }}
      selectedKeys={selectedKeys}
      onSelect={onSelect}
      multiple
    />
  </div>
};

export default SearchByCategoriesPanel;