import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { QuestionCircleTwoTone } from '@ant-design/icons';

export default function ({ isOpen, onClose, handleOpenNew }) {
  return (
    <OModal
      title="NEW WAREHOUSE"
      isOpen={isOpen}
      width={300}
      centered
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: onClose,
        },
      ]}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          justifyContent: 'center',
          padding: '1rem',
        }}
      >
        <OButton
          type="dashed"
          btnText={'DIRECT (IN-HOUSE) FULFILLMENT'}
          style={{ border: '1px solid #5F5FFF' }}
          onClick={handleOpenNew}
        />
        <OButton
          btnText={'THIRD PARTY LOGISTICS'}
          style={{ border: '1px solid #5F5FFF' }}
          onClick={onClose}
        />
        <a href="#">
          What's the the difference <QuestionCircleTwoTone />
        </a>
      </div>
    </OModal>
  );
}
