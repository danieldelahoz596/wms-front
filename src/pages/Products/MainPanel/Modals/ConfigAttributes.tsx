import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { EditableTable } from '@/components/Globals/EditableTable';
import { Input } from 'antd';
import { useEffect, useMemo, useState } from 'react';

interface IConfigAttributesModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: (items: any[]) => void;
  attributes: any[];
}

const TColumns = [
  {
    title: '',
    dataIndex: 'name',
    key: 'name',
    editable: true,
  },
];

const ConfigAttributesModal: React.FC<IConfigAttributesModal> = ({ isOpen, onClose, onSave, attributes }) => {
  const [items, setItems] = useState([]);
  const [attribute, setAttribute] = useState(null);

  useEffect(() => {
    setItems(attributes);
  }, [attributes]);

  const itemRows = useMemo(() => items.map((item, index) => ({ key: index, name: item })), [items]);

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
                setItems([...items, attribute]);
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
            setItems(items.map((item, index) => (index === key ? value : item)));
          }}
          props={{ showHeader: false }}
        />
      </>
    </OModal>
  );
};

export default ConfigAttributesModal;
