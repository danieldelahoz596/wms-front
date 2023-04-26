import React from 'react';
import { Row, Col, Form, message } from 'antd';
import PurchaseOrderDetail from '@/pages/PurchaseOrders/MainPanel/Modals/components/PurchaseOrderDetail';
import AggregateCosts from '@/pages/PurchaseOrders/MainPanel/Modals/components/AggregateCosts';
import AddNewPOItemTable from '@/pages/PurchaseOrders/MainPanel/Modals/components/AddNewPOItemTable';
import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';

interface IAddNewPOModal {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}

const AddNewPOModal: React.FC<IAddNewPOModal> = ({ isOpen, onSave, onClose }) => {
  const { poItems, otherCosts, totalCost, createPO } = useModel('po');
  const { selectedVendor } = useModel('vendor');
  const [purchaseForm] = Form.useForm();
  const [aggregateCostForm] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const handleSave = (status) => {
    purchaseForm.validateFields().then((purchaseFormValues) => {
      aggregateCostForm.validateFields().then((aggregateCostValues) => {
        createPO({
          ...purchaseFormValues,
          ...aggregateCostValues,
          status_id: status,
          vendor_id: selectedVendor.id,
          other_costs: otherCosts.map((item) => ({ name: item.name, amount: item.amount })),
          po_items: poItems.map((item) => ({
            product_id: item.product_id,
            qty: item.qty,
            unit_of_measure_id: item.unit_of_measure_id,
          })),
          total_cost: totalCost,
        }).then(() => {
          messageApi.open({
            type: 'success',
            content: 'Successfully creating a PO',
          });
          onSave();
        });
      });
    });
  };

  return (
    <OModal
      title="New Purchase Order"
      helpLink=""
      width={1000}
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
          key: 'submitauth',
          type: 'primary',
          btnLabel: 'Save & Authorize',
          onClick: () => handleSave(2),
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Save',
          onClick: () => handleSave(1),
        },
      ]}
    >
      <>
        {contextHolder}
        <Row gutter={10}>
          <Col span={12}>
            <PurchaseOrderDetail form={purchaseForm} />
          </Col>
          <Col span={12}>
            <AggregateCosts form={aggregateCostForm} />
          </Col>
        </Row>
        <AddNewPOItemTable />
      </>
    </OModal>
  );
};

export default AddNewPOModal;
