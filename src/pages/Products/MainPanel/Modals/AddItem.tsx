import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { CloseOutlined } from '@ant-design/icons';
import { Input, List, message } from 'antd';
import { useState } from 'react';
import type { INewItemModalData } from '@/pages/Products/MainPanel/Modals/Tabs/BasicInfo';
import { useModel } from '@umijs/max';

interface IAddItemModal extends INewItemModalData {
  isOpen: boolean;
  onClose: () => void;
}

const AddItemModal: React.FC<IAddItemModal> = ({ isOpen, title, type, onClose }) => {
  const [name, setName] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  const { brands, createBrand, updateBrandStatus } = useModel('brand');
  const { labels, createLabel, updateLabelStatus } = useModel('label');

  const handleAdd = () => {
    if (type === 'brand') {
      createBrand({ name }).then(() => {
        messageApi.success('Successful to create a brand');
        setName(null);
      });
    } else if (type === 'label') {
      createLabel({ name }).then(() => {
        messageApi.success('Successful to create a label');
        setName(null);
      });
    }
  };

  const handleDelete = (id) => {
    if (type === 'brand') {
      updateBrandStatus(id).then(() => {
        messageApi.success('Successful to delete a brand');
      });
    } else if (type === 'label') {
      updateLabelStatus(id).then(() => {
        messageApi.success('Successful to delete a label');
      });
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
          // onPressEnter={() => handleAdd()}
        />
        <List
          dataSource={type === 'brand' ? brands : type === 'label' ? labels : []}
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
