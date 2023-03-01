import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { FormattedMessage, useModel } from '@umijs/max';

interface IHistoryModal {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}

const HistoryModal: React.FC<IHistoryModal> = ({ isOpen, onSave, onClose }) => {
  const { vendorHistory } = useModel('vendor');

  const THistoryColumns = [
    {
      title: <FormattedMessage id="component.table.column.editTime" />,
      dataIndex: 'time',
      key: 'editTime',
    },
    {
      title: <FormattedMessage id="component.table.column.vendor" />,
      dataIndex: 'vendor',
      key: 'vendor',
    },
    {
      title: <FormattedMessage id="component.table.column.changedValues" />,
      dataIndex: 'value',
      key: 'changedValues',
    },
  ];

  return (
    <OModal
      title={<FormattedMessage id="pages.settings.vendors.history.title" />}
      isOpen={isOpen}
      onOk={onSave}
      onCancel={onClose}
      width={800}
    >
      <OTable columns={THistoryColumns} rows={vendorHistory.map((_item) => ({ ..._item, key: _item.id }))} />
    </OModal>
  );
};

export default HistoryModal;
