import React from 'react';
import { Row, Col } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import RecipientForm from '@/components/Order/AddNewOrder/Recipient';
import OrderDetailsForm from '@/components/Order/AddNewOrder/OrderDetails';
import AddNewOrderItemTable from '@/components/Order/AddNewOrder/AddNewOrderItemTable';

interface IAddNewOrderModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const AddNewOrderModal: React.FC<IAddNewOrderModal> = ({ isOpen, onClose, onSave }) => {
  return (
    <OModal
      title="NEW MANUAL ORDER"
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
          onClick: onSave,
        },
      ]}
    >
      <>
        <Row>
          <Col span={10}>
            <RecipientForm />
          </Col>
          <Col span={14}>
            <OrderDetailsForm />
          </Col>
        </Row>
        <div>
          <AddNewOrderItemTable />
        </div>
      </>
    </OModal>
  );
};

export default AddNewOrderModal;
