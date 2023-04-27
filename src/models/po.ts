import httpClient from '@/utils/http-client';
import type IPurchasingOrder from '@/interfaces/IPurchasingOrder';
import { useCallback, useState, useMemo, useEffect } from 'react';
import qs from 'qs';

export default () => {
  const [poList, setPoList] = useState<IPurchasingOrder[]>([]);
  const [selectedPO, setSelectedPO] = useState<IPurchasingOrder>(null);
  const [otherCosts, setOtherCosts] = useState<any[]>([]);
  const [poItems, setPoItems] = useState<any[]>([]);
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [selectedPOIds, setSelectedPOIds] = useState<number[]>([]);

  useEffect(() => {
    if (selectedPO) {
      setPoItems(selectedPO.po_items);
      setOtherCosts(selectedPO.other_costs);
    } else {
      setPoItems([]);
      setOtherCosts([]);
    }
  }, [selectedPO]);

  const getPOList = useCallback(
    (_query) =>
      httpClient.get('/api/purchasing-orders?' + qs.stringify(_query)).then((response) => {
        setPoList(response.data);
      }),
    [],
  );

  const createPO = useCallback(
    (newPOData) =>
      httpClient.post('/api/purchasing-orders', newPOData).then((response) => {
        setPoList((prev) => [...prev, response.data]);
      }),
    [],
  );

  const getPO = useCallback(
    (id) =>
      httpClient.get(`/api/purchasing-orders/${id}`).then((response) => {
        setSelectedPO(response.data);
      }),
    [],
  );

  const updatePO = useCallback(
    (updatePOData) =>
      httpClient.put(`/api/purchasing-orders/${updatePOData.id}`, updatePOData).then((response) => {
        setPoList((prev) => prev.map((item) => (item.id === updatePOData.id ? response.data : item)));
        setSelectedPO(response.data);
      }),
    [],
  );

  const updatePOStatus = useCallback(
    (status) =>
      httpClient
        .put(`/api/purchasing-orders/update-status`, {
          ids: selectedPOIds,
          status_id: status,
        })
        .then(() => setPoList((prev) => prev.filter((item) => !selectedPOIds.includes(item.id)))),
    [selectedPOIds],
  );

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
    selectedPOIds,
    setPoList,
    setSelectedPO,
    setOtherCosts,
    setPoItems,
    setShippingCost,
    setSelectedPOIds,
    getPOList,
    createPO,
    updatePO,
    updatePOStatus,
    getPO,
  };
};
