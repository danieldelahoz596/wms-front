import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { QuestionCircleTwoTone } from '@ant-design/icons';
import { FormattedMessage } from '@umijs/max';

interface INewWarehouseTypeModal {
  isOpen: boolean;
  handleOpenNew: () => void;
  onClose: () => void;
}

const NewWarehouseTypeModal: React.FC<INewWarehouseTypeModal> = ({ isOpen, onClose, handleOpenNew }) => {
  return (
    <OModal
      title={<FormattedMessage id="pages.settings.warehouses.newWarehouseType.title" />}
      helpLink=""
      width={300}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: <FormattedMessage id="component.button.cancel" />,
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
          btnText={<FormattedMessage id="component.button.directInHouseFulfillment" />}
          style={{ border: '1px solid #5F5FFF' }}
          onClick={handleOpenNew}
        />
        <OButton
          btnText={<FormattedMessage id="component.button.thirdPartyLogistics" />}
          style={{ border: '1px solid #5F5FFF' }}
          onClick={onClose}
        />
        <a href="#">
          <FormattedMessage id="pages.settings.warehouses.newWarehouseType.question" /> <QuestionCircleTwoTone />
        </a>
      </div>
    </OModal>
  );
};

export default NewWarehouseTypeModal;
