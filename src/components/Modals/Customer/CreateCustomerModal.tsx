import { OInput } from '@/components/Globals/OInput';
import { useModel } from '@umijs/max';
import { Modal, Row, Col } from 'antd';

export default function CreateCustomerModal({ isOpen, onClose }) {
  const { onChangeNewCustomer, handleCreateCustomer } = useModel('customer');

  // new customer create modal handler
  const handleNewCustomerCreate = () => {
    handleCreateCustomer();
    onClose();
  };

  return (
    <Modal
      title="CREATE NEW CUSTOMER"
      centered
      open={isOpen}
      onOk={handleNewCustomerCreate}
      onCancel={onClose}
      width={800}
      className="newcustomer"
    >
      <Row className="pb-3">
        <Col span={4}>Phone *:</Col>
        <Col span={20}>
          <OInput name="phonenumber" onChange={onChangeNewCustomer} placeholder="Phone" />
        </Col>
      </Row>
      <Row className="pb-3">
        <Col span={4}>Card ID Number *:</Col>
        <Col span={20}>
          <OInput name="card_number" onChange={onChangeNewCustomer} placeholder="Card ID Number" />
        </Col>
      </Row>
      <Row className="pb-3">
        <Col span={4}>Address:</Col>
        <Col span={20}>
          <OInput name="address" onChange={onChangeNewCustomer} placeholder="Address" />
        </Col>
      </Row>
      <Row className="pb-3">
        <Col span={4}>Name:</Col>
        <Col span={20}>
          <OInput name="name" onChange={onChangeNewCustomer} placeholder="Name" />
        </Col>
      </Row>
    </Modal>
  );
}
