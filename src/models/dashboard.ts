import { useCallback, useState } from 'react';
import httpClient from '@/utils/http-client';

export default () => {
  const [dashboardData, setDashboardData] = useState(null);

  const initialDashboardData = useCallback(() => {
    httpClient.get('/api/dashboard_data').then((response) => setDashboardData(response.data));
  }, []);

  return {
    dashboardData,
    initialDashboardData,
  };
};
