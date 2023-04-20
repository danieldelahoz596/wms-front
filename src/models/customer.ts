import { useCallback, useState } from 'react';
import httpClient from '@/utils/http-client';
import type ICustomer from '@/interfaces/ICustomer';

export default () => {
  const [customerList, setCustomerList] = useState<ICustomer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer>(null);

  // get initial customer list
  const getCustomerList = useCallback((queryString?: string) => {
    return httpClient
      .get(`/api/customers?${queryString}`)
      .then((response) => {
        setCustomerList(response.data.customers);

        return response;
      })
      .catch((error) => console.log(error));
  }, []);

  // create new customer
  const createCustomer = useCallback(
    (customerData: ICustomer) =>
      httpClient.post('/api/customers', customerData).then(({ data }) => setCustomerList((prev) => [...prev, data])),
    [],
  );

  // update a customer
  const updateCustomer = useCallback(
    (customerData: ICustomer) =>
      httpClient
        .put(`/api/customers/${customerData.id}`, customerData)
        .then(({ data }) => setCustomerList((prev) => prev.map((item) => (item.id === customerData.id ? data : item)))),
    [],
  );

  // delete a customer
  const deleteCustomer = useCallback(
    (id: number) =>
      httpClient.delete(`/api/customers/${id}`).then(() => setCustomerList((prev) => prev.filter((item) => item.id !== id))),
    [],
  );

  return {
    customerList,
    selectedCustomer,
    setSelectedCustomer,
    getCustomerList,
    setCustomerList,
    createCustomer,
    updateCustomer,
    deleteCustomer,
  };
};
