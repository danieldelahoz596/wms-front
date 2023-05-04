import { OModal } from '@/components/Globals/OModal';
import { EditableTable } from '@/components/Globals/EditableTable';
import { useMemo } from 'react';
import { useModel } from '@umijs/max';
import type { INewItemModalData } from './Tabs/BasicInfo';
import { message } from 'antd';

interface IConfigureItemModal extends INewItemModalData {
  isOpen: boolean;
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

const ConfigureItemModal: React.FC<IConfigureItemModal> = ({ isOpen, title, items = [], type, setItems, onClose, onSave }) => {
  const { tags, updateTag } = useModel('tag');
  const [messageApi, contextHolder] = message.useMessage();

  const itemRows = useMemo(() => {
    if (type === 'tag') return tags.map((item) => ({ ...item, key: item.id }));
    return items.map((item) => ({ ...item, key: item.id }));
  }, [items, type, tags]);

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
        <EditableTable
          columns={TColumns}
          dataSource={itemRows}
          handleSave={(key: any, name: any, value: any) => {
            if (type === 'tag') {
              updateTag({ id: key, name: value }).then(() => {
                messageApi.open({
                  type: 'success',
                  content: 'Successful to update the tag',
                });
              });
            } else {
              setItems((prev) => prev.map((item) => (item.id === key ? { ...item, name: value } : item)));
            }
          }}
        />
      </>
    </OModal>
  );
};

export default ConfigureItemModal;
