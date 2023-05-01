import { useCallback, useState } from 'react';
import httpClient from '@/utils/http-client';
import type IStockLocation from '@/interfaces/IStockLocation';
import type IWarehouse from '@/interfaces/IWarehouse';

interface ILocation {
  id: number;
  name: string;
  status: boolean;
  available: number;
}

export interface IStockDetails {
  warehouse_id: number;
  on_hand: number;
  allocated: number;
  locked: number;
  available: number;
  discrepation: number;
  warehouse: IWarehouse;
  locations: ILocation[];
}

export default () => {
  const [stockLocationList, setStockLocationList] = useState<IStockLocation[]>([]);
  const [selectedStockItem, setSelectedStockItem] = useState<IStockLocation>(null);
  const [stockDetails, setStockDetails] = useState<IStockDetails[]>([]);

  const getStockLocationList = useCallback(() => {
    httpClient
      .get('/api/stock-locations')
      .then(({ data }) => {
        setStockLocationList(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const getStockDetails = useCallback((productId) => {
    httpClient
      .get(`/api/products/${productId}/inventory`)
      .then(({ data }) => {
        setStockDetails(Object.keys(data).map((key) => data[key]));
      })
      .catch((err) => console.log(err));
  }, []);

  const createStock = useCallback(
    (storeData) =>
      httpClient.post('/api/stock-locations', storeData).then(({ data }) => {
        setStockLocationList((prev) => [...prev, data.stock_location]);
        return data;
      }),
    [],
  );

  const addStock = useCallback(
    (updateData) =>
      httpClient.post(`/api/warehouse-locations/${updateData.location_id}/add-stock`, updateData).then(({ data }) => {
        setStockLocationList((prev) => prev.map((item) => (item.id === data.id ? data : item)));
        return data;
      }),
    [],
  );

  const removeStock = useCallback(
    (updateData) =>
      httpClient.post(`/api/warehouse-locations/${updateData.location_id}/remove-stock`, updateData).then(({ data }) => {
        setStockLocationList((prev) => prev.map((item) => (item.id === data.id ? data : item)));
        return data;
      }),
    [],
  );

  const transferStock = useCallback(
    (transferData) =>
      httpClient.post(`/api/warehouse-locations/${transferData.location_id}/transfer-stock`, transferData).then(({ data }) => {
        setStockLocationList((prev) =>
          prev.map((item) =>
            item.id === data.stock_location.id
              ? data.stock_location
              : item.id === data.destination_location.id
              ? data.destination_location
              : item,
          ),
        );
        return data;
      }),
    [],
  );

  const adjustStock = useCallback(
    (adjustData) =>
      httpClient.post(`/api/warehouse-locations/${adjustData.location_id}/adjust-stock`, adjustData).then(({ data }) => {
        setStockLocationList((prev) => prev.map((item) => (item.id === data.stock_location.id ? data.stock_location : item)));
        return data;
      }),
    [],
  );

  return {
    stockLocationList,
    selectedStockItem,
    stockDetails,
    setSelectedStockItem,
    setStockDetails,
    getStockLocationList,
    getStockDetails,
    createStock,
    addStock,
    removeStock,
    transferStock,
    adjustStock,
  };
};
