import React from 'react';
import { Tabs } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import OrderItems from '@/components/Order/EditOrder/OrderItems';
import ManageCustomFields from '@/components/Order/EditOrder/ManageCustomFields';
import BasicInfo from '@/components/Order/EditOrder/BasicInfo';
interface IEditOrderModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const EditOrderModal: React.FC<IEditOrderModal> = ({ isOpen, onClose, onSave }) => {
  const { editableOrder, saveEditableOrder } = useModel('order');

  const tabItems = [
    {
      label: 'Basic Info',
      key: 1,
      children: <BasicInfo />,
    },
    {
      label: 'Order Items',
      key: 2,
      children: <OrderItems />,
    },
    {
      label: 'Fields',
      key: 3,
      children: <ManageCustomFields />,
    },
    {
      label: 'Communication',
      key: 4,
      children: <>Communication</>,
    },
    {
      label: 'Channel Fields',
      key: 5,
      children: <>Channel Fields</>,
    },
    {
      label: 'History',
      key: 6,
      children: <>History</>,
    },
  ];

  const handleSave = () => {
    // saveEditableOrder();
    onSave();
  };

  return (
    <OModal
      title={editableOrder?.orderNumber}
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
