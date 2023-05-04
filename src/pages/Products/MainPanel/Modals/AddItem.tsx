import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { CloseOutlined } from '@ant-design/icons';
import { uuidv4 } from '@antv/xflow-core';
import { Input, List, message } from 'antd';
import { useState } from 'react';
import type { INewItemModalData } from '@/pages/Products/MainPanel/Modals/Tabs/BasicInfo';
import { useModel } from '@umijs/max';

interface IAddItemModal extends INewItemModalData {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const AddItemModal: React.FC<IAddItemModal> = ({ isOpen, title, items, type, setItems, onClose, onSave }) => {
  const [name, setName] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  const { createTag, updateStatusTag, tags } = useModel('tag');

  const handleAdd = () => {
    if (type === 'tag') {
      createTag({ name }).then(() => {
        setName(null);
        messageApi.open({
          type: 'success',
          content: 'Successful to create a tag',
        });
      });
    } else {
      setItems((prev) => [...prev, { id: uuidv4(), name }]);
      setName(null);
    }
  };

  const handleDelete = (id) => {
    if (type === 'tag') {
      updateStatusTag(id).then(() => {
        setItems((prev) => prev.filter((item) => item.id !== id));
        messageApi.open({
          type: 'success',
          content: 'Successful to delete a tag',
        });
      });
    } else {
      setItems((prev) => prev.filter((item) => item.id !== id));
    }
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
      ]}
    >
      <>
        {contextHolder}
        <Input
          placeholder="Enter a valid name"
          addonAfter={<OButton btnText="Add" style={{ height: 30 }} onClick={() => handleAdd()} />}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onPressEnter={() => handleAdd()}
        />
        <List
          dataSource={type === 'tag' ? tags : items}
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
