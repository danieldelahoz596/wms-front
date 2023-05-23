import { useModel } from '@umijs/max';
import { useCallback, useEffect, useState } from 'react';
import type IBrand from '@/interfaces/IBrand';
import httpClient from '@/utils/http-client';

export default () => {
  const [brands, setBrands] = useState<IBrand[]>([]);
  const { initialState } = useModel('@@initialState');

  const getBrands = useCallback(() => {
    httpClient.get('/api/brands').then(({ data }) => setBrands(data));
  }, []);

  const createBrand = useCallback(
    (newBrandData) => httpClient.post('/api/brands', newBrandData).then(({ data }) => setBrands((prev) => [...prev, data])),
    [],
  );

  const updateBrand = useCallback(
    (id, updateBrandData) =>
      httpClient
        .patch(`/api/brands/${id}`, updateBrandData)
        .then(({ data }) => setBrands((prev) => prev.map((brand) => (brand.id === id ? data : brand)))),
    [],
  );

  const updateBrandStatus = useCallback(
    (id) =>
      httpClient
        .patch(`/api/brands/${id}/update-status`, { status: false })
        .then(() => setBrands((prev) => prev.filter((item) => item.id !== id))),
    [],
  );

  useEffect(() => {
    if (initialState?.currentUser) {
      getBrands();
    }
  }, [getBrands, initialState?.currentUser]);

  return {
    brands,
    getBrands,
    setBrands,
    createBrand,
    updateBrand,
    updateBrandStatus,
  };
};
