import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { EditableTable } from '@/utils/components/EditableTable';

interface IEditBrand {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const EditBrand: React.FC<IEditBrand> = ({ isOpen, onClose, onSave }) => {
  const { brands, setBrands } = useModel('brand');

  const TColumns = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
      editable: true,
    },
  ];

  return (
    <OModal
      title={'Config Brand'}
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
        dataSource={brands.map((brand) => ({ ...brand, key: brand.id }))}
        handleSave={(key: any, name: any, value: any) => {
          setBrands((prev) =>
            prev.map((item) => (item.id === key ? { ...item, name: value } : item)),
          );
        }}
      />
    </OModal>
  );
};

export default EditBrand;
