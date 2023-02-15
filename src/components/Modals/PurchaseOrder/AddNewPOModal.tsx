import React, { useState } from 'react';
import { Row, Col, Form } from 'antd';
import PurchaseOrderDetail from '@/components/PurchaseOrder/PurchaseOrderDetail';
import AggregateCosts from '@/components/PurchaseOrder/AggregateCosts';
import POCommunication from '@/components/PurchaseOrder/POCommunication';
import AddNewPOItemTable from '@/components/PurchaseOrder/AddNew/AddNewPOItemTable';
import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { uuidv4 } from '@antv/xflow-core';

interface IAddNewPOModal {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
  // newPOModal: string;
  // setNewPOModal: (value: string) => void;
}

const AddNewPOModal: React.FC<IAddNewPOModal> = ({ isOpen, onSave, onClose }) => {
  const { selectedPO, setPoList } = useModel('po');
  const { initialState } = useModel('@@initialState');
  const { milestonesList } = useModel('milestones');
  const { selectedVendor } = useModel('vendor');
  const [purchaseForm] = Form.useForm();
  const [aggregateCostForm] = Form.useForm();
  const [costItems, setCostItems] = useState([]);

  // const handleCancel = () => {
  //   initialSelectedPO();
  //   setNewPOModal(modalType.Close);
  // };

  // const handleNewPOSave = () => {
  //   addNewPO();
  //   initialSelectedPO();
  //   handleCancel();
  // };

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
          poTemplate: initialState?.initialData.poTemplates?.find(
            (template) => template.id === purchaseFormValues.poTemplate,
          ),
          shippingTerm: initialState?.initialData.shippingTerms?.find(
            (term) => term.id === purchaseFormValues.shippingTerm,
          ),
          paymentTerm: initialState?.initialData.paymentTerms?.find(
            (term) => term.id === purchaseFormValues.paymentTerm,
          ),
          confirmedBy: purchaseFormValues.confirmBy,
          enablePortal: null,
          milestone: milestonesList.find(
            (milestone) => milestone.id === purchaseFormValues.milestone,
          ),
          itemCost: 0,
          shippingCost: aggregateCostValues.shippingCost,
          paymentDate: new Date(),
          otherCost: costItems,
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
            <AggregateCosts
              form={aggregateCostForm}
              costItems={costItems}
              setCostItems={setCostItems}
            />
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
