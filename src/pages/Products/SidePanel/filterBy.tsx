import BookIcon from '@/utils/icons/book';
import { CaretDownOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, Tree } from 'antd';
import type { DataNode } from 'antd/es/tree';
import React, { useEffect, useMemo, useState } from 'react';

const FilterByPanel: React.FC = () => {
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const { initialState } = useModel('@@initialState');
  const [labelOptinos, setLabelOptinos] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    if (initialState?.initialData) {
      setLabelOptinos(
        initialState.initialData.labels.map((label, index) => ({
          title: label.name,
          key: `1-0-${index}`,
          icon: <BookIcon style={{ width: 15 }} />,
        })),
      );

      setCategoryOptions(
        initialState.initialData.categories.map((category, index) => ({
          title: category.name,
          key: `0-0-${index}`,
          icon: <BookIcon style={{ width: 15 }} />,
        })),
      );
    }
  }, [initialState?.initialData]);

  const treeCategoryData: DataNode[] = useMemo(
    () => [
      {
        title: 'Categories',
        key: '0-0',
        children: categoryOptions,
      },
    ],
    [categoryOptions],
  );

  const treeLabelData: DataNode[] = useMemo(
    () => [
      {
        title: 'Labels',
        key: '1-0',
        children: labelOptinos,
      },
    ],
    [labelOptinos],
  );

  const onSelect = (selectedKeysValue: React.Key[], event: any) => {
    if (event.nativeEvent.ctrlKey) {
      setSelectedKeys(selectedKeysValue);
    } else {
      if (selectedKeys[0] === event.node.key) setSelectedKeys([]);
      else setSelectedKeys([event.node.key]);
    }
  };

  return (
    <Card>
      <h3>
        &nbsp;&nbsp;<i>{"Hold 'Ctrl' or '' Key to select multiple."}</i>
      </h3>
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
    </Card>
  );
};

export default FilterByPanel;
