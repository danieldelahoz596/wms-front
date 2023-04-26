import httpClient from '@/utils/http-client';
import type IPurchasingOrder from '@/interfaces/IPurchasingOrder';
import { useCallback, useState, useMemo } from 'react';

export default () => {
  const [poList, setPoList] = useState<IPurchasingOrder[]>([]);
  const [selectedPO, setSelectedPO] = useState<IPurchasingOrder>(null);
  console.log('selectedPO: ', selectedPO);
  const [otherCosts, setOtherCosts] = useState<any[]>([]);
  const [poItems, setPoItems] = useState<any[]>([]);
  const [shippingCost, setShippingCost] = useState<number>(0);

  const createPO = useCallback((newPOData) => {
    httpClient.post('/api/purchasing-orders', newPOData).then((response) => {
      setPoList((prev) => [...prev, response.data]);
    });
  }, []);

  const getPOList = useCallback(() => {
    httpClient.get('/api/purchasing-orders').then((response) => {
      setPoList(response.data);
    });
  }, []);

  const getPO = useCallback((id) => {
    httpClient.get(`/api/purchasing-orders/${id}`).then((response) => {
      setSelectedPO(response.data);
    });
  }, []);

  //when click updatePO button
  const updatePO = useCallback(
    (poData: any) => setPoList(poList.map((item) => (item.key === poData.key ? poData : item))),
    [poList],
  );

  // Get caluclated total aggregate costs
  const getPoTotalCost = useCallback((poData: any) => {
    const totalAggregateCost = poData?.itemCost + poData.shippingCost;
    const totalOtherCost = poData?.otherCost
      ?.map((item: any) => item.cost)
      .reduce((acc: any, curValue: any) => acc + curValue, 0);

    return totalAggregateCost + totalOtherCost;
  }, []);

  // get calculated total item cost
  const getTotalItemCost = useCallback((poData: any) => {
    return poData?.poItems
      ?.map((item: any) => parseFloat(item.quantity) * parseFloat(item.unitCost) - item.discount)
      .reduce((acc: any, curValue: any) => acc + curValue, 0);
  }, []);

  const poItemsCost = useMemo(() => poItems.reduce((sum, item) => sum + item.qty * item.product.vendor_cost, 0), [poItems]);

  const totalCost = useMemo(
    () => poItemsCost + otherCosts.reduce((sum, item) => sum + item.amount, 0) + shippingCost,
    [poItemsCost, otherCosts, shippingCost],
  );

  return {
    poList,
    selectedPO,
    otherCosts,
    poItems,
    poItemsCost,
    totalCost,
    shippingCost,
    setPoList,
    setSelectedPO,
    setOtherCosts,
    setPoItems,
    setShippingCost,
    getPOList,
    createPO,
    updatePO,
    getPO,
    getPoTotalCost,
    getTotalItemCost,
  };
};
