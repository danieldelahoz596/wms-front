import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { CloseOutlined } from '@ant-design/icons';
import { uuidv4 } from '@antv/xflow-core';
import { Input, List } from 'antd';
import { useState } from 'react';

interface IAddItemModal {
  isOpen: boolean;
  title: string;
  items: any[];
  setItems: (value: any) => void;
  onClose: () => void;
  onSave: () => void;
}

const AddItemModal: React.FC<IAddItemModal> = ({ isOpen, title, items, setItems, onClose, onSave }) => {
  const [name, setName] = useState(null);

  const handleAdd = () => {
    setItems((prev) => [...prev, { id: uuidv4(), name }]);
    setName(null);
  };

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

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
        <Input
          placeholder="Enter a valid name"
          addonAfter={<OButton btnText="Add" style={{ height: 30 }} onClick={() => handleAdd()} />}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onPressEnter={() => handleAdd()}
        />
        <List
          dataSource={items}
          renderItem={(item) => (
            <List.Item
              actions={[<CloseOutlined key="list-edit" onClick={() => handleDelete(item.id)} style={{ color: 'blue' }} />]}
            >
              <List.Item.Meta title={<>{item.name}</>} />
            </List.Item>
          )}
          style={{
            height: 400,
            overflow: 'auto',
            padding: '0 16px',
            border: '1px solid rgba(140, 140, 140, 0.35)',
          }}
        />
      </>
    </OModal>
  );
};

export default AddItemModal;
