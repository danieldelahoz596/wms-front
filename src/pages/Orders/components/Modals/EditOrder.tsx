import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import OrderItems from '@/components/Order/EditOrder/OrderItems';
import OrderCustomFields from '@/components/Order/EditOrder/OrderCustomFields';
import BasicInfo from '@/components/Order/EditOrder/BasicInfo';
interface IEditOrderModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const EditOrderModal: React.FC<IEditOrderModal> = ({ isOpen, onClose, onSave }) => {
  const { editableOrder, updateOrderItem } = useModel('order');
  const { customFields } = useModel('customOrderFields');

  const tabItems: TabsProps['items'] = [
    {
      key: '1',
      label: 'Basic Info',
      children: <BasicInfo />,
    },
    {
      key: '2',
      label: 'Order Items',
      children: <OrderItems />,
    },
    {
      key: '3',
      label: 'Fields',
      children: <OrderCustomFields />,
    },
    {
      key: '4',
      label: 'Communication',
      children: <>Communication</>,
    },
    {
      key: '5',
      label: 'Channel Fields',
      children: <>Channel Fields</>,
    },
    {
      key: '6',
      label: 'History',
      children: <>History</>,
    },
  ];

  const handleSave = () => {
    updateOrderItem({ ...editableOrder, custom_fields: customFields });
    onSave();
  };

  return (
    <OModal
      title={editableOrder?.order_number}
      helpLink="/help/orders/general"
      width={1200}
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
          btnLabel: 'Save',
          onClick: handleSave,
        },
      ]}
    >
      <Tabs defaultActiveKey="1" items={tabItems} />
    </OModal>
  );
};

export default EditOrderModal;
