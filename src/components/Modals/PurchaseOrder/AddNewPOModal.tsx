import React from 'react';
import { Row, Col } from 'antd';
import { modalType } from '@/utils/helpers/types';
import PurchaseOrderDetail from '@/components/PurchaseOrder/PurchaseOrderDetail';
import AggregateCosts from '@/components/PurchaseOrder/AggregateCosts';
import POCommunication from '@/components/PurchaseOrder/POCommunication';
import AddNewPOItemTable from '@/components/PurchaseOrder/AddNew/AddNewPOItemTable';
import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';

interface IAddNewPOModal {
  newPOModal: string;
  setNewPOModal: (value: string) => void;
}

const AddNewPOModal: React.FC<IAddNewPOModal> = ({ newPOModal, setNewPOModal }) => {
  const { addNewPO, initialSelectedPO } = useModel('po');

  const handleCancel = () => {
    initialSelectedPO();
    setNewPOModal(modalType.Close);
  };

  const handleNewPOSave = () => {
    addNewPO();
    initialSelectedPO();
    handleCancel();
  };

  return (
    <OModal
      title="New Purchase Order"
      helpLink=""
      width={1000}
      isOpen={newPOModal == modalType.New}
      handleCancel={handleCancel}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: handleCancel,
        },
        {
          key: 'submitauth',
          type: 'primary',
          btnLabel: 'Save & Authorize',
          onClick: handleCancel,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Save',
          onClick: handleNewPOSave,
        },
      ]}
    >
      <>
        <Row gutter={5}>
          <Col span={10}>
            <PurchaseOrderDetail />
          </Col>
          <Col span={7}>
            <AggregateCosts />
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
