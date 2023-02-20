import { OModal } from '@/components/Globals/OModal';
import { Table, InputNumber } from 'antd';
import { useMemo } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { useModel } from '@umijs/max';

interface ISelectQuantityOfSKUModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

interface DataType {
  key: React.Key;
  name: string;
  quantity: string;
}

const SelectQuantityOfSKUModal: React.FC<ISelectQuantityOfSKUModal> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const { selectedProducts, setSelectedProducts } = useModel('product');

  const tableData = useMemo(
    () =>
      selectedProducts.map((product) => ({
        key: product.id,
        name: product.name,
        quantity: product.quantity,
      })),
    [selectedProducts],
  );

  const handleQuantityChange = (id, value) => {
    setSelectedProducts(
      selectedProducts.map((product) =>
        product.id === id ? { ...product, quantity: value } : product,
      ),
    );
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
      render: (text, record) => (
        <InputNumber
          onChange={(value) => handleQuantityChange(record.key, value)}
          style={{ width: '100%' }}
          min={1}
          value={text}
        />
      ),
    },
  ];

  return (
    <OModal
      title="New Bundle/Kit"
      helpLink="/help/products/create/bundlekit"
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
          btnLabel: 'Continue',
          onClick: onSave,
        },
      ]}
    >
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h2>Provide Quantity of each Bundled Product</h2>
        </div>
        <Table columns={columns} dataSource={tableData} />
      </div>
    </OModal>
  );
};

export default SelectQuantityOfSKUModal;
