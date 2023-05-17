import { OModal } from '@/components/Globals/OModal';
import { useMemo, useState } from 'react';
import { ToolTwoTone } from '@ant-design/icons';
import AddCategoryModal from './AddCategory';
import { Table } from 'antd';
import { useModel } from '@umijs/max';
import type { INewItemModalData } from './Tabs/BasicInfo';

interface IConfigCategoryModal extends INewItemModalData {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ConfigCategoryModal: React.FC<IConfigCategoryModal> = ({ isOpen, title, onClose, onSave }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { categories } = useModel('category');

  const itemRows = useMemo(() => categories.map((item) => ({ ...item, key: item.id })), [categories]);

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
      render: (_, record) => (
        <>
          <ToolTwoTone
            onClick={() => {
              setShowModal(true);
              setSelectedItem(categories.find((item) => item.id === record.key));
            }}
          />
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
        <Table columns={TColumns} dataSource={itemRows} pagination={{ hideOnSinglePage: true }} />

        <AddCategoryModal
          isOpen={showModal}
          title="Edit a category"
          type="category"
          item={selectedItem}
          onClose={() => setShowModal(false)}
          onSave={() => setShowModal(false)}
        />
      </>
    </OModal>
  );
};

export default ConfigCategoryModal;
