import { useCallback, useState } from 'react';
import { useModel } from 'umi';

export default () => {
  const { vendorList } = useModel('vendor');
  const { shippingTermList } = useModel('shippingTerm');
  const { warehouseList } = useModel('warehouse');
  const { poTemplateList } = useModel('poTemplate');
  const { paymentTermList } = useModel('paymentTerm');
  const { milestonesList } = useModel('milestones');

  const [poList, setPoList] = useState<any[]>([]);
  const [selectedPO, setSelectedPO] = useState<any>(null);

  //when input values are changed
  const handleSelectedPOChange = useCallback(
    (name: string, value: any) => {
      let updatedValue = value;

      //need to assign the object to fit the format
      switch (name) {
        case 'fromVendor':
          updatedValue = vendorList?.find((item) => item.id == value);
          break;
        case 'destination':
          updatedValue = warehouseList?.find((item) => item.value == value);
          break;
        case 'poTemplate':
          updatedValue = poTemplateList?.find((item) => item.value == value);
          break;
        case 'shippingTerm':
          updatedValue = shippingTermList?.find((item) => item.value == value);
          break;
        case 'paymentTerm':
          updatedValue = paymentTermList?.find((item) => item.id == value);
        case 'milestone':
          updatedValue = milestonesList?.find((item) => item.value == value);
      }

      setSelectedPO((prevState: any) => ({ ...prevState, [name]: updatedValue }));
    },
    [milestonesList, vendorList, poTemplateList, shippingTermList, paymentTermList, warehouseList],
  );

  //when click the save button
  const addNewPO = useCallback(() => {
    setPoList([...poList, selectedPO]);
  }, [poList, selectedPO]);

  //when click removePO button
  const removePO = useCallback((id: any) => setPoList(poList.filter((item) => item.id !== id)), [poList]);

  //when click updatePO button
  const updatePO = useCallback(
    (poData: any) => setPoList(poList.map((item) => (item.key === poData.key ? poData : item))),
    [poList],
  );

  // add aggregate other cost
  const addOtherCost = useCallback((extraCost: any) => {
    setSelectedPO((prevState: any) => ({
      ...prevState,
      otherCost: [...prevState.otherCost, extraCost],
    }));
  }, []);

  // remove aggregate other cost
  const removeOtherCost = useCallback((index: any) => {
    setSelectedPO((prevState: any) => ({
      ...prevState,
      otherCost: prevState.otherCost.filter((item: any, itemIndex: any) => itemIndex !== index),
    }));
  }, []);

  // Add po product item
  const addPoItem = useCallback(
    (item: any) => setSelectedPO((prevState: any) => ({ ...prevState, poItems: [...prevState.poItems, item] })),
    [],
  );

  const addPoItems = useCallback(
    (items: any[]) =>
      setSelectedPO((prevState: any) => ({
        ...prevState,
        poItems: [...prevState.poItems, ...items],
      })),
    [],
  );

  // remove po item
  const removePoItem = useCallback(
    (index: any) =>
      setSelectedPO((prevState: any) => ({
        ...prevState,
        poItems: prevState.poItems.filter((item: any, curIndex: any) => curIndex !== index),
      })),
    [],
  );

  // update po item
  const updatePoItem = useCallback((index: any, name: any, value: any) => {
    setSelectedPO((prevState: any) => ({
      ...prevState,
      poItems: prevState.poItems.map((item: any, curIndex: any) => (curIndex === index ? { ...item, [name]: value } : item)),
    }));
  }, []);

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

  return {
    poList,
    selectedPO,
    setPoList,
    setSelectedPO,
    handleSelectedPOChange,
    addNewPO,
    removePO,
    updatePO,
    addOtherCost,
    removeOtherCost,
    addPoItem,
    addPoItems,
    removePoItem,
    updatePoItem,
    getPoTotalCost,
    getTotalItemCost,
    getTotalUnitQuantity,
  };
};
