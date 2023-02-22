import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { useModel } from '@umijs/max';

interface IHistoryModal {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}

const HistoryModal: React.FC<IHistoryModal> = ({ isOpen, onSave, onClose }) => {
  const { vendorHistory } = useModel('vendor');

  const THistoryColumns = [
    {
      title: 'Edit Time',
      dataIndex: 'time',
      key: 'editTime',
    },
    {
      title: 'Vendor',
      dataIndex: 'vendor',
      key: 'vendor',
    },
    {
      title: 'Changed Values',
      dataIndex: 'value',
      key: 'changedValues',
    },
  ];

  return (
    <OModal title="Vendor Edit History" isOpen={isOpen} onOk={onSave} onCancel={onClose} width={800}>
      <OTable columns={THistoryColumns} rows={vendorHistory.map((_item) => ({ ..._item, key: _item.id }))} />
    </OModal>
  );
};

export default HistoryModal;
