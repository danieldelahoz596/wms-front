import React from 'react';
import { Descriptions } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';

interface IShowProductFieldsModal {
  isOpen: boolean;
  onClose: () => void;
}

const ShowProductFieldsModal: React.FC<IShowProductFieldsModal> = ({ isOpen, onClose }) => {
  const { selectedProducts } = useModel('product');

  return (
    <OModal
      title="Core Product Details"
      width={1000}
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
      <Descriptions title={selectedProducts[0]?.name} column={24}>
        <Descriptions.Item label="Type" span={12}>
          {selectedProducts[0]?.type}
        </Descriptions.Item>
        <Descriptions.Item label="Master SKU" span={12}>
          {selectedProducts[0]?.master_sku}
        </Descriptions.Item>
        <Descriptions.Item label="Brand" span={8}>
          {selectedProducts[0]?.brand}
        </Descriptions.Item>
        <Descriptions.Item label="Categories" span={8}>
          {selectedProducts[0]?.categories}
        </Descriptions.Item>
        <Descriptions.Item label="Label" span={8}>
          {selectedProducts[0]?.label}
        </Descriptions.Item>
        <Descriptions.Item label="Channel" span={24}>
          {selectedProducts[0]?.channel}
        </Descriptions.Item>
        <Descriptions.Item label="Description" span={24}>
          {selectedProducts[0]?.description}
        </Descriptions.Item>
      </Descriptions>
    </OModal>
  );
};

export default ShowProductFieldsModal;
