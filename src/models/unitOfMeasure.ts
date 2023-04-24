import type IUnitOfMeasure from '@/interfaces/IUnitOfMeasure';
import httpClient from '@/utils/http-client';
import { useState, useCallback } from 'react';

export default () => {
  const [unitOfMeasureList, setUnitOfMeasureList] = useState<IUnitOfMeasure[]>([]);

  const getUnitOfMeasures = useCallback(() => {
    httpClient.get('/api/unit-of-measures').then((response) => {
      setUnitOfMeasureList(response.data);
    });
  }, []);

  return { unitOfMeasureList, getUnitOfMeasures };
};
