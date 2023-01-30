import httpClient from '@/utils/http-client';
import { useState } from 'react';

export default () => {
  const [company, setCompany] = useState(null);

  const getCompany = () => {
    return httpClient.get('/api/companies').then((response) => {
      setCompany(response.data);
    });
  };

  const uploadLogo = (data) => {
    return httpClient
      .post('/api/companies/upload-logo', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => {
        setCompany(response.data);
      });
  };

  const deleteLogo = () => {
    return httpClient.delete('/api/companies/delete-logo').then((response) => {
      setCompany(response.data);
    });
  };

  return {
    company,
    getCompany,
    uploadLogo,
    deleteLogo,
  };
};
