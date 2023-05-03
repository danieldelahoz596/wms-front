import { OModal } from '@/components/Globals/OModal';
import { EditableTable } from '@/components/Globals/EditableTable';
import { useMemo, useState } from 'react';
import { ToolTwoTone } from '@ant-design/icons';
import AddCategoryModal from './AddCategory';

interface IConfigCategoryModal {
  isOpen: boolean;
  title: string;
  items: any[];
  setItems: (value: any) => void;
  onClose: () => void;
  onSave: () => void;
}

const ConfigCategoryModal: React.FC<IConfigCategoryModal> = ({ isOpen, title, items = [], setItems, onClose, onSave }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const itemRows = useMemo(() => items.map((item) => ({ ...item, key: item.id })), [items]);

  const TColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <>
          <ToolTwoTone onClick={() => setShowModal(true)} />
        </>
      ),
    },
  ];

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
      <>
        <EditableTable
          columns={TColumns}
          dataSource={itemRows}
          handleSave={(key: any, name: any, value: any) => {
            setItems((prev) => prev.map((item) => (item.id === key ? { ...item, name: value } : item)));
          }}
        />

        <AddCategoryModal
          isOpen={showModal}
          items={[]}
          setItems={() => {}}
          onClose={() => setShowModal(false)}
          onSave={() => setShowModal(false)}
        />
      </>
    </OModal>
  );
};

export default ConfigCategoryModal;
