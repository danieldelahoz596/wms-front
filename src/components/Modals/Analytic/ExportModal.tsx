import React from 'react';
import { OModal } from '@/components/Globals/OModal';

interface IExportModal {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

const ExportModal: React.FC<IExportModal> = ({ isOpen, title, onClose }) => {
  return (
    <OModal
      title={title}
      width={500}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Close',
          onClick: onClose,
        },
      ]}
    >
      <>
        <p>This report is only available in UTC</p>
        <p>
          This report is exported in the Microsoft Excel spreadsheet format and a download link will
          be emailed to you shortly
        </p>
      </>
    </OModal>
  );
};

export default ExportModal;
