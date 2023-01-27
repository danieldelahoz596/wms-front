import React from 'react';
import { Tabs } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import OrderItems from '@/components/Order/EditOrder/OrderItems';

const { TabPane } = Tabs;

interface IEditOrderModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const EditOrderModal: React.FC<IEditOrderModal> = ({ isOpen, onClose, onSave }) => {
  const { editableOrder, saveEditableOrder } = useModel('order');

  const handleSave = () => {
    saveEditableOrder();
    onSave();
  };

  return (
    <OModal
      title={editableOrder?.orderNumber}
      width={1200}
      className="OModal"
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
          btnLabel: 'Save',
          onClick: handleSave,
        },
      ]}
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="Basic Info" key="1">
          Basic Info
        </TabPane>
        <TabPane tab="Processing" key="2">
          Processing
        </TabPane>
        <TabPane tab="Order Items" key="3">
          <OrderItems />
        </TabPane>
        <TabPane tab="Communication" key="4">
          Communication
        </TabPane>
        <TabPane tab="Channel Fields" key="5">
          Channel Fields
        </TabPane>
        <TabPane tab="History" key="6">
          History
        </TabPane>
      </Tabs>
    </OModal>
  );
};

export default EditOrderModal;
