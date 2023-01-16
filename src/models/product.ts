import httpClient from '@/utils/http-client';
import { useModel } from '@umijs/max';
import { useCallback, useEffect, useState } from 'react';

export default () => {
  const [productList, setProductList] = useState<any[]>([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [editableProduct, setEditableProduct] = useState(null);
  const { initialState } = useModel('@@initialState');

  const initialProductList = useCallback(() => {
    httpClient.get('/api/products').then((response) => setProductList(response.data));
  }, []);

  useEffect(() => {
    if (initialState?.currentUser) {
      initialProductList();
    }
  }, [initialProductList, initialState?.currentUser]);

  // change selected product
  const onChangeSelectedProduct = (name: any, value: any) => {
    setEditableProduct((prevState: any) => ({ ...prevState, [name]: value }));
  };

  //updated selected product
  const handleUpdateProduct = (product) => {
    setProductList(productList.map((_item) => (_item.id === product.id ? product : _item)));
  };

  return {
    productList,
    selectedProducts,
    editableProduct,
    initialProductList,
    setProductList,
    setSelectedProducts,
    setEditableProduct,
    onChangeSelectedProduct,
    handleUpdateProduct,
  };
};
