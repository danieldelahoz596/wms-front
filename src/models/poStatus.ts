import { useCallback, useState } from 'react';
import httpClient from '@/utils/http-client';

export default () => {
  const [poStatusList, setPoStatusList] = useState<any[]>([]);
  const [selectedPOStatus, setSelectedPOStatus] = useState({ status_id: null, destination_id: null });

  const getPOStatusFilterList = useCallback(() => {
    httpClient.get('/api/purchasing-order-statuses/filter-list').then((response) => setPoStatusList(response.data));
  }, []);

  return {
    selectedPOStatus,
    poStatusList,
    setPoStatusList,
    getPOStatusFilterList,
    setSelectedPOStatus,
  };
};
