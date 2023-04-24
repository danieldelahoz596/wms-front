import React from 'react';
import { Row, Col, Form } from 'antd';
import PurchaseOrderDetail from '@/pages/PurchaseOrders/MainPanel/Modals/components/PurchaseOrderDetail';
import AggregateCosts from '@/pages/PurchaseOrders/MainPanel/Modals/components/AggregateCosts';
import POCommunication from '@/pages/PurchaseOrders/MainPanel/Modals/components/POCommunication';
import AddNewPOItemTable from '@/pages/PurchaseOrders/MainPanel/Modals/components/AddNewPOItemTable';
import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { uuidv4 } from '@antv/xflow-core';
import moment from 'moment';

interface IAddNewPOModal {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}

const AddNewPOModal: React.FC<IAddNewPOModal> = ({ isOpen, onSave, onClose }) => {
  const { selectedPO, setPoList } = useModel('po');
  const { initialState } = useModel('@@initialState');
  const { milestonesList } = useModel('milestones');
  const { selectedVendor } = useModel('vendor');
  const { warehouseList } = useModel('warehouse');
  const { poTemplateList } = useModel('poTemplate');
  const { shippingTermList } = useModel('shippingTerm');
  const { paymentTermList } = useModel('paymentTerm');
  const [purchaseForm] = Form.useForm();
  const [aggregateCostForm] = Form.useForm();

  const handleSave = () => {
    purchaseForm.validateFields().then((purchaseFormValues) => {
      aggregateCostForm.validateFields().then((aggregateCostValues) => {
        const item = {
          key: uuidv4(),
          po_status: {
            id: 1,
            code: '1',
            name: 'Awaiting Authorization',
          },
          ponumber: uuidv4(),
          customponumber: purchaseFormValues.customPONumber,
          createdBy: initialState?.currentUser?.user?.full_name,
          dateCreated: new Date(),
          fromVendor: selectedVendor,
          poFormat: purchaseFormValues.poFormat,
          destination: warehouseList.find((warehouse) => warehouse.id === purchaseFormValues.destination),
          poTemplate: poTemplateList.find((template) => template.id === purchaseFormValues.poTemplate),
          shippingTerm: shippingTermList.find((term) => term.id === purchaseFormValues.shippingTerm),
          paymentTerm: paymentTermList.find((term) => term.id === purchaseFormValues.paymentTerm),
          confirmedBy: moment(purchaseFormValues.confirmBy).format('MM/dd/yyyy'),
          enablePortal: null,
          milestone: milestonesList.find((milestone) => milestone.id === purchaseFormValues.milestone),
          itemCost: 0,
          shippingCost: aggregateCostValues.shippingCost,
          paymentDate: new Date(),
          otherCost: selectedPO.otherCost,
          messageToVendor: 'abc',
          internalNote: 'abc',
          poItems: selectedPO?.poItems,
        };
        setPoList((prev) => [...prev, item]);
        onSave();
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
          onClick: handleSave,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Save',
          onClick: handleSave,
        },
      ]}
    >
      <>
        <Row gutter={5}>
          <Col span={10}>
            <PurchaseOrderDetail form={purchaseForm} />
          </Col>
          <Col span={7}>
            <AggregateCosts form={aggregateCostForm} />
          </Col>
          <Col span={7}>
            <POCommunication />
          </Col>
        </Row>
        <AddNewPOItemTable />
      </>
    </OModal>
  );
};

export default AddNewPOModal;
