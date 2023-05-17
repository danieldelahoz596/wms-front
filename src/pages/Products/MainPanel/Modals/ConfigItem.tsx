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

const ConfigureItemModal: React.FC<IConfigureItemModal> = ({ isOpen, title, type, onClose }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { brands, updateBrand } = useModel('brand');
  const { labels, updateLabel } = useModel('label');

  const itemRows = useMemo(() => {
    if (type === 'brand') return brands.map((brand) => ({ ...brand, key: brand.id }));
    else if (type === 'label') return labels.map((label) => ({ ...label, key: label.id }));
    return [];
  }, [type, brands, labels]);

  const handleSave = (key: any, name: any, value: any) => {
    if (type === 'brand') {
      updateBrand(key, { name: value }).then(() => {
        messageApi.success('Successful to update the brand');
      });
    } else if (type === 'label') {
      updateLabel(key, { name: value }).then(() => {
        messageApi.success('Successful to update the label');
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
        <EditableTable columns={TColumns} dataSource={itemRows} handleSave={handleSave} />
      </>
    </OModal>
  );
};

export default ConfigureItemModal;
