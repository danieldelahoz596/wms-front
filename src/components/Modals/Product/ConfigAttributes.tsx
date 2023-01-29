import { useEffect, useState } from 'react';
import { Input, Button } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { EditableTable } from '@/utils/components/EditableTable';

interface IConfigAttributes {
  isOpen: boolean;
  onClose: () => void;
  onSave: (items: any[]) => void;
  attributes: any[];
}

const ConfigAttributes: React.FC<IConfigAttributes> = ({ isOpen, onClose, onSave, attributes }) => {
  const [items, setItems] = useState([]);
  const [attribute, setAttribute] = useState(null);

  useEffect(() => {
    setItems(attributes);
  }, [attributes]);

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
      title={'Add or Edit attributes'}
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
            <Button
              size="small"
              type="primary"
              onClick={() => {
                setAttribute(null);
                setItems([...items, attribute]);
              }}
              style={{ height: 30 }}
            >
              Add
            </Button>
          }
          value={attribute}
          onChange={(e) => setAttribute(e.target.value)}
        />
        <EditableTable
          columns={TColumns}
          dataSource={items.map((item, index) => ({ key: index, name: item }))}
          handleSave={(key: any, name: any, value: any) => {
            setItems(items.map((item, index) => (index === key ? value : item)));
          }}
          props={{ showHeader: false }}
        />
      </>
    </OModal>
  );
};

export default ConfigAttributes;
