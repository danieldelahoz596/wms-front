import type IWarehouseLocation from '@/interfaces/IWarehouseLocation';
import httpClient from '@/utils/http-client';
import { useCallback, useState } from 'react';

export default () => {
  const [warehouseLocationList, setWarehouseLocationList] = useState<IWarehouseLocation[]>([]);

  const getLocationList = useCallback(
    (warehouseId) =>
      httpClient.get(`/api/warehouses/${warehouseId}/locations`).then((response) => setWarehouseLocationList(response.data)),
    [],
  );

  const createLocation = useCallback(
    (warehouseId, locationData) =>
      httpClient
        .post(`/api/warehouses/${warehouseId}/locations`, locationData)
        .then((response) => setWarehouseLocationList((prev) => [...prev, response.data])),
    [],
  );

  const updateLocationStatus = useCallback(
    (warehouseId, locationId, status) =>
      httpClient
        .patch(`/api/warehouses/${warehouseId}/locations/${locationId}/update-status`, { status })
        .then(() =>
          setWarehouseLocationList((prev) =>
            prev.map((item) => (item.id === locationId ? { ...item, status: !item.status } : item)),
          ),
        ),
    [],
  );

  return {
    warehouseLocationList,
    getLocationList,
    createLocation,
    updateLocationStatus,
  };
};
