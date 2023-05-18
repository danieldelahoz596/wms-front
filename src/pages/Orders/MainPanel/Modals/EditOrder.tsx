import React, { useState, useEffect } from 'react';
import { Tabs, Form } from 'antd';
import type { TabsProps } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import BasicInfo from '@/pages/Orders/MainPanel/Modals/EditOrder/BasicInfo';
import Processing from './EditOrder/Processing';
import AddNewOrderItemTable from './AddNewOrder/AddNewOrderItemTable';
import moment from 'moment';

interface IEditOrderModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const EditOrderModal: React.FC<IEditOrderModal> = ({ isOpen, onClose, onSave }) => {
  const { editableOrder, updateOrder } = useModel('order');
  const [productRows, setProductRows] = useState([]);
  const [recipientForm] = Form.useForm();
  const [orderDetailsForm] = Form.useForm();

  useEffect(() => {
    if (editableOrder) {
      if (editableOrder.customer) recipientForm.setFieldsValue(editableOrder.customer);
      else recipientForm.resetFields();

      const { order_date, paid_on, deliver_by, ship_by, ...rest } = editableOrder;
      if (order_date) rest.order_date = moment(new Date(editableOrder.order_date));
      if (paid_on) rest.paid_on = moment(new Date(editableOrder.paid_on));
      if (deliver_by) rest.deliver_by = moment(new Date(editableOrder.deliver_by));
      if (ship_by) rest.ship_by = moment(new Date(editableOrder.ship_by));

      orderDetailsForm.setFieldsValue(rest);

      // orderDetailsForm.setFieldsValue({
      //   ...editableOrder,
      //   order_date: moment(new Date(editableOrder.order_date)),
      //   paid_on: moment(new Date(editableOrder.paid_on)),
      //   deliver_by: moment(new Date(editableOrder.deliver_by)),
      //   ship_by: moment(new Date(editableOrder.ship_by)),
      // });
      setProductRows(
        editableOrder.order_items.map((item) => ({
          key: item.product.id,
          product: item.product.name,
          quantity: item.qty,
          unitPrice: 10,
          totalDiscount: 0,
        })),
      );
    }
  }, [editableOrder, recipientForm, orderDetailsForm]);

  const tabItems: TabsProps['items'] = [
    {
      key: '1',
      label: 'Basic Info',
      children: <BasicInfo recipientForm={recipientForm} orderDetailsForm={orderDetailsForm} />,
    },
    {
      key: '2',
      label: 'Processing',
      children: <Processing />,
    },
    {
      key: '3',
      label: 'Order Items',
      // children: <OrderItems />,
      children: <AddNewOrderItemTable productRows={productRows} setProductRows={setProductRows} />,
    },
    // {
    //   key: '4',
    //   label: 'Fields',
    //   children: <OrderCustomFields />,
    // },
    {
      key: '5',
      label: 'Communication',
      children: <>Communication</>,
    },
    {
      key: '6',
      label: 'Channel Fields',
      children: <>Channel Fields</>,
    },
    {
      key: '7',
      label: 'History',
      children: <>History</>,
    },
  ];

  const handleSave = () => {
    recipientForm.validateFields().then((customerData) => {
      orderDetailsForm.validateFields().then((orderData) => {
        const updateOrderData =
          !customerData.phone_number && !customerData.phone_type
            ? {
                ...editableOrder,
                ...orderData,
                order_items: productRows.map((item) => ({ product_id: item.key, qty: item.quantity })),
              }
            : {
                ...editableOrder,
                customer: { ...editableOrder.customer, ...customerData },
                ...orderData,
                order_items: productRows.map((item) => ({ product_id: item.key, qty: item.quantity })),
              };
        updateOrder(updateOrderData).then(() => {
          onSave();
        });
      });
    });
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
