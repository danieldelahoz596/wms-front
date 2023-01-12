import BookIcon from '@/utils/icons/book';
import {
  CaretDownOutlined,
} from '@ant-design/icons';
import { Tree } from 'antd';
import type { DataNode } from 'antd/es/tree';
import React, { useState } from 'react';

const SearchByCategoriesPanel: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const treeCategoryData: DataNode[] = [
    {
      title: 'Categories',
      key: '0-0',
      children: [
        {
          title: '100 Ballons + Ribbon',
          key: '0-0-0',
          icon: <BookIcon style={{ width: 15 }} />,
        },
        {
          title: '12 Per Month',
          key: '0-0-1',
          icon: <BookIcon style={{ width: 15 }} />,
        },
        {
          title: '20oz Cruiser-case',
          key: '0-0-2',
          icon: <BookIcon style={{ width: 15 }} />,
        },
        {
          title: '273yd',
          key: '0-0-3',
          icon: <BookIcon style={{ width: 15 }} />,
        },
        {
          title: '6 Per Month',
          key: '0-0-4',
          icon: <BookIcon style={{ width: 15 }} />,
        },
        {
          title: '7yd',
          key: '0-0-5',
          icon: <BookIcon style={{ width: 15 }} />,
        },
        {
          title: 'Accessories',
          key: '0-0-6',
          icon: <BookIcon style={{ width: 15 }} />,
        },
        {
          title: 'Amico',
          key: '0-0-7',
          icon: <BookIcon style={{ width: 15 }} />,
        },
        {
          title: 'Apparel',
          key: '0-0-8',
          icon: <BookIcon style={{ width: 15 }} />,
        },
        {
          title: 'As',
          key: '0-0-9',
          icon: <BookIcon style={{ width: 15 }} />,
        },
        {
          title: 'Balls',
          key: '0-0-10',
          icon: <BookIcon style={{ width: 15 }} />,
        },
        {
          title: 'Birds',
          key: '0-0-11',
          icon: <BookIcon style={{ width: 15 }} />,
        },
      ],
    },
  ];
  const treeLabelData: DataNode[] = [
    {
      title: 'Labels',
      key: '1-0',
      children: [
        {
          title: 'label1',
          key: '0-1-0',
          icon: <BookIcon style={{ width: 15 }} />,
        },
        {
          title: 'label2',
          key: '0-1-1',
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
      treeData={treeCategoryData}
      rootStyle={{ fontSize: 15 }}
      selectedKeys={selectedKeys}
      onSelect={onSelect}
      multiple
    />
    <Tree
      showIcon
      defaultExpandAll
      defaultSelectedKeys={['0-0-0']}
      switcherIcon={<CaretDownOutlined />}
      treeData={treeLabelData}
      rootStyle={{ fontSize: 15 }}
      selectedKeys={selectedKeys}
      onSelect={onSelect}
      multiple
    />
  </div>
};

export default SearchByCategoriesPanel;