import React from 'react';
import { Row, Col, Card } from 'antd';
import { modalType } from '@/utils/helpers/types';
import { OModal } from '@/components/Globals/OModal';

interface IVoidItemModal {
  voidItemData?: any;
  voidItemModal: string;
  setVoidItemModal?: (value: string) => void;
}

const VoidItemModal: React.FC<IVoidItemModal> = ({
  voidItemData,
  voidItemModal,
  setVoidItemModal,
}) => {
  const handleCancel = () =>
    setVoidItemModal ? setVoidItemModal(modalType.Close) : console.log('Cancel');
  const handleSave = () =>
    setVoidItemModal ? setVoidItemModal(modalType.Close) : console.log('Save');

  return (
    <OModal
      title={'Void Item ' + voidItemData?.product}
      centered
      width={600}
      isOpen={voidItemModal == modalType.Void}
      handleCancel={handleCancel}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: handleCancel,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Yes - Void Item',
          onClick: handleSave,
        },
      ]}
    >
      <>
        <Row>
          <Card style={{ minWidth: '100%', background: '#00ffff', border: '1px ridge' }}>
            <h4>Voiding this item will mark it as unfulfilled bt the vendor</h4>
          </Card>
        </Row>
        <Row>
          <Col span={12} offset={12} style={{ marginTop: '2%' }}>
            <h4>Are you sure want to proceed?</h4>
          </Col>
        </Row>
      </>
    </OModal>
  );
};

export default VoidItemModal;
