import { useCallback, useEffect, useState } from 'react';
import httpClient from '@/utils/http-client';
import { useModel } from '@umijs/max';

export default () => {
  const [skualerts, setSkuAlerts] = useState([]);
  const { initialState } = useModel('@@initialState');

  const getSkuAlertData = useCallback(() => {
    httpClient.get('/api/sku_alert_data').then((response) => setSkuAlerts(response.data));
  }, []);

  useEffect(() => {
    if (initialState?.currentUser) {
      getSkuAlertData();
    }
  }, [getSkuAlertData, initialState?.currentUser]);

  return {
    skualerts,
    setSkuAlerts,
  };
};
