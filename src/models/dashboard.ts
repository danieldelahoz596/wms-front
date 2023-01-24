import { useCallback, useEffect, useState } from 'react';
import httpClient from '@/utils/http-client';
import { useModel } from '@umijs/max';

export default () => {
  const [dashboardData, setDashboardData] = useState(null);
  const { initialState } = useModel('@@initialState');

  const getDashboardData = useCallback(() => {
    httpClient.get('/api/dashboard_data').then((response) => setDashboardData(response.data));
  }, []);

  useEffect(() => {
    if (initialState?.currentUser) {
      getDashboardData();
    }
  }, [getDashboardData, initialState?.currentUser]);

  return {
    dashboardData,
  };
};
