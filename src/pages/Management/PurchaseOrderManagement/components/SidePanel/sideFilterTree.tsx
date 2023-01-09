import React, { useEffect } from 'react';
import { Tree } from 'antd';
import { useModel } from 'umi';

const SideFilterTree: React.FC = () => {
  const { changeSelectedPOStatus, poStatusList, initialPOStatus } = useModel('poStatus');

  useEffect(() => {
    if (poStatusList.length == 0) {
      initialPOStatus();
    }
  });

  const onSelect = (selectedKey: any) => {
    let selectedPOS = null;
    if (Array.isArray(selectedKey) && selectedKey.length > 0) {
      const _selectedKeys = selectedKey[0]?.split('-');

      const _selectedWarehouse = _selectedKeys[1] !== "0" ? _selectedKeys[1] : null;

      selectedPOS = {
        poStatus: _selectedKeys[0],
        warehouse: _selectedWarehouse,
      };
    }
    changeSelectedPOStatus(selectedPOS);
  };

  const preparePoFiltersForTree = poStatusList?.map((statusItem) => {
    return {
      key: `${statusItem.po_status.id}`,
      title: (
        <span>
          {statusItem.po_status.name}{' '}
          <span className="tree-badge"> {statusItem.po_status.num} </span>
        </span>
      ),
      children: [
        {
          key: `${statusItem.po_status.id}-0`,
          title: 'All',
        },
        ...statusItem.filters.map((filter) => {
          return {
            key: `${statusItem.po_status.id}-${filter.warehouse.id}`,
            title: (
              <span>
                {filter.warehouse.name} <span className="tree-badge"> {filter.num} </span>
              </span>
            ),
          };
        }),
      ],
    };
  });

  return <Tree treeData={preparePoFiltersForTree} showLine={true} onSelect={onSelect} />;
};

export default SideFilterTree;
