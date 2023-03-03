import { OModal } from '@/components/Globals/OModal';
import { EditableTable } from '@/components/Globals/EditableTable';
import { useMemo } from 'react';

interface IConfigureItemModal {
  isOpen: boolean;
  title: string;
  items: any[];
  setItems: (value: any) => void;
  onClose: () => void;
  onSave: () => void;
}
const TColumns = [
  {
    title: '',
    dataIndex: 'name',
    key: 'name',
    editable: true,
  },
];

const ConfigureItemModal: React.FC<IConfigureItemModal> = ({ isOpen, title, items = [], setItems, onClose, onSave }) => {
  const itemRows = useMemo(() => items.map((item) => ({ ...item, key: item.id })), [items]);

  return (
    <OModal
      title={title}
      helpLink=""
      width={600}
      centered
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
          btnLabel: 'Save',
          onClick: onSave,
        },
      ]}
    >
      <EditableTable
        columns={TColumns}
        dataSource={itemRows}
        handleSave={(key: any, name: any, value: any) => {
          setItems((prev) => prev.map((item) => (item.id === key ? { ...item, name: value } : item)));
        }}
      />
    </OModal>
  );
};

export default ConfigureItemModal;
