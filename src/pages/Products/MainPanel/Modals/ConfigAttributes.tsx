import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { EditableTable } from '@/components/Globals/EditableTable';
import { Input } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import type IAttribute from '@/interfaces/IAttribute';
import { useModel } from '@umijs/max';

interface IConfigAttributesModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: (items: any[]) => void;
  attributeGroupId: number;
}

const TColumns = [
  {
    title: '',
    dataIndex: 'name',
    key: 'name',
    editable: true,
  },
];

const ConfigAttributesModal: React.FC<IConfigAttributesModal> = ({ isOpen, onClose, onSave, attributeGroupId }) => {
  const [items, setItems] = useState<IAttribute[]>([]);
  const [attribute, setAttribute] = useState(null);
  const { attributeGroups, createAttribute, updateAttribute } = useModel('attributeGroups');

  useEffect(() => {
    if (attributeGroupId) {
      const selectedAttributeGroup = attributeGroups.find((group) => group.id === attributeGroupId);
      setItems(selectedAttributeGroup.items);
    }
  }, [attributeGroups, attributeGroupId]);

  const itemRows = useMemo(() => items?.map((item) => ({ key: item.id, name: item.name })), [items]);

  return (
    <OModal
      title="Add or Edit attributes"
      helpLink="/help/products/create/productvariations"
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
          onClick: () => onSave(items),
        },
      ]}
    >
      <>
        <Input
          placeholder="Enter a valid attribute"
          addonAfter={
            <OButton
              btnText="Add"
              onClick={() => {
                setAttribute(null);
                createAttribute(attribute, attributeGroupId);
              }}
              style={{ height: 30 }}
            />
          }
          value={attribute}
          onChange={(e) => setAttribute(e.target.value)}
        />
        <EditableTable
          columns={TColumns}
          dataSource={itemRows}
          handleSave={(key: any, name: any, value: any) => {
            updateAttribute(key, value);
          }}
          props={{ showHeader: false }}
        />
      </>
    </OModal>
  );
};

export default ConfigAttributesModal;
