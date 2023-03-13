import React, { useEffect, useMemo } from 'react';
import { Row, Col, Form } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import RecipientForm from '@/pages/Orders/MainPanel/Modals/AddNewOrder/Recipient';
import OrderDetailsForm from '@/pages/Orders/MainPanel/Modals/AddNewOrder/OrderDetails';
import AddNewOrderItemTable from '@/pages/Orders/MainPanel/Modals/AddNewOrder/AddNewOrderItemTable';
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
      order: editableOrder ? editableOrder.order_number : '',
      order_date: editableOrder ? editableOrder.order_date : '',
      paidOn: editableOrder ? editableOrder.order_paid : '',
    });
  }, [isOpen]);

  const initialItems = useMemo(() => {
    if (editableOrder) {
      return editableOrder.orderItems.map((item) => ({
        key: uuidv4(),
        product: item.name,
        notes: '',
        available: '',
        quantity: item.unitQty,
        uniPrice: item.unitAmount,
        totalDiscount: item.discount,
      }));
    } else return [];
  }, [editableOrder]);

  return (
    <OModal
      title="New Manual Order"
      helpLink="/help/orders/general"
      width={800}
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
        <Row gutter={10}>
          <Col span={11}>
            <RecipientForm form={recipientForm} />
          </Col>
          <Col span={13}>
            <OrderDetailsForm form={orderdetailsForm} />
          </Col>
        </Row>
        <div>
          <AddNewOrderItemTable initialItems={initialItems} />
        </div>
      </>
    </OModal>
  );
};

export default AddNewOrderModal;
