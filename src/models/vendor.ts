import httpClient from '@/utils/http-client';
import { useModel } from '@umijs/max';
import { useCallback, useEffect, useState } from 'react';
import qs from 'qs';

export default () => {
  const [vendorList, setVendorList] = useState<any[]>([]);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [editableVendor, setEditableVendor] = useState(null);
  const [vendorHistory, setVendorHistory] = useState([]);
  const [showActive, setShowActive] = useState(true);
  const { initialState } = useModel('@@initialState');

  const getVendorList = useCallback(
    (query = '') => {
      const queryString = qs.stringify({
        status: showActive,
      });

      httpClient
        .get('/api/vendors?' + `${query}&${queryString}`)
        .then((response: any) => setVendorList(response.data.vendors))
        .catch((error) => console.log(error));
    },
    [showActive],
  );

  const createVendor = useCallback((data) => {
    httpClient
      .post('/api/vendors', data)
      .then((response) => {
        setVendorList((prev) => [response.data.vendor, ...prev]);
      })
      .catch((error) => console.log(error));
  }, []);

  const updateVendor = useCallback((_item) => {
    httpClient
      .put('/api/vendors/' + _item.id, _item)
      .then((response) => {
        setVendorList((prev) => prev.map((_vendor) => (_vendor.id === _item.id ? response.data.vendor : _vendor)));
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteVendor = useCallback((data) => {
    httpClient
      .delete('/api/vendors/' + data.id)
      .then(() => {
        setVendorList((prev) => prev.filter((_item) => _item.id != data.id));
      })
      .catch((err) => console.log(err));
  }, []);

  const getVendorHistory = useCallback((id) => {
    httpClient
      .get('/api/vendors/' + id + '/history')
      .then((response: any) => {
        setVendorHistory(response.data.vendorHistory);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (initialState?.currentUser) {
      getVendorList();
    }
  }, [getVendorList, initialState?.currentUser]);

  return {
    vendorList,
    selectedVendor,
    editableVendor,
    vendorHistory,
    showActive,
    setEditableVendor,
    getVendorList,
    setSelectedVendor,
    setVendorList,
    setShowActive,
    createVendor,
    updateVendor,
    deleteVendor,
    getVendorHistory,
  };
};
