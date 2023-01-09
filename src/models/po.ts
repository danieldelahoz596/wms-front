import { useState } from 'react';
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
  const handleSelectedPOChange = (name: string, value: any) => {
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
  };

  //when opening the button
  const initialSelectedPO = () => {
    setSelectedPO({
      key: -1,
      // P.O Details
      fromVendor: null,
      destination: null,
      poTemplate: null,
      shippingTerm: null,
      paymentTerm: null,
      confirmedBy: null,
      enablePortal: null,
      milestone: null,

      // Aggregate Costs
      itemCost: 0,
      shippingCost: 0,
      paymentDate: '',
      otherCost: [],

      // Communication
      messageToVendor: '',
      internalNote: '',

      // P.O Items
      poItems: [],
    });
  };

  //when click the save button
  const addNewPO = () => {
    setPoList([...poList, selectedPO]);
  };

  //when click removePO button
  const removePO = (id: any) => setPoList(poList.filter((item) => item.id !== id));

  // add aggregate other cost
  const addOtherCost = (extraCost: any) => {
    setSelectedPO((prevState: any) => ({
      ...prevState,
      otherCost: [...prevState.otherCost, extraCost],
    }));
  };

  // remove aggregate other cost
  const removeOtherCost = (index: any) => {
    setSelectedPO((prevState: any) => ({
      ...prevState,
      otherCost: prevState.otherCost.filter((item: any, itemIndex: any) => itemIndex !== index),
    }));
  };

  // Add po product item
  const addPoItem = (item: any) =>
    setSelectedPO((prevState: any) => ({ ...prevState, poItems: [...prevState.poItems, item] }));

  // remove po item
  const removePoItem = (index: any) =>
    setSelectedPO((prevState: any) => ({
      ...prevState,
      poItems: prevState.poItems.filter((item: any, curIndex: any) => curIndex !== index),
    }));

  // update po item
  const updatePoItem = (index: any, name: any, value: any) => {
    setSelectedPO((prevState: any) => ({
      ...prevState,
      poItems: prevState.poItems.map((item: any, curIndex: any) =>
        curIndex === index ? { ...item, [name]: value } : item,
      ),
    }));
  };

  // Get caluclated total aggregate costs
  const getPoTotalCost = (poData: any) => {
    const totalAggregateCost = poData?.itemCost + poData.shippingCost;
    const totalOtherCost = poData?.otherCost
      ?.map((item: any) => item.cost)
      .reduce((acc: any, curValue: any) => acc + curValue, 0);

    return totalAggregateCost + totalOtherCost;
  };

  // get calculated total item cost
  const getTotalItemCost = (poData: any) => {
    return poData?.poItems
      ?.map((item: any) => parseFloat(item.quantity) * parseFloat(item.unitCost) - item.discount)
      .reduce((acc: any, curValue: any) => acc + curValue, 0);
  };

  const getTotalUnitQuantity = (poData: any) =>
    poData?.poItems
      ?.map((item: any) => parseInt(item.quantity))
      .reduce((acc: any, curValue: any) => acc + curValue, 0);

  return {
    poList,
    selectedPO,
    initialSelectedPO,
    setPoList,
    setSelectedPO,
    handleSelectedPOChange,
    addNewPO,
    removePO,
    addOtherCost,
    removeOtherCost,
    addPoItem,
    removePoItem,
    updatePoItem,
    getPoTotalCost,
    getTotalItemCost,
    getTotalUnitQuantity,
  };
};
