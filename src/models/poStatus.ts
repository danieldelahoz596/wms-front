import { useState } from 'react';
import { useModel } from 'umi';
import httpClient from '@/utils/http-client';

export default () => {
  const { setPoList } = useModel('po');
  const [poStatusList, setPoStatusList] = useState<any[]>([]);
  const [selectedPOStatus, setSelectedPOStatus] = useState(null);

  const initialPOStatus = () => {
    httpClient.get('/api/po-filters').then((response) => setPoStatusList(response.data));
  };

  //when change PO List, we need to update the POList
  const changeSelectedPOStatus = (data: any) => {
    setSelectedPOStatus(data);

    //load data with api in the future
    httpClient
      .get(`/api/purchaseorders?po_status=${data?.poStatus ?? ''}&warehouse_id=${data?.warehouse ?? ''}`)
      .then((res) => setPoList(res.data))
      .catch(() => setPoList([]));
  };

  return {
    selectedPOStatus,
    changeSelectedPOStatus,
    poStatusList,
    setPoStatusList,
    initialPOStatus,
  };
};
