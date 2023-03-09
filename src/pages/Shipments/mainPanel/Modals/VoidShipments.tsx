import { OModal } from '@/components/Globals/OModal';
import { QuestionCircleTwoTone } from '@ant-design/icons';
import { Alert, Checkbox } from 'antd';

interface IVoidShipmentsModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const VoidShipmentsModal: React.FC<IVoidShipmentsModal> = ({ isOpen, onClose, onSave }) => {
  return (
    <OModal
      title="Void Shipment(s)"
      width={400}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Close',
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Yes - Void Shipment(s)',
          onClick: () => onSave(),
        },
      ]}
    >
      <>
        <Alert
          description={
            <p>
              The selected shipment(s) will be voided. <b>Associated order(s) will be returned to awaiting shipmen state.</b>{' '}
              <br />
              <i>Note: Only ENDICIA, FedEx, and AMAZON PARNERED support refunds.</i>
            </p>
          }
        />
        <div style={{ gap: HORIZONTAL_SPACE_SIZE }}>
          <Checkbox /> Add back inventory <QuestionCircleTwoTone style={{ fontSize: 20 }} />
        </div>
        <div style={{ textAlign: 'right', margin: '10px 5px' }}>
          <span>Are you sure you want to proceed?</span>
        </div>
      </>
    </OModal>
  );
};

export default VoidShipmentsModal;
