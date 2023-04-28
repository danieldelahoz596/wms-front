import httpClient from '@/utils/http-client';
import type IPurchasingOrder from '@/interfaces/IPurchasingOrder';
import { useCallback, useState, useMemo, useEffect } from 'react';
import qs from 'qs';
import { useModel } from '@umijs/max';

export default () => {
  const [poList, setPoList] = useState<IPurchasingOrder[]>([]);
  const [selectedPO, setSelectedPO] = useState<IPurchasingOrder>(null);
  const [otherCosts, setOtherCosts] = useState<any[]>([]);
  const [poItems, setPoItems] = useState<any[]>([]);
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [selectedPOIds, setSelectedPOIds] = useState<number[]>([]);
  const { getPOStatusFilterList, selectedPOStatus } = useModel('poStatus');

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
        getPOStatusFilterList();
      }),
    [getPOStatusFilterList],
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
        getPOStatusFilterList();
      }),
    [getPOStatusFilterList],
  );

  const updatePOStatus = useCallback(
    (status) =>
      httpClient
        .put(`/api/purchasing-orders/update-status`, {
          ids: selectedPOIds,
          status_id: status,
        })
        .then(() => {
          setPoList((prev) => prev.filter((item) => !selectedPOIds.includes(item.id)));
          getPOStatusFilterList();
        }),
    [selectedPOIds, getPOStatusFilterList],
  );

  const createPOItems = useCallback(
    (items) =>
      httpClient.post(`/api/purchasing-orders/${selectedPO.id}/items`, { po_items: items }).then((response) => {
        setPoItems(response.data);
        setSelectedPO({ ...selectedPO, po_items: response.data });
        const totalCost = response.data.reduce((sum, item) => sum + item.total_cost, 0);
        setPoList((prev) => prev.map((item) => (item.id === selectedPO.id ? { ...item, total_cost: totalCost } : item)));
      }),
    [selectedPO],
  );

  const updatePOItem = useCallback(
    (updatePOItemData) =>
      httpClient
        .put(`/api/purchasing-orders/${selectedPO.id}/items/${updatePOItemData.id}`, updatePOItemData)
        .then((response) => {
          const updatedPOItems = poItems.map((item) => (item.id === updatePOItemData.id ? response.data : item));
          const totalCost = updatedPOItems.reduce((sum, item) => sum + item.total_cost, 0);
          setPoItems(updatedPOItems);
          setSelectedPO({ ...selectedPO, po_items: updatedPOItems });
          setPoList((prev) => prev.map((item) => (item.id === selectedPO.id ? { ...item, total_cost: totalCost } : item)));
        }),
    [selectedPO, poItems],
  );

  const receivePOItem = useCallback(
    (receivePOItemData) =>
      httpClient
        .post(`/api/purchasing-orders/${selectedPO.id}/items/${receivePOItemData.id}/receive`, receivePOItemData)
        .then((response) => {
          if (response.data.status_id !== selectedPOStatus.status_id)
            setPoList((prev) => prev.filter((item) => item.id !== response.data.id));
          getPOStatusFilterList();
          setSelectedPOIds([]);
        }),
    [selectedPO, getPOStatusFilterList, selectedPOStatus],
  );

  const getPOItemCost = useCallback(
    (item) =>
      item.qty * item.product.vendor_cost * item.unit_of_measure.qty * (1 + item.tax / 100.0) -
      item.discount +
      item.billed_cost +
      item.landed_cost,
    [],
  );

  const poItemsCost = useMemo(() => poItems.reduce((sum, item) => sum + getPOItemCost(item), 0), [poItems, getPOItemCost]);

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
    getPOItemCost,
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
    createPOItems,
    updatePOItem,
    receivePOItem,
  };
};
