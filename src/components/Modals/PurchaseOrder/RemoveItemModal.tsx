import React from 'react';
import { 
  Row,
  Col,
  Card,
} from 'antd';
import { modalType } from '@/utils/helpers/types';
import { OModal } from '@/components/Globals/OModal';

interface IRemoveItemModal {
    removeItemData?: any;
    removeItemModal: string;
    setRemoveItemModal?: (value: string) => void;
}

const RemoveItemModal: React.FC<IRemoveItemModal> = ({
    removeItemData,
    removeItemModal,
    setRemoveItemModal,
}) => {

  const handleCancel = () => setRemoveItemModal ? setRemoveItemModal(modalType.Close) : console.log('Remove')
  const handleSave = () => setRemoveItemModal ? setRemoveItemModal(modalType.Close) : console.log('Save')
  return (
    <OModal
      title={'Remove Item ' + removeItemData?.product}
      helpLink=""
      width={600}
      isOpen={removeItemModal == modalType.Remove}
      handleCancel={handleCancel} 
      buttons={[
      {
        key: 'back',
        type: 'default',
        btnLabel: 'Remove',
        onClick: handleCancel
      },
      {
        key: 'submit',
        type: 'primary',
        btnLabel: 'yes - Remove Item',
        onClick: handleSave
      }
    ]}>
      <>
        <Row>
            <Card style={{ minWidth: '100%', background: '#00ffff', border: '1px ridge' }}>
                <h4>Removeing this item is an action from screenshot.</h4>
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

export default RemoveItemModal;
