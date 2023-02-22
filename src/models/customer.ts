import { useCallback, useState } from 'react';
import httpClient from '@/utils/http-client';

interface ICustomer {
  name: string;
  phonenumber: string;
  address: string;
}

export default () => {
  const [customerList, setCustomerList] = useState<any[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [newCustomer, setNewCustomer] = useState<ICustomer>();

  // get initial customer list
  const initialCustomerList = useCallback(() => {
    httpClient
      .get('/api/customers')
      .then((response) => {
        setCustomerList(response.data.customers);
      })
      .catch((error) => console.log(error));
  }, []);

  // get customer by id
  const onGetSelectedCustomer = useCallback((id) => {
    httpClient
      .get('/api/customers/id/' + id)
      .then((response) => {
        setSelectedCustomer(response.data.customer);
      })
      .catch((error) => console.log(error));
  }, []);

  // change selected customer
  const onChangeSelectedCustomer = (name: any, value: any) => {
    setSelectedCustomer((prevState: any) => ({ ...prevState, [name]: value }));
  };

  // update customer
  const handleUpdateCustomer = useCallback(
    (_id, _values) => {
      httpClient
        .post('/api/customers/id/' + _id, _values)
        .then((response) => {
          const updatedCustomer = response.data.customer;
          setCustomerList((prevState) => prevState.map((_item) => (_item.id === updatedCustomer.id ? updatedCustomer : _item)));
          setSelectedCustomer(updatedCustomer);
        })
        .catch((error) => console.log(error));
    },
    [selectedCustomer],
  );

  // delete customer
  const handleDeleteCustomer = useCallback(() => {
    httpClient.post('/api/customers/remove/' + selectedCustomer.id, selectedCustomer).then(() => {
      const updatedCustomerList = customerList.filter((item) => item.id !== selectedCustomer.id);
      setCustomerList(updatedCustomerList);
      setSelectedCustomer(null);
    });
  }, [customerList, selectedCustomer]);

  // change new customer field
  const onChangeNewCustomer = (name: any, value: any) => {
    setNewCustomer((prevState: any) => ({ ...prevState, [name]: value }));
  };

  // create new customer
  const handleCreateCustomer = useCallback(() => {
    httpClient.post('/api/customers', newCustomer).then((response) => {
      setCustomerList((prevState) => [response.data.customer, ...prevState]);
      setNewCustomer(null);
    });
  }, [newCustomer]);

  return {
    customerList,
    selectedCustomer,
    newCustomer,
    setNewCustomer,
    setSelectedCustomer,
    initialCustomerList,
    setCustomerList,
    onGetSelectedCustomer,
    onChangeSelectedCustomer,
    onChangeNewCustomer,
    handleUpdateCustomer,
    handleDeleteCustomer,
    handleCreateCustomer,
  };
};
