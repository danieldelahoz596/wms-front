import httpClient from '@/utils/http-client';
import { useCallback, useState } from 'react';

export default () => {
  const [company, setCompany] = useState(null);

  const getCompany = useCallback(() => {
    return httpClient.get('/api/companies').then((response) => {
      setCompany(response.data);
    });
  }, []);

  const uploadLogo = useCallback((data) => {
    return httpClient
      .post('/api/companies/upload-logo', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => {
        setCompany(response.data);
      });
  }, []);

  const deleteLogo = useCallback(() => {
    return httpClient.delete('/api/companies/delete-logo').then((response) => {
      setCompany(response.data);
    });
  }, []);

  return {
    company,
    getCompany,
    uploadLogo,
    deleteLogo,
  };
};
