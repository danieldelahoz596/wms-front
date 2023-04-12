import type IProduct from '@/interfaces/IProduct';
import httpClient from '@/utils/http-client';
import { useCallback, useState } from 'react';
import qs from 'qs';
import { productType } from '@/utils/helpers/types';

export interface IBundleItem {
  product_id: number;
  quantity: number;
  name: string;
  sku: string;
}

export default () => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [editableProduct, setEditableProduct] = useState<IProduct>(null);
  const [showActive, setShowActive] = useState<boolean>(true);
  const [bundleItems, setBundleItems] = useState<IBundleItem[]>([]);

  const getProductList = useCallback(
    (query?: { labelIds?: any[]; categoryIds?: any[] }) => {
      const { labelIds = [], categoryIds = [] } = query || {};

      const queryString = qs.stringify(
        {
          status: showActive,
          label: labelIds,
          category: categoryIds,
        },
        { arrayFormat: 'brackets' },
      );

      httpClient.get(`/api/products?${queryString}`).then((response) => {
        setProductList(
          response.data.map((item) => {
            if (item.type === productType.BundleOrKit) {
              item.children = item.bundle_kit_items.products.map((bundleItem) => ({
                ...bundleItem,
                quantity: bundleItem.pivot.quantity,
              }));
            } else if (item.type === productType.VirtualProduct) {
              item.children = item.variation.products;
            }
            return item;
          }),
        );
      });
    },
    [showActive],
  );

  const createProduct = useCallback(
    (product: IProduct) => {
      return httpClient.post('/api/products', product).then((response) => {
        const data = response.data;

        if (data.type === productType.BundleOrKit) {
          data.children = data.bundle_kit_items.products.map((bundleItem) => ({
            ...bundleItem,
            quantity: bundleItem.pivot.quantity,
          }));
        } else if (data.type === productType.VirtualProduct) {
          data.children = data.variation.products;
        }

        setProductList([...productList, data]);
      });
    },
    [productList],
  );

  const updateProduct = useCallback(
    (product: IProduct) => {
      return httpClient.put(`/api/products/${product.id}`, product).then((response) => {
        const data = response.data;

        if (data.type === productType.BundleOrKit) {
          data.children = data.bundle_kit_items.products.map((bundleItem) => ({
            ...bundleItem,
            quantity: bundleItem.pivot.quantity,
          }));
        }

        setProductList(productList.map((_item) => (_item.id === product.id ? data : _item)));
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
    editableProduct,
    showActive,
    bundleItems,
    setShowActive,
    getProductList,
    createProduct,
    updateProduct,
    updateProductStatus,
    setProductList,
    setEditableProduct,
    setBundleItems,
    onChangeSelectedProduct,
    handleUpdateProduct,
  };
};
