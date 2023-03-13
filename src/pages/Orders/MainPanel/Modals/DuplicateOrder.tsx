import { useMemo } from 'react';
import { Input, Card, Select } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';

interface IDuplicateOrderModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const DuplicateOrderModal: React.FC<IDuplicateOrderModal> = ({ isOpen, onClose, onSave }) => {
  const { editableOrder } = useModel('order');
  const { warehouseList } = useModel('warehouse');

  const warehouseOptions = useMemo(() => warehouseList.map((item) => ({ value: item.id, label: item.name })), [warehouseList]);

  return (
    <OModal
      title={`Duplicate Order ${editableOrder?.order_number}`}
      helpLink="/help/orders/general"
      width={400}
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
      <>
        <Card title="Order Number">
          <Input defaultValue={editableOrder?.order_number} />
        </Card>
        <Card title="Fulfillment Type">
          <Select options={[{ value: 'direct', label: 'Direct Fulfillment' }]} style={{ width: '100%' }} />
        </Card>
        <Card title="Warehouse">
          <Select options={warehouseOptions} style={{ width: '100%' }} />
        </Card>
        <Card title="Manual Channel">
          <Select options={[{ value: 'manualOrder', label: 'Manual Orders' }]} style={{ width: '100%' }} />
        </Card>
      </>
    </OModal>
  );
};

export default DuplicateOrderModal;
