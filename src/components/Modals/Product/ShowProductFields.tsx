import { useMemo } from 'react';
import { Table } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

interface IShowProductFieldsModal {
  isOpen: boolean;
  onClose: () => void;
}

const TColumns = [
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Name',
  },
  {
    key: 'value',
    dataIndex: 'value',
    title: 'Value',
  },
  {
    key: 'show_on_grid',
    dataIndex: 'show_on_grid',
    title: 'Show On Grid',
    render: (value) => (value ? <CheckOutlined /> : <CloseOutlined />),
  },
  {
    key: 'required',
    dataIndex: 'required',
    title: 'Required',
    render: (value) => (value ? <CheckOutlined /> : <CloseOutlined />),
  },
];

const ShowProductFieldsModal: React.FC<IShowProductFieldsModal> = ({ isOpen, onClose }) => {
  const { selectedProducts } = useModel('product');
  const { fieldTypes } = useModel('customProductFields');

  const dataSource = useMemo(
    () =>
      selectedProducts[0]?.custom_fields.map((customField) => ({
        key: customField.field_id,
        value: customField.value,
        ...fieldTypes.find((item) => item.id === customField.field_id),
      })),
    [selectedProducts, fieldTypes],
  );

  return (
    <OModal
      title="Core Product Details"
      width={800}
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
      <Table columns={TColumns} dataSource={dataSource} pagination={{ hideOnSinglePage: true }} />
    </OModal>
  );
};

export default ShowProductFieldsModal;
