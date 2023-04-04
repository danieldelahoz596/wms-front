import type IProduct from '@/interfaces/IProduct';
import httpClient from '@/utils/http-client';
import { useCallback, useState } from 'react';
import qs from 'qs';

export default () => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [editableProduct, setEditableProduct] = useState(null);
  const [showActive, setShowActive] = useState<boolean>(true);

  const getProductList = useCallback(() => {
    const queryString = qs.stringify({
      status: showActive,
    });
    httpClient.get(`/api/products?${queryString}`).then((response) => setProductList(response.data));
  }, [showActive]);

  const createProduct = useCallback(
    (product: IProduct) => {
      return httpClient.post('/api/products', product).then((response) => setProductList([...productList, response.data]));
    },
    [productList],
  );

  const updateProduct = useCallback(
    (product: IProduct) => {
      return httpClient.put(`/api/products/${product.id}`, product).then((response) => {
        setProductList(productList.map((_item) => (_item.id === product.id ? response.data : _item)));
      });
    },
    [productList],
  );

  const updateProductStatus = useCallback(
    (id: number, status: boolean) => {
      return httpClient.patch(`/api/products/${id}/update-status`, { status }).then((response) => {
        setProductList(productList.map((_item) => (_item.id === id ? response.data : _item)));
      });
    },
    [productList],
  );

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
    showActive,
    setShowActive,
    getProductList,
    createProduct,
    updateProduct,
    updateProductStatus,
    setProductList,
    setSelectedProducts,
    setEditableProduct,
    onChangeSelectedProduct,
    handleUpdateProduct,
  };
};
