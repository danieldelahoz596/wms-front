import React, { useEffect, useState } from 'react';
import { Row, Col, Form } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import RecipientForm from '@/pages/Orders/MainPanel/Modals/AddNewOrder/Recipient';
import OrderDetailsForm from '@/pages/Orders/MainPanel/Modals/AddNewOrder/OrderDetails';
import AddNewOrderItemTable from '@/pages/Orders/MainPanel/Modals/AddNewOrder/AddNewOrderItemTable';
import { useModel } from '@umijs/max';
import DebounceSelect from '@/components/Globals/DebounceSelect';
import type ICustomer from '@/interfaces/ICustomer';
import qs from 'qs';

interface IAddNewOrderModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const AddNewOrderModal: React.FC<IAddNewOrderModal> = ({ isOpen, onClose, onSave }) => {
  const { createOrder } = useModel('order');
  const [recipientForm] = Form.useForm();
  const [orderDetailsForm] = Form.useForm();
  const [productRows, setProductRows] = useState([]);
  const [value, setValue] = useState([]);
  const { getCustomerList } = useModel('customer');

  useEffect(() => {
    recipientForm.resetFields();
    orderDetailsForm.resetFields();
    setProductRows([]);
  }, [isOpen, recipientForm, orderDetailsForm]);

  const handleSave = () => {
    recipientForm.validateFields().then((customerData) => {
      orderDetailsForm.validateFields().then((orderData) => {
        createOrder({
          customer: customerData,
          order: { ...orderData, status_id: 2 },
          order_items: productRows.map((item) => ({ product_id: item.key, qty: item.quantity })),
        }).then(() => {
          onSave();
        });
      });
    });
  };

  const fetchCustomerList = (s) => {
    return getCustomerList(qs.stringify({ name: s, phone_number: s, address: s })).then(({ data: { customers } }) => {
      return customers.map((customer: ICustomer) => ({
        label: `${customer.name} - ${customer.phone_number} - ${customer.address}`,
        value: customer.id,
        ...customer,
      }));
    });
  };

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
          onClick: handleSave,
        },
      ]}
      forceRender
    >
      <>
        <Row gutter={10}>
          <Col span={11}>
            <DebounceSelect
              value={value}
              placeholder="Select users"
              fetchOptions={fetchCustomerList}
              onChange={(newValue, option) => {
                setValue(newValue);
                recipientForm.setFieldsValue(option);
              }}
              style={{ width: '100%' }}
            />
            <RecipientForm form={recipientForm} />
          </Col>
          <Col span={13}>
            <OrderDetailsForm form={orderDetailsForm} />
          </Col>
        </Row>
        <div>
          <AddNewOrderItemTable productRows={productRows} setProductRows={setProductRows} />
        </div>
      </>
    </OModal>
  );
};

export default AddNewOrderModal;
