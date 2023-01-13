import React from 'react';
import { OModal } from '@/components/Globals/OModal';

interface IConfigAttributeGroups {
  isOpen: boolean;
  onClose: () => void;
}

const ConfigAttributeGroups: React.FC<IConfigAttributeGroups> = ({ isOpen, onClose }) => {
  return (
    <OModal
      title={'CONFIG ATTRIBUTE GROUPS'}
      width={400}
      centered
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
    ></OModal>
  );
};

export default ConfigAttributeGroups;
