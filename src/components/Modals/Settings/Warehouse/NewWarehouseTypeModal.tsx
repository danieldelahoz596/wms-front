import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { QuestionCircleTwoTone } from '@ant-design/icons';

export default function ({ isOpen, onClose, handleOpenNew }) {
  return (
    <OModal
      title="New Warehouse"
      helpLink=""
      width={300}
      isOpen={isOpen}
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
          btnText={'Direct (In-House) Fulfillment'}
          style={{ border: '1px solid #5F5FFF' }}
          onClick={handleOpenNew}
        />
        <OButton
          btnText={'Third Party Logistics'}
          style={{ border: '1px solid #5F5FFF' }}
          onClick={onClose}
        />
        <a href="#">
          {"What's the the difference"} <QuestionCircleTwoTone />
        </a>
      </div>
    </OModal>
  );
}
