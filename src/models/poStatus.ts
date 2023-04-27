import { useCallback, useState } from 'react';
import httpClient from '@/utils/http-client';

export default () => {
  const [poStatusList, setPoStatusList] = useState<any[]>([]);
  const [selectedPOStatus, setSelectedPOStatus] = useState(null);

  const initialPOStatus = useCallback(() => {
    httpClient.get('/api/po-filters').then((response) => setPoStatusList(response.data));
  }, []);

  return {
    selectedPOStatus,
    poStatusList,
    setPoStatusList,
    initialPOStatus,
    setSelectedPOStatus,
  };
};
