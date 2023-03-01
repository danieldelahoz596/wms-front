import httpClient from '@/utils/http-client';
import { useCallback, useState } from 'react';

export default () => {
  const [productList, setProductList] = useState<any[]>([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [editableProduct, setEditableProduct] = useState(null);

  const getProductList = useCallback(() => {
    httpClient.get('/api/products').then((response) => setProductList(response.data));
  }, []);

  // change selected product
  const onChangeSelectedProduct = useCallback((name: any, value: any) => {
    setEditableProduct((prevState: any) => ({ ...prevState, [name]: value }));
  }, []);

  //updated selected product
  const handleUpdateProduct = useCallback(
    (product) => {
      setProductList(productList.map((_item) => (_item.id === product.id ? product : _item)));
    },
    [productList],
  );

  return {
    productList,
    selectedProducts,
    editableProduct,
    getProductList,
    setProductList,
    setSelectedProducts,
    setEditableProduct,
    onChangeSelectedProduct,
    handleUpdateProduct,
  };
};
