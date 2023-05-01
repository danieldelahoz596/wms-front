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
  console.log('stockDetails: ', stockDetails);

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

  return { stockLocationList, selectedStockItem, stockDetails, setSelectedStockItem, getStockLocationList, getStockDetails };
};
