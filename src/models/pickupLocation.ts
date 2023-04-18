import { useCallback, useState } from 'react';
import httpClient from '@/utils/http-client';
import type IPickupLocation from '@/interfaces/IPickupLocation';

export default () => {
  const [piupLocations, setPickupLocations] = useState<IPickupLocation[]>([]);

  const getPickupLocations = useCallback(() => {
    httpClient
      .get('/api/pickup-locations')
      .then(({ data }) => {
        setPickupLocations(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return {
    piupLocations,
    getPickupLocations,
  };
};
