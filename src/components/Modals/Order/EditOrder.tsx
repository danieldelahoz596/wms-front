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
        <TabPane tab="BASIC INFO" key="1">
          BASIC INFO
        </TabPane>
        <TabPane tab="PROCESSING" key="2">
          PROCESSING
        </TabPane>
        <TabPane tab="ORDER ITEMS" key="3">
          <OrderItems />
        </TabPane>
        <TabPane tab="COMMUNICATION" key="4">
          COMMUNICATION
        </TabPane>
        <TabPane tab="CHANNEL FIELDS" key="5">
          CHANNEL FIELDS
        </TabPane>
        <TabPane tab="HISTORY" key="6">
          HISTORY
        </TabPane>
      </Tabs>
    </OModal>
  );
};

export default EditOrderModal;
