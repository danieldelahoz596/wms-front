import React, { useEffect } from 'react';
import { Row, Col, Form } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import RecipientForm from '@/components/Order/AddNewOrder/Recipient';
import OrderDetailsForm from '@/components/Order/AddNewOrder/OrderDetails';
import AddNewOrderItemTable from '@/components/Order/AddNewOrder/AddNewOrderItemTable';
import { useModel } from '@umijs/max';
import { uuidv4 } from '@antv/xflow-core';

interface IAddNewOrderModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const AddNewOrderModal: React.FC<IAddNewOrderModal> = ({ isOpen, onClose, onSave }) => {
  const { editableOrder } = useModel('order');
  const [recipientForm] = Form.useForm();
  const [orderdetailsForm] = Form.useForm();

  useEffect(() => {
    recipientForm.setFieldsValue({
      name: editableOrder ? editableOrder.recipient : '',
    });
    orderdetailsForm.setFieldsValue({
      order: editableOrder ? editableOrder.orderNumber : '',
      orderDate: editableOrder ? editableOrder.orderDate : '',
      paidOn: editableOrder ? editableOrder.datePaid : '',
    });
  }, [isOpen]);

  return (
    <OModal
      title="New Manual Order"
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
          onClick: onSave,
        },
      ]}
      forceRender
    >
      <>
        <Row>
          <Col span={10}>
            <RecipientForm form={recipientForm} />
          </Col>
          <Col span={14}>
            <OrderDetailsForm form={orderdetailsForm} />
          </Col>
        </Row>
        <div>
          <AddNewOrderItemTable
            initialItems={
              editableOrder
                ? editableOrder.orderItems.map((item) => ({
                    key: uuidv4(),
                    product: item.name,
                    notes: '',
                    available: '',
                    quantity: item.unitQty,
                    uniPrice: item.unitAmount,
                    totalDiscount: item.discount,
                  }))
                : []
            }
          />
        </div>
      </>
    </OModal>
  );
};

export default AddNewOrderModal;
