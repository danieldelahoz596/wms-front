import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { EditableTable } from '@/components/Globals/EditableTable';
import { useMemo } from 'react';

interface IEditBrandModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const EditBrandModal: React.FC<IEditBrandModal> = ({ isOpen, onClose, onSave }) => {
  const { brands, setBrands } = useModel('brand');

  const TColumns = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
      editable: true,
    },
  ];

  const brandRows = useMemo(() => brands.map((brand) => ({ ...brand, key: brand.id })), [brands]);

  return (
    <OModal
      title="Config Brand"
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
        dataSource={brandRows}
        handleSave={(key: any, name: any, value: any) => {
          setBrands((prev) => prev.map((item) => (item.id === key ? { ...item, name: value } : item)));
        }}
      />
    </OModal>
  );
};

export default EditBrandModal;
