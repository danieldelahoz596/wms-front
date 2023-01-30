import React from 'react';
import { 
  Row,
  Col,
  Card,
} from 'antd';
import { modalType } from '@/utils/helpers/types';
import { OModal } from '@/components/Globals/OModal';

interface ICancelItemModal {
    cancelItemData?: any;
    cancelItemModal: string;
    setCancelItemModal?: (value: string) => void;
}

const CancelItemModal: React.FC<ICancelItemModal> = ({
    cancelItemData,
    cancelItemModal,
    setCancelItemModal,
}) => {

  const handleCancel = () => setCancelItemModal ? setCancelItemModal(modalType.Close) : console.log('Cancel')
  const handleSave = () => setCancelItemModal ? setCancelItemModal(modalType.Close) : console.log('Save')

  return (
    <OModal
      title={'Cancel Item ' + cancelItemData?.product}
      width={600}
      isOpen={cancelItemModal == modalType.Cancel}
      handleCancel={handleCancel} 
      buttons={[
      {
        key: 'back',
        type: 'default',
        btnLabel: 'Cancel',
        onClick: handleCancel
      },
      {
        key: 'submit',
        type: 'primary',
        btnLabel: 'yes - Cancel Item',
        onClick: handleSave
      }
    ]}>
      <>
        <Row>
          <Card style={{ minWidth: '100%', background: '#00ffff', border: '1px ridge' }}>
              <h4>Canceling this item will mark it as an error. Please note that canceled items do not count againist a vendor's score card.</h4>
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

export default CancelItemModal;
