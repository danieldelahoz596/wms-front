import { OModal } from '@/components/Globals/OModal';
import { Table, InputNumber } from 'antd';
import { useCallback, useMemo } from 'react';
import type { ColumnsType } from 'antd/es/table';
import { useModel } from '@umijs/max';

interface IBundleKitQuantityModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

interface DataType {
  key: React.Key;
  name: string;
  quantity: string;
}

const BundleKitQuantityModal: React.FC<IBundleKitQuantityModal> = ({ isOpen, onClose, onSave }) => {
  const { bundleItems, setBundleItems } = useModel('product');

  const tableData = useMemo(
    () =>
      bundleItems?.map((item) => ({
        key: item.product_id,
        name: item.name,
        quantity: item.quantity,
      })),
    [bundleItems],
  );

  const handleQuantityChange = useCallback(
    (id, value) => {
      setBundleItems(bundleItems.map((item) => (item.product_id === id ? { ...item, quantity: value } : item)));
    },
    [bundleItems, setBundleItems],
  );

  const columns: ColumnsType<DataType> = useMemo(
    () => [
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
    ],
    [handleQuantityChange],
  );

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

export default BundleKitQuantityModal;
