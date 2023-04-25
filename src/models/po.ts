import type IPurchasingOrder from '@/interfaces/IPurchasingOrder';
import { useCallback, useState, useMemo } from 'react';

export default () => {
  const [poList, setPoList] = useState<IPurchasingOrder[]>([]);
  const [selectedPO, setSelectedPO] = useState<IPurchasingOrder>(null);
  const [otherCosts, setOtherCosts] = useState<any[]>([]);
  const [poItems, setPoItems] = useState<any[]>([]);

  //when click the save button
  const addNewPO = useCallback(() => {
    setPoList([...poList, selectedPO]);
  }, [poList, selectedPO]);

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

  const getTotalUnitQuantity = useCallback(
    (poData: any) =>
      poData?.poItems?.map((item: any) => parseInt(item.quantity)).reduce((acc: any, curValue: any) => acc + curValue, 0),
    [],
  );

  const poItemsCost = useMemo(
    () => poItems.reduce((sum, item) => sum + parseInt(item.qty) * item.product.vendor_cost, [0]),
    [poItems],
  );

  return {
    poList,
    selectedPO,
    otherCosts,
    poItems,
    poItemsCost,
    setPoList,
    setSelectedPO,
    setOtherCosts,
    setPoItems,
    addNewPO,
    updatePO,
    getPoTotalCost,
    getTotalItemCost,
    getTotalUnitQuantity,
  };
};
