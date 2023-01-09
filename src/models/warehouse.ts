import httpClient from '@/utils/http-client';
import { useModel } from '@umijs/max';
import { useCallback, useEffect, useState } from 'react';

export default () => {
  const [warehouseList, setWarehouseList] = useState<any[]>([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const { initialState } = useModel('@@initialState');

  const initialWarehouseList = useCallback(() => {
    httpClient
      .get('/api/warehouses')
      .then((response: any) => setWarehouseList(response.data.warehouses))
      .catch((error) => console.log(error));
  }, []);

  const createWarehouse = useCallback((values) => {
    httpClient
      .post('/api/warehouses', values)
      .then((response: any) => setWarehouseList((prev) => [response.data.warehouse, ...prev]))
      .catch((error) => console.log(error));
  }, []);

  const updateWarehouse = useCallback((id, values) => {
    httpClient
      .post('/api/warehouses/' + id, values)
      .then((response: any) =>
        setWarehouseList((prev) =>
          prev.map((_item) => (_item.id === id ? response.data.warehouse : _item)),
        ),
      )
      .catch((error) => console.log(error));
  }, []);

  const updateReturnLocation = useCallback((id, values) => {
    httpClient
      .post('/api/warehouses/' + id + '/return-location', values)
      .then((response: any) =>
        setWarehouseList((prev) =>
          prev.map((_item) => (_item.id === id ? response.data.warehouse : _item)),
        ),
      )
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (initialState?.currentUser) {
      initialWarehouseList();
    }
  }, [initialWarehouseList, initialState?.currentUser]);

  return {
    warehouseList,
    selectedWarehouse,
    initialWarehouseList,
    createWarehouse,
    updateWarehouse,
    updateReturnLocation,
    setSelectedWarehouse,
  };
};
