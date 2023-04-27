import React, { useEffect } from 'react';
import { Card, Tree } from 'antd';
import { useModel } from 'umi';

const FilterByPanel: React.FC = () => {
  const { setSelectedPOStatus, poStatusList, getPOStatusFilterList } = useModel('poStatus');

  useEffect(() => {
    if (poStatusList.length == 0) {
      getPOStatusFilterList();
    }
  }, [getPOStatusFilterList, poStatusList]);

  const onSelect = (selectedKey: any) => {
    if (Array.isArray(selectedKey) && selectedKey.length > 0) {
      const _selectedKeys = selectedKey[0]?.split('-');
      setSelectedPOStatus({
        status_id: parseInt(_selectedKeys[0]),
        destination_id: _selectedKeys[1] ? parseInt(_selectedKeys[1]) : null,
      });
    } else setSelectedPOStatus({ status_id: null, destination_id: null });
  };

  const preparePoFiltersForTree = poStatusList?.map((statusItem) => {
    return {
      key: `${statusItem.po_status.id}`,
      title: (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{statusItem.po_status.name}</span>
          <span>
            <b>{statusItem.po_status.num}</b>
          </span>
        </div>
      ),
      children: statusItem.filters.map((filter) => {
        return {
          key: `${statusItem.po_status.id}-${filter.warehouse.id}`,
          title: (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{filter.warehouse.name}</span>
              <span>
                <b>{filter.num}</b>
              </span>
            </div>
          ),
        };
      }),
    };
  });

  return (
    <Card>
      <Tree treeData={preparePoFiltersForTree} showLine={true} onSelect={onSelect} defaultSelectedKeys={['1']} />
    </Card>
  );
};

export default FilterByPanel;
