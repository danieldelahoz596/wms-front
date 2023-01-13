import { OModal } from '@/components/Globals/OModal';
import { Select, Input, Table, Tabs } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useModel } from '@umijs/max';
import { useEffect, useState } from 'react';
import type { TabsProps } from 'antd';
import BasicInfoTab from '@/components/Tabs/Product/BasicInfo';
import GalleryTab from '@/components/Tabs/Product/Gallery';
import VendorProductTab from '@/components/Tabs/Product/VendorProduct';
import BundledItemsTab from '@/components/Tabs/Product/BundledItems';

interface IBundleKit {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

interface DataType {
  key: React.Key;
  name: string;
  quantity: string;
}

const BundleKit: React.FC<IBundleKit> = ({ isOpen, onClose, onSave }) => {
  const [step, setStep] = useState(1);
  const { productList } = useModel('product');
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [bundledTableRows, setBundledTableRows] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setStep(1);
    setSelectedProductIds([]);
    setTableData([]);
  }, [isOpen]);

  const handleContiuneClick = () => {
    if (step === 1) {
      const result = productList.filter((product) => selectedProductIds.includes(product.id));
      setSelectedProducts(result);
      setTableData(
        result.map((product) => ({
          key: product.id,
          name: product.name,
          quantity: product.quantity,
        })),
      );
    } else if (step === 2) {
      setBundledTableRows(
        selectedProducts.map((product) => ({
          id: product.id,
          masterSKU: product.master_sku,
          name: product.name,
          quantity: product.quantity,
        })),
      );
    }
    setStep(step + 1);
  };

  const handleProductSelect = (values: string[]) => {
    setSelectedProductIds(values);
  };

  const handleQuantityChange = (index, event) => {
    const products = selectedProducts;
    products[index].quantity = event.target.value;
    setSelectedProducts(products);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Bundled Product',
      dataIndex: 'name',
      width: 600,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      render: (text, record, index) => (
        <Input onChange={(event) => handleQuantityChange(index, event)} />
      ),
    },
  ];

  const tabItems: TabsProps['items'] = [
    {
      key: 'tab-1',
      label: 'BASIC INFO FIEDLS',
      children: <BasicInfoTab />,
    },
    {
      key: 'tab-2',
      label: 'GALLERY CUSTOMS',
      children: <GalleryTab />,
    },
    {
      key: 'tab-3',
      label: 'BUNDLED ITEMS',
      children: <BundledItemsTab tableRows={bundledTableRows} />,
    },
    {
      key: 'tab-4',
      label: 'VENDOR PRODUCTS',
      children: <VendorProductTab />,
    },
  ];

  return (
    <OModal
      title={'NEW BUNDLE/KIT'}
      width={800}
      centered
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: step == 3 ? 'Save' : 'Continue',
          onClick: step === 3 ? onSave : handleContiuneClick,
        },
      ]}
    >
      {step === 1 && (
        <div style={{ height: '300px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h2>Select Core Products to Bundle</h2>
          </div>
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Searcy by Master SKU or Name..."
            onChange={handleProductSelect}
          >
            {productList.map((product, index) => (
              <Select.Option key={`product-${index}`} value={product.id}>
                {product.name}
              </Select.Option>
            ))}
          </Select>
        </div>
      )}
      {step === 2 && (
        <div style={{ height: '300px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h2>Provide Quantity of each Bundled Product</h2>
          </div>
          <Table columns={columns} dataSource={tableData} />
        </div>
      )}
      {step === 3 && (
        <div>
          <Tabs defaultActiveKey="1" items={tabItems} />
        </div>
      )}
    </OModal>
  );
};

export default BundleKit;
