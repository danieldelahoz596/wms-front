import React, { useEffect } from 'react';
import { Tree } from 'antd';
import { useModel } from 'umi';

const SideFilterTree: React.FC = () => {
  const { orderStatusList, changeSelectedOrderStatus, initialOrderStatus } =
    useModel('orderStatus');

  useEffect(() => {
    if (orderStatusList.length == 0) {
      initialOrderStatus();
    }
  }, [orderStatusList.length, initialOrderStatus]);

  const onSelect = (selectedKey: any) => {
    if (selectedKey && selectedKey.length > 0) {
      const _keys = selectedKey[0].split('-');
      let _fullStatus = {};
      let _currentStatus = orderStatusList;

      const _step1 = _keys[0];
      const _step2 = _keys[1];
      const _step3 = _keys[2];

      if (_step1) {
        const _step1Status = _currentStatus.find((item) => item.order_status.id == _step1);
        _fullStatus = { status: _step1Status.order_status };
        _currentStatus = _step1Status.filters;
      }

      if (_step2) {
        const _step2Status = _currentStatus?.find((item) => item.filter.id == _step2);
        _fullStatus = {
          ..._fullStatus,
          filter: _step2Status.filter,
        };
        _currentStatus = _step2Status.filter.filters;
      }

      if (_step3) {
        const _step3Status = _currentStatus.find((item) => item.filter.id == _step3);
        _fullStatus = {
          ..._fullStatus,
          subFilter: _step3Status.filter,
        };
      }

      changeSelectedOrderStatus(_fullStatus);
    } else {
      changeSelectedOrderStatus(null);
    }
  };

  const prepareOrderFiltersForTree = orderStatusList?.map((statusItem) => {
    return {
      key: `${statusItem.order_status.id}`,
      title: (
        <span>
          <i className="fa-solid fa-house" />
          {statusItem.order_status.name}{' '}
          <span className="tree-badge"> {statusItem.order_status.num} </span>
        </span>
      ),
      children: [
        // {
        //   key: `${statusItem.order_status.id}-0`,
        //   title: 'All',
        // },
        ...statusItem.filters.map((filter) => {
          return {
            key: `${statusItem.order_status.id}-${filter.filter.id}`,
            title: (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                {filter.filter.icon && <img src={filter.filter.icon} style={{ width: '1.2rem' }} />}
                {filter.filter.name} <span className="tree-badge"> {filter.filter.num} </span>
              </div>
            ),
            children: filter.filter.filters
              ? [
                  ...filter.filter.filters.map((_child) => {
                    return {
                      key: `${statusItem.order_status.id}-${filter.filter.id}-${_child.filter.id}`,
                      title: (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                          {_child.filter.icon && (
                            <img src={_child.filter.icon} style={{ width: '1.2rem' }} />
                          )}
                          {_child.filter.name} <span className="tree-badge"> {_child.num} </span>
                        </div>
                      ),
                    };
                  }),
                ]
              : [],
          };
        }),
      ],
    };
  });

  return (
    <Tree
      treeData={prepareOrderFiltersForTree}
      showLine={true}
      onSelect={onSelect}
      defaultSelectedKeys={['2']}
    />
  );
};

export default SideFilterTree;
