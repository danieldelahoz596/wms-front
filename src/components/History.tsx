import { OModal } from './Globals/OModal';
import { OTable } from './Globals/OTable';
import type { IOTableColumn } from './Globals/OTable';

interface IHistoryModal {
  isOpen: boolean;
  title: string | React.ReactNode;
  helpLink?: string;
  TColumns: IOTableColumn[];
  TRows: any[];
  onClose: () => void;
}

const HistoryModal: React.FC<IHistoryModal> = ({ isOpen, title, helpLink = '', TColumns, TRows, onClose }) => {
  return (
    <OModal
      title={title}
      helpLink={helpLink}
      width={MODAL_WIDTH}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'close',
          type: 'default',
          btnLabel: 'Close',
          onClick: onClose,
        },
      ]}
    >
      <OTable columns={TColumns} rows={TRows} />
    </OModal>
  );
};

export default HistoryModal;
