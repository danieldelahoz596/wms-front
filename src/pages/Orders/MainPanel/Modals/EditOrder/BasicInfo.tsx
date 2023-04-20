import { useModel } from '@umijs/max';
import { Col, Row } from 'antd';
import moment from 'moment';
import { useEffect } from 'react';
import RecipientForm from '@/pages/Orders/MainPanel/Modals/AddNewOrder/Recipient';
import OrderDetailsForm from '@/pages/Orders/MainPanel/Modals/AddNewOrder/OrderDetails';

interface IBasicInfo {
  recipientForm: any;
  orderDetailsForm: any;
}

const BasicInfo: React.FC<IBasicInfo> = ({ recipientForm, orderDetailsForm }) => {
  const { editableOrder } = useModel('order');

  useEffect(() => {
    if (editableOrder) {
      recipientForm.setFieldsValue(editableOrder.customer);
      orderDetailsForm.setFieldsValue({
        ...editableOrder,
        order_date: moment(new Date(editableOrder.order_date)),
        paid_on: moment(new Date(editableOrder.paid_on)),
        deliver_by: moment(new Date(editableOrder.deliver_by)),
        ship_by: moment(new Date(editableOrder.ship_by)),
      });
    }
  }, [editableOrder, recipientForm, orderDetailsForm]);

  return (
    <Row gutter={10}>
      <Col span={12}>
        <RecipientForm form={recipientForm} />
      </Col>
      <Col span={12}>
        <OrderDetailsForm form={orderDetailsForm} />
      </Col>
    </Row>
  );
};

export default BasicInfo;
